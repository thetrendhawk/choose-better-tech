import { APP_ROUTE_DEFINITIONS } from "./routes.manifest.mjs";
import { createResolvedRouteElement, resolveRouteModule, type RouteModule } from "./routeResolver";

const serverModules = import.meta.glob<RouteModule>("./pages/*.tsx", { eager: true });
const definitionsByPath = new Map(APP_ROUTE_DEFINITIONS.map((definition) => [definition.path, definition]));

export function createServerRouteElement(path: string) {
  const definition = definitionsByPath.get(path);
  if (!definition) throw new Error(`Route is not in APP_ROUTE_DEFINITIONS: ${path}`);
  return createResolvedRouteElement(definition, resolveRouteModule(definition, serverModules));
}
