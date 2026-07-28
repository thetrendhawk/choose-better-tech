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
  it("contains exactly 69 unique normalized public routes", () => {
    expect(APP_ROUTE_DEFINITIONS).toHaveLength(69);
    expect(APP_ROUTES).toHaveLength(69);
    expect(new Set(APP_ROUTES).size).toBe(69);
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
  const routes = buildVercelConfig(APP_ROUTES).routes;
  const redirect = routes[1];
  const root = routes[2];
  const rewrite = routes[3];
  const fallback = routes[4];

  it("preserves filesystem handling before generated application rules", () => {
    expect(routes[0]).toEqual({ handle: "filesystem" });
  });

  it("redirects lowercase slash variants once with 308", () => {
    const matcher = new RegExp(redirect.src);
    expect(redirect.status).toBe(308);
    expect(redirect.headers).toEqual({ Location: "/$1" });
    expect(redirect.caseSensitive).toBe(true);
    for (const route of APP_ROUTES.filter((path) => path !== "/")) {
      expect(matcher.test(route + "/")).toBe(true);
      expect(matcher.test(route)).toBe(false);
      expect(matcher.test(route.toUpperCase() + "/")).toBe(false);
    }
  });

  it("rewrites exact lowercase clean URLs to flat HTML outputs", () => {
    expect(root).toEqual({ src: "^/$", dest: "/index.html", caseSensitive: true });
    expect(rewrite.dest).toBe("/$1.html");
    expect(rewrite.caseSensitive).toBe(true);
    const matcher = new RegExp(rewrite.src);
    for (const route of APP_ROUTES.filter((path) => path !== "/")) {
      expect(matcher.test(route)).toBe(true);
      expect(matcher.test(route + "/")).toBe(false);
      expect(matcher.test(route.toUpperCase())).toBe(false);
    }
  });

  it("returns generated 404 HTML for all unmatched URLs", () => {
    expect(fallback).toEqual({ src: "/(.*)", status: 404, dest: "/404.html" });
  });
});

describe("sitemap output", () => {
  const canonical = buildSitemap(APP_ROUTES, SITE_URL);

  it("matches the committed sitemap and contains 69 URLs", () => {
    expect(isEolEquivalent(canonical, readFileSync("public/sitemap.xml", "utf8"))).toBe(true);
    expect((canonical.match(/<url>/g) ?? [])).toHaveLength(69);
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
