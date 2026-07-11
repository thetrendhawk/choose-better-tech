import { ArrowRight, BookOpen, CheckCircle2, Eye, SearchCheck, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonAnchor, ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

type Tone = "mint" | "blue" | "lavender" | "green";

const editorialProcess: Array<{ title: string; description: string; icon: typeof SearchCheck; tone: Tone }> = [
  {
    title: "Research",
    description: "We start with deep research across trusted, independent sources.",
    icon: SearchCheck,
    tone: "mint"
  },
  {
    title: "Evidence",
    description: "We separate verified facts from vendor claims and industry noise.",
    icon: Eye,
    tone: "blue"
  },
  {
    title: "Editorial Review",
    description: "We analyze, stress-test, and evaluate with readers in mind.",
    icon: Workflow,
    tone: "lavender"
  },
  {
    title: "Recommendation",
    description: "You get clear, honest recommendations you can actually use.",
    icon: CheckCircle2,
    tone: "green"
  }
];

const heroStats: Array<{ value: string; label: string; icon: typeof ShieldCheck; tone: Tone }> = [
  { value: "11", label: "Reviews", icon: ShieldCheck, tone: "mint" },
  { value: "12", label: "Comparisons", icon: Workflow, tone: "blue" },
  { value: "17", label: "Guides / Hubs", icon: BookOpen, tone: "lavender" },
  { value: "Evidence", label: "First", icon: CheckCircle2, tone: "green" }
];

const toneClasses: Record<Tone, string> = {
  mint: "bg-accent-50 text-accent-700",
  blue: "bg-brand-50 text-brand-700",
  lavender: "bg-[#f1edff] text-[#5b3ff2]",
  green: "bg-emerald-50 text-emerald-700"
};

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-700">Software choices, made clearer</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-normal text-slate-950 sm:text-6xl">Make Better Software Decisions</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">Honest reviews, practical comparisons, and beginner-friendly guides to help you choose software with confidence.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonAnchor href="#guides">Explore Guides <ArrowRight aria-hidden="true" className="ml-2" size={18} /></ButtonAnchor>
              <ButtonLink to="/about/how-we-review-software" variant="secondary">How We Review Software</ButtonLink>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2" aria-hidden="true">
                {["A", "B", "C", "D"].map((initial, index) => (
                  <span key={initial} className={["flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-soft", ["bg-brand-700", "bg-accent-600", "bg-slate-700", "bg-editorial-500"][index]].join(" ")}>{initial}</span>
                ))}
              </div>
              <p className="max-w-xs text-sm leading-6 text-slate-600">Trusted by everyday readers who want clarity, not hype.</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200/80 bg-white/80 p-3 shadow-lift backdrop-blur" aria-label="Editorial process preview">
            <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-950">Our Editorial Process</p>
              <ol className="mt-6 grid gap-0">
                {editorialProcess.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === editorialProcess.length - 1;
                  return (
                    <li key={step.title} className="grid grid-cols-[4.5rem_1fr] gap-4">
                      <div className="relative flex justify-center">
                        <span className={["z-10 flex h-14 w-14 items-center justify-center rounded-lg shadow-soft", toneClasses[step.tone]].join(" ")}>
                          <Icon size={24} aria-hidden="true" />
                        </span>
                        {!isLast ? <span className="absolute top-14 h-full w-px border-l border-dotted border-slate-300" aria-hidden="true" /> : null}
                        {!isLast ? <span className="absolute top-[4.35rem] h-1.5 w-1.5 rounded-full bg-brand-100 ring-2 ring-white" aria-hidden="true" /> : null}
                      </div>
                      <div className={["pb-7", isLast ? "pb-0" : ""].join(" ")}>
                        <p className="text-base font-bold text-slate-950">{step.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-7 grid grid-cols-2 overflow-hidden rounded-lg border border-slate-200 bg-white sm:grid-cols-4">
                {heroStats.map((stat, index) => {
                  const Icon = stat.icon;
                  const borderClasses = index === 1 ? "sm:border-r" : index === 3 ? "border-b-0 border-r-0" : "";
                  return (
                    <div key={stat.label} className={["border-b border-r border-slate-200 p-4 text-center sm:border-b-0", borderClasses].join(" ")}>
                      <span className={["mx-auto flex h-9 w-9 items-center justify-center rounded-md", toneClasses[stat.tone]].join(" ")}>
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <p className="mt-2 text-lg font-bold text-slate-950">{stat.value}</p>
                      <p className="text-xs leading-5 text-slate-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <Link className="mx-auto mt-6 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-brand-700 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/about/how-we-review-software">
                Learn How We Review Software <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
