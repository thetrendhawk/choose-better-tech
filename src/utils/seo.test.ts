import { describe, expect, it } from "vitest";
import { buildSeo, canonicalUrlForPath, formatPageTitle } from "./seo";

describe("SEO helpers", () => {
  it("formats homepage and route titles without duplicate site names", () => {
    expect(formatPageTitle("Choose Better Tech")).toBe("Choose Better Tech");
    expect(formatPageTitle("Example")).toBe("Example | Choose Better Tech");
  });

  it("builds normalized absolute canonical URLs", () => {
    expect(canonicalUrlForPath("/")).toBe("https://choosebettertech.com/");
    expect(canonicalUrlForPath("//reviews/totalav-review/")).toBe("https://choosebettertech.com/reviews/totalav-review");
  });

  it("provides complete indexable metadata defaults", () => {
    expect(buildSeo({ title: "Example", description: "Example description", path: "/example" })).toEqual({
      canonicalUrl: "https://choosebettertech.com/example",
      description: "Example description",
      ogType: "website",
      pageTitle: "Example | Choose Better Tech",
      robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    });
  });

  it("can omit a canonical for the generated 404 page", () => {
    expect(buildSeo({
      title: "Page Not Found",
      description: "Missing",
      path: "/404?ignored=true",
      canonical: false,
      robots: "noindex,follow"
    })).toMatchObject({ canonicalUrl: undefined, robots: "noindex,follow" });
  });
});
