import { beforeEach, describe, expect, it, vi } from "vitest";
import { trackAffiliateClick } from "./affiliateTracking";

describe("affiliate click tracking", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/reviews/optery-review");
    window.gtag = undefined;
    delete window.dataLayer;
  });

  it("sends the complete event for a genuine affiliate CTA", () => {
    const gtag = vi.fn();
    window.gtag = gtag;

    trackAffiliateClick({
      provider: "optery",
      destination: "/api/go/optery",
      href: "/api/go/optery",
      text: "Try Optery"
    });

    expect(gtag).toHaveBeenCalledWith("event", "affiliate_click", {
      affiliate_provider: "optery",
      affiliate_destination: "/api/go/optery",
      link_url: "/api/go/optery",
      link_text: "Try Optery",
      page_path: "/reviews/optery-review"
    });
  });

  it("prefers gtag when both gtag and dataLayer are available", () => {
    const gtag = vi.fn();
    const dataLayer: unknown[] = [];
    window.gtag = gtag;
    window.dataLayer = dataLayer;

    trackAffiliateClick({ provider: "optery", destination: "/api/go/optery", href: "/api/go/optery", text: "Try Optery" });

    expect(gtag).toHaveBeenCalledTimes(1);
    expect(dataLayer).toHaveLength(0);
  });

  it("pushes one arguments-compatible affiliate_click command when gtag is absent", () => {
    const dataLayer: unknown[] = [];
    window.dataLayer = dataLayer;

    trackAffiliateClick({ provider: "optery", destination: "/api/go/optery", href: "/api/go/optery", text: "Try Optery" });

    expect(dataLayer).toHaveLength(1);
    expect(Array.isArray(dataLayer[0])).toBe(false);
    expect(Array.from(dataLayer[0] as ArrayLike<unknown>)).toEqual([
      "event",
      "affiliate_click",
      {
        affiliate_provider: "optery",
        affiliate_destination: "/api/go/optery",
        link_url: "/api/go/optery",
        link_text: "Try Optery",
        page_path: "/reviews/optery-review"
      }
    ]);
  });

  it("does not throw when gtag is unavailable", () => {
    expect(() => trackAffiliateClick({
      provider: "optery",
      destination: "/api/go/optery",
      href: "/api/go/optery",
      text: "Try Optery"
    })).not.toThrow();
  });

  it("does not throw when both gtag and dataLayer are unavailable", () => {
    expect(() => trackAffiliateClick({ provider: "optery", destination: "/api/go/optery", href: "/api/go/optery", text: "Try Optery" })).not.toThrow();
  });

  it("does not interrupt activation when gtag throws", () => {
    window.gtag = vi.fn(() => {
      throw new Error("analytics unavailable");
    });

    expect(() => trackAffiliateClick({ provider: "optery", destination: "/api/go/optery", href: "/api/go/optery", text: "Try Optery" })).not.toThrow();
  });

  it("does not send twice for the same activation through the dataLayer fallback", () => {
    const dataLayer: unknown[] = [];
    window.dataLayer = dataLayer;
    const event = new MouseEvent("click");
    const details = { provider: "optery" as const, destination: "/api/go/optery", href: "/api/go/optery", text: "Try Optery" };

    trackAffiliateClick(details, event);
    trackAffiliateClick(details, event);

    expect(dataLayer).toHaveLength(1);
  });

  it("does not send twice for the same activation event", () => {
    const gtag = vi.fn();
    window.gtag = gtag;
    const event = new MouseEvent("click");
    const details = { provider: "optery" as const, destination: "/api/go/optery", href: "/api/go/optery", text: "Try Optery" };

    trackAffiliateClick(details, event);
    trackAffiliateClick(details, event);

    expect(gtag).toHaveBeenCalledTimes(1);
  });
});
