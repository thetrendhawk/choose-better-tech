import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const path = "/comparisons/icloud-vs-google-drive";
const title = "iCloud vs Google Drive: Which Is Better in 2026?";
const description =
  "Compare iCloud and Google Drive by photos, backups, collaboration, privacy, family sharing, recovery, pricing, and ecosystem fit.";

const decisionCards = [
  {
    title: "Choose iCloud",
    label: "Best for Apple-device continuity",
    body:
      "Your priority is iPhone, iPad, and Mac continuity across iCloud Photos, device backups, Apple apps, and files.",
    caveat:
      "The free 5 GB pool is shared across several Apple workflows, and collaboration is not its strongest documented advantage."
  },
  {
    title: "Choose Google Drive",
    label: "Best for collaboration and mixed devices",
    body:
      "You rely on Docs, Sheets, Gmail, Android, browser access, or shared work across Apple and non-Apple devices.",
    caveat:
      "The up-to-15 GB free pool is shared with Gmail and Google Photos, and ordinary consumer Drive is not end-to-end encrypted."
  },
  {
    title: "Use both deliberately",
    label: "Best for many Apple households",
    body:
      "Use iCloud for Apple backups, Photos, and device continuity while using Google Drive for collaborative documents and mixed-device sharing.",
    caveat:
      "Two systems add account-recovery, organization, duplicate-storage, and billing complexity. Give each a defined job."
  }
];

const comparisonRows = [
  ["Free storage", "5 GB shared across iCloud data", "Up to 15 GB shared across Google storage", "Google starts larger"],
  ["Best ecosystem fit", "iPhone, iPad, Mac, iCloud Photos, Apple backup", "Android, web, Gmail, Docs, Sheets, Slides", "Depends on workflow"],
  ["Windows access", "iCloud for Windows", "Drive for desktop", "Both documented"],
  ["Linux sync client", "No official client verified", "No official Drive desktop client verified", "Neither"],
  ["Live collaboration", "iWork and iCloud sharing", "Docs, Sheets, Slides, comments, roles", "Google Drive"],
  ["Consumer content confidentiality", "Optional ADP expands E2EE where eligible", "Transit/at-rest encryption; no consumer Workspace CSE", "iCloud with qualified ADP"],
  ["Family storage", "Share iCloud+ with up to five others", "Share Google One with up to five others", "Tie on household size"],
  ["Automatic family file access", "No", "No", "Tie"],
  ["Deleted files", "Generally recoverable for 30 days", "Generally retained in Trash for 30 days", "Similar headline window"],
  ["Generic file versions", "iWork versions documented; arbitrary-file scope not verified", "Google-native and uploaded-file versions documented", "Google Drive"],
  ["Device backup", "Integrated Apple-device backup workflow", "Android backup is separate from Drive files", "Depends on device"],
  ["Photos", "Integrated iCloud Photos workflow", "Integrated Google Photos workflow", "Depends on ecosystem"],
  ["Export", "Downloads, app exports, and Apple privacy tools", "Takeout and format conversion", "Both, with workflow loss"],
  ["Independent backup", "Still required", "Still required", "Tie"]
];

const scenarios = [
  ["My household mainly uses iPhones and Macs", "Choose iCloud for device continuity, backups, Photos, and Apple-app data. Google Drive can remain a separate collaboration tool."],
  ["We create documents together", "Choose Google Drive when Docs, Sheets, Slides, comments, and browser collaboration drive the decision."],
  ["We use both Apple and Android devices", "Google Drive is the stronger documented mixed-device file baseline. Keep iCloud where Apple backup or Photos still requires it."],
  ["I want the strongest documented consumer privacy option", "Eligible iCloud users can consider Advanced Data Protection, but only after understanding recovery duties and sharing exceptions."],
  ["I live in the United Kingdom", "Do not choose iCloud on the assumption that you can newly enable ADP. Apple's current notice says it is unavailable to UK users who had not already enabled it."],
  ["I need more free storage", "Google starts larger, but Gmail, Photos, Drive, backups, and other counted data share the pool."],
  ["I want simple family storage", "Both can share paid capacity with up to five others. Compare ecosystem fit, manager powers, and exit planning rather than household size alone."],
  ["I want one provider for everything", "Consolidation can reduce complexity, but it may sacrifice Apple backup integration or Google collaboration. Decide which compromise matters less."],
  ["I need reliable ransomware recovery", "Choose neither as the only protection. Maintain a separate backup and test restoration."],
  ["I may switch providers later", "Test exports now. Native documents, permissions, links, versions, comments, albums, and ownership do not move as cleanly as ordinary files."]
];

const checklist = [
  "List what currently uses iCloud: Photos, backups, Drive, Mail, Messages, and app data.",
  "List what currently uses Google storage: Drive, Gmail, Photos, Android backup, and other counted data.",
  "Separate device backup, photo library, file sync, and collaboration needs.",
  "Confirm every required phone, computer, browser, and operating system.",
  "Create a sample shared folder and inspect view, edit, and ownership behavior.",
  "Decide whether Advanced Data Protection is available and appropriate for your recovery plan.",
  "Test deleted-file recovery and a previous version before relying on either service.",
  "Export one native document in the format you would need after leaving.",
  "Document which service owns each category of data if you use both.",
  "Enable strong account security and store recovery information safely.",
  "Review the current regional price, billing term, downgrade rules, and over-quota effects.",
  "Keep an independent backup of irreplaceable files and test restoration."
];

const faq = [
  ["Which is better, iCloud or Google Drive?", "iCloud is the better fit for Apple-device continuity, iCloud Photos, and Apple backups. Google Drive is the better fit for Google-native collaboration, mixed devices, Android, and browser-first work. Many Apple households benefit from using both for separate jobs."],
  ["Which gives more free storage?", "Apple includes 5 GB shared across iCloud data. Google includes up to 15 GB shared across Drive, Gmail, Photos, backups, and other counted data. Neither number is dedicated only to files."],
  ["Is iCloud the same as iCloud Drive?", "No. iCloud Drive is the file-storage part of iCloud. iCloud Photos, iCloud Backup, Mail, Messages, and app data are separate workflows that can use the same storage pool."],
  ["Is Google Drive the same as Google One?", "No. Google Drive stores and shares files. Google One is the consumer subscription and storage-management layer used across Drive, Gmail, Photos, and other eligible Google services."],
  ["Which is better for iPhone users?", "iCloud is the natural fit for iPhone backup, Photos, and Apple-app continuity. Google Drive remains useful when collaboration or sharing with non-Apple users matters."],
  ["Which is better for Android users?", "Google Drive and the broader Google account ecosystem are the stronger documented fit. iCloud does not have a verified native Android iCloud Drive app."],
  ["Which is better for Windows?", "Both document Windows support. iCloud for Windows integrates iCloud Drive and selected Apple data, while Drive for desktop supports streaming or mirroring Google Drive files."],
  ["Does either have an official Linux sync app?", "No official Linux synchronization client was verified for either iCloud Drive or Google Drive for desktop. Web access remains available, and third-party tools carry separate trust and support questions."],
  ["Which is better for collaboration?", "Google Drive has the stronger documentation-supported collaboration fit through Docs, Sheets, Slides, comments, roles, and sharing. That is a feature conclusion, not a hands-on speed or usability test."],
  ["Is iCloud more private than Google Drive?", "Eligible iCloud users can enable Advanced Data Protection to expand end-to-end encryption to more categories, including iCloud Drive. The answer still depends on recovery, geography, sharing mode, metadata, and whether ADP is actually enabled."],
  ["Does Google use Drive files for personalized ads?", "Google states that personalized ads are not based on content from Drive, Gmail, or Photos. Its policy also describes collecting and processing content to provide, protect, and improve services. That is not the same as provider-inaccessible storage."],
  ["Can Apple read iCloud Drive files?", "Under standard protection, Apple retains keys for several iCloud categories. Eligible users can enable ADP for broader end-to-end encryption, subject to recovery and sharing qualifications."],
  ["Is Advanced Data Protection available in the UK?", "Apple says ADP is unavailable to UK users who had not already enabled it. Its notice described a transition for previously enabled accounts, but this research did not establish the final outcome for every such account."],
  ["Does family storage let relatives see my files?", "No. Both companies say family storage sharing does not automatically expose files. Family members can see certain identity and storage-use information, and files become visible only when separately shared."],
  ["What happens when I cancel paid storage?", "Both services can restrict new uploads, syncing, backups, or other functions when usage remains above the reduced quota. Exact effects depend on the service and data category, so reduce usage or export data before downgrading."],
  ["Which has better file recovery?", "Both generally document a 30-day deleted-file window. Google also documents versions for Google-native and uploaded files; Apple's clearest version documentation is app-specific, such as iWork. Neither guarantees recovery after permanent deletion or account loss."],
  ["Can either replace a backup?", "No. Synced changes and deletions can propagate across devices. Keep an independent backup of irreplaceable files and test restoring it."],
  ["Can I move Google Photos to iCloud Photos?", "A direct transfer is supported in many regions, but Apple says Advanced Data Protection must be turned off for the import and unsupported media may be placed in iCloud Drive. Check current eligibility before starting."],
  ["Can I move all my files without losing anything?", "Ordinary files can be downloaded, but permissions, links, versions, comments, ownership, albums, and native-document behavior may not transfer completely. Test a representative sample first."],
  ["Should I use iCloud and Google Drive together?", "Yes, when each has a defined role—for example, iCloud for Apple backups and Photos, and Google Drive for collaborative documents. Avoid storing the same working library in both without a clear ownership rule."]
];

const sourceGroups = [
  {
    title: "Apple storage, security, and support",
    links: [
      ["iCloud+ plans and US pricing", "https://support.apple.com/en-us/108047"],
      ["iCloud storage accounting", "https://support.apple.com/en-us/121314"],
      ["iCloud data security overview", "https://support.apple.com/en-us/102651"],
      ["Advanced Data Protection architecture", "https://support.apple.com/guide/security/advanced-data-protection-for-icloud-sec973254c5f/web"],
      ["Advanced Data Protection setup and sharing", "https://support.apple.com/en-us/108756"],
      ["Advanced Data Protection in the UK", "https://support.apple.com/en-us/122234"],
      ["iCloud Drive devices and web access", "https://support.apple.com/guide/icloud/what-you-can-do-with-icloud-drive-mm19ef899373/icloud"],
      ["iCloud for Windows", "https://support.apple.com/guide/icloud/what-can-you-do-with-icloud-on-a-windows-device-mm6be2394337/icloud"],
      ["iCloud Drive sharing controls", "https://support.apple.com/guide/icloud/manage-sharing-for-files-and-folders-mm59dd13d0be/icloud"],
      ["Delete and recover iCloud Drive files", "https://support.apple.com/guide/icloud/delete-and-recover-files-mm3b7fcd0c10/icloud"],
      ["Share iCloud+ with family", "https://support.apple.com/en-us/108783"],
      ["Downgrade or cancel iCloud+", "https://support.apple.com/en-us/108318"],
      ["Archive or copy iCloud data", "https://support.apple.com/en-us/108306"],
      ["Transfer Google Photos to iCloud Photos", "https://support.apple.com/en-us/120924"]
    ]
  },
  {
    title: "Google storage, privacy, and support",
    links: [
      ["Google One plans", "https://one.google.com/about/plans"],
      ["Google storage accounting", "https://support.google.com/googleone/answer/9312312"],
      ["Google One family storage", "https://support.google.com/googleone/answer/9004015"],
      ["Google One cancellation and refunds", "https://support.google.com/googleone/answer/6374282"],
      ["Drive for desktop stream or mirror", "https://support.google.com/drive/answer/13401938"],
      ["Google Drive sharing permissions", "https://support.google.com/drive/answer/2494822"],
      ["Google Drive ownership transfer", "https://support.google.com/drive/answer/2494892"],
      ["Google Drive Trash", "https://support.google.com/drive/answer/14933051"],
      ["Google Drive versions", "https://support.google.com/drive/answer/2409045"],
      ["Google Drive export", "https://support.google.com/drive/answer/9759608"],
      ["Google Takeout", "https://support.google.com/accounts/answer/3024190"],
      ["Google Privacy Policy", "https://policies.google.com/privacy"],
      ["Google Drive encryption and CSE", "https://support.google.com/drive/answer/10519333"],
      ["Workspace CSE eligibility", "https://support.google.com/a/answer/14309952"]
    ]
  },
  {
    title: "Backup and methodology context",
    links: [
      ["CISA ransomware guide", "https://www.cisa.gov/stopransomware/ransomware-guide"],
      ["ACCC cloud-storage market report", "https://www.accc.gov.au/system/files/DPB%20-%20DPSI%20-%20September%202023%20Report%20-%20Interim%20Report%207%20-%20Final%2815835612.1%29.pdf"],
      ["Data Transfer Initiative", "https://dtinit.org/"]
    ]
  }
];

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="font-semibold text-teal-700 underline underline-offset-4" to={to}>
      {children}
    </Link>
  );
}

export function ICloudVsGoogleDrivePage() {
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
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Section className="bg-slate-950 text-white">
        <Container className="py-20">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-teal-300">Cloud storage comparison</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-200">
            Choose iCloud for Apple-device continuity, Photos, and backups. Choose Google Drive for
            Google-native collaboration, Android, web access, and mixed-device sharing. Many Apple
            households should use both—but give each service a defined job.
          </p>
          <p className="mt-5 max-w-4xl leading-7 text-slate-300">
            Neither free-storage headline tells the whole story, neither service replaces an
            independent backup, and privacy depends on the exact account and sharing configuration.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-7">
            <p className="text-xs font-black uppercase tracking-wider text-teal-800">Quick verdict</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">The right winner depends on what you are storing</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              iCloud is the stronger fit for Apple backups, Photos, and device continuity. Google
              Drive is the stronger fit for collaborative files and mixed-device access. The honest
              answer is often a deliberate split, not a forced winner.
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
          <h2 className="text-3xl font-black">iCloud vs Google Drive at a glance</h2>
          <p className="mt-3 text-sm font-semibold text-slate-600">Swipe or scroll horizontally to compare every column on a phone.</p>
          <div className="mt-5 max-w-full overflow-x-auto rounded-2xl border" tabIndex={0} aria-label="Scrollable iCloud and Google Drive comparison table">
            <table className="min-w-[980px] w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>{["Category", "iCloud", "Google Drive", "Better fit"].map((heading) => <th className="p-4" key={heading}>{heading}</th>)}</tr>
              </thead>
              <tbody className="divide-y bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>{row.map((cell, index) => <td className={`p-4 align-top ${index === 0 ? "font-bold" : ""}`} key={cell}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Our verdict</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-2xl font-black text-teal-300">iCloud wins for Apple continuity</h3>
              <p className="mt-3 leading-7 text-slate-200">It connects Apple-device backup, Photos, files, and app data. Eligible users also have the stronger documented consumer content-confidentiality option through ADP.</p>
            </article>
            <article className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-2xl font-black text-teal-300">Google Drive wins for collaboration</h3>
              <p className="mt-3 leading-7 text-slate-200">Its Google-native documents, sharing roles, browser access, and Android support make it the stronger documented collaboration and mixed-device fit.</p>
            </article>
            <article className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-2xl font-black text-teal-300">Using both can be the better system</h3>
              <p className="mt-3 leading-7 text-slate-200">Keep Apple-specific data in iCloud and shared work in Google Drive. This works only when responsibilities are clear and duplicate storage is controlled.</p>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">How we compared them</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            We reviewed current Apple and Google documentation for storage accounting, plans,
            platforms, encryption, sharing, family rules, recovery, versions, export, cancellation,
            and over-quota behavior. We separated provider claims from CBT judgments and preserved
            unresolved gaps rather than converting them into favorable assumptions.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {["Storage-pool accounting", "Files, photos, and device backups", "Apple, Google, Windows, web, Android, and Linux access", "Encryption, metadata, recovery, and sharing boundaries", "Collaboration, permissions, and ownership", "Family privacy and plan-manager powers", "Trash, versions, and independent backup", "Export, conversion, migration, and lock-in", "Pricing, cancellation, and over-quota effects", "Fit by ecosystem and workflow"].map((criterion) => <div className="rounded-2xl border p-4" key={criterion}>{criterion}</div>)}
          </div>
          <div className="mt-7 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
            <strong>Testing disclosure:</strong> CBT did not conduct live-account, speed, sync,
            collaboration, migration, recovery, billing, cancellation, or support testing for this
            comparison. Feature conclusions come from documentation; experiential superiority is not claimed.
          </div>
          <p className="mt-5 max-w-4xl leading-7 text-slate-700">
            We also did not test support response times, escalation, refund or cancellation help,
            or resolution quality. Support quality was not scored and did not affect the verdict.
          </p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">The storage numbers are not file-only</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6">
              <h3 className="text-2xl font-black">iCloud: 5 GB shared across Apple data</h3>
              <p className="mt-3 leading-7 text-slate-700">iCloud Drive files, iCloud Photos, device backups, Mail, Messages, and app data can draw from the same pool. A photo-heavy or backup-heavy household can consume it without storing many ordinary files.</p>
            </article>
            <article className="rounded-2xl border bg-white p-6">
              <h3 className="text-2xl font-black">Google: up to 15 GB shared across services</h3>
              <p className="mt-3 leading-7 text-slate-700">Drive, Gmail, Google Photos, Android backup, and other counted data share the Google Account pool. The larger headline is useful, but it is not 15 GB reserved for documents.</p>
            </article>
          </div>
          <p className="mt-6 max-w-4xl leading-7 text-slate-700">Before comparing paid plans, open each storage dashboard and identify what is actually consuming space. The cheapest tier is the one that fits the whole ecosystem—not the one with the lowest isolated price.</p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Files, photos, and backups are different workflows</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">iCloud Drive is only the file layer inside iCloud. iCloud Photos manages a photo library, while iCloud Backup protects supported device data and settings. Google Drive is likewise separate from Google Photos and Android backup even though they share an account and storage pool.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">This distinction changes the answer. Google Drive can be your collaborative file system without replacing an iPhone backup. iCloud can keep an iPhone and Mac in sync without becoming the best place for a group to co-edit Google-native documents.</p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Platforms and everyday ecosystem fit</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-white p-6">
              <h3 className="text-2xl font-black">iCloud</h3>
              <p className="mt-3 leading-7 text-slate-700">iCloud Drive appears in the Files app on iPhone and iPad, Finder on Mac, File Explorer through iCloud for Windows, and iCloud.com. No native Android iCloud Drive app or official Linux synchronization client was verified.</p>
            </article>
            <article className="rounded-2xl border bg-white p-6">
              <h3 className="text-2xl font-black">Google Drive</h3>
              <p className="mt-3 leading-7 text-slate-700">Drive supports the web, Android, iPhone and iPad, Windows, and macOS. Drive for desktop can stream or mirror files on Windows and macOS. No official Linux Drive-for-desktop client was verified.</p>
            </article>
          </div>
          <p className="mt-6 max-w-4xl leading-7 text-slate-700">App availability does not prove equal features, reliability, or ease of use. It does establish that Google is the broader documented baseline for mixed mobile ecosystems, while iCloud is more deeply tied to Apple-device workflows.</p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Privacy and encryption: Apple offers a stronger option, with limits</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Standard iCloud protection does not make every iCloud category inaccessible to Apple. Eligible users can enable Advanced Data Protection, which expands end-to-end encryption to categories including iCloud Drive, Photos, and Backup. This shifts recovery responsibility toward trusted devices, a recovery contact, or a recovery key.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
              <h3 className="text-xl font-black text-amber-950">ADP qualifications matter</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-amber-950">
                <li>It is opt-in, not the universal iCloud default.</li>
                <li>Apple cannot recover protected content without your recovery path.</li>
                <li>iWork collaboration, Shared Albums, and anyone-with-the-link sharing do not keep the same ADP E2EE protection.</li>
                <li>It is unavailable to UK users who had not already enabled it; the final status of every previously enabled UK account was not established.</li>
              </ul>
            </article>
            <article className="rounded-2xl border p-6">
              <h3 className="text-xl font-black">Google consumer encryption is different</h3>
              <p className="mt-3 leading-7 text-slate-700">Google documents encryption in transit and at rest. Workspace Client-side encryption is an administrator-controlled feature for eligible managed editions, not ordinary consumer Google One storage.</p>
              <p className="mt-3 leading-7 text-slate-700">Google says personalized ads are not based on Drive, Gmail, or Photos content, while its policy describes collecting and processing content to provide and protect services. Do not interpret that as provider-inaccessible storage.</p>
            </article>
          </div>
          <p className="mt-6 max-w-4xl leading-7 text-slate-700">E2EE does not make an account anonymous. Account details, devices, recovery events, sharing relationships, and operational records may still exist. Sharing can also change which protection applies.</p>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Collaboration: Google Drive has the clearer advantage</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">Google documents viewer, commenter, editor, and owner roles alongside Docs, Sheets, Slides, comments, and inherited folder permissions. iCloud Drive supports invited or link sharing with view or change permissions, plus collaboration in iWork.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">That supports a fit conclusion: Google Drive is the stronger collaboration system on documented features. It does not support untested claims that Google is faster, smoother, more reliable, or easier for every user.</p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Family storage: shared capacity is not shared access</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Both systems can share paid storage with up to five other people. Apple says each member uses a separate Apple Account and documents and photos remain private unless shared. Google likewise says files remain private unless shared.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Family members can see some identity and storage-use information. The organizer or plan manager can also change or stop sharing the plan. That creates continuity risk without giving the manager ownership of everyone else's files.</p>
          <div className="mt-6 rounded-2xl border border-teal-300 bg-teal-50 p-5 text-slate-800"><strong>Family rule:</strong> Keep individual accounts, document who pays, decide what happens if the group changes, and separately share only the folders or albums that should be communal.</div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Recovery, versions, and the backup boundary</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Both providers generally document a 30-day deleted-file recovery window. Google also documents version history for Google-native files and separate versions for uploaded files. Apple documents version restoration for iWork, but this research did not verify a generic arbitrary-file iCloud Drive version system.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">ADP improves confidentiality but removes Apple's ability to recover the protected data for you. That is a real security-versus-recoverability tradeoff, not a reason to describe one mode as universally safer.</p>
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950"><strong>Neither is an independent backup.</strong> Synced deletions and changes can propagate across devices. CISA recommends offline encrypted backups and regular restore testing for ransomware resilience. CBT did not test either service as a recovery system.</div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Pricing and paid value</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Checked July 13, 2026, Apple's US page lists iCloud+ at $0.99 per month for 50 GB, $2.99 for 200 GB, $9.99 for 2 TB, $29.99 for 6 TB, and $59.99 for 12 TB. Regional prices and taxes vary.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Google's public US page displayed 100 GB at $1.99 per month and AI-bundled 2 TB and 5 TB examples. Google plan names, bundles, annual options, and displayed offers are unusually volatile, so we do not build the verdict around a temporary checkout price.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Compare the storage you need across every counted service, the real billing term, family rules, taxes, renewal, and what happens above the free quota after cancellation. A similarly named tier may solve a different problem in each ecosystem.</p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Migration and lock-in: files move better than workflows</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Both providers offer downloads or exports. Google Takeout can include current Drive files, selected kept versions, comments, and metadata. Apple documents copying iCloud Drive files and exporting content from Apple apps.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Those tools do not prove a full-fidelity move of permissions, public links, family roles, comments, ownership, versions, albums, automations, or native-document behavior. Export one representative folder and one native document before committing a large library.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Apple and Google support a direct Google Photos-to-iCloud Photos transfer in many regions. Apple says ADP must be turned off for that import and unsupported media may land in iCloud Drive—a concrete example of migration convenience changing the privacy configuration.</p>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Should you use both?</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Using two services is sensible when their roles do not overlap: iCloud for Apple-device backups, Photos, and Apple-app continuity; Google Drive for shared folders and Google-native documents. This preserves each ecosystem's documented strengths.</p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">The cost is complexity. You now have two account-recovery plans, two storage dashboards, two sets of sharing rules, and a higher risk of duplicates. Define the authoritative home for each data type and avoid syncing the same working folder through both systems.</p>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Best choice by scenario</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">{scenarios.map(([scenario, answer]) => <article className="rounded-2xl border bg-white p-5" key={scenario}><h3 className="font-black">{scenario}</h3><p className="mt-2 leading-7 text-slate-700">{answer}</p></article>)}</div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container className="py-14">
          <h2 className="text-3xl font-black">Decision and migration checklist</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">{checklist.map((item) => <div className="rounded-2xl bg-white/10 p-4" key={item}>{item}</div>)}</div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Related cloud-storage guidance</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border p-5"><h3 className="font-black">Need the broader beginner field?</h3><p className="mt-2 leading-7 text-slate-700">Compare ecosystem, privacy, collaboration, and recovery fits in <InternalLink to="/best-cloud-storage-for-beginners">Best Cloud Storage for Beginners</InternalLink>.</p></article>
            <article className="rounded-2xl border p-5"><h3 className="font-black">Choosing Google or Dropbox?</h3><p className="mt-2 leading-7 text-slate-700">See the file-sync and collaboration tradeoffs in <InternalLink to="/comparisons/google-drive-vs-dropbox">Google Drive vs Dropbox</InternalLink>.</p></article>
            <article className="rounded-2xl border p-5"><h3 className="font-black">Privacy is the first priority?</h3><p className="mt-2 leading-7 text-slate-700">Read our documentation-based <InternalLink to="/reviews/proton-drive-review">Proton Drive Review</InternalLink>.</p></article>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <h2 className="text-3xl font-black">FAQ</h2>
          <div className="mt-7 space-y-4">{faq.map(([question, answer]) => <details className="rounded-2xl border bg-white p-5" key={question}><summary className="cursor-pointer font-bold">{question}</summary><p className="mt-3 leading-7 text-slate-700">{answer}</p></details>)}</div>
        </Container>
      </Section>

      <Section>
        <Container className="py-14">
          <h2 className="text-3xl font-black">Evidence checked for this comparison</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-700">Current facts were checked on July 13, 2026. Official documentation establishes product rules and company claims; it does not independently prove speed, reliability, migration fidelity, support quality, or recovery success.</p>
          <div className="mt-7 space-y-8">
            {sourceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-black">{group.title}</h3>
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {group.links.map(([label, href]) => <li className="rounded-2xl border bg-white p-4" key={href}><a className="font-semibold text-teal-700 underline underline-offset-4" href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="py-14">
          <div className="rounded-3xl border-2 border-teal-300 bg-teal-50 p-8">
            <h2 className="text-3xl font-black">Final verdict</h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">Choose iCloud when Apple-device backup, Photos, and continuity are the main job. Choose Google Drive when collaboration, Android, browser access, and mixed-device sharing are the main job. Use both when those jobs are genuinely separate—and document the boundary.</p>
            <p className="mt-4 max-w-4xl leading-7 text-slate-700">Whichever path you choose, secure both accounts, test recovery, test an export, and keep an independent backup of irreplaceable data.</p>
          </div>
          <p className="mt-7 text-sm leading-6 text-slate-600">This comparison contains no paid placement and no tracked Apple or consumer Google affiliate link. Affiliate availability did not influence the verdict.</p>
        </Container>
      </Section>

      <Newsletter />
    </>
  );
}
