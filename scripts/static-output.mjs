import { dirname, join, resolve } from "node:path";

export const ROOT_DIR = resolve(".");
export const DIST_DIR = join(ROOT_DIR, "dist");
export const SERVER_DIR = join(ROOT_DIR, ".prerender", "server");
export const SITE_URL = (process.env.SITE_URL ?? "https://choosebettertech.com").replace(/\/$/, "");

export const outputPathForRoute = (route) =>
  route === "/" ? join(DIST_DIR, "index.html") : join(DIST_DIR, route.slice(1) + ".html");

export const routeForOutputPath = (route) => route === "/" ? "index.html" : route.slice(1) + ".html";

export const ensureInsideDist = (filePath) => {
  const relative = filePath.slice(DIST_DIR.length);
  if (!relative.startsWith("\\") && !relative.startsWith("/")) throw new Error(`Output escaped dist: ${filePath}`);
  return filePath;
};

export const ensureOutputDirectory = (filePath) => dirname(ensureInsideDist(filePath));
