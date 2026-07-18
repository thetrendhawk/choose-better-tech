import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Category } from "../../types/content";

type LinkedCategory = Category & { href: string };

export function CategoryCard({ category }: { category: LinkedCategory }) {
  const Icon = category.icon;

  return (
    <Link
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
      to={category.href}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[linear-gradient(135deg,#eef6ff,#ccfbf1)] text-brand-700">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{category.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{category.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
        Explore topic <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
