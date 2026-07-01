import { useEffect } from "react";
import type { SeoConfig } from "../types/content";
import { applySeo } from "../utils/seo";

export function SEO(props: SeoConfig) {
  const { title, description, path } = props;

  useEffect(() => { applySeo({ title, description, path }); }, [title, description, path]);
  return null;
}
