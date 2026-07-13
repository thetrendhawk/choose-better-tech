import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/best-antivirus-software";
const title = "Best Antivirus Software in 2026";
const description = "Compare Microsoft Defender, Bitdefender, Norton, ESET, F-Secure, McAfee, and TotalAV using current independent lab evidence, renewal terms, privacy, and fit.";

const picks = [
  { label: "Best built-in baseline", name: "Microsoft Defender", fit: "Many ordinary Windows 11 users who want capable protection without another subscription.", caveat: "Paid suites can add broader household coverage, support, identity, VPN, backup, or management features." },
  { label: "Leading balanced paid choice", name: "Bitdefender", fit: "Buyers who want strong current and annual independent evidence across protection and false positives.", caveat: "It did not win every test, and first-term pricing may be lower than renewal." },
  { label: "Leading full-suite fit", name: "Norton", fit: "Households that will actually use a broader security bundle across several devices.", caveat: "Judge the renewal price and each bundled extra separately from the antivirus engine." },
  { label: "Strong focused alternative", name: "ESET", fit: "Readers who want a paid alternative with strong current and annual lab evidence.", caveat: "CBT did not test its interface, resource use, alerts, or support." },
  { label: "Cross-platform alternative", name: "F-Secure", fit: "Buyers who need both current Windows and macOS lab evidence.", caveat: "Plan value and cross-device workflow were not tested by CBT." },
  { label: "Capable but qualified", name: "TotalAV", fit: "Readers who understand its renewal, add-on, and refund terms and prefer its current product fit.", caveat: "Credible lab results do not make it our top recommendation, and no tracked link is used here." }
];

const comparison = [
  ["Microsoft Defender", "Built into Windows", "18/18", "99.1%", "Strong no-extra-cost baseline", "Fewer paid-suite extras"],
  ["Bitdefender", "Paid; first-term and renewal differ", "18/18", "99.1%", "Balanced current and annual evidence", "Not the leader in every single test"],
  ["Norton", "Paid; published renewal schedule", "18/18", "100%", "Protection plus broad suite options", "Bundle and renewal cost need scrutiny"],
  ["ESET", "Paid tiers", "17.5/18", "99.5%", "Strong focused alternative", "No CBT usability or performance test"],
  ["F-Secure", "Paid tiers", "17.5/18", "99.1%", "Current Windows and Mac evidence", "Cross-platform workflow not tested"],
  ["McAfee", "Paid suite", "18/18", "99.5%", "Credible household-suite alternative", "Renewal and bundle value vary"],
  ["TotalAV", "Paid; recurring terms and add-ons", "18/18", "99.5%", "Credible recent protection evidence", "Billing complexity and thinner annual standing"],
  ["Avast / AVG", "Free and paid", "18/18", "100%", "Strong free protection results", "Material Avast/Jumpshot privacy history"]
];

const evidenceRules = [
  ["Protection", "Did the tested product stop the lab's malware and attack cases?", "One test set cannot guarantee future protection."],
  ["False positives", "Did it avoid blocking legitimate files and websites?", "A high detection rate can be costly if normal work is disrupted."],
  ["Performance", "What impact did the lab measure during selected tasks?", "Lab hardware and tasks are not your PC, and performance does not prove protection."],
  ["Continuity", "Did results remain strong across a year or several labs?", "A single perfect month is weaker evidence than a consistent record."],
  ["Subscription", "What happens after the introductory term?", "Renewal, device count, add-ons, cancellation, and refunds can change value."],
  ["Trust", "What do ownership, privacy policies, enforcement, and geography show?", "A strong malware score does not erase data-handling or legal constraints."]
];

const faq = [
  ["What is the best antivirus software in 2026?", "There is no universal winner. Microsoft Defender is the best built-in baseline for many Windows 11 users, Bitdefender is our leading balanced paid choice, and Norton is our leading full-suite fit."],
  ["Is Microsoft Defender good enough?", "For many ordinary Windows 11 users, yes. It is built in and has strong recent independent results. A paid product makes more sense when you need broader device coverage, support, identity features, parental controls, backup, or a specific management workflow."],
  ["Is paid antivirus better than Microsoft Defender?", "Not automatically. Paid products may add features or perform differently in a test, but Defender is a credible baseline. Compare the exact protection evidence and the extras you will use."],
  ["Why is Bitdefender the leading paid choice?", "It combines a current 18/18 AV-TEST result with a strong 2025 AV-Comparatives record, including Top-Rated status and relatively low false positives. It did not lead every test, so the recommendation remains conditional."],
  ["Is Norton worth paying for?", "It can be when you need a broader household suite and will use the included features. Its protection evidence is strong, but compare the first term with renewal and avoid valuing extras you will not use."],
  ["Is TotalAV legitimate?", "Yes. It has current independent lab evidence and published legal terms. That does not make it our top recommendation: renewal, add-ons, refund eligibility, and heavily affiliate-driven promotion still deserve careful review."],
  ["Why is TotalAV not the top pick?", "Its recent results are credible, but its 2025 AV-Comparatives standing was Approved rather than Top-Rated, and its subscription structure deserves more scrutiny. Affiliate availability did not improve or reduce its placement."],
  ["Are Avast and AVG safe to use?", "Their current protection results are strong. The FTC's finalized Avast order over past Jumpshot browsing-data practices remains material trust evidence. That history should be considered without claiming the same conduct continues unchanged today."],
  ["Why is Kaspersky excluded?", "The U.S. Commerce Department prohibits covered Kaspersky antivirus transactions and updates for U.S. persons. The exclusion is a U.S. legal and geographic decision, not a claim that its lab protection scores are poor."],
  ["Does antivirus stop ransomware?", "Antivirus can block some ransomware, but no product guarantees prevention or recovery. Keep software updated, use MFA, limit privileges, and maintain a separate tested backup."],
  ["Does antivirus protect against phishing?", "Some suites add web and scam protection, but no filter catches every deceptive message or site. Verify domains and requests independently, especially before entering passwords or payment information."],
  ["Can two antivirus programs run together?", "Two real-time antivirus engines can conflict or duplicate work. Windows normally adjusts Defender when a compatible third-party antivirus registers. Use an on-demand second-opinion scanner only when its documentation supports that workflow."],
  ["What matters more than a detection percentage?", "Test window, sample count, false positives, measured impact, consistency across labs, product version, renewal terms, privacy, and your actual use case all matter."],
  ["Is free antivirus enough?", "It can be. Defender, Avast, AVG, and Avira provide legitimate free paths, but features, privacy history, promotions, and platform coverage differ."],
  ["Do Macs need antivirus?", "macOS includes security controls, but malware still exists. If you buy a cross-platform suite, verify that the Mac app and lab evidence match your needs rather than assuming the Windows result applies."],
  ["Do phones need antivirus?", "Mobile operating systems use different security models. iOS antivirus apps cannot scan the system like Windows software; mobile products often focus on web, scam, identity, or account protection."],
  ["Should I buy antivirus for a VPN or password manager bundle?", "Only if the bundle is a better fit after comparing each component separately. A strong antivirus result does not prove the bundled VPN or password manager is the best choice."],
  ["How often should antivirus evidence be refreshed?", "Recheck after new lab cycles, major product versions, ownership changes, incidents, flawed updates, government actions, or subscription changes."],
  ["Did Choose Better Tech test these products?", "No. This is a documentation and independent-lab review. CBT did not install products, run malware, benchmark scans, inspect traffic, test support, or cancel subscriptions."],
  ["What should I do before subscribing?", "Confirm the exact plan, device count, first-term and renewal prices, auto-renewal setting, refund window, cancellation method, supported platforms, and which bundle features are included."]
];

const sourceGroups = [
  { title: "Independent protection and performance evidence", links: [
    ["AV-TEST Windows home users — April 2026", "https://www.av-test.org/en/antivirus/home-windows/"],
    ["AV-Comparatives 2025 Summary Report", "https://av-comparatives.org/tests/summary-report-2025/"],
    ["AV-Comparatives Jul–Oct 2025 Real-World Protection", "https://av-comparatives.org/tests/real-world-protection-test-july-october-2025/"],
    ["AV-Comparatives 2026 first-half report", "https://www.av-comparatives.org/wp-content/uploads/2026/06/avc_real-world_protection_2026a-1.pdf"],
    ["SE Labs Q4 2025 Home Anti-Malware", "https://selabs.uk/wp-content/uploads/2025/12/security-evaluation-test-report-home-anti-malware-2025-12.pdf"]
  ]},
  { title: "Official product and subscription sources", links: [
    ["Microsoft Defender and Windows Security", "https://www.microsoft.com/en-us/windows/learning-center/best-antivirus-software-for-windows"],
    ["Bitdefender Total Security and renewal terms", "https://www.bitdefender.com/en-us/consumer/total-security"],
    ["Norton AntiVirus Plus", "https://us.norton.com/products/norton-360-antivirus-plus"],
    ["Norton renewal pricing", "https://us.norton.com/pricing"],
    ["TotalAV terms", "https://legal.totalav.com/terms"],
    ["TotalAV refund guidance", "https://help.totalav.com/en/billing/-/refunds-and-money-back-guarantee"]
  ]},
  { title: "Privacy, legal, and program context", links: [
    ["FTC finalized Avast order", "https://www.ftc.gov/news-events/news/press-releases/2024/06/ftc-finalizes-order-avast-banning-it-selling-or-licensing-web-browsing-data-advertising-requiring-it"],
    ["U.S. Commerce Kaspersky prohibition", "https://media.bis.gov/kaspersky"],
    ["Virus Bulletin TotalAV record", "https://www.virusbulletin.com/vb100/testing/total-security/totalav"],
    ["TotalAV affiliate program", "https://www.totalav.com/affiliates"]
  ]}
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="font-semibold text-teal-700 underline underline-offset-4" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export function BestAntivirusSoftwarePage() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: "2026-07-13", dateModified: "2026-07-13", author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: `${site.url}${path}` };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Best Antivirus Software", item: `${site.url}${path}` }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <>
    <SEO title={title} description={description} path={path} />
    {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

    <header className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-16 sm:py-24">
      <Container>
        <p className="text-sm font-black uppercase tracking-[.18em] text-teal-700">Cybersecurity tools · Antivirus guide</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-700">Microsoft Defender is enough for many Windows 11 users. Bitdefender is our leading balanced paid choice, while Norton is the stronger fit when a broad suite is worth the renewal cost.</p>
        <div className="mt-8 max-w-4xl rounded-2xl border border-amber-300 bg-amber-50 p-6 text-sm leading-7 text-slate-800"><strong>Testing disclosure:</strong> This is a documentation and independent-lab review. CBT did not install these products, run malware, benchmark scans, inspect network traffic, contact support, or test cancellation and refunds.</div>
        <p className="mt-5 text-sm text-slate-600">Evidence and volatile product facts checked July 13, 2026. Rankings were finalized independently of monetization availability.</p>
      </Container>
    </header>

    <main>
      <Section>
        <Container>
          <h2 className="text-3xl font-black text-slate-950">Quick recommendations</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{picks.map((pick) => <article key={pick.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-black uppercase tracking-wider text-teal-700">{pick.label}</p><h3 className="mt-2 text-xl font-black">{pick.name}</h3><p className="mt-3 leading-7 text-slate-700">{pick.fit}</p><p className="mt-4 border-t pt-4 text-sm leading-6 text-slate-600"><strong>Tradeoff:</strong> {pick.caveat}</p></article>)}</div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <h2 className="text-3xl font-black">Antivirus evidence compared</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">The lab figures below come from different test windows. They are evidence, not permanent guarantees or directly interchangeable promises.</p>
          <div className="mt-7 overflow-x-auto rounded-2xl border bg-white" tabIndex={0} role="region" aria-label="Antivirus evidence comparison table">
            <table className="min-w-[1050px] w-full text-left text-sm"><thead className="bg-slate-950 text-white"><tr>{["Product", "Cost model", "AV-TEST Apr 2026", "AV-Comparatives Jul–Oct 2025", "Why consider it", "Main limitation"].map((head) => <th key={head} className="px-5 py-4">{head}</th>)}</tr></thead><tbody>{comparison.map((row) => <tr key={row[0]} className="border-t align-top">{row.map((cell) => <td key={cell} className="px-5 py-4 leading-6">{cell}</td>)}</tr>)}</tbody></table>
          </div>
          <p className="mt-3 text-sm text-slate-500">On a phone, swipe inside the table to compare columns.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-black">How we judged the evidence</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{evidenceRules.map(([name, measure, limit]) => <article key={name} className="rounded-2xl border p-6"><h3 className="text-lg font-black">{name}</h3><p className="mt-3 leading-7 text-slate-700">{measure}</p><p className="mt-3 text-sm leading-6 text-slate-600"><strong>Limit:</strong> {limit}</p></article>)}</div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white"><Container><p className="text-sm font-black uppercase tracking-widest text-teal-300">Our verdict</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Start with Defender. Pay only for a clearer fit.</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">Independent evidence no longer supports treating Microsoft Defender as a token fallback. A paid product should earn its place through a better fit: Bitdefender for balanced paid evidence, Norton for a suite you will use, or another product for a specific platform or workflow.</p></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Microsoft Defender: the rational default for many people</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">Defender is built into Windows 11 and scored 18/18 in AV-TEST's April 2026 evaluation. It also had a strong recent SE Labs result. AV-Comparatives recorded 99.1% protection in its July–October 2025 test—good evidence, but not the highest figure in that window.</p><p className="mt-4 max-w-4xl leading-8 text-slate-700">Keep it when you want capable baseline protection without another subscription. Consider paying when you need multi-platform household management, identity monitoring, a particular support model, parental controls, or bundle features that genuinely replace separate purchases.</p></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">Bitdefender: the leading balanced paid choice</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">Bitdefender combined an 18/18 AV-TEST result with a 2025 AV-Comparatives Top-Rated designation and relatively low annual false positives. That broad record is stronger than selecting a winner from one perfect month.</p><p className="mt-4 max-w-4xl leading-8 text-slate-700">It still did not lead every test. Its official page also says the first-term price may differ from renewal. Choose it for the evidence balance, not because a discount or bundle makes every included component best in class.</p></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Norton: the leading full-suite fit</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">Norton scored 18/18 in AV-TEST, blocked all 428 cases in AV-Comparatives' July–October 2025 test, and was among the lower-impact products in the annual summary. Its U.S. pages also publish first-term and renewal examples.</p><p className="mt-4 max-w-4xl leading-8 text-slate-700">The buying decision is whether the suite earns its renewal cost. Compare antivirus, VPN, backup, identity, and password features separately. A large feature list is not the same thing as better core malware protection.</p></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">ESET, F-Secure, and McAfee: strong alternatives by fit</h2><div className="mt-7 grid gap-5 md:grid-cols-3"><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">ESET</h3><p className="mt-3 leading-7 text-slate-700">A 2025 AV-Comparatives Top-Rated product with 99.5% in the later real-world test and 17.5/18 in current AV-TEST. We did not test its interface or resource use.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">F-Secure</h3><p className="mt-3 leading-7 text-slate-700">Current evidence includes 17.5/18 on Windows and 18/18 in AV-TEST's March 2026 macOS evaluation. Verify plan details and platform features before paying.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">McAfee</h3><p className="mt-3 leading-7 text-slate-700">Strong current AV-TEST, AV-Comparatives, and SE Labs evidence supports a credible suite alternative. Bundle value and renewal terms remain reader-specific.</p></article></div></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">TotalAV: capable protection with subscription caveats</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">TotalAV's current protection evidence is legitimate: 18/18 in AV-TEST, 99.5% in AV-Comparatives' later 2025 real-world test, and a high-90s SE Labs Q4 result. It earned an AV-Comparatives Approved Product award for 2025, not Top-Rated status.</p><p className="mt-4 max-w-4xl leading-8 text-slate-700">Its terms describe recurring subscriptions, multiple add-ons, and different refund windows for annual and monthly plans. Its public affiliate program also makes independent scrutiny especially important. We use no tracked TotalAV link here, and its commercial availability did not improve its placement.</p></Container></Section>

      <Section className="bg-slate-950 text-white"><Container><h2 className="text-3xl font-black">Free protection has a privacy dimension</h2><p className="mt-5 max-w-4xl leading-8 text-slate-200">Avast and AVG produced excellent current lab results. The FTC's finalized order concerning Avast's past Jumpshot browsing-data practices remains material evidence about trust. It would be wrong to hide that history—and equally wrong to claim the same conduct necessarily continues unchanged today.</p></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Why Kaspersky is not recommended for U.S. readers</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">Kaspersky continues to post strong independent test results, but the U.S. Commerce Department prohibits covered antivirus sales, services, and updates to U.S. persons. For a U.S.-oriented buying guide, that legal and update constraint is decisive. This is not a claim that the product performs poorly in labs.</p></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">How to compare price without being misled</h2><div className="mt-7 grid gap-5 md:grid-cols-2"><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Compare the second term</h3><p className="mt-3 leading-7 text-slate-700">Record the first-term price, renewal price, billing period, taxes, and device count. A large introductory discount can conceal the long-term cost.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Unbundle the bundle</h3><p className="mt-3 leading-7 text-slate-700">Price the antivirus separately from VPN, password manager, identity, backup, cleanup, and premium support. Pay only for features you would choose independently.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Read cancellation and refunds</h3><p className="mt-3 leading-7 text-slate-700">Turning off auto-renewal may not itself request a refund. Check the official process, eligibility window, and app-store rules before purchase.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Avoid permanent value labels</h3><p className="mt-3 leading-7 text-slate-700">Promotions and plan structures change too quickly for a durable “cheapest” winner without normalized, dated inputs.</p></article></div></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Frequently asked questions</h2><div className="mt-7 space-y-4">{faq.map(([question, answer]) => <article key={question} className="rounded-2xl border bg-white p-6"><h3 className="text-lg font-black">{question}</h3><p className="mt-3 leading-7 text-slate-700">{answer}</p></article>)}</div></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">Evidence checked for this guide</h2><div className="mt-7 grid gap-6 lg:grid-cols-3">{sourceGroups.map((group) => <section key={group.title} className="rounded-2xl border bg-white p-6"><h3 className="text-lg font-black">{group.title}</h3><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>)}</div><p className="mt-7 max-w-4xl text-sm leading-7 text-slate-600">Lab results are bounded by their versions, samples, settings, dates, and methodologies. CBT did not reproduce them. This article contains no paid placement and no tracked antivirus product link.</p></Container></Section>

      <Section><Container><div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-12"><p className="text-sm font-black uppercase tracking-widest text-teal-300">Final recommendation</p><h2 className="mt-3 text-3xl font-black">Choose the least complicated protection that solves your real problem.</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">Keep Microsoft Defender when it covers your everyday Windows needs. Pay for Bitdefender when you want the strongest balanced paid evidence in this review. Choose Norton when the wider suite earns its renewal cost. Treat every discount, bundle, and perfect lab score as a starting point—not a guarantee.</p><p className="mt-5 text-slate-300">For account protection beyond antivirus, see our <Link className="font-semibold text-teal-300 underline" to="/are-password-managers-safe">password-manager safety guide</Link> and <Link className="font-semibold text-teal-300 underline" to="/guides/vpn-privacy-guide">VPN privacy guide</Link>.</p></div></Container></Section>
    </main>
    <Newsletter />
  </>;
}
