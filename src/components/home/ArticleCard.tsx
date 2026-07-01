import { Clock } from "lucide-react";
import type { ArticlePreview } from "../../types/content";

export function ArticleCard({ article }: { article: ArticlePreview }) {
  return <article className="flex min-h-48 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700"><Clock size={16} aria-hidden="true" />Coming Soon</div><h3 className="text-xl font-semibold text-slate-950">{article.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.excerpt}</p></article>;
}
