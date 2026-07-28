import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Real files/functions win. Canonical lowercase URLs rewrite to flat generated
// HTML, slash variants redirect once, and every unknown URL receives the
// generated noindex 404 document with a real 404 status.
export const buildVercelConfig = (routes) => {
  const nonRoot = routes.filter((route) => route !== "/").map((route) => escapeRegExp(route.slice(1)));
  const knownPattern = nonRoot.join("|");
  return {
    $schema: "https://openapi.vercel.sh/vercel.json",
    routes: [
      { handle: "filesystem" },
      {
        src: `^/(${knownPattern})/+$`,
        headers: { Location: "/$1" },
        status: 308,
        caseSensitive: true
      },
      { src: "^/$", dest: "/index.html", caseSensitive: true },
      { src: `^/(${knownPattern})$`, dest: "/$1.html", caseSensitive: true },
      { src: "/(.*)", status: 404, dest: "/404.html" }
    ]
  };
};

const isMain = import.meta.url === pathToFileURL(process.argv[1] ?? "").href;
if (isMain) {
  const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
  await writeFile(join(rootDir, "vercel.json"), JSON.stringify(buildVercelConfig(APP_ROUTES), null, 2) + "\n");
}
