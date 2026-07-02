import type { Category } from "../../types/content";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"><span className="flex h-11 w-11 items-center justify-center rounded-md bg-[linear-gradient(135deg,#eef6ff,#ccfbf1)] text-brand-700"><Icon size={22} aria-hidden="true" /></span><h3 className="mt-5 text-lg font-semibold text-slate-950">{category.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p></article>;
}
