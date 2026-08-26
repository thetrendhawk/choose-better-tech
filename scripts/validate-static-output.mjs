import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { URL } from "node:url";
import { JSDOM } from "jsdom";
import { APP_ROUTES } from "../src/routes.manifest.mjs";
import { DIST_DIR, SITE_URL, outputPathForRoute } from "./static-output.mjs";

const one = (document, selector, label, route) => {
  const elements = document.querySelectorAll(selector);
  if (elements.length !== 1) throw new Error(`${route}: expected one ${label}; found ${elements.length}.`);
  return elements[0];
};

const validateJsonLd = (document, route) => {
  for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
    const value = JSON.parse(script.textContent ?? "");
    if (value === null || typeof value !== "object") throw new Error(`${route}: JSON-LD must contain an object or array.`);
  }
};

const validateLocalAssets = (document, route) => {
  const references = [
    ...document.querySelectorAll('script[src],link[href],img[src]')
  ].map((element) => element.getAttribute("src") ?? element.getAttribute("href"))
    .filter((value) => value?.startsWith("/") && !value.startsWith("//"));
  for (const reference of references) {
    const pathname = new URL(reference, SITE_URL).pathname;
    const filePath = join(DIST_DIR, pathname.replace(/^\/+/, ""));
    if (!existsSync(filePath)) throw new Error(`${route}: missing local asset ${pathname}.`);
  }
};

export function validateHtml(route, html, { notFound = false } = {}) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  one(document, "html", "html element", route);
  one(document, "head", "head element", route);
  one(document, "body", "body element", route);
  one(document, "title", "title", route);
  one(document, 'meta[name="description"]', "description", route);
  const robots = one(document, 'meta[name="robots"]', "robots tag", route).getAttribute("content");
  one(document, 'meta[property="og:title"]', "Open Graph title", route);
  one(document, 'meta[property="og:description"]', "Open Graph description", route);
  one(document, 'meta[name="twitter:card"]', "Twitter card", route);
  one(document, 'meta[name="twitter:title"]', "Twitter title", route);
  one(document, 'meta[name="twitter:description"]', "Twitter description", route);
  const h1 = one(document, "h1", "H1", route).textContent?.trim() ?? "";
  if (!h1) throw new Error(`${route}: H1 is empty.`);
  if (html.includes("Loading page...")) throw new Error(`${route}: Suspense fallback leaked into HTML.`);
  const textLength = document.body.textContent?.replace(/\s+/g, " ").trim().length ?? 0;
  if (textLength < 300) throw new Error(`${route}: initial text is not substantive (${textLength} characters).`);
  const internalLinks = document.querySelectorAll('a[href^="/"]').length;
  if (internalLinks < 5) throw new Error(`${route}: crawlable global navigation or recovery links are missing.`);

  const canonicals = document.querySelectorAll('link[rel="canonical"]');
  if (notFound) {
    if (canonicals.length !== 0) throw new Error("404: canonical must be omitted.");
    if (robots !== "noindex,follow") throw new Error(`404: robots must be noindex,follow; found ${robots}.`);
  } else {
    const canonical = one(document, 'link[rel="canonical"]', "canonical", route).getAttribute("href");
    if (canonical !== SITE_URL + route) throw new Error(`${route}: wrong canonical ${canonical}.`);
    if (new URL(canonical).search || new URL(canonical).hash) throw new Error(`${route}: canonical contains query or fragment.`);
    if (!robots?.startsWith("index,follow")) throw new Error(`${route}: public route is not indexable.`);
    one(document, 'meta[property="og:url"]', "Open Graph URL", route);
  }

  validateJsonLd(document, route);
  validateLocalAssets(document, route);
  return {
    route,
    title: document.title,
    h1,
    textLength,
    internalLinks,
    jsonLd: document.querySelectorAll('script[type="application/ld+json"]').length
  };
}

export async function validateStaticOutput() {
  if (APP_ROUTES.length !== 72 || new Set(APP_ROUTES).size !== 72) {
    throw new Error(`Expected 72 unique APP_ROUTES; found ${APP_ROUTES.length}.`);
  }
  const outputKeys = APP_ROUTES.map((route) => outputPathForRoute(route).toLowerCase());
  if (new Set(outputKeys).size !== outputKeys.length) throw new Error("Public routes produce duplicate output paths.");

  const results = [];
  for (const route of APP_ROUTES) {
    const filePath = outputPathForRoute(route);
    results.push(validateHtml(route, await readFile(filePath, "utf8")));
  }
  const notFoundPath = join(DIST_DIR, "404.html");
  results.push(validateHtml("/404", await readFile(notFoundPath, "utf8"), { notFound: true }));

  for (const result of results) {
    if (extname(outputPathForRoute(result.route === "/404" ? "/" : result.route)) !== ".html") {
      throw new Error(`${result.route}: static output does not use HTML.`);
    }
  }
  return results;
}

const isMain = import.meta.url === pathToFileURL(resolve(process.argv[1] ?? "")).href;
if (isMain) {
  const results = await validateStaticOutput();
  console.log(`Validated ${results.length - 1} public route files and generated 404.html.`);
  for (const result of results) {
    console.log(`${result.route} - ${result.textLength} text chars; ${result.internalLinks} internal links; ${result.jsonLd} JSON-LD blocks`);
  }
}
