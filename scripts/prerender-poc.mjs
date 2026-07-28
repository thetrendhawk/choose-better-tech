import { Buffer } from "node:buffer";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { JSDOM } from "jsdom";
import { APP_ROUTES } from "../src/routes.manifest.mjs";
import { POC_ROUTES } from "./prerender-poc-routes.mjs";

const SITE_URL = (process.env.SITE_URL ?? "https://choosebettertech.com").replace(/\/$/, "");
const rootDir = resolve(".");
const outputDir = join(rootDir, ".prerender", "output");

const routeOutputPath = (route) => route === "/"
  ? join(outputDir, "index.html")
  : join(outputDir, route.slice(1), "index.html");

const streamToString = async (stream) => {
  let html = "";
  for await (const chunk of stream) html += Buffer.from(chunk).toString("utf8");
  return html;
};

const readClientAssets = async () => {
  const template = await readFile(join(rootDir, "dist", "index.html"), "utf8");
  const scriptMatch = template.match(/<script[^>]+type="module"[^>]+src="([^"]+)"/i)
    ?? template.match(/<script[^>]+src="([^"]+)"[^>]+type="module"/i);
  const styleHrefs = [...template.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/gi)].map((match) => match[1]);
  if (!scriptMatch || styleHrefs.length === 0) throw new Error("Could not resolve the built client script and stylesheet.");
  return { scriptSrc: scriptMatch[1], styleHrefs };
};

const validateHtml = (route, html, assets) => {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  const exactlyOne = (selector, label) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length !== 1) throw new Error(`${route}: expected exactly one ${label}; found ${elements.length}.`);
    return elements[0];
  };

  exactlyOne("title", "title");
  exactlyOne('meta[name="description"]', "meta description");
  const canonical = exactlyOne('link[rel="canonical"]', "canonical");
  exactlyOne('meta[name="robots"]', "robots tag");
  exactlyOne('meta[property="og:title"]', "Open Graph title");
  exactlyOne('meta[property="og:description"]', "Open Graph description");
  exactlyOne('meta[property="og:type"]', "Open Graph type");
  exactlyOne('meta[property="og:url"]', "Open Graph URL");
  exactlyOne('meta[name="twitter:card"]', "Twitter card");
  exactlyOne('meta[name="twitter:title"]', "Twitter title");
  exactlyOne('meta[name="twitter:description"]', "Twitter description");
  exactlyOne("h1", "H1");

  const expectedCanonical = SITE_URL + route;
  if (canonical.getAttribute("href") !== expectedCanonical) {
    throw new Error(`${route}: canonical was ${canonical.getAttribute("href")}; expected ${expectedCanonical}.`);
  }
  if (html.includes("Loading page...")) throw new Error(`${route}: Suspense fallback leaked into initial HTML.`);

  const textLength = document.body.textContent?.replace(/\s+/g, " ").trim().length ?? 0;
  if (textLength < 500) throw new Error(`${route}: initial HTML text is not substantive (${textLength} characters).`);

  const internalLinks = [...document.querySelectorAll('a[href^="/"]')];
  if (internalLinks.length < 10) throw new Error(`${route}: expected global crawlable navigation; found ${internalLinks.length} internal links.`);
  if (route !== "/" && internalLinks.length < 12) {
    throw new Error(`${route}: expected contextual internal links in addition to global navigation.`);
  }

  for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
    JSON.parse(script.textContent ?? "");
  }
  if (route !== "/" && document.querySelectorAll('script[type="application/ld+json"]').length === 0) {
    throw new Error(`${route}: expected existing route-specific JSON-LD in initial HTML.`);
  }

  if (document.querySelector(`script[type="module"][src="${assets.scriptSrc}"]`) === null) {
    throw new Error(`${route}: client entry script is missing.`);
  }
  for (const href of assets.styleHrefs) {
    if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`) === null) {
      throw new Error(`${route}: client stylesheet ${href} is missing.`);
    }
  }

  return {
    canonical: canonical.getAttribute("href"),
    h1: document.querySelector("h1")?.textContent?.trim(),
    internalLinkCount: internalLinks.length,
    jsonLdCount: document.querySelectorAll('script[type="application/ld+json"]').length,
    textLength,
    title: document.title
  };
};

const manifest = new Set(APP_ROUTES);
for (const route of POC_ROUTES) {
  if (!manifest.has(route)) throw new Error(`POC route is not in APP_ROUTES: ${route}`);
}
if (new Set(POC_ROUTES).size !== POC_ROUTES.length) throw new Error("POC route list contains duplicates.");

const assets = await readClientAssets();
const serverEntryUrl = pathToFileURL(join(rootDir, ".prerender", "server", "entry-server.js")).href;
const { renderRoute } = await import(serverEntryUrl);
const results = [];

for (const route of POC_ROUTES) {
  const { prelude } = await renderRoute(route, assets);
  const html = await streamToString(prelude);
  const withDoctype = html.startsWith("<!DOCTYPE") ? html : "<!doctype html>" + html;
  const outputPath = routeOutputPath(route);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, withDoctype);
  results.push({ route, outputPath, ...validateHtml(route, withDoctype, assets) });
}

await writeFile(join(outputDir, "summary.json"), JSON.stringify({ assets, routes: results }, null, 2) + "\n");
console.log(`Prerendered and validated ${results.length} proof-of-concept routes.`);
for (const result of results) {
  console.log(`${result.route} - ${result.title}; ${result.textLength} text chars; ${result.internalLinkCount} internal links; ${result.jsonLdCount} JSON-LD blocks`);
}
