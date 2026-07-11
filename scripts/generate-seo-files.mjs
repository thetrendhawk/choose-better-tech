import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const defaultSiteUrl = "https://choosebettertech.com";
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
  "/data-removal",
  "/reviews",
  "/comparisons",
  "/are-data-removal-services-worth-it",
  "/are-vpns-worth-it",
  "/best-data-removal-services",
  "/best-free-password-managers",
  "/best-free-vpns",
  "/best-vpns-for-travel",
  "/best-password-managers-for-beginners",
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
  "/comparisons/incogni-vs-optery",
  "/comparisons/incogni-vs-deleteme",
  "/comparisons/optery-vs-deleteme",
  "/reviews/nordvpn-review",
  "/reviews/proton-vpn-review",
  "/reviews/surfshark-review",
  "/reviews/1password-review",
  "/reviews/bitwarden-review",
  "/reviews/nordpass-review",
  "/reviews/proton-pass-review",
  "/reviews/roboform-review",
  "/reviews/incogni-review",
  "/reviews/optery-review",
  "/reviews/deleteme-review"
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
