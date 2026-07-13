import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/reviews/totalav-review";
const title = "TotalAV Review 2026: Strong Protection, Complicated Value";
const description = "TotalAV has credible independent protection results, but renewal, add-ons, privacy, and platform limits make its long-term value more complicated.";

const facts = [
  ["Best for", "Informed buyers who specifically prefer TotalAV and will verify every subscription term."],
  ["Not best for", "People who want the simplest Windows baseline or CBT's leading balanced paid choice."],
  ["Strongest evidence", "18/18 in AV-TEST April 2026 and 99.5% in AV-Comparatives' later 2025 real-world test."],
  ["Biggest limitation", "Promotional renewal, separate add-ons, and refund rules require more attention than the checkout headline."],
  ["Testing status", "Documentation and independent labs only; CBT did not install or purchase the product."],
  ["CBT verdict", "Legitimate and capable, but not our leading antivirus recommendation."]
];

const labs = [
  ["AV-TEST", "April 2026", "18/18", "A perfect result for the tested Windows version and window—not a permanent guarantee."],
  ["AV-Comparatives", "July–October 2025", "99.5%", "Real-world protection across 428 cases; one of several important measures."],
  ["AV-Comparatives annual", "2025 summary", "Approved Product", "Two Advanced+ and one Advanced award, but not Top-Rated."],
  ["SE Labs", "December 2025", "97% protection; 99% total", "AAA award with one targeted attack missed."],
  ["Virus Bulletin", "February 2025", "VB100 pass; A+", "Useful older certification; it does not establish current participation."]
];

const faq = [
  ["Is TotalAV legitimate?", "Yes. TotalAV is operated by a documented UK company and has current results from multiple independent security labs. Legitimate does not automatically mean best value or best fit."],
  ["Is TotalAV good at detecting malware?", "Its recent lab evidence is strong: 18/18 in AV-TEST April 2026, 99.5% in AV-Comparatives' later 2025 real-world test, and a 97% protection score from SE Labs in December 2025."],
  ["Why is TotalAV not Choose Better Tech's top pick?", "Its annual AV-Comparatives standing trailed the Top-Rated group, SE Labs recorded one missed targeted attack, and its renewal and separate-add-on terms demand more buyer attention. Affiliate availability did not affect the decision."],
  ["Is TotalAV better than Microsoft Defender?", "Not universally. Defender is built into Windows and has strong current evidence. TotalAV can add features, but a paid plan should solve a specific need beyond what Defender already provides."],
  ["Is TotalAV better than Bitdefender?", "CBT currently prefers Bitdefender as the balanced paid choice because of its broader 2025 annual standing. That is a fit judgment, not a claim that Bitdefender wins every test."],
  ["Does TotalAV renew automatically?", "Generally yes. Its terms describe automatically renewing subscriptions and say an introductory first term can renew at the standard price communicated at enrollment or before renewal."],
  ["Are TotalAV add-ons separate subscriptions?", "They can be. The current terms say multiple services and add-ons may be billed and managed as individual subscriptions, so each one should be checked and cancelled separately when applicable."],
  ["How does the TotalAV refund policy work?", "Official guidance generally gives annual or biannual plans 30 days and monthly, quarterly, or add-on services 14 days, subject to eligibility and purchase channel. A refund requires an eligible request."],
  ["Does cancelling TotalAV automatically request a refund?", "No. Turning off auto-renewal stops future renewal but does not itself request a refund. App-store purchases use the store's refund process."],
  ["Does TotalAV work on iPhone?", "TotalAV offers iOS tools, but its own support page says the iOS app does not run an antivirus. Do not expect Windows-style system scanning on an iPhone or iPad."],
  ["Does TotalAV support Windows on ARM?", "Not currently according to its published system requirements. Verify this again before buying for an ARM-based Windows computer."],
  ["What information does TotalAV collect?", "Its privacy policy lists account, contact, payment, IP, browser, device, activity, cookie, and possible mobile-location information, among other categories and contexts."],
  ["Does TotalAV have an affiliate program?", "Yes, it has a public direct program. CBT has no verified TotalAV tracking entry and uses no tracked TotalAV link in this review."],
  ["Did Choose Better Tech test TotalAV?", "No. CBT did not install it, run malware, benchmark performance, inspect traffic, contact support, purchase a plan, cancel, or request a refund."],
  ["Who should choose TotalAV?", "Choose it only when its documented features fit your devices, you have verified renewal and add-ons, and you prefer it despite the clearer Defender, Bitdefender, or Norton paths for many readers."]
];

const sources = [
  { title: "Independent evidence", links: [
    ["AV-TEST Windows home results", "https://www.av-test.org/en/antivirus/home-windows/"],
    ["AV-Comparatives 2025 summary", "https://av-comparatives.org/tests/summary-report-2025/"],
    ["AV-Comparatives July–October 2025", "https://av-comparatives.org/tests/real-world-protection-test-july-october-2025/"],
    ["SE Labs December 2025 report", "https://selabs.uk/wp-content/uploads/2025/12/security-evaluation-test-report-home-anti-malware-2025-12.pdf"],
    ["Virus Bulletin February 2025 report", "https://www.virusbulletin.com/uploads/vb100/test-reports/vb100-test-report-2025-02-25-totalav.pdf"]
  ]},
  { title: "Product and platform", links: [
    ["Features and platform overview", "https://help.totalav.com/en/account/-/acc-features-and-benefits"],
    ["Real-time protection and iOS scope", "https://help.totalav.com/en/tech/av/av-settings/-/av-set-how-to-enable-real-time-protection"],
    ["System requirements", "https://help.totalav.com/en/tech/av/setup/-/av-setup-system-requirements"],
    ["WebShield support", "https://help.totalav.com/en/tech/av/av-settings/-/using-webshield"]
  ]},
  { title: "Company, billing, and privacy", links: [
    ["Company disclosure", "https://www.totalav.com/impressum/"],
    ["Terms of service", "https://legal.totalav.com/terms"],
    ["Refund guidance", "https://help.totalav.com/en/billing/-/refunds-and-money-back-guarantee"],
    ["Promotional pricing guidance", "https://help.totalav.com/en/billing/-/promotional-pricing-explained"],
    ["Privacy policy", "https://legal.totalav.com/privacy"],
    ["Public affiliate program", "https://www.totalav.com/affiliates"]
  ]}
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="font-semibold text-teal-700 underline underline-offset-4" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export function TotalAvReviewPage() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: "2026-07-13", dateModified: "2026-07-13", author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: `${site.url}${path}` };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Reviews", item: `${site.url}/reviews` }, { "@type": "ListItem", position: 3, name: "TotalAV Review", item: `${site.url}${path}` }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <>
    <SEO title={title} description={description} path={path} />
    {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

    <header className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-16 sm:py-24">
      <Container>
        <p className="text-sm font-black uppercase tracking-[.18em] text-teal-700">Cybersecurity tools · Antivirus review</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-700">TotalAV is a legitimate antivirus with strong recent lab results. Its value is harder to recommend broadly because annual standing, renewal, separate add-ons, privacy, and platform limits need careful reading.</p>
        <div className="mt-8 max-w-4xl rounded-2xl border border-amber-300 bg-amber-50 p-6 text-sm leading-7 text-slate-800"><strong>Testing disclosure:</strong> CBT did not install TotalAV, run malware, benchmark scans, inspect traffic, contact support, purchase a plan, cancel, or request a refund. This is a documentation and independent-lab review.</div>
        <p className="mt-5 text-sm text-slate-600">Evidence checked July 13, 2026. No tracked TotalAV link is used, and its public affiliate program did not affect the verdict.</p>
      </Container>
    </header>

    <main>
      <Section><Container><h2 className="text-3xl font-black">Quick verdict</h2><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{facts.map(([label, value]) => <article key={label} className="rounded-2xl border bg-white p-6 shadow-sm"><p className="text-xs font-black uppercase tracking-wider text-teal-700">{label}</p><p className="mt-3 leading-7 text-slate-700">{value}</p></article>)}</div></Container></Section>

      <Section className="bg-slate-950 text-white"><Container><p className="text-sm font-black uppercase tracking-widest text-teal-300">Our verdict</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Strong protection evidence does not settle the buying decision.</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">TotalAV clears the legitimacy question. It does not become CBT's top pick because the wider evidence and purchase terms favor clearer paths for many readers: Defender for a built-in baseline, Bitdefender for balanced paid evidence, and Norton when a full suite earns its renewal cost.</p></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Who operates TotalAV?</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">Total Security Limited trades as TotalAV and is registered in England and Wales under company number 10161957. The current privacy policy also says Total Security is part of Point Wild, formerly Pango, and names Total Security US LLC for U.S. operations.</p><p className="mt-4 max-w-4xl leading-8 text-slate-700">Those official disclosures establish the named entities. CBT did not independently audit corporate control, internal security, or operational practice.</p></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">How we reviewed TotalAV</h2><div className="mt-7 grid gap-5 md:grid-cols-3"><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Protection evidence</h3><p className="mt-3 leading-7 text-slate-700">We compared current and annual results across AV-TEST, AV-Comparatives, SE Labs, and Virus Bulletin without merging unlike test windows.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Purchase evidence</h3><p className="mt-3 leading-7 text-slate-700">We separated introductory pricing, renewal, individual add-ons, cancellation, refund requests, and app-store rules using official terms.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Trust and fit</h3><p className="mt-3 leading-7 text-slate-700">We considered company disclosure, privacy categories, platform limits, affiliate conflict, alternatives, and everything CBT did not test.</p></article></div></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">What the independent labs found</h2><p className="mt-4 max-w-4xl leading-7 text-slate-700">Each result measures a particular build, sample set, configuration, and time window. Read them together rather than turning one perfect score into a permanent promise.</p><div className="mt-7 overflow-x-auto rounded-2xl border bg-white" tabIndex={0} role="region" aria-label="TotalAV independent lab evidence table"><table className="min-w-[850px] w-full text-left text-sm"><thead className="bg-slate-950 text-white"><tr>{["Lab", "Window", "Result", "How to read it"].map((head) => <th key={head} className="px-5 py-4">{head}</th>)}</tr></thead><tbody>{labs.map((row) => <tr key={row[0]} className="border-t align-top">{row.map((cell) => <td key={cell} className="px-5 py-4 leading-6">{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-3 text-sm text-slate-500">On a phone, swipe inside the table to compare columns.</p></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">Protection is credible; leadership is more qualified</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">AV-TEST's 18/18 and AV-Comparatives' 99.5% are strong. The annual picture is more measured: TotalAV was an Approved Security Product for 2025, not one of the Top-Rated products. SE Labs awarded AAA but recorded 97% protection and one missed targeted attack.</p><p className="mt-4 max-w-4xl leading-8 text-slate-700">That combination supports “capable” and “legitimate.” It does not support “best,” “perfect,” or “guaranteed.”</p></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Apps and platform limits</h2><div className="mt-7 grid gap-5 md:grid-cols-3"><article className="rounded-2xl border p-6"><h3 className="text-xl font-black">Windows, Mac, and Android</h3><p className="mt-3 leading-7 text-slate-700">Official documentation covers real-time protection on these workflows, with plan and setup differences. CBT did not test installation, resource use, alerts, or reliability.</p></article><article className="rounded-2xl border p-6"><h3 className="text-xl font-black">iPhone and iPad</h3><p className="mt-3 leading-7 text-slate-700">TotalAV explicitly says its iOS app does not run an antivirus. Its iOS security and utility features should not be described as Windows-style system scanning.</p></article><article className="rounded-2xl border p-6"><h3 className="text-xl font-black">Windows on ARM</h3><p className="mt-3 leading-7 text-slate-700">Current requirements say ARM-based Windows devices are unsupported. Recheck before buying because platform support can change.</p></article></div></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">The subscription is the main value complication</h2><div className="mt-7 grid gap-5 md:grid-cols-2"><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Introductory versus renewal price</h3><p className="mt-3 leading-7 text-slate-700">The first term can be promotional. Official guidance says renewal occurs at the regular rate shown at checkout and in confirmation materials. Record the actual renewal amount before paying.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Separate services and add-ons</h3><p className="mt-3 leading-7 text-slate-700">The terms say multiple services and add-ons can be separate subscriptions. A shared login does not mean one cancellation controls every charge.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Cancellation is not a refund request</h3><p className="mt-3 leading-7 text-slate-700">Turning off auto-renewal stops a future renewal; it does not itself request a refund. Confirm each active service in the account portal.</p></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Refund windows differ</h3><p className="mt-3 leading-7 text-slate-700">Official guidance generally gives annual/biannual plans 30 days and monthly, quarterly, or add-on services 14 days, with eligibility and purchase-channel conditions.</p></article></div></Container></Section>

      <Section className="bg-slate-950 text-white"><Container><h2 className="text-3xl font-black">Privacy deserves its own decision</h2><p className="mt-5 max-w-4xl leading-8 text-slate-200">TotalAV's privacy policy lists account, contact, payment, IP, browser, device, activity, cookie, and possible mobile-location information. It also describes sharing for cross-context behavioral or targeted advertising with applicable opt-out rights.</p><p className="mt-4 max-w-4xl leading-8 text-slate-200">That does not prove misuse or describe every antivirus scan event. It does mean the privacy policy should be read as part of the purchase—not replaced by a malware-detection score.</p></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Affiliate promotion is a conflict, not evidence</h2><p className="mt-5 max-w-4xl leading-8 text-slate-700">TotalAV operates a public direct affiliate program. That creates a material conflict risk whenever a commercial publisher covers the product, but it neither invalidates the product nor supports a recommendation.</p><p className="mt-4 max-w-4xl leading-8 text-slate-700">CBT has no verified TotalAV tracking entry. This review uses an <a className="font-semibold text-teal-700 underline" href="https://www.totalav.com/" target="_blank" rel="noopener noreferrer">official non-affiliate TotalAV link</a>, and its placement remains unchanged by monetization availability.</p></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">Who should choose TotalAV?</h2><div className="mt-7 grid gap-5 md:grid-cols-2"><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Consider it when</h3><ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700"><li>You specifically prefer TotalAV after comparing current lab evidence.</li><li>You verified the exact renewal amount and every add-on.</li><li>Your devices are supported and you understand the iOS distinction.</li><li>You accept the documented privacy and subscription tradeoffs.</li></ul></article><article className="rounded-2xl border bg-white p-6"><h3 className="text-xl font-black">Choose another path when</h3><ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700"><li>Defender already meets your Windows needs.</li><li>You want CBT's leading balanced paid choice.</li><li>You want a simpler subscription with fewer separate services.</li><li>You use Windows on ARM or expect iOS system antivirus scanning.</li></ul></article></div><p className="mt-7 leading-7 text-slate-700">See the full <Link className="font-semibold text-teal-700 underline" to="/best-antivirus-software">Best Antivirus Software guide</Link> for the market decision.</p></Container></Section>

      <Section><Container><h2 className="text-3xl font-black">Frequently asked questions</h2><div className="mt-7 space-y-4">{faq.map(([question, answer]) => <article key={question} className="rounded-2xl border bg-white p-6"><h3 className="text-lg font-black">{question}</h3><p className="mt-3 leading-7 text-slate-700">{answer}</p></article>)}</div></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="text-3xl font-black">Evidence checked for this review</h2><div className="mt-7 grid gap-6 lg:grid-cols-3">{sources.map((group) => <section key={group.title} className="rounded-2xl border bg-white p-6"><h3 className="text-lg font-black">{group.title}</h3><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>)}</div><p className="mt-7 max-w-4xl text-sm leading-7 text-slate-600">CBT did not reproduce any lab result. No numeric rating, fake star score, paid placement, or tracked product link is used.</p></Container></Section>

      <Section><Container><div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-12"><p className="text-sm font-black uppercase tracking-widest text-teal-300">Final recommendation</p><h2 className="mt-3 text-3xl font-black">TotalAV is credible. Buy only with the renewal map open.</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">Choose it when its exact plan fits and you accept the subscription and privacy tradeoffs. Keep Defender for the simpler Windows baseline, choose Bitdefender for CBT's leading balanced paid evidence, or choose Norton when a wider suite earns its renewal cost.</p><p className="mt-5 text-slate-300">For bundle decisions, evaluate the <Link className="font-semibold text-teal-300 underline" to="/are-password-managers-safe">password manager</Link> and <Link className="font-semibold text-teal-300 underline" to="/guides/vpn-privacy-guide">VPN privacy</Link> separately.</p></div></Container></Section>
    </main>
    <Newsletter />
  </>;
}
