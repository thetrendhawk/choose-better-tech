import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { URL } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";
import { createOpteryRedirectHandler } from "../api/go/optery.js";
import { DIST_DIR, outputPathForRoute } from "./static-output.mjs";

const routes = new Set(APP_ROUTES);
const opteryHandler = createOpteryRedirectHandler(() => ({}));
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

const sendFile = async (response, filePath, status = 200) => {
  const body = await readFile(filePath);
  response.writeHead(status, { "content-type": contentTypes[extname(filePath)] ?? "application/octet-stream" });
  response.end(body);
};

export function createRouteTestServer() {
  return createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? "/", "http://127.0.0.1");
      const pathname = url.pathname;
      if (pathname === "/api/go/optery") {
        opteryHandler(request, response);
        return;
      }
      if (pathname !== "/" && pathname.endsWith("/") && routes.has(pathname.replace(/\/+$/, ""))) {
        response.writeHead(308, { location: pathname.replace(/\/+$/, "") + url.search });
        response.end();
        return;
      }
      if (routes.has(pathname)) {
        await sendFile(response, outputPathForRoute(pathname));
        return;
      }
      const relative = normalize(pathname).replace(/^[/\\]+/, "");
      const filePath = join(DIST_DIR, relative);
      const info = await stat(filePath).catch(() => null);
      if (info?.isFile() && filePath.startsWith(DIST_DIR)) {
        await sendFile(response, filePath);
        return;
      }
      await sendFile(response, join(DIST_DIR, "404.html"), 404);
    } catch {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end("Internal test server error");
    }
  });
}
