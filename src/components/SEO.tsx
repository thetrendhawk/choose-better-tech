import { useEffect } from "react";
import type { SeoConfig } from "../types/content";
import { applySeo } from "../utils/seo";

export function SEO(props: SeoConfig) {
  useEffect(() => { applySeo(props); }, [props.title, props.description, props.path]);
  return null;
}
