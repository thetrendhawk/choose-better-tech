# Automation Content Audit — 2026-07-12

Status: Complete
Scope: Five Choose Better Tech pages published before the canonical automation contract was enforced
Audit date: 2026-07-12
Testing performed: Repository, content, schema, link, affiliate, and code inspection only; no product, account, performance, streaming-service, cryptographic, sync-conflict, cancellation, or recovery testing

## Audit Method

The audit reviewed each live route's source page, current research record, routing, schema construction, internal discovery links, affiliate implementation, visible evidence, testing disclosure, code readability, and current operations status against:

- `operations/EDITORIAL_STANDARDS.md`;
- `operations/RESEARCH_AND_EVIDENCE_STANDARD.md`;
- `operations/PUBLISHING_WORKFLOW.md`;
- `operations/AUTOMATION_PUBLISHING_CONTRACT.md`;
- `operations/VOLATILE_CLAIMS_REGISTER.md`.

No article implementation was edited before this audit was completed.

## Shared Findings

### Strengths

- All five routes and canonical URLs already exist.
- The pages use established CBT layout, SEO, FAQ, and newsletter patterns.
- The copy generally avoids absolute guarantees and discloses important testing limitations.
- No target page contains a raw affiliate URL.
- The streaming guide uses the centralized affiliate resolver, whose external links add `nofollow sponsored noopener noreferrer`.
- Each page has at least a basic fit-based conclusion and mobile-contained comparison table where a table exists.

### Weaknesses

- The five research records predate the canonical standard and omit multiple mandatory sections.
- Candidate selection and exclusion logic is thin or absent.
- Volatile facts are not recorded in the volatile-claims register.
- Three page components are compressed into near-single-line implementations.
- Three pages have no visible sources section; the two pages with visible evidence use a narrow source set.
- Current operations documents incorrectly treat all five pages as final approved under the new contract.
- No page may retain final approval until it independently completes research refresh, evidence/editorial/affiliate audits, validation, deployment verification, production QA, sitemap verification, visual QA, and all six operations updates.

## 1. Best Password Managers for Privacy

URL: `https://choosebettertech.com/best-password-managers-for-privacy`
Current remediation classification: **Major remediation**

### Distinct Intent

Help privacy-focused readers compare password managers by provider knowledge, encrypted metadata, aliases, telemetry, recovery, ownership, audits, open-source scope, retention, deletion, and portability. This is distinct from general safety, beginner, free-plan, family, and browser-versus-dedicated guidance.

### Current Strengths

- Clearly separates privacy from security.
- Includes cautious explanations of zero knowledge, metadata, aliases, jurisdiction, audits, telemetry, recovery, and portability.
- Discloses that no telemetry capture or source-code testing occurred.
- Uses fit-based recommendations and internal review links without raw affiliate URLs.
- Includes Article, BreadcrumbList, ItemList, and FAQPage schema with visible FAQ content.

### Current Weaknesses

- The research record is only 42 lines and does not meet the required research-record structure.
- Candidate coverage is limited to Proton Pass, Bitwarden, 1Password, NordPass, and RoboForm.
- Keeper, Dashlane, Enpass, Apple Passwords, Google Password Manager, and other defensible candidates were not evaluated or explicitly excluded.
- Provider evidence is summarized as conclusions rather than a field-by-field matrix.
- The page gives full ranking labels without full provider sections.
- Incident history, retention, account deletion, billing data, public audit reports, jurisdiction, and ownership are not consistently covered for each candidate.
- The visible evidence section has eight links and does not cover every major provider or conclusion.

### Unsupported or Weakly Supported Claims

- `Best overall for privacy` is plausible but insufficiently defended against the expanded candidate field.
- `All apps` being open source and broad metadata-encryption conclusions require exact current scope and source mapping.
- Comparisons of audit transparency and telemetry depth need provider-by-provider sources and dates.

### Missing Evidence and Sections

- Full candidate matrix and explicit inclusion/exclusion reasons.
- Full provider sections for included recommendations.
- Privacy-by-scenario decisions.
- Encrypted-field and metadata matrix.
- Account email, billing, telemetry, deletion, retention, ownership, jurisdiction, audits, incidents, recovery, emergency access, export, and portability evidence for every serious candidate.
- Independent evidence or public audit-report context where available.

### Pricing, Security, Privacy, Migration, and Recovery Gaps

- Pricing is intentionally secondary but paid/free access and renewal relevance are not documented.
- Security architecture is discussed more deeply than privacy-policy data flows for several providers.
- Export format, encrypted export, deletion, and migration consequences need direct evidence.
- Recovery and emergency access are not compared consistently.

### Affiliate Concerns

- No affiliate CTA appears on the page, which reduces commercial pressure.
- The general affiliate disclosure is present despite internal-review-only recommendation links.
- Candidate selection must be revalidated independently because Proton Pass and NordPass have active affiliate relationships while Bitwarden and 1Password do not.

### Schema and Internal-Link Findings

- Current schema types are structurally appropriate.
- FAQ/schema parity must be rechecked after the rewrite.
- Internal links are relevant but should expand selectively to methodology, privacy, safety, browser comparison, and applicable reviews/comparisons.

### Code Maintainability

- The file is readable overall, but several large arrays and complete sections are compressed into long lines approaching 1,000 characters.
- Provider and source data should be structured for traceability and easier refreshes.

### Operations Inconsistency

- Dashboard, calendar, project status, changelog, and roadmap currently describe this page as final approved. That status is invalid during remediation.

### Recommended Scope

- Replace the research record with a canonical record.
- Re-evaluate the full candidate set before preserving ranking labels.
- Add provider-by-provider evidence, explicit exclusions, full included-provider sections, scenario guidance, expanded visible sources, and volatile-claim entries.
- Reformat long JSX and data lines.

## 2. How Password Managers Actually Work

URL: `https://choosebettertech.com/guides/how-password-managers-work`
Current remediation classification: **Moderate remediation**

### Distinct Intent

Explain the technical lifecycle of password-manager data without ranking products: authentication, derivation, encryption, synchronization, local unlock, autofill, sharing, recovery, export, passkeys, and failure modes.

### Current Strengths

- Strong conceptual separation of authentication, derivation, encryption, synchronization, and local unlock.
- Explicitly explains that MFA does not automatically strengthen stolen ciphertext.
- Covers biometrics, sharing, recovery, passkeys, exports, offline use, local-only storage, self-hosting, provider breaches, and device malware.
- Includes a testing limitation and remains non-commercial in its conclusions.
- Article, BreadcrumbList, and FAQPage schema match the educational format.

### Current Weaknesses

- The research record is only 42 lines and lacks most mandatory canonical sections.
- Source-to-claim traceability is not documented.
- The record relies heavily on vendor architecture pages and one NIST overview.
- Academic and independent evidence for browser extensions, autofill, password-manager design, malicious updates, and failure cases is absent.
- Salts, work factors, local key storage, biometric key release, shared-vault key handling, malicious updates, and server-breach boundaries need deeper explanation.

### Unsupported or Weakly Supported Claims

- General statements about how sharing and biometrics work are correctly qualified but need authoritative architecture/platform sources.
- The description of server knowledge and synchronization metadata needs product-specific or academic support.
- Self-hosting and malicious-update risk need clearer source grounding.

### Missing Evidence and Sections

- Formal source-to-claim matrix.
- Academic/independent sources for extensions, autofill, design limitations, and failure cases.
- Dedicated malicious-update and software-supply-chain explanation.
- Deeper treatment of salts, parameters, local key storage, offline vaults, and shared-vault cryptography.
- Clearer architecture examples showing where implementations differ.

### Pricing, Security, Privacy, Migration, and Recovery Gaps

- Pricing is out of scope.
- Security and privacy coverage is directionally strong but under-sourced.
- Migration/export risk is present but needs exact format and cleanup guidance evidence.
- Recovery types need more explicit distinctions among authentication recovery, key recovery, emergency access, and organization recovery.

### Affiliate Concerns

- No affiliate CTA appears.
- An affiliate disclosure appears on an educational page without a commercial CTA; this may create unnecessary commercial framing and should be reconsidered.

### Schema and Internal-Link Findings

- Current schema types are appropriate.
- FAQ/schema parity must be rechecked after changes.
- Internal links to safety, privacy, and the decision hub are useful; methodology and browser-manager guidance may be added selectively.

### Code Maintainability

- The file is readable at the component level but contains many long inline structures and sections approaching 1,000 characters per line.
- Sources and technical concepts should be structured more clearly for maintenance.

### Operations Inconsistency

- Current final-approved status must be replaced with remediation-in-progress until every gate passes.

### Recommended Scope

- Replace the research record with the canonical structure and claim matrix.
- Add authoritative and academic sources, deeper failure-mode sections, and clearer recovery/shared-vault distinctions.
- Remove unnecessary commercial framing if no affiliate CTA exists.
- Reformat long JSX/data structures without redesigning the page.

## 3. Best VPNs for Streaming

URL: `https://choosebettertech.com/best-vpns-for-streaming`
Current remediation classification: **Major remediation**

### Distinct Intent

Help readers select a VPN for lawful streaming based on documented device support, TV/router setup, Smart DNS distinctions, household fit, refund/cancellation terms, privacy, and uncertainty—not claimed hands-on unblocking success.

### Current Strengths

- Repeatedly states that streaming access is not guaranteed.
- Correctly distinguishes Smart DNS from an encrypted VPN tunnel.
- Discloses no hands-on streaming or speed testing.
- Uses a responsive table and established recommendation-card layout.
- Uses the centralized affiliate resolver and a visible affiliate disclosure.

### Current Weaknesses

- The research record is only 31 lines with five primary-source links.
- Candidate conclusions cover four recommendations plus a brief Mullvad note; the required broad field was not researched.
- Private Internet Access, CyberGhost, IVPN, Windscribe, hide.me, and other candidates have no evidence or exclusion rationale.
- No independent evidence is recorded.
- The page lacks full individual provider sections, scenario recommendations, a real device-platform matrix, visible sources, pricing/renewal detail, ownership/audit context, and explicit inclusion/exclusion logic.
- The page component is highly compressed, with most of the render implementation on a few very long lines.

### Unsupported or Weakly Supported Claims

- `Best overall for streaming` is not supported by service-by-service hands-on testing and is under-supported by the documentation-only candidate review.
- `Best for simple TV and router setup` needs a broader candidate comparison.
- Connection limits, household terms, current native apps, refund terms, and streaming documentation are volatile and not fully sourced.

### Missing Evidence and Sections

- Broad candidate set and provider evidence matrix.
- Inclusion/exclusion reasons.
- Apple TV, Android/Google TV, Fire TV, Roku, Chromecast, console, router, and Smart DNS matrix.
- Protocol, device-limit, household, support, refund, cancellation, pricing/renewal, ownership, privacy, audit, free-plan, and streaming-documentation evidence.
- Full provider sections and scenario recommendations.
- Visible source section and claim-specific testing methodology.

### Pricing, Security, Privacy, Migration, and Recovery Gaps

- No verified price structure or renewal context is visible.
- Privacy is reduced to a general reminder rather than provider comparison.
- Cancellation and refund details are only checklist prompts.
- Migration/recovery are not central to this article type.

### Affiliate Concerns

- NordVPN, Surfshark, and Proton VPN receive affiliate buttons; ExpressVPN does not have a registry entry and links to a generic buying guide.
- The presence of three monetized picks and a thin candidate field creates an appearance of affiliate-biased inclusion even though the copy states otherwise.
- CTA placement is confined to recommendation cards and uses correct sponsored attributes through the resolver, but inclusion/ranking must be independently re-established.

### Schema and Internal-Link Findings

- Article, BreadcrumbList, ItemList, and FAQPage are appropriate if the visible ranking remains aligned.
- FAQ/schema parity needs revalidation after remediation.
- Links to worth-it, travel, families, free VPN, privacy, and reviews should be checked and expanded selectively.

### Code Maintainability

- The page has 43 lines, with line lengths exceeding 1,300 characters.
- Product data, schemas, tables, sections, and FAQs need readable formatting.

### Operations Inconsistency

- Final-approved status is invalid under the canonical evidence standard.

### Recommended Scope

- Major research replacement and documentation-based re-ranking.
- Full provider sections, exclusions, device matrix, scenarios, methodology, visible sources, pricing/renewal context, and streaming uncertainty.
- Complete code reformat without route or design changes.

## 4. Best Cloud Storage for Beginners

URL: `https://choosebettertech.com/best-cloud-storage-for-beginners`
Current remediation classification: **Rebuild required**

### Distinct Intent

Help first-time cloud-storage users select a service by ecosystem, sync behavior, sharing, collaboration, recovery, privacy architecture, migration, pricing, and backup limitations.

### Current Strengths

- Clear ecosystem-based fit labels.
- Correctly warns that sync is not automatically backup.
- Distinguishes provider-side encryption from end-to-end encryption.
- Includes a useful beginner checklist and explicit no-speed-testing disclosure.

### Current Weaknesses

- The research record is only 33 lines with six vendor links.
- Candidate coverage omits Sync.com, pCloud, Box, MEGA, and other defensible candidates.
- No explicit inclusion/exclusion logic or independent evidence exists.
- The page has no detailed provider sections, visible sources, pricing structure, recovery matrix, migration guidance, over-quota/cancellation analysis, or conflict-handling details.
- Several displayed storage claims are volatile and not tied to visible checked dates or source qualifications.
- The entire component is effectively compressed into one line.

### Unsupported or Weakly Supported Claims

- `Best overall for beginners` is not supported against a broad candidate field.
- `Best for focused file sync` and `best privacy-focused option` need direct criteria and comparative evidence.
- Broad claims about collaboration maturity, mixed-device fit, privacy, and portability need source mapping.

### Missing Evidence and Sections

- Full candidate and provider evidence matrix.
- Inclusion/exclusion reasons.
- Free storage, quota sharing, plan/renewal, device/Linux, file-size, selective-sync, online-only, conflict, mobile-upload, permission, link-control, recovery, version, ransomware, family, collaboration, native-format, privacy/E2EE, migration, over-quota, cancellation, and deletion evidence.
- Detailed included-provider sections and scenario recommendations.
- Visible sources and methodology.

### Pricing, Security, Privacy, Migration, and Recovery Gaps

- No price or renewal comparison beyond qualitative references.
- Privacy architecture is summarized but not mapped provider by provider.
- Migration, proprietary formats, recovery windows, ransomware recovery, cancellation, and over-quota behavior are underdeveloped.

### Affiliate Concerns

- No affiliate URLs or CTAs appear.
- Candidate selection still requires broad non-commercial review because the current set mostly reflects well-known ecosystems rather than a documented candidate process.

### Schema and Internal-Link Findings

- Article, BreadcrumbList, ItemList, and FAQPage are suitable in principle.
- Article schema omits the established author/publisher fields used on stronger CBT guides.
- Internal linking is sparse and the cloud-storage cluster currently has only one direct comparison companion.

### Code Maintainability

- The page is 18 lines and contains a line longer than 5,500 characters.
- The component requires full readable reformatting and structured provider/source data.

### Operations Inconsistency

- Current final-approved status is unsupported by the canonical ranking standard.

### Recommended Scope

- Replace the research record and rebuild the article body within the existing visual system.
- Preserve the route, canonical, and established components.
- Add full provider sections, evidence matrix, exclusions, scenarios, methodology, visible sources, pricing structure, backup/sync distinctions, privacy, recovery, and migration guidance.

## 5. Google Drive vs Dropbox

URL: `https://choosebettertech.com/comparisons/google-drive-vs-dropbox`
Current remediation classification: **Major remediation**

### Distinct Intent

Help mainstream users choose between Google Drive and Dropbox through a conditional, category-by-category comparison of storage, sync, collaboration, ownership, recovery, privacy, security, pricing, and migration.

### Current Strengths

- Gives a clear conditional verdict rather than a universal winner.
- Identifies the shared Google storage quota and Google-native export issue.
- Notes that neither ordinary consumer service is end-to-end encrypted storage.
- Covers sync-versus-backup risk and basic offboarding/ownership distinctions.

### Current Weaknesses

- The research record is only 35 lines with six primary-source links.
- No pricing table, business-tier evidence, storage-pooling analysis, detailed recovery/version evidence, Linux analysis, file-size limits, selective sync, online-only behavior, team-space comparison, or migration checklist exists.
- No visible sources or detailed methodology appears on the page.
- The component is nearly a single line.

### Unsupported or Weakly Supported Claims

- `Dropbox is the more focused sync product` is an editorial judgment that needs explicit criteria and limitations.
- `Better for mixed devices` and portability conclusions need platform and export evidence.
- Privacy/content-processing statements need exact current policies and clear distinctions between service processing and advertising.
- Pricing conclusions are too general to support current buyer decisions.

### Missing Evidence and Sections

- Consumer and business plan structures, renewal/billing context, pooling, file-size and transfer limits.
- Selective sync, online-only files, conflicts, deleted-file recovery, versions, ransomware recovery.
- Google-native formats, Office workflows, permissions, password/expiration controls, team ownership, Shared Drives, team spaces, offboarding, photos, mobile upload, OS/Linux, privacy/content processing, integrations, MFA/passkeys, recovery, export, and migration.
- Methodology, visible primary sources, scenario recommendations, pricing comparison, migration checklist, ownership/offboarding, privacy/security, and hands-on testing disclosure.

### Pricing, Security, Privacy, Migration, and Recovery Gaps

- Pricing and renewal are not sufficiently verified.
- Security is limited to basic MFA/passkey advice.
- Privacy needs current Google and Dropbox architecture/policy sources.
- Migration and recovery are acknowledged but not operationally useful.

### Affiliate Concerns

- No affiliate URLs or CTAs appear.
- The conclusion is not monetized, reducing affiliate bias risk.

### Schema and Internal-Link Findings

- Article, BreadcrumbList, and FAQPage are appropriate.
- Article schema should align with stronger CBT author/publisher conventions.
- FAQ/schema parity must be rechecked after expansion.
- Internal links should remain selective and include the beginner guide and relevant methodology/privacy guidance.

### Code Maintainability

- The page is 11 lines with a line longer than 7,000 characters.
- It requires complete readable reformatting.

### Operations Inconsistency

- Current final-approved status must be withdrawn during remediation.

### Recommended Scope

- Replace the research record with a canonical category-by-category matrix.
- Expand the comparison with current consumer/business plan, sync, recovery, ownership, privacy, security, and migration evidence.
- Add methodology, scenarios, visible sources, and testing disclosure.
- Reformat all TypeScript and JSX without changing the route or site design.

## Remediation Order

1. Best VPNs for Streaming — major remediation.
2. Best Cloud Storage for Beginners — rebuild within the established layout.
3. Google Drive vs Dropbox — major remediation.
4. Best Password Managers for Privacy — major remediation.
5. How Password Managers Actually Work — moderate remediation.

Each page must receive an independent research record, content commit, validation result, production deployment verification, sitemap check, IndexNow result, structural/visual QA, operations update, and final status. No page inherits approval from another page in the batch.
