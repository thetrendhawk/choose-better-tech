import { AlertCircle, CheckCircle2, ExternalLink, Eye, LockKeyhole, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateButton } from "../components/affiliate/AffiliateButton";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const pagePath = "/guides/vpn-privacy-guide";
const pageTitle = "VPN Privacy Guide: What a VPN Hides—and What It Doesn’t";
const pageDescription = "Learn what VPNs hide, what providers can still see, how no-logs claims and audits work, and how to evaluate VPN privacy before choosing a service.";
const checkedDate = "July 11, 2026";

type ProviderExample = {
  name: string;
  ownership: string;
  jurisdiction: string;
  account: string;
  evidence: string;
  caveat: string;
};

const visibilityRows = [
  ["Local Wi-Fi operator", "Can often see your device, connection timing, and unencrypted traffic; HTTPS hides most modern web content.", "Usually sees a VPN connection, timing, and volume, not the final sites inside the tunnel.", "Captive portals, malware, DNS leaks, and device names can still reveal information."],
  ["ISP", "Can see your IP, connection timing, volume, and often destination domains or IPs, depending on DNS and HTTPS behavior.", "Usually sees that you connected to a VPN server and how much data moved.", "The ISP may still infer patterns from timing, volume, and VPN server IP."],
  ["VPN provider", "Usually sees nothing because it is not in the path.", "Can potentially see source IP, timing, volume, DNS, destination metadata, and abuse signals depending on architecture and logs.", "This is the trust-transfer problem; policy and technical evidence matter."],
  ["Website", "Sees your IP address, browser signals, account login, cookies, and behavior.", "Sees the VPN server IP, but still sees accounts, cookies, fingerprints, and behavior.", "A VPN does not stop normal website analytics or account tracking."],
  ["Browser", "Can store history, cookies, local storage, extensions, and telemetry.", "Same browser-level visibility unless you change browser settings and extensions.", "Private windows and VPNs solve different problems."],
  ["Operating system", "Can see network state, installed apps, device IDs, location services, and telemetry depending on settings.", "Still can see local device and network behavior.", "A VPN does not make the device itself private."],
  ["Employer or school", "May see activity on managed devices, work accounts, school accounts, DNS, proxies, or network logs.", "May still see activity on managed devices, installed agents, accounts, and required VPNs.", "Do not use a consumer VPN to bypass workplace or school rules."],
  ["Advertising network", "Can track through cookies, pixels, app SDKs, device IDs, and fingerprints.", "Still can track through the same methods; IP may be less useful.", "Tracker blocking and browser compartmentalization matter more here."],
  ["Government or law enforcement", "May use legal requests to ISPs, websites, platforms, payment processors, or device evidence.", "May use legal requests to VPNs, websites, platforms, payment processors, or device evidence.", "VPNs do not override legal process or create guaranteed anonymity."]
];

const logTypes = [
  ["Activity logs", "Browsing history, traffic contents, DNS queries, or destinations. These are the highest-risk logs for privacy claims."],
  ["Connection logs", "Source IP, assigned VPN IP, timestamps, session duration, bandwidth, or server used. These can sometimes identify users even without browsing history."],
  ["Diagnostic logs", "Crash reports, app events, device details, support bundles, and performance data. These may be optional or temporary, but readers should verify."],
  ["Account records", "Email, username, account number, authentication history, security logs, deletion records, and abuse flags."],
  ["Payment records", "Card, PayPal, crypto, gift card, processor metadata, invoices, refunds, and tax or location information."],
  ["Support records", "Tickets, attachments, troubleshooting logs, emails, chat transcripts, and retention periods."],
  ["Temporary operational data", "Load balancing, abuse prevention, rate limits, and anti-fraud data that may not be marketed as logs."],
  ["Aggregated or anonymized data", "Counts or metrics that may be low risk, but only if aggregation and anonymization are well explained."],
  ["Telemetry", "Product analytics, app events, SDKs, experiments, or marketing pixels that may live outside the VPN tunnel itself."]
];

const policyChecklist = [
  "What data is collected",
  "Why each category is collected",
  "Retention periods",
  "Processors and analytics providers",
  "Legal basis or business purpose",
  "Account deletion process",
  "Support-record handling",
  "Payment-processor handling",
  "International transfers",
  "Policy-change history",
  "Contact information"
];

const auditTypes = [
  "Financial audit",
  "Code audit",
  "Penetration test",
  "Infrastructure audit",
  "Privacy-policy assessment",
  "No-logs audit",
  "App security assessment",
  "Browser-extension audit",
  "Server-configuration review",
  "SOC 2 report",
  "ISO certification"
];

const useCases = [
  ["Home browsing", "Helps partially", "It can reduce ISP visibility and hide your home IP from sites, but accounts, cookies, fingerprints, and browser history remain."],
  ["Public Wi-Fi", "Helps substantially", "It can reduce local-network snooping when configured correctly, though HTTPS already protects much web content."],
  ["Travel", "Helps partially", "It can help on shared networks and with some location-sensitive services, but local law, app availability, and performance vary."],
  ["Streaming", "Helps partially", "It may change apparent location, but streaming access is volatile and never guaranteed."],
  ["Students", "Helps partially", "It can help on allowed personal-device networks, but not on managed devices, school accounts, or exam/proctoring systems."],
  ["Remote work", "Depends", "Use employer-approved security tools first. A consumer VPN should not bypass company policy or managed-device controls."],
  ["Torrenting", "Helps partially", "It can hide your home IP from peers, but copyright law, payment identity, provider logs, and endpoint security still matter."],
  ["Journalists and activists", "May help, but not enough", "A VPN can be one layer. High-risk users should get specialized security guidance."],
  ["High-risk users", "Needs expert guidance", "Consumer VPN advice is not enough for state-level, legal, physical, or organizational threats."]
];

const providerExamples: ProviderExample[] = [
  {
    name: "Mullvad",
    ownership: "Mullvad VPN AB, Sweden",
    jurisdiction: "Sweden, with official legal-request guidance",
    account: "Random account number; no email required; cash and cryptocurrency options documented",
    evidence: "Official no-logging policy, government-request page, server/app audit material, and a 2023 search-warrant incident where Mullvad said customer data was not compromised.",
    caveat: "Strong minimization evidence, but still not proof of future server behavior or anonymity."
  },
  {
    name: "IVPN",
    ownership: "IVPN Limited, Gibraltar",
    jurisdiction: "Gibraltar",
    account: "No email required; cash, Monero, and Bitcoin options documented",
    evidence: "Official site emphasizes no logs, open-source apps, no customer data on signup, and published audit history including Cure53 material.",
    caveat: "Audit freshness and exact scope should be rechecked before high-risk use."
  },
  {
    name: "Proton VPN",
    ownership: "Proton ecosystem, Switzerland",
    jurisdiction: "Switzerland",
    account: "Proton account required; privacy policy discloses account-level IP logging nuance for abuse, fraud, optional security logs, and Terms breaches",
    evidence: "VPN-specific transparency report, open-source apps, and Securitum no-logs audit evidence.",
    caveat: "Do not confuse VPN activity logging with account, abuse, or optional authentication logging."
  },
  {
    name: "NordVPN",
    ownership: "Nord Security group",
    jurisdiction: "Panama positioning in official materials",
    account: "Email and payment records typically apply",
    evidence: "Repeated no-logs assurance engagements, including a sixth engagement reported for late 2025 / early 2026.",
    caveat: "Full reports may be customer-only or access-limited; assurance is scoped and time-bound."
  },
  {
    name: "Surfshark",
    ownership: "Surfshark / Nord Security group",
    jurisdiction: "Netherlands positioning in official materials",
    account: "Email and payment records typically apply; diagnostics/support data should be reviewed separately",
    evidence: "Trust Center cites Deloitte no-logs audits in 2023 and 2025 and a SecuRing infrastructure security audit completed in December 2025.",
    caveat: "No-logs claims should be separated from diagnostics, website analytics, and support workflows."
  },
  {
    name: "ExpressVPN",
    ownership: "ExpressVPN, ultimately owned by Kape Technologies",
    jurisdiction: "British Virgin Islands positioning in official materials",
    account: "Email and payment records typically apply",
    evidence: "Privacy policy says no activity logs, DNS logs, source IP logs, assigned VPN IP logs, timestamps, or session duration; Trust Center documents KPMG and other audits.",
    caveat: "Some audit access requires terms acceptance or account access; ownership is context, not automatic proof of bad behavior."
  },
  {
    name: "Private Internet Access",
    ownership: "PIA, ultimately owned by Kape Technologies",
    jurisdiction: "United States",
    account: "Email, payment, support, and account records may exist",
    evidence: "Privacy/no-logs pages, Deloitte audit material, transparency reports, and historical court-tested subpoena claims.",
    caveat: "US jurisdiction and Kape ownership are relevant context; historical legal tests are not future guarantees."
  }
];

const redFlags = [
  "Unidentified owner",
  "Vague privacy policy",
  "Impossible anonymity claims",
  "Unclear business model",
  "Ad-tech SDKs",
  "Unnecessary permissions",
  "No deletion process",
  "Audit claims without scope",
  "Outdated policies",
  "Fake urgency",
  "Misleading military-grade claims",
  "Undocumented ownership changes",
  "App-store clones",
  "Unofficial APKs"
];

const purchaseChecklist = [
  "Define your threat model",
  "Identify the owner",
  "Read the privacy policy",
  "Check logging definitions",
  "Inspect retention periods",
  "Verify audit scope and date",
  "Check app telemetry",
  "Check account requirements",
  "Check the deletion process",
  "Confirm DNS and IPv6 handling",
  "Check open-source claims",
  "Review transparency reports",
  "Understand payment records",
  "Review renewal and cancellation",
  "Avoid impossible claims"
];

const complementaryTools = [
  "Password manager",
  "Multi-factor authentication",
  "Software updates",
  "Encrypted messaging",
  "Tracker blocking",
  "Browser compartmentalization",
  "Encrypted DNS",
  "Tor for appropriate use cases",
  "Device security",
  "Legal and organizational support for high-risk users"
];

const faqItems = [
  ["Does a VPN make me anonymous?", "No. A VPN can hide your IP address from websites and reduce visibility for your ISP or local network, but it does not stop account logins, cookies, fingerprints, payment records, device tracking, or provider trust risks."],
  ["Can a VPN provider see my browsing?", "Potentially, depending on architecture and logging. A trustworthy provider should make clear, limited claims about activity logs, connection logs, DNS handling, diagnostics, account records, and retention."],
  ["Can my ISP see what I do when I use a VPN?", "Your ISP can usually see that you connected to a VPN server, when the connection happened, and how much data moved. It should not see the specific sites inside the encrypted tunnel when the VPN is working correctly."],
  ["Can websites still track me with a VPN?", "Yes. Websites can still track logins, cookies, browser fingerprints, device signals, analytics events, and behavior. A VPN mainly changes the IP address they see."],
  ["What does a no-logs VPN mean?", "It means little until the provider defines the logs it does and does not keep. Activity logs, connection logs, diagnostics, account records, payment records, support tickets, and temporary operational data are different categories."],
  ["Are VPN audits trustworthy?", "Audits are useful evidence when the scope, date, systems, auditor, exclusions, and report access are clear. They do not prove future behavior or claims outside the audit scope."],
  ["Does VPN jurisdiction matter?", "Yes, but not by itself. Incorporation, operations, infrastructure, staff, ownership, data processing, legal orders, and mutual legal-assistance processes all matter."],
  ["What are the Five Eyes?", "Five Eyes refers to an intelligence-sharing alliance among the US, UK, Canada, Australia, and New Zealand. VPN marketing often oversimplifies it; jurisdiction labels alone cannot prove whether a provider is trustworthy."],
  ["Are open-source VPNs more private?", "Open-source apps are easier to inspect, which is helpful. They do not prove server behavior, production logging, payment handling, support handling, or update integrity."],
  ["Can I pay for a VPN anonymously?", "Sometimes you can reduce account linkage with cash, gift cards, cryptocurrency, or email-free accounts. Refunds, support tickets, repeated behavior, blockchain analysis, and login patterns can still link activity."],
  ["Does cryptocurrency make a VPN account anonymous?", "Not automatically. Many cryptocurrency transactions are traceable, exchanges often know your identity, and support or usage patterns can still link an account to you."],
  ["What is a VPN transparency report?", "A transparency report summarizes legal requests, data requests, or similar events. It helps show request-handling patterns, but it does not prove that a provider keeps no logs."],
  ["What is a warrant canary?", "A warrant canary is a statement intended to signal whether a provider has received certain legal orders. Canaries have legal and practical limits and should not be treated as proof of safety."],
  ["What is a DNS leak?", "A DNS leak happens when domain lookups leave the VPN tunnel or go to an unexpected resolver. That can expose destinations even if other traffic uses the VPN."],
  ["What is an IPv6 leak?", "An IPv6 leak happens when IPv6 traffic bypasses a VPN that only handles IPv4 or is misconfigured. Providers should document IPv6 support or blocking behavior."],
  ["Does a kill switch protect privacy?", "A kill switch can reduce exposure if the VPN drops, but behavior varies by platform, app, sleep state, captive portal, split tunneling, and update. Test it on your own devices."],
  ["Are RAM-only VPN servers safer?", "RAM-only or diskless servers can reduce persistent data risk, but the claim needs verification. It does not prove no logging, safe staff practices, or secure management systems."],
  ["Is multihop more private?", "Multihop can make traffic correlation harder for one server or data center, but it can add latency and does not solve account tracking, malware, cookies, or device compromise."],
  ["Is Tor better than a VPN for privacy?", "Tor is designed for stronger anonymity tradeoffs and can be better for some threat models. It is slower, easier to misuse, and not a substitute for safe accounts, devices, and behavior."],
  ["Can a VPN hide activity from my employer or school?", "Not reliably. Managed devices, work accounts, school accounts, monitoring agents, DNS/proxy controls, and policy systems may still expose activity. Follow organizational rules."],
  ["Can law enforcement get data from a VPN?", "Law enforcement can request data from VPN providers and many other parties. What a VPN can provide depends on what it collects, retains, and is legally required or able to disclose."],
  ["Are free VPNs private?", "Some reputable free tiers have credible privacy models, and some free apps are risky. Evaluate ownership, business model, policies, audits, permissions, telemetry, and limits before installing one."],
  ["Which VPN is best for privacy?", "There is no universal winner. The best privacy fit depends on your threat model, trust requirements, audit expectations, account needs, payment trail, platform, and tolerance for tradeoffs."],
  ["What should I check before trusting a VPN?", "Check the owner, privacy policy, logging definitions, retention periods, audit scope and date, app telemetry, account requirements, deletion process, DNS and IPv6 handling, transparency reports, payment records, and cancellation terms."]
];

const evidenceLinks = [
  ["EFF - Choosing the VPN That's Right for You", "https://ssd.eff.org/module/choosing-vpn-thats-right-you"],
  ["FTC - Are Public Wi-Fi Networks Safe?", "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know"],
  ["NIST Privacy Framework", "https://www.nist.gov/privacy-framework"],
  ["Mullvad - No-logging policy", "https://mullvad.net/en/help/no-logging-data-policy"],
  ["Mullvad - Government requests", "https://mullvad.net/en/help/how-we-handle-government-requests-user-data"],
  ["Mullvad - Search warrant post", "https://mullvad.net/en/blog/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised"],
  ["IVPN - Privacy service overview", "https://www.ivpn.net/en/"],
  ["IVPN - No-logging audit", "https://www.ivpn.net/blog/ivpn-no-logging-claim-verified-by-independent-audit/"],
  ["Proton - Privacy policy", "https://proton.me/legal/privacy"],
  ["Proton - Transparency report", "https://proton.me/legal/transparency"],
  ["Proton - Open source", "https://proton.me/community/open-source"],
  ["Proton VPN - Securitum no-logs audit", "https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf"],
  ["NordVPN - No-logs assurance engagement", "https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/"],
  ["Surfshark - Trust Center", "https://surfshark.com/trust-center"],
  ["Surfshark - Diagnostics guidance", "https://support.surfshark.com/hc/en-us/articles/13412100532242-How-to-collect-diagnostics-from-any-device"],
  ["ExpressVPN - Privacy policy", "https://www.expressvpn.com/privacy-policy"],
  ["ExpressVPN - Trust Center", "https://www.expressvpn.com/trust"],
  ["PIA - Privacy policy", "https://www.privateinternetaccess.com/privacy-policy"],
  ["PIA - Transparency report", "https://www.privateinternetaccess.com/transparency-report"],
  ["PIA - No-logs audit", "https://www.privateinternetaccess.com/blog/privacy-audit/"]
];

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold text-slate-950">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}

function BulletList({ items, negative = false }: { items: string[]; negative?: boolean }) {
  return <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">{items.map((item) => <li key={item} className="flex gap-2">{negative ? <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-rose-600" aria-hidden="true" /> : <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />}<span>{item}</span></li>)}</ul>;
}

function Card({ title, body, icon: Icon = ShieldCheck }: { title: string; body: string; icon?: typeof ShieldCheck }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <Icon className="text-brand-700" size={22} aria-hidden="true" />
      <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{body}</p>
    </article>
  );
}

export function VpnPrivacyGuidePage() {
  const canonicalUrl = site.url + pagePath;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: pageDescription,
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: canonicalUrl
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "VPN Privacy Guide", item: canonicalUrl }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} path={pagePath} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[linear-gradient(135deg,#f8fbff_0%,#f6fff9_60%,#fff7ed_100%)] py-16 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">VPN privacy guide</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{pageTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">A VPN can hide some network activity from your local Wi-Fi operator or ISP, but it does not make you anonymous. It shifts trust to the VPN provider, whose policies, architecture, audits, ownership, jurisdiction, and support systems deserve scrutiny.</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">This guide is independent editorial analysis. Provider examples are used to explain evidence, not to create a ranking or reward affiliate availability.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/guides/how-vpns-work">How VPNs Work</Link>
              <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/are-vpns-worth-it">Are VPNs Worth It?</Link>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white/90 p-6 shadow-lift backdrop-blur">
            <ShieldCheck className="text-brand-700" size={26} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">Quick verdict</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">A VPN is a trust decision, not an anonymity switch. Verify what the provider logs, how claims are audited, who owns it, where it operates, how payments and support work, and what your threat model actually needs.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-700">Facts checked {checkedDate}</p>
          </aside>
        </Container>
      </section>

      <Section id="quick-answer">
        <SectionHeading eyebrow="Quick answer" title="What a VPN Hides, What It Does Not, and What to Verify" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card title="A VPN can hide" body="Your home IP address from ordinary websites, some destination visibility from your ISP, and some traffic visibility from local Wi-Fi operators when configured correctly." icon={Eye} />
          <Card title="A VPN cannot hide" body="Logged-in accounts, cookies, browser or device fingerprints, GPS, malware, phishing, payment identity, social identity, or monitoring on managed school or employer devices." icon={AlertCircle} />
          <Card title="Before trusting one" body="Check logging definitions, retention, audit scope, ownership, jurisdiction, open-source claims, transparency reports, DNS/IPv6 behavior, support records, and payment trails." icon={SearchCheck} />
        </div>
      </Section>

      <Section className="bg-slate-50" id="what-vpn-hides">
        <SectionHeading eyebrow="Network visibility" title="What Does a VPN Actually Hide?" description="A VPN changes who can see parts of your network activity. It does not erase the activity itself." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card title="Local network visibility" body="A VPN can reduce what a cafe, airport, dorm, hotel, or hotspot operator can see about the sites and services you use." />
          <Card title="ISP visibility" body="Your ISP usually sees a VPN connection, timing, volume, and the VPN server IP instead of the final destination inside the tunnel." />
          <Card title="Public IP address" body="Websites usually see the VPN server IP instead of your home or mobile IP, unless an app or browser leak reveals more." />
          <Card title="DNS requests" body="DNS can be hidden from the ISP if the VPN handles DNS correctly, but DNS leaks or custom resolvers can change that." />
          <Card title="Traffic contents under HTTPS" body="HTTPS already encrypts most modern web content. A VPN adds another tunnel between your device and the VPN server." />
          <Card title="Destination metadata" body="A VPN can reduce destination visibility for the ISP, but the VPN provider may still have metadata depending on architecture and logs." />
        </div>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">App and account identity are separate. If you sign into Google, Netflix, Slack, a bank, a school portal, or a social account, that service can still associate your activity with that account.</p>
      </Section>

      <Section id="what-vpn-does-not-hide">
        <SectionHeading eyebrow="Limits" title="What a VPN Does Not Hide" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList negative items={["Logged-in accounts and account recovery trails", "Cookies, browser fingerprinting, and device fingerprinting", "GPS, Wi-Fi location, Bluetooth beacons, and app permissions", "Malware, phishing, unsafe downloads, and account compromise", "Employer-managed or school-managed device monitoring", "Website analytics, advertising networks, payment identity, and social identity"]} />
        </div>
      </Section>

      <Section className="bg-slate-50" id="who-can-see">
        <SectionHeading eyebrow="Visibility table" title="Who Can See Your Activity With and Without a VPN?" description="The honest answer is conditional. The table separates likely visibility from important caveats." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[62rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white"><tr>{["Actor", "Without VPN", "With VPN", "Important caveat"].map((head) => <th key={head} className="px-4 py-4 font-semibold" scope="col">{head}</th>)}</tr></thead>
            <tbody>{visibilityRows.map(([actor, withoutVpn, withVpn, caveat]) => <tr key={actor} className="border-b border-slate-200 last:border-0"><th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950" scope="row">{actor}</th><td className="px-4 py-4 text-slate-700">{withoutVpn}</td><td className="px-4 py-4 text-slate-700">{withVpn}</td><td className="px-4 py-4 text-slate-700">{caveat}</td></tr>)}</tbody>
          </table>
        </div>
      </Section>

      <Section id="trust-transfer">
        <SectionHeading eyebrow="Trust transfer" title="The VPN Provider Becomes the New Trust Point" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <LockKeyhole className="text-brand-700" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-slate-950">Network privacy and account privacy are different</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">A VPN may keep your ISP from seeing destinations, but it does not keep your logged-in accounts from knowing what you do. Provider selection matters because the VPN is now in the traffic path.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <AlertCircle className="text-rose-600" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-slate-950">Do not accept no logs at face value</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Ask exactly which logs, on which systems, for what purpose, for how long, with which processors, and under what legal or abuse exceptions.</p>
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50" id="no-logs">
        <SectionHeading eyebrow="Logging claims" title="What Does No Logs Actually Mean?" description="No logs is not a standardized phrase. The categories below should be checked separately." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {logTypes.map(([title, body]) => <Card key={title} title={title} body={body} />)}
        </div>
      </Section>

      <Section id="privacy-policy">
        <SectionHeading eyebrow="Policy reading" title="How to Read a VPN Privacy Policy" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={policyChecklist} />
        </div>
      </Section>

      <Section className="bg-slate-50" id="audits">
        <SectionHeading eyebrow="Audit evidence" title="Do VPN Audits Prove Privacy?" description="Audits can improve confidence, but only within their scope and time period." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-base leading-7 text-slate-700">A VPN audit may examine code, apps, browser extensions, infrastructure, server configuration, privacy-policy controls, or no-logs claims. Before relying on one, identify the auditor, date, systems examined, exclusions, whether the full report is public, whether remediation was verified, and whether it supports the exact claim being made.</p>
            <p className="mt-4 text-base leading-7 text-slate-700">An audit does not prove future behavior. It is a point-in-time or period-specific signal that should be combined with policy language, ownership, transparency, legal evidence, and technical architecture.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Audit labels to separate</h3>
            <BulletList items={auditTypes} />
          </div>
        </div>
      </Section>

      <Section id="jurisdiction-ownership">
        <SectionHeading eyebrow="Governance" title="Jurisdiction, Ownership, and Parent Companies" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card icon={ShieldCheck} title="Jurisdiction is not a safe-country chart" body="Check incorporation, operations, staff, infrastructure, data processing, legal orders, mutual legal assistance, and whether marketing reduces everything to Five Eyes labels." />
          <Card icon={SearchCheck} title="Ownership changes can change incentives" body="Review the current parent company, acquisitions, sister companies, ad-tech or data-broker relationships, leadership, shared infrastructure, shared analytics, and privacy-policy changes after acquisition." />
        </div>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">Avoid guilt by association. Ownership is evidence to investigate, not proof by itself. The right question is whether governance, incentives, transparency, and technical controls support the provider's privacy claims.</p>
      </Section>

      <Section className="bg-slate-50" id="open-source-transparency">
        <SectionHeading eyebrow="Transparency signals" title="Open-Source Apps, Transparency Reports, and Warrant Canaries" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card title="Open-source apps" body="Open source improves inspectability and can support audits or reproducible-build claims. It does not prove server behavior, production logging, update trust, or payment handling." />
          <Card title="Transparency reports" body="Reports can show legal-request patterns and whether a provider says it produced data. They do not prove that no logs exist or reveal all forms of legal pressure." />
          <Card title="Warrant canaries" body="Canaries attempt to signal certain legal events indirectly. Their legal and practical value is limited, so treat them as a weak signal rather than proof." />
        </div>
      </Section>

      <Section id="anonymous-payments">
        <SectionHeading eyebrow="Account linkage" title="Anonymous Accounts and Payments" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-7 text-slate-700">Email-free accounts, random account numbers, cash, cryptocurrency, and gift cards can reduce account linkage. They do not make a VPN account automatically anonymous. Payment processors, blockchain analysis, refund requests, support tickets, login patterns, device behavior, and repeated use can still create links.</p>
          <p className="mt-4 text-base leading-7 text-slate-700">The strongest privacy language is realistic: it explains which data is minimized, which data still exists, and which limitations remain.</p>
        </div>
      </Section>

      <Section className="bg-slate-50" id="leaks">
        <SectionHeading eyebrow="Leaks" title="DNS, IPv6, WebRTC, and Kill Switches" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Card title="DNS leaks" body="DNS lookups can expose destinations if they leave the VPN tunnel or use an unexpected resolver." />
          <Card title="IPv6 leaks" body="IPv6 traffic can bypass a VPN if the provider or platform does not support or block it correctly." />
          <Card title="WebRTC leaks" body="Browsers can reveal local or public IP-related information through WebRTC depending on configuration." />
          <Card title="Kill switch" body="A kill switch can reduce exposure when a VPN drops, but behavior varies across platforms, sleep states, and captive portals." />
          <Card title="Split tunneling and app exclusions" body="Excluded apps may bypass the VPN by design. That is useful only when you understand what is excluded." />
          <Card title="Testing limits" body="A leak test is a snapshot. Updates, networks, mobile handoffs, and settings can change behavior later." />
        </div>
      </Section>

      <Section id="servers">
        <SectionHeading eyebrow="Architecture" title="RAM-Only Servers and Server Ownership" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card title="RAM-only or diskless claims" body="RAM-only architecture can reduce persistent data risk, but it needs verification. It does not prove no logging across every management or support system." />
          <Card title="Owned, leased, colocated, and virtual servers" body="Server ownership affects physical control and vendor exposure. Virtual-location disclosure and data-center security also matter." />
        </div>
      </Section>

      <Section className="bg-slate-50" id="multihop-obfuscation-tor">
        <SectionHeading eyebrow="Advanced features" title="Multihop, Obfuscation, and Tor" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card title="Multihop" body="Routes traffic through more than one VPN server. It can reduce trust in a single server, but does not stop account tracking or endpoint compromise." />
          <Card title="Obfuscation" body="Makes VPN traffic look less like obvious VPN traffic on some networks. It is not a guarantee of access and should not be treated as permission to bypass rules." />
          <Card title="Tor" body="Tor is designed for stronger anonymity tradeoffs than consumer VPNs, but it is slower, easier to misuse, and still depends on safe behavior." />
        </div>
      </Section>

      <Section id="use-cases">
        <SectionHeading eyebrow="Threat models" title="VPN Privacy by Use Case" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map(([title, verdict, body]) => <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{verdict}</p><h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{body}</p></article>)}
        </div>
      </Section>

      <Section className="bg-slate-50" id="provider-examples">
        <SectionHeading eyebrow="Provider examples" title="How Selected VPN Providers Approach Privacy" description="This is not a ranking, scorecard, or endorsement. The goal is to show how evidence differs by provider." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[78rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white"><tr>{["Provider", "Ownership", "Jurisdiction", "Account/payment model", "Evidence checked", "Important caveat"].map((head) => <th key={head} className="px-4 py-4 font-semibold" scope="col">{head}</th>)}</tr></thead>
            <tbody>{providerExamples.map((provider) => <tr key={provider.name} className="border-b border-slate-200 last:border-0"><th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950" scope="row">{provider.name}</th><td className="px-4 py-4 text-slate-700">{provider.ownership}</td><td className="px-4 py-4 text-slate-700">{provider.jurisdiction}</td><td className="px-4 py-4 text-slate-700">{provider.account}</td><td className="px-4 py-4 text-slate-700">{provider.evidence}</td><td className="px-4 py-4 text-slate-700">{provider.caveat}</td></tr>)}</tbody>
          </table>
        </div>
      </Section>

      <Section id="red-flags">
        <SectionHeading eyebrow="Red flags" title="VPN Privacy Red Flags" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList negative items={redFlags} />
        </div>
      </Section>

      <Section className="bg-slate-50" id="checklist">
        <SectionHeading eyebrow="Checklist" title="VPN Privacy Checklist" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <BulletList items={purchaseChecklist} />
        </div>
      </Section>

      <Section id="not-enough">
        <SectionHeading eyebrow="Layered privacy" title="When a VPN Is Not Enough" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{complementaryTools.map((tool) => <div key={tool} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800 shadow-soft">{tool}</div>)}</div>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">For high-risk situations, seek specialized security, legal, or organizational guidance. A consumer VPN guide cannot cover the full risk profile of targeted surveillance, unsafe devices, physical threats, or legal exposure.</p>
      </Section>

      <Section className="bg-slate-50" id="faq">
        <SectionHeading eyebrow="FAQ" title="VPN Privacy Questions" />
        <div className="mt-8 grid gap-4">
          {faqItems.map(([question, answer]) => <article key={question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{question}</h3><p className="mt-3 text-base leading-7 text-slate-700">{answer}</p></article>)}
        </div>
      </Section>

      <Section id="sources">
        <SectionHeading eyebrow="Evidence checked" title="Sources Used for This Guide" description="Provider policies, audits, and transparency pages change. Recheck before making a high-stakes privacy decision." />
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {evidenceLinks.map(([title, href]) => <a key={href} className="flex items-start gap-2 rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-brand-700 hover:bg-brand-50" href={href} rel="noreferrer noopener" target="_blank"><span>{title}</span><ExternalLink className="mt-0.5 shrink-0" size={15} aria-hidden="true" /></a>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <ShieldCheck className="text-brand-700" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold text-slate-950">Final Takeaway</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">A VPN is a trust decision. It can reduce some network-level visibility, but it does not guarantee anonymity and there is no universal privacy winner. Define your threat model, verify the provider's current claims, read the policy details, check audit scope, and understand account and payment trails before subscribing.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/guides/vpn-buying-guide">VPN Buying Guide</Link>
            <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/are-vpns-worth-it">Are VPNs Worth It?</Link>
            <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/guides/how-vpns-work">How VPNs Work</Link>
            <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/guides/vpn-myths">VPN Myths</Link>
            <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/best-free-vpns">Best Free VPNs</Link>
            <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/vpn">Better Software Buyer Checklist</Link>
          </div>
          <div className="mt-6"><AffiliateButton provider="vpn-comparison">Use the VPN Buying Guide</AffiliateButton></div>
        </div>
      </Section>

      <AffiliateDisclosure />
      <Newsletter />
    </>
  );
}
