import { useLayoutEffect } from "react";
import type { SeoConfig } from "../types/content";
import { buildSeo } from "../utils/seo";

const SEO_SLOTS = [
  "title",
  "description",
  "canonical",
  "robots",
  "og-title",
  "og-description",
  "og-type",
  "og-url",
  "twitter-card",
  "twitter-title",
  "twitter-description"
] as const;

export function SEO(props: SeoConfig) {
  const { canonicalUrl, description, ogType, pageTitle, robots } = buildSeo(props);

  useLayoutEffect(() => {
    for (const slot of SEO_SLOTS) {
      const elements = document.head.querySelectorAll(`[data-seo-slot="${slot}"]`);
      if (!canonicalUrl && (slot === "canonical" || slot === "og-url")) {
        for (const element of elements) element.remove();
        continue;
      }
      for (const element of [...elements].slice(0, -1)) element.remove();
    }
  }, [canonicalUrl, description, ogType, pageTitle, robots]);

  return (
    <>
      <title data-seo-slot="title">{pageTitle}</title>
      <meta data-seo-slot="description" name="description" content={description} />
      {canonicalUrl ? <link data-seo-slot="canonical" rel="canonical" href={canonicalUrl} /> : null}
      <meta data-seo-slot="robots" name="robots" content={robots} />
      <meta data-seo-slot="og-title" property="og:title" content={pageTitle} />
      <meta data-seo-slot="og-description" property="og:description" content={description} />
      <meta data-seo-slot="og-type" property="og:type" content={ogType} />
      {canonicalUrl ? <meta data-seo-slot="og-url" property="og:url" content={canonicalUrl} /> : null}
      <meta data-seo-slot="twitter-card" name="twitter:card" content="summary_large_image" />
      <meta data-seo-slot="twitter-title" name="twitter:title" content={pageTitle} />
      <meta data-seo-slot="twitter-description" name="twitter:description" content={description} />
    </>
  );
}
