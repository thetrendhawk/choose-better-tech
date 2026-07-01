import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processHighlights } from "../../data/home";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white py-20 sm:py-24">
      <Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-700">Software choices, made clearer</p>
        <h1 className="max-w-3xl text-5xl font-bold tracking-normal text-slate-950 sm:text-6xl">Make Better Software Decisions</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">Honest reviews, practical comparisons, and beginner-friendly guides to help you choose software with confidence.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink to="/#guides">Explore Guides <ArrowRight aria-hidden="true" className="ml-2" size={18} /></ButtonLink><ButtonLink to="/about" variant="secondary">About Our Process</ButtonLink></div>
      </div><div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-soft" aria-label="Research process preview"><div className="rounded-md border border-slate-200 bg-white p-5"><div className="flex items-center gap-3 border-b border-slate-200 pb-4"><CheckCircle2 className="text-brand-600" aria-hidden="true" /><div><p className="font-semibold text-slate-950">Review checklist</p><p className="text-sm text-slate-600">Clear criteria before recommendations.</p></div></div><ul className="mt-5 grid gap-4">{processHighlights.map((item) => { const Icon = item.icon; return <li key={item.key} className="flex items-center gap-3 text-sm font-medium text-slate-700"><span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 text-brand-700"><Icon size={18} aria-hidden="true" /></span>{item.label}</li>; })}</ul></div></div></div></Container>
    </section>
  );
}
