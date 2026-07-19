import { AlertCircle, CheckCircle2, ExternalLink, ListChecks, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const pagePath = "/are-data-removal-services-worth-it";
const pageTitle = "Are Data Removal Services Worth It in 2026?";
const pageDescription = "Learn when data removal services are worth paying for, what they can and cannot remove, and how they compare with manual opt-outs.";
const checkedDate = "July 10, 2026";

const quickAnswers = [
  {
    title: "Worth it when",
    items: [
      "Your address, phone number, relatives, or past addresses appear across many people-search sites.",
      "You do not have time to track broker opt-outs and repeat them when listings return.",
      "You want monitoring, recurring removals, reports, or help with difficult requests."
    ]
  },
  {
    title: "Probably not necessary when",
    items: [
      "You only found a few listings and are willing to submit opt-outs manually.",
      "You want maximum control over every request and every piece of data submitted.",
      "Your budget is tight and you can maintain a simple tracking spreadsheet."
    ]
  },
  {
    title: "What they cannot do",
    items: [
      "They cannot erase every trace of you from the internet.",
      "They usually cannot delete public records, court records, news, forums, social posts, or original sources.",
      "They cannot guarantee permanent removal or a specific safety outcome."
    ]
  }
];

const processSteps = [
  { title: "Collect identifying information", description: "The service needs enough detail to find matching broker records, such as names, addresses, phone numbers, emails, and sometimes relatives or aliases." },
  { title: "Scan or match supported sites", description: "Some services show likely exposure first; others submit requests across their supported broker list even when a visible profile is not shown to the user." },
  { title: "Submit opt-out or deletion requests", description: "The service acts as a helper or authorized agent where allowed, sending requests to supported data brokers and people-search sites." },
  { title: "Track responses and status", description: "Dashboards and reports can show request progress, removals, unresolved items, or screenshots where the provider supports them." },
  { title: "Repeat the work", description: "Because broker data can reappear, the ongoing value is monitoring, rescanning, and repeated removals while the subscription remains active." }
];

const definitionCards = [
  { title: "Automated removals", body: "Software-assisted request submission and tracking across supported broker lists." },
  { title: "Human-assisted removals", body: "A privacy agent or support team helps with requests, reports, or difficult cases." },
  { title: "Custom requests", body: "Requests for sites outside the standard list, usually limited by plan and provider rules." },
  { title: "Monitoring", body: "Recurring scans or checks for returned listings or newly found exposure." },
  { title: "Removal reports", body: "Status reports, dashboards, or screenshots that document what was found and what changed." }
];

const paidVsManualRows = [
  { label: "Direct cost", paid: "Subscription cost; plan terms, renewal prices, and discounts can change.", manual: "Generally free, aside from your time." },
  { label: "Time required", paid: "Lower time burden after setup.", manual: "Higher time burden, especially across many brokers." },
  { label: "Broker discovery", paid: "Provider-assisted discovery or broad broker-list coverage.", manual: "You research brokers, people-search sites, and repeat listings yourself." },
  { label: "Repeated follow-up", paid: "Repeated handling while subscribed, depending on plan and provider.", manual: "You must remember to recheck and resubmit." },
  { label: "Control", paid: "Delegated process with provider rules and reporting limits.", manual: "More direct control over each request." },
  { label: "Privacy tradeoff", paid: "You supply sensitive identifiers to one provider.", manual: "You submit data separately to individual brokers and sites." },
  { label: "Completeness", paid: "No completeness guarantee.", manual: "No completeness guarantee." },
  { label: "Best fit", paid: "Convenience, maintenance, broad exposure, and recurring monitoring.", manual: "Hands-on, cost-conscious users with patience and a narrower target list." }
];

const considerPaying = [
  {
    title: "My address and phone number appear on many sites.",
    body: "A paid service can be worth considering when the work is broad enough that manually finding, submitting, and tracking requests becomes unrealistic."
  },
  {
    title: "I have experienced harassment, stalking, doxxing, or repeated unwanted contact.",
    body: "Reducing broker exposure may help as one layer of privacy maintenance, but it is not a complete safety plan."
  },
  {
    title: "I am a public-facing professional.",
    body: "Journalists, creators, executives, public officials, real estate professionals, clinicians, and other visible workers may value ongoing monitoring and reports."
  },
  {
    title: "I need to cover family members.",
    body: "Household exposure can be harder to manage manually because relatives, past addresses, and shared records can connect people across sites."
  },
  {
    title: "I tried manual removal but cannot maintain it.",
    body: "The first opt-out pass is only part of the work. Reappearance is where maintenance becomes the real product."
  },
  {
    title: "My information repeatedly returns.",
    body: "Recurring removals and rescans are more valuable when listings come back or new broker profiles appear."
  }
];

const startManually = [
  "You only found a few visible listings.",
  "You have a strong budget constraint.",
  "You are willing to track requests and recheck results.",
  "You can use government, search-engine, or broker-specific tools directly.",
  "You prefer not to concentrate more personal information with another private company.",
  "You want to understand what is exposed before deciding whether a paid service is worth it."
];

const judgingCriteria = [
  "Geographic eligibility: confirm the service supports your country or state before paying.",
  "Supported broker list: check whether the sites exposing you are actually covered.",
  "People-search versus private broker coverage: do not treat every site count as equivalent.",
  "Recurring rescans: confirm how often the service checks again and what happens after cancellation.",
  "Reports and proof: decide whether status dashboards are enough or whether screenshot-style proof matters.",
  "Custom removals: verify which plans include them, what limits apply, and what the provider will not attempt.",
  "Family support: check the number of people included and whether each person has privacy boundaries.",
  "Data-handling policy: read what personal information is collected, how long it is retained, and what happens when you cancel.",
  "Current price and renewal terms: avoid deciding from a promotional price alone.",
  "Limitations: look for plain language about public records, search engines, social media, forums, and original sources."
];

const questionsBeforePaying = [
  "Does it cover the sites currently exposing me?",
  "How does it count covered sites?",
  "Does it repeat requests?",
  "Are custom removals included?",
  "Can I see evidence or status reports?",
  "What information must I provide?",
  "What happens to my information after cancellation?",
  "Can I delete my account and associated records?",
  "Is the price introductory?",
  "Does it operate where I live?"
];

const decisionTestItems = [
  "My information appears on more than five sites.",
  "It has returned after removal.",
  "I have multiple former addresses, emails, phone numbers, or aliases.",
  "I have a personal safety concern.",
  "I cannot commit several hours to opt-outs.",
  "I want recurring monitoring.",
  "I need family coverage.",
  "I am willing to pay for convenience rather than guaranteed completeness."
];

const faqItems: Array<{ question: string; answer: string; link?: { href: string; label: string } }> = [
  {
    question: "Do data removal services really work?",
    answer: "They can reduce exposure on supported data brokers and people-search sites, but results vary and removals may not last. Consumer Reports found manual opt-outs more effective overall than the services in its limited 2024 people-search study. A paid service's clearest value is discovery, delegation, reporting, and repeated maintenance."
  },
  {
    question: "Can I remove my information for free?",
    answer: "Often, yes. Many brokers and people-search sites provide free opt-out processes, and eligible government and search-engine tools are also free. The tradeoff is the time needed to find listings, verify your identity, track requests, and repeat them."
  },
  {
    question: "Can these services remove me completely from the internet?",
    answer: "No. They can reduce exposure on supported brokers and people-search sites, but they cannot erase every original source, public record, news item, social post, forum page, copied record, or search result."
  },
  {
    question: "Why does my information come back?",
    answer: "It can. People-search sites and brokers may refresh from source data, duplicate records may remain, and suppression rules may not stop every future listing. This is why recurring monitoring matters."
  },
  {
    question: "How long do removals take?",
    answer: "There is no reliable universal timeline. It depends on the broker, request method, identity verification, applicable law, provider workflow, and whether the listing is matched correctly. Treat any provider timeline as a plan-specific claim, not a guarantee.",
    link: { href: "/guides/how-long-does-data-removal-take", label: "See the full data-removal timeline" }
  },
  {
    question: "Is it safe to give a removal company my personal information?",
    answer: "It creates a real privacy tradeoff because the provider needs identifying details to find and match records. Before paying, review what it collects, why it needs each field, its retention and deletion rules, account security, and what happens after cancellation."
  },
  {
    question: "What happens when I cancel?",
    answer: "Cancellation commonly ends future monitoring, rescans, and repeated requests, although exact consequences vary by provider and plan. Previously removed listings can return. Check access, retention, and account-deletion terms before subscribing."
  },
  {
    question: "Do these services work outside the United States?",
    answer: "Some do, but eligibility, broker coverage, and available legal rights vary by country and region. Confirm that the provider operates where you live and supports the specific sites exposing your information."
  },
  {
    question: "Can they remove court records or news articles?",
    answer: "Usually not. Court records, government pages, news coverage, forums, social posts, and original sources follow different rules. Removing a broker's copy or a search result does not delete the underlying record."
  },
  {
    question: "Which data removal service is best?",
    answer: "There is no universal winner. The better fit depends on the sites exposing you, your location, desired reporting, need for custom or human-assisted work, family coverage, privacy terms, and budget.",
    link: { href: "/data-removal", label: "Compare fit-based options in the Data Removal Hub" }
  }
];

const sourceLinks = [
  { title: "FTC: people-search sites and opt-out limits", href: "https://consumer.ftc.gov/articles/what-know-about-people-search-sites-sell-your-information" },
  { title: "California Privacy Protection Agency: data broker registry and DROP", href: "https://cppa.ca.gov/data_broker_registry/" },
  { title: "California Attorney General: CCPA rights", href: "https://oag.ca.gov/privacy/ccpa" },
  { title: "Google Search: remove private info", href: "https://support.google.com/websearch/answer/9673730?hl=en" },
  { title: "Google Search Console: Refresh Outdated Content tool", href: "https://support.google.com/webmasters/answer/7041154?hl=en" },
  { title: "Consumer Reports: people-search removal service study", href: "https://www.consumerreports.org/electronics/personal-information/services-that-delete-data-from-people-search-sites-review-a2705843415/" },
  { title: "Incogni pricing and plan details", href: "https://incogni.com/pricing" },
  { title: "Optery product and plan details", href: "https://www.optery.com/" },
  { title: "DeleteMe privacy protection plans", href: "https://joindeleteme.com/privacy-protection-plans/" }
];

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}

function BulletList({ items, icon = "check" }: { items: string[]; icon?: "check" | "alert" }) {
  const Icon = icon === "check" ? CheckCircle2 : AlertCircle;
  return (
    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon className="mt-0.5 shrink-0 text-brand-700" size={17} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InternalLinkButton({ href, children }: { href: string; children: string }) {
  return (
    <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to={href}>
      {children}
    </Link>
  );
}

function ExternalSourceLink({ href, title }: { href: string; title: string }) {
  return (
    <a className="inline-flex items-start gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-6 text-brand-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href={href} rel="noreferrer" target="_blank">
      <span>{title}</span>
      <ExternalLink className="mt-0.5 shrink-0" size={15} aria-hidden="true" />
    </a>
  );
}

export function AreDataRemovalServicesWorthItPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: pageDescription,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + pagePath
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "Are Data Removal Services Worth It?", item: site.url + pagePath }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} path={pagePath} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AffiliateDisclosure />

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Data Removal Guide</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{pageTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">They can save time and automate repeated opt-outs, but they cannot erase every trace of your personal information. The real question is whether convenience, monitoring, and follow-up are worth paying for in your situation.</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">For broad exposure, limited time, elevated privacy concerns, or recurring listings, a paid service can make sense. For a few visible people-search profiles and a willingness to track requests, manual opt-out may be enough.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#quick-answer">Get the Quick Answer</a>
              <InternalLinkButton href="/data-removal">Open Data Removal Hub</InternalLinkButton>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-lift backdrop-blur">
            <h2 className="text-xl font-bold text-slate-950">Bottom Line</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">Pay for a data-removal service when the recurring work is worth delegating. Do not pay if your expectation is guaranteed anonymity, permanent removal, or complete internet erasure.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-700">Current public-source facts checked {checkedDate}</p>
          </aside>
        </Container>
      </section>

      <Section id="quick-answer" className="bg-white">
        <SectionHeading eyebrow="Quick answer" title="When Data Removal Services Are Worth It" description="This is a practical fit test, not a ranking of services." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {quickAnswers.map((answer) => (
            <article key={answer.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <ShieldCheck className="text-brand-700" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-slate-950">{answer.title}</h3>
              <BulletList items={answer.items} icon={answer.title.includes("cannot") ? "alert" : "check"} />
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Category basics" title="What Data Removal Services Actually Do" description="A data-removal service is usually a broker and people-search opt-out helper, not a universal deletion engine." />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_20rem]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <ol className="grid gap-5">
              {processSteps.map((step, index) => (
                <li key={step.title} className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-sm font-bold text-brand-700">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Useful Terms</h3>
            <div className="mt-5 grid gap-4">
              {definitionCards.map((card) => (
                <div key={card.title}>
                  <h4 className="text-sm font-bold text-slate-950">{card.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{card.body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Value" title="What Are You Really Paying For?" description="The product is not guaranteed anonymity. It is time savings, process knowledge, repeated requests, reporting, and maintenance." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">What can be worth paying for</h3>
            <BulletList items={["Broker discovery and supported-site coverage", "Process knowledge and opt-out mechanics", "Repeated requests when listings return", "Rescanning and follow-up while subscribed", "Centralized reporting or screenshots where supported", "Assistance with difficult or custom removals"]} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">What you are not buying</h3>
            <BulletList icon="alert" items={["Guaranteed anonymity", "Complete deletion from the internet", "Permanent removal from every future listing", "Removal from all public records or original sources", "A guaranteed reduction in scams, harassment, identity theft, or unwanted contact"]} />
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Effectiveness" title="How Effective Are Data Removal Services?" description="Effectiveness varies by service, plan, broker, geography, identity complexity, and how success is measured." />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-7 text-slate-700">The cautious answer is: partially effective, often useful, and easy to overstate. Removing a listing from a supported people-search site is different from removing the original source, changing a public record, or removing every search result that points to copied information.</p>
          <p className="mt-4 text-base leading-7 text-slate-700">Consumer Reports published a 2024 study of people-search removal services and found manual removal more effective overall than the tested paid services. Among the services in that study, EasyOptOuts and Optery performed best. That is useful evidence, but it should not be turned into a permanent ranking of every service or every removal category. The study was focused on people-search profiles, a limited sample, and a specific test period.</p>
          <p className="mt-4 text-base leading-7 text-slate-700">The practical takeaway is not that paid services never work. It is that a subscription should be judged as ongoing maintenance and convenience, not as proof of complete removal.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Pros and limits" title="Advantages and Limitations" description="The case for paying is strongest when the administrative work itself is the problem." />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Advantages</h3>
            <BulletList items={["Saves repetitive administrative work", "Centralizes request tracking", "Can discover listings you did not know about", "Can repeat removals when data returns", "May provide progress reports or screenshot proof", "Can help with difficult requests, depending on plan"]} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Limitations</h3>
            <BulletList icon="alert" items={["Incomplete coverage", "Recurring cost", "Information may return", "Personal data must be supplied to the provider", "No universal removal from news, social media, forums, public records, court records, government pages, or original sources", "Cancellation may stop monitoring", "Coverage numbers may use different counting methods", "Jurisdictional limits", "No guaranteed safety outcome"]} />
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Decision table" title="Paid Service Versus Manual Removal" description="Both paths have tradeoffs. Neither guarantees complete removal." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[56rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Factor</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Paid data-removal service</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Manual opt-out</th>
              </tr>
            </thead>
            <tbody>
              {paidVsManualRows.map((row) => (
                <tr key={row.label} className="border-b border-slate-200 last:border-0">
                  <th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950 sm:px-6" scope="row">{row.label}</th>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">{row.paid}</td>
                  <td className="px-4 py-4 text-slate-700 sm:px-6">{row.manual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Paying may fit" title="Who Should Seriously Consider Paying?" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {considerPaying.map((scenario) => (
            <article key={scenario.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <CheckCircle2 className="text-brand-700" size={20} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-slate-950">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-slate-950">Safety note</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">A commercial data-removal service is not a complete safety plan. People facing immediate threats may also need law enforcement, legal support, account-security changes, address-confidentiality programs, workplace security help, or specialist safety resources.</p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Manual path" title="Who Should Start Manually?" description="Manual opt-out is not glamorous, but it can be the right starting point for a narrow problem." />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={startManually} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Free tools" title="Government and Free Options" description="Privacy rights and available tools vary by jurisdiction. Use these as starting points, not legal guarantees." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Broker opt-out pages</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Many people-search sites and brokers provide opt-out mechanisms. The FTC notes that opting out may stop a people-search site from selling existing information, but it may not solve all privacy concerns and information can reappear.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Search-engine tools</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Google has tools for certain private personal information and outdated content, but search-result removal is different from removing content from the original website.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">California rights and DROP</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">California residents have CCPA rights including deletion rights with exceptions. The California Privacy Protection Agency says DROP is available for consumers in 2026, with data brokers required to process deletion requests beginning August 1, 2026.</p>
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Checklist" title="How to Judge Whether a Service Is Worth It" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={judgingCriteria} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Before you subscribe" title="Questions to Ask Before Paying" description="Get specific answers in writing when a provider's plan page or privacy policy is unclear." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {questionsBeforePaying.map((question, index) => (
            <div key={question} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-50 text-sm font-bold text-brand-700">{index + 1}</span>
              <p className="pt-1 text-sm font-semibold leading-6 text-slate-800">{question}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Editorial self-assessment" title="Practical Decision Test" description="Give yourself one point for each statement that applies." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <ol className="grid gap-3 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            {decisionTestItems.map((item, index) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-50 text-xs font-bold text-brand-700">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Interpret your score</h3>
            <dl className="mt-5 grid gap-4 text-sm leading-6">
              <div><dt className="font-bold text-slate-950">0–2 points</dt><dd className="text-slate-700">Start manually.</dd></div>
              <div><dt className="font-bold text-slate-950">3–5 points</dt><dd className="text-slate-700">A paid service may be worthwhile.</dd></div>
              <div><dt className="font-bold text-slate-950">6–8 points</dt><dd className="text-slate-700">A reputable ongoing service is worth serious consideration.</dd></div>
            </dl>
            <p className="mt-5 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-600">This is a Choose Better Tech editorial decision aid—not a validated risk assessment, safety tool, or scientific score.</p>
          </aside>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Service examples" title="Where Incogni, Optery, and DeleteMe Fit" description="These are examples from the existing Choose Better Tech data-removal cluster, not a new ranked roundup." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-slate-950">Incogni</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Best fit when simple automation and recurring broker-removal maintenance matter most.</p>
            <Link className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800" to="/reviews/incogni-review">Read the Incogni review</Link>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-slate-950">Optery</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Best fit when exposure visibility, profile links, and proof-oriented reports are more important than the simplest setup.</p>
            <Link className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800" to="/reviews/optery-review">Read the Optery review</Link>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-slate-950">DeleteMe</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Best fit when human-assisted support, custom removals, reports, and an established provider model matter more than lowest-cost automation.</p>
            <Link className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800" to="/reviews/deleteme-review">Read the DeleteMe review</Link>
          </article>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <InternalLinkButton href="/data-removal">Use the Data Removal Hub</InternalLinkButton>
          <InternalLinkButton href="/comparisons/incogni-vs-optery">Compare Incogni vs Optery</InternalLinkButton>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="FAQ" title="Data Removal Service Questions" />
        <div className="mt-8 grid gap-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <ListChecks className="shrink-0 text-brand-700" size={19} aria-hidden="true" />
                {faq.question}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p>
              {faq.link ? <Link className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800" to={faq.link.href}>{faq.link.label}</Link> : null}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Source notes" title="Evidence Checked for This Guide" description="Public facts were checked against government, independent, and official vendor sources on July 10, 2026. Vendor pages establish current plan claims and limits, not independent effectiveness." />
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {sourceLinks.map((source) => <ExternalSourceLink key={source.href} href={source.href} title={source.title} />)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Final recommendation</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Pay for Maintenance, Not Magic</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">Data removal services are most worth it when they replace work you realistically will not keep doing yourself: finding listings, submitting requests, checking status, and repeating removals. They are least worth it when you only have a narrow set of listings and are willing to manage opt-outs manually.</p>
          <p className="mt-4 text-base leading-7 text-slate-700">Start with the manual path if your exposure is small. Consider a paid service when the exposure is broad, recurring, stressful, or too time-consuming to maintain.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <InternalLinkButton href="/best-data-removal-services">Compare Data Removal Services</InternalLinkButton>
            <InternalLinkButton href="/data-removal">Choose a Data Removal Path</InternalLinkButton>
            <InternalLinkButton href="/about/how-we-review-software">How We Review Software</InternalLinkButton>
          </div>
        </div>
      </Section>

      <Newsletter />
    </>
  );
}
