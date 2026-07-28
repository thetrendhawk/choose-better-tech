import { Suspense, type ReactElement, type ReactNode } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteLayout } from "./layouts/SiteLayout";
import type { AppRouteDefinition } from "./routes.manifest.mjs";

function RouteFallback() {
  return (
    <div className="px-6 py-16 text-center text-sm font-semibold text-slate-600" role="status">
      Loading page...
    </div>
  );
}

function LazyRouteOutlet({ showFallback = true }: { showFallback?: boolean }) {
  return (
    <Suspense fallback={showFallback ? <RouteFallback /> : null}>
      <Outlet />
    </Suspense>
  );
}

type ClientRouteElement = { definition: AppRouteDefinition; element: ReactElement };

export default function App({
  clientRouteElements = [],
  notFoundElement,
  prerenderElement
}: {
  clientRouteElements?: readonly ClientRouteElement[];
  notFoundElement?: ReactNode;
  prerenderElement?: ReactNode;
}) {
  return (
    <>
      <GoogleAnalytics />
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route element={<LazyRouteOutlet showFallback={!prerenderElement} />}>
            {prerenderElement ? (
              <Route path="*" element={prerenderElement} />
            ) : (
              <>
                {clientRouteElements.map(({ definition, element }) => (
                  definition.path === "/"
                    ? <Route key={definition.path} index element={element} />
                    : <Route key={definition.path} path={definition.path.slice(1)} element={element} />
                ))}
                <Route path="*" element={notFoundElement} />
              </>
            )}
          </Route>
        </Route>
      </Routes>
    </>
  );
}
