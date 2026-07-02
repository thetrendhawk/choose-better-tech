import type { TrustPoint } from "../../types/content";

export function TrustCard({ point }: { point: TrustPoint }) {
  const Icon = point.icon;
  return <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-50 text-accent-700"><Icon size={24} aria-hidden="true" /></span><h3 className="mt-5 text-lg font-semibold text-slate-950">{point.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{point.description}</p></article>;
}
