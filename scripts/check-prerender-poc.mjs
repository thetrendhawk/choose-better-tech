/* global document, Element, window */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { URL } from "node:url";
import { chromium } from "playwright";
import { POC_ROUTES } from "./prerender-poc-routes.mjs";

const rootDir = resolve(".");
const pocDir = join(rootDir, ".prerender", "output");
const distDir = join(rootDir, "dist");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

const pocFileForRoute = (route) => route === "/"
  ? join(pocDir, "index.html")
  : join(pocDir, route.slice(1), "index.html");

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", "http://127.0.0.1");
    let filePath;
    if (POC_ROUTES.includes(url.pathname)) {
      filePath = pocFileForRoute(url.pathname);
    } else {
      const relative = normalize(url.pathname).replace(/^[/\\]+/, "");
      filePath = join(distDir, relative);
      const info = await stat(filePath).catch(() => null);
      if (info?.isDirectory()) filePath = join(filePath, "index.html");
    }
    if (!filePath || !filePath.startsWith(rootDir)) throw new Error("Invalid request path.");
    const body = await readFile(filePath);
    response.writeHead(200, { "content-type": contentTypes[extname(filePath)] ?? "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
const address = server.address();
if (!address || typeof address === "string") throw new Error("Could not start the proof server.");
const origin = `http://127.0.0.1:${address.port}`;
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];

const analyticsCommands = async (page) => page.evaluate(() =>
  (window.dataLayer ?? []).map((item) => Array.from(item))
);

const commandCount = (commands, command, name) =>
  commands.filter((entry) => entry[0] === command && (name === undefined || entry[1] === name)).length;

try {
  for (const route of POC_ROUTES) {
    const context = await browser.newContext();
    await context.route("https://www.googletagmanager.com/**", (requestRoute) =>
      requestRoute.fulfill({ status: 200, contentType: "text/javascript", body: "" }),
    );
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    const firstPartyFailures = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    page.on("response", (response) => {
      if (response.url().startsWith(origin) && response.status() >= 400) {
        firstPartyFailures.push(`${response.status()} ${response.url()}`);
      }
    });

    await page.goto(origin + route, { waitUntil: "networkidle" });
    await page.waitForTimeout(50);

    const metadata = await page.evaluate(() => ({
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
      descriptionCount: document.querySelectorAll('meta[name="description"]').length,
      h1: document.querySelector("h1")?.textContent?.trim(),
      ogTitleCount: document.querySelectorAll('meta[property="og:title"]').length,
      robotsCount: document.querySelectorAll('meta[name="robots"]').length,
      title: document.title,
      titleCount: document.querySelectorAll("title").length,
      twitterTitleCount: document.querySelectorAll('meta[name="twitter:title"]').length
    }));
    const commands = await analyticsCommands(page);
    const hydrationErrors = consoleErrors.filter((message) => /hydrat|did not match|server rendered/i.test(message));

    if (metadata.titleCount !== 1 || metadata.descriptionCount !== 1 || metadata.robotsCount !== 1) {
      throw new Error(`${route}: metadata duplicated after hydration: ${JSON.stringify(metadata)}`);
    }
    if (metadata.ogTitleCount !== 1 || metadata.twitterTitleCount !== 1) {
      throw new Error(`${route}: social metadata duplicated after hydration.`);
    }
    if (commandCount(commands, "js") !== 1 || commandCount(commands, "config") !== 1 || commandCount(commands, "event", "page_view") !== 1) {
      throw new Error(`${route}: analytics initialized or fired an initial page view more than once.`);
    }
    if (hydrationErrors.length || consoleErrors.length || pageErrors.length || firstPartyFailures.length) {
      throw new Error(`${route}: browser errors: ${JSON.stringify({ consoleErrors, firstPartyFailures, hydrationErrors, pageErrors })}`);
    }

    results.push({ route, ...metadata, analyticsCommandCount: commands.length });
    await context.close();
  }

  const navigationContext = await browser.newContext();
  await navigationContext.route("https://www.googletagmanager.com/**", (requestRoute) =>
    requestRoute.fulfill({ status: 200, contentType: "text/javascript", body: "" }),
  );
  const navigationPage = await navigationContext.newPage();
  const navigationErrors = [];
  navigationPage.on("console", (message) => {
    if (message.type() === "error") navigationErrors.push(message.text());
  });
  navigationPage.on("pageerror", (error) => navigationErrors.push(error.message));
  await navigationPage.goto(origin + "/", { waitUntil: "networkidle" });
  await navigationPage.locator('a[href="/reviews/totalav-review"]').first().click();
  await navigationPage.waitForURL(origin + "/reviews/totalav-review");
  await navigationPage.waitForTimeout(50);
  const navigationMetadata = await navigationPage.evaluate(() => ({
    canonical: [...document.querySelectorAll('link[rel="canonical"]')].map((element) => element.getAttribute("href")),
    descriptions: document.querySelectorAll('meta[name="description"]').length,
    robots: document.querySelectorAll('meta[name="robots"]').length,
    titles: document.querySelectorAll("title").length
  }));
  const navigationCommands = await analyticsCommands(navigationPage);
  if (navigationMetadata.titles !== 1 || navigationMetadata.descriptions !== 1 || navigationMetadata.robots !== 1 || navigationMetadata.canonical.length !== 1) {
    throw new Error(`Client navigation accumulated metadata: ${JSON.stringify(navigationMetadata)}`);
  }
  if (navigationMetadata.canonical[0] !== "https://choosebettertech.com/reviews/totalav-review") {
    throw new Error(`Client navigation canonical did not update: ${navigationMetadata.canonical[0]}`);
  }
  if (commandCount(navigationCommands, "js") !== 1 || commandCount(navigationCommands, "config") !== 1 || commandCount(navigationCommands, "event", "page_view") !== 2) {
    throw new Error("Client navigation duplicated analytics initialization or page-view events.");
  }

  await navigationPage.locator('a[aria-label="Choose Better Tech home"]').click();
  await navigationPage.waitForURL(origin + "/");
  await navigationPage.locator('a[href="/reviews/nordvpn-review"]').first().click();
  await navigationPage.waitForURL(origin + "/reviews/nordvpn-review");
  await navigationPage.waitForTimeout(50);
  await navigationPage.evaluate(() => {
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a[href*="afflat3e3.com"]')) event.preventDefault();
    }, { capture: true, once: true });
  });
  await navigationPage.locator('a[href*="afflat3e3.com"]').first().click();
  const affiliateCommands = await analyticsCommands(navigationPage);
  if (commandCount(affiliateCommands, "event", "affiliate_click") !== 1) {
    throw new Error("A single affiliate activation did not produce exactly one affiliate_click event.");
  }
  if (navigationErrors.length) throw new Error(`Navigation browser errors: ${navigationErrors.join(" | ")}`);
  await navigationContext.close();

  for (const route of POC_ROUTES) {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    const response = await page.goto(origin + route, { waitUntil: "domcontentloaded" });
    const noJs = await page.evaluate(() => ({
      h1: document.querySelector("h1")?.textContent?.trim(),
      internalLinks: document.querySelectorAll('a[href^="/"]').length,
      textLength: document.body.textContent?.replace(/\s+/g, " ").trim().length ?? 0
    }));
    if (response?.status() !== 200 || !noJs.h1 || noJs.textLength < 500 || noJs.internalLinks < 10) {
      throw new Error(`${route}: JavaScript-disabled validation failed: ${JSON.stringify(noJs)}`);
    }
    await context.close();
  }
} finally {
  await browser.close();
  await new Promise((resolveClose, rejectClose) => server.close((error) => error ? rejectClose(error) : resolveClose()));
}

console.log(`Hydration and JavaScript-disabled checks passed for ${results.length} proof routes.`);
for (const result of results) {
  console.log(`${result.route} - ${result.title}; H1: ${result.h1}; analytics commands: ${result.analyticsCommandCount}`);
}
console.log("Client navigation metadata replacement passed.");
console.log("Analytics initialization, page views, and single affiliate activation were not duplicated.");
