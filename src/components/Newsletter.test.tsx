import React, { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Newsletter } from "./Newsletter";

describe("newsletter submission measurement", () => {
  let container: HTMLDivElement;
  let root: Root;
  let form: HTMLFormElement;
  let email: HTMLInputElement;
  let submissions: number;
  let cancelledBeforeTestHarness: boolean;

  beforeEach(() => {
    // The existing Vitest config uses classic JSX; production uses automatic JSX.
    vi.stubGlobal("React", React);
    (globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
    window.history.replaceState({}, "", "/guides/how-long-does-data-removal-take");
    window.gtag = vi.fn();
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => root.render(<Newsletter />));
    form = container.querySelector("form")!;
    email = container.querySelector("input")!;
    submissions = 0;
    cancelledBeforeTestHarness = false;
    // Runs after React's delegated handler. Prevent network submission in tests only.
    document.addEventListener("submit", interceptSubmission);
  });

  function interceptSubmission(event: SubmitEvent) {
    submissions += 1;
    cancelledBeforeTestHarness = event.defaultPrevented;
    event.preventDefault();
  }

  afterEach(() => {
    document.removeEventListener("submit", interceptSubmission);
    act(() => root.unmount());
    container.remove();
    delete window.gtag;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("records one submission without claiming provider acceptance or sending the email", () => {
    email.value = "reader@example.com";
    act(() => form.requestSubmit());

    expect(submissions).toBe(1);
    expect(cancelledBeforeTestHarness).toBe(false);
    expect(window.gtag).toHaveBeenCalledExactlyOnceWith("event", "newsletter_submit", {
      method: "mailchimp",
      page_path: "/guides/how-long-does-data-removal-take"
    });
    expect(form.method).toBe("post");
    expect(form.target).toBe("_blank");
  });

  it.each(["", "not-an-email"])("does not record an invalid submission (%s)", (value) => {
    email.value = value;
    act(() => form.requestSubmit());
    expect(submissions).toBe(0);
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("preserves form submission when analytics is unavailable or throws", () => {
    email.value = "reader@example.com";
    window.gtag = undefined;
    act(() => form.requestSubmit());
    expect(submissions).toBe(1);
    expect(cancelledBeforeTestHarness).toBe(false);

    window.gtag = vi.fn(() => { throw new Error("Analytics unavailable"); });
    act(() => form.requestSubmit());
    expect(submissions).toBe(2);
    expect(cancelledBeforeTestHarness).toBe(false);
  });
});
