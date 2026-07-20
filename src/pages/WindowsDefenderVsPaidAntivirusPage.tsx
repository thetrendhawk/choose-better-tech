import { CheckCircle2, ExternalLink as ExternalLinkIcon, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleMeta } from "../components/editorial/ArticleMeta";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/guides/windows-defender-vs-paid-antivirus";
const title = "Windows Defender vs Paid Antivirus: Is Built-In Protection Enough for You?";
const description = "Decide whether Microsoft Defender is enough for your Windows use or a paid antivirus suite closes a specific gap worth paying for.";
const checkedDate = "July 20, 2026";

const quickVerdict = [
  {
    label: "Stay with the built-in baseline when",
    body: "Your supported Windows device is updated, Windows Security shows an active provider, and you do not need extra household, cross-platform, parental-control, or support features."
  },
  {
    label: "Consider paying when",
    body: "You can name a missing capability, confirm that the paid plan supplies it on your devices, and expect to use it enough to justify another subscription."
  },
  {
    label: "Do not use either option as",
    body: "A replacement for updates, strong account security, phishing awareness, and an independent backup—or as a guarantee that malware and scams cannot reach you."
  }
];

const capabilityAudit = [
  {
    need: "Core malware protection",
    builtIn: "Defender Antivirus provides the built-in real-time malware baseline inside Windows Security.",
    paid: "A third-party engine with its own controls, policies, and current independent-test record.",
    question: "Does current evidence show an advantage that matters to you, or are you paying only because the product is paid?"
  },
  {
    need: "Household administration",
    builtIn: "Each Windows PC can report its own security status; Microsoft also offers separate family and subscription tools.",
    paid: "One dashboard may show several people, devices, alerts, and subscription services.",
    question: "Will the household actually use the dashboard, and can adult privacy and child management remain appropriately separate?"
  },
  {
    need: "Cross-platform management",
    builtIn: "Windows Security is Windows-specific. Microsoft's separate Defender subscription app can add a cross-device view.",
    paid: "A suite may cover Windows, macOS, Android, and iOS under one account.",
    question: "What does the product actually do on each operating system? Device coverage is not the same as feature parity."
  },
  {
    need: "Parental controls",
    builtIn: "Microsoft Family Safety already documents family roles, limits, permissions, and activity reporting.",
    paid: "Some suites add child profiles, filtering, time rules, location or activity features, and centralized assignments.",
    question: "Which exact control is missing from your current setup, and what family data must the provider collect to supply it?"
  },
  {
    need: "Human help",
    builtIn: "Microsoft provides documentation and support paths, but the built-in antivirus is not a dedicated personal security concierge.",
    paid: "Some plans advertise support, malware-removal help, or remediation promises.",
    question: "Is support included for your plan and region, what does it cover, and are important exclusions or conditions clear?"
  },
  {
    need: "Bundled services",
    builtIn: "Windows and Microsoft accounts already include or connect to several security and family tools; you may also own standalone tools.",
    paid: "Suites can bundle VPN, password-manager, identity-monitoring, backup, browser, or privacy services.",
    question: "Would you choose each extra on its own merits, or is the bundle making mediocre or duplicate tools look valuable?"
  }
];

const separateProblems = [
  ["Firewall and network controls", "Control allowed network connections. They are not evidence that a paid antivirus detects more malware."],
  ["Password management", "Creates and stores unique credentials. It addresses account takeover and password reuse, not file scanning."],
  ["VPN", "Changes the network path and who can observe parts of your traffic. It does not replace antivirus or stop every malicious download."],
  ["Identity monitoring", "May alert you when tracked information appears in known breach or monitoring sources. It does not prevent the original exposure."],
  ["Backup", "Provides a recovery copy when designed and tested properly. Antivirus and file-version history are not substitutes for an independent backup."],
  ["Parental controls", "Help manage a child's access, time, or activity. They are a family-governance feature, not a malware-detection score."]
];

const enoughForNow = [
  "Your Windows version is still supported and receiving security updates.",
  "Windows Security shows an active antivirus provider and no unresolved warning you are ignoring.",
  "You keep Windows, browsers, and important apps updated.",
  "Your accounts use unique passwords and multifactor authentication where available.",
  "Important files have an independent backup you know how to restore.",
  "You do not need a paid household dashboard, cross-platform control, specialized parental controls, or included support.",
  "A suite would mainly duplicate tools you already use and trust."
];

const payingMayFit = [
  "You support several family members and need a central view of device status or alerts.",
  "Your household mixes Windows, Mac, Android, and iPhone devices and a verified cross-platform workflow would reduce real maintenance.",
  "A specific parental-control function is missing from Microsoft Family Safety or your existing setup.",
  "You need access to a documented support or remediation service and accept its scope and conditions.",
  "A bundle will replace separate subscriptions without lowering the quality of the tools you rely on.",
  "A current independent test difference is relevant to your hardware, tolerance for false positives, and threat model.",
  "You have reviewed the plan, platforms, renewal terms, privacy implications, and cancellation path in the product-selection guide."
];

const decisionQuestions = [
  ["1", "What is the missing capability?", "Write one sentence. If the answer is only “more protection,” the need is not defined well enough to shop."],
  ["2", "Do I already have it?", "Check Windows Security, Microsoft Family Safety, any Microsoft 365 entitlement, your router, backup, password manager, and existing support."],
  ["3", "Does the exact plan supply it everywhere I need it?", "Verify the feature by plan, country, operating system, device type, and family role. Do not rely on a bundle headline."],
  ["4", "Is the feature good enough on its own?", "Judge the VPN, password manager, backup, monitoring, parental control, or support service separately from the antivirus engine."],
  ["5", "What happens if I leave?", "Check renewal, cancellation, family offboarding, data retention, exports, and which protections stop with the subscription before buying."]
];

const faq = [
  ["Is Microsoft Defender free with Windows?", "Microsoft Defender Antivirus is built into supported Windows 10 and Windows 11 installations and does not require a separate antivirus purchase. Microsoft also sells or bundles a different cross-device Microsoft Defender app through Microsoft 365 Personal and Family; the names are easy to confuse."],
  ["Does paid antivirus automatically detect more malware?", "No. Current independent tests can show differences for a named product, version, setup, and test window, but payment and bundle size do not prove stronger detection. Read multiple current results and their limitations."],
  ["Can I run Microsoft Defender and paid antivirus together?", "A compatible third-party antivirus normally becomes the active provider and Defender Antivirus turns off. Microsoft warns against running two real-time antimalware products at once. A documented on-demand second-opinion scanner is a different workflow."],
  ["Is a paid suite worth it for several family devices?", "It can be when a central dashboard, family roles, cross-platform visibility, or support reduces real work. First check the tools you already have and confirm what the paid plan can see or control for each family member."],
  ["Are paid parental controls better than Microsoft Family Safety?", "Not universally. The useful comparison is feature by feature: platforms, web filtering, schedules, app controls, location, reports, child privacy, bypass resistance, and offboarding. CBT did not test these workflows for this guide."],
  ["Should I buy a suite for its VPN, password manager, or backup?", "Only after judging that feature separately. Those tools can be useful, but each solves a different problem and none proves the antivirus engine is better. A bundle is valuable only if its components meet your needs."],
  ["What if my Windows version is no longer supported?", "A paid antivirus cannot replace missing operating-system security updates. Confirm Windows support first, then follow Microsoft's supported upgrade or servicing options before treating another antivirus as the solution."],
  ["Does this advice apply to work or school computers?", "No. Managed devices may require organization-approved endpoint security, logging, policy enforcement, access controls, and incident response. Follow your administrator rather than installing a consumer suite yourself."],
  ["Did Choose Better Tech test Defender or paid suites for this guide?", "No. This is a web-research-only guide based on current Microsoft documentation, government guidance, independent laboratory reports, and attributed provider documentation. CBT did not install, benchmark, or test the products or services discussed."],
  ["Where should I compare products after deciding to pay?", "Use the Best Antivirus Software guide after you can name the capability you need. It owns product rankings, current comparative evidence, pricing, privacy, renewal, and provider-level fit."]
] as const;

const sourceGroups = [
  {
    title: "Microsoft platform and lifecycle",
    links: [
      ["Windows Security overview", "https://support.microsoft.com/en-US/Windows/Security/Windows-Security/stay-protected-with-the-windows-security-app"],
      ["Virus and threat protection settings", "https://support.microsoft.com/en-us/windows/security/threat-malware-protection/virus-and-threat-protection-in-the-windows-security-app"],
      ["Consumer antivirus providers and coexistence warning", "https://support.microsoft.com/en-us/windows-antivirus-software-providers"],
      ["Check the active Windows security provider", "https://support.microsoft.com/en-us/windows/scan-an-item-with-windows-security-d1c8c01d-12ed-e768-cbb8-830ea8ccf8e6"],
      ["Windows 11 Home and Pro lifecycle", "https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro"]
    ]
  },
  {
    title: "Microsoft family and cross-device tools",
    links: [
      ["Microsoft Defender app versus built-in antivirus", "https://support.microsoft.com/en-us/defender/installing-microsoft-defender"],
      ["Adding devices to the Microsoft Defender app", "https://support.microsoft.com/en-us/defender/adding-devices-to-microsoft-defender"],
      ["Set up Microsoft Family Safety", "https://support.microsoft.com/en-us/family-safety/set-up-microsoft-family-safety"]
    ]
  },
  {
    title: "Independent and government evidence",
    links: [
      ["AV-TEST Defender result — January–February 2026", "https://www.av-test.org/en/antivirus/home-windows/windows-11/february-2026/microsoft-defender-antivirus-consumer-4.18-261115/"],
      ["AV-TEST Defender result — March–April 2026", "https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/microsoft-defender-antivirus-consumer-4.18-261213/"],
      ["AV-Comparatives Real-World Protection Test — February–May 2026", "https://av-comparatives.org/wp-content/uploads/2026/06/avc_real-world_protection_2026a-1.pdf"],
      ["CISA Secure Our World", "https://www.cisa.gov/secure-our-world"]
    ]
  },
  {
    title: "Attributed paid-capability examples",
    links: [
      ["Bitdefender device and family management documentation", "https://www.bitdefender.com/consumer/support/answer/124140/"],
      ["Bitdefender parental-control profiles", "https://www.bitdefender.com/consumer/support/answer/100430/"],
      ["Norton 360 Deluxe documented bundle", "https://us.norton.com/products/norton-360-deluxe"],
      ["Norton documented support and bundle categories", "https://us.norton.com/internet-security"]
    ]
  }
] as const;

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="inline-flex items-start gap-2 font-semibold text-teal-700 underline underline-offset-4" href={href} target="_blank" rel="noopener noreferrer"><span>{children}</span><ExternalLinkIcon className="mt-1 shrink-0" size={15} aria-hidden="true" /></a>;
}

export function WindowsDefenderVsPaidAntivirusPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Windows Defender vs paid antivirus", item: `${site.url}${path}` }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }))
  };

  return <>
    <SEO title={title} description={description} path={path} />
    {[breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

    <header className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-16 sm:py-24 lg:py-28">
      <Container className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[.18em] text-teal-700">Cybersecurity tools · capability guide</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-slate-700">For many people on a supported, updated Windows PC, Defender is a credible baseline. Pay only when a suite closes a specific gap you can name and verify.</p>
        <ArticleMeta title={title} description={description} path={path} authorName="Choose Better Tech Editorial" datePublished="2026-07-20" dateModified="2026-07-20" displayDate={checkedDate} showVisibleDetails />
        <div className="mt-7 max-w-3xl rounded-2xl border border-amber-300 bg-amber-50 p-7 text-base leading-7 text-slate-800"><strong>Web-research-only disclosure:</strong> CBT reviewed current Microsoft documentation, government guidance, independent laboratory reports, and attributed provider documentation. We did not install, benchmark, or hands-on test Defender or any paid suite.</div>
        <p className="mt-5 text-base text-slate-600">Sources refreshed {checkedDate}. No affiliate product link or paid-product winner appears in this guide.</p>
      </Container>
    </header>

    <main className="longform-page">
      <Section>
        <Container>
          <div className="longform-reading">
            <h2 className="longform-section-title">Direct answer: Defender is enough until you find a real gap</h2>
            <p className="mt-6 longform-copy">Microsoft Defender Antivirus is not an empty or token layer waiting to be replaced. It is the built-in malware engine inside Windows Security. Current results from AV-TEST and AV-Comparatives support treating it as a credible starting point under those labs' dated methods—not as perfect protection and not as a permanent winner.</p>
            <p className="mt-5 longform-copy">A paid suite is reasonable when it gives you something operationally useful that your current setup lacks: one household dashboard, verified cross-platform management, a needed parental-control function, access to support, or a bundle component you would otherwise buy separately. If you cannot name the gap, do not let “more features” substitute for a decision.</p>
            <p className="mt-5 longform-copy">Still asking whether you need another antivirus at all? Start with <Link className="font-semibold text-teal-700 underline underline-offset-4" to="/guides/do-you-still-need-antivirus-on-windows-11">Do You Still Need Antivirus on Windows 11?</Link>. This page begins after that broad question and audits what paying would change.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {quickVerdict.map((item) => <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-sm font-black uppercase tracking-wide text-teal-700">{item.label}</p><p className="mt-4 longform-card-copy text-slate-700">{item.body}</p></article>)}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="longform-reading">
            <h2 className="longform-section-title">Know which “Defender” you mean</h2>
            <p className="mt-6 longform-copy">Microsoft's names are easy to blur. <strong>Microsoft Defender Antivirus</strong> is the malware-protection engine built into Windows. <strong>Windows Security</strong> is the Windows app that shows antivirus status alongside firewall, app and browser, account, device, and provider controls.</p>
            <p className="mt-5 longform-copy">Microsoft also offers a separate <strong>Microsoft Defender app</strong> through Microsoft 365 Personal and Family. That app can provide a cross-device view across several operating systems. It is not the same thing as the antivirus engine built into Windows, and its availability does not mean every device receives Windows-style scanning.</p>
          </div>
          <div className="mt-9 rounded-2xl border border-teal-200 bg-white p-7 shadow-sm">
            <p className="text-lg font-black text-slate-950">First duplication check</p>
            <p className="mt-3 longform-copy-muted">Before buying a new suite for a dashboard or family overview, check whether a Microsoft 365 entitlement, Microsoft Defender app, or Microsoft Family Safety already covers part of the need. Verify the current feature and platform—not just the product name.</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="longform-reading"><h2 className="longform-section-title">Before you pay, name the missing capability</h2><p className="mt-6 longform-copy">Use this audit as a pre-shopping worksheet. The point is not to prove that paid suites are unnecessary. It is to stop a useful extra from being mistaken for stronger core antivirus—or a long feature list from hiding duplication.</p></div>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {capabilityAudit.map((item) => <article key={item.need} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-2xl font-black text-slate-950">{item.need}</h3><dl className="mt-5 space-y-4 text-base leading-7 text-slate-700"><div><dt className="font-bold text-slate-950">Built-in or existing baseline</dt><dd>{item.builtIn}</dd></div><div><dt className="font-bold text-slate-950">What paying may add</dt><dd>{item.paid}</dd></div><div className="rounded-xl bg-slate-50 p-4"><dt className="font-bold text-teal-800">Question before buying</dt><dd>{item.question}</dd></div></dl></article>)}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="longform-reading"><h2 className="longform-section-title">What current independent tests can—and cannot—tell you</h2><p className="mt-6 text-lg leading-8 text-slate-200">AV-TEST gave Defender full protection, performance, and usability scores in both its January–February and March–April 2026 Windows 11 consumer cycles. AV-Comparatives' February–May 2026 real-world report also placed Microsoft in its top protection cluster under that different methodology.</p><p className="mt-5 text-lg leading-8 text-slate-200">Together, those results support “credible baseline.” They do not prove that Defender catches every future threat, that it performs the same on every PC, or that no paid product can fit someone better. Each result belongs to a product version, settings, Windows build, hardware setup, sample set, test method, and date.</p></div>
          <div className="mt-9 rounded-2xl border border-slate-700 bg-slate-900 p-7"><p className="font-black text-teal-300">The purchasing implication</p><p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">Do not buy merely to escape an allegedly useless built-in product. Compare current protection, false positives, measured impact, and continuity only after deciding that another provider or capability matters to you. CBT did not reproduce either lab's tests.</p></div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="longform-reading"><h2 className="longform-section-title">How third-party antivirus changes the Windows setup</h2><p className="mt-6 longform-copy">On an ordinary consumer PC, a compatible non-Microsoft antivirus normally registers as the active provider and Defender Antivirus turns off. Windows Security can still show provider status and other Windows controls. Paying usually replaces the primary real-time engine; it does not simply stack a second full engine on top.</p><p className="mt-5 longform-copy">Microsoft warns against running two antimalware products at the same time because they can conflict. That warning does not ban every on-demand second-opinion scanner, but any coexistence workflow should be explicitly supported by the product documentation.</p><p className="mt-5 longform-copy">After uninstalling a third-party product, Microsoft says Defender should return to active mode. Check <strong>Windows Security → Virus & threat protection → Manage providers</strong> rather than assuming the switch completed.</p></div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="longform-reading"><h2 className="longform-section-title">Features that sound like antivirus but solve another problem</h2><p className="mt-6 longform-copy">A bundle can be convenient, and some extras are genuinely useful. Keep their jobs separate so the feature count does not become a fake security score.</p></div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {separateProblems.map(([heading, body]) => <article key={heading} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-black text-slate-950">{heading}</h3><p className="mt-4 longform-card-copy text-slate-700">{body}</p></article>)}
          </div>
          <p className="mt-8 longform-reading longform-copy">For deeper separation of those categories, see <Link className="font-semibold text-teal-700 underline underline-offset-4" to="/are-password-managers-safe">Are Password Managers Safe?</Link> and the <Link className="font-semibold text-teal-700 underline underline-offset-4" to="/guides/vpn-privacy-guide">VPN Privacy Guide</Link>. A strong antivirus result does not validate the bundled password manager or VPN.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="longform-section-title">When Defender is likely enough—and when paying may be reasonable</h2>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7"><h3 className="text-2xl font-black text-slate-950">Stay with Defender for now when</h3><ul className="mt-6 space-y-4">{enoughForNow.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-slate-700"><CheckCircle2 className="mt-1 shrink-0 text-emerald-700" size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul></article>
            <article className="rounded-2xl border border-teal-200 bg-teal-50 p-7"><h3 className="text-2xl font-black text-slate-950">Consider a paid suite when</h3><ul className="mt-6 space-y-4">{payingMayFit.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-slate-700"><ShieldCheck className="mt-1 shrink-0 text-teal-700" size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul></article>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container>
          <h2 className="longform-section-title">The five-question paid-suite test</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{decisionQuestions.map(([number, heading, body]) => <article key={number} className="rounded-2xl border border-slate-700 bg-slate-900 p-6"><p className="text-3xl font-black text-teal-300">{number}</p><h3 className="mt-3 text-xl font-black">{heading}</h3><p className="mt-4 text-base leading-7 text-slate-200">{body}</p></article>)}</div>
          <div className="mt-9 longform-reading"><p className="text-lg leading-8 text-slate-200"><strong>Decision rule:</strong> if you can name the gap, verify the feature, and accept the terms, paying may be reasonable. If you cannot, keep the built-in baseline and fix more important gaps first.</p><p className="mt-5 text-lg leading-8 text-slate-200">Once the paid need is clear, use <Link className="font-semibold text-teal-300 underline underline-offset-4" to="/best-antivirus-software">Best Antivirus Software</Link> for provider-level protection evidence, privacy, pricing, renewal, and fit. This guide intentionally does not choose the product.</p></div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="longform-reading"><h2 className="longform-section-title">Limits shared by Defender and paid suites</h2><p className="mt-6 longform-copy">No antivirus can guarantee that you will never be infected, phished, scammed, tracked, or lose data. It cannot make an unsupported operating system supported, force you to install updates, prevent you from approving a fraudulent payment, or recover files when no usable backup exists.</p><p className="mt-5 longform-copy">CISA's consumer guidance emphasizes phishing awareness, strong unique passwords, password managers, MFA, and software updates. Those controls matter whether the antivirus is built in or paid. Backups and recovery testing remain separate again.</p><div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-7 text-base leading-7 text-slate-800"><strong>Consumer/business boundary:</strong> A work- or school-managed PC may need organization-approved endpoint security, policy enforcement, logging, access controls, and incident response. Follow the administrator. A consumer suite is not a substitute for an organizational security program.</div></div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="longform-reading"><h2 className="longform-section-title">Frequently asked questions</h2><div className="mt-8 space-y-5">{faq.map(([question, answer]) => <article key={question} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-xl font-black leading-7 text-slate-950">{question}</h3><p className="mt-4 longform-card-copy text-slate-700">{answer}</p></article>)}</div></div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-5xl"><h2 className="longform-section-title">Evidence checked for this guide</h2><p className="mt-5 longform-reading longform-copy-muted">Sources were refreshed {checkedDate}. Microsoft pages establish platform behavior; lab reports provide bounded independent evidence; provider pages only illustrate capability categories. None is used as proof of universal superiority.</p>
            <div className="mt-9 grid gap-6 lg:grid-cols-2">{sourceGroups.map((group) => <section key={group.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-xl font-black text-slate-950">{group.title}</h3><ul className="mt-5 space-y-4">{group.links.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>)}</div>
            <p className="mt-8 longform-reading longform-copy-muted"><strong>Methodology:</strong> CBT compared official Windows documentation, two current AV-TEST cycles, a current AV-Comparatives report, government guidance, and attributed provider capability documentation. We did not reproduce lab tests or evaluate paid products hands-on. Recommendations remain independent of affiliate availability.</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="longform-reading"><p className="text-sm font-black uppercase tracking-widest text-teal-300">Bottom line</p><h2 className="mt-3 longform-section-title">Pay for a defined capability, not a vague promise of more protection</h2><p className="mt-6 text-lg leading-8 text-slate-200">Defender is a credible baseline for many supported, updated Windows users. Keep it when the rest of your security setup is sound and a suite would mostly duplicate existing tools. Consider paying when a verified household, cross-platform, parental-control, support, or bundle capability solves a problem you actually have.</p><p className="mt-5 text-lg leading-8 text-slate-200">Neither choice makes you invulnerable. Confirm the active provider, keep the operating system and apps current, secure accounts, recognize phishing, and maintain an independent backup.</p></div>
        </Container>
      </Section>
    </main>

    <Newsletter />
  </>;
}
