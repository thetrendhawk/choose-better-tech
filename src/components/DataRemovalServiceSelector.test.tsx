import React, { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DataRemovalServiceSelectorPage } from "../pages/DataRemovalServiceSelectorPage";
import { trackEvent } from "../utils/analytics";

vi.mock("../utils/analytics", () => ({ trackEvent: vi.fn() }));

describe("data-removal selector reader journey", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
    vi.mocked(trackEvent).mockReset();
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => root.render(<MemoryRouter><DataRemovalServiceSelectorPage /></MemoryRouter>));
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  it("exposes every research route without generating an interaction on load", () => {
    const paths = [...container.querySelectorAll("a")].map((link) => link.getAttribute("href"));
    expect(paths).toEqual(expect.arrayContaining(["/reviews/incogni-review", "/reviews/optery-review", "/reviews/deleteme-review", "/are-data-removal-services-worth-it"]));
    expect(trackEvent).not.toHaveBeenCalled();
  });

  it("measures the selected priority and its review handoff without a conversion event", () => {
    act(() => container.querySelector<HTMLInputElement>('input[value="proof"]')!.click());
    const result = container.querySelector<HTMLAnchorElement>("aside a")!;
    expect(result.textContent).toBe("Read the Optery review");
    expect(result.getAttribute("href")).toBe("/reviews/optery-review");
    act(() => result.click());
    expect(vi.mocked(trackEvent).mock.calls).toEqual([
      ["selector_choice", { tool_name: "data_removal", page_path: "/tools/data-removal-service-selector", priority: "proof" }],
      ["selector_review_click", { tool_name: "data_removal", page_path: "/tools/data-removal-service-selector", priority: "proof", review_path: "/reviews/optery-review" }]
    ]);
  });

  it("keeps the manual option usable when optional analytics throws", () => {
    vi.mocked(trackEvent).mockImplementation(() => { throw new Error("Analytics unavailable"); });
    act(() => container.querySelector<HTMLInputElement>('input[value="control"]')!.click());
    const result = container.querySelector<HTMLAnchorElement>("aside a")!;
    expect(result.textContent).toBe("Read the manual opt-out guide");
    expect(result.getAttribute("href")).toBe("/are-data-removal-services-worth-it");
    expect(() => act(() => result.click())).not.toThrow();
  });
});
