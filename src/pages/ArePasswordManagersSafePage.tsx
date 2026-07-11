import { AlertCircle, CheckCircle2, ExternalLink, KeyRound, ListChecks, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const pagePath = "/are-password-managers-safe";
const pageTitle = "Are Password Managers Safe?";
const pageDescription = "Learn how password managers protect your vault, what happens during breaches, and how master passwords, MFA, audits, autofill, and recovery affect safety.";
const checkedDate = "July 11, 2026";

const quickAnswers = [
  {
    label: "Short answer",
    title: "Usually safer than reuse",
    body: "For most people, a reputable password manager is safer than reusing passwords because it makes long, unique passwords practical."
  },
  {
    label: "Main tradeoff",
    title: "Your vault becomes important",
    body: "A vault concentrates risk into one high-value account, so the account password, MFA, recovery setup, device security, and app updates matter."
  },
  {
    label: "Breach nuance",
    title: "Encrypted does not mean irrelevant",
    body: "A stolen encrypted vault is still serious. Weak master passwords, exposed metadata, older settings, or device compromise can change the risk."
  },
  {
    label: "Best setup",
    title: "Strong password plus MFA",
    body: "Use a unique account password, enable MFA or passkeys where available, verify extensions, protect recovery material, and replace reused passwords first."
  }
];

const riskRows = [
  { risk: "Provider breach", whatChanges: "Encrypted vault data, metadata, support systems, or account data may be exposed depending on the incident.", practicalMove: "Choose providers with strong encryption design, clear incident history, audits, and fast disclosure. Use a strong master password." },
  { risk: "Weak master password", whatChanges: "An attacker with encrypted vault data may be able to guess the vault password offline.", practicalMove: "Use a long, unique account password that is not reused anywhere else." },
  { risk: "Malware or full device compromise", whatChanges: "Vault encryption may not help once the device is compromised and the vault is unlocked.", practicalMove: "Keep devices updated, avoid untrusted software, and treat the device as part of vault security." },
  { risk: "Phishing", whatChanges: "A fake site or fake extension UI can trick users into entering the vault password or approving access.", practicalMove: "Use exact-domain filling, verify extension UI, prefer phishing-resistant MFA, and avoid entering secrets after unexpected prompts." },
  { risk: "Compromised email account", whatChanges: "Email can reset many accounts and may interact with password-manager recovery.", practicalMove: "Secure email first with a unique password, MFA, recovery review, and account alerts." },
  { risk: "Stolen device", whatChanges: "Local vault copies may exist on phones, laptops, or browser profiles.", practicalMove: "Use device encryption, screen locks, biometric unlock carefully, remote-wipe options, and quick account revocation." },
  { risk: "Browser-extension compromise", whatChanges: "Extensions sit close to web pages and login flows, which creates extra attack surface.", practicalMove: "Install only official extensions, keep them updated, review permissions, and avoid copycat extension listings." },
  { risk: "Insecure export", whatChanges: "CSV or exported vault files can expose passwords in readable form.", practicalMove: "Export only when needed, store temporarily, delete securely, and do not sync exports to ordinary cloud folders." },
  { risk: "Recovery failure", whatChanges: "Zero-knowledge systems may be unable to recover a lost account password without preconfigured recovery.", practicalMove: "Set up recovery codes, emergency access, trusted family workflows, or business recovery before you need them." },
  { risk: "Malicious update or supply-chain attack", whatChanges: "Client-side encryption does not fully protect against a compromised app update.", practicalMove: "Favor vendors with mature security programs, signed apps, disclosure channels, and public incident response." },
  { risk: "Insider or admin abuse", whatChanges: "Good encryption limits what a provider or employer admin can see, but organization controls and recovery policies still matter.", practicalMove: "Understand family or business admin powers, sharing controls, and account recovery policies." }
];

const providerExamples = [
  {
    name: "Bitwarden",
    evidence: "Documents end-to-end encryption, client-side key handling, PBKDF2/Argon2id options, public audits, open/source-available code, and a vulnerability disclosure program.",
    caveat: "Open source and audits improve scrutiny but do not prove every deployment, extension, update, or operational process is risk-free."
  },
  {
    name: "1Password",
    evidence: "Uses an account password plus a 128-bit Secret Key, SRP, client-side encryption, clipboard protections, verified browser protections, and third-party testing.",
    caveat: "The Secret Key improves resistance to off-device guessing but also makes recovery planning important because it is not a backup code."
  },
  {
    name: "Proton Pass",
    evidence: "Publishes a security model with end-to-end encryption, encrypted metadata claims, SRP, open-source apps, and recent third-party audit summaries.",
    caveat: "It is newer than some long-running password-manager products, so long-term operational history is thinner."
  },
  {
    name: "NordPass",
    evidence: "Documents zero-knowledge architecture, XChaCha20 positioning, Argon2id key derivation, and third-party audit activity.",
    caveat: "It is a closed-source commercial product, so readers rely more heavily on vendor disclosures and audit summaries."
  },
  {
    name: "RoboForm",
    evidence: "Documents AES-256, PBKDF2 SHA-256, local decryption, zero-knowledge claims, 2FA options, security testing, and a disclosure program.",
    caveat: "Public technical detail and transparency artifacts are thinner than for Bitwarden, Proton Pass, or 1Password."
  },
  {
    name: "Apple Passwords / iCloud Keychain",
    evidence: "Apple documents iCloud Keychain password and passkey syncing with end-to-end encryption and platform-level protections.",
    caveat: "The fit is strongest inside Apple's ecosystem; recovery and device trust still matter."
  },
  {
    name: "Google Password Manager",
    evidence: "Google documents passkey support, password-manager storage, breach warnings, and account-based sync across Chrome and Android workflows.",
    caveat: "It is convenient for Google/Chrome users but less independent than a dedicated cross-platform manager."
  },
  {
    name: "Microsoft Edge",
    evidence: "Microsoft documents local password encryption using OS storage and explains the limits of browser protection against logged-in-device compromise.",
    caveat: "Encrypted-at-rest browser storage does not defeat malware or an attacker with full access to the logged-in user profile."
  }
];

const sourceLinks = [
  { label: "CISA: Use Strong Passwords", href: "https://www.cisa.gov/secure-our-world/use-strong-passwords" },
  { label: "FTC password guidance", href: "https://consumer.ftc.gov/consumer-alerts/2018/03/its-national-password-day" },
  { label: "NIST SP 800-63B", href: "https://pages.nist.gov/800-63-4/sp800-63b.html" },
  { label: "FIDO Alliance passkeys", href: "https://fidoalliance.org/passkeys/" },
  { label: "Bitwarden security white paper", href: "https://bitwarden.com/help/bitwarden-security-white-paper/" },
  { label: "Bitwarden audits and compliance", href: "https://bitwarden.com/compliance/" },
  { label: "1Password security", href: "https://1password.com/security" },
  { label: "1Password Secret Key support", href: "https://support.1password.com/secret-key-security/" },
  { label: "Proton Pass security model", href: "https://proton.me/blog/proton-pass-security-model" },
  { label: "Proton Pass 2026 audit", href: "https://proton.me/business/blog/proton-pass-audit-2026" },
  { label: "NordPass security", href: "https://nordpass.com/security/" },
  { label: "NordPass Cure53 audit", href: "https://nordpass.com/blog/nordpass-business-independent-security-audit/" },
  { label: "RoboForm security", href: "https://www.roboform.com/security" },
  { label: "Apple iCloud data security", href: "https://support.apple.com/en-us/102651" },
  { label: "Apple iCloud Keychain security", href: "https://support.apple.com/guide/security/icloud-keychain-security-overview-sec1c89c6f3b/web" },
  { label: "Google passkeys", href: "https://developers.google.com/identity/passkeys" },
  { label: "Microsoft Edge password manager security", href: "https://learn.microsoft.com/en-us/deployedge/microsoft-edge-security-password-manager-security" },
  { label: "LastPass March 2023 incident update", href: "https://blog.lastpass.com/posts/security-incident-update-recommended-actions" },
  { label: "Dashlane 2026 security advisory", href: "https://support.dashlane.com/hc/en-us/articles/36038764990866-Security-advisory-Brute-force-attack-on-Dashlane-user-accounts" },
  { label: "USENIX 2020 browser password managers", href: "https://www.usenix.org/conference/usenixsecurity20/presentation/oesch" },
  { label: "USENIX 2022 password-manager adoption", href: "https://www.usenix.org/system/files/sec22-mayer.pdf" },
  { label: "USENIX 2025 extension phishing paper", href: "https://www.usenix.org/system/files/usenixsecurity25-anliker.pdf" },
  { label: "IACR ETH Zurich password-manager analysis", href: "https://eprint.iacr.org/2026/58" }
];

const faqItems = [
  {
    question: "Are password managers safe?",
    answer: "A reputable password manager is usually safer than reusing passwords, but it is not risk-free. Safety depends on the vault design, your account password, MFA, device security, recovery setup, extension hygiene, and the provider's security practices."
  },
  {
    question: "Is it safe to store all passwords in one password manager?",
    answer: "It can be safer than scattering reused passwords across accounts, but the password-manager account becomes high value. Use a long unique account password, enable MFA, protect recovery material, and secure the devices that unlock the vault."
  },
  {
    question: "Can password managers be hacked?",
    answer: "Yes. Providers, browser extensions, user devices, and user accounts can all be attacked. Strong vault encryption can limit what attackers get from provider-side data, but it does not make the whole system unhackable."
  },
  {
    question: "What happens if a password manager is breached?",
    answer: "The impact depends on what was exposed. Encrypted vaults are different from plaintext passwords, but stolen encrypted vaults can still be attacked offline. Metadata, account details, recovery systems, or support tooling may also matter."
  },
  {
    question: "Are zero-knowledge password managers safer?",
    answer: "Zero-knowledge design is valuable because the provider should not know your master password or hold plaintext vault data. It still does not protect against malware on your device, phishing, weak account passwords, bad recovery choices, or compromised app updates."
  },
  {
    question: "Can the password-manager company see my passwords?",
    answer: "With a well-designed end-to-end encrypted password manager, the company should not be able to see your saved passwords in plaintext. Read the provider's security model carefully because metadata, recovery features, and business controls can vary."
  },
  {
    question: "What is the biggest password-manager risk?",
    answer: "For ordinary users, the biggest risks are a weak or reused master password, no MFA, device malware, phishing, insecure exports, and poor recovery planning. Provider breaches matter too, but user-side setup often decides how bad an incident becomes."
  },
  {
    question: "Is a password manager safer than using the same password everywhere?",
    answer: "Yes for most people. Reuse means one leaked password can unlock many accounts. A password manager helps you use unique passwords so a breach at one site does not automatically compromise the rest of your life."
  },
  {
    question: "Is a password manager safer than writing passwords down?",
    answer: "Usually, especially for many online accounts. A written backup can be useful for emergency recovery if stored securely offline, but using paper as the main system does not scale well and can lead to short, reused, or outdated passwords."
  },
  {
    question: "Is a browser password manager safe enough?",
    answer: "A browser password manager is usually better than reuse. A dedicated password manager is usually stronger when you need cross-browser portability, family sharing, emergency access, clearer recovery planning, audit transparency, or independence from one platform."
  },
  {
    question: "Is Apple Passwords or iCloud Keychain safe?",
    answer: "Apple documents iCloud Keychain passwords and passkeys as end-to-end encrypted. It is a strong built-in option for people who live in Apple's ecosystem, but device trust, recovery settings, and cross-platform needs still matter."
  },
  {
    question: "Is Google Password Manager safe?",
    answer: "Google Password Manager can be a reasonable built-in choice for Chrome and Android users, especially compared with reuse. It is less independent than a dedicated manager and depends heavily on the security of the Google account and enrolled devices."
  },
  {
    question: "Is Microsoft Edge password manager safe?",
    answer: "Microsoft documents local password encryption using OS protections, while also noting that browsers cannot protect against a fully compromised logged-in device. It can be better than reuse, but it is not the same as a dedicated cross-platform vault."
  },
  {
    question: "Should I use autofill?",
    answer: "Autofill is useful, but safer habits matter. Prefer exact-domain matching and click-to-fill when available, avoid filling on suspicious pages, and be careful with unexpected extension prompts or fake locked-vault screens."
  },
  {
    question: "Are password-manager browser extensions safe?",
    answer: "They are useful but not risk-free. Install only the official extension, keep it updated, verify the publisher, avoid copycats, and remember that browser-extension UI can be imitated by phishing pages."
  },
  {
    question: "What makes a good master password?",
    answer: "It should be long, unique, and not based on a password you use anywhere else. A passphrase can work well if it is genuinely long and not guessable. Do not store it in the same vault as the only copy."
  },
  {
    question: "Does MFA make a password manager safe?",
    answer: "MFA helps protect the account from unauthorized login and new-device access. It does not necessarily protect an already stolen encrypted vault from offline password guessing, so it should complement a strong master password rather than replace one."
  },
  {
    question: "Should I use passkeys with a password manager?",
    answer: "Yes when the workflow fits. Passkeys reduce phishing and password reuse risk, and password managers increasingly store them. Keep recovery and device access in mind because passkeys can still create account-continuity questions."
  },
  {
    question: "Can I lose access to my password manager forever?",
    answer: "Yes, depending on the product and your recovery setup. Zero-knowledge systems may not be able to reset your account password and recover vault contents unless recovery was configured ahead of time."
  },
  {
    question: "Are open-source password managers safer?",
    answer: "Open source can improve transparency and independent inspection, but it is not automatic safety. You still need secure builds, good updates, strong cloud operations, responsible disclosure, and careful user setup."
  },
  {
    question: "Do audits prove a password manager is safe?",
    answer: "No. Audits are useful evidence, but they are scoped snapshots. Check what was audited, when it happened, what issues were found, whether fixes were verified, and whether the provider keeps auditing over time."
  },
  {
    question: "Is self-hosting a password manager safer?",
    answer: "Not automatically. Self-hosting can reduce reliance on a provider's cloud, but it adds responsibility for updates, backups, certificates, server hardening, monitoring, and disaster recovery."
  },
  {
    question: "Should families use one shared password-manager login?",
    answer: "No. Families should generally use separate accounts under a family plan or shared organization. That preserves individual vaults while allowing controlled sharing and recovery."
  },
  {
    question: "Should high-risk users use a password manager?",
    answer: "Often yes, but high-risk users should be stricter: use phishing-resistant MFA or passkeys, minimize browser-extension exposure, secure devices, consider separate vaults, and follow guidance from their organization or security advisor."
  },
  {
    question: "What is the safest way to start using a password manager?",
    answer: "Secure email first, choose a reputable manager, create a long unique account password, enable MFA, set up recovery, import carefully, delete any temporary exports, then replace reused passwords starting with email, banking, cloud, shopping, and social accounts."
  }
];

const checklistItems = [
  "Secure your email account first because it can reset many other accounts.",
  "Use a long, unique password for the password-manager account.",
  "Turn on MFA or passkeys where available.",
  "Save recovery codes, emergency kits, or trusted-contact settings outside the vault.",
  "Install only official apps and browser extensions.",
  "Replace reused passwords in priority order: email, banking, cloud storage, shopping, social, and work.",
  "Delete temporary import/export files after migration.",
  "Keep devices, browsers, and extensions updated.",
  "Review shared vaults and family access periodically.",
  "Know what happens if you lose your phone, laptop, or account password."
];

const redFlags = [
  "No clear explanation of encryption, key derivation, or recovery.",
  "Vague claims like unhackable, military grade, or safest without evidence.",
  "No public security contact, disclosure program, or audit history.",
  "Confusing recovery promises that conflict with zero-knowledge claims.",
  "Poor extension listings, copycat apps, or unclear publisher identity.",
  "Pressure to export or upload plaintext passwords into unrelated tools."
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

function BulletList({ items, tone = "check" }: { items: string[]; tone?: "check" | "alert" }) {
  const Icon = tone === "check" ? CheckCircle2 : AlertCircle;
  return (
    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon className={["mt-0.5 shrink-0", tone === "check" ? "text-brand-700" : "text-amber-600"].join(" ")} size={17} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InternalLinkButton({ href, children }: { href: string; children: string }) {
  return <Link className={secondaryButtonClasses} to={href}>{children}</Link>;
}

function TextLink({ href, children }: { href: string; children: string }) {
  return (
    <Link className="font-semibold text-brand-700 hover:text-brand-800" to={href}>
      {children}
    </Link>
  );
}

export function ArePasswordManagersSafePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: pageDescription,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + pagePath,
    datePublished: "2026-07-11",
    dateModified: "2026-07-11"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "Are Password Managers Safe?", item: site.url + pagePath }
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

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_46%,#eefdf9_100%)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Password Manager Safety Guide</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">{pageTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">Password managers are usually safer than password reuse, but they are not magic. Vault safety depends on encryption, your master password, MFA, device security, recovery choices, provider practices, and how carefully you use browser extensions and autofill.</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">This guide explains what password managers protect, what they cannot protect, what breaches actually mean, and how to set one up without pretending any single product is a universal winner. For browser-versus-dedicated fit, use <TextLink href="/password-manager-vs-browser-passwords">Password Manager vs Browser Passwords</TextLink>. For product fit, use the <TextLink href="/password-managers">Password Manager Decision Hub</TextLink>, the <TextLink href="/best-password-managers-for-beginners">beginner guide</TextLink>, or the <TextLink href="/best-free-password-managers">free-plan guide</TextLink>.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" href="#quick-answer">Read the Quick Answer</a>
              <InternalLinkButton href="/best-password-managers-for-beginners">Compare Password Managers</InternalLinkButton>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-lift backdrop-blur">
            <ShieldCheck className="text-brand-700" size={26} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-slate-950">Bottom Line</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">Use a reputable password manager if the alternative is password reuse. Then protect the vault like a critical account: strong unique password, MFA, safe recovery, updated devices, and verified extensions.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-700">Current facts checked {checkedDate}</p>
          </aside>
        </Container>
      </section>

      <Section id="quick-answer" className="bg-white">
        <SectionHeading eyebrow="Quick answer" title="Yes, Usually, With Conditions" description="The safer choice is not the tool alone. It is the whole setup around the vault." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickAnswers.map((item) => (
            <article key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{item.label}</p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Why reuse is worse" title="Password Reuse Is the Risk Password Managers Are Built to Fix" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
              <KeyRound className="shrink-0 text-brand-700" size={20} aria-hidden="true" />
              One leaked password should not unlock everything
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-700">When you reuse passwords, a breach at a forum, store, or old app can become an attack on your email, banking, cloud storage, and social accounts. A password manager makes unique generated passwords realistic so one weak site does not become a master key.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
              <LockKeyhole className="shrink-0 text-brand-700" size={20} aria-hidden="true" />
              The vault becomes the account to protect
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-700">The tradeoff is concentration. Instead of many weak repeated passwords, you have one important vault. That is a better trade for most people only when the vault is protected carefully.</p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How protection works" title="What Happens When You Use a Password Manager" description="Exact designs differ, but serious password managers generally encrypt vault data on your device before syncing it through the provider's cloud." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { title: "Local encryption", body: "Your vault data is encrypted before it leaves your device, and decrypted locally only after you unlock it." },
            { title: "One strong secret", body: "Your account password, master password, Secret Key, or passkey flow helps control access to the vault." },
            { title: "Sync and recovery", body: "Cloud sync, sharing, recovery, and family/business controls make the product useful but add rules you need to understand." }
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Risk table" title="What Can Still Go Wrong?" description="This is the practical threat model: not a reason to avoid password managers, but a checklist for using them safely." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[76rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold" scope="col">Risk</th>
                <th className="px-4 py-4 font-semibold" scope="col">What changes</th>
                <th className="px-4 py-4 font-semibold" scope="col">Safer move</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {riskRows.map((row) => (
                <tr key={row.risk} className="align-top">
                  <th className="px-4 py-4 font-semibold text-slate-950" scope="row">{row.risk}</th>
                  <td className="px-4 py-4 text-slate-700">{row.whatChanges}</td>
                  <td className="px-4 py-4 text-slate-700">{row.practicalMove}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Breach evidence" title="What Password-Manager Breaches Actually Teach" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">LastPass</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">The LastPass incident is the cautionary example: encrypted vault theft can still be serious, especially when metadata, old settings, weak master passwords, or offline guessing are in play. The lesson is to take vault theft seriously, not to assume every manager stores plaintext passwords.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Dashlane</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">Dashlane's 2026 advisory describes a brute-force attack against some user accounts that targeted 2FA protections for new-device registration. It is a reminder that account authentication and vault encryption are different layers.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Credential stuffing</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">When attackers try leaked passwords against accounts elsewhere, a password manager with unique generated passwords helps contain damage. Your password-manager account itself should never reuse a password.</p>
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Zero knowledge" title="Zero Knowledge Helps, but It Is Not a Force Field" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">What it means</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Zero-knowledge or end-to-end encrypted password managers are designed so the provider does not have your plaintext vault or master password. That is a real security advantage because a server-side database breach should not automatically reveal saved passwords.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">What it does not solve</h3>
            <BulletList tone="alert" items={["A weak master password can still be guessed.", "Malware can steal secrets after unlock.", "A fake login prompt can still phish you.", "Recovery and business controls can change the trust model.", "A malicious update is outside ordinary vault-at-rest encryption."]} />
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Provider visibility" title="Can the Password-Manager Company See Your Passwords?" />
        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700">With a well-designed end-to-end encrypted password manager, the company should not be able to read your saved passwords in plaintext. That is the point of client-side encryption. But the fine print matters: some metadata may be handled differently, recovery may introduce trusted parties or devices, family and business admins can have specific powers, and a provider can still control app updates and service availability.</p>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Master password and MFA" title="The Vault Is Only as Strong as Its Unlock Path" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Master password</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Use a long, unique password or passphrase that is not used anywhere else. If encrypted vault data is stolen, a weak master password can become the path attackers try offline. Strong and unique is non-negotiable here.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">MFA and passkeys</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">MFA helps block unauthorized account access, and phishing-resistant options are best. But MFA does not necessarily protect an already stolen encrypted vault from offline guessing, so it complements a strong master password rather than replacing one.</p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Autofill and extensions" title="Browser Extensions Are Useful, and They Add Attack Surface" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Use the extension carefully</h3>
            <BulletList items={["Install only the official extension.", "Use exact-domain matching and click-to-fill when available.", "Avoid unexpected vault prompts.", "Keep browser and extension updates enabled.", "Be wary of lookalike extension listings."]} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Do not confuse convenience with immunity</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Academic research continues to find browser-based password-manager risks, including metadata issues, insecure defaults, clickjacking, and fake locked-vault UI. The best response is careful setup, not panic.</p>
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Built-in managers" title="Are Browser and Platform Password Managers Safe Enough?" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Apple Passwords</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">Strong fit for Apple-first users because iCloud Keychain passwords and passkeys are designed around end-to-end encryption and platform trust.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Google and Chrome</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">Convenient for Google and Android users, with passkey support and breach warnings. The main tradeoff is ecosystem dependence.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Microsoft Edge</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">Microsoft documents encrypted local storage using OS protections, while also noting that a compromised logged-in device changes the threat model.</p>
          </article>
        </div>
        <p className="mt-6 max-w-4xl text-base leading-7 text-slate-700">Built-in managers are usually better than reuse. Dedicated managers are usually better when you need cross-browser portability, family sharing, emergency access, deeper audits, business controls, or independence from one platform.</p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Cloud, local, and self-hosted" title="Where the Vault Lives Is Only Part of Safety" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Cloud sync</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Best for most people because it keeps devices in sync and supports practical recovery, but it makes provider security and account protection important.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Local vaults</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Reduce cloud reliance but can increase backup, sync, loss, and recovery risk if you do not manage files carefully.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Self-hosting</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Can make sense for technical users, but it adds updates, certificates, backups, monitoring, and server hardening. It is not automatically safer.</p>
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Transparency and audits" title="Open Source and Audits Are Evidence, Not Guarantees" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Open source</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Open-source or source-available clients make independent inspection easier. They do not automatically prove the cloud service, build pipeline, support process, or incident response is flawless.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Audits</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Audits are useful, especially when the provider publishes scope, findings, fixes, and retests. They are still snapshots of a system at a point in time.</p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Recovery and passkeys" title="Do Not Wait Until Lockout to Understand Recovery" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Recovery is a security decision</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Strict zero-knowledge systems may not be able to recover a lost master password. Family recovery, emergency contacts, recovery codes, Secret Keys, trusted devices, and business recovery can help, but each one changes how access is restored.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Passkeys reduce phishing risk</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">Passkeys use public-key cryptography and are designed to resist phishing. They do not make password managers obsolete yet because many accounts still use passwords, recovery codes, shared secrets, and legacy login flows.</p>
          </article>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Family, work, and high-risk use" title="Different Households Need Different Rules" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Families</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Use separate accounts, shared vaults, and recovery planning. Avoid one shared household login for everything.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Work</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Follow company policy. Business password managers can include admin controls, recovery, reporting, and access logs that personal tools do not.</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">High-risk users</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">Prefer phishing-resistant MFA or passkeys, minimize unnecessary extensions, secure devices carefully, and consider separate vaults for sensitive roles.</p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Provider examples" title="Selected Security Examples, Without Ranking Them" description="These examples show how different providers and built-in managers describe their security models. They are not a product ranking." />
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[70rem] border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold" scope="col">Provider</th>
                <th className="px-4 py-4 font-semibold" scope="col">Evidence reviewed</th>
                <th className="px-4 py-4 font-semibold" scope="col">Important caveat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {providerExamples.map((provider) => (
                <tr key={provider.name} className="align-top">
                  <th className="px-4 py-4 font-semibold text-slate-950" scope="row">{provider.name}</th>
                  <td className="px-4 py-4 text-slate-700">{provider.evidence}</td>
                  <td className="px-4 py-4 text-slate-700">{provider.caveat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="Red flags" title="Password-Manager Claims to Treat Carefully" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Be skeptical when you see...</h3>
            <BulletList tone="alert" items={redFlags} />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-bold text-slate-950">Security is not just marketing language</h3>
            <p className="mt-4 text-base leading-7 text-slate-700">The best evidence includes a clear security model, current audit materials, a vulnerability disclosure path, prompt incident response, careful recovery design, and realistic explanations of limits.</p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Setup checklist" title="A Safer Password-Manager Setup" />
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {checklistItems.map((item, index) => (
            <li key={item} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-sm font-bold text-brand-700">{index + 1}</span>
              <span className="pt-1 text-sm font-semibold leading-6 text-slate-900">{item}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading eyebrow="When it is not enough" title="A Password Manager Does Not Replace the Rest of Security" />
        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700">A password manager will not clean malware from a device, stop every phishing attack, fix a compromised email account, prevent a service from resetting your account through weak support workflows, or guarantee that a provider will never make a mistake. It is a major upgrade over password reuse, but it belongs inside a broader security routine.</p>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Password Manager Safety Questions" />
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
        <SectionHeading eyebrow="Sources" title="Evidence Used for This Guide" description={`Official, academic, and provider security sources checked ${checkedDate}. Provider pages are treated as claims unless independently supported by audits, incident records, or public documentation.`} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sourceLinks.map((source) => (
            <a key={source.href} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-brand-700 shadow-soft transition-colors hover:border-brand-200 hover:bg-brand-50" href={source.href} rel="noreferrer noopener" target="_blank">
              <span>{source.label}</span>
              <ExternalLink className="shrink-0" size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Final takeaway</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Use One, but Protect It Like It Matters</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">A reputable password manager is usually the safer default because it breaks the password-reuse cycle. The honest caveat is that the vault becomes important. Use a strong unique account password, enable MFA or passkeys where available, set up recovery before you need it, keep devices clean, and treat exports and extensions carefully.</p>
          <p className="mt-4 text-base leading-8 text-slate-700">Next, use <TextLink href="/password-manager-vs-browser-passwords">Password Manager vs Browser Passwords</TextLink> if you are deciding between built-in browser passwords and a dedicated vault, the <TextLink href="/password-managers">Password Manager Decision Hub</TextLink> for routing, the <TextLink href="/best-password-managers-for-beginners">beginner buying guide</TextLink> for product fit, the <TextLink href="/best-free-password-managers">free password manager guide</TextLink> for no-cost options, or the <TextLink href="/about/how-we-review-software">Better Software Buyer Checklist</TextLink> behind our review process.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <InternalLinkButton href="/password-managers">Open Password Manager Hub</InternalLinkButton>
            <InternalLinkButton href="/best-password-managers-for-beginners">Compare Beginner Options</InternalLinkButton>
          </div>
        </div>
      </Section>

      <Newsletter />
    </>
  );
}
