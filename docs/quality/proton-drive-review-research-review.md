# Proton Drive Review Research — Independent Review

- Review date: 2026-07-13
- Reviewer role: Independent research reviewer
- Branch reviewed: `research/proton-drive-review`
- Pull request reviewed: `#2`
- Research record: `docs/research/proton-drive-review-research.md`
- Claim ledger: `docs/research/proton-drive-review-claim-ledger.md`
- Shared dossier: `docs/research/cloud-storage-landscape-dossier-2026-07-13.md`
- Scope reviewed: Research only; no article, route, sitemap, UI, affiliate, production deployment, or IndexNow work. Required PR pushes triggered automatic Vercel Preview deployments; the production canonical was unchanged.

## Main Verdict Challenged

The provisional verdict — Proton Drive is a strong documentation-based privacy fit but not a universal best cloud-storage service — is directionally reasonable. It is not ready to authorize drafting because the research base is incomplete in several areas that materially affect that verdict.

The most important falsification result is the audit record. The research says the latest public Proton Drive-specific audit report was not verified. Proton's March 2023 open-source announcement links public Securitum reports for the iOS and Android apps. The reports are dated 2022, have narrow and different scopes, and record Low and Informational findings. The iOS report excluded the API/backend; the Android report included the Android app, REST API, and source-code analysis. Neither report should be generalized to the current Windows, macOS, web, shared SDK, server infrastructure, or 2026 product state. Omitting these reports leaves the audit assessment materially incomplete.

The verdict also rests too heavily on official Proton documentation. Business ownership/governance, account-key derivation, telemetry and request handling, current audit evidence, incident history, and offboarding require more complete treatment before the recommendation claim can pass.

## Critical Claims Rechecked

All 32 Critical/High ledger entries were reopened against their linked sources. Reviewer statuses were written into the ledger.

| Result | Claim IDs | Reviewer finding |
| --- | --- | --- |
| Approved | PD-05, PD-06, PD-11, PD-14, PD-21, PD-28 | The linked current official source directly supports the bounded claim. |
| Approved with qualification | PD-01–PD-03, PD-07–PD-10, PD-12–PD-13, PD-15–PD-20, PD-22–PD-27, PD-30 | The core claim is traceable, but the source is vendor-authored, the behavior was not tested, the scope is plan/platform specific, or the source conflict/absence must remain visible. |
| Return for correction | PD-04 | “Public sharing is not anonymous” is overbroad. The evidence supports that Proton can associate operational link metadata with a creator and that invited workflows can disclose identity; it does not support one unqualified anonymity statement for every recipient/public-link context. |
| Return for correction | PD-29 | Public 2022 Securitum iOS and Android audit reports were discoverable and must be analyzed. The current “not verified” statement is materially incomplete. |
| Return for correction | PD-31 | “No authoritative evidence was found” has no reproducible source register or documented incident-search method. The same record says comprehensive incident history is unresolved. Remove this Critical claim or document a bounded, repeatable search and phrase only that no qualifying incident was identified in the named sources/date range. |
| Return for correction | PD-32 | The recommendation cannot pass until the audit, ownership/governance, privacy-field, independent-evidence, pricing-dossier, and offboarding corrections below are resolved. |

Additional claim qualifications that must survive drafting:

- PD-03 must distinguish Proton storing encrypted/ciphertext size from the support index's simplified statement that file size is not encrypted. Do not imply that size is fully hidden from Proton.
- PD-12 is documented version retention, not tested ransomware recovery.
- PD-16 must preserve the 2 GB initial/5 GB task-unlock conflict with marketing that presents 5 GB at signup.
- PD-19 supports only a prorated unused-portion refund within the first 30 days of the initial purchase, with later refunds discretionary.
- PD-20 concerns all data in affected over-limit apps potentially being deleted after the one-year remedy window; it is not merely selective deletion of the excess files.
- PD-22 applies only to supported managed Workspace plans, not ordinary personal accounts.
- PD-26 is an absence-of-documentation finding and must remain “not documented/not verified,” not “impossible.”
- PD-27 is a broad operational-controls attestation, not a Drive cryptography audit.
- PD-30 is vendor performance evidence only.

## Excluded Candidates Reconsidered

The shared 12-provider landscape is broad enough for the approved three-article sequence and includes mainstream baselines plus privacy specialists. No provider needs to be added to this Proton-specific review merely to lengthen it.

However, the dossier is not yet sufficient evidence for the later secure-storage ranking. Its provider matrix is mostly a list of research cautions, while the pricing section contains only generic plan-shape observations. Before the dossier can be called complete, add current official, provider-specific plan facts and sources for all 12 candidates, or explicitly mark each unavailable field Not verified. The later ranking must reconsider other plausible candidates only at that later article's candidate-completeness gate; this review does not finalize that ranking universe.

## Affiliate-Bias Check

Passed for this research pass.

- Proton Drive has no verified entry in the centralized affiliate registry.
- No affiliate URL, CTA, route, or monetization change appears in the PR.
- The research includes non-affiliate mainstream and privacy-focused alternatives.
- The provisional verdict includes substantial limitations rather than brand-favorable certainty.

The absence of affiliate bias does not cure the evidence gaps.

## Methodology Check

Partially passed.

Strengths:

- distinct intent and exclusions are explicit;
- evaluation criteria are relevant to a provider review;
- field-level encryption, recovery, admin access, client type, migration, and testing boundaries are separated;
- sync is not mislabeled as backup;
- prohibited language is conservative.

Required corrections:

1. Expand company context to cover the Proton Foundation as Proton AG's primary shareholder/control structure, the for-profit operating company, the hybrid sustainability model, crowdfunding origin, no-VC statement as attributed Proton information, and how Drive fits the broader Proton account/bundle ecosystem.
2. Expand architecture beyond “client-generated keys” to map account/address/share/node/session keys, passphrases, signing, password-derived protection or key derivation where current sources support it, recovery-key consequences, and what changed or remains uncertain under the 2026 shared SDK.
3. Research and document Drive search behavior, file-request/upload workflows if offered, diagnostic/log and telemetry handling, account/IP/access data, abuse/legal-request handling, and the exact limits of current public policies. Mark unsupported fields Not verified.
4. Research family and business offboarding: member removal, private account versus organization-created account, file ownership, storage reassignment, export, admin access after removal, and downgrade consequences. The existing one-line “Not verified” note is not enough for an approved review research gate.
5. Replace the vague “representative provider positioning” statement under Competing Coverage Reviewed with the actual coverage reviewed and the concrete information gap identified in each relevant source class.

## Source-Quality Check

Return for correction.

Primary official documentation is strong for current features, policies, plan shapes, and architecture claims. Independent evidence is insufficiently integrated:

- The public Securitum iOS and Android audit PDFs were omitted despite being directly linked by Proton.
- The reports must be read by scope, date, findings, exclusions, and retest/remediation status; Proton's summary is not enough.
- SOC 2 Type II is correctly qualified but the attestation/report scope available to the public should be stated precisely.
- The incident conclusion lacks a reproducible source set.
- The record has no dedicated `Independent sources reviewed` section even though the binding research standard requires it.

Official vendor sources may establish current behavior. They cannot independently prove implementation quality, performance, reliability, support, or absence of incidents.

## Testing-Transparency Check

Passed.

The record clearly says no live account, sync, performance, migration, recovery, cancellation, support, cryptographic, source-code, or penetration testing occurred. The planned test fixture is appropriately separated from current evidence. Prohibited experiential and superlative claims are explicit.

## Duplicate-Intent Check

Passed.

The planned Proton Drive review answers a provider-specific fit question distinct from the beginner ranking, Google Drive versus Dropbox comparison, planned iCloud-versus-Google comparison, and planned secure-storage ranking. Repository research reports no existing route with this primary intent. No broken future link is authorized.

## Reader-Value Check

Conditionally strong.

The field-level privacy, recovery, managed-admin, Linux CLI-versus-GUI, downgrade, and portability analysis would provide genuine reader value. The contribution is weakened until business ownership/governance, account-key mechanics, telemetry/request handling, public audit findings, and offboarding are added. Those are consequential buyer questions, not optional detail.

## Research-Artifact Quality Check

The branch respects the research-only boundary: no application code, article, route, sitemap, affiliate registry, production deployment, or IndexNow change was made. Required PR pushes triggered automatic Vercel Preview deployments, not publication. The shared dossier covers the required category boundaries, reader segments, candidate landscape, evaluation framework, sync-versus-backup distinction, migration layers, testing needs, conflicts, open questions, and provisional non-ranking conclusions.

The dossier nevertheless fails its completion claim because the provider-specific evidence is uneven. Proton has a detailed source set while most other candidates have only one or two links, and the pricing section does not normalize current plan facts across all 12 providers. A reusable landscape dossier must either capture the requested provider fields or explicitly mark each unverified field. Generic observations are not a substitute.

The operations records are accurate about scope and counts, but their status must be reconciled after this decision: Proton Drive research is `RETURN FOR CORRECTION` / `RESEARCH INCOMPLETE`, not research-complete and approved for drafting.

The full 40-point article scorecard is not applicable at this research-only stage because there is no article, code, technical SEO, accessibility, or visible-source implementation to score. Those gates remain deferred. The binding research gate fails on independent evidence, claim traceability for PD-31, dossier completeness, and unresolved required fields.

## Required Corrections

1. Correct PD-29 and the audit section using the public 2022 Securitum iOS and Android reports. Record dates, scope, exclusions, findings, no-retest status, and why the reports do not validate the current full service.
2. Remove or rebuild PD-31 with a reproducible incident-search method and named source set. Do not claim “never breached.”
3. Narrow PD-04 to the exact identity/metadata exposure supported for each sharing workflow.
4. Hold PD-32 until all corrections are complete, then re-evaluate the provisional verdict from the corrected evidence rather than carrying it forward automatically.
5. Expand ownership/governance, business model/funding, and Proton ecosystem context with direct sources and careful attribution.
6. Expand account-key/key-derivation and 2026 SDK architecture analysis; distinguish older architecture documentation from current implementation evidence.
7. Add a field-level privacy table covering search, file requests/uploads, telemetry/diagnostics/logs, IP/access/account data, abuse and legal requests, storage locations/backups, and any Not verified fields.
8. Add family and business offboarding evidence or explicit source-backed limits for member removal, ownership, export, admin access, storage, and account fate.
9. Add a dedicated independent-source section and integrate the public audit reports and any relevant technical/academic evidence within their scopes.
10. Replace vague competing-coverage language with an auditable list of coverage reviewed and specific information gaps.
11. Expand the shared dossier with provider-specific current official pricing/plan facts and source traceability for all 12 candidates, or explicit Not verified values and refresh triggers.
12. Reconcile operations status to `RESEARCH INCOMPLETE` / `RETURN FOR CORRECTION` until a fresh independent review approves drafting. Do not change counts or create publication artifacts.
13. Refresh the claim ledger with any new Critical/High claims created by these corrections, exact source dates where available, and reviewer-pending status for the next pass.

## Final Reviewer Decision

`RETURN FOR CORRECTION`

Drafting is not authorized. No article, route, sitemap, affiliate, production deployment, IndexNow, or publication work may start. Automatic PR preview builds do not authorize publication. After the author completes the corrections, a fresh independent pass must recheck every Critical/High claim and issue one of the allowed research-gate decisions.

## Second Independent Pass — 2026-07-13

### Scope of Re-review

The corrected dossier, Proton Drive research record, expanded 37-row claim ledger, first-pass report, binding standards, correction commit `de8ddef`, operations changes, and full PR diff were re-read. Every Critical/High claim was reopened. The revised verdict was treated as a hypothesis rather than inherited as true.

### Corrections Verified

The author materially resolved the research defects from the first pass:

1. **Audits:** The record now identifies the public 2022 Securitum iOS and Android reports, exact testing/report dates, app/API scope, exclusions, finding counts, notable Low/Informational findings, `RETEST DATE N/A`, and the absence of public remediation/retest evidence. It correctly states that these reports do not validate the current 2026 Windows, macOS, web, server, or shared-SDK implementation.
2. **Incident claim:** The unsupported negative incident conclusion was replaced by a bounded source-set statement and an explicit prohibition on “never breached” or perfect-record language.
3. **Sharing/privacy wording:** The public-link statement now distinguishes creator/link metadata, invited-user identity, and the absence of evidence that every public-link recipient is identified.
4. **Ownership and business model:** The record now covers Proton AG, Proton Foundation control/primary-shareholder claims, the for-profit/non-profit hybrid, crowdfunding/no-VC history as attributed Proton claims, and Drive's relationship to the wider Proton account and bundles.
5. **Key hierarchy:** Address, share, node, passphrase, session-key, signature, and URL-sharing roles are mapped. The record also clearly says current account-key derivation parameters, local key storage, recovery paths, and 2026 shared-SDK implementation are not fully established by the older architecture document.
6. **Privacy/request map:** Search, upload/file-request limits, diagnostics/telemetry, account/IP/access data, abuse handling, legal requests, server locations, and encrypted backup retention are mapped with explicit Not verified fields.
7. **Family/business offboarding:** Family removal/trial/administrator behavior and organization-created-user deletion/admin-access risks are documented; ownership transfer, bulk export, link survival, and some invited-account behavior remain explicitly unresolved.
8. **Independent evidence:** The two direct Securitum reports are separated from Proton's summary and from third-party editorial context. No current complete-service independent audit is claimed.
9. **Competing coverage:** The record now names the coverage reviewed and states that it was used to identify topic gaps rather than as evidence for Proton facts.
10. **Dossier pricing:** All 12 candidates have provider-specific current official plan evidence or an explicit Not verified value, with currency/promotion/renewal qualifications and official source links. No cross-provider price winner is claimed.
11. **Research status:** The corrected records remained fail-closed pending this re-review. Counts and publication status were not advanced.

### Claim Recheck Result

All 37 ledger rows now have explicit second-pass status:

- `Approved`: 6
- `Approved with qualification`: 31
- `Pending`: 0
- `Return for correction`: 0

The qualifications are substantive drafting constraints. In particular, architecture and performance remain vendor claims; audits are dated and scoped; exact Drive Plus pricing remains unverified; incident history is incomplete; business ownership transfer and bulk export remain unknown; and no product behavior was hands-on tested.

### Revised Verdict Challenge

The corrected evidence supports a bounded provisional conclusion: Proton Drive can be framed as a strong documentation-based privacy fit for some users, but not as the universal best, safest, fastest, or most private storage service. The conclusion survives because the research now gives equal weight to server-visible metadata, recovery failure modes, Linux client type, collaboration limits, dated audit scope, business-admin access, downgrade risk, pricing uncertainty, and portability gaps.

The conclusion does not authorize a score, broad secure-storage ranking, experiential claim, or negative incident claim. Those limits are adequately recorded.

### Residual Evidence Limitations

The following limitations are acceptable for documentation-based drafting only if visible in the eventual article:

- no current public audit of the complete 2026 service and shared SDK;
- no comprehensive incident history;
- no hands-on sync, performance, conflict, photo, recovery, migration, billing, cancellation, support, or offboarding test;
- no exact Drive Plus regional checkout/renewal price;
- no verified business ownership-transfer or organization-wide bulk export workflow;
- no verified post-Family-trial live behavior;
- no full current implementation mapping for every source repository, client build, server, or telemetry event.

These are constraints, not permission to infer favorable behavior.

### Scope and Operations Verification

The PR contains only research, reviewer, and operations-documentation files. It contains no article, application code, route, sitemap, affiliate registry, UI, IndexNow, or content-count change. The production canonical site was not changed.

One material record-accuracy issue remains: pushing the research PR automatically triggered a successful Vercel **Preview** deployment for commit `de8ddef` at `https://choose-better-tech-i4mokrkzj-aaron-s-evans-projects.vercel.app`. No Vercel production deployment was requested or verified, and the production canonical was unchanged. Operations and first-pass wording that say “no deployment” are therefore inaccurate. They must say **no production deployment; automatic PR preview deployment only**. This distinction matters under the project's production-truth and automation-contract rules.

### Required Correction After Second Pass

1. Reconcile every affected operations, changelog, PR, and reviewer scope statement from “no deployment” to “no production deployment; automatic Vercel PR preview deployment occurred; production canonical unchanged.”
2. Do not change publication counts, create an article, alter the app, submit IndexNow, or describe the preview as publication.
3. After the wording correction, perform a narrow independent verification that the preview/production boundary is accurately recorded and no production deployment occurred.

### Second-Pass Final Decision

`RETURN FOR CORRECTION`

The research evidence and all 37 claim rows are now sufficient for drafting with their recorded qualifications. Drafting remains blocked solely because the workflow record incorrectly says no deployment despite the automatic Vercel Preview deployment. A narrow fresh pass may approve drafting after that scope/status wording is corrected and independently verified.

## Third Independent Pass — 2026-07-13

### Evidence Checked

- Correction commit reviewed: `529bf4fa57de57d4f0106464c8ad9fed032acc79`.
- `origin/main` remained `9279aa8c258d1aba022c8a8387ae4657f9d9c54f`; the research commits were not merged to the production branch.
- GitHub deployment metadata classifies every research-branch deployment as `Preview` with `production_environment: false`:
  - `b7eb727` — Preview deployment `5417591850`;
  - `f83c3af` — Preview deployment `5417655216`;
  - `de8ddef` — Preview deployment `5417711743`;
  - `529bf4f` — Preview deployment `5417750684`, successful at `https://choose-better-tech-oxi548xhi-aaron-s-evans-projects.vercel.app`.
- No GitHub/Vercel production deployment record exists for `529bf4f` or the `research/proton-drive-review` branch.
- The PR diff contains only the shared dossier, Proton research record, claim ledger, independent review, and four operations documents. It contains no article, application, route, sitemap, affiliate registry, UI, IndexNow, or content-count change.
- The production canonical was not changed by the branch.

### Boundary Wording Review

The substantive boundary is now correctly understood: **no production deployment; automatic Vercel PR previews only; production canonical unchanged**. The first-pass scope wording in this report has been corrected accordingly.

One narrow accuracy defect remains in commit `529bf4f`: `operations/CHANGELOG.md` and `operations/PROJECT_STATUS.md` each say the PR triggered **one** automatic Vercel Preview deployment. Deployment metadata shows four preview deployments, one for each research/review/correction commit listed above. The count is therefore inaccurate even though the production-versus-preview distinction is correct.

### Required Correction After Third Pass

Replace “one automatic Vercel Preview deployment” with non-numeric wording such as “automatic Vercel PR preview deployments” in every affected operations/PR status statement. Preserve:

- no production deployment;
- production canonical unchanged;
- preview builds were not publication;
- no article/app/route/sitemap/affiliate/IndexNow/count change.

After that text-only correction, a final narrow reviewer check may approve drafting without reopening the already final 37 claim statuses unless another material change occurs.

### Third-Pass Final Decision

`RETURN FOR CORRECTION`

The evidence package and claim ledger remain sufficient for drafting with their recorded qualifications. Drafting is still blocked solely because the operations record gives an incorrect preview-deployment count.
