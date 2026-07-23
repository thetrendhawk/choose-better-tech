import React, { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AffiliateButton } from "./AffiliateButton";
import { getAffiliateLink } from "../../utils/affiliate";

vi.mock("../../utils/affiliate", () => ({
  getAffiliateLink: vi.fn()
}));

const mockedGetAffiliateLink = vi.mocked(getAffiliateLink);

function resolvedLink(overrides: Partial<ReturnType<typeof getAffiliateLink>> = {}) {
  return {
    provider: "optery" as const,
    network: "PartnerStack / Optery Affiliate Program",
    status: "ACTIVE" as const,
    destination: "/api/go/optery",
    internalFallback: "/reviews/optery-review",
    disclosureRequired: true,
    trackingEnabled: true,
    lastVerified: "2026-07-20",
    href: "/api/go/optery",
    isExternal: false,
    isAffiliateLink: true,
    ...overrides
  };
}

describe("AffiliateButton interactions", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
    window.history.replaceState({}, "", "/reviews/optery-review");
    window.gtag = vi.fn();
    mockedGetAffiliateLink.mockReturnValue(resolvedLink());
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
  });

  function renderButton() {
    act(() => {
      root.render(
        <MemoryRouter>
          <AffiliateButton provider="optery">Try Optery</AffiliateButton>
        </MemoryRouter>
      );
    });
    return container.querySelector("a") as HTMLAnchorElement;
  }

  it("emits exactly one complete affiliate_click event for a genuine affiliate CTA", () => {
    const button = renderButton();

    act(() => button.dispatchEvent(new MouseEvent("click", { bubbles: true })));

    expect(window.gtag).toHaveBeenCalledTimes(1);
    expect(window.gtag).toHaveBeenCalledWith("event", "affiliate_click", {
      affiliate_provider: "optery",
      affiliate_destination: "/api/go/optery",
      link_url: "/api/go/optery",
      link_text: "Try Optery",
      page_path: "/reviews/optery-review"
    });
  });

  it("does not emit for a non-affiliate external AffiliateButton", () => {
    mockedGetAffiliateLink.mockReturnValue(resolvedLink({
      trackingEnabled: false,
      isAffiliateLink: false,
      isExternal: true,
      href: "https://example.com/official"
    }));
    const button = renderButton();

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("does not emit for an internal fallback AffiliateButton", () => {
    mockedGetAffiliateLink.mockReturnValue(resolvedLink({
      status: "PENDING",
      trackingEnabled: false,
      isAffiliateLink: false,
      isExternal: false,
      href: "/reviews/optery-review"
    }));
    const button = renderButton();

    act(() => button.dispatchEvent(new MouseEvent("click", { bubbles: true })));

    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("emits for keyboard activation using Enter", () => {
    const button = renderButton();

    button.focus();
    button.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(window.gtag).toHaveBeenCalledTimes(1);
  });

  it("does not interrupt activation when gtag is missing or throws", () => {
    const button = renderButton();

    window.gtag = undefined;
    expect(() => button.dispatchEvent(new MouseEvent("click", { bubbles: true }))).not.toThrow();

    window.gtag = vi.fn(() => {
      throw new Error("analytics unavailable");
    });
    expect(() => button.dispatchEvent(new MouseEvent("click", { bubbles: true }))).not.toThrow();
  });

  it("does not count the same native activation event twice", () => {
    const button = renderButton();
    const event = new MouseEvent("click", { bubbles: true });

    button.dispatchEvent(event);
    button.dispatchEvent(event);

    expect(window.gtag).toHaveBeenCalledTimes(1);
  });
});
