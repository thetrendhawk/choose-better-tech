import { AlertCircle, CheckCircle2, KeyRound, ListChecks, SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateButton } from "../components/affiliate/AffiliateButton";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import type { AffiliateProvider } from "../data/affiliateLinks";
import { site } from "../utils/site";

const pagePath = "/best-free-password-managers";
const pageTitle = "Best Free Password Managers in 2026";
const pageDescription = "Compare Bitwarden, Proton Pass, NordPass, and RoboForm free plans by device limits, storage, privacy, sharing, passkeys, and upgrade restrictions.";
const checkedDate = "July 10, 2026";

type FreePlan = {
  name: string;
  label: string;
  bestFor: string;
  storage: string;
  deviceAccess: string;
  sessions: string;
  sharing: string;
  restriction: string;
  verdict: string;
  choose: string;
  skip: string;
  strengths: string[];
  limitations: string[];
  paidAdds: string[];
  reviewHref?: string;
  affiliateProvider?: AffiliateProvider;
  ctaLabel?: string;
  links: Array<{ label: string; href: string }>;
};

const recommendations = [
  {
    label: "Best overall free option",
    product: "Bitwarden Free",
    note: "Unlimited stored logins, notes, cards, and identities, with cross-device access and sync."
  },
  {
    label: "Best privacy-focused free option",
    product: "Proton Pass Free",
    note: "Unlimited logins on unlimited devices, plus aliases and privacy-first positioning."
  },
  {
    label: "Best simple free option",
    product: "NordPass Free",
    note: "Clean mainstream UX, but one active session on one device is a real daily limit."
  },
  {
    label: "Best for one-device form filling",
    product: "RoboForm Free",
    note: "Useful if you mainly work from one device and value RoboForm's form-filling workflow."
  },
  {
    label: "Best built-in alternative",
    product: "Browser password managers",
    note: "Good for zero-friction saving inside one browser or account ecosystem, weaker for portability."
  }
];

const plans: FreePlan[] = [
  {
    name: "Bitwarden Free",
    label: "Best overall free password manager for most users",
    bestFor: "Most people who want a free manager they can use long term",
    storage: "Unlimited logins, notes, cards, and identities",
    deviceAccess: "Access and sync across devices",
    sessions: "No one-active-session limit found in official plan docs",
    sharing: "One-to-one sharing through a free two-person organization",
    restriction: "Premium features such as integrated TOTP, vault health reports, attachments, emergency access, and priority support require payment",
    verdict: "Bitwarden Free is the strongest all-around free choice because it does not make ordinary cross-device use feel like a trial.",
    choose: "Choose Bitwarden if your priority is a practical free password manager with unlimited storage, cross-device access, import/export, basic two-step login, and a transparent product story.",
    skip: "Skip it if you want the softest consumer interface, built-in email aliases, or premium family recovery tools without paying.",
    strengths: [
      "Official plan documentation lists unlimited secure storage for logins, notes, cards, and identities.",
      "Access and storage sync across devices are included in the free personal plan.",
      "Free two-step login options include hardware security key, authenticator app, or email.",
      "The existing CBT review supports Bitwarden as the strongest free-plan and transparency pick."
    ],
    limitations: [
      "Broader family sharing requires a paid family organization.",
      "Integrated authenticator, encrypted file attachments, vault health reports, emergency access, and priority support are premium features.",
      "The interface is more utilitarian than the most polished paid managers."
    ],
    paidAdds: [
      "Integrated TOTP storage",
      "Encrypted file attachments",
      "Vault health reports",
      "Emergency access",
      "More complete family and business sharing"
    ],
    reviewHref: "/reviews/bitwarden-review",
    affiliateProvider: "bitwarden",
    ctaLabel: "Read the Bitwarden Review",
    links: [
      { label: "Bitwarden Review", href: "/reviews/bitwarden-review" },
      { label: "Bitwarden vs Proton Pass", href: "/comparisons/bitwarden-vs-proton-pass" },
      { label: "Bitwarden vs NordPass", href: "/comparisons/bitwarden-vs-nordpass" }
    ]
  },
  {
    name: "Proton Pass Free",
    label: "Best free choice for privacy-focused users and aliases",
    bestFor: "Privacy-focused users, Proton users, and people who want aliases in the free experience",
    storage: "Unlimited logins, notes, and credit cards",
    deviceAccess: "Unlimited devices with browser, mobile, and desktop apps",
    sessions: "No one-active-session limit found in official pricing docs",
    sharing: "Paid plans add broader secure sharing features",
    restriction: "Free plan includes 10 hide-my-email aliases; paid plans add unlimited aliases, integrated 2FA authenticator, emergency access, file attachments, and broader sharing",
    verdict: "Proton Pass Free is the best privacy-focused free alternative to Bitwarden, especially if aliases and Proton ecosystem fit matter.",
    choose: "Choose Proton Pass if privacy positioning, email aliases, passkeys, and a polished free cross-device experience matter more than Bitwarden-style self-hosting.",
    skip: "Skip it if you want the most established password-manager ecosystem, self-hosting, or the broadest free sharing model.",
    strengths: [
      "Official pricing lists unlimited logins, notes, credit cards, and unlimited devices on Proton Free.",
      "The free plan includes browser, mobile, and desktop apps, password import, and passkeys on all devices.",
      "Proton says free and paid Pass plans offer the same level of privacy protection for basic password-manager use.",
      "The existing CBT review supports Proton Pass as a strong privacy-focused free-plan choice."
    ],
    limitations: [
      "The free alias limit is finite, so alias-heavy users may feel upgrade pressure.",
      "Paid plans add integrated 2FA authenticator, emergency access, file attachments, dark web monitoring, and broader sharing.",
      "The product is newer than Bitwarden and 1Password as a password-manager category entrant."
    ],
    paidAdds: [
      "Unlimited hide-my-email aliases",
      "Integrated 2FA authenticator",
      "Secure vault and link sharing",
      "Dark web monitoring",
      "Emergency access and file attachments"
    ],
    reviewHref: "/reviews/proton-pass-review",
    affiliateProvider: "protonpass",
    ctaLabel: "Check Proton Pass Plans",
    links: [
      { label: "Proton Pass Review", href: "/reviews/proton-pass-review" },
      { label: "Bitwarden vs Proton Pass", href: "/comparisons/bitwarden-vs-proton-pass" },
      { label: "Proton Pass vs NordPass", href: "/comparisons/proton-pass-vs-nordpass" }
    ]
  },
  {
    name: "NordPass Free",
    label: "Best simple free option if one active session is acceptable",
    bestFor: "Users who want simple mainstream UX and can tolerate one active session at a time",
    storage: "Core vault data, with synced data across devices",
    deviceAccess: "Can install apps and extensions on many devices; data syncs between devices",
    sessions: "One active session on one device",
    sharing: "Secure sharing and emergency access are Premium features in official support docs",
    restriction: "Switching between phone and computer can require session friction because Free allows one active session",
    verdict: "NordPass Free is usable, but the one-active-session rule makes it less comfortable as a long-term free plan for multi-device users.",
    choose: "Choose NordPass Free if you want a clean mainstream password manager and mostly use one active device at a time.",
    skip: "Skip it if you constantly move between a phone, laptop, tablet, and browser and do not want session friction.",
    strengths: [
      "Official support says Free and Paid users can install apps and extensions on as many devices as they want.",
      "Official support says all data is synchronized between different devices.",
      "The existing CBT review supports NordPass as simple and beginner-friendly."
    ],
    limitations: [
      "Official support says NordPass Free allows one active session on one device.",
      "Premium is the better fit for simultaneous use across unlimited devices.",
      "Authenticator, breach scanning, Password Health, email masking, secure sharing, attachments, and emergency access are Premium reasons."
    ],
    paidAdds: [
      "Unlimited simultaneous device sessions",
      "Authenticator",
      "Data Breach Scanner and Password Health",
      "Email Masking",
      "Secure item sharing, file attachments, and Emergency Access"
    ],
    reviewHref: "/reviews/nordpass-review",
    affiliateProvider: "nordpass",
    ctaLabel: "Check NordPass Plans",
    links: [
      { label: "NordPass Review", href: "/reviews/nordpass-review" },
      { label: "Bitwarden vs NordPass", href: "/comparisons/bitwarden-vs-nordpass" },
      { label: "Proton Pass vs NordPass", href: "/comparisons/proton-pass-vs-nordpass" }
    ]
  },
  {
    name: "RoboForm Free",
    label: "Best free option for one-device users who value form filling",
    bestFor: "Single-device users who regularly fill forms",
    storage: "Unlimited passwords on a single device",
    deviceAccess: "One device on the free plan",
    sessions: "One-device workflow; paid Premium adds access on all devices",
    sharing: "Secure sharing and emergency access appear in paid-plan features",
    restriction: "The one-device limit makes it much narrower than Bitwarden or Proton Pass for everyday multi-device use",
    verdict: "RoboForm Free is a narrow but legitimate fit for one-device users who care about form filling more than cross-device sync.",
    choose: "Choose RoboForm Free if you mainly use one computer and want to evaluate RoboForm's form-filling workflow before paying.",
    skip: "Skip it if you need phone-plus-computer access without paying or if transparency and open-source evidence are your top priorities.",
    strengths: [
      "Official pricing advertises unlimited passwords on a single device for the free plan.",
      "The existing CBT review supports RoboForm's form-filling strengths for identity, shipping, billing, and repetitive forms.",
      "Official pricing lists multiple account-protection features in the personal-plan table."
    ],
    limitations: [
      "One-device access is a major limitation for most phone-plus-computer users.",
      "Cloud backup, all-device access, web access, emergency access, and broader sharing are paid-plan reasons.",
      "The existing CBT review preserves transparency caveats around public technical detail."
    ],
    paidAdds: [
      "Access on all devices",
      "Cloud backup and web access",
      "Emergency access",
      "Secure sharing of items and folders",
      "Priority email support"
    ],
    reviewHref: "/reviews/roboform-review",
    affiliateProvider: "roboform",
    ctaLabel: "Check RoboForm Plans",
    links: [
      { label: "RoboForm Review", href: "/reviews/roboform-review" },
      { label: "Bitwarden Review", href: "/reviews/bitwarden-review" },
      { label: "Best Password Managers for Beginners", href: "/best-password-managers-for-beginners" }
    ]
  },
  {
    name: "Browser-built-in managers",
    label: "Best zero-friction alternative inside one ecosystem",
    bestFor: "Users staying inside Chrome, Apple, Edge, Firefox, or another browser/account ecosystem",
    storage: "Depends on browser or platform account",
    deviceAccess: "Usually strongest inside the vendor's own browser, OS, or account sync system",
    sessions: "No paid password-manager session model, but account/device/browser boundaries still matter",
    sharing: "Varies; Chrome supports family-group password sharing, while other ecosystems differ",
    restriction: "Portability, cross-browser use, family workflows, emergency access, and dedicated-manager controls can be weaker",
    verdict: "Built-in managers are better than reusing passwords, but they are not a full equivalent to a dedicated manager when portability and independence matter.",
    choose: "Use a built-in manager if you want the least setup and stay mostly inside one browser or platform ecosystem.",
    skip: "Choose a dedicated manager if you need cross-browser portability, stronger family workflows, emergency planning, easier exports, or product independence.",
    strengths: [
      "Chrome can save passwords to a Google Account for use across devices and some apps.",
      "Chrome can export saved passwords, check for compromised passwords, and share with family-group members.",
      "Firefox supports exporting saved login data to CSV, which helps migration."
    ],
    limitations: [
      "Browser managers are not identical; each ecosystem handles sync, export, sharing, passkeys, and platform support differently.",
      "Exported password files can be readable text and must be handled carefully.",
      "Moving between browsers or platforms can add friction compared with a dedicated cross-platform manager."
    ],
    paidAdds: [
      "Dedicated managers usually add more portable vaults",
      "Dedicated managers usually offer clearer import/export workflows",
      "Paid plans can add family sharing, emergency access, health reports, monitoring, and support"
    ],
    links: [
      { label: "Password Manager Decision Hub", href: "/password-managers" },
      { label: "Best Password Managers for Beginners", href: "/best-password-managers-for-beginners" },
      { label: "How We Review Software", href: "/about/how-we-review-software" }
    ]
  }
];

const scenarios = [
  { title: "I am a student.", guidance: "Start with Bitwarden Free if you need dependable cross-device use without paying. Choose Proton Pass Free if aliases and privacy tools matter more." },
  { title: "I am replacing browser-saved passwords.", guidance: "Bitwarden and Proton Pass are the strongest first dedicated-manager options. Built-in managers are still better than password reuse if you are not ready to move." },
  { title: "I need access on several devices.", guidance: "Choose Bitwarden Free or Proton Pass Free. NordPass Free syncs, but the one-active-session limit can become annoying." },
  { title: "I only use one computer.", guidance: "RoboForm Free becomes more reasonable if form filling is important. Bitwarden still gives more room to grow." },
  { title: "I want privacy tools and aliases.", guidance: "Start with Proton Pass Free. Its free plan includes 10 hide-my-email aliases and cross-device use." },
  { title: "I need family sharing.", guidance: "A paid family plan is usually more realistic. Free one-to-one sharing can help, but household workflows often need more control." },
  { title: "I want emergency access.", guidance: "Expect to pay. Bitwarden, Proton Pass, NordPass, and RoboForm all treat emergency access as a paid-plan reason in current evidence." },
  { title: "I need advanced recovery options.", guidance: "Compare paid plans carefully. Free plans can be strict when the account password or recovery information is lost." }
];

const faqItems = [
  {
    question: "What is the best free password manager?",
    answer: "Bitwarden Free is the best free password manager for most users because it includes unlimited storage for core vault items plus cross-device access and sync. Proton Pass Free is a close alternative for privacy-focused users who want aliases and a polished free experience."
  },
  {
    question: "Is Bitwarden really free?",
    answer: "Yes. Bitwarden's official plan documentation lists a Free personal plan with unlimited secure storage for logins, notes, cards, and identities, plus cross-device access and sync. Paid plans add premium features such as integrated TOTP, attachments, vault health reports, emergency access, and priority support."
  },
  {
    question: "Is Proton Pass Free better than Bitwarden Free?",
    answer: "Not universally. Proton Pass Free is better if you value Proton's privacy ecosystem, hide-my-email aliases, and a polished privacy-focused experience. Bitwarden Free is better for most users who want the strongest general-purpose free plan and broader transparency/self-hosting fit."
  },
  {
    question: "Can I use a free password manager on multiple devices?",
    answer: "Yes, but the details vary. Bitwarden Free and Proton Pass Free support cross-device use. NordPass Free can be installed on many devices and syncs data, but official support says it allows one active session on one device. RoboForm Free is limited to one device."
  },
  {
    question: "Is NordPass Free limited to one device?",
    answer: "NordPass says Free users can install apps and extensions on as many devices as they want and that data syncs between devices. The key restriction is active use: NordPass Free allows one active session on one device."
  },
  {
    question: "Is RoboForm Free worth using?",
    answer: "RoboForm Free is worth considering if you mainly use one device and value RoboForm's form-filling workflow. It is not the strongest long-term free choice for people who need phone-plus-computer access without paying."
  },
  {
    question: "Are free password managers safe?",
    answer: "A reputable free password manager can be safer than reusing passwords or storing them in notes. Safety still depends on a strong account password, MFA where available, protected recovery information, updated apps, and careful extension installation."
  },
  {
    question: "Do free password managers support passkeys?",
    answer: "Some do. Proton's pricing page lists passkeys supported on all devices for Proton Free, and Bitwarden's existing CBT research supports passkey management on the free plan. Passkey support can vary by platform, browser, and workflow, so verify current docs before relying on it."
  },
  {
    question: "Can families use a free password manager?",
    answer: "A free plan can work for one person or limited sharing, but families usually outgrow free tiers. Bitwarden supports a free two-person organization, while broader family sharing, emergency access, admin controls, and separate household accounts usually point toward paid family plans."
  },
  {
    question: "Should I use Chrome or Apple's built-in password manager instead?",
    answer: "Use a built-in manager if you want the easiest possible setup and stay inside one browser or platform ecosystem. Choose a dedicated manager if you need cross-browser portability, family workflows, emergency access, clearer export/import options, or independence from one ecosystem."
  },
  {
    question: "Can I move my passwords later?",
    answer: "Usually yes, but exports require care. Chrome and Firefox document password export options; Firefox warns that exported CSV files are readable by anyone who can view the file. Treat exports as sensitive and delete temporary files when finished."
  },
  {
    question: "What features are usually missing from free plans?",
    answer: "Free plans often limit advanced sharing, emergency access, integrated authenticator features, attachments, password-health reporting, breach monitoring, family controls, simultaneous-device sessions, and priority support. The exact limits vary by provider."
  }
];

const evidenceLinks = [
  { label: "Bitwarden Password Manager Plans", href: "https://bitwarden.com/help/password-manager-plans/" },
  { label: "Proton Pass Pricing and Plans", href: "https://proton.me/pass/pricing" },
  { label: "NordPass Premium vs Free", href: "https://support.nordpass.com/hc/en-us/articles/360006700458-Premium-vs-Free-version-of-NordPass" },
  { label: "RoboForm Personal Pricing", href: "https://www.roboform.com/pricing-personal" },
  { label: "1Password Membership", href: "https://support.1password.com/explore/membership/" },
  { label: "Google Chrome Password Manager Help", href: "https://support.google.com/chrome/answer/95606" },
  { label: "Firefox Password Export Help", href: "https://support.mozilla.org/en-US/kb/export-login-data-firefox" }
];

const secondaryButtonClasses = "inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}

function BulletList({ items, tone = "brand" }: { items: string[]; tone?: "brand" | "slate" }) {
  const Icon = tone === "brand" ? CheckCircle2 : AlertCircle;
  return (
    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon className={["mt-0.5 shrink-0", tone === "brand" ? "text-brand-700" : "text-slate-500"].join(" ")} size={17} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InternalLinkButton({ href, children }: { href: string; children: string }) {
  return <Link className={secondaryButtonClasses} to={href}>{children}</Link>;
}

function PlanCta({ plan }: { plan: FreePlan }) {
  if (!plan.affiliateProvider || !plan.ctaLabel || !plan.reviewHref || plan.affiliateProvider === "bitwarden") {
    return plan.reviewHref && plan.ctaLabel ? <InternalLinkButton href={plan.reviewHref}>{plan.ctaLabel}</InternalLinkButton> : null;
  }

  return <AffiliateButton provider={plan.affiliateProvider}>{plan.ctaLabel}</AffiliateButton>;
}

export function BestFreePasswordManagersPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: pageDescription,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + pagePath,
    datePublished: "2026-07-10",
    dateModified: "2026-07-10"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "Best Free Password Managers", item: site.url + pagePath }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: plans.map((plan, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: plan.name,
      url: plan.reviewHref ? site.url + plan.reviewHref : site.url + pagePath
    }))
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AffiliateDisclosure />

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Password Manager Guide</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{pageTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">We compare the free plans that are genuinely usable long term and explain the device limits, missing features, and upgrade tradeoffs that matter.</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">The short version: Bitwarden Free is the strongest all-around free choice for most people. Proton Pass Free is the strongest privacy-focused alternative. NordPass Free and RoboForm Free can work, but their free restrictions matter. Rankings are independent of affiliate availability.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#quick-recommendations">See Quick Picks</a>
              <InternalLinkButton href="/best-password-managers-for-beginners">Compare Paid and Free Options</InternalLinkButton>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-lift backdrop-blur">
            <ShieldCheck className="text-brand-700" size={24} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">Main Recommendation</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">Start with Bitwarden Free unless you specifically want Proton's privacy ecosystem and aliases. Avoid treating NordPass Free or RoboForm Free as equivalent cross-device free plans.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-700">Official facts checked {checkedDate}</p>
          </aside>
        </Container>
      </section>

      <Section id="quick-recommendations" className="bg-white">
        <SectionHeading eyebrow="Quick recommendations" title="The Free Plans Worth Considering" description="These are fit-based labels, not paid placements. Bitwarden receives the top free recommendation even though the affiliate registry marks it internal-only." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {recommendations.map((item) => (
            <article key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{item.label}</p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{item.product}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Comparison table" title="Free Password Manager Limits Compared" description="Device access and simultaneous sessions are separated because they are not the same thing." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[62rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold" scope="col">Password manager</th>
                <th className="px-4 py-4 font-semibold" scope="col">Best for</th>
                <th className="px-4 py-4 font-semibold" scope="col">Password storage</th>
                <th className="px-4 py-4 font-semibold" scope="col">Device access</th>
                <th className="px-4 py-4 font-semibold" scope="col">Simultaneous-session limit</th>
                <th className="px-4 py-4 font-semibold" scope="col">Sharing</th>
                <th className="px-4 py-4 font-semibold" scope="col">Main free-plan restriction</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.name} className="border-b border-slate-200 last:border-0">
                  <th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950" scope="row">{plan.name}</th>
                  <td className="px-4 py-4 text-slate-700">{plan.bestFor}</td>
                  <td className="px-4 py-4 text-slate-700">{plan.storage}</td>
                  <td className="px-4 py-4 text-slate-700">{plan.deviceAccess}</td>
                  <td className="px-4 py-4 text-slate-700">{plan.sessions}</td>
                  <td className="px-4 py-4 text-slate-700">{plan.sharing}</td>
                  <td className="px-4 py-4 text-slate-700">{plan.restriction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our verdict" title="Bitwarden Is the Free Plan to Beat" />
        <div className="mt-8 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-slate-700">Bitwarden Free is the strongest all-around free choice for most users because it provides unlimited storage and cross-device access without requiring payment. Proton Pass Free is a strong privacy-focused alternative with generous cross-device use, aliases, and passkey support. NordPass Free is usable, but its one-active-session restriction matters if you move between devices. RoboForm Free is much narrower because it is limited to one device. Browser-built-in managers are convenient, but they are weaker when portability and ecosystem independence matter.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">No hands-on testing was performed for this article. Current plan facts come from official vendor documentation checked on {checkedDate}. Product judgments also use existing Choose Better Tech reviews, comparison pages, and canonical research.</p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Methodology" title="How We Evaluated Free Plans" description="A free password manager is useful only if it can survive everyday use without quickly turning into an upgrade prompt." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <KeyRound className="text-brand-700" size={22} aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-slate-950">Free-plan utility</h3>
            <BulletList items={["Permanent free-plan availability versus temporary trial", "Password and item storage limits", "Device installation and synchronization", "Simultaneous-session restrictions", "Autofill, passkeys, MFA, sharing, and recovery"]} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <SearchCheck className="text-brand-700" size={22} aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-slate-950">Evidence basis</h3>
            <BulletList items={["Official pricing and support documentation", "Existing CBT reviews and canonical research", "Import/export and portability documentation", "Upgrade pressure and paid-feature boundaries", "Privacy, security architecture, and support-document clarity"]} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <ListChecks className="text-brand-700" size={22} aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-slate-950">What we did not do</h3>
            <BulletList tone="slate" items={["We did not invent hands-on test results.", "We did not rank products by affiliate availability.", "We did not treat browser managers as identical.", "We did not include 1Password as a free recommendation because official materials describe a free trial, not a permanent free personal tier."]} />
          </article>
        </div>
      </Section>

      {plans.map((plan) => (
        <Section key={plan.name}>
          <article className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{plan.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">{plan.name}</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_18rem]">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-base leading-8 text-slate-700">{plan.verdict}</p>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">Why it stands out</h3>
                    <BulletList items={plan.strengths} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">Main limitations</h3>
                    <BulletList items={plan.limitations} tone="slate" />
                  </div>
                </div>
                <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-bold text-slate-950">What payment usually adds here</h3>
                  <BulletList items={plan.paidAdds} />
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-lg border border-brand-100 bg-brand-50 p-5">
                    <h3 className="font-bold text-slate-950">Who should choose it</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{plan.choose}</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">Who should skip it</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{plan.skip}</p>
                  </div>
                </div>
              </div>
              <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-base font-bold text-slate-950">Read next</h3>
                <div className="mt-5 grid gap-3">
                  {plan.reviewHref ? <InternalLinkButton href={plan.reviewHref}>Full CBT Review</InternalLinkButton> : null}
                  <PlanCta plan={plan} />
                </div>
                <h4 className="mt-6 text-sm font-bold text-slate-950">Related paths</h4>
                <ul className="mt-3 grid gap-2 text-sm leading-6">
                  {plan.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link className="font-semibold text-brand-700 hover:text-brand-800" to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        </Section>
      ))}

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Free versus paid" title="What Payment Usually Adds" description="Not every provider gates the same features, but these are the common reasons free plans stop being enough." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Emergency access", "Advanced sharing and family controls", "Integrated authenticator features", "Advanced MFA options", "Attachments and secure files", "Breach monitoring and password-health reports", "Simultaneous-device sessions", "Priority support"].map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <h3 className="text-base font-bold text-slate-950">{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Who should use a free plan?" title="Match the Free Plan to Your Actual Workflow" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {scenarios.map((scenario) => (
            <article key={scenario.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <h3 className="text-lg font-bold text-slate-950">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.guidance}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Upgrade signals" title="When Should You Upgrade?" />
        <div className="mt-8 max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-base leading-8 text-slate-700">Upgrade when a free restriction creates real friction: you need family sharing, emergency access, better recovery workflows, advanced MFA, monitoring, attachments, or simultaneous-device sessions. You do not need to pay just because a paid plan exists. If Bitwarden Free or Proton Pass Free covers your day-to-day use, staying free is a reasonable choice.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Security and safety" title="Free Does Not Mean Set-and-Forget" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Protect the password manager itself</h3>
            <BulletList items={["Use a strong unique account password.", "Enable MFA where available.", "Protect recovery codes, files, and trusted contacts.", "Keep apps and browser extensions updated.", "Verify extensions before installing them."]} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Plan for migration and recovery</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Importing from browsers or another manager is usually possible, but exported files can be sensitive. Firefox explicitly warns that exported CSV passwords are readable by anyone who can view the file. Treat exports like temporary secrets, and delete them when finished.</p>
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Evidence checked" title="Sources Used for Current Plan Facts" description="These official sources were checked on July 10, 2026. CBT review judgments also rely on existing canonical research and published reviews." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {evidenceLinks.map((source) => (
            <a key={source.href} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-brand-700 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" href={source.href} rel="noreferrer noopener" target="_blank">
              {source.label}
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Free Password Manager Questions" />
        <div className="mt-8 grid gap-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <ListChecks className="shrink-0 text-brand-700" size={19} aria-hidden="true" />
                {faq.question}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Final recommendation</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Choose the Free Plan That Will Still Work Next Month</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">For most people, that means Bitwarden Free. Choose Proton Pass Free if privacy tools, aliases, and the Proton ecosystem matter more. Use NordPass Free only if one active session is acceptable. Use RoboForm Free if you are mostly on one device and value form filling. Use a browser-built-in manager if zero setup matters more than portability.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">For the broader paid-versus-free decision, read the full <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/best-password-managers-for-beginners">Best Password Managers for Beginners</Link> guide, the <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/password-manager-vs-browser-passwords">browser passwords comparison</Link>, the <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/best-password-managers-for-families">family password manager guide</Link>, and the <Link className="font-semibold text-brand-700 hover:text-brand-800" to="/are-password-managers-safe">password-manager safety guide</Link> before choosing.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <InternalLinkButton href="/password-managers">Open Password Manager Hub</InternalLinkButton>
            <InternalLinkButton href="/password-manager-vs-browser-passwords">Compare Browser Passwords</InternalLinkButton>
            <InternalLinkButton href="/best-password-managers-for-families">Compare Family Plans</InternalLinkButton>
            <InternalLinkButton href="/are-password-managers-safe">Read the Safety Guide</InternalLinkButton>
            <InternalLinkButton href="/reviews/bitwarden-review">Read the Bitwarden Review</InternalLinkButton>
          </div>
        </div>
      </Section>

      <Newsletter />
    </>
  );
}
