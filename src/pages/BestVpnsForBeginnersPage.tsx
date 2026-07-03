import { ArrowRight, CheckCircle2, ListChecks, SearchCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateButton } from "../components/affiliate/AffiliateButton";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

const quickPicks = [
  {
    label: "Best all-around beginner VPN",
    vpn: "NordVPN",
    reason: "A strong starting point for beginners who want a premium all-around VPN with broad usability, security evidence, and mainstream streaming positioning.",
    href: "/reviews/nordvpn-review"
  },
  {
    label: "Best privacy-focused/free-plan option",
    vpn: "Proton VPN",
    reason: "A strong starting point for privacy-focused users who value transparency, open-source apps, audits, and a credible free plan.",
    href: "/reviews/proton-vpn-review"
  },
  {
    label: "Best value for many devices",
    vpn: "Surfshark",
    reason: "A strong starting point for households and budget-conscious users who want beginner-friendly apps and unlimited simultaneous connections.",
    href: "/reviews/surfshark-review"
  }
];

const providerCards = [
  {
    name: "NordVPN",
    badge: "All-around beginner use",
    bestFor: "Beginners who want a polished mainstream VPN for everyday privacy, public Wi-Fi, travel, streaming, and broad usability.",
    tradeoff: "Not the right fit if a free plan is required, and pricing, tiers, renewal terms, and device limits should be rechecked before purchase.",
    reviewHref: "/reviews/nordvpn-review",
    comparisons: [
      { label: "Compare with Proton VPN", href: "/comparisons/nordvpn-vs-protonvpn" },
      { label: "Compare with Surfshark", href: "/comparisons/nordvpn-vs-surfshark" }
    ]
  },
  {
    name: "Proton VPN",
    badge: "Privacy transparency and free plan",
    bestFor: "Users who care most about transparency, audits, open-source apps, Swiss jurisdiction, and a credible free option before paying.",
    tradeoff: "The free plan has meaningful limits, and paid-plan pricing, streaming support, refunds, and feature availability should be verified before deciding.",
    reviewHref: "/reviews/proton-vpn-review",
    comparisons: [
      { label: "Compare with NordVPN", href: "/comparisons/nordvpn-vs-protonvpn" },
      { label: "Compare with Surfshark", href: "/comparisons/proton-vpn-vs-surfshark" }
    ]
  },
  {
    name: "Surfshark",
    badge: "Value and many devices",
    bestFor: "Households, families, and budget-conscious buyers who want mainstream usability and many devices covered under one account.",
    tradeoff: "It is not the strongest privacy-transparency pick, and pricing, renewal terms, trial terms, refund exceptions, and platform details should be verified.",
    reviewHref: "/reviews/surfshark-review",
    comparisons: [
      { label: "Compare with NordVPN", href: "/comparisons/nordvpn-vs-surfshark" },
      { label: "Compare with Proton VPN", href: "/comparisons/proton-vpn-vs-surfshark" }
    ]
  }
];

const comparisonLinks = [
  {
    title: "NordVPN vs Proton VPN",
    href: "/comparisons/nordvpn-vs-protonvpn",
    description: "Use this if you are deciding between mainstream all-around fit and stronger privacy-transparency signals."
  },
  {
    title: "NordVPN vs Surfshark",
    href: "/comparisons/nordvpn-vs-surfshark",
    description: "Use this if you are deciding between premium all-around fit and household value with many devices."
  },
  {
    title: "Proton VPN vs Surfshark",
    href: "/comparisons/proton-vpn-vs-surfshark",
    description: "Use this if you are deciding between privacy/free-plan credibility and value-focused mainstream use."
  }
];

const educationLinks = [
  { title: "How VPNs Work", href: "/guides/how-vpns-work", description: "Understand what a VPN can and cannot protect before choosing one." },
  { title: "Free VPN vs Paid VPN", href: "/guides/free-vpn-vs-paid", description: "Compare free-plan limits, paid-plan benefits, and provider trust signals." },
  { title: "VPN Buying Guide", href: "/guides/vpn-buying-guide", description: "Use a practical checklist for privacy, audits, features, pricing, and fit." },
  { title: "VPN Myths", href: "/guides/vpn-myths", description: "Avoid exaggerated VPN claims about anonymity, malware, and no-logs promises." },
  { title: "Is Proton VPN Free Good Enough?", href: "/guides/is-proton-vpn-free-good-enough", description: "Decide whether Proton VPN's free plan is enough for your use case." }
];

const faqs = [
  { question: "What is the best VPN for most beginners?", answer: "NordVPN is the strongest all-around starting point in this guide for many beginners, but it is not a universal winner. Proton VPN and Surfshark can be better fits when privacy transparency, a free plan, value, or many devices matter more." },
  { question: "Which VPN should privacy-focused beginners read first?", answer: "Proton VPN is the better first read for users who prioritize transparency, open-source apps, audits, Swiss jurisdiction, and a credible free plan." },
  { question: "Which VPN is best for households or many devices?", answer: "Surfshark is the better first read for households, budget-conscious buyers, and users who want unlimited simultaneous connections." },
  { question: "When should I use the VPN Decision Hub?", answer: "Use the VPN Decision Hub if you are not sure whether to start with a review, a comparison, or a beginner guide. It routes readers by need instead of asking them to choose a brand first." },
  { question: "Should I compare VPNs before buying?", answer: "Yes, especially if your decision is close. Use NordVPN vs Proton VPN for all-around versus privacy fit, NordVPN vs Surfshark for premium versus value fit, and Proton VPN vs Surfshark for privacy/free-plan versus household-value fit." },
  { question: "What should I verify before purchasing?", answer: "Verify current pricing, subscription tiers, device limits, server counts, supported countries, platform support, trial terms, refund terms, and streaming compatibility because these details can change." }
];

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}

function TextLink({ to, children }: { to: string; children: string }) {
  return (
    <Link className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800" to={to}>
      {children}
      <ArrowRight size={15} aria-hidden="true" />
    </Link>
  );
}

export function BestVpnsForBeginnersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <SEO
        title="Best VPNs for Beginners: NordVPN, Proton VPN, and Surfshark Compared"
        description="A beginner-friendly VPN guide comparing NordVPN, Proton VPN, and Surfshark by all-around fit, privacy transparency, free-plan value, households, and tradeoffs."
        path="/guides/best-vpns-for-beginners"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AffiliateDisclosure />

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">VPN Buying Guide</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">Best VPNs for Beginners: NordVPN, Proton VPN, and Surfshark Compared</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">A research-based guide for first-time VPN buyers choosing between the three published Choose Better Tech VPN reviews, comparison pages, and beginner education guides.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#quick-picks">See Quick Picks</a>
              <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/vpn">Open VPN Decision Hub</Link>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-lift backdrop-blur">
            <h2 className="text-xl font-bold text-slate-950">Short Answer</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {quickPicks.map((pick) => (
                <li key={pick.vpn} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-700" size={17} aria-hidden="true" />
                  <span><strong className="text-slate-950">{pick.vpn}:</strong> {pick.label.replace("Best ", "").toLowerCase()}.</span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <Section id="quick-picks">
        <SectionHeading title="Quick Picks" description="These are fit-based recommendations, not universal rankings. The right VPN depends on what problem you need it to solve." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {quickPicks.map((pick) => (
            <article key={pick.vpn} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{pick.label}</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{pick.vpn}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{pick.reason}</p>
              <div className="mt-5">
                <TextLink to={pick.href}>Read review</TextLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Provider Cards" description="Start with the review that matches your use case, then use the comparison links if the decision is close." />
        <div className="mt-8 grid gap-5">
          {providerCards.map((provider) => (
            <article key={provider.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Best for: {provider.badge}</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">{provider.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{provider.bestFor}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{provider.tradeoff}</p>
                </div>
                <div className="flex min-w-56 flex-col gap-3">
                  <TextLink to={provider.reviewHref}>Read full review</TextLink>
                  {provider.comparisons.map((comparison) => (
                    <TextLink key={comparison.href} to={comparison.href}>{comparison.label}</TextLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 rounded-lg border border-brand-100 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_52%,#eefdf9_100%)] p-6 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Decision help</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Not Sure Which VPN Fits You?</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">Start with the VPN Decision Hub if you want to choose by need first: privacy, value, streaming, family use, free-plan interest, or comparison path.</p>
          </div>
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/vpn">Open VPN Decision Hub</Link>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Compare Before You Choose" description="Use these pages when two providers both look like a reasonable fit." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {comparisonLinks.map((comparison) => (
            <Link key={comparison.href} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" to={comparison.href}>
              <ListChecks className="text-brand-700" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-slate-950">{comparison.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{comparison.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Beginner Education Links" description="Read these if you want more context before choosing a paid plan or installing a free VPN." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {educationLinks.map((guide) => (
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
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Evidence First, Fit Second, Commissions Never First</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">Recommendations are based on research, evidence organization, editorial review, and reader fit. Affiliate relationships do not determine conclusions, and uncertainty around volatile details is preserved instead of hidden.</p>
          </div>
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/about/how-we-review-software">
            <SearchCheck size={17} aria-hidden="true" />
            How We Review
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-bold text-slate-950">{faq.question}</h2>
              <p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-slate-950 py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Ready to compare VPN options?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Use the cluster pages to choose by fit, then verify current pricing, plans, device limits, and compatibility before purchasing.</p>
          </div>
          <AffiliateButton provider="vpn-comparison">Compare VPN Options</AffiliateButton>
        </Container>
      </section>
    </>
  );
}
