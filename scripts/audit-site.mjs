/* global fetch, document */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { URL } from "node:url";
import { chromium, request } from "playwright";
import { DEFAULT_SITEMAP_URL, THIRD_PARTY_ALLOWLIST, VIEWPORTS, classifyResponse, hasBlockingIssues, normalizeUrl, parseSitemap, renderMarkdownReport, summarizeIssues } from "./siteAudit.mjs";

const sitemapUrl = process.env.AUDIT_SITEMAP_URL ?? DEFAULT_SITEMAP_URL;
const outputDir = resolve(process.env.AUDIT_OUTPUT_DIR ?? "audit-artifacts/site");
const firstPartyOrigin = new URL(sitemapUrl).origin;
const startedAt = new Date();
const sitemapResponse = await fetch(sitemapUrl);
if (!sitemapResponse.ok) throw new Error(`Sitemap request failed: ${sitemapResponse.status} ${sitemapResponse.statusText}`);
const urls = [...new Set(parseSitemap(await sitemapResponse.text(), sitemapUrl))];
if (!urls.length) throw new Error("Sitemap contained no URLs.");

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ serviceWorkers: "block" });
const requestContext = await request.newContext();
const sitemapSet = new Set(urls);
const issues = [];
const pages = [];
const internalLinks = new Set();
const addIssue = (issue) => issues.push({ severity: "error", ...issue });

for (const url of urls) {
  const pageResult = { url, viewports: { desktop: { issueCount: 0 }, mobile: { issueCount: 0 } } };
  pages.push(pageResult);
  for (const [viewportName, viewport] of Object.entries(VIEWPORTS)) {
    const page = await context.newPage();
    await page.setViewportSize(viewport);
    const pageIssues = [];
    const record = (issue) => { const fullIssue = { severity: "error", url, viewport: viewportName, ...issue }; pageIssues.push(fullIssue); issues.push(fullIssue); };
    page.on("console", (message) => { if (message.type() === "error") record({ type: "console-error", message: message.text() }); });
    page.on("pageerror", (error) => record({ type: "page-error", message: error.message }));
    page.on("requestfailed", (failedRequest) => { const classification = classifyResponse(failedRequest.url(), firstPartyOrigin, THIRD_PARTY_ALLOWLIST); record({ type: "request-failed", severity: classification.severity, message: `${failedRequest.method()} ${failedRequest.url()} — ${failedRequest.failure()?.errorText ?? "unknown failure"}`, requestUrl: failedRequest.url(), firstParty: classification.firstParty }); });
    page.on("response", (response) => {
      if (response.status() < 400) return;
      const classification = classifyResponse(response.url(), firstPartyOrigin, THIRD_PARTY_ALLOWLIST);
      record({ type: "http-error-response", severity: classification.severity, status: response.status(), message: `${response.status()} ${response.statusText()} ${response.url()}`, responseUrl: response.url(), firstParty: classification.firstParty });
    });
    let navigationResponse;
    try { navigationResponse = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 }); await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => {}); }
    catch (error) { record({ type: "navigation-failure", message: error.message }); }
    if (navigationResponse?.status() >= 400) record({ type: "navigation-http-error", status: navigationResponse.status(), message: `Navigation returned ${navigationResponse.status()}` });
    if (navigationResponse) pageResult.viewports[viewportName].status = navigationResponse.status();
    if (navigationResponse) {
      const metadata = await page.evaluate(() => ({ title: document.title.trim(), canonicals: [...document.querySelectorAll('link[rel="canonical"]')].map((link) => link.href), textLength: document.body?.innerText.trim().length ?? 0, rootChildren: document.querySelector("#root")?.children.length ?? 0, links: [...document.querySelectorAll("a[href]")].map((link) => link.href) }));
      if (!metadata.title) record({ type: "missing-title", message: "Document title is missing." });
      if (!metadata.canonicals.length) record({ type: "missing-canonical", message: "Canonical URL is missing." });
      const canonicalUrls = [...new Set(metadata.canonicals.map((canonical) => normalizeUrl(canonical, url)))];
      pageResult.canonicalUrls = canonicalUrls;
      if (canonicalUrls.length > 1) record({ type: "duplicate-canonical-mismatch", message: `Multiple canonical URLs found: ${canonicalUrls.join(", ")}` });
      if (metadata.textLength === 0 || metadata.rootChildren === 0) record({ type: "blank-render", message: "Page rendered without visible content." });
      for (const href of metadata.links) { const normalized = normalizeUrl(href, url); if (new URL(normalized).origin === firstPartyOrigin) internalLinks.add(normalized); }
    }
    pageResult.viewports[viewportName].issueCount = pageIssues.length;
    await page.close();
  }
}

const canonicalOwners = new Map();
for (const page of pages) for (const canonical of page.canonicalUrls ?? []) canonicalOwners.set(canonical, [...(canonicalOwners.get(canonical) ?? []), page.url]);
for (const [canonical, owners] of canonicalOwners) if (new Set(owners).size > 1) addIssue({ type: "duplicate-canonical-mismatch", url: canonical, message: `Canonical URL is shared by multiple sitemap pages: ${[...new Set(owners)].join(", ")}` });

for (const link of internalLinks) {
  if (sitemapSet.has(link)) continue;
  try { const response = await requestContext.get(link, { timeout: 30000, maxRedirects: 5 }); if (response.status() >= 400) addIssue({ type: "broken-internal-link", url: link, status: response.status(), message: `Internal link returned ${response.status()}` }); }
  catch (error) { addIssue({ type: "broken-internal-link", url: link, message: error.message }); }
}
await browser.close();
await requestContext.dispose();
const report = { sitemapUrl, generatedAt: startedAt.toISOString(), urlCount: urls.length, pages, issues, summary: summarizeIssues(issues) };
await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, "site-audit.json"), JSON.stringify(report, null, 2) + "\n");
await writeFile(resolve(outputDir, "site-audit.md"), renderMarkdownReport(report));
console.log(`Audited ${urls.length} URLs at ${Object.keys(VIEWPORTS).length} viewports.`);
console.log(`Issues: ${report.summary.total} (${report.summary.bySeverity.error} errors, ${report.summary.bySeverity.warning} warnings, ${report.summary.bySeverity.info} info).`);
console.log(`Reports: ${outputDir}`);
process.exitCode = hasBlockingIssues(issues) ? 1 : 0;
