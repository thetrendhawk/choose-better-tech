/* global document, Element, PopStateEvent, window */
import { chromium } from "playwright";
import { APP_ROUTES } from "../src/routes.manifest.mjs";
import { createRouteTestServer } from "./route-test-server.mjs";

const server = createRouteTestServer();
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const address = server.address();
if (!address || typeof address === "string") throw new Error("Could not start route test server.");
const localOrigin = `http://127.0.0.1:${address.port}`;
const productionOrigin = `http://choosebettertech.com:${address.port}`;
const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--host-resolver-rules=MAP choosebettertech.com 127.0.0.1"]
});

const interceptAnalytics = (context) =>
  context.route("https://www.googletagmanager.com/**", (route) =>
    route.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
const commands = (page) => page.evaluate(() => (window.dataLayer ?? []).map((item) => Array.from(item)));
const count = (items, command, event) =>
  items.filter((item) => item[0] === command && (event === undefined || item[1] === event)).length;

try {
  for (const route of APP_ROUTES) {
    const context = await browser.newContext();
    await interceptAnalytics(context);
    const page = await context.newPage();
    const errors = [];
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("requestfailed", (request) => {
      if (request.url().startsWith(productionOrigin)) errors.push(`request failed: ${request.url()}`);
    });
    const response = await page.goto(productionOrigin + route + "?preview-check=1", { waitUntil: "networkidle" });
    await page.waitForTimeout(50);
    if (response?.status() !== 200) throw new Error(`${route}: direct load returned ${response?.status()}.`);
    const result = await page.evaluate(() => ({
      canonical: [...document.querySelectorAll('link[rel="canonical"]')].map((node) => node.getAttribute("href")),
      descriptions: document.querySelectorAll('meta[name="description"]').length,
      h1: document.querySelector("h1")?.textContent?.trim(),
      loading: document.body.textContent?.includes("Loading page..."),
      robots: document.querySelectorAll('meta[name="robots"]').length,
      textLength: document.body.textContent?.replace(/\s+/g, " ").trim().length ?? 0,
      titles: document.querySelectorAll("title").length
    }));
    if (result.titles !== 1 || result.descriptions !== 1 || result.robots !== 1 || result.canonical.length !== 1) {
      throw new Error(`${route}: duplicate or missing hydrated metadata: ${JSON.stringify(result)}.`);
    }
    if (result.canonical[0] !== `https://choosebettertech.com${route}`) throw new Error(`${route}: hydrated canonical is wrong.`);
    if (!result.h1 || result.loading || result.textLength < 300) throw new Error(`${route}: hydrated content is incomplete.`);
    const analytics = await commands(page);
    if (count(analytics, "js") !== 1 || count(analytics, "config") !== 1 || count(analytics, "event", "page_view") !== 1) {
      throw new Error(`${route}: production hostname did not emit exactly one analytics initialization and page view.`);
    }
    if (errors.length) throw new Error(`${route}: browser errors: ${errors.join(" | ")}`);
    await context.close();
  }

  const nonProductionContext = await browser.newContext();
  const nonProductionPage = await nonProductionContext.newPage();
  const nonProductionResponse = await nonProductionPage.goto(localOrigin + "/", { waitUntil: "networkidle" });
  if (nonProductionResponse?.status() !== 200 || (await commands(nonProductionPage)).length !== 0) {
    throw new Error("Non-production hostname unexpectedly initialized analytics.");
  }
  await nonProductionContext.close();

  const navigationContext = await browser.newContext();
  await interceptAnalytics(navigationContext);
  const navigationPage = await navigationContext.newPage();
  const navigationErrors = [];
  navigationPage.on("console", (message) => { if (message.type() === "error") navigationErrors.push(message.text()); });
  navigationPage.on("pageerror", (error) => navigationErrors.push(error.message));
  await navigationPage.goto(productionOrigin + "/", { waitUntil: "networkidle" });
  await navigationPage.locator('a[href="/guides/how-to-choose-software"]').first().click();
  await navigationPage.waitForURL(productionOrigin + "/guides/how-to-choose-software");
  await navigationPage.locator('a[aria-label="Choose Better Tech home"]').click();
  await navigationPage.waitForURL(productionOrigin + "/");
  await navigationPage.locator('a[href="/reviews/totalav-review"]').first().click();
  await navigationPage.waitForURL(productionOrigin + "/reviews/totalav-review");
  const navigationMetadata = await navigationPage.evaluate(() => ({
    canonical: [...document.querySelectorAll('link[rel="canonical"]')].map((node) => node.getAttribute("href")),
    descriptions: document.querySelectorAll('meta[name="description"]').length,
    robots: document.querySelectorAll('meta[name="robots"]').length,
    titles: document.querySelectorAll("title").length
  }));
  if (navigationMetadata.titles !== 1 || navigationMetadata.descriptions !== 1 || navigationMetadata.robots !== 1 || navigationMetadata.canonical.length !== 1) {
    throw new Error(`Client navigation accumulated metadata: ${JSON.stringify(navigationMetadata)}.`);
  }
  const navigationCommands = await commands(navigationPage);
  if (count(navigationCommands, "js") !== 1 || count(navigationCommands, "config") !== 1 || count(navigationCommands, "event", "page_view") !== 3) {
    throw new Error("Client navigation duplicated analytics initialization or page views.");
  }

  await navigationPage.locator('a[aria-label="Choose Better Tech home"]').click();
  await navigationPage.waitForURL(productionOrigin + "/");
  await navigationPage.locator('a[href="/reviews/nordvpn-review"]').first().click();
  await navigationPage.waitForURL(productionOrigin + "/reviews/nordvpn-review");
  await navigationPage.evaluate(() => {
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a[href*="afflat3e3.com"]')) event.preventDefault();
    }, { capture: true, once: true });
  });
  await navigationPage.locator('a[href*="afflat3e3.com"]').first().click();
  if (count(await commands(navigationPage), "event", "affiliate_click") !== 1) {
    throw new Error("One affiliate activation did not produce exactly one event.");
  }
  await navigationPage.evaluate(() => {
    window.history.pushState({}, "", "/client-side-missing");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
  await navigationPage.locator("h1", { hasText: "Page not found" }).waitFor();
  const clientNotFoundMetadata = await navigationPage.evaluate(() => ({
    canonical: document.querySelectorAll('link[rel="canonical"]').length,
    robots: [...document.querySelectorAll('meta[name="robots"]')].map((node) => node.getAttribute("content"))
  }));
  if (clientNotFoundMetadata.canonical !== 0 || clientNotFoundMetadata.robots.length !== 1 || clientNotFoundMetadata.robots[0] !== "noindex,follow") {
    throw new Error(`Client-side 404 metadata is invalid: ${JSON.stringify(clientNotFoundMetadata)}.`);
  }
  if (navigationErrors.length) throw new Error(`Navigation browser errors: ${navigationErrors.join(" | ")}`);
  await navigationContext.close();

  const noJsContext = await browser.newContext({ javaScriptEnabled: false });
  const noJsPage = await noJsContext.newPage();
  for (const route of APP_ROUTES) {
    const response = await noJsPage.goto(localOrigin + route, { waitUntil: "domcontentloaded" });
    const result = await noJsPage.evaluate(() => ({
      h1: document.querySelector("h1")?.textContent?.trim(),
      links: document.querySelectorAll('a[href^="/"]').length,
      loading: document.body.textContent?.includes("Loading page..."),
      textLength: document.body.textContent?.replace(/\s+/g, " ").trim().length ?? 0
    }));
    if (response?.status() !== 200 || !result.h1 || result.links < 5 || result.loading || result.textLength < 300) {
      throw new Error(`${route}: JavaScript-disabled check failed: ${JSON.stringify(result)}.`);
    }
  }
  await noJsContext.close();

  const hydratedNotFoundContext = await browser.newContext();
  await interceptAnalytics(hydratedNotFoundContext);
  const hydratedNotFoundPage = await hydratedNotFoundContext.newPage();
  const hydratedNotFoundErrors = [];
  hydratedNotFoundPage.on("console", (message) => { if (message.type() === "error") hydratedNotFoundErrors.push(message.text()); });
  hydratedNotFoundPage.on("pageerror", (error) => hydratedNotFoundErrors.push(error.message));
  const hydratedNotFoundResponse = await hydratedNotFoundPage.goto(localOrigin + "/Definitely-Not-A-Route?x=1", { waitUntil: "networkidle" });
  const hydratedNotFound = await hydratedNotFoundPage.evaluate(() => ({
    canonical: document.querySelectorAll('link[rel="canonical"]').length,
    robots: [...document.querySelectorAll('meta[name="robots"]')].map((node) => node.getAttribute("content"))
  }));
  const unexpectedNotFoundErrors = hydratedNotFoundErrors.filter((message) => !/^Failed to load resource: the server responded with a status of 404/.test(message));
  if (hydratedNotFoundResponse?.status() !== 404 || hydratedNotFound.canonical !== 0 || hydratedNotFound.robots.length !== 1 || hydratedNotFound.robots[0] !== "noindex,follow" || unexpectedNotFoundErrors.length) {
    throw new Error(`Hydrated direct 404 is invalid: ${JSON.stringify({ hydratedNotFound, unexpectedNotFoundErrors })}.`);
  }
  await hydratedNotFoundContext.close();

  const notFoundContext = await browser.newContext({ javaScriptEnabled: false });
  const notFoundPage = await notFoundContext.newPage();
  const notFoundResponse = await notFoundPage.goto(localOrigin + "/Definitely-Not-A-Route?x=1", { waitUntil: "domcontentloaded" });
  const notFound = await notFoundPage.evaluate(() => ({
    canonical: document.querySelectorAll('link[rel="canonical"]').length,
    h1: document.querySelector("h1")?.textContent?.trim(),
    links: document.querySelectorAll('a[href^="/"]').length,
    robots: document.querySelector('meta[name="robots"]')?.getAttribute("content")
  }));
  if (notFoundResponse?.status() !== 404 || notFound.canonical !== 0 || notFound.robots !== "noindex,follow" || !notFound.h1 || notFound.links < 5) {
    throw new Error(`Generated 404 behavior is invalid: ${JSON.stringify(notFound)}.`);
  }
  await notFoundContext.close();

  console.log(`Hydration and JavaScript-disabled checks passed for all ${APP_ROUTES.length} routes.`);
  console.log("Production and non-production analytics hostname checks passed.");
  console.log("Client navigation metadata and analytics checks passed.");
  console.log("Single affiliate activation produced one tracking event.");
  console.log("Generated noindex,follow canonical-free 404 passed.");
} finally {
  await browser.close();
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}
