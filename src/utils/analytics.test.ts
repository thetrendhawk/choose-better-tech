import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const SCRIPT_SELECTOR = "#ga4-gtag";

const toArray = (entry: unknown): unknown[] => Array.from(entry as ArrayLike<unknown>);
const dataLayer = (): unknown[] => (window.dataLayer ?? []) as unknown[];
const pageViewEvents = (): unknown[][] =>
  dataLayer()
    .map(toArray)
    .filter((entry) => entry[0] === "event" && entry[1] === "page_view");
const configEntries = (): unknown[][] => dataLayer().map(toArray).filter((entry) => entry[0] === "config");

async function freshModule() {
  vi.resetModules();
  return import("./analytics");
}

beforeEach(() => {
  document.head.innerHTML = "";
  document.title = "Test Page";
  delete window.gtag;
  delete window.dataLayer;
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("google analytics gtag transmission", () => {
  it("limits production collection to the canonical site hostnames", async () => {
    const analytics = await freshModule();
    expect(analytics.shouldCollectAnalytics("choosebettertech.com")).toBe(true);
    expect(analytics.shouldCollectAnalytics("www.choosebettertech.com")).toBe(true);
  });

  it("initializes only once and inserts the gtag script only once", async () => {
    const analytics = await freshModule();
    analytics.initializeGoogleAnalytics();
    analytics.initializeGoogleAnalytics();
    expect(document.querySelectorAll(SCRIPT_SELECTOR)).toHaveLength(1);
  });

  it("pushes commands as array-like arguments objects, not plain arrays", async () => {
    const analytics = await freshModule();
    analytics.initializeGoogleAnalytics();
    expect(Array.isArray(window.dataLayer)).toBe(true);
    const firstCommand = dataLayer()[0];
    // gtag.js requires the arguments object: array-like but NOT a real Array.
    expect(Array.isArray(firstCommand)).toBe(false);
    expect(toArray(firstCommand)[0]).toBe("js");
  });

  it("uses send_page_view:false on the initial config so no automatic page_view fires", async () => {
    const analytics = await freshModule();
    analytics.initializeGoogleAnalytics();
    const config = configEntries()[0];
    expect(config[1]).toBe("G-3CPY0G0G65");
    expect(config[2]).toEqual({ send_page_view: false });
  });

  it("emits exactly one page_view event for the first route", async () => {
    const analytics = await freshModule();
    analytics.initializeGoogleAnalytics();
    analytics.trackPageView("/first");
    const events = pageViewEvents();
    expect(events).toHaveLength(1);
    const params = events[0][2] as Record<string, unknown>;
    expect(params.page_path).toBe("/first");
    expect(params.page_title).toBe("Test Page");
    expect(String(params.page_location)).toContain("/first");
  });

  it("emits one new page_view when navigating to a different route", async () => {
    const analytics = await freshModule();
    analytics.initializeGoogleAnalytics();
    analytics.trackPageView("/first");
    analytics.trackPageView("/second");
    const events = pageViewEvents();
    expect(events).toHaveLength(2);
    expect((events[1][2] as Record<string, unknown>).page_path).toBe("/second");
  });

  it("does not emit a duplicate page_view for the same route", async () => {
    const analytics = await freshModule();
    analytics.initializeGoogleAnalytics();
    analytics.trackPageView("/same");
    analytics.trackPageView("/same");
    expect(pageViewEvents()).toHaveLength(1);
  });

  it("emits named conversion events with their parameters", async () => {
    const analytics = await freshModule();
    analytics.initializeGoogleAnalytics();
    analytics.trackEvent("newsletter_signup", { method: "mailchimp" });
    const event = dataLayer().map(toArray).find((entry) => entry[0] === "event" && entry[1] === "newsletter_signup");
    expect(event?.[2]).toEqual({ method: "mailchimp" });
  });
});
