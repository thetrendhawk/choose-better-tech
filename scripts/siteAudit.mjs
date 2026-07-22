import { URL } from "node:url";

export const DEFAULT_SITEMAP_URL = "https://choosebettertech.com/sitemap.xml";
export const VIEWPORTS = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844, isMobile: true } };
// Keep this explicit and small. Add a hostname only with a documented reason.
export const THIRD_PARTY_ALLOWLIST = new Set(["analytics.google.com"]);

export function normalizeUrl(value, baseUrl) {
  const url = new URL(value, baseUrl);
  url.hash = "";
  return url.toString().replace(/\/$/, "") || url.origin;
}

export function parseSitemap(xml, sitemapUrl = DEFAULT_SITEMAP_URL) {
  return [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) => normalizeUrl(match[1].trim(), sitemapUrl)).filter(Boolean);
}

export function classifyResponse(url, firstPartyOrigin, allowlist = THIRD_PARTY_ALLOWLIST) {
  const hostname = new URL(url).hostname;
  const firstParty = new URL(url).origin === firstPartyOrigin;
  const allowed = !firstParty && [...allowlist].some((allowedHostname) => hostname === allowedHostname || hostname.endsWith(`.${allowedHostname}`));
  return { firstParty, allowed, severity: allowed ? "info" : "error" };
}

export function summarizeIssues(issues) {
  const bySeverity = { error: 0, warning: 0, info: 0 };
  const byType = {};
  for (const issue of issues) {
    bySeverity[issue.severity] = (bySeverity[issue.severity] ?? 0) + 1;
    byType[issue.type] = (byType[issue.type] ?? 0) + 1;
  }
  return { total: issues.length, bySeverity, byType };
}

export function hasBlockingIssues(issues) { return issues.some((issue) => issue.severity === "error"); }

export function renderMarkdownReport(report) {
  const lines = [`# Production Site Audit`, ``, `- Sitemap: ${report.sitemapUrl}`, `- Generated: ${report.generatedAt}`, `- URLs checked: ${report.urlCount}`, `- Viewports: desktop and mobile`, `- Result: ${report.summary.bySeverity.error ? "FAIL" : "PASS"}`, ``, `## Summary`, ``, `- Total issues: ${report.summary.total}`, `- Errors: ${report.summary.bySeverity.error}`, `- Warnings: ${report.summary.bySeverity.warning}`, `- Allowed third-party/info: ${report.summary.bySeverity.info}`, ``, `### By error type`, ``, ...Object.entries(report.summary.byType).map(([type, count]) => `- ${type}: ${count}`), ``];
  if (!report.issues.length) lines.push("No issues detected.", "");
  else { lines.push("## Issues", "", ...report.issues.map((issue) => `- **${issue.severity.toUpperCase()} · ${issue.type}** — ${issue.message}${issue.url ? ` ([${issue.url}](${issue.url}))` : ""}`), ""); }
  lines.push("## Pages", "", "| URL | Desktop | Mobile |", "| --- | --- | --- |");
  for (const page of report.pages) lines.push(`| ${page.url} | ${page.viewports.desktop.status ?? "navigation failed"} (${page.viewports.desktop.issueCount} issues) | ${page.viewports.mobile.status ?? "navigation failed"} (${page.viewports.mobile.issueCount} issues) |`);
  return lines.join("\n");
}
