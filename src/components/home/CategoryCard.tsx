import type { Category } from "../../types/content";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700"><Icon size={22} aria-hidden="true" /></span><h3 className="mt-5 text-lg font-semibold text-slate-950">{category.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p></article>;
}
