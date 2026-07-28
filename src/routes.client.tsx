/* eslint-disable react-refresh/only-export-components -- this module exports the manifest-derived route elements consumed by App. */
import { lazy, type ComponentType, type ReactElement } from "react";
import { APP_ROUTE_DEFINITIONS, type AppRouteDefinition } from "./routes.manifest.mjs";
import { resolveRouteExport, resolveRouteModule, type RouteModule } from "./routeResolver";

const clientModules = import.meta.glob<RouteModule>("./pages/*.tsx");
const lazyComponents = new Map<string, ComponentType<Record<string, string>>>();

export function createClientRouteElement(definition: AppRouteDefinition): ReactElement {
  let Component = lazyComponents.get(definition.path);
  if (!Component) {
    const loader = resolveRouteModule(definition, clientModules);
    Component = lazy(async () => {
      const routeModule = await loader();
      return { default: resolveRouteExport(definition, routeModule) };
    });
    lazyComponents.set(definition.path, Component);
  }
  return <Component {...(definition.props ?? {})} />;
}

export const CLIENT_ROUTE_ELEMENTS = APP_ROUTE_DEFINITIONS.map((definition) => ({
  definition,
  element: createClientRouteElement(definition)
}));
