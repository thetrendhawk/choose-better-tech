import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { ArticlePreview } from "../../types/content";

export function ArticleCard({ article }: { article: ArticlePreview }) {
  const status = article.status ?? "Coming Soon";
  const content = <><div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700"><Clock size={16} aria-hidden="true" />{status}</div><h3 className="text-xl font-semibold text-slate-950">{article.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.excerpt}</p></>;

  if (article.href) {
    return <article className="min-h-48"><Link className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to={article.href}>{content}<span className="mt-5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">Read article</span></Link></article>;
  }

  return <article className="flex min-h-48 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft">{content}</article>;
}
