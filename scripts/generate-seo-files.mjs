import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const defaultSiteUrl = "https://choosebettertech.thrwds.com";
const siteUrl = (process.env.SITE_URL ?? defaultSiteUrl).replace(/\/$/, "");
const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(rootDir, "public");

const routes = [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/affiliate-disclosure",
  "/guides/best-vpns-for-beginners",
  "/guides/how-vpns-work",
  "/guides/free-vpn-vs-paid",
  "/guides/vpn-buying-guide",
  "/guides/vpn-myths",
  "/guides/is-proton-vpn-free-good-enough",
  "/comparisons/nordvpn-vs-protonvpn",
  "/reviews/nordvpn-review",
  "/reviews/proton-vpn-review"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await mkdir(publicDir, { recursive: true });
await Promise.all([
  writeFile(join(publicDir, "sitemap.xml"), sitemap),
  writeFile(join(publicDir, "robots.txt"), robots)
]);
