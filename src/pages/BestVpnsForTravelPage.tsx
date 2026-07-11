import { AlertCircle, CheckCircle2, ExternalLink, ListChecks, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateButton } from "../components/affiliate/AffiliateButton";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import type { AffiliateProvider } from "../data/affiliateLinks";
import { site } from "../utils/site";

const pagePath = "/best-vpns-for-travel";
const pageTitle = "Best VPNs for Travel in 2026";
const pageDescription = "Compare the best VPNs for travel by server coverage, devices, privacy, streaming, mobile apps, support, pricing, and restrictive-network features.";
const checkedDate = "July 11, 2026";

type Provider = {
  name: string;
  label: string;
  bestFor: string;
  countries: string;
  devices: string;
  monthly: string;
  refund: string;
  strengths: string;
  limitation: string;
  verdict: string;
  why: string[];
  features: string[];
  pricing: string;
  support: string;
  privacy: string;
  audit: string;
  streaming: string;
  restrictive: string;
  choose: string;
  skip: string;
  reviewHref?: string;
  affiliateProvider?: AffiliateProvider;
  ctaLabel?: string;
  links: Array<{ label: string; href: string }>;
};

const providers: Provider[] = [
  {
    name: "NordVPN",
    label: "Best overall travel VPN",
    bestFor: "Most travelers who want a fast, mainstream VPN with strong app support and broad location choice",
    countries: "Official pricing page says 224+ locations",
    devices: "Up to 10 devices",
    monthly: "Available; verify current price and renewal terms",
    refund: "30 days for new subscriptions",
    strengths: "Broad location access, obfuscated servers, audited no-logs posture in CBT research, simple apps, and strong mainstream performance evidence",
    limitation: "Pricing and renewal terms are volatile; obfuscated servers require OpenVPN mode",
    verdict: "NordVPN is the best overall travel pick for most readers because it balances broad coverage, beginner-friendly apps, public Wi-Fi fit, streaming usefulness, and restrictive-network features better than the other candidates.",
    why: [
      "Current official pages describe broad location coverage, support for up to 10 devices, and a 30-day money-back guarantee.",
      "NordVPN documents DNS leak protection, automatic kill switch behavior, and support for NordLynx, NordWhisper, OpenVPN, and IKEv2/IPsec.",
      "Its obfuscated-server support is useful for some restrictive networks, though NordVPN says those servers work with OpenVPN rather than NordLynx.",
      "The existing CBT NordVPN review already positions it as a strong mainstream fit for travelers and public Wi-Fi users."
    ],
    features: ["Kill switch and DNS leak protection", "Obfuscated servers through OpenVPN", "Desktop, mobile, browser, TV, and router support", "P2P and streaming positioning, with normal volatility caveats"],
    pricing: "Best suited to travelers who will use the service beyond one trip or who can justify a short-term plan after checking current pricing and renewal terms.",
    support: "Good mainstream support depth in official support materials; save support articles before departure if you expect restrictive networks.",
    privacy: "Existing CBT research supports high mainstream privacy confidence, but NordVPN is not an anonymity tool and clients are not fully open-source.",
    audit: "Existing CBT research cites repeated no-logs audit activity and transparency signals.",
    streaming: "A strong mainstream streaming candidate, but streaming services can block VPN IPs and no provider can guarantee a specific catalog abroad.",
    restrictive: "Useful obfuscation options exist, but access in restrictive countries or networks is never guaranteed and local law controls.",
    choose: "Choose NordVPN if you want one travel VPN for hotels, airports, public Wi-Fi, streaming attempts, and everyday use with minimal tinkering.",
    skip: "Skip it if you need maximum open-source transparency, port forwarding, or the simplest short-term flat monthly price.",
    reviewHref: "/reviews/nordvpn-review",
    affiliateProvider: "nordvpn",
    ctaLabel: "Visit NordVPN",
    links: [
      { label: "NordVPN Review", href: "/reviews/nordvpn-review" },
      { label: "NordVPN vs Surfshark", href: "/comparisons/nordvpn-vs-surfshark" },
      { label: "NordVPN vs Proton VPN", href: "/comparisons/nordvpn-vs-protonvpn" }
    ]
  },
  {
    name: "Surfshark",
    label: "Best for families and many devices",
    bestFor: "Families, couples, device-heavy travelers, and budget-conscious households",
    countries: "Official server page says 100 countries",
    devices: "Unlimited simultaneous connections",
    monthly: "Available; verify current monthly and renewal pricing",
    refund: "30 days in current official feature copy",
    strengths: "Unlimited simultaneous connections, broad country list, beginner apps, Bypasser/split tunneling, and obfuscation support",
    limitation: "Unlimited devices does not remove account-sharing rules, renewal pricing, or streaming volatility",
    verdict: "Surfshark is the strongest travel pick when one subscription needs to cover several phones, laptops, tablets, and family devices at the same time.",
    why: [
      "Current official materials describe 4,500+ servers in 100 countries and unlimited simultaneous connections.",
      "Unlimited connections are unusually practical for family travel, study abroad, and multi-device trips.",
      "Surfshark documents obfuscated servers, kill switch features, and Bypasser-style split tunneling.",
      "The existing CBT review already positions Surfshark as the strongest value and many-device VPN in the VPN cluster."
    ],
    features: ["Unlimited simultaneous connections", "Kill switch", "Bypasser/split tunneling", "Obfuscated-server documentation"],
    pricing: "Often attractive for longer commitments, but current pricing, renewal pricing, and refund exclusions should be checked before purchase.",
    support: "Good fit for mainstream travelers who want simple apps across many devices; families should install and test before leaving.",
    privacy: "Existing CBT research supports mainstream privacy confidence with operational metadata caveats.",
    audit: "Existing CBT research records repeated third-party audit activity, but audits remain point-in-time evidence.",
    streaming: "A practical streaming candidate, especially for households, but streaming support should be treated as uncertain and service-specific.",
    restrictive: "Obfuscation can help on some networks, but should not be described as guaranteed access in restrictive countries.",
    choose: "Choose Surfshark if your trip includes several people or many devices and you want a value-oriented paid VPN.",
    skip: "Skip it if you require open-source clients, port forwarding, or a privacy-first provider with minimal account metadata.",
    reviewHref: "/reviews/surfshark-review",
    affiliateProvider: "surfshark",
    ctaLabel: "Visit Surfshark",
    links: [
      { label: "Surfshark Review", href: "/reviews/surfshark-review" },
      { label: "NordVPN vs Surfshark", href: "/comparisons/nordvpn-vs-surfshark" },
      { label: "Proton VPN vs Surfshark", href: "/comparisons/proton-vpn-vs-surfshark" }
    ]
  },
  {
    name: "Proton VPN",
    label: "Best for privacy-focused travelers",
    bestFor: "Travelers who value transparency, audits, open-source apps, free backup access, and privacy-first positioning",
    countries: "Official plan docs say paid plans cover 140+ countries; some support pages still show lower counts",
    devices: "Up to 10 paid-plan devices; one free-plan connection",
    monthly: "Available; verify current plan and refund terms",
    refund: "30-day money-back wording in support docs",
    strengths: "Open-source transparency, Secure Core, free tier, Stealth protocol, audited no-logs posture, and strong privacy fit",
    limitation: "Support, pricing, refund details, and server counts need rechecking; free plan is limited for travel",
    verdict: "Proton VPN is the best travel pick for readers who value privacy transparency more than the lowest price or broadest mainstream streaming pitch.",
    why: [
      "Current official plan docs describe paid access to 20,000+ servers in 140+ countries and up to 10 simultaneous devices.",
      "The free tier can be useful as a backup, but official docs limit free users to one connection and selected countries.",
      "Proton documents DNS leak protection, IPv6 leak prevention or support depending on platform, kill switch, strong encryption, Secure Core, and paid streaming/P2P support.",
      "Existing CBT research already positions Proton VPN as the strongest privacy-transparency option among the three reviewed VPNs."
    ],
    features: ["Secure Core", "Stealth protocol and modern VPN protocols", "DNS leak protection and kill switch", "Permanent free plan with limits"],
    pricing: "Best for travelers willing to pay for privacy evidence and transparency; free can work as a backup but not as the main travel recommendation for most trips.",
    support: "Support expectations should be verified before travel, especially if you may need live help abroad.",
    privacy: "Strongest privacy-transparency profile in the CBT VPN cluster, with Swiss legal nuance and no anonymity guarantee.",
    audit: "Existing CBT research cites no-logs audit evidence and open-source client transparency.",
    streaming: "Paid plans are the better streaming fit. Free should not be treated as a streaming plan.",
    restrictive: "Stealth and Secure Core are useful privacy features, but restrictive-network access is not guaranteed.",
    choose: "Choose Proton VPN if audits, open-source apps, Swiss jurisdiction, and a credible free fallback matter most.",
    skip: "Skip it if you need the lowest-cost household plan, guaranteed streaming, or the easiest 24/7 support expectation.",
    reviewHref: "/reviews/proton-vpn-review",
    affiliateProvider: "protonvpn",
    ctaLabel: "Check Proton VPN Plans",
    links: [
      { label: "Proton VPN Review", href: "/reviews/proton-vpn-review" },
      { label: "Is Proton VPN Free Good Enough?", href: "/guides/is-proton-vpn-free-good-enough" },
      { label: "Proton VPN vs Surfshark", href: "/comparisons/proton-vpn-vs-surfshark" }
    ]
  },
  {
    name: "ExpressVPN",
    label: "Best for simplicity and broad country coverage",
    bestFor: "Travelers who want polished apps, broad country access, audits, and minimal configuration",
    countries: "Official pages describe 113 countries",
    devices: "Official wording varies by plan; verify whether your subscription supports 10 or 14 simultaneous connections",
    monthly: "Available; verify promotion and renewal terms",
    refund: "30 days for first-time users, with exclusions in terms/promotional wording",
    strengths: "Simple apps, broad country coverage, audited claims, kill switch, router support, and strong support positioning",
    limitation: "No existing CBT review; ownership, device-limit wording, and refund exclusions require careful reading",
    verdict: "ExpressVPN is a strong travel candidate for simplicity, support, and broad country choice, but CBT should treat it as a current-source recommendation rather than a fully built internal-review recommendation.",
    why: [
      "Current official pages describe 113 countries and independently audited no-logs/security claims.",
      "ExpressVPN documents its kill switch, split tunneling on supported platforms, Lightway, audits, and router ecosystem.",
      "It is a good fit for travelers who want a premium-feeling app and fewer settings decisions.",
      "Its device-limit and refund wording is more nuanced than a simple one-line claim, so readers should verify at checkout."
    ],
    features: ["Internet kill switch", "Lightway, WireGuard, and OpenVPN positioning", "Router app ecosystem", "Independent audit documentation"],
    pricing: "Often premium-priced compared with value VPNs. Treat promotional pricing and renewal terms as volatile.",
    support: "Good support positioning for travelers, especially if a VPN problem happens away from home.",
    privacy: "Express Technologies Ltd. says personal data is controlled under BVI jurisdiction; ultimate ownership by Kape is a transparency caveat for privacy-sensitive readers.",
    audit: "Current official support docs explain ongoing independent audit activity across apps, protocol, infrastructure, and privacy claims.",
    streaming: "A plausible streaming travel option, but no streaming access should be described as guaranteed.",
    restrictive: "Automatic obfuscation and support resources may help, but restrictive-network access remains uncertain.",
    choose: "Choose ExpressVPN if you value app polish, broad country coverage, and support over the lowest price.",
    skip: "Skip it if you need an existing CBT full review, lower pricing, or cleaner ownership optics.",
    links: [
      { label: "VPN Buying Guide", href: "/guides/vpn-buying-guide" },
      { label: "Are VPNs Worth It?", href: "/are-vpns-worth-it" },
      { label: "VPN Myths", href: "/guides/vpn-myths" }
    ]
  },
  {
    name: "Mullvad",
    label: "Best short-trip privacy alternative",
    bestFor: "Privacy-focused travelers who want flat monthly pricing, anonymous account setup, and no long subscription",
    countries: "Live server page should be checked for the current destination list",
    devices: "Up to 5 devices",
    monthly: "Flat EUR 5/month, including longer top-ups",
    refund: "14 days, except cash and some crypto constraints",
    strengths: "No email required, flat pricing, cash/crypto options, open privacy posture, and strong no-lock-in fit",
    limitation: "Smaller mainstream travel footprint, weaker streaming positioning, and no existing CBT review",
    verdict: "Mullvad is the best short-trip privacy alternative for readers who want a simple month-to-month VPN and care more about data minimization than streaming polish.",
    why: [
      "Current official pricing states one flat monthly rate and a 14-day refund window with cash/crypto exceptions.",
      "Mullvad supports anonymous account use and encourages anonymous payment methods.",
      "Its privacy positioning is strong for travelers who dislike account-heavy services.",
      "The smaller network and weaker streaming positioning keep it below mainstream travel picks for ordinary vacationers."
    ],
    features: ["Anonymous account model", "No-logging policy", "DAITA and bridge/restrictive-location guidance", "Mullvad Browser ecosystem"],
    pricing: "A strong short-trip fit because the monthly rate is flat rather than built around long-term discounts.",
    support: "Support is less sales-heavy and more privacy-tool oriented; install and test before travel.",
    privacy: "One of the strongest privacy-minimization approaches in this set, but still not a complete anonymity system.",
    audit: "Official pages describe external audits; treat each audit as point-in-time evidence.",
    streaming: "Not the right first choice if streaming abroad is your main reason for buying a VPN.",
    restrictive: "Mullvad publishes restrictive-location guidance, but access in those places is not guaranteed.",
    choose: "Choose Mullvad for one-off travel, privacy-first browsing, and no long-term subscription commitment.",
    skip: "Skip it if you need the largest country list, family device coverage, or mainstream streaming support.",
    links: [
      { label: "VPN Buying Guide", href: "/guides/vpn-buying-guide" },
      { label: "How VPNs Work", href: "/guides/how-vpns-work" },
      { label: "VPN Myths", href: "/guides/vpn-myths" }
    ]
  },
  {
    name: "IVPN",
    label: "Best high-transparency privacy alternative",
    bestFor: "Travelers who value open-source apps, clear privacy policy language, multi-hop, and flexible weekly/monthly plans",
    countries: "Official services page says 58 locations in 41 countries",
    devices: "5 devices on Standard/Plus; 10 on Pro Suite",
    monthly: "Weekly, monthly, and annual options",
    refund: "30-day guarantee in current pricing snippet",
    strengths: "Open-source apps, no-logs policy, multi-hop, firewall/kill switch, DNS leak protection, and transparent device rules",
    limitation: "Smaller network and account-sharing restrictions make it less family-friendly",
    verdict: "IVPN is a strong transparency pick for privacy-oriented travelers, but it is more specialized than the mainstream travel recommendations.",
    why: [
      "Current official service docs describe open-source apps, bare-metal servers in 58 locations across 41 countries, and WireGuard/OpenVPN/IPSec support.",
      "Current device documentation separates install count from device slots and says Standard/Plus allow 5 devices while Pro Suite allows 10.",
      "IVPN documents a firewall/kill-switch approach, DNS leak protection, multi-hop, and AntiTracker.",
      "Its no-logging privacy policy is unusually specific, and IVPN has published audit material."
    ],
    features: ["Open-source apps", "Firewall/kill switch", "Multi-hop", "AntiTracker and DNS leak protections"],
    pricing: "A good fit when a short weekly or monthly plan is more sensible than a long travel subscription.",
    support: "Better for travelers comfortable with a privacy-tool mindset than for families who want the easiest all-in-one option.",
    privacy: "Specific no-logs policy language and open-source apps are strong signals.",
    audit: "IVPN has published no-logging audit material; current audit freshness should be reviewed before privacy-critical use.",
    streaming: "Not a streaming-first recommendation.",
    restrictive: "Useful technical controls exist, but no restrictive-network access guarantee should be implied.",
    choose: "Choose IVPN if transparency, flexible short-term plans, and privacy controls matter more than broad mainstream coverage.",
    skip: "Skip it if you need unlimited devices, broadest country coverage, or the easiest family trip setup.",
    links: [
      { label: "VPN Buying Guide", href: "/guides/vpn-buying-guide" },
      { label: "Are VPNs Worth It?", href: "/are-vpns-worth-it" },
      { label: "How VPNs Work", href: "/guides/how-vpns-work" }
    ]
  }
];

const scenarios = [
  ["International vacation", "Start with NordVPN for broad mainstream fit, or ExpressVPN if app simplicity and support are the deciding factors. Check local laws before travel."],
  ["Domestic travel", "A VPN may be useful on shared hotel, airport, or conference networks, but HTTPS and basic account security already do much of the work."],
  ["Digital nomad", "Prioritize reliability, mobile and desktop apps, support, and account recovery. NordVPN, Proton VPN, or ExpressVPN are the most practical starts."],
  ["Business travel", "Use your employer VPN when required. A consumer VPN should not bypass company policy or managed-device controls."],
  ["Family trip", "Surfshark is the strongest fit when many devices need coverage under one subscription."],
  ["Study abroad", "Proton VPN is the privacy-first pick, Surfshark is the multi-device value pick, and free backup options can help if budget matters."],
  ["Cruise travel", "Expect inconsistent networks, captive portals, and high latency. Install before departure and do not assume streaming will work."],
  ["Road trip", "Mobile data may be simpler than public Wi-Fi. A VPN is most useful when you rely on hotels, cafes, campuses, or shared networks."],
  ["Restrictive destination", "Research local law first, install before departure, and do not rely on any one VPN as guaranteed access."],
  ["Occasional short trip", "Mullvad or IVPN can make sense because they avoid long commitments."],
  ["Long-term travel", "Prioritize support, renewal terms, device limits, and server coverage in countries you actually visit."],
  ["Backup VPN", "Proton VPN Free or Windscribe Free can be useful backups, but free plans have serious travel limits."]
];

const checklistBefore = ["Verify local law and destination travel advisories", "Install official apps before departure", "Test login and connection on every device", "Test kill switch behavior", "Save account recovery codes", "Enable MFA on important accounts", "Confirm renewal date and cancellation rules", "Download offline maps and media", "Save support contact information", "Confirm household or account-sharing rules", "Test a backup connection"];
const checklistDuring = ["Use official apps only", "Avoid unknown VPN APKs or profiles", "Verify the VPN is connected before sensitive browsing", "Keep devices and apps updated", "Watch for phishing and fake captive portals", "Do not assume a VPN equals anonymity", "Follow local law and network rules"];

const faqItems = [
  ["What is the best VPN for international travel?", "NordVPN is the best overall travel VPN for most readers because it balances broad location coverage, simple apps, obfuscated-server support, and existing CBT review evidence. Proton VPN is stronger for privacy-focused travelers, Surfshark is stronger for families, and ExpressVPN is stronger for simple premium app experience."],
  ["Do I need a VPN while traveling?", "Not always. A VPN is useful when you use shared networks, want to reduce local-network or ISP visibility, need location flexibility, or expect restrictive networks. It adds less value if you mostly use trusted mobile data and already rely on HTTPS, MFA, and safe browsing."],
  ["Is it legal to use a VPN abroad?", "It depends on the country and situation. VPNs are legal for ordinary use in many places, but some countries restrict or regulate them. Check destination rules and travel advisories before departure."],
  ["Should I install a VPN before traveling?", "Yes. Install official apps, log in, test your connection, save recovery codes, and confirm support options before you leave. App-store availability and login access can be harder after arrival."],
  ["Which VPN is best for multiple devices?", "Surfshark is the strongest fit for multiple devices because it currently advertises unlimited simultaneous connections. NordVPN and Proton VPN support up to 10 devices, while Mullvad is limited to 5 devices."],
  ["Which VPN is best for families?", "Surfshark is the best family travel fit because unlimited simultaneous connections reduce device-management friction. Families should still review account-sharing rules and install apps before leaving."],
  ["Which VPN is best for students abroad?", "Proton VPN is the best privacy-focused student pick, Surfshark is stronger for value and many devices, and Proton VPN Free can be a reasonable backup for light use."],
  ["Which VPN is best for business travel?", "Use the employer-approved VPN or security stack first. For personal browsing on shared networks, NordVPN, Proton VPN, or ExpressVPN can be reasonable, but do not use a consumer VPN to bypass company controls."],
  ["Do VPNs work on hotel Wi-Fi?", "Often, but captive portals, blocked VPN traffic, weak networks, and device restrictions can cause problems. Connect to the hotel network first, complete the portal, then start the VPN."],
  ["Do VPNs work at airports?", "Often, but performance varies by network quality, congestion, captive portals, and VPN blocking. Mobile data may be simpler for sensitive tasks."],
  ["Can a VPN access streaming services abroad?", "Sometimes, but never reliably enough to guarantee. Streaming services can block VPN IP addresses, enforce licensing terms, and change detection systems without warning."],
  ["Will a VPN make public Wi-Fi completely safe?", "No. A VPN can reduce local-network and ISP visibility, but it does not stop phishing, malware, fake websites, unsafe downloads, weak passwords, or compromised accounts."],
  ["Can I use a free VPN while traveling?", "Yes, as a backup or for light use. Free VPNs often have limits around data, locations, speed, streaming, support, or devices, so frequent travelers usually need a paid plan."],
  ["Do VPNs work in restrictive countries?", "Sometimes, but no provider can guarantee access. Laws, app stores, blocking methods, and enforcement vary. Research local rules and do not rely on a VPN to override the law."],
  ["Should I buy a monthly VPN for one trip?", "A monthly plan can make sense for one trip if you do not want a long contract. Compare the monthly cost, refund terms, cancellation process, and whether a flat monthly provider such as Mullvad fits better."],
  ["What should I do if my VPN stops working abroad?", "Try another nearby server, switch protocols, check captive portals, use mobile data, contact support, or use a backup VPN. Do not download unofficial apps or configuration files from unknown sources."],
  ["Does a VPN protect my banking information?", "HTTPS and your bank's security protect most banking content in transit. A VPN can reduce local-network visibility, but MFA, official apps, safe devices, and phishing awareness matter more."],
  ["Can I use one VPN account on all my travel devices?", "It depends on the provider and plan. Surfshark allows unlimited simultaneous connections, NordVPN and Proton VPN support up to 10, ExpressVPN varies by subscription wording, Mullvad allows 5, and IVPN allows 5 or 10 depending on plan."]
];

const evidenceLinks = [
  ["NordVPN pricing and device/location facts", "https://nordvpn.com/pricing/"],
  ["NordVPN features support", "https://support.nordvpn.com/hc/en-us/articles/19559429814545-What-features-does-NordVPN-have"],
  ["NordVPN obfuscated servers", "https://support.nordvpn.com/hc/en-us/articles/19615332252561-How-to-connect-and-disconnect-from-NordVPN-s-obfuscated-servers"],
  ["Surfshark server locations", "https://surfshark.com/servers"],
  ["Surfshark features", "https://surfshark.com/features"],
  ["Surfshark obfuscated servers", "https://surfshark.com/features/obfuscated-servers"],
  ["Proton VPN plans", "https://protonvpn.com/support/proton-vpn-plans"],
  ["Proton VPN kill switch", "https://protonvpn.com/support/what-is-kill-switch"],
  ["ExpressVPN guarantee", "https://www.expressvpn.com/features/money-back-guarantee"],
  ["ExpressVPN device limits", "https://www.expressvpn.com/features/how-many-devices-can-i-connect"],
  ["ExpressVPN audits", "https://www.expressvpn.com/support/knowledge-hub/independent-audits/"],
  ["Mullvad pricing", "https://mullvad.net/en/pricing"],
  ["Mullvad VPN overview", "https://mullvad.net/en/vpn"],
  ["IVPN services", "https://www.ivpn.net/en/services/"],
  ["IVPN privacy policy", "https://www.ivpn.net/en/privacy/"],
  ["FTC public Wi-Fi guidance", "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know"],
  ["EFF VPN guidance", "https://ssd.eff.org/module/choosing-vpn-thats-right-you"],
  ["U.S. State Department travel advisories", "https://travel.state.gov/en/international-travel/travel-advisories.html"]
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p><h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>{description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}</div>;
}

function BulletList({ items, negative = false }: { items: string[]; negative?: boolean }) {
  return <ul className="mt-5 grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 className={negative ? "mt-0.5 shrink-0 text-rose-600" : "mt-0.5 shrink-0 text-brand-700"} size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function InternalLinkButton({ href, children, variant = "primary" }: { href: string; children: string; variant?: "primary" | "secondary" }) {
  const classes = variant === "primary"
    ? "inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
    : "inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";
  return <Link className={classes} to={href}>{children}</Link>;
}

export function BestVpnsForTravelPage() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: pageTitle, description: pageDescription, datePublished: "2026-07-11", dateModified: "2026-07-11", author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: site.url + pagePath };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" }, { "@type": "ListItem", position: 2, name: "Best VPNs for Travel", item: site.url + pagePath }] };
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: providers.map((provider, index) => ({ "@type": "ListItem", position: index + 1, name: provider.name, description: provider.label })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return <>
    <SEO title={pageTitle} description={pageDescription} path={pagePath} />
    {[articleSchema, breadcrumbSchema, itemListSchema, faqSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <AffiliateDisclosure />

    <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Travel VPN guide</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{pageTitle}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">NordVPN is the best overall travel VPN for most readers, but the right choice depends on destination, devices, privacy needs, streaming expectations, and whether you need a short-term plan.</p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">A VPN can be useful while traveling, but it is not universally necessary. Local laws and network rules vary, streaming access is never guaranteed, and these rankings are editorially independent of affiliate availability.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><InternalLinkButton href="#quick-recommendations">See Travel Picks</InternalLinkButton><InternalLinkButton href="/are-vpns-worth-it" variant="secondary">Do I Need a VPN?</InternalLinkButton><InternalLinkButton href="/guides/vpn-buying-guide" variant="secondary">Use the Buying Guide</InternalLinkButton></div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand-700">Official facts checked {checkedDate}</p>
      </Container>
    </section>

    <Section id="quick-recommendations">
      <SectionHeading eyebrow="Quick verdict" title="Best Travel VPNs by Fit" description="These labels are based on travel use cases, not commissions. Non-affiliate providers are included where the evidence supports them." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {providers.map((provider) => <article key={provider.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{provider.label}</p><h3 className="mt-3 text-xl font-bold text-slate-950">{provider.name}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{provider.bestFor}</p><p className="mt-3 text-sm leading-6 text-slate-600"><strong>Limitation:</strong> {provider.limitation}</p>{provider.reviewHref ? <Link className="mt-4 inline-flex font-semibold text-brand-700 hover:text-brand-800" to={provider.reviewHref}>Read review</Link> : null}</article>)}
      </div>
    </Section>

    <Section className="bg-slate-50">
      <SectionHeading eyebrow="Comparison table" title="Travel VPN Limits Compared" description="Server countries, devices, monthly options, and refund terms are separated because they change at different speeds." />
      <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
        <table className="w-full min-w-[76rem] border-collapse text-left text-sm">
          <thead className="bg-slate-950 text-white"><tr>{["VPN", "Best for", "Server countries", "Devices", "Travel strengths", "Main limitation", "Monthly option", "Refund period"].map((head) => <th key={head} className="px-4 py-4 font-semibold" scope="col">{head}</th>)}</tr></thead>
          <tbody>{providers.map((provider) => <tr key={provider.name} className="border-b border-slate-200 last:border-0"><th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950" scope="row">{provider.name}</th><td className="px-4 py-4 text-slate-700">{provider.bestFor}</td><td className="px-4 py-4 text-slate-700">{provider.countries}</td><td className="px-4 py-4 text-slate-700">{provider.devices}</td><td className="px-4 py-4 text-slate-700">{provider.strengths}</td><td className="px-4 py-4 text-slate-700">{provider.limitation}</td><td className="px-4 py-4 text-slate-700">{provider.monthly}</td><td className="px-4 py-4 text-slate-700">{provider.refund}</td></tr>)}</tbody>
        </table>
      </div>
    </Section>

    <Section>
      <SectionHeading eyebrow="Our verdict" title="NordVPN Is the Best Overall Travel VPN, Not the Universal Winner" />
      <div className="mt-8 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-base leading-8 text-slate-700">For most travelers, NordVPN has the best blend of broad usability, travel-friendly features, existing CBT review evidence, location flexibility, obfuscated-server support, and simple apps. Surfshark is better for families and many devices. Proton VPN is better for privacy transparency and a credible free backup. ExpressVPN is better for travelers who prioritize app simplicity and support. Mullvad and IVPN are better for privacy-first travelers who want shorter commitments and less mainstream packaging.</p>
        <p className="mt-4 text-base leading-8 text-slate-700">No hands-on travel testing was performed for this article. Current plan facts come from official documentation checked on {checkedDate}, existing CBT VPN research, and public Wi-Fi/travel safety guidance.</p>
      </div>
    </Section>

    <Section className="bg-slate-50">
      <SectionHeading eyebrow="Methodology" title="How We Evaluated Travel VPNs" description="Travel changes the decision. Reliability, account access, destination risk, device friction, and support matter more when you are away from home." />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><ListChecks className="text-brand-700" size={22} aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">Travel fit</h3><BulletList items={["Server coverage for likely destinations", "Mobile and desktop apps", "Device limits", "Router support", "Customer support and recovery planning"]} /></article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><ShieldCheck className="text-brand-700" size={22} aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">Trust evidence</h3><BulletList items={["Privacy policy and logging claims", "Audits and transparency", "Ownership and jurisdiction", "Open-source status where relevant", "Documentation quality"]} /></article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><AlertCircle className="text-brand-700" size={22} aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">Guardrails</h3><BulletList items={["No invented speed tests", "No guaranteed streaming claims", "No evasion playbooks", "No affiliate-driven ranking", "No claim that VPNs override local law"]} /></article>
      </div>
    </Section>

    {providers.map((provider) => <Section key={provider.name} id={provider.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}>
      <article className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{provider.label}</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950">{provider.name}</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_18rem]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-base leading-8 text-slate-700">{provider.verdict}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2"><div><h3 className="text-lg font-bold text-slate-950">Why it stands out for travel</h3><BulletList items={provider.why} /></div><div><h3 className="text-lg font-bold text-slate-950">Main limitations</h3><BulletList negative items={[provider.limitation, provider.skip]} /></div></div>
            <div className="mt-8 grid gap-5 md:grid-cols-2"><div className="rounded-lg border border-slate-200 bg-slate-50 p-5"><h3 className="text-lg font-bold text-slate-950">Security and travel features</h3><BulletList items={provider.features} /></div><div className="rounded-lg border border-slate-200 bg-slate-50 p-5"><h3 className="text-lg font-bold text-slate-950">Travel reality</h3><p className="mt-3 text-sm leading-6 text-slate-700"><strong>Streaming:</strong> {provider.streaming}</p><p className="mt-3 text-sm leading-6 text-slate-700"><strong>Restrictive networks:</strong> {provider.restrictive}</p></div></div>
            <div className="mt-8 grid gap-5 md:grid-cols-2"><div><h3 className="text-lg font-bold text-slate-950">Pricing and support</h3><p className="mt-3 text-sm leading-6 text-slate-700">{provider.pricing}</p><p className="mt-3 text-sm leading-6 text-slate-700">{provider.support}</p></div><div><h3 className="text-lg font-bold text-slate-950">Privacy and audits</h3><p className="mt-3 text-sm leading-6 text-slate-700">{provider.privacy}</p><p className="mt-3 text-sm leading-6 text-slate-700">{provider.audit}</p></div></div>
            <div className="mt-8 grid gap-5 md:grid-cols-2"><div className="rounded-lg border border-brand-100 bg-brand-50 p-5"><h3 className="font-bold text-slate-950">Who should choose it</h3><p className="mt-3 text-sm leading-6 text-slate-700">{provider.choose}</p></div><div className="rounded-lg border border-rose-100 bg-rose-50 p-5"><h3 className="font-bold text-slate-950">Who should skip it</h3><p className="mt-3 text-sm leading-6 text-slate-700">{provider.skip}</p></div></div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-slate-950">Travel snapshot</h3>
            <dl className="mt-5 grid gap-4 text-sm"><div><dt className="font-semibold text-slate-950">Coverage</dt><dd className="mt-1 text-slate-700">{provider.countries}</dd></div><div><dt className="font-semibold text-slate-950">Devices</dt><dd className="mt-1 text-slate-700">{provider.devices}</dd></div><div><dt className="font-semibold text-slate-950">Refund</dt><dd className="mt-1 text-slate-700">{provider.refund}</dd></div></dl>
            <div className="mt-6 grid gap-3">{provider.links.map((link) => <Link key={link.href} className="font-semibold text-brand-700 hover:text-brand-800" to={link.href}>{link.label}</Link>)}</div>
            {provider.affiliateProvider && provider.ctaLabel ? <div className="mt-6"><AffiliateButton provider={provider.affiliateProvider}>{provider.ctaLabel}</AffiliateButton></div> : null}
          </aside>
        </div>
      </article>
    </Section>)}

    <Section className="bg-slate-50"><SectionHeading eyebrow="Travel scenarios" title="Best VPN by Travel Situation" description="Use these as starting points, then check your destination, devices, and account needs." /><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{scenarios.map(([title, body]) => <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-700">{body}</p></article>)}</div></Section>

    <Section><SectionHeading eyebrow="Need question" title="Do You Need a VPN While Traveling?" /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">A VPN is useful while traveling when it solves a specific problem: shared Wi-Fi, local-network visibility, ISP or hotspot visibility, location flexibility, restrictive networks, or account access from abroad. It adds less value if you mostly use mobile data, avoid sensitive browsing on unknown networks, and already keep strong account security in place.</p><Link className="mt-5 inline-flex font-semibold text-brand-700 hover:text-brand-800" to="/are-vpns-worth-it">Read Are VPNs Worth It?</Link></div></Section>

    <Section className="bg-slate-50"><SectionHeading eyebrow="Public Wi-Fi" title="Public Wi-Fi While Traveling" /><div className="mt-8 grid gap-5 lg:grid-cols-2"><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><SearchCheck className="text-brand-700" aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">What the VPN helps with</h3><p className="mt-3 text-sm leading-6 text-slate-700">A VPN can reduce what a hotel, airport, cafe, or hotspot operator can see about your traffic and can help keep local-network snooping away from unencrypted or poorly protected traffic.</p></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><AlertCircle className="text-rose-600" aria-hidden="true" /><h3 className="mt-4 text-lg font-bold text-slate-950">What it does not fix</h3><p className="mt-3 text-sm leading-6 text-slate-700">It does not stop phishing, malware, fake hotspots, unsafe downloads, weak passwords, compromised accounts, or risky behavior. HTTPS, MFA, updates, and password hygiene still matter.</p></article></div></Section>

    <Section><SectionHeading eyebrow="Streaming" title="Streaming While Abroad" description="A VPN can sometimes help with home-service access, but it cannot promise a working catalog." /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">Streaming rights, service terms, VPN blocking, changing IP databases, local laws, and performance all matter. Download media before travel when possible, and do not buy a VPN solely because it claims permanent access to one streaming service.</p></div></Section>

    <Section className="bg-slate-50"><SectionHeading eyebrow="Restrictive destinations" title="Traveling to Restrictive Countries" /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">VPN laws and enforcement vary by country and can change. App stores may restrict VPN apps, some providers may not work reliably, and obfuscation is not a guarantee. Install and test before departure, read destination guidance, and follow local law. This guide does not provide instructions for bypassing government controls.</p></div></Section>

    <Section><SectionHeading eyebrow="Trip length" title="Short Trip Versus Long-Term Travel" /><div className="mt-8 grid gap-5 md:grid-cols-2"><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Short trip</h3><p className="mt-3 text-sm leading-6 text-slate-700">Prefer monthly or weekly options, clear refund rules, easy cancellation, and a provider you can test before leaving. Mullvad and IVPN stand out here.</p></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Long-term travel</h3><p className="mt-3 text-sm leading-6 text-slate-700">Prioritize country coverage, support, renewal pricing, device limits, mobile reliability, and recovery planning over the lowest teaser price.</p></article></div></Section>

    <Section className="bg-slate-50"><SectionHeading eyebrow="Families and students" title="VPNs for Families, Students, and Business Travel" /><div className="mt-8 grid gap-5 lg:grid-cols-3"><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Families and many devices</h3><p className="mt-3 text-sm leading-6 text-slate-700">Connection limits, account-sharing terms, streaming devices, children's devices, and router use matter. Surfshark is the easiest starting point for many-device travel.</p></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Students abroad</h3><p className="mt-3 text-sm leading-6 text-slate-700">Budget, campus networks, dorm Wi-Fi, account recovery, and multi-device needs matter. Start with Proton VPN for privacy or Surfshark for value.</p></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Business travel</h3><p className="mt-3 text-sm leading-6 text-slate-700">Employer VPNs and company security policies come first. Do not use a consumer VPN to bypass managed-device, workplace, or IT controls.</p></article></div></Section>

    <Section><SectionHeading eyebrow="Checklist" title="Travel VPN Checklist" /><div className="mt-8 grid gap-5 lg:grid-cols-2"><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">Before departure</h3><BulletList items={checklistBefore} /></article><article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">During travel</h3><BulletList items={checklistDuring} /></article></div></Section>

    <Section className="bg-slate-50"><SectionHeading eyebrow="Free options" title="Free VPNs for Travel" /><div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><p className="text-base leading-7 text-slate-700">A reputable free VPN can work as a backup for light browsing, but travel quickly exposes free-plan limits: data caps, location limits, congestion, streaming restrictions, one-device rules, and weaker support. Proton VPN Free is the best free backup for unlimited data, while Windscribe Free is useful for location flexibility. Frequent travelers usually outgrow free tiers.</p><div className="mt-5 flex flex-wrap gap-4"><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/best-free-vpns">Best Free VPNs</Link><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/guides/free-vpn-vs-paid">Free VPN vs Paid VPN</Link></div></div></Section>

    <Section><SectionHeading eyebrow="Complements" title="VPN Alternatives and Complements" /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Mobile data", "HTTPS", "Encrypted DNS", "Private browsing", "Tracker blocking", "MFA", "Password managers", "Employer VPNs", "Travel routers", "Offline maps and media", "Software updates", "Recovery codes"].map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800 shadow-soft">{item}</div>)}</div><p className="mt-6 text-sm leading-6 text-slate-700">A VPN is one layer. It should not replace account recovery planning, MFA, software updates, or safe browsing.</p></Section>

    <Section className="bg-slate-50"><SectionHeading eyebrow="FAQ" title="Travel VPN Questions" /><div className="mt-8 grid gap-4">{faqItems.map(([question, answer]) => <article key={question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><h3 className="text-lg font-bold text-slate-950">{question}</h3><p className="mt-3 text-base leading-7 text-slate-700">{answer}</p></article>)}</div></Section>

    <Section><SectionHeading eyebrow="Evidence checked" title="Sources Used for This Guide" description="Official provider pages are used for volatile product facts. Government, FTC, and EFF guidance support safety and legal caution." /><div className="mt-8 grid gap-3 md:grid-cols-2">{evidenceLinks.map(([title, href]) => <a key={href} className="flex items-start gap-2 rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-brand-700 hover:bg-brand-50" href={href} rel="noreferrer" target="_blank"><span>{title}</span><ExternalLink className="mt-0.5 shrink-0" size={15} aria-hidden="true" /></a>)}</div></Section>

    <Section className="bg-slate-50"><div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft"><ShieldCheck className="text-brand-700" aria-hidden="true" /><h2 className="mt-4 text-3xl font-bold text-slate-950">Final Recommendation</h2><p className="mt-4 text-base leading-7 text-slate-700">Start with NordVPN if you want the best overall travel fit. Choose Surfshark for families and many devices, Proton VPN for privacy transparency and a free backup option, ExpressVPN for simple premium apps, Mullvad for short-trip privacy, and IVPN for high-transparency privacy controls. Check your destination's rules, test before departure, and never assume streaming or restrictive-network access is guaranteed.</p><div className="mt-6 flex flex-wrap gap-4"><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/vpn">Open the VPN Hub</Link><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/are-vpns-worth-it">Are VPNs Worth It?</Link><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/guides/best-vpns-for-beginners">Best VPNs for Beginners</Link><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/best-free-vpns">Best Free VPNs</Link><Link className="font-semibold text-brand-700 hover:text-brand-800" to="/guides/vpn-buying-guide">VPN Buying Guide</Link></div><p className="mt-6 text-sm leading-6 text-slate-600">Use the Better Software Buyer Checklist below before paying for another subscription.</p><div className="mt-6"><AffiliateButton provider="vpn-comparison">Use the VPN Buying Guide</AffiliateButton></div></div></Section>

    <Newsletter />
  </>;
}
