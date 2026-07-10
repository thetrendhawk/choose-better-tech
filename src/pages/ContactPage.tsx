import { CheckCircle2, ListChecks, Mail, SearchCheck, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { SEO } from "../components/SEO";
import { ButtonAnchor } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const emailHref = `mailto:${site.email}`;

const checklist = [
  "Your name",
  "Company or product, if relevant",
  "The page or product you are contacting us about",
  "The reason for your message",
  "Any useful supporting links"
];

function InfoCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <Icon className="text-brand-700" size={24} aria-hidden="true" />
      <h2 className="mt-4 text-xl font-bold text-slate-950">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </article>
  );
}

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Choose Better Tech"
        description="Contact Choose Better Tech for reader questions, corrections, product suggestions, and relevant partnership inquiries."
        path="/contact"
      />
      <PageHeader
        title="Contact Choose Better Tech"
        eyebrow="Get in touch"
        description="Have a question, correction, product suggestion, or partnership inquiry? Reach us by email and include enough detail so we can route your message properly."
      />

      <Section className="bg-white" containerClassName="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_60%,#eefdf9_100%)] p-6 shadow-lift">
          <Mail className="text-brand-700" size={28} aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-slate-950">Email</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">Use this address for reader questions, corrections, review suggestions, and relevant partnership inquiries.</p>
          <a className="mt-4 block break-words text-lg font-bold text-brand-700 underline-offset-4 hover:underline" href={emailHref}>
            {site.email}
          </a>
          <ButtonAnchor className="mt-6 w-full sm:w-fit" href={emailHref}>Email Choose Better Tech</ButtonAnchor>
          <p className="mt-5 text-sm leading-6 text-slate-600">We read relevant messages, but we may not be able to respond to every inquiry.</p>
        </aside>

        <div className="grid gap-5">
          <InfoCard icon={ListChecks} title="For Readers">
            <p>Send questions, feedback, product suggestions, or tools you think we should review. If your message is about a specific page, include the URL so we know what you are referring to.</p>
          </InfoCard>

          <InfoCard icon={SearchCheck} title="Corrections and Updates">
            <p>If you believe something on Choose Better Tech is outdated, inaccurate, unclear, or missing important context, please include:</p>
            <ul className="mt-4 grid gap-2">
              <li>the page URL</li>
              <li>the specific claim or section</li>
              <li>what you believe should be reviewed</li>
              <li>any source or documentation we should consider</li>
            </ul>
            <p className="mt-4">Corrections are reviewed editorially and do not guarantee a requested change.</p>
          </InfoCard>

          <InfoCard icon={ShieldCheck} title="For Brands and Affiliate Partners">
            <p>We are open to relevant product information, approved assets, affiliate program details, and partnership inquiries. Affiliate availability does not influence our editorial conclusions, rankings, verdicts, or recommendations.</p>
            <p className="mt-4 font-semibold text-slate-950">We do not accept payment in exchange for positive reviews.</p>
          </InfoCard>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <CheckCircle2 className="text-brand-700" size={24} aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-slate-950">What to Include</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">A little context helps us understand your message faster.</p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-accent-700" size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
