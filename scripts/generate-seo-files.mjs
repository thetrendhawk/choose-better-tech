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
  "/about/how-we-review-software",
  "/contact",
  "/privacy",
  "/terms",
  "/affiliate-disclosure",
  "/vpn",
  "/password-managers",
  "/reviews",
  "/comparisons",
  "/guides/best-vpns-for-beginners",
  "/guides/how-vpns-work",
  "/guides/free-vpn-vs-paid",
  "/guides/vpn-buying-guide",
  "/guides/vpn-myths",
  "/guides/is-proton-vpn-free-good-enough",
  "/comparisons/nordvpn-vs-protonvpn",
  "/comparisons/nordvpn-vs-surfshark",
  "/comparisons/proton-vpn-vs-surfshark",
  "/comparisons/1password-vs-nordpass",
  "/comparisons/proton-pass-vs-nordpass",
  "/comparisons/1password-vs-proton-pass",
  "/comparisons/bitwarden-vs-1password",
  "/comparisons/bitwarden-vs-proton-pass",
  "/comparisons/bitwarden-vs-nordpass",
  "/reviews/nordvpn-review",
  "/reviews/proton-vpn-review",
  "/reviews/surfshark-review",
  "/reviews/1password-review",
  "/reviews/bitwarden-review",
  "/reviews/nordpass-review",
  "/reviews/proton-pass-review",
  "/reviews/roboform-review"
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
