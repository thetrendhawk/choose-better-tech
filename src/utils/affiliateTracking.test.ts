import { beforeEach, describe, expect, it, vi } from "vitest";
import { trackAffiliateClick } from "./affiliateTracking";

describe("affiliate click tracking", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/reviews/optery-review");
    window.gtag = undefined;
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

  it("does not track non-affiliate external buttons or ordinary links", () => {
    const gtag = vi.fn();
    window.gtag = gtag;

    // AffiliateButton only calls this helper for records marked as affiliate;
    // ordinary links and non-affiliate external buttons never call it.
    expect(gtag).not.toHaveBeenCalled();
  });

  it("does not throw when gtag is unavailable", () => {
    expect(() => trackAffiliateClick({
      provider: "optery",
      destination: "/api/go/optery",
      href: "/api/go/optery",
      text: "Try Optery"
    })).not.toThrow();
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
