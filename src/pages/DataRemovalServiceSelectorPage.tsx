import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

type Priority = "automation" | "proof" | "support" | "control";

const recommendations: Record<Priority, { name: string; reason: string; href: string; label: string }> = {
  automation: {
    name: "Incogni",
    label: "Best starting point for hands-off maintenance",
    reason: "Incogni is the strongest fit when recurring automated broker requests and a lower-friction workflow matter more than screenshot-heavy reporting.",
    href: "/reviews/incogni-review"
  },
  proof: {
    name: "Optery",
    label: "Best starting point for visibility and reports",
    reason: "Optery is the strongest fit when seeing discovered listings and receiving proof-oriented reporting matter more than having the simplest workflow.",
    href: "/reviews/optery-review"
  },
  support: {
    name: "DeleteMe",
    label: "Best starting point for human assistance",
    reason: "DeleteMe is the strongest fit when an established provider, privacy advisors, reports, and human-assisted or custom removal workflows matter most.",
    href: "/reviews/deleteme-review"
  },
  control: {
    name: "Manual opt-outs",
    label: "Best starting point for cost and direct control",
    reason: "Manual opt-outs are the strongest fit when you have a narrow list of sites, enough time to repeat the work, and prefer not to share identifiers with another service.",
    href: "/are-data-removal-services-worth-it"
  }
};

const options: Array<{ value: Priority; title: string; description: string }> = [
  { value: "automation", title: "Do as much recurring work for me as possible", description: "You value convenience and ongoing broker-removal requests." },
  { value: "proof", title: "Show me where my information appears", description: "You value exposure visibility, screenshots, and detailed reports." },
  { value: "support", title: "Give me access to human assistance", description: "You value guided help, custom work, and an established service." },
  { value: "control", title: "Keep costs down and control every request", description: "You are willing to perform and track opt-outs yourself." }
];

export function DataRemovalServiceSelectorPage() {
  const [priority, setPriority] = useState<Priority>("automation");
  const recommendation = recommendations[priority];

  return (
    <>
      <SEO
        title="Data Removal Service Selector"
        description="Use this free data removal service selector to compare Incogni, Optery, DeleteMe, and manual opt-outs based on your preferred workflow."
        path="/tools/data-removal-service-selector"
      />
      <section className="border-b bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#ecfdf5_100%)] py-16 sm:py-20">
        <Container>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-700">Free decision tool</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black text-slate-950 sm:text-6xl">Which data removal approach fits you?</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">Choose the outcome you care about most. This tool recommends a research starting point—not a universal winner or a promise that every listing can be removed.</p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-8 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:items-start">
          <fieldset className="grid gap-4">
            <legend className="mb-2 text-2xl font-black text-slate-950">What matters most to you?</legend>
            {options.map((option) => (
              <label key={option.value} className="flex cursor-pointer gap-4 rounded-2xl border bg-white p-5 shadow-sm has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50">
                <input
                  className="mt-1 h-5 w-5 shrink-0 accent-brand-600"
                  type="radio"
                  name="priority"
                  value={option.value}
                  checked={priority === option.value}
                  onChange={() => setPriority(option.value)}
                />
                <span>
                  <span className="block font-bold text-slate-950">{option.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{option.description}</span>
                </span>
              </label>
            ))}
          </fieldset>

          <aside className="rounded-2xl bg-slate-950 p-7 text-white" aria-live="polite">
            <p className="text-xs font-black uppercase tracking-widest text-teal-300">Your research starting point</p>
            <h2 className="mt-3 text-3xl font-black">{recommendation.name}</h2>
            <p className="mt-2 font-semibold text-teal-200">{recommendation.label}</p>
            <p className="mt-5 leading-7 text-slate-200">{recommendation.reason}</p>
            <Link className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-400" to={recommendation.href}>Read the supporting research</Link>
          </aside>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black text-slate-950">Important limits</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">No option removes every piece of personal information from the internet. Public records, social posts, copied content, government records, and some Google results require different remedies. Data can also reappear, so removal is ongoing privacy maintenance.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link className="font-bold text-brand-700 hover:text-brand-800" to="/data-removal">Open the data removal guide</Link>
            <Link className="font-bold text-brand-700 hover:text-brand-800" to="/best-data-removal-services">Compare all services</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
