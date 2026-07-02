import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processHighlights } from "../../data/home";
import { ButtonAnchor, ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_44%,#f0fdfa_100%)] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-brand-700 shadow-soft">Software choices, made clearer</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-normal text-slate-950 sm:text-6xl">Make Better Software Decisions</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">Honest reviews, practical comparisons, and beginner-friendly guides to help you choose software with confidence.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonAnchor href="#guides">Explore Guides <ArrowRight aria-hidden="true" className="ml-2" size={18} /></ButtonAnchor>
              <ButtonLink to="/about/how-we-review-software" variant="secondary">About Our Process</ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/70 bg-white/70 p-3 shadow-lift backdrop-blur" aria-label="Research process preview">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-50 text-accent-700"><CheckCircle2 aria-hidden="true" /></span>
                <div>
                  <p className="font-semibold text-slate-950">Review checklist</p>
                  <p className="text-sm text-slate-600">Clear criteria before recommendations.</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-4">
                {processHighlights.map((item) => {
                  const Icon = item.icon;
                  return <li key={item.key} className="flex items-center gap-3 rounded-md border border-slate-100 bg-slate-50/80 p-3 text-sm font-medium text-slate-700"><span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 text-brand-700"><Icon size={18} aria-hidden="true" /></span>{item.label}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
