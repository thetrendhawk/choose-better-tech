import { describe, expect, it, vi } from "vitest";
import { createOpteryRedirectHandler } from "../../api/go/optery.js";
import { getOpteryAffiliateDestination, opteryAffiliateUnavailableMessage } from "./opteryAffiliateRedirect";

const validEnvironment = { OPTERY_AFFILIATE_URL: "https://get.optery.com/test-referral" };

function createResponse() {
  const headers = new Map<string, string>();

  return {
    headers,
    statusCode: 200,
    body: undefined as string | undefined,
    setHeader(name: string, value: string) {
      headers.set(name, value);
    },
    end(body?: string) {
      this.body = body;
    }
  };
}

describe("Optery affiliate redirect", () => {
  it("accepts only an HTTPS destination on the approved host", () => {
    expect(getOpteryAffiliateDestination(validEnvironment)?.toString()).toBe("https://get.optery.com/test-referral");
    expect(getOpteryAffiliateDestination({})).toBeNull();
    expect(getOpteryAffiliateDestination({ OPTERY_AFFILIATE_URL: "not a URL" })).toBeNull();
    expect(getOpteryAffiliateDestination({ OPTERY_AFFILIATE_URL: "http://get.optery.com/test-referral" })).toBeNull();
    expect(getOpteryAffiliateDestination({ OPTERY_AFFILIATE_URL: "https://example.invalid/test-referral" })).toBeNull();
  });

  it("redirects GET requests with a temporary, non-cacheable response", () => {
    const handler = createOpteryRedirectHandler(() => validEnvironment);
    const response = createResponse();

    handler({ method: "GET", query: { next: "https://example.invalid" } }, response);

    expect(response.statusCode).toBe(307);
    expect(response.headers.get("Location")).toBe("https://get.optery.com/test-referral");
    expect(response.headers.get("Cache-Control")).toContain("no-store");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
  });

  it("returns the same redirect headers without a response body for HEAD", () => {
    const handler = createOpteryRedirectHandler(() => validEnvironment);
    const response = createResponse();

    handler({ method: "HEAD" }, response);

    expect(response.statusCode).toBe(307);
    expect(response.headers.get("Location")).toBe("https://get.optery.com/test-referral");
    expect(response.body).toBeUndefined();
  });

  it("fails safely without a Location header when configuration is missing or invalid", () => {
    for (const environment of [{}, { OPTERY_AFFILIATE_URL: "http://get.optery.com/test-referral" }]) {
      const handler = createOpteryRedirectHandler(() => environment);
      const response = createResponse();

      handler({ method: "GET" }, response);

      expect(response.statusCode).toBe(503);
      expect(response.body).toBe(opteryAffiliateUnavailableMessage);
      expect(response.headers.has("Location")).toBe(false);
      expect(response.headers.get("Cache-Control")).toContain("no-store");
    }
  });

  it("does not log configuration or reflect a caller-controlled redirect", () => {
    const log = vi.spyOn(console, "log");
    const warn = vi.spyOn(console, "warn");
    const error = vi.spyOn(console, "error");
    const handler = createOpteryRedirectHandler(() => validEnvironment);
    const response = createResponse();

    handler({ method: "GET", query: { destination: "https://example.invalid" }, url: "/api/go/optery?destination=https://example.invalid" }, response);

    expect(response.headers.get("Location")).toBe("https://get.optery.com/test-referral");
    expect(log).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
    expect(error).not.toHaveBeenCalled();
    log.mockRestore();
    warn.mockRestore();
    error.mockRestore();
  });

  it("rejects unsupported request methods", () => {
    const handler = createOpteryRedirectHandler(() => validEnvironment);
    const response = createResponse();

    handler({ method: "POST" }, response);

    expect(response.statusCode).toBe(405);
    expect(response.headers.get("Allow")).toBe("GET, HEAD");
    expect(response.headers.has("Location")).toBe(false);
  });
});
