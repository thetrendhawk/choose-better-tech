import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/best-cloud-storage-for-beginners";
const title = "Best Cloud Storage for Beginners in 2026";
const description =
  "Compare beginner-friendly cloud storage by free space, sync, sharing, collaboration, privacy, recovery, ecosystem fit, and pricing.";

type CloudPick = {
  name: string;
  label: string;
  summary: string;
  freeStart: string;
  platforms: string;
  recovery: string;
  privacy: string;
  pricing: string;
  chooseWhen: string;
  skipWhen: string;
  limitation: string;
};

const products: CloudPick[] = [
  {
    name: "Google Drive",
    label: "Best mainstream default",
    summary:
      "The easiest starting point for people who already use Gmail, Google Photos, Docs, Sheets, or Android and want strong real-time collaboration.",
    freeStart: "15 GB shared across Drive, Gmail, and Google Photos",
    platforms: "Web, Windows, macOS, Android, and iOS/iPadOS",
    recovery:
      "Trash and version behavior depends on the file type and account; Google storage is not an independent backup.",
    privacy:
      "Standard consumer Drive is provider-managed storage, not ordinary end-to-end encrypted file storage.",
    pricing:
      "Google One offers smaller paid steps and family sharing where available. Plans renew until canceled, and storage purchases are generally non-refundable.",
    chooseWhen:
      "Google apps and collaboration are already central to your household, school, or personal workflow.",
    skipWhen:
      "You want a neutral file layer, a Linux desktop client, or end-to-end encrypted storage by default.",
    limitation:
      "The headline free allowance is shared with email and photos, so it may be smaller in practice than it first appears."
  },
  {
    name: "Dropbox",
    label: "Best focused file sync",
    summary:
      "A straightforward cross-platform sync folder with sharing, online-only files, and fewer ties to one office ecosystem.",
    freeStart: "2 GB on Dropbox Basic",
    platforms: "Web, Windows, macOS, Linux, Android, and iOS/iPadOS",
    recovery:
      "Basic, Plus, and Family currently document 30 days of version history; permanently deleted items cannot be restored.",
    privacy:
      "The standard service is not positioned as zero-knowledge consumer storage.",
    pricing:
      "The main personal paid step is much larger than the free tier. Check the total due, renewal, and downgrade consequences before committing.",
    chooseWhen:
      "You want cloud storage to behave like a focused folder across mixed devices and conventional file formats.",
    skipWhen:
      "You need generous free storage, a small paid storage step, or native office-suite collaboration as the main feature.",
    limitation:
      "Two gigabytes fills quickly with photos or video, and the consumer paid jump can be excessive for light users."
  },
  {
    name: "iCloud Drive",
    label: "Best for Apple users",
    summary:
      "The lowest-friction choice for an Apple-only household because it is built into Files, Photos, device backups, and Apple apps.",
    freeStart: "5 GB shared with backups, Photos, Mail, and other iCloud data",
    platforms: "Apple devices, web, and Windows",
    recovery:
      "Deleted iCloud Drive files are generally available in Recently Deleted for 30 days unless permanently removed.",
    privacy:
      "Encryption scope depends partly on whether Advanced Data Protection is enabled and supported by every device on the account.",
    pricing:
      "iCloud+ adds storage and related Apple features. Check regional pricing, family sharing, and what consumes the shared pool.",
    chooseWhen:
      "Your household mostly uses iPhone, iPad, and Mac and wants the simplest built-in experience.",
    skipWhen:
      "You use Linux, depend heavily on Android, or need an equally capable workflow across several ecosystems.",
    limitation:
      "The free pool is small and shared with several high-growth services, especially device backups and photos."
  },
  {
    name: "Microsoft OneDrive",
    label: "Best for Windows and Microsoft 365",
    summary:
      "The strongest fit when File Explorer, Word, Excel, PowerPoint, Outlook, or a Microsoft 365 subscription already anchors the workflow.",
    freeStart: "5 GB of Microsoft cloud storage",
    platforms: "Web, Windows, macOS, Android, and iOS/iPadOS",
    recovery:
      "Eligible Microsoft 365 subscribers can restore an entire OneDrive within the previous 30 days, subject to documented limits.",
    privacy:
      "OneDrive uses provider-managed security and account controls; it is not ordinary consumer end-to-end encrypted storage.",
    pricing:
      "Microsoft 365 Basic, Personal, and Family bundle storage with other services. Cancellation can reduce the allowance and interrupt sync when over quota.",
    chooseWhen:
      "You use Windows and Office or already pay for Microsoft 365.",
    skipWhen:
      "You need an official Linux desktop app or want storage separated from an email and productivity subscription.",
    limitation:
      "Its best value is tied to the Microsoft ecosystem, and the official desktop-app list does not include Linux."
  },
  {
    name: "Proton Drive",
    label: "Best privacy-focused beginner option",
    summary:
      "A relatively approachable way to get end-to-end encrypted file storage without building a self-hosted or local-only system.",
    freeStart: "Starts at 2 GB; onboarding actions can unlock up to 5 GB",
    platforms: "Web, Windows, macOS, Android, and iOS/iPadOS",
    recovery:
      "The Free plan currently saves up to 10 versions for seven days; paid plans offer longer configurable history.",
    privacy:
      "Proton documents end-to-end encryption for contents, filenames, and folder names, while operational fields such as timestamps, permissions, and an encrypted file-size value remain available to the service.",
    pricing:
      "Drive-only and broader Proton bundles differ. Verify the current checkout total, renewal, storage allocation, and prorated refund rules.",
    chooseWhen:
      "Reducing provider access to file contents matters more than having the deepest office collaboration ecosystem.",
    skipWhen:
      "You need an official Linux desktop app or mature real-time collaboration across many third-party tools.",
    limitation:
      "The full free allowance requires setup actions, and current official app support does not list Linux desktop."
  },
  {
    name: "Sync.com",
    label: "Best private sharing and recovery alternative",
    summary:
      "An end-to-end encrypted option with controlled links, cloud-only Vault storage, CloudFiles, and a conventional sync workflow.",
    freeStart: "5 GB on the current free plan",
    platforms: "Web, Windows, macOS, Android, and iOS/iPadOS",
    recovery:
      "Deleted-file and version recovery vary by plan, so the exact retention window must be checked before purchase.",
    privacy:
      "Sync positions the service around end-to-end encrypted storage and adds 2FA and remote-device controls.",
    pricing:
      "Personal plans differ by storage, history, and sharing controls. Compare annual commitment and renewal rather than only the monthly equivalent.",
    chooseWhen:
      "You want private storage and link controls in a more conventional sync product than a productivity suite.",
    skipWhen:
      "You need Linux desktop support or Google/Microsoft-style live document collaboration.",
    limitation:
      "No official Linux desktop app is documented, and the strongest recovery and sharing controls are plan-dependent."
  },
  {
    name: "pCloud",
    label: "Best Linux and flexible-plan alternative",
    summary:
      "One of the clearest consumer options with an official Linux app, a virtual-drive model, and subscription or lifetime plan structures.",
    freeStart: "Action-dependent free allowance; verify the amount shown in your account",
    platforms: "Web, Windows, macOS, Linux, Android, and iOS/iPadOS",
    recovery:
      "Current documentation describes 15 days for free accounts, 30 days for paid plans, and a separate extended-history add-on.",
    privacy:
      "Standard storage and the separately sold client-side encrypted Crypto folder have different privacy properties.",
    pricing:
      "Subscription and lifetime plans are available. Current terms define lifetime as the account holder's lifetime or 99 years, whichever is shorter.",
    chooseWhen:
      "Linux support, virtual-drive access, or a non-subscription payment option matters.",
    skipWhen:
      "You expect client-side encryption on every ordinary folder or assume a lifetime plan eliminates company and account risk.",
    limitation:
      "Crypto and longer history may cost extra, and free-account inactivity and downgrade rules require attention."
  }
];

const exclusions = [
  {
    name: "Box",
    reason:
      "Box is credible for business collaboration and governance, but the free Individual plan's 250 MB per-file upload limit is restrictive for consumer photos and video. Its strongest advantages are business-oriented."
  },
  {
    name: "MEGA",
    reason:
      "MEGA offers broad platforms, user-controlled encryption, and a substantial free tier, but transfer quotas, recovery-key responsibility, and product complexity make it a less straightforward beginner default without hands-on workflow testing."
  }
];

const scenarios = [
  ["I already live in Gmail and Google Docs", "Start with Google Drive, but check how much Gmail and Google Photos already consume."],
  ["I just want a reliable-looking sync folder", "Dropbox is the clearest focused fit, provided 2 GB is enough or the paid jump makes sense."],
  ["Everyone in my home uses Apple devices", "iCloud Drive is the simplest fit; budget for the shared backup and photo quota."],
  ["I pay for Microsoft 365", "Use OneDrive first unless a privacy or Linux requirement points elsewhere."],
  ["I want the provider to have less access", "Compare Proton Drive and Sync.com, then study recovery and platform limitations."],
  ["I use Linux every day", "Dropbox and pCloud have documented Linux apps; compare privacy, storage, and plan structure."],
  ["I only need a few documents", "A free mainstream account may be enough. Avoid paying for terabytes you will not use."],
  ["I store irreplaceable photos", "Choose by photo workflow, but also keep a separate local or independent backup."],
  ["I collaborate on live documents", "Google Drive is the clearest default; OneDrive is strong when Office formats are central."],
  ["I want a one-time payment", "pCloud offers lifetime structures, but read the legal definition, feature add-ons, and company-risk caveat first."]
];

const checklist = [
  "Estimate documents, photos, and video separately.",
  "Check whether email, photos, or device backups share the quota.",
  "Confirm every operating system and device you use is supported.",
  "Decide whether you need live collaboration or only file sync.",
  "Compare deleted-file and version-history windows.",
  "Understand what happens when you cancel or exceed the quota.",
  "Use a unique password and enable MFA or passkeys where available.",
  "Save recovery codes somewhere separate from the cloud account.",
  "Review every shared link and invitation permission.",
  "Test an export before your library becomes large.",
  "Keep conventional copies of proprietary cloud documents.",
  "Maintain an independent backup of irreplaceable files."
];

const faq = [
  [
    "What is the best cloud storage for beginners?",
    "Google Drive is the easiest mainstream default for people already using Google services. Dropbox is better for focused sync, iCloud for Apple, OneDrive for Microsoft 365, Proton Drive for privacy, Sync.com for private sharing, and pCloud for Linux or flexible plans."
  ],
  [
    "Is cloud storage the same as backup?",
    "No. Sync can copy deletions, corruption, and ransomware changes to every connected device. Keep an independent backup of files you cannot replace."
  ],
  [
    "How much free cloud storage do I need?",
    "Documents use relatively little space; photos and video use much more. Check whether email, photos, and device backups consume the same pool before comparing headline numbers."
  ],
  [
    "Is Google Drive really free?",
    "A Google Account currently includes 15 GB shared across Drive, Gmail, and Google Photos. Google One adds paid storage where available."
  ],
  [
    "Why is Dropbox's free plan so small?",
    "Dropbox Basic currently starts at 2 GB. It can handle documents and a small working set, but photos and video will exhaust it quickly."
  ],
  [
    "Is iCloud Drive only for Apple devices?",
    "No. Web and Windows access exist, but iCloud Drive remains most integrated and least complicated on Apple devices."
  ],
  [
    "Is OneDrive best for Windows?",
    "Usually, especially when Microsoft 365 and Office files are already central. Files On-Demand and File Explorer integration are strong ecosystem advantages."
  ],
  [
    "Is Proton Drive more private?",
    "Proton documents end-to-end encryption for file contents, filenames, and folder names. That reduces provider access, but account security, sharing, recovery, metadata, and device compromise still matter."
  ],
  [
    "Is Sync.com better than Proton Drive?",
    "Neither is universally better. Compare supported platforms, free storage, sharing controls, recovery windows, collaboration, and the broader services you need."
  ],
  [
    "Does pCloud encrypt every file end to end?",
    "Do not assume that. pCloud distinguishes ordinary storage from its separately sold Crypto folder, which uses client-side encryption and a separate recovery model."
  ],
  [
    "Can cloud providers read my files?",
    "It depends on the architecture and feature. Standard provider-managed services retain technical ability to process content for service functions. End-to-end encryption can reduce provider access but does not hide every piece of metadata or protect an unlocked device."
  ],
  [
    "What happens if I stop paying?",
    "Rules differ. Storage may fall to the free allowance, uploads and sync may stop, and over-quota deletion policies may eventually apply after notice. Read the exact provider terms before canceling."
  ],
  [
    "Can cloud storage recover ransomware damage?",
    "Version history or account rewind can help if clean versions remain inside the retention window. That is not guaranteed, so an independent offline or separate backup still matters."
  ],
  [
    "Which cloud storage is best for photos?",
    "iCloud fits Apple Photos, while Google's storage pool connects with Google Photos. A good photo-library experience is not the same as a complete backup strategy."
  ],
  [
    "Which service is best for collaboration?",
    "Google Drive is the clearest mainstream default for Docs, Sheets, Slides, comments, and live editing. OneDrive is strong for Microsoft Office workflows."
  ],
  [
    "Which service works on Linux?",
    "Dropbox and pCloud document Linux desktop applications. The current official app lists for OneDrive, iCloud, Proton Drive, and Sync.com do not provide the same native Linux path."
  ],
  [
    "Which service is easiest to leave?",
    "Conventional files are easier to move than cloud-native documents. Versions, comments, permissions, links, ownership, photo albums, and metadata may not transfer cleanly from any provider."
  ],
  [
    "Should I encrypt files before uploading?",
    "Client-side encryption can add protection for sensitive files, but it also adds key-recovery, preview, search, and collaboration friction. Test recovery before relying on it."
  ],
  [
    "Are lifetime cloud-storage plans safe?",
    "They remove recurring billing, not provider, account, or business risk. Read the legal definition, included features, inactivity rules, and what happens if the service changes."
  ],
  [
    "Is end-to-end encrypted storage automatically best?",
    "No. It improves content privacy but can reduce collaboration, integrations, search, and assisted recovery. The right choice depends on your threat model and workflow."
  ],
  [
    "How should I share files safely?",
    "Prefer named recipients, give the minimum permission, use passwords or expirations when appropriate, and remove old links. Never assume a link stays private after you send it."
  ],
  [
    "How often should I review my cloud account?",
    "Review storage usage, shared links, connected devices, recovery methods, billing, and backup health several times per year and after any major household or job change."
  ]
];

const sources = [
  ["Google storage accounting and over-quota behavior", "https://support.google.com/googleone/answer/6374270"],
  ["Google Drive storage limits", "https://support.google.com/drive/answer/9312312"],
  ["Google storage plans and cancellation", "https://support.google.com/drive/answer/2375123"],
  ["Google Drive privacy and content processing", "https://support.google.com/drive/answer/10375054"],
  ["Dropbox Basic", "https://help.dropbox.com/plans/dropbox-basic-faq"],
  ["Dropbox version history", "https://help.dropbox.com/delete-restore/version-history-overview"],
  ["Dropbox Basic over-quota rules", "https://help.dropbox.com/storage-space/over-quota"],
  ["Apple iCloud storage and recovery", "https://support.apple.com/en-us/121314"],
  ["Apple iCloud Drive overview", "https://support.apple.com/guide/icloud/what-you-can-do-with-icloud-drive-mm19ef899373/icloud"],
  ["Apple Advanced Data Protection", "https://support.apple.com/en-us/102651"],
  ["Microsoft storage FAQs", "https://support.microsoft.com/en-us/onedrive/microsoft-storage-faqs"],
  ["Microsoft OneDrive system requirements", "https://support.microsoft.com/en-us/onedrive/onedrive-system-requirements"],
  ["Microsoft OneDrive uploads and file-size limit", "https://support.microsoft.com/en-us/onedrive/upload-photos-and-files-to-onedrive"],
  ["Microsoft OneDrive restore", "https://support.microsoft.com/en-us/office/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15"],
  ["Proton Drive setup and free storage", "https://proton.me/support/set-up-proton-drive"],
  ["Proton Drive support and encryption scope", "https://proton.me/support/drive"],
  ["Proton Drive version history", "https://proton.me/support/version-history"],
  ["Proton Drive pricing and refunds", "https://proton.me/drive/pricing"],
  ["Sync.com introduction and platform features", "https://help.sync.com/hc/en-us/articles/38275610011283-Introduction-to-Sync-com"],
  ["Sync.com free storage", "https://www.sync.com/free-cloud-storage/"],
  ["Sync.com pricing", "https://www.sync.com/pricing/"],
  ["pCloud applications and Linux support", "https://www.pcloud.com/download-free-online-cloud-file-storage.html"],
  ["pCloud recovery and backup features", "https://www.pcloud.com/features/backup.html"],
  ["pCloud terms and plan definitions", "https://help.pcloud.com/article/terms-of-service"],
  ["pCloud account inactivity and downgrade", "https://help.pcloud.com/article/account-inactivity"],
  ["Box Individual pricing and limits", "https://www.box.com/pricing/individual"],
  ["MEGA pricing", "https://mega.io/pricing"]
];

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="font-semibold text-teal-700 underline underline-offset-4">
      {children}
    </Link>
  );
}

export function BestCloudStorageForBeginnersPage() {
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
        { "@type": "ListItem", position: 2, name: title, item: canonical }
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
            Cloud storage guide
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-200">
            Google Drive is the easiest mainstream starting point, but the right choice changes
            with your devices, collaboration needs, recovery expectations, privacy model, and
            willingness to move later.
          </p>
          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
            We compared nine credible candidates and selected seven distinct fits. No provider paid
            for placement, and no affiliate relationship determined the recommendations.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-7">
            <p className="text-xs font-black uppercase tracking-wider text-teal-800">Quick answer</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Start with the ecosystem you already use—unless it fails an important requirement
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Choose Google Drive for mainstream collaboration, Dropbox for focused sync, iCloud
              Drive for Apple, OneDrive for Microsoft 365, Proton Drive for privacy, Sync.com for
              private sharing, or pCloud for Linux and flexible plan structures.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Whichever you choose, cloud sync is not automatically backup. Keep a separate copy of
              irreplaceable files.
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
                <p className="text-xs font-black uppercase tracking-wider text-teal-700">
                  {product.label}
                </p>
                <h3 className="mt-2 text-2xl font-black">{product.name}</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.summary}</p>
                <p className="mt-3 text-sm leading-6 text-amber-800">
                  <strong>Important limitation:</strong> {product.limitation}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Cloud storage comparison</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Free allowances are starting points, not complete value scores. Quota sharing,
            recovery, platform support, and paid-plan structure can matter more than the largest
            number.
          </p>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border">
            <table className="min-w-[1120px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  {["Service", "Best for", "Free starting point", "Platforms", "Recovery", "Main limitation"].map(
                    (heading) => (
                      <th className="p-4" key={heading}>{heading}</th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {products.map((product) => (
                  <tr key={product.name}>
                    <td className="p-4 align-top font-bold">{product.name}</td>
                    <td className="p-4 align-top">{product.label}</td>
                    <td className="p-4 align-top">{product.freeStart}</td>
                    <td className="p-4 align-top">{product.platforms}</td>
                    <td className="p-4 align-top">{product.recovery}</td>
                    <td className="p-4 align-top">{product.limitation}</td>
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
          <h2 className="text-3xl font-black">How we evaluated the services</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            We reviewed nine candidates using current official documentation for storage, quota
            sharing, platforms, sync, sharing, collaboration, recovery, encryption, account
            protection, migration, pricing structure, and cancellation consequences. The article
            also uses existing CBT research and does not treat vendor marketing as independent
            proof of reliability.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {[
              "Beginner setup and documentation clarity",
              "Free allowance and shared-quota rules",
              "Desktop, mobile, web, and Linux support",
              "Sync, online-only files, and offline access",
              "Sharing, permissions, and collaboration",
              "Deleted-file and version recovery",
              "Encryption architecture and provider access",
              "Account security and recovery",
              "Export, migration, and proprietary formats",
              "Paid structure, cancellation, and over-quota rules"
            ].map((criterion) => (
              <div className="rounded-2xl border p-4" key={criterion}>{criterion}</div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <strong>Testing disclosure:</strong> We did not run controlled speed, sync, recovery,
            ransomware, billing, support, or large-library migration tests. Recommendations are
            documentation-based and preserve those evidence gaps.
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
                <h3 className="text-xl font-black">What beginners get</h3>
                <p className="mt-3 leading-7 text-slate-700"><strong>Starting point:</strong> {product.freeStart}</p>
                <p className="mt-3 leading-7 text-slate-700"><strong>Platforms:</strong> {product.platforms}</p>
                <p className="mt-3 leading-7 text-slate-700"><strong>Recovery:</strong> {product.recovery}</p>
              </article>
              <article className="rounded-2xl border bg-white p-5">
                <h3 className="text-xl font-black">Privacy and price reality</h3>
                <p className="mt-3 leading-7 text-slate-700"><strong>Privacy:</strong> {product.privacy}</p>
                <p className="mt-3 leading-7 text-slate-700"><strong>Plan structure:</strong> {product.pricing}</p>
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
            {product.name === "Proton Drive" ? (
              <p className="mt-5 max-w-4xl leading-7 text-slate-700">
                Need the field-level privacy, recovery, business, and migration details? Read our{" "}
                <InternalLink to="/reviews/proton-drive-review">full Proton Drive review</InternalLink>.
              </p>
            ) : null}
          </Container>
        </Section>
      ))}

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Credible alternatives we did not make main picks</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            Exclusion is not a claim that a service is unsafe or unusable. It means the candidate
            did not earn a distinct beginner recommendation against this field and evidence set.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {exclusions.map((candidate) => (
              <article className="rounded-2xl bg-white/10 p-5" key={candidate.name}>
                <h3 className="text-xl font-black text-teal-300">{candidate.name}</h3>
                <p className="mt-3 leading-7 text-slate-200">{candidate.reason}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14 space-y-12">
          <div>
            <h2 className="text-3xl font-black">Cloud sync is not automatically backup</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Sync is designed to keep the same current files across devices. That can include an
              accidental deletion, corrupt version, or ransomware-encrypted copy. Version history
              and trash can help, but only while the affected version remains recoverable. Keep a
              second copy in a separate system for anything irreplaceable.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Free storage numbers can mislead beginners</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Google, Apple, and Microsoft share storage with other services. Proton requires setup
              actions to unlock its full free allowance. Dropbox starts small. pCloud and MEGA can
              involve account-specific bonuses or transfer conditions. Compare the space available
              to your actual files, not only the largest number on a landing page.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Privacy and encryption are not one checkbox</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Encryption in transit, at rest, and end to end solve different problems. End-to-end
              encryption can reduce provider access to content but may still expose metadata and
              can make search, collaboration, and account recovery harder. Device malware and an
              unlocked account remain risks under any architecture.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Recovery matters before something goes wrong</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Check trash retention, file versions, full-account rewind, recovery codes, and what
              “permanently deleted” means. A longer paid history is valuable only if it covers the
              event you need to reverse and you can still access the account.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Pricing and cancellation</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Monthly equivalents often require annual prepayment. Storage may be bundled with
              email or office software, and canceling can drop the account below its current use.
              Compare the total due today, the normal renewal, refund eligibility, downgrade
              behavior, and whether you can export everything before access changes.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Migration and lock-in</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Moving ordinary files is easier than moving Google-native documents, photo albums,
              comments, versions, permissions, links, and ownership. Before choosing, export a
              small test folder and confirm the files open correctly outside the provider.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Best choice by beginner scenario</h2>
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
          <h2 className="text-3xl font-black">Beginner setup checklist</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <div className="rounded-2xl bg-white/10 p-4" key={item}>{item}</div>
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
            Current facts were checked on July 12, 2026. Vendor pages establish documented plan
            and feature claims; they do not independently prove speed, reliability, privacy
            operations, or recovery success.
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
              Start with Google Drive if you want the easiest mainstream collaboration choice.
              Choose Dropbox for focused sync, iCloud Drive for Apple, OneDrive for Microsoft 365,
              Proton Drive for privacy, Sync.com for private sharing, or pCloud for Linux and
              flexible plans. Read the <InternalLink to="/reviews/proton-drive-review">full Proton
              Drive review</InternalLink> if encrypted storage is your priority. Then configure
              account security, test recovery and export, and keep an independent backup.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Deciding between the two mainstream cross-platform choices? Read our detailed{" "}
              <InternalLink to="/comparisons/google-drive-vs-dropbox">
                Google Drive vs Dropbox comparison
              </InternalLink>.
            </p>
          </div>
          <div className="mt-8">
            <AffiliateDisclosure />
          </div>
        </Container>
      </Section>

      <Newsletter />
    </>
  );
}
