import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";

const defaultSiteUrl = "https://choosebettertech.com";
const siteUrl = (process.env.SITE_URL ?? defaultSiteUrl).replace(/\/$/, "");

export const buildSitemap = (routes, base) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${base}${route}</loc></url>`).join("\n")}
</urlset>
`;

export const buildRobots = (base) => `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

const isMain = import.meta.url === pathToFileURL(process.argv[1] ?? "").href;
if (isMain) {
  const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
  const publicDir = join(rootDir, "public");
  await mkdir(publicDir, { recursive: true });
  await Promise.all([
    writeFile(join(publicDir, "sitemap.xml"), buildSitemap(APP_ROUTES, siteUrl)),
    writeFile(join(publicDir, "robots.txt"), buildRobots(siteUrl))
  ]);
}
