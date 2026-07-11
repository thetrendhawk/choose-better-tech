import { AlertCircle, CheckCircle2, ExternalLink, ListChecks, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const pagePath = "/best-free-vpns";
const pageTitle = "Best Free VPNs in 2026";
const pageDescription = "Compare the best free VPNs by data limits, server locations, device support, privacy, streaming, speed, and upgrade restrictions.";
const checkedDate = "July 11, 2026";

type FreeVpn = {
  name: string;
  label: string;
  bestFor: string;
  data: string;
  locations: string;
  devices: string;
  streaming: string;
  restriction: string;
  verdict: string;
  why: string[];
  limits: string[];
  choose: string;
  skip: string;
  paymentAdds: string[];
  links: Array<{ label: string; href: string }>;
};

const recommendations = [
  { label: "Best overall free VPN", product: "Proton VPN Free", limitation: "Unlimited data, but free users have limited server choice and one VPN connection." },
  { label: "Best for location flexibility", product: "Windscribe Free", limitation: "More control and unlimited connections, but the free allowance is limited." },
  { label: "Best for occasional streaming", product: "PrivadoVPN Free", limitation: "A practical limited plan, but streaming is not something any free VPN can guarantee." },
  { label: "Best for beginners", product: "TunnelBear Free", limitation: "Very approachable, but 2GB per month is light-use territory." },
  { label: "Best alternative", product: "hide.me Free", limitation: "Strong no-signup pitch and unlimited data claims, but one device and limited locations remain real limits." }
];

const vpns: FreeVpn[] = [
  {
    name: "Proton VPN Free",
    label: "Best overall free VPN for most privacy-conscious beginners",
    bestFor: "Unlimited-data users, privacy-focused beginners, students, public Wi-Fi users, and people testing whether a VPN fits their workflow",
    data: "No data limit in current official documentation",
    locations: "Free servers are limited compared with paid plans; current Proton docs describe free access in selected countries and random server assignment",
    devices: "One VPN connection on the free plan",
    streaming: "Paid plans are the better fit for streaming; do not treat Free as a streaming plan",
    restriction: "Limited server control, one connection, and missing paid features such as Secure Core, NetShield, P2P positioning, and broader streaming support",
    verdict: "Proton VPN Free is the strongest overall free recommendation because unlimited data removes the biggest practical limit for light daily use.",
    why: [
      "Official Proton pages describe Free as a permanent free plan with no data limits, no ads, and no activity logs.",
      "The free tier is funded by paying users rather than ads according to Proton's own explanation.",
      "The existing CBT Proton VPN review supports Proton as the strongest free-plan and privacy-transparency fit in the VPN cluster.",
      "Open-source apps, audit history, and clear free-versus-paid documentation give readers more to evaluate than a generic free app."
    ],
    limits: [
      "Free does not mean unlimited features.",
      "Free server choice is constrained and current support documentation says free server changes are randomly assigned with cooldown behavior.",
      "One connection is a poor fit for households or several simultaneous devices.",
      "Streaming and P2P needs usually point to paid VPNs or alternatives."
    ],
    choose: "Choose Proton VPN Free if you want a legitimate no-cost VPN for browsing, public Wi-Fi, basic privacy, students, or travel backup use without a data cap.",
    skip: "Skip it if you need several devices at once, manual location control, regular streaming, P2P, or advanced paid privacy features.",
    paymentAdds: ["More server locations and manual control", "More simultaneous connections", "Streaming-positioned servers", "P2P support", "Secure Core and NetShield features"],
    links: [
      { label: "Proton VPN Review", href: "/reviews/proton-vpn-review" },
      { label: "Is Proton VPN Free Good Enough?", href: "/guides/is-proton-vpn-free-good-enough" },
      { label: "Proton VPN vs Surfshark", href: "/comparisons/proton-vpn-vs-surfshark" }
    ]
  },
  {
    name: "Windscribe Free",
    label: "Best free VPN for location flexibility and feature control",
    bestFor: "Users who want more manual location flexibility, unlimited personal-device connections, and a fuller privacy-tool feel",
    data: "10GB per month with confirmed email in current official documentation",
    locations: "Official docs describe free locations in 10 countries",
    devices: "Windscribe says it does not limit connections, including on the free plan",
    streaming: "Possible for light use, but the data cap and changing streaming blocks make it unreliable as a streaming recommendation",
    restriction: "The monthly data allowance is the central limit",
    verdict: "Windscribe Free is the best fit when location flexibility and connection flexibility matter more than unlimited data.",
    why: [
      "Official Windscribe pages describe an actually free plan with 10GB free data after email confirmation.",
      "Windscribe says it does not limit connections for free users.",
      "Free users get locations in 10 countries according to current official pages.",
      "Windscribe documents privacy and feature controls more clearly than many generic free VPN apps."
    ],
    limits: [
      "10GB can disappear quickly with video, downloads, or heavy mobile use.",
      "The free country list is much smaller than paid access.",
      "Streaming should be treated as a maybe, not a promise.",
      "Readers still need to evaluate Windscribe's privacy policy and ownership for their own risk tolerance."
    ],
    choose: "Choose Windscribe Free if you want more location choice and connection flexibility than Proton Free, and you can live within a monthly allowance.",
    skip: "Skip it if you want a free VPN that you can leave on all month without thinking about data.",
    paymentAdds: ["Unlimited data", "All server locations", "More streaming flexibility", "More R.O.B.E.R.T. rule capacity", "Paid location and configuration options"],
    links: [
      { label: "Free VPN vs Paid VPN", href: "/guides/free-vpn-vs-paid" },
      { label: "VPN Buying Guide", href: "/guides/vpn-buying-guide" },
      { label: "How VPNs Work", href: "/guides/how-vpns-work" }
    ]
  },
  {
    name: "PrivadoVPN Free",
    label: "Best free VPN for straightforward limited use and occasional streaming attempts",
    bestFor: "Users who want a conventional limited free plan with selectable locations and a clear monthly allowance",
    data: "10GB every 30 days; support docs say speed is limited after the quota is used",
    locations: "Official support documentation lists servers in 12 cities; the marketing page currently references 13 locations",
    devices: "One connection at a time on the free plan in current support documentation",
    streaming: "Privado markets streaming and downloads, but free streaming should be treated as uncertain and quota-limited",
    restriction: "10GB quota, one connection, and support-doc/marketing-page location-count differences",
    verdict: "PrivadoVPN Free is useful for occasional focused sessions, but the current source conflict around location counts is worth preserving.",
    why: [
      "Official support documentation describes a freemium plan with 10GB every 30 days and one connection at a time.",
      "The same support page describes OpenVPN, WireGuard, and IKEv2 support for the free tier.",
      "Privado's marketing emphasizes no-log positioning and Switzerland-based privacy claims.",
      "It may be attractive for occasional streaming attempts, but it should not be sold as guaranteed streaming access."
    ],
    limits: [
      "Official support says free users are limited to one connection at a time.",
      "Unused traffic does not accrue according to support documentation.",
      "After the monthly quota is used, support docs say speed is limited until renewal.",
      "Official pages conflict between 12 cities and 13 locations, so exact free-location count should be rechecked before promotion."
    ],
    choose: "Choose PrivadoVPN Free if you want a simple, quota-limited plan for occasional sessions and do not need several devices at once.",
    skip: "Skip it if exact location count, several simultaneous devices, or reliable streaming matters.",
    paymentAdds: ["Unlimited data and speed", "More locations", "More simultaneous connections", "Streaming support", "SOCKS5 proxy and broader extras"],
    links: [
      { label: "VPN Decision Hub", href: "/vpn" },
      { label: "Free VPN vs Paid VPN", href: "/guides/free-vpn-vs-paid" },
      { label: "Best VPNs for Beginners", href: "/guides/best-vpns-for-beginners" }
    ]
  },
  {
    name: "TunnelBear Free",
    label: "Best free VPN for absolute beginners and light testing",
    bestFor: "First-time VPN users who want a friendly app and only need very light monthly usage",
    data: "2GB per month in current official help documentation",
    locations: "TunnelBear support describes access to its country list, but the free data limit is the real constraint",
    devices: "Free account details focus on monthly data; paid plans add unlimited devices and broader paid features",
    streaming: "Not a strong streaming choice because 2GB is too small for regular video",
    restriction: "Very small monthly data allowance",
    verdict: "TunnelBear Free is easy to try, but 2GB per month makes it a beginner test plan more than a daily free VPN.",
    why: [
      "Official support says free users receive 2GB of VPN bandwidth per month.",
      "TunnelBear says free and paid plans have the same performance levels.",
      "TunnelBear has a long-standing transparency/audit story and a simple beginner-friendly product style.",
      "The free plan remains useful for trying a VPN or occasional emergency use."
    ],
    limits: [
      "2GB per month is not enough for regular streaming, heavy browsing, or always-on use.",
      "Free accounts are best treated as a trial-like ongoing plan for light use.",
      "Paid plans add unlimited data and broader paid features.",
      "TunnelBear is part of the McAfee family and operates from Canada, which privacy-focused readers may want to consider."
    ],
    choose: "Choose TunnelBear Free if you are new to VPNs and want a low-friction way to learn how one feels.",
    skip: "Skip it if you want meaningful monthly use, streaming, or frequent travel coverage.",
    paymentAdds: ["Unlimited data", "Unlimited devices", "Country selection", "Split tunneling", "Premium servers and priority support"],
    links: [
      { label: "VPN Myths", href: "/guides/vpn-myths" },
      { label: "Are VPNs Worth It?", href: "/are-vpns-worth-it" },
      { label: "Free VPN vs Paid VPN", href: "/guides/free-vpn-vs-paid" }
    ]
  },
  {
    name: "hide.me Free",
    label: "Best alternative free tier for no-signup use and unlimited-data claims",
    bestFor: "Users who want a reputable limited free tier that does not require registration",
    data: "Current hide.me free page says it does not cap free VPN data",
    locations: "Choice of 8 server locations on the free service",
    devices: "One device at a time on the free service",
    streaming: "hide.me states streaming-optimized servers are only for Premium users",
    restriction: "One device and 8 locations; streaming-optimized servers require Premium",
    verdict: "hide.me Free is a credible alternative, especially for no-signup users, but it is less flexible than Proton or Windscribe for many beginners.",
    why: [
      "Official hide.me materials describe a lifetime free VPN, not a short trial.",
      "The free page says no registration, no ads or trackers, and no logs.",
      "hide.me says free users can choose from 8 server locations and connect one device at a time.",
      "The service states that streaming-optimized servers are reserved for Premium users."
    ],
    limits: [
      "Only one device can connect at a time.",
      "Free users get fewer locations than paid users.",
      "Streaming-optimized servers are not a free-plan feature.",
      "Some claims are vendor claims and should not be treated as independently proven without audit review."
    ],
    choose: "Choose hide.me Free if no-signup use and a reputable limited tier matter more than location variety or streaming.",
    skip: "Skip it if you need several devices, streaming-optimized servers, or the strongest free-plan documentation depth.",
    paymentAdds: ["More locations", "Up to 10 simultaneous devices", "Streaming-optimized servers", "Premium speed positioning", "Advanced features such as Multihop depending on plan"],
    links: [
      { label: "VPN Buying Guide", href: "/guides/vpn-buying-guide" },
      { label: "How VPNs Work", href: "/guides/how-vpns-work" },
      { label: "VPN Decision Hub", href: "/vpn" }
    ]
  }
];

const notRecommended = [
  { title: "Temporary trials", reason: "A free trial can be useful, but it is not a permanent free VPN recommendation because the no-cost access expires." },
  { title: "Money-back guarantees", reason: "Refund windows require payment first and cancellation discipline, so they should not be described as free VPN plans." },
  { title: "Opaque free apps", reason: "Free VPNs with unclear ownership, unclear logging, weak support docs, or suspicious permissions should be avoided until verified." },
  { title: "Ad-heavy services", reason: "A free VPN funded by advertising or aggressive tracking can undermine the privacy reason people install a VPN." },
  { title: "Misleading unlimited claims", reason: "Unlimited data can still come with server, speed, location, device, streaming, or support limits." }
];

const guidanceSections = [
  {
    title: "Are free VPNs safe?",
    body: "Some reputable free tiers are funded by paid plans and can be reasonable for light use. Some free apps create real privacy and security risks. App-store presence alone is not proof of safety, so verify ownership, business model, permissions, privacy policy, and documentation before installing."
  },
  {
    title: "Unlimited data versus limited data",
    body: "Unlimited usage does not mean unlimited features. Proton and hide.me remove the data-cap problem, but they still limit locations, connections, or streaming features. A 10GB allowance can be enough for browsing, travel backup, or occasional use, but video and background apps can burn through it quickly."
  },
  {
    title: "Free VPNs for streaming",
    body: "Free VPN streaming is fragile. Limited locations, crowded free servers, data caps, and streaming-service blocks all matter. PrivadoVPN may be worth trying for occasional streaming, but no free VPN should be presented as guaranteed streaming access."
  },
  {
    title: "Free VPNs for travel",
    body: "Install and test before departure. Check local laws, keep backup account access options, and do not assume a free VPN will work on every restrictive network. Frequent travelers usually outgrow free tiers because reliability and location choice matter."
  },
  {
    title: "Free VPNs for students",
    body: "Students can reasonably start free when budget matters and usage is light. Proton VPN Free is the best fit for unlimited browsing, Windscribe is useful for location flexibility, and TunnelBear is easiest for learning. Streaming, gaming, and several devices can push students toward paid plans."
  },
  {
    title: "Free VPNs for public Wi-Fi",
    body: "HTTPS already protects much modern web traffic, but a VPN can still reduce local-network and ISP visibility. It does not stop phishing, malware, scams, weak passwords, or compromised accounts."
  },
  {
    title: "When should you upgrade?",
    body: "Pay when free limits create real friction: frequent use, larger server selection, several devices, regular streaming attempts, better reliability, restrictive networks, support, advanced features, or household use."
  },
  {
    title: "Free VPN versus browser privacy tools",
    body: "A VPN changes your network path and apparent IP address. Encrypted DNS hides some DNS queries from some observers. Private browsing mainly limits local browser history. Tracker blockers reduce tracking scripts. Tor is a separate anonymity network with different tradeoffs."
  }
];

const safetyChecks = [
  "Identifiable owner",
  "Clear privacy policy",
  "Understandable business model",
  "Official app source",
  "Reasonable permissions",
  "Transparent limits",
  "Account deletion instructions",
  "Support documentation",
  "Audit information where available",
  "No impossible claims"
];

const faqItems = [
  ["What is the best free VPN?", "Proton VPN Free is the best overall free VPN for most beginners because it removes the data-cap problem while offering a credible privacy-focused free tier. Windscribe Free is stronger for location flexibility, and PrivadoVPN Free is worth considering for occasional limited use."],
  ["Are free VPNs safe?", "Some reputable free VPN tiers can be safe enough for light use, but unknown free apps need scrutiny. Check ownership, business model, app permissions, privacy policy, audits where available, and support documentation."],
  ["Is Proton VPN Free really unlimited?", "Current Proton documentation says Proton VPN Free has no data or speed limits, no ads, and no activity logs. It still has limits around server choice, one VPN connection, and paid features."],
  ["Which free VPN has the most locations?", "Windscribe Free is the strongest location-flexibility pick in this guide because official pages describe free locations in 10 countries. PrivadoVPN's official pages conflict between 12 cities and 13 locations, so that count should be rechecked before promotion."],
  ["Do free VPNs work for streaming?", "Sometimes, but streaming is never guaranteed. Free plans often have limited locations, crowded servers, data caps, or no streaming-optimized servers."],
  ["Can I use a free VPN on multiple devices?", "It depends on the provider. Proton VPN Free is one connection. Windscribe says it does not limit connections. PrivadoVPN Free is one connection at a time. hide.me Free is one device. TunnelBear's main limit is 2GB per month."],
  ["Do free VPNs sell your data?", "Some free VPN business models may rely on ads, analytics, or data sharing, but not every free VPN sells data. Reputable freemium plans may be funded by paid users."],
  ["Are free VPNs slower?", "They can be. Free servers may be crowded or deprioritized, and some plans impose speed or quota restrictions. Speed depends on provider, server, distance, protocol, network, and device."],
  ["Is a free VPN enough for public Wi-Fi?", "Often yes for light use, as long as the provider is reputable. HTTPS already protects much modern browsing, while a VPN can reduce local-network and ISP visibility."],
  ["Is a free VPN enough for students?", "A reputable free VPN can be enough for students with light browsing and budget constraints. Streaming, gaming, several devices, or frequent travel may justify paying."],
  ["Can I use a free VPN while traveling?", "Yes, but install and test before you leave, check local laws, and keep a backup plan. Free server congestion and limited locations can matter more when traveling."],
  ["What is the difference between a free VPN and a trial?", "A free VPN tier is an ongoing no-cost plan. A trial is temporary. A money-back guarantee requires payment first and is not the same as a free plan."],
  ["When should I pay for a VPN?", "Pay when you need frequent use, broader server choice, more devices, regular streaming attempts, better reliability, restrictive-network support, or advanced features."],
  ["Which free VPNs should I avoid?", "Avoid free VPNs with unclear ownership, unclear monetization, intrusive ads, suspicious permissions, weak documentation, unsupported security claims, or trial-only access presented as free."]
];

const evidenceLinks = [
  { label: "Proton VPN Free", href: "https://protonvpn.com/free-vpn" },
  { label: "Proton VPN plan support", href: "https://protonvpn.com/support/proton-vpn-plans" },
  { label: "Proton free server changes", href: "https://protonvpn.com/support/change-server-free-plan" },
  { label: "Windscribe Use for Free", href: "https://windscribe.com/features/use-for-free" },
  { label: "Windscribe unlimited devices", href: "https://windscribe.com/features/unlimited-devices" },
  { label: "Windscribe privacy policy", href: "https://windscribe.com/privacy" },
  { label: "PrivadoVPN free plan", href: "https://privadovpn.com/freevpn/" },
  { label: "PrivadoVPN free versus paid support", href: "https://support.privadovpn.com/kb/article/875-what-is-the-difference-between-the-free-and-paid-vpn-plans/" },
  { label: "TunnelBear free data support", href: "https://help.tunnelbear.com/hc/en-us/articles/360007004411-How-much-data-do-free-users-get" },
  { label: "TunnelBear free versus paid support", href: "https://help.tunnelbear.com/hc/en-us/articles/360059027431-What-is-the-difference-between-a-free-and-paid-TunnelBear-account" },
  { label: "hide.me free VPN", href: "https://hide.me/en/free-vpn" },
  { label: "FTC VPN app guidance", href: "https://www.ftc.gov/business-guidance/blog/2018/02/market-vpn-app" },
  { label: "EFF VPN decision guidance", href: "https://ssd.eff.org/module/choosing-vpn-thats-right-you" },
  { label: "Android VPN app research", href: "https://www.icsi.berkeley.edu/icsi/news/2017/02/android-vpn" }
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p><h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>{description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}</div>;
}

function BulletList({ items, tone = "brand" }: { items: string[]; tone?: "brand" | "slate" }) {
  return <ul className="mt-5 grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 className={tone === "brand" ? "mt-0.5 shrink-0 text-brand-700" : "mt-0.5 shrink-0 text-slate-500"} size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function InternalLinkButton({ href, children, variant = "primary" }: { href: string; children: string; variant?: "primary" | "secondary" }) {
  const classes = variant === "primary"
    ? "inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
    : "inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";
  return <Link className={classes} to={href}>{children}</Link>;
}

export function BestFreeVpnsPage() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: pageTitle, description: pageDescription, datePublished: "2026-07-11", dateModified: "2026-07-11", author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: site.url + pagePath };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" }, { "@type": "ListItem", position: 2, name: "Best Free VPNs", item: site.url + pagePath }] };
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: vpns.map((vpn, index) => ({ "@type": "ListItem", position: index + 1, name: vpn.name, url: site.url + pagePath + "#" + vpn.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} path={pagePath} />
      {[articleSchema, breadcrumbSchema, itemListSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <AffiliateDisclosure />

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">VPN guide</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{pageTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">We compare legitimate permanent free VPN plans and explain the data, server, streaming, device, and privacy tradeoffs that matter.</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">The short version: start with Proton VPN Free if unlimited data and privacy transparency matter most. Consider Windscribe for more location flexibility, PrivadoVPN for occasional limited use, TunnelBear for the simplest beginner test, and hide.me as a no-signup alternative. Rankings are independent of affiliate availability.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#quick-recommendations">See Quick Picks</a>
              <InternalLinkButton href="/guides/free-vpn-vs-paid" variant="secondary">Free vs Paid VPNs</InternalLinkButton>
              <InternalLinkButton href="/best-vpns-for-travel" variant="secondary">Travel VPNs</InternalLinkButton>
              <InternalLinkButton href="/are-vpns-worth-it" variant="secondary">Do You Need a VPN?</InternalLinkButton>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-lift backdrop-blur">
            <ShieldCheck className="text-brand-700" size={24} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">Main Recommendation</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">Proton VPN Free is the best overall free starting point, but the right free VPN depends on whether you need unlimited data, locations, beginner simplicity, streaming attempts, or no-signup use.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-700">Official facts checked {checkedDate}</p>
          </aside>
        </Container>
      </section>

      <Section id="quick-recommendations">
        <SectionHeading eyebrow="Quick recommendations" title="The Free VPNs Worth Considering" description="These are fit-based labels, not paid placements. Non-affiliate products receive full consideration." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {recommendations.map((item) => <article key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{item.label}</p><h3 className="mt-3 text-xl font-bold text-slate-950">{item.product}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.limitation}</p></article>)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Comparison table" title="Free VPN Limits Compared" description="Data allowance, locations, and device limits are separated because they are not the same thing." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[68rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>{["VPN", "Best for", "Data allowance", "Free locations", "Device limit", "Streaming", "Main restriction"].map((head) => <th key={head} className="px-4 py-4 font-semibold" scope="col">{head}</th>)}</tr>
            </thead>
            <tbody>
              {vpns.map((vpn) => <tr key={vpn.name} className="border-b border-slate-200 last:border-0"><th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950" scope="row">{vpn.name}</th><td className="px-4 py-4 text-slate-700">{vpn.bestFor}</td><td className="px-4 py-4 text-slate-700">{vpn.data}</td><td className="px-4 py-4 text-slate-700">{vpn.locations}</td><td className="px-4 py-4 text-slate-700">{vpn.devices}</td><td className="px-4 py-4 text-slate-700">{vpn.streaming}</td><td className="px-4 py-4 text-slate-700">{vpn.restriction}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our verdict" title="Proton VPN Free Is the Safest First Recommendation" />
        <div className="mt-8 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-slate-700">For most beginners, Proton VPN Free is the easiest free VPN to recommend because the lack of a data cap makes it useful beyond short tests. Windscribe Free is better if you want more location flexibility and unlimited connections, PrivadoVPN Free is a useful limited option, TunnelBear Free is best as a beginner-friendly test, and hide.me Free is a credible no-signup alternative.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">No hands-on testing was performed for this article. Current plan facts come from official documentation checked on {checkedDate}. Choose Better Tech conclusions are editorial judgments based on that documentation, existing CBT VPN research, and safety guidance.</p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Methodology" title="How We Evaluated Free VPNs" description="A free VPN has to be more than free. It needs clear limits, a believable business model, and enough documentation to evaluate." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><SearchCheck className="text-brand-700" size={22} aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">Plan reality</h3><BulletList items={["Permanent free tier versus trial", "Data allowance and reset rules", "Server access and location control", "Device and connection limits", "Streaming, torrenting, and support limits"]} /></article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><ListChecks className="text-brand-700" size={22} aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">Trust evidence</h3><BulletList items={["Company ownership and jurisdiction", "Business model", "Privacy policy and logging claims", "Audits or transparency where available", "Official app sources and support docs"]} /></article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><AlertCircle className="text-brand-700" size={22} aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">Guardrails</h3><BulletList tone="slate" items={["No invented hands-on testing", "No affiliate-driven rankings", "No guaranteed streaming claims", "No anonymity promises", "No claim that payment proves privacy"]} /></article>
        </div>
      </Section>

      {vpns.map((vpn) => {
        const id = vpn.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        return (
          <Section key={vpn.name} id={id}>
            <article className="mx-auto max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{vpn.label}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">{vpn.name}</h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_18rem]">
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                  <p className="text-base leading-8 text-slate-700">{vpn.verdict}</p>
                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div><h3 className="text-lg font-bold text-slate-950">Why it stands out</h3><BulletList items={vpn.why} /></div>
                    <div><h3 className="text-lg font-bold text-slate-950">Main limitations</h3><BulletList items={vpn.limits} tone="slate" /></div>
                  </div>
                  <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5"><h3 className="text-lg font-bold text-slate-950">What requires payment</h3><BulletList items={vpn.paymentAdds} /></div>
                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-lg border border-brand-100 bg-brand-50 p-5"><h3 className="font-bold text-slate-950">Who should choose it</h3><p className="mt-3 text-sm leading-6 text-slate-700">{vpn.choose}</p></div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5"><h3 className="font-bold text-slate-950">Who should skip it</h3><p className="mt-3 text-sm leading-6 text-slate-700">{vpn.skip}</p></div>
                  </div>
                </div>
                <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                  <h3 className="text-base font-bold text-slate-950">Read next</h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-6">
                    {vpn.links.map((link) => <li key={link.href + link.label}><Link className="font-semibold text-brand-700 hover:text-brand-800" to={link.href}>{link.label}</Link></li>)}
                  </ul>
                </aside>
              </div>
            </article>
          </Section>
        );
      })}

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Not recommended" title="Free VPNs We Did Not Recommend" description="This is not a blacklist. These are exclusion categories that prevent a product from being a top free recommendation." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{notRecommended.map((item) => <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{item.reason}</p></article>)}</div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Decision help" title="How to Choose a Free VPN Safely" />
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><BulletList items={safetyChecks} /></div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Use cases" title="Free VPN Guidance by Situation" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">{guidanceSections.map((section) => <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{section.title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{section.body}</p></article>)}</div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Free VPN Questions" />
        <div className="mt-8 grid gap-4">{faqItems.map(([question, answer]) => <article key={question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{question}</h3><p className="mt-3 text-base leading-7 text-slate-700">{answer}</p></article>)}</div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Evidence checked" title="Sources Used for Current Free-Plan Facts" description="Plan details are volatile. Recheck free data, locations, device limits, streaming support, and account requirements before promotion." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {evidenceLinks.map((source) => <a key={source.href} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-brand-700 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" href={source.href} target="_blank" rel="noreferrer noopener"><span>{source.label}</span><ExternalLink className="mt-0.5 shrink-0" size={15} aria-hidden="true" /></a>)}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Final recommendation</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Start Free Only When the Limits Match Your Use</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">Start with Proton VPN Free if you want the most generally useful free VPN. Choose Windscribe Free if location flexibility matters more than unlimited data. Try PrivadoVPN Free for occasional limited sessions, TunnelBear Free for the simplest beginner experience, and hide.me Free if no-signup access matters. Upgrade only when data, locations, devices, streaming, support, or reliability become real friction.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <InternalLinkButton href="/guides/free-vpn-vs-paid">Compare Free vs Paid</InternalLinkButton>
            <InternalLinkButton href="/vpn" variant="secondary">Open VPN Decision Hub</InternalLinkButton>
            <InternalLinkButton href="/best-vpns-for-travel" variant="secondary">Compare Travel VPNs</InternalLinkButton>
            <InternalLinkButton href="/guides/best-vpns-for-beginners" variant="secondary">Compare Beginner VPNs</InternalLinkButton>
          </div>
        </div>
      </Section>

      <Newsletter />
    </>
  );
}
