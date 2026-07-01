import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string };
export type Category = { title: string; description: string; icon: LucideIcon };
export type ArticlePreview = { title: string; excerpt: string };
export type TrustPoint = { title: string; description: string; icon: LucideIcon };
export type SeoConfig = { title: string; description: string; path: string };
