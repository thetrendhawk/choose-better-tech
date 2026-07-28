import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { HtmlDocument } from "./components/HtmlDocument";
import { ArePasswordManagersSafePage } from "./pages/ArePasswordManagersSafePage";
import { HomePage } from "./pages/HomePage";
import { HowToChooseSoftwarePage } from "./pages/HowToChooseSoftwarePage";
import { IncogniVsDeleteMePage } from "./pages/IncogniVsDeleteMePage";
import { TotalAvReviewPage } from "./pages/TotalAvReviewPage";

export type PrerenderAssets = {
  scriptSrc: string;
  styleHrefs: string[];
};

const prerenderElements = {
  "/": <HomePage />,
  "/are-password-managers-safe": <ArePasswordManagersSafePage />,
  "/reviews/totalav-review": <TotalAvReviewPage />,
  "/guides/how-to-choose-software": <HowToChooseSoftwarePage />,
  "/comparisons/incogni-vs-deleteme": <IncogniVsDeleteMePage />
} as const;

export async function renderRoute(route: string, assets: PrerenderAssets, options?: { signal?: AbortSignal }) {
  const prerenderElement = prerenderElements[route as keyof typeof prerenderElements];
  if (!prerenderElement) throw new Error(`Route is outside the Phase 1 prerender set: ${route}`);

  return prerenderToNodeStream(
    <HtmlDocument scriptSrc={assets.scriptSrc} styleHrefs={assets.styleHrefs}>
      <StrictMode>
        <StaticRouter location={route}>
          <App prerenderElement={prerenderElement} />
        </StaticRouter>
      </StrictMode>
    </HtmlDocument>,
    options
  );
}
