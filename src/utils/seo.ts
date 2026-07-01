import type { SeoConfig } from "../types/content";
import { site } from "./site";

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

export const applySeo = ({ title, description, path }: SeoConfig) => {
  const pageTitle = title === site.name ? title : title + " | " + site.name;
  const canonicalUrl = site.url + path;
  document.title = pageTitle;
  setMeta('meta[name="description"]', "name", "description", description);
  setMeta('meta[property="og:title"]', "property", "og:title", pageTitle);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:type"]', "property", "og:type", "website");
  setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", pageTitle);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", canonicalUrl);
};
