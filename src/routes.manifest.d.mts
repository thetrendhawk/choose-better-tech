export type AppRouteDefinition = {
  path: string;
  module: `./pages/${string}.tsx`;
  exportName: string;
  props?: Readonly<Record<string, string>>;
};

export const APP_ROUTE_DEFINITIONS: readonly AppRouteDefinition[];
export const APP_ROUTES: readonly string[];
