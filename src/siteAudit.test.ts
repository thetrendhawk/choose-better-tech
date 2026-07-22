import { describe, expect, it } from "vitest";
import { classifyResponse, hasBlockingIssues, normalizeUrl, parseSitemap, summarizeIssues } from "../scripts/siteAudit.mjs";

describe("site audit helpers", () => {
  it("parses and normalizes sitemap URLs", () => {
    expect(parseSitemap("<url><loc>https://example.com/one#section</loc></url><url><loc>https://example.com/</loc></url>")).toEqual(["https://example.com/one", "https://example.com"]);
    expect(normalizeUrl("/page#top", "https://example.com")).toBe("https://example.com/page");
  });

  it("classifies first-party and explicitly allowed third-party responses", () => {
    expect(classifyResponse("https://example.com/app.js", "https://example.com").severity).toBe("error");
    expect(classifyResponse("https://cdn.example.net/app.js", "https://example.com", new Set(["example.net"])).severity).toBe("info");
  });

  it("summarizes blocking issues", () => {
    const issues = [{ type: "missing-title", severity: "error" }, { type: "console-error", severity: "error" }, { type: "http-error-response", severity: "info" }];
    expect(summarizeIssues(issues)).toEqual({ total: 3, bySeverity: { error: 2, warning: 0, info: 1 }, byType: { "missing-title": 1, "console-error": 1, "http-error-response": 1 } });
    expect(hasBlockingIssues(issues)).toBe(true);
  });
});
