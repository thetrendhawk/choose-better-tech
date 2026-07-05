import { AlertCircle, CheckCircle2, ListChecks, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { dataRemovalHub as hub } from "../data/dataRemovalHub";
import { site } from "../utils/site";

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}

function CardLink({ title, description, href, label }: { title: string; description: string; href: string; label?: string }) {
  const className = "group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";
  const content = (
    <>
      {label ? <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{label}</p> : null}
      <h3 className={label ? "mt-3 text-xl font-bold text-slate-950" : "text-xl font-bold text-slate-950"}>{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">Open path</span>
    </>
  );

  if (href.startsWith("#")) {
    return <a className={className} href={href}>{content}</a>;
  }

  return <Link className={className} to={href}>{content}</Link>;
}

function BulletList({ items, icon = "check" }: { items: string[]; icon?: "check" | "alert" }) {
  const Icon = icon === "check" ? CheckCircle2 : AlertCircle;
  return (
    <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon className="mt-0.5 shrink-0 text-brand-700" size={17} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataRemovalHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "Data Removal Hub", item: site.url + hub.path }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: hub.title,
    description: hub.subtitle,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + hub.path
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hub.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <SEO
        title="Best Data Removal Services for Beginners"
        description="A beginner-friendly data removal decision hub covering Incogni, Optery, manual opt-out, people-search sites, broker removal limits, and privacy tradeoffs."
        path={hub.path}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AffiliateDisclosure />

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Data Removal Decision Hub</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{hub.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{hub.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/comparisons/incogni-vs-optery">Compare Incogni vs Optery</Link>
              <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/reviews">See Data Removal Reviews</Link>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-lift backdrop-blur">
            <h2 className="text-xl font-bold text-slate-950">Reality Check</h2>
            <BulletList items={hub.realityCheck} icon="alert" />
          </aside>
        </Container>
      </section>

      <Section className="bg-white">
        <SectionHeading eyebrow="Quick picks" title="Start With the Path That Matches You" description="These are fit-based starting points, not universal winners." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {hub.quickPicks.map((pick) => (
            <CardLink key={pick.title} title={pick.title} description={pick.description} href={pick.href} label={pick.label} />
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Decision table" title="Choose by Need" description="Use this table to pick the right next step without overestimating what any data-removal service can do." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[56rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Need</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Incogni</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Optery</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Manual opt-out</th>
              </tr>
            </thead>
            <tbody>
              {hub.decisionRows.map((row) => (
                <tr key={row.label} className="border-b border-slate-200 last:border-0">
                  <th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950 sm:px-6" scope="row">{row.label}</th>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">{row.incogni}</td>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">{row.optery}</td>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">{row.manual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Featured reviews" title="Read the Full Reviews" description="Start with the review that matches your preferred workflow: simple automation or stronger proof." />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {hub.featuredReviews.map((review) => (
            <article key={review.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <ShieldCheck className="text-brand-700" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-slate-950">{review.title}</h3>
              <p className="mt-3 text-sm font-semibold text-brand-700">{review.fit}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Key strengths</h4>
                  <BulletList items={review.strengths} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Key limitations</h4>
                  <BulletList items={review.limitations} icon="alert" />
                </div>
              </div>
              <Link className="mt-6 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800" to={review.href}>Read full review</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Main comparison" title="Incogni vs Optery" description="Use the full comparison when both services look plausible." />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-7 text-slate-700">Incogni is better for simpler automation, recurring broker-removal requests, broader geographic fit, and Deloitte process assurance. Optery is better for screenshot proof, exposure visibility, free scan/report entry, and documentation-heavy workflows. Neither is a complete privacy solution.</p>
          <Link className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/comparisons/incogni-vs-optery">Compare Incogni vs Optery</Link>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Buying criteria" title="How to Choose a Data Removal Service" description="The right choice depends on workflow, proof, privacy tradeoffs, and whether manual opt-out is realistic." />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={hub.criteria} />
        </div>
      </Section>

      <Section id="manual-opt-out" className="bg-slate-50">
        <SectionHeading eyebrow="Manual path" title="When Manual Opt-Out May Be Better" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={hub.manualOptOut} />
        </div>
      </Section>

      <Section id="cannot-remove">
        <SectionHeading eyebrow="Category limits" title="What These Services Usually Cannot Remove" description="These limits should be visible before anyone pays for a data-removal service." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hub.cannotRemove.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <AlertCircle className="text-brand-700" size={20} aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-950">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Recommended reading" title="Read in This Order" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hub.readingPath.map((item) => (
            <Link key={item.href + item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" to={item.href}>
              <ListChecks className="text-brand-700" size={20} aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Data Removal Questions" />
        <div className="mt-8 grid gap-4">
          {hub.faqs.map((faq) => (
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

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Open questions" title="Details to Verify Before Buying" description="The approved research marks these details as volatile or unresolved." />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={hub.openQuestions} icon="alert" />
        </div>
      </Section>

      <section className="bg-slate-950 py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Use the right privacy-maintenance path</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Use Incogni for simple hands-off automation, Optery for proof and public listing visibility, and manual opt-out when control matters more than convenience.</p>
          </div>
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/comparisons/incogni-vs-optery">Compare the Services</Link>
        </Container>
      </section>
    </>
  );
}
