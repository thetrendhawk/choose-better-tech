import { CheckCircle2, ListChecks, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { onePasswordVsProtonPassComparison as comparison } from "../data/comparisons/onePasswordVsProtonPass";
import { site } from "../utils/site";

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle2 className="mt-0.5 shrink-0 text-brand-700" size={17} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OnePasswordVsProtonPassPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "Comparisons", item: site.url + "/comparisons" },
      { "@type": "ListItem", position: 3, name: comparison.title, item: site.url + comparison.path }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.subtitle,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + comparison.path
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <SEO
        title="1Password vs Proton Pass: Which Password Manager Fits You Better?"
        description="An evidence-based 1Password vs Proton Pass comparison covering premium polish, families, Travel Mode, privacy, free plans, aliases, and transparency caveats."
        path={comparison.path}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AffiliateDisclosure />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Password Manager Comparison</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{comparison.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{comparison.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#decision-table">
                Compare Tradeoffs
              </a>
              <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#final-verdict">
                Jump to Verdict
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6" aria-labelledby="comparison-summary-heading">
            <h2 id="comparison-summary-heading" className="text-xl font-bold text-slate-950">Quick Answer</h2>
            <div className="mt-5 grid gap-4">
              {comparison.quickAnswer.map((answer) => (
                <p key={answer} className="text-sm leading-6 text-slate-700">{answer}</p>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <Section className="bg-slate-50" id="decision-table">
        <SectionHeading
          title="Decision Table"
          description="This is not a universal winner table. It is a reader-fit table based on the approved 1Password and Proton Pass research repositories."
        />
        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Criterion</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">1Password</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Proton Pass</th>
              </tr>
            </thead>
            <tbody>
              {comparison.summaryRows.map((row) => (
                <tr key={row.label} className="border-b border-slate-200 last:border-0">
                  <th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950 sm:px-6" scope="row">{row.label}</th>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">{row.onePassword}</td>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">{row.protonPass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Which One Should You Choose?" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {comparison.decisionCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <ShieldCheck className="text-brand-700" size={22} aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold text-slate-950">{card.title}</h2>
              <BulletList items={card.bullets} />
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Evidence-Based Comparison</p>
        <div className="mt-8 grid gap-5">
          {comparison.sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
              <p className="mt-4 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">{section.verdict}</p>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-7 text-slate-700">{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Open Questions Before Buying"
          description="The approved repositories mark these details as volatile or unresolved. They should be checked against current provider terms before publication or purchase."
        />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={comparison.openQuestions} />
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="FAQ" />
        <div className="mt-8 grid gap-4">
          {comparison.faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <SearchCheck className="text-brand-700" size={19} aria-hidden="true" />
                {faq.question}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <article id="final-verdict" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-950">Final Verdict</h2>
          <p className="mt-4 text-base font-semibold text-brand-700">There is no universal winner.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            1Password is the stronger audience-specific fit for users who want premium polish, mature family workflows, strong recovery and sharing, Travel Mode, and a long-established password-manager experience. Proton Pass is the stronger fit for privacy-conscious users, open-source transparency, strong free-plan value, hide-my-email aliases, and Proton ecosystem users. Bitwarden-style alternatives remain clearer for self-hosting and open-source maximalists, while NordPass remains the simpler value-oriented alternative for Nord ecosystem users and conventional commercial password-manager buyers.
          </p>
        </article>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Related Reading" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comparison.relatedLinks.map((link) => (
            <Link key={link.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" to={link.href}>
              <ListChecks className="text-brand-700" size={20} aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-slate-950">{link.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
