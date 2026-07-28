import type { SeoConfig } from "../types/content";
import { site } from "./site";

export const formatPageTitle = (title: string) => title === site.name ? title : title + " | " + site.name;

export const canonicalUrlForPath = (path: string) => {
  const normalizedPath = path === "/" ? "/" : "/" + path.replace(/^\/+|\/+$/g, "");
  return site.url + normalizedPath;
};

export const buildSeo = ({ title, description, path, canonical = true, robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1", ogType = "website" }: SeoConfig) => ({
  canonicalUrl: canonical ? canonicalUrlForPath(path) : undefined,
  description,
  ogType,
  pageTitle: formatPageTitle(title),
  robots
});
