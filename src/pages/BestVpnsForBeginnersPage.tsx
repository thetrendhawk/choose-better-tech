import { ListChecks } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateButton } from "../components/affiliate/AffiliateButton";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

const recommendations = [
  { label: "Recommended for Most Beginners", vpn: "NordVPN", reason: "A strong fit when you want one beginner-friendly option that balances simple apps, performance, streaming support, broad features, and familiar support resources." },
  { label: "Recommended Free Option", vpn: "Proton VPN", reason: "A strong fit when you want a no-cost VPN with unlimited data and strong privacy signals, as long as you understand the free tier's limits." },
  { label: "Recommended for Budget Households", vpn: "Surfshark", reason: "A strong fit when you want to cover many devices and care about value, because it is often priced competitively and supports unlimited simultaneous devices." },
  { label: "Recommended for Privacy Purists", vpn: "Mullvad", reason: "A strong fit when minimal account requirements matter more than a mainstream interface or streaming-first features." },
  { label: "Recommended for Streaming", vpn: "NordVPN", reason: "A strong fit when streaming is a priority because research consistently points to strong speed, reliability, and broad streaming performance." },
  { label: "Recommended for Students", vpn: "Proton VPN", reason: "A practical fit when you need a free starting point for basic privacy and may later upgrade for more speed, countries, and features." },
  { label: "Recommended for Travelers", vpn: "ExpressVPN", reason: "A good fit when you prioritize polished apps, simple setup, and consistent usability while moving between networks." }
];

const comparisonRows = [
  { vpn: "NordVPN", bestFor: "Most beginners", ease: "High", free: "No", streaming: "Strong", privacy: "Strong", recommendation: "Recommended when you want one balanced beginner option" },
  { vpn: "Proton VPN", bestFor: "Privacy and free plan", ease: "Good", free: "Yes", streaming: "Good on paid plans", privacy: "High", recommendation: "Recommended when privacy or a free plan matters most" },
  { vpn: "Surfshark", bestFor: "Households and value", ease: "High", free: "No", streaming: "Good", privacy: "Good", recommendation: "Recommended when device coverage and value matter" },
  { vpn: "ExpressVPN", bestFor: "Travel and simplicity", ease: "Very high", free: "No", streaming: "Strong", privacy: "Strong", recommendation: "Recommended when polish and travel simplicity matter" },
  { vpn: "Mullvad", bestFor: "Advanced privacy", ease: "Moderate", free: "No", streaming: "Limited focus", privacy: "Very high", recommendation: "Recommended when privacy minimization matters most" },
  { vpn: "Private Internet Access", bestFor: "Budget and customization", ease: "Moderate", free: "No", streaming: "Mixed to good", privacy: "Good", recommendation: "Recommended when budget and settings matter" }
];

const vpnSections = [
  {
    name: "Proton VPN",
    for: "Privacy-focused beginners, students, travelers, remote workers, and anyone who wants a trustworthy free VPN before paying.",
    skip: "Skip it if you want the absolute cheapest paid VPN, unlimited devices, or the simplest possible paid VPN experience.",
    strengths: ["Audited no-logs policy", "Swiss jurisdiction", "Open-source apps", "Strong free plan with unlimited data", "Good documentation"],
    weaknesses: ["Free tier can be slower", "Paid plans may not be the cheapest", "Advanced features can confuse beginners at first"],
    bottomLine: "Choose Proton VPN if privacy and a credible free plan matter more than getting the lowest paid price."
  },
  {
    name: "NordVPN",
    for: "Most beginners who want a fast, mainstream VPN for everyday privacy, streaming, travel, and simple setup.",
    skip: "Skip it if a free plan is required or if you prefer a provider with minimal account requirements.",
    strengths: ["Beginner-friendly apps", "Strong performance reputation", "Good streaming fit", "Broad platform support", "Helpful security features"],
    weaknesses: ["No free plan", "Feature-heavy interface may still feel busy to some new users", "Pricing changes with promotions and billing cycles"],
    bottomLine: "Choose NordVPN when you want a balanced, beginner-friendly VPN for speed, streaming, travel, and everyday privacy."
  },
  {
    name: "Surfshark",
    for: "Budget-conscious households, families, and users who want to cover many devices without managing connection limits.",
    skip: "Skip it if your priority is the most privacy-minimal account model or the most premium travel experience.",
    strengths: ["Unlimited simultaneous devices", "Often strong value", "Beginner-friendly apps", "Good feature set", "Useful for households"],
    weaknesses: ["No permanent free plan", "Not the top privacy-purist choice", "Performance can vary by route and server"],
    bottomLine: "Choose Surfshark when household value and unlimited simultaneous devices matter more than privacy-minimal account design."
  },
  {
    name: "ExpressVPN",
    for: "Beginners and travelers who want a polished VPN experience and are willing to pay more for simplicity.",
    skip: "Skip it if lowest price or maximum customization is your main priority.",
    strengths: ["Very polished apps", "Simple setup", "Strong travel fit", "Good streaming reputation", "Broad platform support"],
    weaknesses: ["Usually positioned as a premium option", "No free plan", "Not the best value for budget-only shoppers"],
    bottomLine: "ExpressVPN is ideal for users who prioritize simplicity, travel, and a premium user experience."
  },
  {
    name: "Mullvad",
    for: "Advanced privacy users who want minimal account requirements and do not need a heavily polished mainstream VPN.",
    skip: "Skip it if you want the easiest beginner interface, broad streaming focus, or bundled extras.",
    strengths: ["Minimal account model", "Strong privacy reputation", "Transparent pricing approach", "Good fit for privacy purists", "Open-source transparency"],
    weaknesses: ["Less beginner-friendly than mainstream picks", "Streaming is not the main focus", "Can feel sparse for new users"],
    bottomLine: "Choose Mullvad when advanced privacy and minimal account requirements matter more than mainstream simplicity."
  },
  {
    name: "Private Internet Access",
    for: "Budget-conscious users who want open-source apps, customization, and a large network while accepting a more technical feel.",
    skip: "Skip it if you want the simplest interface or are uncomfortable with US jurisdiction.",
    strengths: ["Budget-friendly positioning", "Open-source apps", "Large server network", "Highly configurable", "Good for users who like settings"],
    weaknesses: ["Can feel more technical", "US jurisdiction may concern some privacy-focused users", "Streaming reliability can be mixed by service and location"],
    bottomLine: "Choose PIA when budget and customization matter and you are comfortable with a more technical interface."
  }
];

const decisionTree = [
  { want: "Privacy", pick: "Proton VPN or Mullvad", reason: "Choose Proton for a beginner-friendlier privacy option; choose Mullvad for a more privacy-purist setup." },
  { want: "Streaming", pick: "NordVPN", reason: "NordVPN is a strong streaming fit for many beginners, while ExpressVPN is worth comparing if you prefer a more polished premium interface." },
  { want: "Gaming", pick: "NordVPN", reason: "Start by comparing NordVPN because performance is a core strength, but make the final decision based on latency on your own routes." },
  { want: "Lowest price", pick: "Surfshark or PIA", reason: "Surfshark is better for households; PIA is better for budget users who like customization." },
  { want: "Free VPN", pick: "Proton VPN", reason: "Its free plan has strong privacy basics and unlimited data, with clear limits." },
  { want: "Travel", pick: "ExpressVPN", reason: "It is the simplest premium travel pick for users who want polished apps and low friction." },
  { want: "Torrenting", pick: "NordVPN, Proton VPN paid, or PIA", reason: "Compare P2P support, speeds, and settings before choosing." },
  { want: "Simple setup", pick: "ExpressVPN or NordVPN", reason: "Both are more beginner-friendly than technical privacy-first options." }
];

const faqs = [
  { question: "Do beginners really need a VPN?", answer: "Not everyone needs one all the time. A VPN is most useful on public Wi-Fi, while traveling, when reducing ISP visibility matters, or when you want to hide your IP address from websites. It does not make you completely anonymous." },
  { question: "What is the easiest VPN for beginners?", answer: "ExpressVPN and NordVPN are the easiest mainstream options for most beginners. Proton VPN is also approachable, especially for privacy-focused users, but its advanced features can take more learning." },
  { question: "What is the best free VPN for beginners?", answer: "For beginners who want a no-cost starting point, Proton VPN is the strongest free recommendation because it offers unlimited data and strong privacy basics. Beginners should still expect limits around server choice, speeds, connections, and paid features." },
  { question: "Will a VPN slow down my internet?", answer: "Usually, at least somewhat. The impact depends on your VPN provider, server, distance, route, ISP, device, and network congestion. Paid plans are generally more reliable than free tiers." },
  { question: "Can a VPN protect me from hackers?", answer: "A VPN can protect traffic on networks you do not trust, such as public Wi-Fi, but it does not stop phishing, malware, weak passwords, or unsafe downloads." },
  { question: "Is NordVPN better than Proton VPN?", answer: "NordVPN is a better fit for many beginners who want speed, streaming, and simple setup. Proton VPN is a better fit for users who prioritize privacy transparency or want a trustworthy free plan." },
  { question: "Is Surfshark good for families?", answer: "Yes. Surfshark is a strong household value pick because unlimited simultaneous devices make it easier to cover many phones, laptops, tablets, and streaming devices." },
  { question: "Should I choose Mullvad as my first VPN?", answer: "Only if privacy is your top priority and you are comfortable with a less mainstream experience. Most beginners will find NordVPN, Proton VPN, Surfshark, or ExpressVPN easier to start with." }
];

const relatedGuides = [
  { title: "VPN Decision Hub", href: "/vpn" },
  { title: "NordVPN Review", href: "/reviews/nordvpn-review" },
  { title: "Proton VPN Review", href: "/reviews/proton-vpn-review" },
  { title: "How VPNs Work", href: "/guides/how-vpns-work" },
  { title: "Free VPN vs Paid VPN", href: "/guides/free-vpn-vs-paid" },
  { title: "VPN Buying Guide", href: "/guides/vpn-buying-guide" },
  { title: "VPN Myths", href: "/guides/vpn-myths" },
  { title: "Is Proton VPN Free Good Enough?", href: "/guides/is-proton-vpn-free-good-enough" }
];

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return <div className="max-w-3xl"><h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>{description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}</div>;
}

function BulletList({ items, tone = "brand" }: { items: string[]; tone?: "brand" | "slate" }) {
  const dotClass = tone === "brand" ? "bg-brand-600" : "bg-slate-400";
  return <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">{items.map((item) => <li key={item} className="flex gap-3"><span className={["mt-2 h-1.5 w-1.5 shrink-0 rounded-full", dotClass].join(" ")} aria-hidden="true" />{item}</li>)}</ul>;
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
      <SEO title="Best VPNs for Beginners" description="A beginner-friendly guide to the best VPNs for first-time users, comparing privacy, ease of use, streaming, free plans, pricing, and support." path="/guides/best-vpns-for-beginners" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AffiliateDisclosure />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">VPN Buying Guide</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">Best VPNs for Beginners</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">A research-based guide for first-time VPN buyers who want a practical, honest way to choose between privacy, streaming, price, simplicity, and free-plan tradeoffs.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#recommendations">See Recommendations</a>
              <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#decision">Choose by Need</a>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">Short Answer</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">Start with NordVPN if you want one balanced beginner option. Choose Proton VPN if privacy or a trustworthy free plan matters most. Choose Surfshark if household value and unlimited devices are the priority.</p>
          </aside>
        </Container>
      </section>

      <Section>
        <SectionHeading title="Executive Summary" />
        <div className="mt-6 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-slate-700">The right VPN for a beginner depends on what problem you are trying to solve. If you want one broadly useful starting point, NordVPN is a strong choice because it balances ease of use, speed, streaming, support, and security features. If you care most about privacy or want a credible free plan, Proton VPN is the better starting point. If you need to cover a household without overspending, Surfshark is the better value fit.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">ExpressVPN makes more sense for people who want a polished premium VPN for travel and simple setup. Mullvad makes more sense for advanced privacy users who want minimal account requirements. Private Internet Access makes more sense for budget-conscious users who are comfortable with more settings and a more technical feel.</p>
        </div>
      </Section>

      <Section id="recommendations" className="bg-slate-50">
        <SectionHeading title="Quick Recommendations" description="These picks are based on beginner fit, research findings, and clear tradeoffs rather than one-size-fits-all rankings." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item) => <article key={item.label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{item.label}</p><h3 className="mt-3 text-xl font-bold text-slate-950">{item.vpn}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{item.reason}</p></article>)}
        </div>
      </Section>

      <Section>
        <SectionHeading title="How We Evaluated These VPNs" description="This is a research-based buying guide, not a claim of personal hands-on testing." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Privacy", "Audits", "Ease of Use", "Streaming", "Performance", "Pricing", "Support", "Community Feedback"].map((criterion) => <div key={criterion} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><h3 className="font-semibold text-slate-950">{criterion}</h3><p className="mt-2 text-sm leading-6 text-slate-600">We weighted how this factor affects a first-time buyer, then compared provider strengths, limits, and recurring user feedback.</p></div>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Comparison Table" />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white"><tr>{["VPN", "Good Fit For", "Ease of Use", "Free Plan", "Streaming", "Privacy", "Contextual Recommendation"].map((heading) => <th key={heading} className="px-4 py-4 font-semibold" scope="col">{heading}</th>)}</tr></thead>
            <tbody>
              {comparisonRows.map((row) => <tr key={row.vpn} className="border-b border-slate-200 last:border-0"><th className="px-4 py-4 font-semibold text-slate-950" scope="row">{row.vpn}</th><td className="px-4 py-4 text-slate-700">{row.bestFor}</td><td className="px-4 py-4 text-slate-700">{row.ease}</td><td className="px-4 py-4 text-slate-700">{row.free}</td><td className="px-4 py-4 text-slate-700">{row.streaming}</td><td className="px-4 py-4 text-slate-700">{row.privacy}</td><td className="px-4 py-4 text-slate-700">{row.recommendation}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Individual VPN Sections" />
        <div className="mt-8 grid gap-5">
          {vpnSections.map((vpn) => <article key={vpn.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h2 className="text-2xl font-bold text-slate-950">{vpn.name}</h2><div className="mt-5 grid gap-5 lg:grid-cols-2"><div><h3 className="font-semibold text-slate-950">Who it's for</h3><p className="mt-2 text-sm leading-6 text-slate-700">{vpn.for}</p></div><div><h3 className="font-semibold text-slate-950">Who should skip it</h3><p className="mt-2 text-sm leading-6 text-slate-700">{vpn.skip}</p></div><div><h3 className="font-semibold text-slate-950">Biggest strengths</h3><BulletList items={vpn.strengths} /></div><div><h3 className="font-semibold text-slate-950">Biggest weaknesses</h3><BulletList items={vpn.weaknesses} tone="slate" /></div></div><p className="mt-5 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800">{vpn.bottomLine}</p></article>)}
        </div>
      </Section>

      <Section id="decision" className="bg-slate-50">
        <SectionHeading title="Which VPN Should You Choose?" description="Start with what you want the VPN to do, then choose the provider that fits that job." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {decisionTree.map((item) => <article key={item.want} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><p className="text-sm font-semibold text-brand-700">I want... {item.want}</p><h3 className="mt-2 text-xl font-bold text-slate-950">{item.pick}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{item.reason}</p></article>)}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h2 className="text-lg font-bold text-slate-950">{faq.question}</h2><p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p></article>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading title="Final Recommendation" />
        <div className="mt-6 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-slate-700">There is no universally best VPN. Different users have different priorities, and the right choice depends on whether you care most about privacy, streaming, price, device coverage, travel, or simplicity.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">For a balanced beginner option, start with NordVPN. For privacy or a trustworthy free plan, start with Proton VPN. For household value, compare Surfshark first. For simplicity and travel, compare ExpressVPN. For advanced privacy, compare Mullvad. For budget-conscious users comfortable with a more technical interface, compare PIA.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Related Guides" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedGuides.map((guide) => <Link key={guide.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" to={guide.href}><ListChecks className="text-brand-700" size={20} aria-hidden="true" /><h3 className="mt-4 text-base font-semibold text-slate-950">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">Continue through the VPN knowledge hub.</p></Link>)}
        </div>
      </Section>

      <section className="bg-slate-950 py-14 text-white">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Ready to compare VPNs?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Check current pricing, features, device limits, and plan availability before purchasing.</p>
          </div>
          <AffiliateButton provider="vpn-comparison">Compare VPN Options</AffiliateButton>
        </Container>
      </section>
    </>
  );
}
