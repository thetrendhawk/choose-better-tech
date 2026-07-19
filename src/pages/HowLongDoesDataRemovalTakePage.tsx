import { AlertCircle, ArrowRight, CheckCircle2, Clock, ExternalLink, SearchCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleMeta } from "../components/editorial/ArticleMeta";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const pagePath = "/guides/how-long-does-data-removal-take";
const pageTitle = "How Long Does Data Removal Take? A Realistic Timeline";
const pageDescription = "Data removal can take days, weeks, or months. Learn what happens after an opt-out, what delays removal, and why reports do not always prove deletion.";
const reviewedDate = "July 19, 2026";

const timeline = [
  { stage: "1", title: "Setup and matching", range: "Minutes to days", detail: "You provide identifiers and any required authorization. Missing profile details, ID checks, or verification emails can delay everything that follows." },
  { stage: "2", title: "Discovery and submission", range: "Days to several weeks", detail: "A provider may scan public listings, submit requests across a supported list, or queue custom removals. A request marked submitted is not a confirmed deletion." },
  { stage: "3", title: "Broker processing", range: "Same day to months", detail: "Each broker uses its own process. Official provider documentation describes immediate removals, weekslong reviews, and some cases that take months." },
  { stage: "4", title: "Verification", range: "Often a later scan", detail: "The service may need a broker response or a fresh scan to confirm that a public profile is no longer visible. Private databases are harder to verify directly." },
  { stage: "5", title: "Monitoring and repetition", range: "Ongoing", detail: "Removed information can return when brokers ingest new sources or rebuild records, so one clean scan should not be treated as permanent erasure." }
];

const providerExamples = [
  {
    name: "Incogni",
    summary: "Incogni says some brokers respond the same day and others take longer. Its current Custom Removals guidance says most eligible custom cases take 7–30 days and some can take up to 60 days.",
    caution: "That custom-removal range does not describe every automated broker request, and Incogni says removal remains an ongoing process.",
    href: "/reviews/incogni-review"
  },
  {
    name: "Optery",
    summary: "Optery says initial activity is often concentrated in the first one or two weeks, while some brokers take weeks or months. Paying customers receive scans and opt-out submissions at least every 30 days.",
    caution: "Its approximately quarterly Removals Reports on higher tiers are a reporting cadence—not the schedule for every request or confirmation.",
    href: "/reviews/optery-review"
  },
  {
    name: "DeleteMe",
    summary: "DeleteMe says its first Privacy Report generally arrives within about seven days, while broker removals can be immediate or take weeks. Another help page says listings often begin disappearing within about six weeks after the first round.",
    caution: "DeleteMe explicitly says the first report is a status update, not proof that every listing has been removed.",
    href: "/reviews/deleteme-review"
  }
];

const delayFactors = [
  "The broker batches requests or requires a manual review.",
  "A verification email, text message, authorization form, or identity check is incomplete.",
  "Your profile has aliases, old addresses, duplicate records, or several matching people.",
  "The listing is in a private database that cannot be checked through a public profile page.",
  "A custom request sits behind other cases or falls outside standard coverage.",
  "The source page changed, but a search engine has not recrawled it yet.",
  "The broker republishes the record from a new source after the first removal."
];

const statusRows = [
  { status: "Found", meaning: "The service or user located a matching listing.", proof: "Evidence of exposure, not evidence of removal." },
  { status: "Submitted or in progress", meaning: "A request was sent or is being handled.", proof: "The broker may not have processed it yet." },
  { status: "Removed", meaning: "The provider received confirmation or no longer found a public listing.", proof: "Useful evidence, but not a guarantee that every copy or private record is gone." },
  { status: "Not found", meaning: "A scan did not locate a matching public profile.", proof: "Not the same as proving the broker holds no private data." },
  { status: "Search result remains", meaning: "A search engine may still show an outdated result after the source changes.", proof: "Check the source page separately; recrawling can take additional time." }
];

const faqItems = [
  { question: "How long does it usually take to remove personal information?", answer: "Some individual listings disappear the same day, while others take weeks or months. A realistic plan is to expect early activity within days or weeks, then allow months for slower brokers, verification, and repeat work." },
  { question: "Does a first privacy report mean my information is gone?", answer: "No. A first report may show what was found and which requests are underway. DeleteMe explicitly describes its first report as a status update rather than proof that all listings have been removed." },
  { question: "Why is a request still pending?", answer: "The broker may batch requests, require verification, conduct a manual review, or simply process requests slowly. The removal provider may also be waiting for a later scan before changing the status." },
  { question: "Can a data broker take 45 days to respond?", answer: "Some privacy laws and systems use 45-day processing periods, but legal rules vary and exceptions can apply. A legal deadline also does not promise that every search result, public record, or unsupported website will disappear on that date." },
  { question: "Why is my information still visible in Google?", answer: "The source page and the search result are separate. After a source removes information, a search engine may continue showing an old title or snippet until it recrawls the page." },
  { question: "Is manual removal faster than a paid service?", answer: "It can be faster for a few known sites because you can submit immediately. Paid services are more useful when discovery, tracking, and repeated requests across many brokers would be difficult to maintain yourself." },
  { question: "Does removed mean permanently deleted?", answer: "No. A listing can return when a broker refreshes sources, creates a duplicate record, or does not preserve the opt-out indefinitely. Ongoing monitoring is a core part of the category." },
  { question: "What should I do if a listing does not disappear?", answer: "Confirm the exact URL, complete any legitimate verification step, check the broker's own status or policy, save request records, and follow up. If you face an immediate safety threat, use law enforcement, legal, address-confidentiality, and specialist safety resources rather than relying on a commercial removal timeline." }
];

const sources = [
  ["Incogni: broker removal timing", "https://support.incogni.com/hc/en-us/articles/4904617144466"],
  ["Incogni: Custom Removals timing", "https://support.incogni.com/hc/en-us/articles/25599422142610-How-do-Custom-Removals-work"],
  ["Optery: scan and opt-out cadence", "https://help.optery.com/en/article/how-often-does-optery-run-scans-and-opt-outs-z8xpc2/"],
  ["Optery: first-month removal progress", "https://help.optery.com/en/article/as-a-new-customer-why-has-my-removals-progress-stalled-1nyjwz3/"],
  ["Optery: Removals Reports", "https://help.optery.com/en/article/what-is-a-removals-report-1ht35vl/"],
  ["DeleteMe: how long removal takes", "https://help.joindeleteme.com/hc/en-us/articles/8171803033491-How-long-before-my-information-is-removed"],
  ["DeleteMe: Privacy Report explained", "https://help.joindeleteme.com/hc/en-us/articles/8585306360083-Your-DeleteMe-Privacy-Report"],
  ["DeleteMe: why listings remain", "https://help.joindeleteme.com/hc/en-us/articles/8171857014035-Why-am-I-still-listed-on-people-search-sites"],
  ["Consumer Reports: Data Defense study", "https://innovation.consumerreports.org/wp-content/uploads/2024/08/Data-Defense_-Evaluating-People-Search-Site-Removal-Services-.pdf"],
  ["California DELETE Act / DROP statute", "https://cppa.ca.gov/regulations/pdf/data_broker_reg_delete_act_statute_eff_20260101.pdf"]
] as const;

function Heading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold text-slate-950">{title}</h2>{description ? <p className="mt-4 text-base leading-7 text-slate-700">{description}</p> : null}</div>;
}

export function HowLongDoesDataRemovalTakePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Data Removal", item: site.url + "/data-removal" },
      { "@type": "ListItem", position: 3, name: pageTitle, item: site.url + pagePath }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return <>
    <SEO title={pageTitle} description={pageDescription} path={pagePath} />
    {[breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

    <Section>
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Data-removal guide</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl">{pageTitle}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">Some listings disappear quickly. Others take weeks or months, and a clean result can still require later verification and repeat removal. Here is the timeline behind the dashboard.</p>
        <ArticleMeta title={pageTitle} description={pageDescription} path={pagePath} authorName="Aaron Evans" datePublished="2026-07-19" dateModified="2026-07-19" displayDate={reviewedDate} showVisibleDetails />
      </Container>
    </Section>

    <Section className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div><p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Quick answer</p><h2 className="mt-3 text-3xl font-bold">Expect Days for Early Activity—and Months for the Long Tail</h2><p className="mt-5 text-base leading-7 text-slate-200">A first report or scan can arrive within days, but that is not the same as confirmed deletion. Individual brokers may act immediately, take weeks, or require months. Verification and search-engine refreshes can add more time, and future reappearance makes monitoring an ongoing task.</p></div>
          <aside className="rounded-lg border border-slate-700 bg-slate-900 p-6"><Clock className="text-brand-300" aria-hidden="true" /><h3 className="mt-4 text-xl font-bold">The practical expectation</h3><ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-200"><li>First status: often days</li><li>Many ordinary removals: days to weeks</li><li>Slow or custom cases: weeks to months</li><li>Monitoring: ongoing</li></ul></aside>
        </div>
      </Container>
    </Section>

    <Section>
      <Heading eyebrow="The real process" title="Five Stages of a Data-Removal Timeline" description="The clock does not start and stop at one obvious moment. Separating the stages makes provider dashboards and reports easier to interpret." />
      <div className="mt-9 grid gap-5 lg:grid-cols-5">{timeline.map((item) => <article key={item.stage} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 font-bold text-brand-700">{item.stage}</span><h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3><p className="mt-2 text-sm font-semibold text-brand-700">{item.range}</p><p className="mt-3 text-sm leading-6 text-slate-700">{item.detail}</p></article>)}</div>
    </Section>

    <Section className="bg-slate-50">
      <Heading eyebrow="Provider examples" title="What Incogni, Optery, and DeleteMe Say About Timing" description="These are documented provider timelines—not promises and not Choose Better Tech speed tests." />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">{providerExamples.map((provider) => <article key={provider.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-2xl font-bold text-slate-950">{provider.name}</h3><p className="mt-4 text-sm leading-6 text-slate-700">{provider.summary}</p><p className="mt-4 border-l-4 border-amber-400 pl-4 text-sm leading-6 text-slate-700">{provider.caution}</p><Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800" to={provider.href}>Read the full review <ArrowRight size={16} aria-hidden="true" /></Link></article>)}</div>
    </Section>

    <Section>
      <Heading eyebrow="Do not confuse the stages" title="A Report Is Not Always Proof of Deletion" />
      <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft" role="region" aria-label="Meaning of common removal statuses" tabIndex={0}>
        <table className="w-full min-w-[760px] border-collapse text-left text-sm"><thead className="bg-slate-100 text-slate-950"><tr><th className="p-4">Status</th><th className="p-4">What it usually means</th><th className="p-4">What it does not prove</th></tr></thead><tbody>{statusRows.map((row) => <tr key={row.status} className="border-t border-slate-200 align-top"><th className="p-4 font-bold text-slate-950">{row.status}</th><td className="p-4 leading-6 text-slate-700">{row.meaning}</td><td className="p-4 leading-6 text-slate-700">{row.proof}</td></tr>)}</tbody></table>
      </div>
    </Section>

    <Section className="bg-slate-50">
      <div className="grid gap-8 lg:grid-cols-2">
        <div><Heading eyebrow="Why it takes longer" title="Common Sources of Delay" /><ul className="mt-7 grid gap-3">{delayFactors.map((factor) => <li key={factor} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-soft"><AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={18} aria-hidden="true" />{factor}</li>)}</ul></div>
        <div><Heading eyebrow="Source versus search" title="Why Google May Still Show an Old Result" /><div className="mt-7 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><SearchCheck className="text-brand-700" aria-hidden="true" /><p className="mt-4 text-base leading-7 text-slate-700">A broker can remove or change the source page while a search engine still displays an old title or snippet. DeleteMe says search results may take another three to four weeks to update after a source removal; treat that as provider guidance, not a universal search-engine deadline.</p><p className="mt-4 text-base leading-7 text-slate-700">Check the original page separately. Search-result suppression, cache refresh, and deletion at the source are different outcomes.</p></div></div>
      </div>
    </Section>

    <Section>
      <Heading eyebrow="Independent evidence" title="Measured Results Change Over Time" />
      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">Consumer Reports' 2024 test measured profiles after one week, one month, and four months. Results varied widely: manual opt-outs removed about 70% of the observed profiles, while the seven paid services ranged from 6% to 68% after four months.</p><p className="mt-4 text-base leading-7 text-slate-700">The sample covered 13 people-search sites and older product versions, so it should not be used as a current universal ranking. Its useful lesson is narrower: removals are incomplete, timing varies, and a one-week snapshot can tell a different story from a four-month check.</p></div>
    </Section>

    <Section className="bg-slate-50">
      <Heading eyebrow="Paid versus manual" title="Which Path Is Faster?" />
      <div className="mt-8 grid gap-6 lg:grid-cols-2"><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-slate-950">Manual removal can be faster for a short list</h3><p className="mt-4 text-sm leading-6 text-slate-700">If you already know the exact sites, you can submit requests immediately and respond to verification messages yourself. The tradeoff is discovery, recordkeeping, and later rechecks.</p></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-xl font-bold text-slate-950">A paid service can reduce total work</h3><p className="mt-4 text-sm leading-6 text-slate-700">A service is more valuable when the target list is broad or recurring. It may not make each broker act faster, but it can handle discovery, submission, follow-up, and monitoring in one workflow.</p></article></div>
      <p className="mt-6"><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/are-data-removal-services-worth-it">Compare paid services with manual opt-outs</Link></p>
    </Section>

    <Section>
      <Heading eyebrow="If the listing remains" title="What to Do Next" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[
        "Confirm the exact profile URL and save a screenshot.", "Check whether the request needs email, SMS, ID, or authorization verification.", "Read the broker's own removal policy and expected processing window.", "Keep submission dates, confirmation messages, and follow-up records.", "Ask the provider to recheck a status that appears wrong.", "Use specialist safety, legal, or law-enforcement help for an immediate threat."
      ].map((item) => <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={19} aria-hidden="true" /><p className="text-sm leading-6 text-slate-700">{item}</p></div>)}</div>
    </Section>

    <Section className="bg-slate-950 text-white">
      <Container><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-wide text-brand-300">The long-term reality</p><h2 className="mt-3 text-3xl font-bold">Removal Is Maintenance, Not a Finish Line</h2><p className="mt-4 text-base leading-7 text-slate-200">Even a confirmed result can change. Brokers refresh sources, duplicate profiles appear, and some opt-outs do not last indefinitely. The honest goal is reduced exposure and a repeatable response—not permanent disappearance from the internet.</p></div><Workflow className="mx-auto text-brand-300" size={72} strokeWidth={1.5} aria-hidden="true" /></div></Container>
    </Section>

    <Section>
      <Heading eyebrow="FAQ" title="Data-Removal Timing Questions" />
      <div className="mt-8 grid gap-4">{faqItems.map((faq) => <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{faq.question}</h3><p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p></article>)}</div>
    </Section>

    <Section className="bg-slate-50">
      <Heading eyebrow="Methodology" title="Evidence Checked for This Guide" description="Sources were checked July 19, 2026. Provider documentation establishes its own workflow and stated timing; Consumer Reports supplies a limited independent benchmark. Choose Better Tech did not test a service account or time a removal." />
      <div className="mt-8 grid gap-3 md:grid-cols-2">{sources.map(([title, href]) => <a key={href} className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-brand-700 shadow-soft hover:text-brand-800" href={href} target="_blank" rel="noopener noreferrer"><span>{title}</span><ExternalLink className="mt-0.5 shrink-0" size={16} aria-hidden="true" /></a>)}</div>
    </Section>

    <Section>
      <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-7 shadow-soft"><p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Final takeaway</p><h2 className="mt-3 text-3xl font-bold text-slate-950">Judge Progress by Stage, Not by One Date</h2><p className="mt-4 text-base leading-7 text-slate-700">Look for evidence that requests were submitted, processed, and later verified. Give slow brokers time, follow up on stalled cases, and expect rechecks. If you are deciding whether to outsource that maintenance, use the cluster guides below.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700" to="/best-data-removal-services">Compare data-removal services</Link><Link className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50" to="/data-removal">Use the data-removal hub</Link></div></div>
    </Section>

    <Newsletter />
  </>;
}
