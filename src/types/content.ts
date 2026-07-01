import type { LucideIcon } from "lucide-react";

export type NavItem = { key: string; label: string; href: string };
export type Category = { key: string; title: string; description: string; icon: LucideIcon };
export type ArticlePreview = { key: string; title: string; excerpt: string };
export type TrustPoint = { key: string; title: string; description: string; icon: LucideIcon };
export type ProcessHighlight = { key: string; label: string; icon: LucideIcon };
export type SeoConfig = { title: string; description: string; path: string };
