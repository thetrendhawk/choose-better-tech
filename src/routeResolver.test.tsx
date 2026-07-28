import { describe, expect, it } from "vitest";
import { createResolvedRouteElement, normalizeRouteModuleKey, resolveRouteModule, validateRouteDefinition } from "./routeResolver";

const definition = {
  path: "/example",
  module: "./pages/ExamplePage.tsx",
  exportName: "ExamplePage",
  props: { slug: "example" }
} as const;

describe("shared route resolution contract", () => {
  it("normalizes Windows separators identically", () => {
    expect(normalizeRouteModuleKey(".\\pages\\ExamplePage.tsx")).toBe("./pages/ExamplePage.tsx");
  });

  it("rejects invalid public definitions and absent modules", () => {
    expect(() => validateRouteDefinition({ ...definition, path: "/Example" })).toThrow("not lowercase");
    expect(() => resolveRouteModule(definition, {})).toThrow("was not found by Vite");
  });

  it("resolves a component export and serializable props", () => {
    function ExamplePage({ slug }: { slug: string }) {
      return <h1>{slug}</h1>;
    }
    const routeModule = resolveRouteModule(definition, { "./pages/ExamplePage.tsx": { ExamplePage } });
    const element = createResolvedRouteElement(definition, routeModule);
    expect(element.props).toEqual({ slug: "example" });
    expect(element.type).toBe(ExamplePage);
  });
});
