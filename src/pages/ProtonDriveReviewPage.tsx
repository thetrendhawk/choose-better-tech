import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/reviews/proton-drive-review";
const title = "Proton Drive Review 2026: Private Cloud Storage With Tradeoffs";
const description =
  "A documentation-based Proton Drive review covering encryption, metadata, apps, sharing, recovery, pricing, family use, business limits, and alternatives.";

const quickFacts = [
  ["Best for", "Privacy-conscious users who value end-to-end encrypted storage and already use Proton"],
  ["Not best for", "Linux users who need a native GUI sync app or teams needing deep office-suite collaboration"],
  ["Strongest advantage", "Proton documents end-to-end encryption for file contents, filenames, folder names, and thumbnails"],
  ["Biggest limitation", "Privacy gains come with recovery, collaboration, migration, and administration tradeoffs"],
  ["Testing status", "Documentation and public-audit review only; no live product account testing"],
  ["Recommendation", "A strong documentation-based privacy fit, not a universal best cloud-storage service"]
];

const privacyRows = [
  ["File contents", "End-to-end encrypted under Proton's documented design", "CBT did not verify the cryptographic implementation"],
  ["Names and previews", "File names, folder names, and thumbnails are documented as end-to-end encrypted", "No current public audit covers the complete 2026 service"],
  ["File size", "Proton says it stores an encrypted size value", "Do not treat size as completely hidden from the service"],
  ["Operational metadata", "Creation and modification times, permissions, and uploader username can be processed", "Retention details are not fully documented"],
  ["Public links", "Creator, creation time, last access, and access count can be recorded", "A supplied link and password can allow abuse review"],
  ["Invited sharing", "Named-recipient workflows use account or email identity and permissions", "This differs from a bearer public link"],
  ["Account activity", "General account, payment, fraud-prevention, security, and service data may be processed", "Drive-specific event fields and retention are not fully verified"]
];

const platformRows = [
  ["Web", "Supported", "Browser-delivered code remains part of the trust model"],
  ["Windows", "Native sync app with on-demand files", "Reliability and offline behavior were not hands-on tested"],
  ["macOS", "Native sync app with online-only and offline files", "Reliability and offline behavior were not hands-on tested"],
  ["Android", "Mobile app and encrypted photo backup", "Device-specific behavior was not tested"],
  ["iPhone and iPad", "Mobile app and encrypted photo backup", "Preview and backup behavior was not tested"],
  ["Linux", "Cross-platform command-line interface plus web access", "No native Linux GUI synchronized-folder app was verified"]
];

const planRows = [
  ["Proton Free", "Drive starts at 2 GB and can reach 5 GB after setup actions", "The 5 GB headline is conditional, not the default at signup"],
  ["Drive Plus", "200 GB in a Drive-focused plan", "Exact regional checkout and renewal price was not independently captured"],
  ["Proton Unlimited", "500 GB plus the wider Proton bundle", "Value depends on whether the other Proton services are useful"],
  ["Proton Duo", "2 TB shared by up to two users", "Storage is shared and plan pricing is volatile"],
  ["Proton Family", "3 TB shared by up to six users", "The primary administrator controls allocation and cannot currently be changed"],
  ["Business plans", "Drive-focused and broader Workspace allocations", "Administrator access and offboarding rules change the privacy model"]
];

const alternatives = [
  ["Google Drive", "Choose it for mature Docs, Sheets, and Slides collaboration or a Google-first household."],
  ["Dropbox", "Choose it for a focused conventional-file sync layer, including an official Linux desktop app."],
  ["iCloud Drive", "Choose it for tight Apple device, Photos, backup, and family integration."],
  ["OneDrive", "Choose it when Windows, Microsoft 365, Office files, and organization controls matter most."],
  ["Sync.com", "Compare it when encrypted sharing and a privacy-focused storage workflow matter more than office-suite depth."],
  ["Tresorit", "Compare it for privacy-focused business controls, while checking plan cost and administrative needs."],
  ["pCloud", "Compare its conventional storage, Linux support, and separately scoped Crypto option carefully."],
  ["MEGA or Filen", "Consider them only after checking current platform, recovery, sharing, audit, and plan evidence for your use case."]
];

const faq = [
  [
    "Is Proton Drive private?",
    "Proton documents end-to-end encryption for file contents, filenames, folder names, and thumbnails. It still processes operational and account metadata, so private does not mean anonymous or invisible to the provider."
  ],
  [
    "Can Proton see my Proton Drive files?",
    "Under Proton's documented design, ordinary stored file contents are end-to-end encrypted. Public-link abuse reports, compromised devices, recipients, account recovery, and managed-business administrator access create important exceptions or different trust boundaries."
  ],
  [
    "Does Proton Drive encrypt metadata?",
    "It encrypts more fields than many mainstream services, including names and thumbnails, but not every operational field. Timestamps, permissions, uploader information, link activity, and account data can remain available to operate the service."
  ],
  [
    "Does Proton Drive work on Linux?",
    "A Proton Drive command-line interface is documented for Linux, macOS, and Windows. We did not verify a native Linux GUI synchronized-folder app, so Linux users should not assume the same desktop workflow available on Windows or macOS."
  ],
  [
    "Is Proton Drive free?",
    "Yes. The Drive allowance starts at 2 GB and can reach 5 GB after completing setup actions. Plan limits and onboarding requirements can change, so check the current official page."
  ],
  [
    "Is Proton Drive a backup?",
    "Not by itself. Sync can propagate deletion, corruption, or unwanted changes. Version history and Trash may help within their limits, but irreplaceable files still need an independent backup."
  ],
  [
    "What happens if I forget my Proton password?",
    "Resetting account access and recovering encrypted data are separate. A recovery email or phone can reset access but does not by itself decrypt old files. Set up and protect a recovery phrase, file, device, or other supported recovery method before a problem occurs."
  ],
  [
    "Can Proton Drive recover ransomware-encrypted files?",
    "Version history may help when clean versions remain available, but CBT did not test ransomware recovery. Do not treat documented version retention as a recovery guarantee."
  ],
  [
    "Is Proton Drive good for families?",
    "It can fit privacy-conscious families because members use separate accounts and share pooled storage. The primary administrator allocates space, departing members move to a temporary Unlimited trial, and over-quota consequences still need planning."
  ],
  [
    "Is Proton Drive good for business?",
    "It may fit teams prioritizing encrypted storage, but supported administrators can sign in as managed users and access their files. Ownership transfer, full organization export, and every offboarding path were not fully verified."
  ],
  [
    "Can I move files from Google Drive to Proton Drive?",
    "Proton documents a Google Takeout download followed by upload through its web or desktop apps. Versions, permissions, comments, links, and Google-native document behavior may not transfer cleanly."
  ],
  [
    "Is Proton Drive better than Google Drive or Dropbox?",
    "It is a stronger documentation-based privacy fit when provider access to file contents and names is a priority. Google Drive is stronger for office collaboration, while Dropbox is a more focused conventional sync layer with an official Linux desktop app."
  ]
];

const sourceGroups = [
  {
    title: "Architecture and privacy",
    links: [
      ["Proton Drive privacy policy", "https://proton.me/drive/privacy-policy"],
      ["Proton Drive security architecture", "https://proton.me/blog/protondrive-security"],
      ["Proton Drive threat model", "https://proton.me/blog/proton-drive-threat-model"],
      ["Proton Drive shared SDK update", "https://proton.me/blog/drive-sdk-june-2026"],
      ["Proton general privacy policy", "https://proton.me/legal/privacy"]
    ]
  },
  {
    title: "Plans, recovery, and platform support",
    links: [
      ["Storage allowances", "https://proton.me/support/increase-storage-space"],
      ["Proton plan overview", "https://proton.me/support/proton-plans"],
      ["Version history", "https://proton.me/support/version-history"],
      ["Downgrade and over-quota behavior", "https://proton.me/support/free-plan-limits"],
      ["Account and data recovery methods", "https://proton.me/support/set-account-recovery-methods"],
      ["Drive data recovery", "https://proton.me/support/drive-data-recovery"],
      ["Deleting a Proton account", "https://proton.me/support/delete-account"],
      ["Proton Drive CLI", "https://proton.me/support/drive-cli"]
    ]
  },
  {
    title: "Sharing, family, business, and portability",
    links: [
      ["Shareable links", "https://proton.me/support/drive-shareable-link"],
      ["Sharing permissions", "https://proton.me/support/drive-manage-access-shared-files"],
      ["Proton Family guide", "https://proton.me/support/get-started-proton-family"],
      ["Business administrator access", "https://proton.me/support/access-account-proton-drive"],
      ["Google Drive migration", "https://proton.me/support/import-files-google-drive"],
      ["Proton Docs import and export", "https://proton.me/support/drive-import-export-docs"],
      ["Proton Sheets import and export", "https://proton.me/support/sheets-import-export"]
    ]
  },
  {
    title: "Independent and scoped security evidence",
    links: [
      ["Securitum Proton Drive iOS audit (2022)", "https://res.cloudinary.com/dbulfrlrz/images/v1707564693/wp-pme/Securitum_Proton_Drive_mobile_iOS/Securitum_Proton_Drive_mobile_iOS.pdf?_i=AA"],
      ["Securitum Proton Drive Android audit (2022)", "https://res.cloudinary.com/dbulfrlrz/images/v1707564691/wp-pme/Securitum_Proton_Drive_mobile_Android/Securitum_Proton_Drive_mobile_Android.pdf?_i=AA"],
      ["Proton mobile open-source announcement", "https://proton.me/blog/drive-mobile-apps-open-source"],
      ["Proton SOC 2 announcement", "https://proton.me/blog/soc-2"],
      ["Proton bug-bounty program", "https://proton.me/security/bug-bounty"]
    ]
  }
];

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="font-semibold text-teal-700 underline underline-offset-4">
      {children}
    </Link>
  );
}

export function ProtonDriveReviewPage() {
  const canonical = `${site.url}${path}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      mainEntityOfPage: canonical,
      datePublished: "2026-07-13",
      dateModified: "2026-07-13"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Reviews", item: `${site.url}/reviews` },
        { "@type": "ListItem", position: 3, name: "Proton Drive Review", item: canonical }
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
            Cloud storage review
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-200">
            Proton Drive is compelling when privacy architecture matters more than office-suite
            depth. Its end-to-end encryption does not remove metadata, recovery, collaboration,
            administration, or portability tradeoffs.
          </p>
          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
            This is a documentation-based review. We did not test sync speed, app reliability,
            recovery, migration, support, billing, cancellation, or the cryptographic
            implementation.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-7">
            <p className="text-xs font-black uppercase tracking-wider text-teal-800">Quick verdict</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Strong for encrypted personal storage, but not the default for every workflow
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Choose Proton Drive when reducing provider access to file contents and names is a
              priority and you can accept a smaller collaboration ecosystem. Choose an alternative
              when native Linux GUI sync, mature office collaboration, independently tested
              performance, or fully documented business offboarding matters more.
            </p>
          </div>
          <dl className="mt-7 grid gap-4 md:grid-cols-2">
            {quickFacts.map(([label, value]) => (
              <div className="rounded-2xl border bg-white p-5" key={label}>
                <dt className="text-xs font-black uppercase tracking-wider text-teal-700">{label}</dt>
                <dd className="mt-2 leading-7 text-slate-700">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">What Proton Drive is</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Proton Drive is a cloud-storage, sync, sharing, photo-backup, and collaborative-document
            service operated by Proton AG in Geneva, Switzerland. It uses the same Proton Account
            as Mail, VPN, Pass, Calendar, Docs, and Sheets and is sold both as a Drive-focused plan
            and inside broader bundles.
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Proton says the non-profit Proton Foundation is Proton AG's primary voting shareholder,
            while Proton AG remains the for-profit operating company. That governance structure and
            Swiss jurisdiction are relevant context, not substitutes for architecture, account
            security, or careful recovery planning.
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            If you are choosing a category rather than evaluating Proton specifically, start with
            our <InternalLink to="/best-cloud-storage-for-beginners">beginner cloud-storage guide</InternalLink>.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Privacy and encryption: broad coverage, not invisibility</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Proton documents end-to-end encryption for file content, filenames, folder names, and
            thumbnail previews. Its published design uses client-side keys, encrypted node metadata,
            wrapped session keys, and signatures intended to make content substitution detectable.
            CBT did not audit that implementation.
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            End-to-end encryption narrows what the provider can ordinarily read, but the service
            still needs operational data. Account takeover, an unlocked infected device, exposed
            links, recipient copies, compromised recovery channels, software defects, and managed
            administrator powers remain outside the simple promise that files are encrypted.
          </p>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border" aria-label="Proton Drive privacy field comparison">
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  {['Field or workflow', 'Documented treatment', 'Important limit'].map((heading) => (
                    <th className="p-4" key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {privacyRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td className={index === 0 ? "p-4 align-top font-bold" : "p-4 align-top"} key={cell}>{cell}</td>
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
          <h2 className="text-3xl font-black">Security evidence: useful, dated, and limited in scope</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-xl font-black text-teal-300">Open source and public audits</h3>
              <p className="mt-3 leading-7 text-slate-200">
                Proton publishes client and SDK source repositories and linked public Securitum
                audits for its 2022 iOS and Android apps. The iOS report excluded the backend; the
                Android report included the app, selected REST API work, and source analysis.
              </p>
              <p className="mt-3 leading-7 text-slate-200">
                The reports recorded no Critical, High, or Medium findings, but they did record Low
                and Informational findings and show no public retest date. They do not validate the
                current web, desktop, server, deployment, or shared-SDK implementation.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-xl font-black text-teal-300">SOC 2 and incident limits</h3>
              <p className="mt-3 leading-7 text-slate-200">
                Proton announced a SOC 2 Type II attestation in 2025 and maintains a bug-bounty
                program. Those are evidence about scoped controls and disclosure processes, not a
                product-specific cryptographic guarantee.
              </p>
              <p className="mt-3 leading-7 text-slate-200">
                We did not establish a comprehensive Proton Drive incident history. This review
                therefore makes no “never breached” or perfect-record claim.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Apps and platform support</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Proton now documents mainstream web, Windows, macOS, Android, and Apple mobile access.
            Windows and macOS support synchronized folders, placeholders or online-only files, and
            offline availability. Mobile apps support encrypted photo backup. Those features were
            not hands-on tested for speed, reliability, battery use, or format coverage.
          </p>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border" aria-label="Proton Drive platform support">
            <table className="min-w-[820px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  {['Platform', 'Current documented path', 'Qualification'].map((heading) => (
                    <th className="p-4" key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {platformRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td className={index === 0 ? "p-4 align-top font-bold" : "p-4 align-top"} key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-7 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <strong>Linux distinction:</strong> Proton Drive's CLI can list, upload, download, and
            share files on Linux. That is not the same experience as a native GUI synchronized
            folder. Dropbox or pCloud may fit better when an official Linux desktop interface is
            essential.
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Sharing and collaboration</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Proton Drive supports public links, named invitations, Viewer and Editor roles,
            password and expiration controls, revocation, shared folders, encrypted Docs, and
            Sheets. Non-Proton recipients can edit Docs or Sheets through suitable public links.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-black">Where it works well</h3>
              <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                <li>Small groups can share files and folders with clear Viewer or Editor roles.</li>
                <li>Public links can use passwords and expiration dates.</li>
                <li>Docs and Sheets add encrypted real-time document collaboration.</li>
                <li>Uploads through an editable shared folder can cover simple collection workflows.</li>
              </ul>
            </article>
            <article className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-black">Where expectations need limits</h3>
              <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                <li>Free accounts currently allow up to three editor-access sharing links.</li>
                <li>Public-link possession transfers trust to the recipient, even with a password.</li>
                <li>Revocation cannot retrieve copies someone already downloaded.</li>
                <li>Import and export format lists do not prove perfect Microsoft or Google fidelity.</li>
                <li>The evidence does not support calling Proton a full Google Workspace replacement.</li>
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Recovery, versions, and backup limits</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Proton Free currently saves up to 10 versions of a file for up to seven days. Eligible
            paid plans can be configured for up to 200 versions and up to 10 years. That is useful
            retention documentation, not tested ransomware recovery.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border p-5">
              <h3 className="font-black">Trash</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Trashed files keep consuming storage until permanently deleted. We did not verify
                an automatic Trash-expiry window, so this review does not invent one.
              </p>
            </article>
            <article className="rounded-2xl border p-5">
              <h3 className="font-black">Password reset</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Resetting account access and decrypting old data are separate. Email or phone
                recovery alone does not unlock old encrypted files.
              </p>
            </article>
            <article className="rounded-2xl border p-5">
              <h3 className="font-black">Data recovery</h3>
              <p className="mt-3 leading-7 text-slate-700">
                A recovery phrase, file, signed-in device, contact, or old password may be needed.
                Unrecoverable Drive data may ultimately need to be deleted.
              </p>
            </article>
          </div>
          <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
            <h3 className="text-xl font-black text-teal-300">Sync is not an independent backup</h3>
            <p className="mt-3 max-w-4xl leading-7 text-slate-200">
              A synchronized deletion or corrupt change can reach connected devices. Keep a second
              protected copy of irreplaceable files in a separate system and practice restoring it.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Plans and pricing: compare structure, not a promotional number</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Proton sells Drive alone and inside wider bundles. Prices can vary by currency, region,
            billing term, taxes, promotion, and renewal. We did not capture a stable regional Drive
            Plus checkout price, so this review does not hard-code one.
          </p>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border" aria-label="Proton Drive plan structure">
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  {['Plan', 'Documented storage or structure', 'Reader caution'].map((heading) => (
                    <th className="p-4" key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {planRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td className={index === 0 ? "p-4 align-top font-bold" : "p-4 align-top"} key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
              <h3 className="font-black">Refund wording needs qualification</h3>
              <p className="mt-2 leading-7">
                Proton advertises a 30-day guarantee, while detailed wording limits the initial
                purchase refund to the unused portion and leaves later refunds discretionary.
                Verify the governing terms and purchase channel before relying on it.
              </p>
            </article>
            <article className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
              <h3 className="font-black">Downgrading above quota carries real risk</h3>
              <p className="mt-2 leading-7">
                Sync, uploads, and photo backup stop when the lower limit is exceeded. Proton warns
                that unresolved excess data can be deleted after 12 months, potentially across an
                affected app because it cannot selectively decrypt and remove particular files.
              </p>
            </article>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-5">
              <h3 className="font-black">Cancellation is not the same as deleting your account</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Ending a paid plan can move the account onto lower limits, so export or reduce data
                before a downgrade leaves it over quota. Deleting the Proton account is much more
                consequential: Proton says it permanently deletes data across Proton services, not
                only Drive, and the username is not recycled.
              </p>
            </article>
            <article className="rounded-2xl border bg-white p-5">
              <h3 className="font-black">Support quality remains untested</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Proton publishes a substantial support library, which supplied much of the plan and
                workflow evidence in this review. CBT did not open a support case or measure response
                time, resolution quality, refund handling, or cancellation assistance, so we do not
                score customer support.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Family and business use</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6">
              <p className="text-xs font-black uppercase tracking-wider text-teal-700">Families</p>
              <h3 className="mt-2 text-2xl font-black">Separate accounts with pooled storage</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Duo and Family members use separate Proton accounts rather than sharing one login.
                The Family administrator allocates the 3 TB pool but cannot read another member's
                files unless that member shares them.
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                Removed or departing members keep their data and move to a 30-day Unlimited trial.
                Afterward, ordinary downgrade and over-quota rules may matter. The primary Family
                administrator cannot currently be changed.
              </p>
            </article>
            <article className="rounded-2xl border bg-white p-6">
              <p className="text-xs font-black uppercase tracking-wider text-teal-700">Businesses</p>
              <h3 className="mt-2 text-2xl font-black">Managed accounts change the privacy boundary</h3>
              <p className="mt-3 leading-7 text-slate-700">
                On supported Workspace plans, an administrator can sign in as a managed user and
                view, download, delete, or restore Drive files. A user cannot disable that power.
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                Deleting an organization-created identity can delete its account and data. We did
                not verify automatic Drive ownership transfer, complete organization export, or
                link survival across every offboarding path. Export and reassign critical data
                before removing a user.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Portability and migration</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
            Ordinary files can be downloaded through the web app, desktop apps, or CLI. Proton Docs
            and Sheets export to common formats. That lowers file-level lock-in, but it does not
            make an entire cloud workflow portable.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-black text-teal-300">Moving in</h3>
              <p className="mt-2 leading-7 text-slate-200">
                Google Drive migration currently uses Google Takeout followed by upload through
                Proton's web or desktop app. Split archives and Google-native files can require
                reorganization or conversion.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-black text-teal-300">Moving out</h3>
              <p className="mt-2 leading-7 text-slate-200">
                Versions, permissions, collaborator relationships, public links, shared albums,
                and audit history are not documented as portable. Large-library export and native
                document fidelity were not tested.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Proton Drive versus alternatives</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Proton is not automatically better because it encrypts more content fields. The right
            alternative depends on which workflow matters most.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {alternatives.map(([name, guidance]) => (
              <article className="rounded-2xl border bg-white p-5" key={name}>
                <h3 className="font-black">{name}</h3>
                <p className="mt-2 leading-7 text-slate-700">{guidance}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-4xl leading-7 text-slate-700">
            For a detailed mainstream decision, read our{' '}
            <InternalLink to="/comparisons/google-drive-vs-dropbox">Google Drive vs Dropbox comparison</InternalLink>.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Who should choose Proton Drive?</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border-2 border-teal-300 bg-teal-50 p-6 text-teal-950">
              <h3 className="text-xl font-black">Good fit</h3>
              <ul className="mt-4 space-y-3 leading-7">
                <li>You want E2EE for file contents and names under Proton's documented design.</li>
                <li>You already use Proton and value one privacy-focused account and bundle.</li>
                <li>You use Windows, macOS, Android, or Apple mobile devices.</li>
                <li>You need encrypted photo backup or modest Docs and Sheets collaboration.</li>
                <li>You will protect recovery material and keep a separate backup.</li>
              </ul>
            </article>
            <article className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 text-amber-950">
              <h3 className="text-xl font-black">Choose something else</h3>
              <ul className="mt-4 space-y-3 leading-7">
                <li>You require a native Linux GUI synchronized-folder workflow.</li>
                <li>You depend on deep Google or Microsoft office collaboration.</li>
                <li>You expect the provider to recover old encrypted data without recovery material.</li>
                <li>You need independently tested speed, reliability, conflict handling, or migration.</li>
                <li>Your business needs verified ownership transfer and complete offboarding export.</li>
              </ul>
            </article>
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
          <h2 className="text-3xl font-black">Evidence checked for this review</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Facts were checked on July 13, 2026. Official documentation establishes current
            documented architecture, features, limits, and terms. It does not independently prove
            deployed security, speed, reliability, recovery success, or support quality.
          </p>
          <div className="mt-8 space-y-8">
            {sourceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-black">{group.title}</h3>
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {group.links.map(([label, href]) => (
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
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-8">
            <h2 className="text-3xl font-black">Final verdict</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Proton Drive is a strong documentation-based privacy fit for people who want broad
              end-to-end encrypted file coverage and can accept a less mature collaboration and
              migration ecosystem. It is not the universal best choice, and its encryption does
              not erase metadata, recovery, administrator, sharing, or device-security risks.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Before committing, configure data recovery, test sharing and export with nonessential
              files, confirm the current regional plan terms, and keep an independent backup.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              If privacy is only one part of your ecosystem decision, compare the mainstream
              workflows in our{" "}
              <InternalLink to="/comparisons/icloud-vs-google-drive">
                iCloud vs Google Drive comparison
              </InternalLink>.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Comparing encrypted providers and client-side vaults? See our{" "}
              <InternalLink to="/best-secure-cloud-storage">Best Secure Cloud Storage guide</InternalLink>.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-teal-700 px-5 py-3 font-bold text-white transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                href="https://proton.me/drive"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Proton Drive's official site
              </a>
              <span className="text-sm text-slate-600">Non-affiliate link; no Proton Drive tracking is used.</span>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <strong>Methodology and testing disclosure:</strong> CBT reviewed official architecture,
            privacy, support, pricing, recovery, sharing, business, migration, and governance
            documentation plus the public 2022 mobile audit reports. We did not run a live Proton
            Drive account, measure sync speed, test migration or recovery, execute billing or
            cancellation, contact support, audit source code, perform penetration testing, or
            verify the cryptographic implementation.
          </div>
          <div className="mt-8 rounded-2xl border bg-slate-50 p-5 text-sm leading-6 text-slate-700">
            <strong>Editorial independence:</strong> Proton Drive has no verified affiliate link in
            CBT's registry, and the official-site link above is non-affiliate. Monetization did not
            determine the verdict. Read our{" "}
            <InternalLink to="/affiliate-disclosure">affiliate disclosure</InternalLink>.
          </div>
        </Container>
      </Section>

      <Newsletter />
    </>
  );
}
