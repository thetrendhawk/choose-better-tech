import { lazy, StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CLIENT_ROUTE_ELEMENTS } from "./routes.client";
import "./styles/index.css";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((module) => ({ default: module.NotFoundPage })));
const root = document.getElementById("root")!;
const application = (
  <StrictMode>
    <BrowserRouter><App clientRouteElements={CLIENT_ROUTE_ELEMENTS} notFoundElement={<NotFoundPage />} /></BrowserRouter>
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, application);
} else {
  createRoot(root).render(application);
}
