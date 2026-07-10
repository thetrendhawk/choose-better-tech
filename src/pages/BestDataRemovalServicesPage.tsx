import { CheckCircle2, ExternalLink, Eye, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const pagePath = "/best-data-removal-services";
const pageTitle = "Best Data Removal Services in 2026";
const pageDescription = "Compare Incogni, Optery, and DeleteMe by removal approach, verification, coverage, pricing, privacy, and the users each service fits best.";
const checkedDate = "July 10, 2026";

const recommendations = [
  { name: "Optery", label: "Best for verification and visibility", tradeoff: "Its strongest proof features and custom removals depend on paid plan level, and availability is not universal.", href: "/reviews/optery-review", icon: Eye },
  { name: "Incogni", label: "Best for broad automated maintenance", tradeoff: "It gives less screenshot-centered proof than Optery, and broader custom work belongs to higher tiers.", href: "/reviews/incogni-review", icon: ShieldCheck },
  { name: "DeleteMe", label: "Best established human-assisted option", tradeoff: "Its consumer commitment is less flexible than a typical month-to-month plan, and coverage labels require careful reading.", href: "/reviews/deleteme-review", icon: CheckCircle2 },
  { name: "Manual opt-outs", label: "Best free alternative", tradeoff: "You must find listings, submit requests, keep records, and repeat the work yourself.", href: "/are-data-removal-services-worth-it", icon: CheckCircle2 }
];

const comparisonRows = [
  { service: "Optery", best: "Visible proof and detailed reporting", free: "Free exposure scan/report; removals require a paid plan", approach: "Automated removals, recurring scans, and higher-tier custom work", proof: "Profile links and plan-dependent screenshot reporting", billing: "Monthly and annual paid options; verify current checkout terms", limit: "Best features are tier-dependent; geographic eligibility is limited" },
  { service: "Incogni", best: "Low-maintenance recurring automation", free: "No permanent free removal plan identified", approach: "Automated requests and resubmissions; higher tiers add custom removals", proof: "Central dashboard and status reporting, less screenshot-centered", billing: "Monthly and annual options; promotional and renewal terms can differ", limit: "Custom removals and phone help require broader plans" },
  { service: "DeleteMe", best: "Established expert-assisted workflow", free: "No permanent free removal plan identified", approach: "Human-assisted requests, monitoring, reports, and plan-dependent custom work", proof: "Privacy reports and dashboard progress", billing: "Primarily annual or longer consumer commitments", limit: "Not the strongest measured performer in Consumer Reports' narrow test" },
  { service: "Manual", best: "No subscription cost and direct control", free: "Yes", approach: "You identify sites, submit requests, and follow up", proof: "Your own spreadsheet, emails, and direct checks", billing: "No subscription", limit: "High time burden and no centralized discovery or maintenance" }
];

const criteria = [
  "Geographic eligibility and whether the exposed sites are actually supported",
  "Automated broker coverage versus people-search listings, private databases, and custom requests",
  "Human assistance, removal verification, reports, rescans, and resubmissions",
  "Family coverage and privacy boundaries between household members",
  "Monthly versus annual billing, renewal terms, cancellation, and refund language",
  "Privacy policy, identity-data handling, retention, account deletion, and published security documentation",
  "Support channels and help for difficult or unsupported removals",
  "Independent effectiveness evidence and value compared with manual opt-outs"
];

const products = [
  {
    id: "optery", name: "Optery", label: "Best for verification and visibility",
    intro: "Optery stands out because it helps users see public exposure before paying and makes removal progress more observable than a simple request count.",
    approach: "Its free Basic tier is primarily an exposure report, not a free removal service. Paid plans add automated removals and recurring monthly scans; higher tiers add broader reporting, custom removals, priority support, and limited eligible search-cache help.",
    strengths: ["Free exposure discovery and profile links", "Screenshot-oriented reporting on supported paid tiers", "Recurring scans and resubmissions", "Custom-removal support on higher tiers"],
    limits: ["Free users still perform removals themselves", "Plan names, site definitions, report scope, and country support can change", "It cannot remove public records, social posts, news, or every original source"],
    choose: "Choose it when visible evidence, profile discovery, and detailed status reporting matter most.",
    skip: "Skip it when you want the simplest set-it-and-forget-it workflow or it does not support your location.",
    review: "/reviews/optery-review", comparisons: [{ label: "Optery vs Incogni", href: "/comparisons/incogni-vs-optery" }, { label: "Optery vs DeleteMe", href: "/comparisons/optery-vs-deleteme" }]
  },
  {
    id: "incogni", name: "Incogni", label: "Best for broad automated maintenance",
    intro: "Incogni is the strongest fit for users who want recurring broker requests with less day-to-day involvement and a broader documented geographic footprint than the other options in CBT's current research.",
    approach: "The core plan emphasizes automated requests and recurring resubmissions. Broader tiers add custom removals and phone support; family variants cover multiple members, but each current plan limit must be checked before purchase.",
    strengths: ["Low-friction automated request workflow", "Recurring resubmissions as broker data returns", "Public and private broker focus", "Individual and family structures"],
    limits: ["No permanent free removal tier identified", "Less screenshot-heavy verification than Optery", "Vendor coverage totals are not directly comparable with rival lists", "Custom work is tier-dependent"],
    choose: "Choose it when broad automation and reduced maintenance matter more than seeing screenshot proof for each listing.",
    skip: "Skip it when you want a free exposure report, maximum hands-on control, or a human-advisor-centered experience.",
    review: "/reviews/incogni-review", comparisons: [{ label: "Incogni vs Optery", href: "/comparisons/incogni-vs-optery" }, { label: "Incogni vs DeleteMe", href: "/comparisons/incogni-vs-deleteme" }]
  },
  {
    id: "deleteme", name: "DeleteMe", label: "Best established human-assisted option",
    intro: "DeleteMe's clearest advantage is an established, higher-touch workflow built around privacy advisors, recurring reports, and help with custom removals.",
    approach: "The service submits and follows up on supported removals, provides privacy reports, and accepts plan-dependent custom requests. Its master site list spans multiple plan and request categories, so the headline total should not be read as Standard-plan coverage.",
    strengths: ["Long-established provider model", "Human assistance and privacy reports", "Custom-request workflow", "Mature family, professional, and business support signals"],
    limits: ["No permanent free removal tier identified", "Consumer plans emphasize annual or longer commitments", "Country and plan depth vary", "Consumer Reports found midlevel performance in its narrow people-search test"],
    choose: "Choose it when expert assistance, reports, and an established provider experience justify a longer commitment.",
    skip: "Skip it when you prioritize flexible monthly billing, screenshot-first proof, or lower-friction automation.",
    review: "/reviews/deleteme-review", comparisons: [{ label: "DeleteMe vs Incogni", href: "/comparisons/incogni-vs-deleteme" }, { label: "DeleteMe vs Optery", href: "/comparisons/optery-vs-deleteme" }]
  }
];

const scenarios = [
  ["I want visible proof and detailed reports.", "Start with Optery, especially if profile links and screenshot-oriented reporting help you judge progress."],
  ["I want broad automation with little maintenance.", "Start with Incogni for recurring automated requests and resubmissions."],
  ["I want a long-established human-assisted service.", "Start with DeleteMe for its advisor-and-report workflow."],
  ["I need family coverage.", "Compare current Incogni family limits, Optery loved-one arrangements, and DeleteMe multi-person terms; do not assume they work the same way."],
  ["I want monthly billing.", "Check current Optery and Incogni checkout terms. DeleteMe's mainstream consumer offer is more commitment-oriented."],
  ["I want the lowest-cost route.", "Use manual opt-outs. Optery's free report may help discovery, but it does not perform free removals."],
  ["I live outside the United States.", "Check eligibility first. Incogni has the broadest fit in CBT's current research, but supported jurisdictions and broker depth vary."],
  ["I need custom removals outside common broker lists.", "Compare the exact higher-tier rules from Optery, Incogni, and DeleteMe before paying; custom does not mean any page on the web."]
];

const faqItems = [
  ["What is the best data removal service?", "There is no universal best. Choose Optery for verification and visibility, Incogni for recurring automated maintenance, DeleteMe for an established human-assisted workflow, or manual opt-outs for cost and direct control."],
  ["Do data removal services really work?", "They can reduce exposure on supported brokers and people-search sites, but results vary, listings can return, and no service removes everything."],
  ["Which service removes the most information?", "There is no reliable answer from vendor site totals. Providers count automated brokers, custom requests, people-search sites, private databases, and plan-specific sources differently."],
  ["Is Optery better than Incogni?", "Optery is a better fit for visible proof and detailed reports. Incogni is a better fit for broad recurring automation with less maintenance."],
  ["Is DeleteMe worth the price?", "It can be when human assistance, reports, and an established provider matter enough to justify the commitment. It is less compelling for flexible-billing or DIY users."],
  ["Can I remove my information manually?", "Yes. Broker opt-outs are generally free, but you must find listings, verify requests, track results, and repeat the work."],
  ["Can a service remove me completely from Google?", "No. A service may remove a source listing or help with a qualifying search request, but removing a Google result is different from deleting the original content."],
  ["Why does my personal information return?", "Brokers refresh their sources, duplicate records persist, and some removals suppress a listing without eliminating every future copy."],
  ["Is it safe to give these companies my information?", "It is a privacy tradeoff. The provider needs enough identifying information to match records, so review collection, retention, deletion, authorization, and security terms before enrolling."],
  ["What happens after I cancel?", "Future monitoring, rescans, reports, and resubmissions commonly stop. Exact account access and data-retention consequences depend on the provider."],
  ["Do these services work outside the United States?", "Some do, but eligibility and coverage depth vary by provider, country, and broker. Confirm support for your location before paying."],
  ["How long does removal take?", "There is no universal timeline. Broker response, identity matching, applicable law, provider workflow, and reappearance all affect progress."]
];

const sources = [
  ["Consumer Reports: 2024 people-search removal study", "https://www.consumerreports.org/electronics/personal-information/services-that-delete-data-from-people-search-sites-review-a2705843415/"],
  ["Incogni plans and pricing", "https://incogni.com/pricing"],
  ["Incogni privacy policy", "https://incogni.com/privacy-policy"],
  ["Optery plans and pricing", "https://www.optery.com/pricing/"],
  ["Optery privacy policy", "https://www.optery.com/privacy-policy/"],
  ["DeleteMe privacy protection plans", "https://joindeleteme.com/privacy-protection-plans/"],
  ["DeleteMe privacy policy", "https://privacy.joindeleteme.com/policies"],
  ["FTC: people-search opt-outs and limits", "https://consumer.ftc.gov/articles/what-know-about-people-search-sites-sell-your-information"]
];

function Heading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p><h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>{description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return <ul className="mt-4 grid gap-2">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-0.5 shrink-0 text-brand-700" size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export function BestDataRemovalServicesPage() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: pageTitle, description: pageDescription, author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: site.url + pagePath };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" }, { "@type": "ListItem", position: 2, name: "Best Data Removal Services", item: site.url + pagePath }] };
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", name: "Fit-based data removal options", itemListElement: recommendations.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: site.url + item.href })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <>
    <SEO title={pageTitle} description={pageDescription} path={pagePath} />
    {[articleSchema, breadcrumbSchema, itemListSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <AffiliateDisclosure />

    <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
      <Container><p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Commercial investigation</p><h1 className="mt-4 max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl">{pageTitle}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">We compare three leading services by automation, verification, ongoing maintenance, privacy, and value—and explain when manual removal is the better choice.</p><p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">No service removes every trace of a person from the internet. Our labels are based on reader fit and evidence, not affiliate availability. Unsure whether to pay at all? Read <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/are-data-removal-services-worth-it">Are Data Removal Services Worth It?</Link></p><p className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand-700">Plans, policies, and public evidence checked {checkedDate}</p></Container>
    </section>

    <Section id="quick-recommendations"><Heading eyebrow="Quick recommendations" title="Four Useful Winners, Not One Generic Best" description="Each choice solves a different part of the problem." /><div className="mt-8 grid gap-5 md:grid-cols-2">{recommendations.map(({ icon: Icon, ...item }) => <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><Icon className="text-brand-700" aria-hidden="true" /><p className="mt-4 text-sm font-semibold text-brand-700">{item.label}</p><h3 className="mt-1 text-xl font-bold text-slate-950">{item.name}</h3><p className="mt-3 text-sm leading-6 text-slate-700"><strong>Tradeoff:</strong> {item.tradeoff}</p><Link className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800" to={item.href}>See the evidence</Link></article>)}</div></Section>

    <Section className="bg-slate-50"><Heading eyebrow="Side-by-side" title="Data Removal Service Comparison" description="Coverage totals are omitted because vendors count automated brokers, custom requests, plan-specific sources, and people-search sites differently." /><div className="mt-8 max-w-full overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft"><table className="w-full min-w-[72rem] border-collapse text-left text-sm"><thead className="bg-slate-950 text-white"><tr>{["Service", "Best for", "Free option", "Removal approach", "Verification/reporting", "Billing", "Main limitation"].map((head) => <th key={head} className="px-4 py-4 font-semibold" scope="col">{head}</th>)}</tr></thead><tbody>{comparisonRows.map((row) => <tr key={row.service} className="border-b border-slate-200 last:border-0"><th className="bg-slate-50 px-4 py-4 font-bold text-slate-950" scope="row">{row.service}</th><td className="px-4 py-4 text-slate-700">{row.best}</td><td className="px-4 py-4 text-slate-700">{row.free}</td><td className="px-4 py-4 text-slate-700">{row.approach}</td><td className="px-4 py-4 text-slate-700">{row.proof}</td><td className="px-4 py-4 text-slate-700">{row.billing}</td><td className="px-4 py-4 text-slate-700">{row.limit}</td></tr>)}</tbody></table></div></Section>

    <Section><Heading eyebrow="Our verdict" title="Choose by Workflow and Evidence" /><div className="mt-8 rounded-lg border border-brand-200 bg-brand-50 p-6"><p className="text-base leading-7 text-slate-800">Choose <strong>Optery</strong> when verification and visibility matter most. Choose <strong>Incogni</strong> when broad automation and reduced maintenance matter most. Choose <strong>DeleteMe</strong> when an established expert-assisted workflow matters most. Choose <strong>manual removal</strong> when cost and direct control matter more than convenience.</p></div></Section>

    <Section className="bg-slate-50"><Heading eyebrow="Methodology" title="How We Evaluated" description="This investigation uses official product documentation, independent research, government guidance, and CBT's existing review and comparison research. It does not claim new hands-on testing." /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><Bullets items={criteria} /><p className="mt-5 text-sm leading-6 text-slate-600">Vendor pages establish current features and stated limits. Consumer Reports supplies a narrow independent effectiveness benchmark. CBT's fit labels are editorial judgments built from that evidence. Read <Link className="font-semibold text-brand-700" to="/about/how-we-review-software">our review methodology</Link>.</p></div></Section>

    {products.map((product, index) => <Section key={product.id} id={product.id} className={index % 2 ? "bg-slate-50" : "bg-white"}><Heading eyebrow={product.label} title={product.name} description={product.intro} /><div className="mt-8 grid gap-5 lg:grid-cols-2"><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Approach and strengths</h3><p className="mt-3 text-sm leading-6 text-slate-700">{product.approach}</p><Bullets items={product.strengths} /></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Limits and fit</h3><Bullets items={product.limits} /><p className="mt-5 text-sm leading-6 text-slate-700"><strong>Choose:</strong> {product.choose}</p><p className="mt-3 text-sm leading-6 text-slate-700"><strong>Skip:</strong> {product.skip}</p></article></div><div className="mt-6 flex flex-wrap gap-4"><Link className="font-semibold text-brand-700 hover:text-brand-800" to={product.review}>Read the full {product.name} review</Link>{product.comparisons.map((link) => <Link key={link.href} className="font-semibold text-brand-700 hover:text-brand-800" to={link.href}>{link.label}</Link>)}</div></Section>)}

    <Section id="manual" className="bg-slate-50"><Heading eyebrow="Best free alternative" title="Manual Opt-Outs" description="Manual removal has no subscription cost and gives you direct control, but it replaces money with research, tracking, verification, and repeated work." /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">Consumer Reports' 2024 test found manual opt-outs performed better overall than the seven services it tested across 13 people-search sites. EasyOptOuts and Optery performed best among those services. The study used a defined sample and four-month observation period; it was not a test of every provider, broker, geography, or current feature set.</p><p className="mt-4 text-base leading-7 text-slate-700">Manual work still has no completeness guarantee. You must discover sites, submit data separately, retain confirmation records, and repeat requests when listings return.</p><Link className="mt-5 inline-flex font-semibold text-brand-700 hover:text-brand-800" to="/are-data-removal-services-worth-it">Compare paid services with manual opt-outs</Link></div></Section>

    <Section><Heading eyebrow="Hard limits" title="What These Services Cannot Reliably Remove" /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Social-media posts and profiles", "News articles and forum posts", "Government, court, and public records", "Original source databases outside provider reach", "Unsupported sites and countries", "Every copied, indexed, or cached version"].map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800 shadow-soft">{item}</div>)}</div><p className="mt-6 text-sm leading-6 text-slate-700">Provider-specific reach varies. Removing a broker listing is not the same as deleting the original source or removing a search result, and none of these options guarantees a safety outcome.</p></Section>

    <Section className="bg-slate-50"><Heading eyebrow="Independent evidence" title="How Effective Are Data Removal Services?" /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">The strongest direct comparison in CBT's evidence is Consumer Reports' 2024 people-search study. Manual removals performed better overall; results varied by service; EasyOptOuts and Optery led the tested services. DeleteMe was a midlevel performer. Incogni was not part of that same head-to-head result, so process assurance or vendor coverage claims should not be substituted for comparative effectiveness data.</p><p className="mt-4 text-base leading-7 text-slate-700">The fair conclusion is partial effectiveness plus convenience—not guaranteed disappearance. The study's seven-service, 13-site, limited-sample, four-month design should not become a permanent universal ranking or current pricing source.</p></div></Section>

    <Section><Heading eyebrow="Reader scenarios" title="Which Service Should You Choose?" /><div className="mt-8 grid gap-5 md:grid-cols-2">{scenarios.map(([title, answer]) => <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{answer}</p></article>)}</div></Section>

    <Section className="bg-slate-50"><Heading eyebrow="Cost" title="Pricing and Value" description="We do not publish volatile checkout prices here. Compare the actual charge, commitment, renewal, and included workflow—not a marketing monthly equivalent." /><div className="mt-8 grid gap-5 lg:grid-cols-3"><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="font-bold text-slate-950">Billing</h3><p className="mt-3 text-sm leading-6 text-slate-700">Separate true month-to-month billing from annual totals displayed as a monthly equivalent. Check introductory versus renewal pricing and individual versus family terms.</p></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="font-bold text-slate-950">Plan boundaries</h3><p className="mt-3 text-sm leading-6 text-slate-700">Confirm automated coverage, custom-request limits, report detail, family seats, support, refunds, and whether a feature belongs only to a higher tier.</p></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="font-bold text-slate-950">After cancellation</h3><p className="mt-3 text-sm leading-6 text-slate-700">Monitoring and new resubmissions commonly stop. Verify account access, retention, deletion, refund, and renewal consequences with the provider.</p></article></div></Section>

    <Section><Heading eyebrow="Trust tradeoff" title="Privacy Requires Giving the Provider Identifying Data" /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">A provider needs enough identity data—such as names, addresses, phone numbers, emails, aliases, and authorization—to find matching records and act for you. Compare what is required, how long it is retained, how cancellation differs from account deletion, what security documentation is public, and what the policy says about sharing or sale. A written privacy policy is evidence of stated practice, not proof of perfect behavior.</p></div></Section>

    <Section className="bg-slate-50"><Heading eyebrow="FAQ" title="Data Removal Service Questions" /><div className="mt-8 grid gap-4">{faqItems.map(([question, answer]) => <article key={question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{question}</h3><p className="mt-3 text-base leading-7 text-slate-700">{answer}</p></article>)}</div></Section>

    <Section><Heading eyebrow="Evidence checked" title="Sources for This Investigation" description="Official pages support product features and terms; they are not treated as independent effectiveness proof." /><div className="mt-8 grid gap-3 md:grid-cols-2">{sources.map(([title, href]) => <a key={href} className="flex items-start gap-2 rounded-md border border-slate-200 p-4 text-sm font-semibold text-brand-700 hover:bg-brand-50" href={href} rel="noreferrer" target="_blank"><span>{title}</span><ExternalLink className="mt-0.5 shrink-0" size={15} aria-hidden="true" /></a>)}</div></Section>

    <Section className="bg-slate-50"><div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><ShieldCheck className="text-brand-700" aria-hidden="true" /><h2 className="mt-4 text-3xl font-bold text-slate-950">Choose the Workflow You Will Actually Maintain</h2><p className="mt-4 text-base leading-7 text-slate-700">Choose Optery for verification and visibility, Incogni for recurring automated maintenance, DeleteMe for established expert assistance, or manual removal for cost and control. Verify current eligibility, plan boundaries, privacy handling, and renewal terms before paying—and do not expect complete internet erasure.</p><div className="mt-6 flex flex-wrap gap-4"><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/data-removal">Open the Data Removal Hub</Link><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/affiliate-disclosure">Read our Affiliate Disclosure</Link></div></div></Section>
    <Newsletter />
  </>;
}
