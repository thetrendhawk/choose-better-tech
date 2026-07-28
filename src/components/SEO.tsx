import { useLayoutEffect } from "react";
import type { SeoConfig } from "../types/content";
import { buildSeo } from "../utils/seo";

export function SEO(props: SeoConfig) {
  const { canonicalUrl, description, ogType, pageTitle, robots } = buildSeo(props);

  useLayoutEffect(() => {
    const managedSlots = new Set(
      [...document.head.querySelectorAll<HTMLElement>("[data-seo-slot]")]
        .map((element) => element.dataset.seoSlot)
        .filter((slot): slot is string => Boolean(slot))
    );
    for (const slot of managedSlots) {
      const elements = document.head.querySelectorAll(`[data-seo-slot="${slot}"]`);
      for (const element of [...elements].slice(0, -1)) element.remove();
    }
  }, [canonicalUrl, description, ogType, pageTitle, robots]);

  return (
    <>
      <title data-seo-slot="title">{pageTitle}</title>
      <meta data-seo-slot="description" name="description" content={description} />
      <link data-seo-slot="canonical" rel="canonical" href={canonicalUrl} />
      <meta data-seo-slot="robots" name="robots" content={robots} />
      <meta data-seo-slot="og-title" property="og:title" content={pageTitle} />
      <meta data-seo-slot="og-description" property="og:description" content={description} />
      <meta data-seo-slot="og-type" property="og:type" content={ogType} />
      <meta data-seo-slot="og-url" property="og:url" content={canonicalUrl} />
      <meta data-seo-slot="twitter-card" name="twitter:card" content="summary_large_image" />
      <meta data-seo-slot="twitter-title" name="twitter:title" content={pageTitle} />
      <meta data-seo-slot="twitter-description" name="twitter:description" content={description} />
    </>
  );
}
