import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/guides/do-you-still-need-antivirus-on-windows-11";
const title = "Do You Still Need Antivirus on Windows 11?";
const description = "Windows 11 includes Microsoft Defender and the wider Windows Security stack. Learn when built-in protection may be enough and when a paid suite may make sense.";

const windowsSecurityFeatures = [
  "Virus and threat protection",
  "Firewall and network protection",
  "App and browser controls",
  "Reputation-based protection",
  "Account and device security",
  "Protection history",
  "Optional ransomware-related controls",
  "Management of compatible security providers"
];

const paidReasons = [
  ["Household administration", "Some paid suites offer one account or dashboard for several devices and family members."],
  ["Cross-platform coverage", "A mixed Windows, macOS, Android, and iOS household may prefer one vendor, though features differ by platform."],
  ["Useful bundled services", "Parental controls, guided support, identity-response services, backup, or other tools may add value when you will actually use them."],
  ["Higher-risk personal use", "People handling sensitive personal files or supporting vulnerable family members may value additional controls and support."]
];

const decisionGroups = [
  {
    title: "Stay with Windows Security when",
    items: [
      "Your Windows 11 device is supported and updated.",
      "You use strong passwords, MFA, and a separate backup.",
      "You do not need household administration or a cross-platform bundle.",
      "You are comfortable with the built-in controls.",
      "A paid suite would mostly duplicate tools you already have."
    ]
  },
  {
    title: "Consider a paid suite when",
    items: [
      "You need centralized multi-device or family administration.",
      "You want specific parental controls, support, or identity-response features.",
      "You need one account across several operating systems.",
      "A bundled tool genuinely replaces services you would otherwise purchase.",
      "You understand the renewal price and subscription structure."
    ]
  },
  {
    title: "Fix other security gaps first when",
    items: [
      "You reuse passwords or have not enabled MFA.",
      "You have no tested backup.",
      "Your devices are not updated.",
      "You frequently ignore browser or Windows warnings.",
      "Your main concern is phishing, scams, or account theft."
    ]
  }
];

const faq = [
  ["Do I need antivirus on Windows 11?", "Windows 11 includes Microsoft Defender Antivirus and the wider Windows Security stack. Many ordinary users may not need another product when the system is supported and updated and they follow strong password, backup, and account-security practices."],
  ["Is Microsoft Defender enough for Windows 11?", "It may be enough for many users under the conditions described here. No product guarantees complete protection, and security habits still matter."],
  ["Is paid antivirus better than Microsoft Defender?", "Not automatically. Paid products may add family controls, support, identity-response tools, or cross-platform administration. Buy one only when those additions solve a real need."],
  ["Can I run Microsoft Defender with another antivirus?", "Windows normally lets a compatible registered third-party antivirus become the active provider. Microsoft advises against running multiple real-time security products simultaneously because overlapping products may create duplicated scanning, alerts, update problems, or performance costs."],
  ["Does antivirus stop phishing and scams?", "Some products include web and scam protections, but no tool catches every deceptive message, website, call, or request. Verify unexpected login pages, payment requests, and account alerts independently."],
  ["Does antivirus protect against ransomware?", "Antivirus can block some ransomware, and Windows includes optional ransomware-related controls. No product guarantees prevention or recovery. Keep software updated and maintain a separate tested backup."],
  ["Did Choose Better Tech test these products?", "No. This article is based on Microsoft documentation, independent lab evidence, and official product information. Choose Better Tech did not install the products or run hands-on tests."]
];

const sources = [
  ["Microsoft Support — Antivirus and antimalware software FAQ", "https://support.microsoft.com/en-us/windows/antivirus-and-antimalware-software-faq-31f2a1f4-a85c-4e0d-8b4a-6f6fe46d4db9"],
  ["Microsoft Support — Windows Security overview", "https://support.microsoft.com/en-us/windows/stay-protected-with-windows-security-2ae0363d-0ada-c064-8b56-6a39afb6a963"],
  ["Microsoft Support — Virus and threat protection", "https://support.microsoft.com/en-us/windows/security/threat-malware-protection/virus-and-threat-protection-in-the-windows-security-app"],
  ["Microsoft Support — Ransomware protection", "https://support.microsoft.com/en-us/windows/protect-your-pc-from-ransomware-08ed68a7-939f-726c-7e5d-6c29296fdf70"],
  ["AV-TEST — Windows 11 home-user results, March–April 2026", "https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/"],
  ["AV-TEST — Microsoft Defender result, March–April 2026", "https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/microsoft-defender-antivirus-consumer-4.18-261213/"]
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-base font-semibold leading-7 text-teal-700 underline underline-offset-4" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export function DoYouStillNeedAntivirusOnWindows11Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}${path}`
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Windows 11 antivirus guide", item: `${site.url}${path}` }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
  };

  return <>
    <SEO title={title} description={description} path={path} />
    {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

    <header className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-16 sm:py-24 lg:py-28">
      <Container className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[.18em] text-teal-700">Cybersecurity tools · Windows 11 guide</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-slate-700">For many ordinary Windows 11 users, buying another antivirus program is not automatically necessary. Start with the protection already built into Windows, then pay only when another suite solves a specific unmet need.</p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-amber-300 bg-amber-50 p-7 text-base leading-7 text-slate-800"><strong>Testing disclosure:</strong> Choose Better Tech did not install or personally test the antivirus products discussed here. This guide is based on Microsoft documentation, independent lab results, and official product information.</div>
        <p className="mt-5 text-base text-slate-600">Microsoft documentation and cited lab evidence checked July 20, 2026. No affiliate product link appears in this article.</p>
      </Container>
    </header>

    <main className="longform-page">
      <Section><Container><div className="longform-reading"><h2 className="longform-section-title">The useful question is not “free or paid?”</h2><p className="mt-6 longform-copy">Windows 11 includes Microsoft Defender Antivirus as part of the wider Windows Security system. In AV-TEST’s March–April 2026 Windows 11 home-user cycle, Defender received full category scores under that lab’s methodology.</p><p className="mt-5 longform-copy">That result does not prove Defender is perfect or permanently superior. Ask instead: <strong>What specific problem would a paid security suite solve that Windows 11 does not already solve well enough for you?</strong></p></div></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="longform-section-title">What Windows 11 already includes</h2><p className="mt-5 longform-reading longform-copy">Microsoft Defender is one layer inside a broader set of built-in controls.</p><div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{windowsSecurityFeatures.map((feature) => <article key={feature} className="rounded-2xl border bg-white p-6 shadow-sm"><p className="text-base font-bold leading-6 text-slate-900">{feature}</p></article>)}</div><p className="mt-8 longform-reading longform-copy">Windows normally lets a compatible registered third-party antivirus become the active provider. Microsoft advises against running multiple real-time security products simultaneously because overlapping products may create duplicated scanning, alerts, update problems, or performance costs.</p></Container></Section>

      <Section><Container><div className="longform-reading"><h2 className="longform-section-title">When Windows Security may be enough</h2><div className="mt-7 space-y-5 longform-copy"><p>For many ordinary Windows 11 users, it may be enough when the device is supported and updated, untrusted software is avoided, and the rest of the security setup is sound.</p><p>A strong antivirus cannot compensate for reused passwords, fake login pages, scam calls, unsupported software, missing backups, or warnings that are deliberately ignored.</p><p>Improving passwords, multifactor authentication, backups, updates, and scam awareness may deliver more practical value than adding another subscription.</p></div></div></Container></Section>

      <Section className="bg-slate-950 text-white"><Container><h2 className="longform-section-title">When a paid suite may make sense</h2><p className="mt-6 longform-reading text-lg leading-8 text-slate-200">A paid suite earns its place when it solves a concrete need beyond basic malware scanning.</p><div className="mt-9 grid gap-6 md:grid-cols-2">{paidReasons.map(([heading, body]) => <article key={heading} className="rounded-2xl border border-slate-700 bg-slate-900 p-7"><h3 className="text-2xl font-black">{heading}</h3><p className="mt-4 longform-card-copy text-slate-200">{body}</p></article>)}</div><p className="mt-8 longform-reading text-lg leading-8 text-slate-300">Identity monitoring, breach alerts, restoration assistance, and premium support may help detect or respond to problems. They are not evidence that the antivirus engine prevents more malware.</p></Container></Section>

      <Section><Container><div className="longform-reading"><h2 className="longform-section-title">What antivirus does not guarantee</h2><p className="mt-6 longform-copy">No antivirus product can guarantee that you will never be infected, hacked, scammed, or lose data. Security software may block malicious files, behaviors, sites, or downloads, but it does not replace account security, updates, backups, and judgment.</p><div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-7 text-base leading-7 text-slate-800"><strong>Business boundary:</strong> This is consumer guidance. Businesses, regulated organizations, and managed work environments may require endpoint security, centralized policies, logging, access controls, tested backups, and professional IT administration.</div></div></Container></Section>

      <Section className="bg-slate-50"><Container><h2 className="longform-section-title">A practical decision framework</h2><div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{decisionGroups.map((group) => <article key={group.title} className="rounded-2xl border bg-white p-7 shadow-sm"><h3 className="text-2xl font-black">{group.title}</h3><ul className="mt-5 space-y-4 text-base leading-7 text-slate-700">{group.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">•</span><span>{item}</span></li>)}</ul></article>)}</div></Container></Section>

      <Section><Container><div className="longform-reading"><h2 className="longform-section-title">How to read independent lab results</h2><p className="mt-6 longform-copy">Each result applies to a particular product version, test window, operating system, sample set, configuration, hardware setup, and methodology. A perfect score does not mean perfect future protection. Stronger evidence comes from consistency across time, multiple independent sources, low false positives, acceptable measured impact, and clearly stated limitations.</p><p className="mt-6 longform-copy">Already know you need another product? Use the <Link className="font-semibold text-teal-700 underline underline-offset-4" to="/best-antivirus-software">Best Antivirus Software guide</Link> for product-selection evidence, pricing, privacy, and fit.</p></div></Container></Section>

      <Section className="bg-slate-950 text-white"><Container><div className="longform-reading"><h2 className="longform-section-title">Bottom line</h2><p className="mt-6 text-lg leading-8 text-slate-200">Many ordinary Windows 11 users may not need another antivirus simply because they assume Windows lacks meaningful protection. Microsoft Defender and the wider Windows Security stack provide a credible baseline.</p><p className="mt-5 text-lg leading-8 text-slate-200">Start with the need, not the product. When your larger weaknesses are passwords, backups, updates, or scam awareness, another antivirus subscription may not be your highest-value security improvement.</p></div></Container></Section>

      <Section><Container><div className="longform-reading"><h2 className="longform-section-title">Frequently asked questions</h2><div className="mt-8 space-y-5">{faq.map(([question, answer]) => <article key={question} className="rounded-2xl border bg-white p-7 shadow-sm"><h3 className="text-xl font-black leading-7">{question}</h3><p className="mt-4 longform-card-copy text-slate-700">{answer}</p></article>)}</div></div></Container></Section>

      <Section className="bg-slate-50"><Container><div className="max-w-5xl"><h2 className="longform-section-title">Evidence checked for this guide</h2><p className="mt-5 longform-reading longform-copy-muted">These primary documentation and independent-test links explain the factual basis and limits of this guide.</p><ul className="mt-8 grid gap-5 md:grid-cols-2">{sources.map(([label, href]) => <li key={href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">Source</p><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul><p className="mt-8 longform-reading longform-copy-muted">Lab results are bounded by their versions, samples, settings, dates, and methodologies. Choose Better Tech did not reproduce them.</p></div></Container></Section>
    </main>
    <Newsletter />
  </>;
}
