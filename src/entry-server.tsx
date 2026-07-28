import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { HtmlDocument } from "./components/HtmlDocument";
import { NotFoundPage } from "./pages/NotFoundPage";
import { createServerRouteElement } from "./routes.server";

export type PrerenderAssets = {
  scriptSrc: string;
  styleHrefs: string[];
};

export async function renderRoute(route: string, assets: PrerenderAssets, options?: { signal?: AbortSignal }) {
  return prerenderToNodeStream(
    <HtmlDocument scriptSrc={assets.scriptSrc} styleHrefs={assets.styleHrefs}>
      <StrictMode>
        <StaticRouter location={route}>
          <App prerenderElement={createServerRouteElement(route)} />
        </StaticRouter>
      </StrictMode>
    </HtmlDocument>,
    options
  );
}

export async function renderNotFound(assets: PrerenderAssets, options?: { signal?: AbortSignal }) {
  return prerenderToNodeStream(
    <HtmlDocument scriptSrc={assets.scriptSrc} styleHrefs={assets.styleHrefs}>
      <StrictMode>
        <StaticRouter location="/404">
          <App prerenderElement={<NotFoundPage />} />
        </StaticRouter>
      </StrictMode>
    </HtmlDocument>,
    options
  );
}
