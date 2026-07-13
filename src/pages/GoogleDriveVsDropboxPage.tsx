import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "../components/affiliate/AffiliateDisclosure";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/comparisons/google-drive-vs-dropbox";
const title = "Google Drive vs Dropbox: Which Is Better in 2026?";
const description =
  "Compare Google Drive and Dropbox by free storage, file sync, sharing, collaboration, privacy, recovery, ecosystem fit, and paid value.";

const comparisonRows = [
  ["Free storage", "15 GB shared with Gmail and Google Photos", "2 GB on Dropbox Basic", "Google Drive for capacity"],
  ["Desktop apps", "Windows and macOS", "Windows, macOS, and Linux", "Dropbox for Linux"],
  ["Space saving", "Stream or mirror files", "Online-only files and selective sync", "Depends"],
  ["Live collaboration", "Deep Docs, Sheets, Slides, and comments", "File comments, Paper, and integrations", "Google Drive"],
  ["Conventional file sync", "Strong, but tied to Google account and formats", "Focused platform-neutral folder", "Dropbox"],
  ["Consumer ownership", "Individual ownership in My Drive", "Owner and membership rules in shared folders", "Depends"],
  ["Team ownership", "Shared Drives on eligible work/school plans", "Team spaces on eligible team plans", "Depends on plan"],
  ["Deleted files", "Trash for 30 days under current consumer docs", "Plan-dependent deleted-file and version windows", "Depends"],
  ["Version history", "Item and format dependent", "30 days on Basic, Plus, and Family today", "Dropbox for clarity"],
  ["Large files", "Up to 5 TB in current Shared Drive limits", "Up to 2 TB; browser caveat over 375 GB", "Google Drive on ceiling"],
  ["Linux desktop", "No official Drive for desktop app", "Official desktop app documented", "Dropbox"],
  ["Privacy model", "Provider-managed; not ordinary consumer E2EE", "Provider-managed; not consumer zero knowledge", "Neither for E2EE"],
  ["Small paid upgrade", "Google One offers smaller storage steps", "Large jump from 2 GB to main personal tier", "Google Drive"],
  ["Format portability", "Google-native files require export or conversion", "Conventional files are usually easier to move", "Dropbox"],
  ["Independent backup", "Still required for irreplaceable files", "Still required for irreplaceable files", "Tie"]
];

const decisionCards = [
  {
    title: "Choose Google Drive",
    label: "Best for collaboration and Google households",
    body:
      "You use Gmail, Google Photos, Android, Docs, Sheets, or Slides and want a larger free starting point plus strong live editing.",
    caveat:
      "The 15 GB pool is shared, and Google-native files create extra migration work."
  },
  {
    title: "Choose Dropbox",
    label: "Best for focused, platform-neutral sync",
    body:
      "You want a conventional sync folder across mixed devices, need Linux desktop support, or prefer files that are easier to move later.",
    caveat:
      "The 2 GB free tier is small, and the main personal paid step may be excessive for light users."
  },
  {
    title: "Choose neither",
    label: "Best when provider-inaccessible content is the priority",
    body:
      "You require end-to-end encrypted storage by default or need a different ecosystem, recovery model, or payment structure.",
    caveat:
      "Private-storage alternatives still have platform, collaboration, and account-recovery tradeoffs."
  }
];

const scenarios = [
  ["Gmail and Google Photos already run my life", "Google Drive is the simpler fit, but inspect the shared quota before upgrading."],
  ["I collaborate in Docs and Sheets", "Google Drive has the clearest advantage because the files and collaboration layer are integrated."],
  ["I want a neutral folder on every computer", "Dropbox is the more focused fit, especially when conventional files matter."],
  ["I use Linux", "Dropbox documents a Linux desktop application; Google Drive does not offer an equivalent official desktop client."],
  ["I only need a small amount of paid storage", "Google One's smaller steps are usually easier to justify than Dropbox's large personal-plan jump."],
  ["I need substantial conventional-file storage", "Dropbox may fit if its paid allocation and sync workflow are both useful."],
  ["I work in Microsoft Office files", "Both can work. Dropbox is a neutral file layer; Drive becomes stronger if Google collaboration is also central."],
  ["I manage a small team", "Compare eligible Google Shared Drives and Dropbox team spaces, not consumer My Drive and Basic plans."],
  ["I want end-to-end encryption", "Neither standard consumer service is the default fit; use the broader cloud-storage guide."],
  ["I want to use both", "Give each a separate purpose and never nest one sync folder inside the other."]
];

const checklist = [
  "Check how much Gmail and Google Photos already use.",
  "Estimate whether 2 GB, a smaller Google One tier, or a large Dropbox tier fits.",
  "Confirm Windows, macOS, Linux, and mobile requirements.",
  "Test stream, mirror, online-only, and offline behavior.",
  "Create a sample shared folder and inspect every permission.",
  "Identify who owns shared files and what happens when someone leaves.",
  "Test a deleted-file and previous-version recovery before relying on it.",
  "Export a Google Doc to the format you would need after migration.",
  "Enable MFA or a passkey and save recovery information safely.",
  "Review the total due, renewal, cancellation, and downgrade rules.",
  "Avoid overlapping or nested sync folders.",
  "Keep an independent backup of irreplaceable files."
];

const faq = [
  ["Which is better, Google Drive or Dropbox?", "Google Drive is better for most beginners, free starting capacity, and Google-native collaboration. Dropbox is better for focused conventional-file sync, Linux desktop support, and format portability."],
  ["Which gives more free storage?", "Google currently includes 15 GB shared across Drive, Gmail, and Google Photos. Dropbox Basic currently starts at 2 GB."],
  ["Is Google Drive's 15 GB only for Drive files?", "No. Gmail, Google Photos, Android backups, and other counted data can consume the same Google Account pool."],
  ["Is Dropbox's free plan enough?", "It can handle documents and a small working set. Two gigabytes fills quickly with photos, videos, or large project files."],
  ["Which is better for collaboration?", "Google Drive is stronger when people create and edit Docs, Sheets, and Slides together. Dropbox is stronger as a shared layer for conventional files and third-party tools."],
  ["Which is better for file syncing?", "Dropbox is the more focused cross-platform sync product. Google Drive remains strong on Windows and macOS, particularly when Google-native files are central."],
  ["Does Google Drive work on Linux?", "The current official Drive for desktop documentation covers Windows and macOS, not Linux. Linux users can use the web or third-party tools, but those are not equivalent to an official desktop client."],
  ["Does Dropbox work on Linux?", "Yes. Dropbox currently documents full and headless Linux desktop-app requirements, with distribution and architecture limitations."],
  ["Which is more private?", "Neither standard consumer service is treated here as end-to-end encrypted storage. Both use provider-managed systems and account controls."],
  ["Does Google use Drive files for advertising?", "Google states that Drive content is not used for advertising while explaining that content is processed for functions such as search, spam filtering, malware detection, and abuse prevention."],
  ["Can Dropbox read my files?", "Dropbox's ordinary consumer service is not positioned as zero-knowledge storage. Its systems process files to operate, secure, and support the service."],
  ["Which is better for photos?", "Google's storage pool connects directly with Google Photos. Dropbox can store and upload photo files but is not the same integrated photo-library experience."],
  ["Which is better for Microsoft Office files?", "Both support Office workflows. Dropbox is a neutral file layer; Google Drive adds Google collaboration and conversion options."],
  ["Which is better for teams?", "Compare eligible organization plans. Google Shared Drives and Dropbox team spaces use different ownership, roles, retention, and administration from consumer accounts."],
  ["What happens to shared files when someone leaves?", "Ownership and plan matter. Team-owned spaces can retain content, while personal folders and links may depend on the original owner or membership."],
  ["Which has better recovery?", "Dropbox documents clear plan-level version windows, while Google Drive documents 30-day Trash retention for consumer files. Neither guarantees recovery after permanent deletion or an expired window."],
  ["Can either service recover ransomware damage?", "Version history may help if clean versions remain inside the applicable window. It is not a substitute for a separate backup."],
  ["Which supports larger files?", "Current Google Shared Drive documentation permits files up to 5 TB within storage and upload constraints. Dropbox documents up to 2 TB and warns very large browser uploads may be unreliable."],
  ["Which is cheaper?", "It depends on storage need, region, billing term, and bundle. Google One usually offers smaller storage steps; Dropbox's main personal tier makes more sense when a larger allocation is useful."],
  ["Can I use both?", "Yes. Give each service a distinct purpose and do not place one synchronized folder inside another, which can create loops, duplicates, and confusing ownership."],
  ["Can I move from Dropbox to Google Drive?", "Yes, but file versions, comments, links, permissions, and ownership may not transfer. Test with a small folder first."],
  ["Can I move from Google Drive to Dropbox?", "Yes, but Google-native files need export or conversion, and formatting, scripts, comments, or sharing metadata may change."],
  ["Is cloud sync a backup?", "No. Both services can synchronize unwanted deletions or corrupt changes. Keep an independent copy of irreplaceable files."],
  ["What should I test before choosing?", "Test desktop sync, online-only or streamed files, offline access, sharing, ownership, recovery, export, and the real storage used by email and photos."]
];

const sources = [
  ["Google storage accounting", "https://support.google.com/drive/answer/9312312"],
  ["Google storage and over-quota behavior", "https://support.google.com/googleone/answer/6374270"],
  ["Change or cancel Google storage", "https://support.google.com/drive/answer/2375123"],
  ["Google Drive for desktop", "https://support.google.com/drive/answer/10838124"],
  ["Google Drive for desktop on macOS", "https://support.google.com/drive/answer/12178485"],
  ["Google folder sharing and permissions", "https://support.google.com/drive/answer/7166529"],
  ["Google Shared Drives", "https://support.google.com/drive/answer/7286514"],
  ["Google Shared Drives vs My Drive", "https://support.google.com/a/users/answer/7212025"],
  ["Google Shared Drive limits", "https://support.google.com/a/users/answer/7338880"],
  ["Google Drive Trash behavior", "https://support.google.com/drive/answer/14933051"],
  ["Google Drive export", "https://support.google.com/drive/answer/9759608"],
  ["Google file download and conversion", "https://support.google.com/drive/answer/2423534"],
  ["Google Drive privacy and processing", "https://support.google.com/drive/answer/10375054"],
  ["Dropbox Basic", "https://help.dropbox.com/plans/dropbox-basic-faq"],
  ["Dropbox storage upgrades", "https://help.dropbox.com/storage-space/get-more-space"],
  ["Dropbox Basic over-quota behavior", "https://help.dropbox.com/storage-space/over-quota"],
  ["Dropbox version history", "https://help.dropbox.com/delete-restore/version-history-overview"],
  ["Dropbox file-size limits", "https://help.dropbox.com/sync/upload-limitations"],
  ["Dropbox online-only files", "https://help.dropbox.com/sync/make-files-online-only"],
  ["Dropbox system requirements", "https://help.dropbox.com/installs/system-requirements"],
  ["Dropbox sync help", "https://help.dropbox.com/sync"],
  ["Dropbox sharing", "https://help.dropbox.com/share/share-file-or-folder"],
  ["Dropbox shared-folder ownership", "https://help.dropbox.com/share/owner"],
  ["Dropbox security", "https://www.dropbox.com/security"],
  ["Dropbox privacy policy", "https://www.dropbox.com/privacy"]
];

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="font-semibold text-teal-700 underline underline-offset-4" to={to}>
      {children}
    </Link>
  );
}

export function GoogleDriveVsDropboxPage() {
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
        { "@type": "ListItem", position: 2, name: "Comparisons", item: `${site.url}/comparisons` },
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
            Cloud storage comparison
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-200">
            Google Drive is the better default for collaboration, a larger free starting point,
            and Google-first households. Dropbox is better for focused conventional-file sync,
            Linux desktop support, and platform neutrality.
          </p>
          <p className="mt-5 max-w-4xl leading-7 text-slate-300">
            Neither is a universal winner, neither standard consumer service is end-to-end
            encrypted by default, and neither replaces an independent backup.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-7">
            <p className="text-xs font-black uppercase tracking-wider text-teal-800">Quick verdict</p>
            <h2 className="mt-2 text-3xl font-black">
              Google Drive wins on collaboration; Dropbox wins on focused sync
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Pick Google Drive when Gmail, Photos, Docs, Sheets, and Android are already central.
              Pick Dropbox when you want a more neutral folder across devices, use Linux, or care
              more about conventional file portability than a built-in office suite.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">The decision in three cards</h2>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {decisionCards.map((card) => (
              <article className="rounded-3xl border bg-white p-6 shadow-sm" key={card.title}>
                <p className="text-xs font-black uppercase tracking-wider text-teal-700">{card.label}</p>
                <h3 className="mt-2 text-2xl font-black">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{card.body}</p>
                <p className="mt-3 text-sm leading-6 text-amber-800"><strong>Caveat:</strong> {card.caveat}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Google Drive vs Dropbox at a glance</h2>
          <div className="mt-7 max-w-full overflow-x-auto rounded-2xl border">
            <table className="min-w-[1020px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  {['Category', 'Google Drive', 'Dropbox', 'Better fit'].map((heading) => (
                    <th className="p-4" key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {comparisonRows.map((row) => (
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
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-2xl font-black text-teal-300">Google Drive is better for most beginners</h3>
              <p className="mt-3 leading-7 text-slate-200">
                The larger free starting point, familiar Google account, and real-time document
                collaboration make it the easiest default. The important qualifications are the
                shared quota, lack of an official Linux desktop client, and export friction for
                Google-native files.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-2xl font-black text-teal-300">Dropbox is better for a focused file layer</h3>
              <p className="mt-3 leading-7 text-slate-200">
                Dropbox fits people who want conventional files synchronized across mixed devices,
                need Linux support, or want less format lock-in. Its weak points are the small free
                tier and a large personal paid-plan jump.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">How we compared them</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            We used current official documentation for storage, platform support, sync, sharing,
            ownership, recovery, file-size limits, privacy, export, cancellation, and over-quota
            behavior. Vendor documentation establishes documented features and rules, not
            independent proof of speed or reliability.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {[
              "Free-plan usefulness and quota sharing",
              "Desktop, mobile, web, and Linux support",
              "Streamed, mirrored, online-only, and offline files",
              "Google-native collaboration and conventional files",
              "Sharing roles, ownership, and offboarding",
              "Deleted-file and version recovery",
              "Privacy and provider processing",
              "Paid structure, cancellation, and over-quota rules",
              "Large-file constraints",
              "Export, conversion, and migration"
            ].map((criterion) => (
              <div className="rounded-2xl border p-4" key={criterion}>{criterion}</div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <strong>Testing disclosure:</strong> We did not run controlled speed, sync, conflict,
            collaboration, recovery, billing, or migration tests. The conclusions preserve those
            evidence gaps.
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Free storage: Google gives more, but it is shared</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Google currently includes 15 GB with a Google Account. Gmail messages and attachments,
            Google Photos, Drive files, Android backups, and other counted data can consume that
            same pool. Files in shared folders generally count against the original owner's quota,
            not the recipient's, unless the recipient creates a copy or adds owned content.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Dropbox Basic currently starts at 2 GB. That number is easier to understand and easier
            to exhaust. Referral bonuses are possible, but they are not a stable replacement for
            comparing the documented starting allowance.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Sync and offline files: Dropbox is more platform-neutral</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border p-6">
              <h3 className="text-2xl font-black">Google Drive</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Drive for desktop on Windows and macOS can stream or mirror files. Streamed files
                use placeholders and download when needed; mirrored files occupy local space. The
                current official installation flow does not include Linux.
              </p>
            </article>
            <article className="rounded-2xl border p-6">
              <h3 className="text-2xl font-black">Dropbox</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Dropbox documents Windows, macOS, and Linux applications. Files can be online-only,
                available offline, or excluded through selective sync. Deleting an online-only file
                still deletes it throughout Dropbox.
              </p>
            </article>
          </div>
          <p className="mt-6 max-w-4xl leading-7 text-slate-700">
            Neither model prevents every sync conflict or accidental deletion. Test the exact
            workflow on each computer before migrating a large folder.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Collaboration: Google Drive has the clearer advantage</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Google Drive combines storage with Docs, Sheets, Slides, comments, suggestions, and
            real-time editing. This is the strongest reason to choose it. Dropbox supports shared
            files, comments, Paper, and third-party integrations, but its main advantage is the
            file layer rather than a native office suite.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            If everyone works in conventional Office, design, video, or project files, Dropbox's
            neutrality can be useful. If everyone creates Google-native documents, Drive is the
            lower-friction choice.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Sharing and ownership: the plan matters more than the logo</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            In consumer My Drive, files are individually owned. Folder permissions can be inherited,
            and transferring a folder does not automatically transfer ownership of every file
            inside it. Google Shared Drives use team ownership and retain files when members leave,
            but they are work or school features rather than a standard consumer capability.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Dropbox personal and shared folders also use owner and member rules. Team ownership,
            roles, retention, and administration belong to eligible team plans. Do not compare My
            Drive with a Dropbox team space—or a Google Shared Drive with Dropbox Basic—as if they
            were equivalent products.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Recovery and version history</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Google Drive currently keeps items in Trash for 30 days unless they are permanently
            deleted. Ownership affects what happens when a non-owner removes an item from a shared
            folder.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Dropbox currently documents 30 days of version history for Basic, Plus, and Family and
            longer windows for several higher plans. Longer history begins when the plan changes;
            it is not retroactive. Permanently deleted items cannot be restored.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <strong>Bottom line:</strong> recovery windows are useful, but they are not an
            independent backup and do not guarantee recovery after permanent deletion, account
            loss, or an expired retention window.
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Privacy and encryption</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Google states that Drive content is not used for advertising while documenting content
            processing for search, spam filtering, malware detection, and abuse prevention. The
            ordinary consumer service is not positioned as end-to-end encrypted file storage.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Dropbox's standard consumer service is also not positioned as zero-knowledge storage.
            It documents encryption, infrastructure, and account controls, but those are not the
            same architecture as provider-inaccessible content.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            If end-to-end encryption is the priority, compare Proton Drive, Tresorit, Filen,
            Koofr Vault, Sync.com, pCloud Crypto, and Cryptomator in our{" "}
            <InternalLink to="/best-secure-cloud-storage">
              Best Secure Cloud Storage guide
            </InternalLink>.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">File size and large uploads</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Current Google Shared Drive documentation permits files up to 5 TB within storage,
            daily-upload, and account constraints. Dropbox documents a 2 TB maximum and recommends
            desktop or API uploads for very large files; browser uploads above 375 GB may be
            unreliable.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Those ceilings exceed most beginner needs. Available storage, connection stability,
            upload method, and recovery matter more than the theoretical maximum.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Pricing and paid value</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Google One generally offers smaller storage steps and can share the pool with family
            members where available. That storage also serves Gmail and Photos. Dropbox's personal
            upgrade is a much larger move from the 2 GB free tier and makes more sense when you need
            both substantial storage and its sync workflow.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Compare the total charged today, the ordinary renewal, regional taxes, family or team
            rules, refund eligibility, and what happens when you cancel while over the free quota.
            We do not hard-code a promotional price winner.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Leaving later: Dropbox has the format advantage</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Dropbox mostly stores conventional files, which reduces format lock-in. Versions,
            comments, links, ownership, and sharing state still do not migrate automatically.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Google lets you download or export Drive and Google-native data. Conversion to Word,
            Excel, PowerPoint, PDF, or other formats can change formatting, scripts, suggestions,
            links, or workflow. Test the export you would actually need before a library becomes
            difficult to move.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Best choice by scenario</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {scenarios.map(([scenario, answer]) => (
              <article className="rounded-2xl border p-5" key={scenario}>
                <h3 className="font-black">{scenario}</h3>
                <p className="mt-2 leading-7 text-slate-700">{answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Decision and migration checklist</h2>
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
          <h2 className="text-3xl font-black">Evidence checked for this comparison</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">
            Current facts were checked on July 12, 2026. Official documentation establishes
            product rules and claims; it does not independently prove speed, reliability, privacy
            operations, recovery success, or migration quality.
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
            <h2 className="text-3xl font-black">Final verdict</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Choose Google Drive if collaboration, a larger free start, and Google services matter
              most. Choose Dropbox if focused conventional-file sync, Linux support, and platform
              neutrality matter more. Choose neither when end-to-end encrypted storage is the
              primary requirement—and keep an independent backup whichever path you take.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Need the broader field? Compare seven distinct fits in{" "}
              <InternalLink to="/best-cloud-storage-for-beginners">
                Best Cloud Storage for Beginners
              </InternalLink>.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">
              Comparing Google with Apple's ecosystem instead? Read{" "}
              <InternalLink to="/comparisons/icloud-vs-google-drive">
                iCloud vs Google Drive
              </InternalLink>.
            </p>
          </div>
          <div className="mt-8"><AffiliateDisclosure /></div>
        </Container>
      </Section>

      <Newsletter />
    </>
  );
}
