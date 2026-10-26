import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { HtmlDocument } from "./components/HtmlDocument";
import { NotFoundPage } from "./pages/NotFoundPage";
import { createServerRouteElement } from "./routes.server";

export type PrerenderAssets = {
  scriptSrc: string;
  styleHrefs: string[];
};

// Server route modules are resolved eagerly. Serialize them synchronously so
// static pages do not depend on React's client-side Suspense reveal scripts.
// Static-output validation fails closed if a future route suspends instead.
export async function renderRoute(route: string, assets: PrerenderAssets, options?: { signal?: AbortSignal }) {
  options?.signal?.throwIfAborted();
  const html = renderToString(
    <HtmlDocument scriptSrc={assets.scriptSrc} styleHrefs={assets.styleHrefs}>
      <StrictMode>
        <StaticRouter location={route}>
          <App prerenderElement={createServerRouteElement(route)} />
        </StaticRouter>
      </StrictMode>
    </HtmlDocument>
  );
  return { prelude: [html] };
}

export async function renderNotFound(assets: PrerenderAssets, options?: { signal?: AbortSignal }) {
  options?.signal?.throwIfAborted();
  const html = renderToString(
    <HtmlDocument scriptSrc={assets.scriptSrc} styleHrefs={assets.styleHrefs}>
      <StrictMode>
        <StaticRouter location="/404">
          <App prerenderElement={<NotFoundPage />} />
        </StaticRouter>
      </StrictMode>
    </HtmlDocument>
  );
  return { prelude: [html] };
}
