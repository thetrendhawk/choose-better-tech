import { Buffer } from "node:buffer";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";
import { DIST_DIR, SERVER_DIR, ensureOutputDirectory, outputPathForRoute } from "./static-output.mjs";
import { validateStaticOutput } from "./validate-static-output.mjs";

const streamToString = async (stream) => {
  let html = "";
  for await (const chunk of stream) html += Buffer.from(chunk).toString("utf8");
  return html.startsWith("<!DOCTYPE") ? html : "<!doctype html>" + html;
};

const readClientAssets = async () => {
  const template = await readFile(join(DIST_DIR, "index.html"), "utf8");
  const scriptMatch = template.match(/<script[^>]+type="module"[^>]+src="([^"]+)"/i)
    ?? template.match(/<script[^>]+src="([^"]+)"[^>]+type="module"/i);
  const styleHrefs = [...template.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/gi)].map((match) => match[1]);
  if (!scriptMatch || styleHrefs.length === 0) throw new Error("Could not resolve built client assets.");
  return { scriptSrc: scriptMatch[1], styleHrefs };
};

const assets = await readClientAssets();
const serverEntry = await import(pathToFileURL(join(SERVER_DIR, "entry-server.js")).href);
const written = new Set();

for (const route of APP_ROUTES) {
  const outputPath = outputPathForRoute(route);
  const key = outputPath.toLowerCase();
  if (written.has(key)) throw new Error(`${route}: duplicate static output ${outputPath}.`);
  written.add(key);
  const { prelude } = await serverEntry.renderRoute(route, assets);
  const html = await streamToString(prelude);
  await mkdir(ensureOutputDirectory(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

const { prelude: notFoundPrelude } = await serverEntry.renderNotFound(assets);
await writeFile(join(DIST_DIR, "404.html"), await streamToString(notFoundPrelude));
const results = await validateStaticOutput();
await mkdir(join(resolve("."), ".prerender"), { recursive: true });
await writeFile(join(resolve("."), ".prerender", "summary.json"), JSON.stringify({ assets, routes: results }, null, 2) + "\n");
console.log(`Generated and validated static HTML for ${APP_ROUTES.length} public routes plus 404.html.`);
