import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";

const PUBLIC_ROUTE_PATTERN = /^\/(?:[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)(?:\/[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)*$/;

// High-level rewrites check the filesystem first, so real files and functions
// retain precedence. Vercel normalizes trailing slashes, canonical lowercase
// URLs rewrite to flat generated HTML, and unmatched paths use dist/404.html.
export const buildVercelConfig = (routes) => {
  const sources = new Set();
  const foldedSources = new Set();
  const destinations = new Set();
  const foldedDestinations = new Set();
  const rewrites = routes.map((source) => {
    if (typeof source !== "string" || /[?#]/.test(source)) {
      throw new Error(`Malformed public route cannot be emitted to Vercel: ${source}`);
    }
    if (source !== "/" && source.split("/").some((segment) => segment.includes("."))) {
      throw new Error(`Public routes cannot contain file extensions: ${source}`);
    }
    if (source !== "/" && !PUBLIC_ROUTE_PATTERN.test(source)) {
      throw new Error(`Malformed public route cannot be emitted to Vercel: ${source}`);
    }
    const destination = source === "/" ? "/index.html" : `${source}.html`;
    const foldedSource = source.toLowerCase();
    const foldedDestination = destination.toLowerCase();
    if (sources.has(source)) throw new Error(`Duplicate Vercel rewrite source: ${source}`);
    if (foldedSources.has(foldedSource)) throw new Error(`Case-insensitive Vercel rewrite source collision: ${source}`);
    if (destinations.has(destination)) throw new Error(`Duplicate Vercel rewrite destination: ${destination}`);
    if (foldedDestinations.has(foldedDestination)) {
      throw new Error(`Case-insensitive Vercel rewrite destination collision: ${destination}`);
    }
    if (source !== foldedSource) throw new Error(`Public routes must be lowercase: ${source}`);
    sources.add(source);
    foldedSources.add(foldedSource);
    destinations.add(destination);
    foldedDestinations.add(foldedDestination);
    return { source, destination };
  });
  return {
    $schema: "https://openapi.vercel.sh/vercel.json",
    trailingSlash: false,
    rewrites
  };
};

const isMain = import.meta.url === pathToFileURL(process.argv[1] ?? "").href;
if (isMain) {
  const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
  await writeFile(join(rootDir, "vercel.json"), JSON.stringify(buildVercelConfig(APP_ROUTES), null, 2) + "\n");
}
