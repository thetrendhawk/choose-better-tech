/* global fetch */
import { APP_ROUTES } from "../src/routes.manifest.mjs";
import { createRouteTestServer } from "./route-test-server.mjs";

const server = createRouteTestServer();
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const address = server.address();
if (!address || typeof address === "string") throw new Error("Could not start route test server.");
const origin = `http://127.0.0.1:${address.port}`;

const request = (path, options) => fetch(origin + path, { redirect: "manual", ...options });

try {
  for (const route of APP_ROUTES) {
    const direct = await request(route + "?source=matrix");
    if (direct.status !== 200) throw new Error(`${route}: expected 200; found ${direct.status}.`);
    if (route !== "/") {
      const slash = await request(route + "/?source=matrix");
      if (slash.status !== 308 || slash.headers.get("location") !== route + "?source=matrix") {
        throw new Error(`${route}/: expected one-hop 308; found ${slash.status} ${slash.headers.get("location")}.`);
      }
      const repeatedSlash = await request(route + "///?source=matrix");
      if (repeatedSlash.status !== 308 || repeatedSlash.headers.get("location") !== route + "?source=matrix") {
        throw new Error(`${route}///: expected one-hop 308; found ${repeatedSlash.status} ${repeatedSlash.headers.get("location")}.`);
      }
      const uppercase = await request(route.toUpperCase());
      if (uppercase.status !== 404) throw new Error(`${route.toUpperCase()}: expected 404; found ${uppercase.status}.`);
    }
  }

  for (const path of ["/unknown", "/unknown.php", "/reviews/not-real", "/ABOUT"]) {
    const response = await request(path);
    if (response.status !== 404) throw new Error(`${path}: expected 404; found ${response.status}.`);
    const html = await response.text();
    if (!html.includes('content="noindex,follow"') || /rel="canonical"/.test(html)) throw new Error(`${path}: wrong 404 metadata.`);
  }

  for (const path of ["/assets/", "/sitemap.xml", "/robots.txt", "/favicon.ico", "/google79ab951f5b0cff2f.html", "/344797edf51f48f38e9963412eff7a60.txt"]) {
    const response = await request(path);
    if (path === "/assets/") {
      if (response.status !== 404) throw new Error("/assets/ directory request must not expose a listing.");
    } else if (response.status !== 200) {
      throw new Error(`${path}: expected 200; found ${response.status}.`);
    }
  }

  const api = await request("/api/go/optery");
  if (api.status !== 503 || api.headers.get("x-robots-tag") !== "noindex, nofollow") {
    throw new Error(`API preservation check failed: ${api.status}.`);
  }
  console.log(`Local routing matrix passed for ${APP_ROUTES.length} canonical paths, slash redirects, uppercase variants, unknown routes, static files, and API handling.`);
} finally {
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}
