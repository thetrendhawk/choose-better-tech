import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { APP_ROUTE_DEFINITIONS, APP_ROUTES } from "./routes.manifest.mjs";
import { normalizeRouteModuleKey, validateRouteDefinition } from "./routeResolver";
import { buildVercelConfig } from "../scripts/generate-vercel-routes.mjs";
import { buildSitemap, isEolEquivalent, writeIfChanged } from "../scripts/generate-seo-files.mjs";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const SITE_URL = "https://choosebettertech.com";

describe("executable route manifest", () => {
  it("contains exactly 71 unique normalized public routes", () => {
    expect(APP_ROUTE_DEFINITIONS).toHaveLength(71);
    expect(APP_ROUTES).toHaveLength(71);
    expect(new Set(APP_ROUTES).size).toBe(71);
    expect(APP_ROUTES).toEqual(APP_ROUTE_DEFINITIONS.map(({ path }) => path));
    for (const definition of APP_ROUTE_DEFINITIONS) expect(validateRouteDefinition(definition)).toBe(definition);
  });

  it("uses one normalized module-key contract", () => {
    for (const definition of APP_ROUTE_DEFINITIONS) {
      expect(normalizeRouteModuleKey(definition.module)).toBe(definition.module);
    }
    expect(() => normalizeRouteModuleKey("../pages/HomePage.tsx")).toThrow();
    expect(() => normalizeRouteModuleKey("./pages/HomePage.js")).toThrow();
  });

  it("contains each module source and export name", () => {
    for (const definition of APP_ROUTE_DEFINITIONS) {
      const source = readFileSync("src/" + definition.module.slice(2), "utf8");
      expect(source).toContain(`export function ${definition.exportName}`);
    }
  });
});

describe("generated Vercel routing", () => {
  const config = buildVercelConfig(APP_ROUTES);
  const rewrites = config.rewrites;

  it("uses Vercel-native no-slash normalization without low-level routes", () => {
    expect(config.trailingSlash).toBe(false);
    expect(config).not.toHaveProperty("routes");
  });

  it("generates one exact flat-HTML rewrite for every public route", () => {
    expect(rewrites).toHaveLength(71);
    expect(rewrites).toEqual(APP_ROUTES.map((source) => ({
      source,
      destination: source === "/" ? "/index.html" : `${source}.html`
    })));
    expect(rewrites[0]).toEqual({ source: "/", destination: "/index.html" });
  });

  it("contains no grouped regex or catch-all SPA rewrite", () => {
    expect(rewrites.every(({ source }) => APP_ROUTES.includes(source))).toBe(true);
    expect(rewrites.some(({ source }) => /[()*+?^$|[\]\\]/.test(source))).toBe(false);
    expect(rewrites.some(({ destination }) => destination === "/index.html")).toBe(true);
    expect(rewrites.filter(({ destination }) => destination === "/index.html")).toHaveLength(1);
  });

  it("rejects unsafe or colliding route output", () => {
    expect(() => buildVercelConfig(["/", "/about", "/about"])).toThrow(/Duplicate Vercel rewrite source/);
    expect(() => buildVercelConfig(["/", "/about", "/About"])).toThrow(/Case-insensitive Vercel rewrite source collision/);
    expect(() => buildVercelConfig(["/", "/about.html"])).toThrow(/file extensions/);
    expect(() => buildVercelConfig(["/", "/about/"])).toThrow(/Malformed public route/);
    expect(() => buildVercelConfig(["/", "/about?preview=1"])).toThrow(/Malformed public route/);
  });
});

describe("sitemap output", () => {
  const canonical = buildSitemap(APP_ROUTES, SITE_URL);

  it("matches the committed sitemap and contains 71 URLs", () => {
    expect(isEolEquivalent(canonical, readFileSync("public/sitemap.xml", "utf8"))).toBe(true);
    expect((canonical.match(/<url>/g) ?? [])).toHaveLength(71);
  });

  it("handles cross-platform generated file line endings", async () => {
    const dir = mkdtempSync(join(tmpdir(), "cbt-eol-"));
    const file = join(dir, "sitemap.xml");
    const crlf = canonical.replace(/\n/g, "\r\n");
    writeFileSync(file, crlf);
    expect(await writeIfChanged(file, canonical)).toBe(false);
    expect(readFileSync(file, "utf8")).toBe(crlf);
    writeFileSync(file, "stale");
    expect(await writeIfChanged(file, canonical)).toBe(true);
  });
});
