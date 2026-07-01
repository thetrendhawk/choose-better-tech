import { AlertCircle, ExternalLink, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";
import type { VpnGuideContent } from "../../types/guide";
import { site } from "../../utils/site";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const disclosureText = "We may earn a commission if you purchase through links on this page, at no extra cost to you. Our recommendations are based on research, product fit, and reader needs.";

const primaryButtonClasses = "inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";
const secondaryButtonClasses = "inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return <div className="max-w-3xl"><h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>{description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}</div>;
}

function BulletList({ items }: { items: string[] }) {
  return <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />{item}</li>)}</ul>;
}

function InternalLinkButton({ href, children, variant = "primary" }: { href: string; children: string; variant?: "primary" | "secondary" }) {
  return <Link className={variant === "primary" ? primaryButtonClasses : secondaryButtonClasses} to={href}>{children}</Link>;
}

export function VpnGuidePageLayout({ guide }: { guide: VpnGuideContent }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: site.url + "/guides" },
      { "@type": "ListItem", position: 3, name: guide.title, item: site.url + guide.path }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updatedAt,
    datePublished: guide.updatedAt,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + guide.path
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{guide.categoryLabel}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{guide.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{guide.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InternalLinkButton href="#summary" variant="secondary">Read Summary</InternalLinkButton>
              <InternalLinkButton href={guide.cta.primaryHref}>{guide.cta.primaryLabel}</InternalLinkButton>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6" aria-labelledby={`${guide.slug}-takeaways`}>
            <h2 id={`${guide.slug}-takeaways`} className="text-xl font-bold text-slate-950">Key Takeaways</h2>
            <BulletList items={guide.keyTakeaways.slice(0, 4)} />
          </aside>
        </Container>
      </section>

      <Section id="summary">
        <SectionHeading title="Executive Summary" />
        <div className="mt-6 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          {guide.executiveSummary.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700 first:mt-0">{paragraph}</p>)}
          <p className="mt-5 text-sm font-semibold text-slate-600">Last updated: {guide.updatedAt}</p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Key Takeaways" description="Short version for beginners comparing VPN options." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {guide.keyTakeaways.map((takeaway) => <div key={takeaway} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><p className="text-sm leading-6 text-slate-700">{takeaway}</p></div>)}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Evidence-Based Explanation" description="Claims here are grounded in the VPN cluster research file and written cautiously where evidence is mixed." />
        <div className="mt-8 grid gap-5">
          {guide.sections.map((section) => <article key={section.id} id={section.id} className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h2 className="text-xl font-bold text-slate-950">{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph} className="mt-3 text-base leading-7 text-slate-700">{paragraph}</p>)}{section.bullets ? <BulletList items={section.bullets} /> : null}{section.note ? <p className="mt-4 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800">{section.note}</p> : null}</article>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Practical Examples" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {guide.examples.map((example) => <article key={example.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{example.title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{example.description}</p></article>)}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Decision Framework" description="Use these conditional recommendations instead of looking for a universal best answer." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white"><tr><th className="px-4 py-4 font-semibold" scope="col">Situation</th><th className="px-4 py-4 font-semibold" scope="col">Recommendation</th><th className="px-4 py-4 font-semibold" scope="col">Why</th></tr></thead>
            <tbody>
              {guide.decisionFramework.map((item) => <tr key={item.label} className="border-b border-slate-200 last:border-0"><th className="px-4 py-4 font-semibold text-slate-950" scope="row">{item.label}</th><td className="px-4 py-4 text-slate-700">{item.recommendation}</td><td className="px-4 py-4 text-slate-700">{item.reasoning}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="FAQ" />
        <div className="mt-8 grid gap-4">
          {guide.faqs.map((faq) => <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h2 className="text-lg font-bold text-slate-950">{faq.question}</h2><p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p></article>)}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Related Guides" description="Continue through the VPN knowledge hub." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guide.relatedGuides.map((item) => <Link key={item.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to={item.href}><ListChecks className="text-brand-700" size={20} aria-hidden="true" /><h3 className="mt-4 text-base font-semibold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></Link>)}
        </div>
      </Section>

      <section className="bg-slate-950 py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">{guide.cta.headline}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{guide.cta.note}</p>
          </div>
          {guide.cta.primaryHref.startsWith("http") ? <a className={primaryButtonClasses + " gap-2"} href={guide.cta.primaryHref} rel="nofollow sponsored noopener noreferrer" target="_blank">{guide.cta.primaryLabel}<ExternalLink size={16} aria-hidden="true" /></a> : <InternalLinkButton href={guide.cta.primaryHref}>{guide.cta.primaryLabel}</InternalLinkButton>}
        </Container>
      </section>
    </>
  );
}
