import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// filesystem first -> real files 200; exact known routes -> index.html 200;
// unknown fallback -> index.html with HTTP 404 (SPA still renders NotFoundPage).
export const buildVercelConfig = (routes) => {
  const nonRoot = routes.filter((route) => route !== "/").map((route) => escapeRegExp(route.slice(1)));
  return {
    $schema: "https://openapi.vercel.sh/vercel.json",
    routes: [
      { handle: "filesystem" },
      { src: "^/$", dest: "/index.html" },
      { src: `^/(?:${nonRoot.join("|")})/?$`, dest: "/index.html" },
      { src: "/(.*)", status: 404, dest: "/index.html" }
    ]
  };
};

const isMain = import.meta.url === pathToFileURL(process.argv[1] ?? "").href;
if (isMain) {
  const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
  await writeFile(join(rootDir, "vercel.json"), JSON.stringify(buildVercelConfig(APP_ROUTES), null, 2) + "\n");
}
