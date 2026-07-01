import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { ArticlePreview } from "../../types/content";

export function ArticleCard({ article }: { article: ArticlePreview }) {
  const status = article.status ?? "Coming Soon";
  const content = <><div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700"><Clock size={16} aria-hidden="true" />{status}</div><h3 className="text-xl font-semibold text-slate-950">{article.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.excerpt}</p></>;

  if (article.href) {
    return <article className="min-h-48"><Link className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to={article.href}>{content}</Link></article>;
  }

  return <article className="flex min-h-48 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft">{content}</article>;
}
