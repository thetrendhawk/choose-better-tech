import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
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

// Normalize CRLF to LF so Windows checkouts do not appear to differ from the
// LF content this generator emits.
export const normalizeEol = (text) => text.replace(/\r\n/g, "\n");
export const isEolEquivalent = (a, b) => normalizeEol(a) === normalizeEol(b);

// Deterministic write-if-changed: skips writing when the existing file already
// matches after line-ending normalization, preventing CRLF/LF churn on Windows.
export const writeIfChanged = async (filePath, content) => {
  if (existsSync(filePath)) {
    const existing = await readFile(filePath, "utf8");
    if (isEolEquivalent(existing, content)) {
      return false;
    }
  }
  await writeFile(filePath, content);
  return true;
};

const isMain = import.meta.url === pathToFileURL(process.argv[1] ?? "").href;
if (isMain) {
  const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
  const publicDir = join(rootDir, "public");
  await mkdir(publicDir, { recursive: true });
  await Promise.all([
    writeIfChanged(join(publicDir, "sitemap.xml"), buildSitemap(APP_ROUTES, siteUrl)),
    writeIfChanged(join(publicDir, "robots.txt"), buildRobots(siteUrl))
  ]);
}
