import { ArrowRight, CheckCircle2, Eye, SearchCheck, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonAnchor, ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

const editorialProcess = [
  {
    title: "Research",
    description: "We start with deep research across trusted, independent sources.",
    icon: SearchCheck
  },
  {
    title: "Evidence",
    description: "We separate verified facts from vendor claims and industry noise.",
    icon: Eye
  },
  {
    title: "Editorial Review",
    description: "We analyze, stress-test, and evaluate with readers in mind.",
    icon: Workflow
  },
  {
    title: "Recommendation",
    description: "You get clear, honest recommendations you can actually use.",
    icon: CheckCircle2
  }
];

const heroStats = ["2 Reviews", "1 Comparison", "6 Guides", "Evidence First"];

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
          <div className="rounded-lg border border-white/70 bg-white/75 p-3 shadow-lift backdrop-blur" aria-label="Editorial process preview">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[linear-gradient(135deg,#eef6ff,#ccfbf1)] text-brand-700"><ShieldCheck aria-hidden="true" /></span>
                <div>
                  <p className="font-semibold text-slate-950">Our Editorial Process</p>
                  <p className="text-sm text-slate-600">How recommendations earn trust.</p>
                </div>
              </div>
              <ol className="mt-6 grid gap-0">
                {editorialProcess.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === editorialProcess.length - 1;
                  return (
                    <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-4">
                      <div className="relative flex justify-center">
                        <span className="z-10 flex h-10 w-10 items-center justify-center rounded-md border border-brand-100 bg-brand-50 text-brand-700 shadow-soft">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        {!isLast ? <span className="absolute top-10 h-full w-px bg-gradient-to-b from-brand-200 to-accent-100" aria-hidden="true" /> : null}
                      </div>
                      <div className={["pb-5", isLast ? "pb-0" : ""].join(" ")}>
                        <p className="text-sm font-semibold text-slate-950">{index + 1}. {step.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-6 grid grid-cols-2 gap-2 border-t border-slate-200 pt-5 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">{stat}</div>
                ))}
              </div>
              <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/about/how-we-review-software">
                Learn How We Review Software <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
