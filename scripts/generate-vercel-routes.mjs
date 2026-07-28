import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// High-level rewrites check the filesystem first, so real files and functions
// retain precedence. Vercel normalizes trailing slashes, canonical lowercase
// URLs rewrite to flat generated HTML, and unmatched paths use dist/404.html.
export const buildVercelConfig = (routes) => {
  const nonRoot = routes.filter((route) => route !== "/").map((route) => escapeRegExp(route.slice(1)));
  const knownPattern = nonRoot.join("|");
  return {
    $schema: "https://openapi.vercel.sh/vercel.json",
    trailingSlash: false,
    rewrites: [
      { source: "/", destination: "/index.html" },
      { source: `^/(${knownPattern})$`, destination: "/$1.html" }
    ]
  };
};

const isMain = import.meta.url === pathToFileURL(process.argv[1] ?? "").href;
if (isMain) {
  const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
  await writeFile(join(rootDir, "vercel.json"), JSON.stringify(buildVercelConfig(APP_ROUTES), null, 2) + "\n");
}
