import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/best-password-managers-for-privacy";
const title = "Best Password Managers for Privacy in 2026";
const description =
  "Compare privacy-focused password managers by encrypted metadata, aliases, open-source evidence, audits, telemetry, account data, and portability.";

type PrivacyPick = {
  name: string;
  label: string;
  summary: string;
  providerKnowledge: string;
  transparency: string;
  identityData: string;
  recovery: string;
  portability: string;
  chooseWhen: string;
  skipWhen: string;
  limitation: string;
  href?: string;
};

const products: PrivacyPick[] = [
  {
    name: "Proton Pass",
    label: "Best integrated privacy fit",
    summary:
      "Combines documented encrypted vault metadata, open-source apps, current audit evidence, and integrated email aliases.",
    providerKnowledge:
      "Proton documents end-to-end encryption across vault contents and metadata. Account, security, support, payment, abuse-prevention, and alias-routing data still exist outside that claim.",
    transparency:
      "Open-source applications and recent public audit summaries provide useful evidence with scope and date limits.",
    identityData:
      "Aliases can reduce exposure of a primary email address, but Proton must route messages and operate anti-abuse systems.",
    recovery:
      "Recovery methods improve resilience but must be configured before loss and change the trust placed in recovery channels.",
    portability:
      "Export is supported; test the destination import and protect any plaintext export file.",
    chooseWhen:
      "Encrypted metadata and reducing primary-email exposure matter more than minimizing dependence on a single privacy ecosystem.",
    skipWhen:
      "You want no mandatory cloud account, no email-forwarding provider, or complete control over sync infrastructure.",
    limitation:
      "A privacy-first architecture does not make the account anonymous or eliminate provider-visible operational data.",
    href: "/reviews/proton-pass-review"
  },
  {
    name: "Bitwarden",
    label: "Best open-source cloud and portability fit",
    summary:
      "Offers a broad public codebase, detailed security documentation, recurring assessments, encrypted export options, and optional self-hosting.",
    providerKnowledge:
      "Vault data is protected by a documented zero-knowledge end-to-end encryption model; account email, billing, support, website, and service records remain outside the vault.",
    transparency:
      "Public client/server code, audit material, and a public response to recent cryptographic research make the evidence unusually inspectable.",
    identityData:
      "A cloud account still creates identifiers and operational records even when vault data is encrypted.",
    recovery:
      "Emergency access is available in eligible plans; self-hosting changes who operates recovery and availability.",
    portability:
      "Supports plaintext and encrypted exports, with compatibility limits for protected formats.",
    chooseWhen:
      "Open-source visibility, export control, and the option to self-host matter most.",
    skipWhen:
      "You do not want to evaluate configuration choices or might treat self-hosting as maintenance-free.",
    limitation:
      "Open source does not prove deployed server behavior, and self-hosting transfers patching, backup, monitoring, and recovery to you.",
    href: "/reviews/bitwarden-review"
  },
  {
    name: "1Password",
    label: "Best polished privacy design",
    summary:
      "Pairs an end-to-end encrypted vault with a device-generated Secret Key and strong recovery and sharing usability.",
    providerKnowledge:
      "The Secret Key adds high-entropy material that is not normally stored with server-side account data. Billing, support, account, website, and service records remain.",
    transparency:
      "1Password publishes detailed architecture, assessment references, and responses to independent research, but the product is not fully open source.",
    identityData:
      "Consent-based privacy-preserving telemetry is documented; consent and exact data flow still deserve review.",
    recovery:
      "Family and business recovery can reduce lockout risk while changing who may help restore access.",
    portability:
      "Exports are supported, but specialized item types, documents, passkeys, and history may not migrate perfectly.",
    chooseWhen:
      "You want strong off-device attack resistance and polished recovery without operating your own sync system.",
    skipWhen:
      "Full open-source scope, a permanent free tier, or local-only storage is mandatory.",
    limitation:
      "The main product is closed source and requires continued cloud-account and billing trust.",
    href: "/reviews/1password-review"
  },
  {
    name: "KeePassXC",
    label: "Best local-only control",
    summary:
      "Stores an open-source encrypted KDBX database locally and does not require a cloud account or subscription.",
    providerKnowledge:
      "KeePassXC itself does not need a hosted vault account. The operating system, browser integration, update checks, and any chosen sync provider create separate data flows.",
    transparency:
      "The desktop application and browser integration are open source, with published audit history.",
    identityData:
      "No mandatory cloud identity is required for the vault, which minimizes one major source of account metadata.",
    recovery:
      "There is no provider to restore a forgotten database password or lost key file. Backups and recovery belong to the user.",
    portability:
      "KDBX and multiple export formats provide strong local control, though passkeys and specialized items may need extra migration work.",
    chooseWhen:
      "Avoiding a managed cloud account matters and you can maintain sync, backups, and recovery yourself.",
    skipWhen:
      "You want effortless phone sync, provider-assisted recovery, or the simplest possible onboarding.",
    limitation:
      "Local-only reduces provider knowledge but increases operational burden and does not protect an unlocked or malware-infected device."
  },
  {
    name: "NordPass",
    label: "Simplest audited managed alternative",
    summary:
      "Documents local encryption, zero-knowledge design, XChaCha20, independent review, mainstream apps, exports, and emergency access.",
    providerKnowledge:
      "Encrypted vault data is separated from account, billing, support, website, and service-operation records.",
    transparency:
      "Independent-review and compliance evidence is useful, but public source and full report depth are less extensive than Proton or Bitwarden.",
    identityData:
      "A Nord Account and normal commercial service relationship remain part of the privacy model.",
    recovery:
      "Emergency access can grant access after a waiting process; that is a deliberate trust tradeoff.",
    portability:
      "Exports are supported, commonly through plaintext formats that need careful temporary handling.",
    chooseWhen:
      "You want a straightforward cloud-managed product with documented privacy architecture and less setup.",
    skipWhen:
      "Open-source scope, public audit artifacts, or local-only control is the priority.",
    limitation:
      "Its public transparency model is less open than the strongest privacy-focused alternatives.",
    href: "/reviews/nordpass-review"
  },
  {
    name: "Enpass",
    label: "Best self-managed sync alternative",
    summary:
      "Keeps an encrypted vault locally while letting the user choose iCloud, Google Drive, OneDrive, Dropbox, WebDAV, Nextcloud, or offline operation.",
    providerKnowledge:
      "Enpass does not need to host the vault, but the software vendor, license/account layer, and chosen storage provider form a split trust model.",
    transparency:
      "A detailed security white paper and SOC 2 positioning help, while public source and product-audit depth remain more limited.",
    identityData:
      "The chosen sync service may learn account, network, and file metadata even though the vault file remains encrypted.",
    recovery:
      "Recovery depends on the vault credentials, local copies, chosen cloud, and backups rather than a single managed provider.",
    portability:
      "Storage choice and local copies reduce platform dependence, but licensing, export, and conflict handling must be tested.",
    chooseWhen:
      "You want managed apps but prefer to choose or self-host the storage layer.",
    skipWhen:
      "You want fully open-source software or do not want to manage sync conflicts and recovery across two providers.",
    limitation:
      "Self-managed sync reduces one dependency while increasing configuration, backup, and conflict complexity."
  }
];

const excludedCandidates = [
  ["Dashlane", "Strong zero-knowledge documentation, export, deletion, and a transparent 2026 account-attack advisory, but no distinct privacy advantage over the six included fits."],
  ["Keeper", "Extensive enterprise security and compliance evidence, but its strongest differentiators are business administration rather than a minimal consumer data relationship."],
  ["RoboForm", "A credible mainstream encrypted vault and form-filling tool with less public privacy architecture, open-source scope, and audit transparency than the main picks."],
  ["Apple Passwords", "A legitimate Apple-only choice with iCloud Keychain encryption, but it deepens Apple Account dependence and has a different transparency and portability model."],
  ["Google Password Manager", "A useful Google/Chrome default that is better than password reuse, but it deepens Google Account dependence and is not a privacy-first dedicated product."],
  ["LastPass", "Excluded because the 2022–2023 encrypted-vault theft and metadata exposure make incident history central, without a distinct current privacy advantage over the included field."]
];

const privacyMatrix = [
  ["Proton Pass", "Encrypted vault metadata documented", "Apps open source", "Current public audit evidence", "Aliases integrated", "Cloud account"],
  ["Bitwarden", "Broad vault-field encryption documented", "Broad client/server code", "Recurring assessments and research response", "Limited identity tools", "Cloud or self-host"],
  ["1Password", "Vault data E2EE plus Secret Key", "Not fully open source", "Assessment index and research responses", "Partner integrations vary", "Cloud account"],
  ["KeePassXC", "Local encrypted KDBX database", "Desktop and browser integration", "Public audit history", "None built in", "Local/user-chosen sync"],
  ["NordPass", "Encrypted vault model documented", "Not fully open source", "Independent-review claims", "Not core", "Cloud account"],
  ["Enpass", "Local encrypted vault file", "Not fully open source", "White paper and SOC 2 positioning", "Not core", "User-chosen storage"]
];

const scenarios = [
  ["I want aliases and encrypted metadata", "Proton Pass is the strongest integrated fit; remember that forwarding still requires operational data."],
  ["I want maximum public code visibility", "Bitwarden is the strongest managed-cloud fit; KeePassXC is the strongest local-only fit."],
  ["I want polished recovery and sharing", "1Password combines a strong Secret Key model with mature household and work recovery."],
  ["I want no mandatory cloud account", "KeePassXC is the clearest answer if you can own backup, sync, and recovery."],
  ["I want simple managed sync", "NordPass is a reasonable audited alternative, with less public transparency than the leaders."],
  ["I want to choose my cloud provider", "Enpass separates the app from storage but adds a two-provider trust and support model."],
  ["I am Apple-only and want no new app", "Apple Passwords may be enough; accept ecosystem dependence and review export and recovery."],
  ["I am a high-risk journalist or activist", "Use individualized threat modeling; product rankings cannot replace device, account, legal, and operational security advice."],
  ["I want to self-host", "Use Bitwarden or another researched option only if you can patch, monitor, back up, and recover the service."],
  ["I want the least data collection possible", "Start with a local database, then audit every sync, backup, update, browser, and recovery dependency you add."]
];

const checklist = [
  "Identify every vault field and metadata category the provider encrypts.",
  "Read what account, billing, support, and anti-abuse data remains visible.",
  "Check telemetry defaults, consent, identifiers, and retention.",
  "Verify exactly which clients and server components are open source.",
  "Open the latest audit report or scope statement instead of trusting a badge.",
  "Review ownership, parent company, processors, and jurisdiction together.",
  "Understand alias routing and anti-abuse data before calling aliases anonymous.",
  "Decide whether recovery or emergency access adds acceptable third-party trust.",
  "Confirm account and vault deletion behavior.",
  "Test export and import with non-password items before committing.",
  "Protect and securely remove plaintext export files.",
  "Secure the email account, devices, master password, MFA, and recovery codes."
];

const faq = [
  ["What is the best password manager for privacy?", "Proton Pass is the strongest integrated privacy fit in this guide. Bitwarden is best for open-source cloud transparency, KeePassXC for local-only control, 1Password for polished privacy, NordPass for simple managed sync, and Enpass for self-managed storage."],
  ["Is a privacy-focused password manager anonymous?", "No. Managed providers may process account, payment, support, security, website, and anti-abuse data even when vault contents are end-to-end encrypted."],
  ["What does zero knowledge mean?", "It usually means the provider lacks the keys needed to decrypt protected vault content. It is not a universal certification and does not mean the provider knows nothing about the account."],
  ["Does encrypted metadata matter?", "Yes. URLs, item titles, usernames, vault names, and sharing relationships can reveal sensitive associations even without passwords."],
  ["Are open-source password managers more private?", "Open source improves inspectability. It does not by itself prove deployed builds, production servers, telemetry, account handling, or operational security."],
  ["Do audits prove privacy?", "No. Audits are scoped snapshots. Check the assessor, date, systems examined, exclusions, public report, findings, and remediation."],
  ["Does jurisdiction determine privacy?", "No. Jurisdiction affects legal process, but architecture, provider knowledge, retention, ownership, and operational behavior are usually more useful than a country label alone."],
  ["Can a password manager hide my email address?", "Alias tools can keep a primary address away from websites. The forwarding provider still needs routing and anti-abuse data, so aliases reduce exposure rather than create anonymity."],
  ["Does telemetry mean a provider reads my vault?", "Not necessarily. Diagnostics and usage telemetry can be separate from encrypted vault contents. Ask what is collected, whether it is optional, and whether identifiers are attached."],
  ["Is Proton Pass more private than Bitwarden?", "Proton Pass has the stronger integrated metadata-and-alias story. Bitwarden has broader open-source and portability evidence. The better fit depends on the privacy problem you are solving."],
  ["Is Bitwarden more private than 1Password?", "Bitwarden provides more source-code visibility and self-hosting. 1Password adds a Secret Key and polished recovery. Neither eliminates account-level data."],
  ["Is KeePassXC the most private option?", "It minimizes mandatory provider knowledge, but you become responsible for storage, sync, backups, updates, and recovery. The chosen cloud or backup can reintroduce metadata."],
  ["Is self-hosting more private?", "It can reduce reliance on a vendor's hosted service, but it transfers logs, updates, monitoring, backups, network security, and recovery to the operator. Misconfiguration can make it worse."],
  ["Is Enpass private?", "Enpass keeps an encrypted local vault and lets users choose storage. Privacy still depends on Enpass software, licensing/account data, the selected sync provider, and the user's backup practices."],
  ["Is NordPass private?", "NordPass documents a zero-knowledge encrypted vault and independent review. Its public source and audit-artifact depth are less extensive than Proton or Bitwarden."],
  ["Are Apple Passwords and Google Password Manager private?", "They can be good single-ecosystem defaults and are better than reuse, but they deepen Apple or Google account dependence and are not privacy-first dedicated services."],
  ["Why is LastPass not recommended here?", "Its encrypted-vault theft and metadata-exposure history make incident evidence central, and this review found no distinct current privacy advantage over the included field."],
  ["Does a password manager stop online tracking?", "No. It does not stop cookies, browser fingerprinting, advertising identifiers, account tracking, or an infected device. Aliases address only part of identity exposure."],
  ["Which option is best for aliases?", "Proton Pass has the strongest integrated alias fit among the main picks. Verify current plan limits and understand forwarding data before choosing."],
  ["Which option is easiest to leave?", "Bitwarden and KeePassXC offer strong control, but every migration should test passkeys, attachments, custom fields, notes, identities, cards, and sharing data—not just passwords."],
  ["Are encrypted exports always portable?", "No. Encrypted exports may be tied to the same account or product. Plaintext formats are more portable but create a highly sensitive temporary file."],
  ["Does account deletion erase everything immediately?", "Not always. Policies may allow security, legal, billing, backup, or fraud-prevention retention. Read the current deletion and retention language for the exact provider."],
  ["Are free password managers private?", "Some are. A free plan may use the same vault encryption as paid service, but account data, telemetry, recovery, exports, and feature limits still matter."],
  ["What is the minimum privacy-safe setup?", "Use a unique master password, enable MFA, secure the email account and devices, protect recovery codes, use official apps, review telemetry, and avoid leaving plaintext exports behind."]
];

const sources = [
  ["Proton Pass security model", "https://proton.me/blog/proton-pass-security-model"],
  ["Proton Pass privacy policy", "https://proton.me/pass/privacy-policy"],
  ["Proton Pass email aliases", "https://proton.me/support/pass-email-alias"],
  ["Proton Pass 2026 audit", "https://proton.me/business/blog/proton-pass-audit-2026"],
  ["Proton Pass export", "https://proton.me/support/pass-export"],
  ["Bitwarden security white paper", "https://bitwarden.com/help/bitwarden-security-white-paper/"],
  ["Bitwarden audits", "https://bitwarden.com/help/is-bitwarden-audited/"],
  ["Bitwarden cryptography research response", "https://bitwarden.com/blog/security-through-transparency-eth-zurich-audits-bitwarden-cryptography/"],
  ["Bitwarden privacy policy", "https://bitwarden.com/privacy/"],
  ["Bitwarden export", "https://bitwarden.com/help/export-your-data/"],
  ["Bitwarden account deletion", "https://bitwarden.com/help/delete-your-account/"],
  ["1Password security model", "https://support.1password.com/1password-security/"],
  ["1Password Secret Key", "https://support.1password.com/secret-key-security/"],
  ["1Password privacy policy", "https://1password.com/legal/privacy/"],
  ["1Password telemetry", "https://support.1password.com/telemetry/"],
  ["1Password security assessments", "https://support.1password.com/security-assessments/"],
  ["KeePassXC documentation", "https://keepassxc.org/docs/"],
  ["KeePassXC privacy policy", "https://keepassxc.org/privacy/"],
  ["KeePassXC audits", "https://keepassxc.org/audits/"],
  ["KeePassXC source", "https://github.com/keepassxreboot/keepassxc"],
  ["NordPass security", "https://nordpass.com/security/"],
  ["NordPass privacy policy", "https://nordpass.com/privacy-policy/"],
  ["NordPass audit context", "https://nordpass.com/blog/nordpass-business-independent-security-audit/"],
  ["NordPass emergency access", "https://support.nordpass.com/hc/en-us/articles/5691777958929-How-to-give-Emergency-Access-in-NordPass"],
  ["Enpass security", "https://www.enpass.io/security/"],
  ["Enpass security white paper", "https://dl.enpass.io/docs/whitepaper/enpass-security-whitepaper.pdf"],
  ["Enpass privacy policy", "https://www.enpass.io/privacy/"],
  ["Dashlane privacy policy", "https://www.dashlane.com/privacy"],
  ["Dashlane 2026 security advisory", "https://support.dashlane.com/hc/en-us/articles/36038764990866-Security-advisory-Brute-force-attack-on-Dashlane-user-accounts"],
  ["Keeper security", "https://www.keepersecurity.com/security.html"],
  ["RoboForm security", "https://www.roboform.com/security"],
  ["Apple iCloud data security", "https://support.apple.com/en-us/102651"],
  ["Google Password Manager encryption", "https://support.google.com/accounts/answer/11350823"],
  ["NIST SP 800-63B", "https://pages.nist.gov/800-63-4/sp800-63b.html"]
];

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="font-semibold text-teal-700 underline underline-offset-4" to={to}>
      {children}
    </Link>
  );
}

export function BestPasswordManagersForPrivacyPage() {
  const canonical = `${site.url}${path}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      mainEntityOfPage: canonical,
      datePublished: "2026-07-12",
      dateModified: "2026-07-12"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Password Managers", item: `${site.url}/password-managers` },
        { "@type": "ListItem", position: 3, name: title, item: canonical }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    }
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Section className="bg-slate-950 text-white">
        <Container className="py-20">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-teal-300">
            Password manager privacy guide
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-200">
            Privacy is not just an encryption claim. Provider knowledge, metadata, account data,
            telemetry, aliases, recovery, audits, ownership, and portability all shape the real
            tradeoff.
          </p>
          <p className="mt-5 max-w-4xl leading-7 text-slate-300">
            We evaluated twelve candidates and selected six distinct fits. No affiliate relationship
            determined inclusion, order, labels, or criticism.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <AffiliateDisclosure />
          <div className="mt-8 rounded-3xl border-2 border-teal-300 bg-teal-50 p-7">
            <p className="text-xs font-black uppercase tracking-wider text-teal-800">Quick answer</p>
            <h2 className="mt-2 text-3xl font-black">Choose the operating model, not only the brand</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Proton Pass is the strongest integrated privacy fit; Bitwarden leads for open-source
              cloud transparency; 1Password offers the most polished privacy design; KeePassXC
              minimizes mandatory provider knowledge; NordPass is a simpler audited managed choice;
              and Enpass lets you choose the storage layer.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Quick recommendations</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article className="rounded-3xl border bg-white p-6 shadow-sm" key={product.name}>
                <p className="text-xs font-black uppercase tracking-wider text-teal-700">{product.label}</p>
                <h3 className="mt-2 text-2xl font-black">{product.name}</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.summary}</p>
                <p className="mt-3 text-sm leading-6 text-amber-800"><strong>Important limitation:</strong> {product.limitation}</p>
                {product.href ? (
                  <p className="mt-4"><InternalLink to={product.href}>Read the full {product.name} review</InternalLink></p>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Privacy comparison</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            These labels describe documented evidence, not permanent guarantees. “Open source,”
            “zero knowledge,” and “audited” each have scope limits.
          </p>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border">
            <table className="min-w-[1120px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  {['Manager', 'Vault and metadata', 'Open-source scope', 'Audit evidence', 'Identity tools', 'Operating model'].map((heading) => (
                    <th className="p-4" key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {privacyMatrix.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td className={`p-4 align-top ${index === 0 ? 'font-bold' : ''}`} key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Our verdict</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
            There is no universal “most private” manager. A managed cloud product can minimize
            provider access to vault content while still keeping account records. A local-only
            product can remove the hosted provider but make you responsible for every backup,
            synchronization, update, and recovery decision.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {products.map((product) => (
              <div className="rounded-2xl bg-white/10 p-5" key={product.name}>
                <p className="font-black text-teal-300">Choose {product.name} when…</p>
                <p className="mt-2 leading-7 text-slate-200">{product.chooseWhen}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">How we evaluated privacy</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            We compared encrypted-field scope, provider-visible account data, telemetry, aliases,
            open-source scope, audit transparency, retention, deletion, ownership, jurisdiction,
            recovery, exports, and local or self-managed operation. Official materials establish
            documented claims; they do not independently prove runtime behavior.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {[
              "Vault fields, URLs, titles, usernames, and metadata",
              "Account, billing, support, and anti-abuse records",
              "Telemetry defaults, consent, identifiers, and retention",
              "Open-source client, server, and build scope",
              "Audit date, assessor, scope, findings, and remediation",
              "Email aliases and forwarding data",
              "Recovery, emergency access, and trusted contacts",
              "Ownership, jurisdiction, processors, and legal requests",
              "Account and vault deletion",
              "Export, encrypted export, and migration"
            ].map((criterion) => (
              <div className="rounded-2xl border p-4" key={criterion}>{criterion}</div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <strong>Testing disclosure:</strong> We did not capture telemetry, review source code,
            reproduce an audit, inspect server operations, execute deletion or recovery, or run a
            cryptographic test.
          </div>
        </Container>
      </Section>

      {products.map((product, index) => (
        <Section className={index % 2 === 0 ? "bg-slate-50" : ""} key={product.name}>
          <Container className="py-14">
            <p className="text-xs font-black uppercase tracking-wider text-teal-700">{product.label}</p>
            <h2 className="mt-2 text-4xl font-black">{product.name}</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">{product.summary}</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border bg-white p-5">
                <h3 className="text-xl font-black">Provider knowledge and identity</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.providerKnowledge}</p>
                <p className="mt-3 leading-7 text-slate-700">{product.identityData}</p>
              </article>
              <article className="rounded-2xl border bg-white p-5">
                <h3 className="text-xl font-black">Transparency and evidence</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.transparency}</p>
              </article>
              <article className="rounded-2xl border bg-white p-5">
                <h3 className="text-xl font-black">Recovery</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.recovery}</p>
              </article>
              <article className="rounded-2xl border bg-white p-5">
                <h3 className="text-xl font-black">Portability and control</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.portability}</p>
              </article>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-teal-50 p-5 text-teal-950">
                <h3 className="font-black">Choose it when</h3>
                <p className="mt-2 leading-7">{product.chooseWhen}</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-5 text-amber-950">
                <h3 className="font-black">Skip it when</h3>
                <p className="mt-2 leading-7">{product.skipWhen}</p>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Credible candidates outside the main picks</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            Exclusion is not a claim that a product is unsafe. It means the candidate did not earn
            a distinct privacy recommendation against this evidence field.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {excludedCandidates.map(([name, reason]) => (
              <article className="rounded-2xl bg-white/10 p-5" key={name}>
                <h3 className="text-xl font-black text-teal-300">{name}</h3>
                <p className="mt-3 leading-7 text-slate-200">{reason}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14 space-y-12">
          <div>
            <h2 className="text-3xl font-black">Privacy is more than vault encryption</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A provider can be unable to decrypt a vault while still processing an account email,
              billing record, support ticket, IP-derived security event, alias route, website
              analytics, or crash report. Ask what is necessary, optional, retained, shared with
              processors, and deleted after the account closes.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">What zero knowledge does—and does not—mean</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Zero knowledge usually means the provider does not hold the keys needed to decrypt
              protected vault content. It is not a universal certification and does not mean the
              company has literally zero knowledge of the account. Read field-level architecture
              alongside the privacy policy.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Metadata can reveal sensitive relationships</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A website address or item title can reveal a bank, health portal, political group, or
              dating service without exposing the password. Compare exactly which URLs, titles,
              usernames, vault names, attachments, and sharing records are encrypted.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Open source and audits are evidence, not guarantees</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Public code lets more people inspect behavior. An audit tests defined systems at a
              point in time. Neither proves the deployed build, production servers, telemetry, or
              future versions will always behave perfectly. Check scope, date, findings, and
              remediation.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Aliases improve identity privacy with a tradeoff</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Unique aliases can keep a primary address away from merchants and make leaks easier
              to isolate. The forwarding provider must still route mail and prevent abuse. Aliases
              reduce exposure; they do not create anonymity.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Recovery changes the privacy model</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Provider recovery, trusted contacts, family recovery, and emergency access improve
              resilience while changing who can approve or restore access. Local-only vaults remove
              provider recovery entirely and make backup discipline essential.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Jurisdiction and ownership need context</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A country label cannot replace architecture. A provider that cannot decrypt vault
              contents may still hold account and operational data. Evaluate current owner, parent
              company, processors, policy, legal environment, and data minimization together.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Portability is a privacy feature</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Verify export formats, encrypted export, passkeys, attachments, custom fields, and
              account deletion. Plaintext CSV or JSON files are convenient but temporarily expose
              the entire vault and must be protected and securely removed.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Best choice by privacy scenario</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {scenarios.map(([scenario, answer]) => (
              <article className="rounded-2xl border bg-white p-5" key={scenario}>
                <h3 className="font-black">{scenario}</h3>
                <p className="mt-2 leading-7 text-slate-700">{answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Privacy checklist before choosing</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <div className="flex gap-3 rounded-2xl bg-white/10 p-4" key={item}>
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">FAQ</h2>
          <div className="mt-7 space-y-4">
            {faq.map(([question, answer]) => (
              <details className="rounded-2xl border p-5" key={question}>
                <summary className="cursor-pointer font-bold">{question}</summary>
                <p className="mt-3 leading-7 text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Evidence checked for this guide</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Current facts were checked on July 12, 2026. Official provider materials establish
            documented architecture and policy claims; they do not independently prove runtime
            telemetry, deployed code, server behavior, or permanent privacy.
          </p>
          <ul className="mt-7 grid gap-3 md:grid-cols-2">
            {sources.map(([label, href]) => (
              <li className="rounded-2xl border bg-white p-4" key={href}>
                <a
                  className="font-semibold text-teal-700 underline underline-offset-4"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-8">
            <h2 className="text-3xl font-black">Final recommendation</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Choose Proton Pass for integrated privacy and aliases, Bitwarden for open-source
              cloud transparency, 1Password for polished privacy and its Secret Key, KeePassXC for
              local-only control, NordPass for simpler managed sync, or Enpass for self-managed
              storage. Then secure the master password, email, devices, MFA, recovery, and exports.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Start with <InternalLink to="/are-password-managers-safe">Are Password Managers Safe?</InternalLink>{" "}
              for the broader threat model, or read{" "}
              <InternalLink to="/password-manager-vs-browser-passwords">Password Manager vs Browser Passwords</InternalLink>{" "}
              before adding another provider.
            </p>
          </div>
        </Container>
      </Section>

      <Newsletter />
    </>
  );
}
