import { CheckCircle2, ListChecks, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { vpnDecisionHub as hub } from "../data/vpnDecisionHub";
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

  return (
    <Link className={className} to={href}>
      {content}
    </Link>
  );
}

export function VpnDecisionHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "VPN Decision Hub", item: site.url + hub.path }
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

  return (
    <>
      <SEO
        title="Which VPN Is Right for You?"
        description="A beginner-friendly VPN decision hub for choosing between NordVPN, Proton VPN, and Surfshark by privacy, value, streaming, family use, and overall fit."
        path={hub.path}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">VPN Decision Hub</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{hub.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{hub.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#choose-by-need">Choose by Need</a>
              <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#comparison-paths">Compare VPNs</a>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-lift backdrop-blur">
            <h2 className="text-xl font-bold text-slate-950">Start Here</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {["Pick by need, not hype.", "Use comparisons for close decisions.", "Verify volatile details before buying."].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-700" size={17} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <Section className="bg-white">
        <SectionHeading eyebrow="Quick picks" title="Start With the Review That Matches You" description="These are reader-fit starting points, not universal winners." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {hub.quickPicks.map((pick) => (
            <CardLink key={pick.provider} title={pick.provider} description={pick.description} href={pick.href} label={pick.label} />
          ))}
        </div>
      </Section>

      <Section id="choose-by-need" className="bg-slate-50">
        <SectionHeading eyebrow="Decision cards" title="Choose by Need" description="Use the card that sounds closest to your question, then read the linked review, comparison, or guide." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hub.needs.map((need) => (
            <CardLink key={need.title} title={need.title} description={need.description} href={need.href} label={need.recommendation} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Provider snapshot" title="Three VPNs, Three Different Fits" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {hub.providers.map((provider) => (
            <article key={provider.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <ShieldCheck className="text-brand-700" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-slate-950">{provider.name}</h3>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-950">Positioning</dt>
                  <dd className="mt-1 leading-6 text-slate-600">{provider.positioning}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-950">Best for</dt>
                  <dd className="mt-1 leading-6 text-slate-600">{provider.bestFor}</dd>
                </div>
              </dl>
              <Link className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800" to={provider.href}>Read review</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section id="comparison-paths" className="bg-slate-50">
        <SectionHeading eyebrow="Comparison paths" title="Use the Right Comparison" description="Each comparison answers a different decision question." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {hub.comparisons.map((comparison) => (
            <CardLink key={comparison.href} title={comparison.title} description={comparison.description} href={comparison.href} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Learning path" title="Beginner VPN Guides" description="If you are still learning the basics, read these before choosing a provider." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hub.learningPath.map((guide) => (
            <Link key={guide.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" to={guide.href}>
              <ListChecks className="text-brand-700" size={20} aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-slate-950">{guide.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Editorial trust</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Recommendations Start With Evidence</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">Choose Better Tech uses research, evidence organization, editorial planning, and review before making recommendations. We preserve uncertainty instead of hiding it.</p>
          </div>
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/about/how-we-review-software">
            <SearchCheck size={17} aria-hidden="true" />
            How We Review
          </Link>
        </div>
      </Section>

      <section className="bg-slate-950 py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Ready to choose a path?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Start with the review or comparison that matches your top need, then verify current pricing, plans, and compatibility before buying.</p>
          </div>
          <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#choose-by-need">Choose by Need</a>
        </Container>
      </section>
    </>
  );
}
