import { createElement, type ComponentType, type ReactElement } from "react";
import type { AppRouteDefinition } from "./routes.manifest.mjs";

export type RouteModule = Record<string, unknown>;
export type RouteModuleMap<T> = Record<string, T>;

export function normalizeRouteModuleKey(moduleKey: string): `./pages/${string}.tsx` {
  const normalized = moduleKey.replace(/\\/g, "/").replace(/^\.\/+/, "./");
  if (!/^\.\/pages\/[A-Za-z0-9]+\.tsx$/.test(normalized)) {
    throw new Error(`Invalid route module key: ${moduleKey}`);
  }
  return normalized as `./pages/${string}.tsx`;
}

export function validateRouteDefinition(definition: AppRouteDefinition) {
  const { path, exportName, props } = definition;
  if (!path.startsWith("/") || path.includes("?") || path.includes("#") || path.includes("//")) {
    throw new Error(`Invalid public route path: ${path}`);
  }
  if (path !== "/" && path.endsWith("/")) throw new Error(`Public route has a trailing slash: ${path}`);
  if (path !== path.toLowerCase()) throw new Error(`Public route is not lowercase: ${path}`);
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(exportName)) throw new Error(`Invalid route export: ${exportName}`);
  normalizeRouteModuleKey(definition.module);
  if (props) JSON.stringify(props);
  return definition;
}

export function resolveRouteModule<T>(definition: AppRouteDefinition, modules: RouteModuleMap<T>): T {
  validateRouteDefinition(definition);
  const key = normalizeRouteModuleKey(definition.module);
  const routeModule = modules[key];
  if (!routeModule) throw new Error(`${definition.path}: module ${key} was not found by Vite.`);
  return routeModule;
}

export function resolveRouteExport(definition: AppRouteDefinition, routeModule: RouteModule): ComponentType<Record<string, string>> {
  const component = routeModule[definition.exportName];
  if (typeof component !== "function") {
    throw new Error(`${definition.path}: export ${definition.exportName} is not a React component.`);
  }
  return component as ComponentType<Record<string, string>>;
}

export function createResolvedRouteElement(definition: AppRouteDefinition, routeModule: RouteModule): ReactElement {
  return createElement(resolveRouteExport(definition, routeModule), definition.props ?? {});
}
