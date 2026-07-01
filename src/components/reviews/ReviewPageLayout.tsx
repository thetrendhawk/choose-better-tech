import { AlertCircle, CheckCircle2, ExternalLink, ListChecks, MinusCircle } from "lucide-react";
import type { ReviewPageContent } from "../../types/review";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const disclosureText = "We may earn a commission if you purchase through links on this page, at no extra cost to you. Our recommendations are based on research, product fit, and reader needs.";

const externalButtonClasses = "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";
const secondaryButtonClasses = "inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

function ExternalButton({ href, children }: { href: string; children: string }) {
  return <a className={externalButtonClasses} href={href} rel="nofollow sponsored noopener noreferrer" target="_blank">{children}<ExternalLink size={16} aria-hidden="true" /></a>;
}

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return <div className="max-w-3xl"><h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>{description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}</div>;
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><h3 className="text-base font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>;
}

function BulletList({ items, tone = "brand" }: { items: string[]; tone?: "brand" | "slate" }) {
  const dotClass = tone === "brand" ? "bg-brand-600" : "bg-slate-400";
  return <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">{items.map((item) => <li key={item} className="flex gap-3"><span className={["mt-2 h-1.5 w-1.5 shrink-0 rounded-full", dotClass].join(" ")} aria-hidden="true" />{item}</li>)}</ul>;
}

export function ReviewPageLayout({ review }: { review: ReviewPageContent }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: review.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-slate-200 bg-slate-50 py-4" aria-label="Affiliate disclosure">
        <Container>
          <div className="flex gap-3 rounded-lg border border-brand-100 bg-white p-4 text-sm leading-6 text-slate-700 shadow-soft">
            <AlertCircle className="mt-0.5 shrink-0 text-brand-700" size={18} aria-hidden="true" />
            <p>{disclosureText}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{review.categoryLabel}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{review.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{review.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalButton href={review.affiliateUrl}>Visit Proton VPN</ExternalButton>
              <a className={secondaryButtonClasses} href="#final-verdict">Jump to Verdict</a>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6" aria-labelledby="quick-summary-heading">
            <h2 id="quick-summary-heading" className="text-xl font-bold text-slate-950">Quick Summary</h2>
            <dl className="mt-5 grid gap-4">
              {review.quickSummary.map((item) => <div key={item.label} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</dt><dd className="mt-1 text-sm font-semibold text-slate-950">{item.value}</dd></div>)}
            </dl>
          </aside>
        </Container>
      </section>

      <Section>
        <SectionHeading title="Executive Summary" />
        <div className="mt-6 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          {review.executiveSummary.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700 first:mt-0">{paragraph}</p>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Decision Snapshot" />
        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {review.decisionSnapshot.map((row) => <tr key={row.label} className="border-b border-slate-200 last:border-0"><th className="w-2/5 bg-slate-50 px-4 py-4 font-semibold text-slate-950 sm:px-6" scope="row">{row.label}</th><td className="px-4 py-4 text-slate-700 sm:px-6">{row.value}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Scoring Methodology" description="These weighted categories define the review framework. The recommendation is research-based and intentionally cautious." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {review.scoringCategories.map((category) => <div key={category.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><p className="text-sm font-semibold text-slate-950">{category.label}</p><p className="mt-2 text-2xl font-bold text-brand-700">{category.weight}</p></div>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Pros and Cons" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-950"><CheckCircle2 size={20} className="text-brand-700" aria-hidden="true" />Pros</h3>
            <BulletList items={review.pros} />
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-950"><MinusCircle size={20} className="text-slate-500" aria-hidden="true" />Cons</h3>
            <BulletList items={review.cons} tone="slate" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Who Should Use Proton VPN?" />
            <div className="mt-6 grid gap-4">{review.whoItIsFor.map((item) => <InfoCard key={item.title} title={item.title} description={item.description} />)}</div>
          </div>
          <div>
            <SectionHeading title="Who Should Skip Proton VPN?" />
            <div className="mt-6 grid gap-4">{review.whoShouldSkipIt.map((item) => <InfoCard key={item.title} title={item.title} description={item.description} />)}</div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Free vs Paid" description="The free plan is one of Proton VPN's main advantages, but it has clear limits." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-slate-950">Free plan strengths</h3><BulletList items={review.freeVsPaid.freeStrengths} /></div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-slate-950">Free plan limitations</h3><BulletList items={review.freeVsPaid.freeLimitations} tone="slate" /></div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-slate-950">Paid plan benefits</h3><BulletList items={review.freeVsPaid.paidBenefits} /></div>
        </div>
      </Section>

      <Section>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Full Review</p>
        <div className="mt-8 grid gap-5">
          {review.fullReviewSections.map((section) => <article key={section.id} id={section.id} className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h2 className="text-xl font-bold text-slate-950">{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph} className="mt-3 text-base leading-7 text-slate-700">{paragraph}</p>)}{section.bullets ? <BulletList items={section.bullets} /> : null}{section.note ? <p className="mt-4 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">{section.note}</p> : null}</article>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Real User Feedback" description="This section summarizes recurring themes from user discussions and review research. It does not include individual testimonials." />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-slate-950">Recurring praise</h3><BulletList items={review.userFeedback.praise} /></div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-slate-950">Recurring complaints</h3><BulletList items={review.userFeedback.complaints} tone="slate" /></div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Alternatives to Consider" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {review.alternatives.map((alternative) => <InfoCard key={alternative.title} title={alternative.title} description={alternative.description} />)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="FAQ" />
        <div className="mt-8 grid gap-4">
          {review.faqs.map((faq) => <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{faq.question}</h3><p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p></article>)}
        </div>
      </Section>

      <Section>
        <article id="final-verdict" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-950">Final Verdict</h2>
          <p className="mt-4 text-base font-semibold text-brand-700">Recommended with reservations.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">Proton VPN is a strong choice for beginners who care most about privacy, transparency, and a trustworthy free plan. It is not the cheapest VPN, not always the fastest, and not always the simplest option. But for users who want a privacy-first VPN from a company with strong transparency signals, Proton VPN deserves serious consideration.</p>
        </article>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Related Guides" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {review.relatedGuides.map((guide) => <a key={guide.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" href={guide.href}><ListChecks className="text-brand-700" size={20} aria-hidden="true" /><h3 className="mt-4 text-base font-semibold text-slate-950">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p></a>)}
        </div>
      </Section>

      <section className="bg-slate-950 py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">{review.finalCtaHeadline}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{review.finalCtaNote}</p>
          </div>
          <ExternalButton href={review.affiliateUrl}>Visit Proton VPN</ExternalButton>
        </Container>
      </section>
    </>
  );
}
