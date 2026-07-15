import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { APP_ROUTES } from "./routes.manifest.mjs";
import { buildVercelConfig } from "../scripts/generate-vercel-routes.mjs";
import { buildSitemap, isEolEquivalent, writeIfChanged } from "../scripts/generate-seo-files.mjs";

const SITE_URL = "https://choosebettertech.com";

const appRouterPaths = (): Set<string> => {
  const source = readFileSync("src/App.tsx", "utf8");
  const paths = new Set<string>();
  if (/<Route\s+index\b/.test(source)) paths.add("/");
  for (const match of source.matchAll(/<Route\s+path="([^"]+)"/g)) {
    if (match[1] !== "*") paths.add("/" + match[1]);
  }
  return paths;
};

describe("route manifest", () => {
  it("contains unique, normalized paths", () => {
    expect(new Set(APP_ROUTES).size).toBe(APP_ROUTES.length);
    for (const route of APP_ROUTES) {
      expect(route.startsWith("/")).toBe(true);
      expect(route.includes("?")).toBe(false);
      expect(route.includes("//")).toBe(false);
      if (route !== "/") expect(route.endsWith("/")).toBe(false);
    }
  });

  it("includes the root exactly once", () => {
    expect(APP_ROUTES.filter((route) => route === "/")).toHaveLength(1);
  });

  it("covers every public React Router route defined in App.tsx", () => {
    const manifest = new Set(APP_ROUTES);
    const app = appRouterPaths();
    const missingFromManifest = [...app].filter((path) => !manifest.has(path));
    const missingFromApp = [...manifest].filter((path) => !app.has(path));
    expect(missingFromManifest).toEqual([]);
    expect(missingFromApp).toEqual([]);
  });
});

describe("generated Vercel routing", () => {
  const config = buildVercelConfig(APP_ROUTES);
  const routes = config.routes;
  const rootRoute = routes[1];
  const knownRoute = routes[2];

  it("puts the filesystem phase before application routing", () => {
    expect(routes[0]).toEqual({ handle: "filesystem" });
    const firstDestIndex = routes.findIndex((route) => route.dest === "/index.html");
    expect(firstDestIndex).toBeGreaterThan(0);
  });

  it("ends with the unknown-path 404 fallback", () => {
    expect(routes[routes.length - 1]).toEqual({ src: "/(.*)", status: 404, dest: "/index.html" });
  });

  it("represents every manifest route in the generated routing", () => {
    const rootRe = new RegExp(rootRoute.src);
    const knownRe = new RegExp(knownRoute.src);
    for (const route of APP_ROUTES) {
      const matched = route === "/" ? rootRe.test("/") : knownRe.test(route);
      expect(matched).toBe(true);
    }
  });

  it("configures case-sensitive matching on known routes", () => {
    expect(rootRoute.caseSensitive).toBe(true);
    expect(knownRoute.caseSensitive).toBe(true);
    expect(routes[routes.length - 1].caseSensitive).toBeUndefined();
  });

  it("routes an uppercase variant of a known path to the 404 fallback", () => {
    const rootRe = new RegExp(rootRoute.src);
    const knownRe = new RegExp(knownRoute.src);
    const fallbackRe = new RegExp(routes[routes.length - 1].src);
    expect(knownRe.test("/best-antivirus-software")).toBe(true);
    expect(knownRe.test("/Best-Antivirus-Software")).toBe(false);
    expect(rootRe.test("/Best-Antivirus-Software")).toBe(false);
    expect(fallbackRe.test("/Best-Antivirus-Software")).toBe(true);
  });

  it("matches known routes with anchored, regex-escaped patterns", () => {
    expect(knownRoute.src.startsWith("^/")).toBe(true);
    expect(knownRoute.src.endsWith("$")).toBe(true);
    const knownRe = new RegExp(knownRoute.src);
    expect(knownRe.test("/best-antivirus-softwareX")).toBe(false);
    expect(knownRe.test("/xabout")).toBe(false);
    expect(knownRe.test("/best-antivirus-software/")).toBe(true);
    expect(knownRe.test("/Best-Antivirus-Software")).toBe(false);
    expect(knownRe.test("/definitely-not-real")).toBe(false);
    expect(knownRe.test("/definitely-not-real.php")).toBe(false);
    const synthetic = buildVercelConfig(["/", "/a.b"]);
    const syntheticRe = new RegExp(synthetic.routes[2].src);
    expect(syntheticRe.test("/a.b")).toBe(true);
    expect(syntheticRe.test("/aXb")).toBe(false);
  });
});

describe("sitemap output", () => {
  it("matches the committed sitemap ignoring line endings", () => {
    const committed = readFileSync("public/sitemap.xml", "utf8");
    expect(isEolEquivalent(buildSitemap(APP_ROUTES, SITE_URL), committed)).toBe(true);
  });

  it("still lists exactly 64 URLs", () => {
    expect(APP_ROUTES).toHaveLength(64);
  });
});

describe("cross-platform generated-file handling", () => {
  const canonical = buildSitemap(APP_ROUTES, SITE_URL);

  it("treats LF committed content as equivalent", () => {
    expect(isEolEquivalent(canonical, canonical)).toBe(true);
  });

  it("treats CRLF committed content as equivalent", () => {
    expect(isEolEquivalent(canonical, canonical.replace(/\n/g, "\r\n"))).toBe(true);
  });

  it("detects a real content difference", () => {
    const changed = canonical.replace("/reviews/totalav-review", "/reviews/totalav-review-changed");
    expect(isEolEquivalent(canonical, changed)).toBe(false);
  });

  it("does not rewrite an equivalent CRLF file", async () => {
    const dir = mkdtempSync(join(tmpdir(), "cbt-eol-"));
    const file = join(dir, "sitemap.xml");
    const crlf = canonical.replace(/\n/g, "\r\n");
    writeFileSync(file, crlf);
    const wrote = await writeIfChanged(file, canonical);
    expect(wrote).toBe(false);
    expect(readFileSync(file, "utf8")).toBe(crlf);
  });

  it("writes when the normalized content actually differs", async () => {
    const dir = mkdtempSync(join(tmpdir(), "cbt-eol-"));
    const file = join(dir, "sitemap.xml");
    writeFileSync(file, "stale");
    const wrote = await writeIfChanged(file, canonical);
    expect(wrote).toBe(true);
    expect(isEolEquivalent(readFileSync(file, "utf8"), canonical)).toBe(true);
  });
});
