import type { ReactNode } from "react";
import { CheckCircle2, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/guides/how-password-managers-work";
const title = "How Password Managers Actually Work";
const description =
  "Learn how password managers derive keys, encrypt, sync, unlock, autofill, share, recover, export, and store passkeys—and where the design can fail.";

const lifecycle = [
  [
    KeyRound,
    "1. You create or import a credential",
    "The client creates an item containing a password, username, URL, notes, passkey, TOTP seed, attachment, or other supported fields."
  ],
  [
    LockKeyhole,
    "2. The client prepares encryption keys",
    "A salt and password-based key-derivation function add per-account uniqueness and computational work, or the design combines the password with another high-entropy secret."
  ],
  [
    ShieldCheck,
    "3. Supported vault fields are encrypted",
    "In an end-to-end encrypted design, the client encrypts protected fields before upload. Exact metadata treatment varies by product."
  ],
  [
    CheckCircle2,
    "4. Ciphertext synchronizes",
    "The service stores and distributes encrypted state plus the account and synchronization data needed to operate the service."
  ],
  [
    KeyRound,
    "5. An authorized device unlocks locally",
    "After authentication, the client reconstructs or releases protected key material and decrypts the vault on the device."
  ],
  [
    LockKeyhole,
    "6. Autofill matches a site or app",
    "A browser extension or operating-system service compares the current domain or app identity with saved item metadata and fills according to configured rules."
  ],
  [
    ShieldCheck,
    "7. Sharing distributes access to keys",
    "Well-designed sharing can encrypt an item or vault key for another authorized account instead of sending plaintext through the provider."
  ],
  [
    CheckCircle2,
    "8. Recovery and export change the model",
    "Recovery determines who can restore access. Exports create a separate copy that may be encrypted, plaintext, or tied to the original product."
  ]
];

const architectureRows = [
  ["Authentication", "Proves an account or device may sign in", "Verifier, account state, MFA, device and security events", "Credential stuffing, stolen session, bad recovery"],
  ["Key derivation", "Turns human secrets into cryptographic material", "Salt and parameters; not normally the secret itself", "Weak password enables offline guessing"],
  ["Encryption", "Makes protected vault fields unreadable without keys", "Ciphertext and field/object structure", "Stolen encrypted vault becomes an offline target"],
  ["Synchronization", "Delivers encrypted changes between clients", "Ciphertext, versions, object sizes, timing, account metadata", "Rollback, deletion, conflict, or availability failure"],
  ["Local unlock", "Releases or reconstructs keys on an approved device", "Normally no plaintext server copy", "Malware or an unlocked stolen device reads data"],
  ["Autofill", "Matches saved items to a website or app", "Domain/app matching and feature state", "Phishing, clickjacking, iframe, or malicious-page abuse"],
  ["Sharing", "Lets another authorized identity decrypt selected data", "Membership, wrapped keys, authorization state", "Excess permissions, retained copies, bad offboarding"],
  ["Recovery", "Restores authentication or access to key material", "Recovery relationships and account state", "Recovery abuse or permanent lockout"],
  ["Export", "Creates a portable vault copy", "Nothing if local-only; provider may log the event", "Plaintext file leaks through disk, backup, or cloud sync"]
];

const recoveryTypes = [
  ["Authentication recovery", "Restores the right to sign in, but may not by itself recreate encryption keys."],
  ["Device approval", "Lets an existing device or trusted process approve a new client."],
  ["Key or vault recovery", "Restores access to decryption material through a documented key hierarchy."],
  ["Emergency access", "A trusted person gains view or takeover rights after approval or a waiting period."],
  ["Family recovery", "An organizer helps a household member under the provider's family design."],
  ["Organization recovery", "An administrator restores a managed member who enrolled in the recovery system."],
  ["Offline recovery", "Uses an Emergency Kit, recovery code, key file, or protected backup outside the provider."]
];

const failureModes = [
  ["Weak master password", "A stolen encrypted vault may be attacked offline using its salt and KDF parameters.", "Use a unique, strong account password and current KDF settings."],
  ["Provider breach", "Account records, sessions, metadata, source code, or ciphertext may be exposed depending on the incident.", "Evaluate the exact data and rotate affected secrets when required."],
  ["Compromised device", "Malware may capture keystrokes, memory, clipboard contents, screenshots, or filled values after unlock.", "Patch devices, use device encryption, and remove untrusted software."],
  ["Phishing or extension spoofing", "A malicious page may imitate extension UI or manipulate fill behavior.", "Use official extensions, verify domains, update promptly, and prefer deliberate fill where appropriate."],
  ["Malicious update", "A client that can legitimately decrypt the vault could be modified to copy data after unlock.", "Trust signed distribution, update channels, build security, and incident response."],
  ["Recovery abuse", "A weak recovery channel or overpowered administrator may restore access.", "Review who can recover whom, waiting periods, alerts, and offline codes."],
  ["Sharing and offboarding", "Recipients may retain exports, screenshots, or prior copies after access is revoked.", "Share the minimum, rotate credentials, and treat revocation as future-access control."],
  ["Plaintext export", "A migration file can expose the whole vault through local storage, backup, or cloud sync.", "Prefer encrypted export when compatible and clean up every copy."],
  ["Lost local-only vault", "Device failure or a forgotten password can make a local database unrecoverable.", "Maintain tested, protected backups and a recovery plan."],
  ["Self-hosting failure", "Missed updates, TLS errors, exposed admin access, or bad backups can defeat the intended benefit.", "Self-host only with ongoing operational capability."]
];

const checklist = [
  "Use a unique, strong account or master password.",
  "Enable MFA and protect recovery codes.",
  "Secure the email account tied to authentication and recovery.",
  "Install only official apps and browser extensions.",
  "Keep operating systems, browsers, extensions, and apps updated.",
  "Review domain-matching and autofill behavior.",
  "Understand what biometrics unlock on each device.",
  "Check KDF settings and migration guidance before changing them.",
  "Understand every recovery and emergency-access path.",
  "Share the minimum data with the minimum permissions.",
  "Remove old sessions and retired devices.",
  "Prefer encrypted exports when the destination supports them.",
  "Keep plaintext migration files out of synced folders and backups.",
  "Test local-only or self-hosted backups before relying on them."
];

const faq = [
  ["How does a password manager work?", "It stores credentials in an encrypted vault, derives keys from account secrets, synchronizes encrypted data when cloud sync is used, decrypts locally on authorized devices, and fills matching sites or apps."],
  ["Does the provider store my master password?", "Documented zero-knowledge systems generally do not store or transmit the master password in recoverable form. Authentication and key-derivation designs differ, so verify the exact provider."],
  ["What is a salt?", "A salt is public random data added to password-based derivation so identical passwords do not produce identical results and precomputed attacks are less useful. It does not need to be secret."],
  ["What is key derivation?", "A password-based KDF performs deliberately expensive computation to turn a human password into key material and make each offline guess costlier."],
  ["What is a work factor?", "It is a KDF parameter controlling computation, memory, or both. Recommended settings can rise as hardware improves, and old accounts may need a deliberate upgrade."],
  ["Are passwords encrypted before upload?", "In documented end-to-end encrypted managers, supported vault fields are encrypted by the client before cloud storage. Exact field and metadata scope varies."],
  ["Can the provider decrypt my vault?", "A genuine zero-knowledge architecture is designed so the provider lacks the required vault keys. Recovery, organization administration, shared vaults, and client software still affect the model."],
  ["What is the difference between authentication and encryption?", "Authentication proves an account or device may sign in. Encryption determines whether ciphertext can be read. A server can authenticate access without possessing plaintext vault keys."],
  ["How does cloud sync stay private?", "The server can store and deliver ciphertext. Authorized clients download encrypted state and decrypt it locally after unlock."],
  ["What happens when I unlock with biometrics?", "Face, fingerprint, or device credentials normally authorize access to locally protected key material or a cryptographic operation. The biometric is not normally the vault encryption key."],
  ["How does autofill know where a password belongs?", "The extension or OS autofill service compares the current domain or app identity with saved item metadata and applies its fill rules."],
  ["Can autofill protect against phishing?", "Exact-domain matching can help because a credential should not be offered to a lookalike domain. Extensions and autofill still face spoofing, clickjacking, iframe, redirect, and malicious-page risks."],
  ["How are passwords shared securely?", "A common design encrypts an item or vault key for another authorized user's public key or an organization key hierarchy rather than sending plaintext through the service."],
  ["Can revoking a share erase every copy?", "No. Revocation can stop future authorized access but cannot reliably erase screenshots, exports, prior copies, or credentials already used by the recipient."],
  ["What happens during recovery?", "Recovery may restore authentication, approve a device, use an offline code, let a trusted contact in, or rewrap keys through a family or organization authority. These are different models."],
  ["Does MFA encrypt my vault?", "MFA usually protects online authentication. It does not automatically add entropy to ciphertext an attacker already stole unless the architecture explicitly binds it into key protection."],
  ["Where are passkeys stored?", "A manager can store passkey private keys as encrypted vault data and sync them to authorized clients. Portability, sharing, and recovery still vary."],
  ["What happens offline?", "Previously synchronized vault data can often be decrypted locally after unlock. New changes wait to synchronize, and the device may hold an encrypted cached vault."],
  ["Are exports encrypted?", "Some managers offer encrypted exports, while CSV and common JSON exports are plaintext. Check compatibility and remove plaintext copies from local disks, backups, and sync folders."],
  ["Is local-only storage safer?", "It avoids some provider-side exposure but increases backup, device-loss, conflict, update, and recovery responsibilities. It is a different tradeoff, not an automatic upgrade."],
  ["Is self-hosting safer?", "Self-hosting changes the server operator. The operator must maintain updates, TLS, access control, logs, backups, monitoring, and disaster recovery."],
  ["What happens if the company is breached?", "The impact depends on whether attackers obtained account data, sessions, metadata, source code, development systems, encrypted vaults, or plaintext. These incidents are not equivalent."],
  ["Can malware read an unlocked vault?", "Malware with sufficient access may capture filled values, clipboard data, keystrokes, memory, screenshots, or plaintext exports. Vault encryption does not replace device security."],
  ["Can a malicious update steal vault data?", "In principle, a modified client that legitimately decrypts the vault could copy data after unlock. This is why signed distribution, update security, code review, and incident response matter."],
  ["What data can the provider still know?", "Depending on the service: account email, billing, support, device and login events, diagnostics, website analytics, alias routing, sharing membership, and synchronization timing or size metadata."],
  ["Do password managers work without browser extensions?", "Yes. Apps can store, generate, copy, and sometimes fill through operating-system integrations. Extensions make website saving and filling more convenient but add attack surface."],
  ["What should I check before choosing one?", "Check encrypted fields, KDF settings, MFA, local unlock, recovery, sharing, audits, extension behavior, export formats, platform support, telemetry, deletion, and incident response."]
];

const sources = [
  ["NIST SP 800-63B", "https://pages.nist.gov/800-63-4/sp800-63b.html"],
  ["FIDO passkeys", "https://fidoalliance.org/passkeys/"],
  ["Apple Keychain with Face ID or Touch ID", "https://developer.apple.com/documentation/localauthentication/accessing-keychain-items-with-face-id-or-touch-id"],
  ["Android Keystore features", "https://source.android.com/docs/security/features/keystore/features"],
  ["Android authentication and hardware-backed Keystore", "https://source.android.com/docs/security/features/authentication"],
  ["CERT password-manager extension clickjacking note", "https://www.kb.cert.org/vuls/id/516608"],
  ["Bitwarden security white paper", "https://bitwarden.com/help/bitwarden-security-white-paper/"],
  ["Bitwarden KDF algorithms", "https://bitwarden.com/help/kdf-algorithms/"],
  ["Bitwarden account encryption key", "https://bitwarden.com/help/account-encryption-key/"],
  ["Bitwarden emergency access", "https://bitwarden.com/help/emergency-access/"],
  ["Bitwarden export", "https://bitwarden.com/help/export-your-data/"],
  ["1Password authentication and encryption", "https://support.1password.com/authentication-encryption/"],
  ["1Password Secret Key", "https://support.1password.com/secret-key-security/"],
  ["1Password Secure Remote Password", "https://support.1password.com/secure-remote-password/"],
  ["1Password security white paper", "https://1password.com/files/1Password-White-Paper.pdf"],
  ["1Password recovery", "https://support.1password.com/recovery/"],
  ["Proton Pass security model", "https://proton.me/blog/proton-pass-security-model"],
  ["Proton Pass passkeys", "https://proton.me/blog/proton-pass-passkeys"],
  ["NordPass security", "https://nordpass.com/security/"],
  ["KeePassXC documentation", "https://keepassxc.org/docs/"],
  ["USENIX 2014 password-manager attacks and defenses", "https://www.usenix.org/system/files/conference/usenixsecurity14/sec14-paper-silver.pdf"],
  ["USENIX 2020 password-manager lifecycle study", "https://www.usenix.org/conference/usenixsecurity20/presentation/oesch"],
  ["USENIX 2022 mobile autofill analysis", "https://www.usenix.org/system/files/sec22-mayer.pdf"],
  ["USENIX 2025 extension phishing study", "https://www.usenix.org/conference/usenixsecurity25/presentation/anliker"],
  ["Autofill hardening research", "https://arxiv.org/abs/2402.06159"],
  ["Secure browser authentication channel research", "https://arxiv.org/abs/2509.02289"]
];

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="font-semibold text-teal-700 underline underline-offset-4" to={to}>
      {children}
    </Link>
  );
}

export function HowPasswordManagersWorkPage() {
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
            Password manager explainer
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-200">
            A password manager is not simply a locked spreadsheet in the cloud. Good designs
            separate authentication from encryption, derive keys locally, synchronize ciphertext,
            and decrypt only for authorized clients.
          </p>
          <p className="mt-5 max-w-4xl leading-7 text-slate-300">
            The explanation below describes common patterns and named examples—not one universal
            architecture shared by every product.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-7">
            <p className="text-xs font-black uppercase tracking-wider text-teal-800">Quick answer</p>
            <h2 className="mt-2 text-3xl font-black">Encrypt locally, sync ciphertext, unlock on approved devices</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A password manager turns account secrets into key material, encrypts supported vault
              fields before cloud sync, and unlocks locally. The important differences are salts,
              KDF settings, metadata, local key storage, autofill, sharing, recovery, software
              updates, exports, and what the provider still knows.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">The password lifecycle</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {lifecycle.map(([Icon, heading, body]) => {
              const StepIcon = Icon as typeof KeyRound;
              return (
                <article className="rounded-3xl border bg-white p-6 shadow-sm" key={heading as string}>
                  <StepIcon className="h-7 w-7 text-teal-700" />
                  <h3 className="mt-3 text-xl font-black">{heading as string}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{body as string}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Authentication and encryption are different</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            A server can decide that an account may receive encrypted data without possessing the
            keys needed to read it. Providers use different terminology and key hierarchies, so the
            table describes functions rather than one product's internals.
          </p>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border">
            <table className="min-w-[1080px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  {['Layer', 'Job', 'What the server may hold', 'Failure example'].map((heading) => (
                    <th className="p-4" key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {architectureRows.map((row) => (
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
          <h2 className="text-3xl font-black">What this guide did—and did not—verify</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
            We used current security white papers, platform documentation, standards, CERT material,
            and academic research. We did not inspect code, capture telemetry, benchmark KDFs, test
            extensions, reproduce sharing or recovery, self-host a service, or simulate a breach or
            malicious update.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14 space-y-12">
          <div>
            <h2 className="text-3xl font-black">Salts, KDFs, and work factors</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A salt is public random data that makes identical passwords derive different results
              and reduces the value of precomputed attacks. A password-based key-derivation function
              then consumes computation and, for memory-hard designs, memory for every guess.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Bitwarden documents PBKDF2 and Argon2id options. 1Password combines the account password
              with a device-generated Secret Key. These are examples, not universal requirements.
              Work factors can change as hardware improves, and older accounts may need a deliberate
              parameter or key upgrade.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Client-side encryption and server storage</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              In an end-to-end encrypted design, supported vault fields are encrypted before upload.
              The service stores ciphertext and sends it to authorized clients. It still operates
              account authentication, availability, synchronization, software delivery, and often
              retains operational metadata.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Local keys and biometric unlock</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Apps may keep protected local key material so a user can unlock with Face ID, Touch ID,
              Windows Hello, Android biometrics, or a device credential. Apple and Android document
              the general platform pattern: successful authentication authorizes Keychain/Keystore
              access or a cryptographic operation. The fingerprint or face template is not normally
              the vault encryption key.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Fallback credentials, timeouts, invalidation, secure hardware, and app implementation
              differ. Malware or physical access to an unlocked device remains a separate risk.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Cloud sync and offline vaults</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Authorized clients upload encrypted changes and download ciphertext. Previously synced
              data may remain cached so the vault works offline. That means a lost device can contain
              an encrypted local vault and protected key material, making device encryption, lock
              settings, app timeout, and remote device controls important.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Browser extensions and autofill</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Extensions match entries to domains and place user-interface elements inside or above
              a hostile web environment. Exact-domain matching can reduce phishing risk, but USENIX
              and CERT research shows risks involving automatic fill, iframes, malicious scripts,
              extension UI spoofing, and DOM-level clickjacking.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Those studies apply to tested products, versions, and threat models; they do not prove
              every current extension is vulnerable. Mobile autofill uses OS frameworks and has its
              own confused-deputy risks documented in USENIX Security 2022.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Sharing and key wrapping</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Sharing can encrypt an item or vault key for another user's public key or an
              organization/family hierarchy. Bitwarden organizations and 1Password shared vaults
              are documented examples. Server authorization can still enforce roles and membership.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Revoking access controls future authorized use. It cannot guarantee deletion of a
              screenshot, export, copied secret, or credential already used by a recipient.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Recovery is not one feature</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            “Recovery” can restore different things through different authorities. A product can
            preserve a zero-knowledge vault model while enabling authorized key rewrapping or
            trusted recovery—but the details determine who can help whom.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {recoveryTypes.map(([type, explanation]) => (
              <article className="rounded-2xl border bg-white p-5" key={type}>
                <h3 className="font-black">{type}</h3>
                <p className="mt-2 leading-7 text-slate-700">{explanation}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14 space-y-12">
          <div>
            <h2 className="text-3xl font-black">Where MFA fits</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              MFA makes unauthorized online sign-in harder. It usually does not add entropy to an
              encrypted vault an attacker already possesses because offline guessing depends on the
              encryption design and account secrets, not a later server challenge. Verify any
              architecture that claims to bind another factor into key protection.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">How passkeys fit</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A manager can store a passkey private key as encrypted vault data and present it only
              for the matching relying party. The website stores the public credential. Passkey
              sync, sharing, Credential Exchange, export, and recovery are still evolving, so a
              passkey inherits the vault's provider, device, and recovery model.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Exports, migration, and deletion</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Exports can be plaintext, encrypted, or vendor-bound. CSV and common JSON formats are
              broadly compatible because they are readable—which is also why they are dangerous.
              Test the destination import, keep the file out of synced folders, and remove every
              copy you can identify.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Deleting one export does not prove erasure from SSD history, backups, temporary files,
              endpoint tools, or cloud synchronization. Deleting a vault or account can also leave
              legal, billing, security, backup, or recipient records under current policies.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Local-only and self-hosted designs</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Local-only vaults avoid a hosted sync provider but shift backup, multi-device access,
              conflict handling, and disaster recovery to the user. Self-hosting changes who
              operates the server while adding TLS, patching, logs, access control, backups,
              monitoring, and availability work. Neither is automatically safer.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Failure modes the encryption diagram does not eliminate</h2>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border border-white/20">
            <table className="min-w-[980px] w-full text-left text-sm">
              <thead className="bg-white/10">
                <tr>
                  {['Failure mode', 'What can happen', 'Practical mitigation'].map((heading) => (
                    <th className="p-4" key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {failureModes.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td className={`p-4 align-top ${index === 0 ? 'font-bold text-teal-300' : 'text-slate-200'}`} key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14 space-y-12">
          <div>
            <h2 className="text-3xl font-black">What happens if the provider is breached?</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A breach can expose account records, sessions, source code, development systems,
              metadata, encrypted vaults, or plaintext. These are not equivalent. Stolen encrypted
              vaults are serious because attackers can perform offline guesses against weak account
              passwords using the captured salt, KDF parameters, and ciphertext.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Malware and unlocked devices</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Vault encryption protects stored data. Malware with sufficient access after unlock may
              capture keystrokes, clipboard contents, filled values, screenshots, browser data,
              memory, or exports. Password managers do not replace device encryption, updates,
              endpoint security, or phishing awareness.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Malicious updates and supply-chain risk</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              A client that legitimately decrypts a vault could be modified to copy data after
              unlock. This makes code signing, update channels, build systems, extension stores,
              source review, and incident response part of the trust model. This is an architecture
              boundary, not an allegation that any provider delivered a malicious update.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">What the provider can still know</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              "Account email or identifier",
              "Billing and payment-processor records",
              "Support conversations",
              "Login, device, and abuse-prevention events",
              "IP-derived security information",
              "Optional diagnostics or telemetry",
              "Website cookies and analytics",
              "Alias routing and anti-abuse data",
              "Encrypted object sizes and timing",
              "Sharing membership and authorization state",
              "Retention and deletion records",
              "Organization or family administration state"
            ].map((item) => (
              <div className="rounded-2xl border bg-white p-5 text-slate-700" key={item}>{item}</div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            Compare those differences in{" "}
            <InternalLink to="/best-password-managers-for-privacy">
              Best Password Managers for Privacy
            </InternalLink>. For the broader safety verdict, read{" "}
            <InternalLink to="/are-password-managers-safe">Are Password Managers Safe?</InternalLink>.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Safe-use checklist</h2>
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
            Current architecture references were checked on July 12, 2026. Provider sources are
            examples of documented implementations; academic and CERT sources apply to tested
            systems, versions, and threat models.
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
            <h2 className="text-3xl font-black">Final takeaway</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              The useful core is simple: derive keys locally, encrypt supported vault fields,
              synchronize ciphertext, and decrypt only for authorized clients. The real differences
              live in KDF parameters, metadata, local key storage, autofill, sharing, recovery,
              software delivery, exports, and device security.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Use the <InternalLink to="/password-managers">Password Manager Decision Hub</InternalLink>{" "}
              when you are ready to choose, or compare built-in and dedicated options in{" "}
              <InternalLink to="/password-manager-vs-browser-passwords">
                Password Manager vs Browser Passwords
              </InternalLink>.
            </p>
          </div>
        </Container>
      </Section>

      <Newsletter />
    </>
  );
}
