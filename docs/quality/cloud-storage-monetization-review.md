# Cloud Storage Monetization Governance Independent Review

- Reviewer role: Independent reviewer, separate from author pass
- Review date: 2026-07-12
- Reviewed branch: `research/cloud-storage-monetization-map`
- Governing standard: `operations/MONETIZATION_RESEARCH_STANDARD.md`
- Opportunity map: `docs/monetization/cloud-storage-monetization-opportunity-map.md`

## Evidence Reviewed

The review inspected:

- the complete Cloud Storage opportunity map;
- the monetization research standard;
- the five modified canonical standards;
- the three operations updates;
- `src/data/affiliateLinks.ts` for CBT status boundaries;
- all provider-level required fields and allowed actions;
- the named-network map and non-affiliate opportunity assessment;
- current first-party program pages for Proton, pCloud, Sync.com, Internxt, Tresorit, and Google Workspace;
- the full working-tree scope and Markdown diff integrity.

## Independence and Governance Findings

- The map contains exactly one current `Monetization Independence Check: PASS` gate near the beginning.
- Editorial candidates are tied to the pre-existing Cloud Storage dossier rather than built from monetization availability.
- Public program availability, network membership, provider approval, CBT approval, product coverage, and tracked-destination authorization are explicitly separated.
- Proton Drive attribution uncertainty is preserved: existing Proton relationships are not treated as evidence that Drive conversions are tracked or authorized.
- The pCloud 45-day versus 90-day tracking conflict is preserved using two current first-party pages and is correctly treated as requiring clarification before implementation.
- The current Sync.com Awin evidence and the stale ShareASale reference are both visible.
- No application, outreach, negotiation, affiliate-registry change, tracked link, CTA, ranking, verdict, or publication change is authorized by the research.
- Affiliate availability is not used to alter the approved Cloud Storage publication sequence or Proton Drive editorial conclusions.
- Lead generation, sponsorship, automatic link monetization, reseller, service, consent, privacy, disclosure, brand-bidding, and liability risks receive meaningful controls.
- High-liability migration consulting and MSP/reseller models are appropriately labeled `Not a fit`; other non-affiliate experiments are gated by traffic, maintenance, consent, or proof of demand.

## Provider-Field and Scope Verification

- Fourteen provider records are present.
- Every provider record contains all 19 fields required by `operations/MONETIZATION_RESEARCH_STANDARD.md`.
- Provider checked dates are present.
- Provider recommended actions use only allowed values.
- Named coverage includes direct programs, Impact, CJ Affiliate, Awin, ShareASale's successor state, PartnerStack, FlexOffers, Rakuten Advertising, Tradedoubler, Webgains, Sovrn Commerce, Skimlinks, and software marketplaces.
- CBT status statements are consistent with the centralized registry: related Proton records exist, but no Cloud Storage provider record is present.
- The working tree contains the new standard and map, five canonical-standard integrations, three operations updates, and this independent review. No article, application, route, UI, affiliate registry, sitemap, ranking, verdict, or content-count file is changed.
- `git diff --check` passed before this report was added; line-ending warnings are informational and no whitespace error was reported.

## First-Pass Corrections

### 1. Correct Internxt's program and network classification

Second-pass status: Resolved.

The Internxt record currently says:

- `Direct program or network: Direct`;
- `Network/platform: Internxt affiliate portal`.

The current official Internxt affiliate page sends both affiliate login and signup to `app.impact.com`. That is direct first-party evidence that Impact is the operating platform for the public program. The present record also conflicts with the network table, which says no named Cloud Storage candidate was confirmed on Impact.

Required correction:

- classify the program as an Internxt affiliate program operated through Impact;
- set the network/platform field to Impact;
- remove Internxt from the direct-program relevance list;
- identify Internxt as the verified Cloud Storage candidate in the Impact row;
- update the priority summary and recommended sequence wording if needed so they consistently say `Internxt / Impact`;
- preserve that CBT has no Internxt or Impact advertiser approval and that authenticated terms remain required before application or implementation.

Evidence: [Internxt Affiliate Program](https://internxt.com/affiliates) links affiliate login and signup to `app.impact.com` while displaying the 30-day cookie and commission structure.

### 2. Remove or substantiate the unsupported Sync.com acceptance-status statement

Final-pass status: Resolved.

The Sync conflict note says an older official page states that Sync was not accepting new affiliates. The currently cited Sync affiliate page does not contain that statement. It now links to Awin and separately retains stale ShareASale wording. The Awin-versus-ShareASale contradiction is real and should remain, but the additional acceptance-status claim is not supported by the cited current page.

Required correction:

- remove the claim that the cited page says Sync was not accepting new affiliates; or
- cite a dated, preserved first-party source that actually contains that statement and clearly label it historical;
- retain the verified contradiction between current Awin signup/help content and stale ShareASale copy;
- continue requiring an authenticated Awin recheck before application.

Evidence: [Sync affiliate page](https://www.sync.com/affiliates/) currently links signup to Awin while still mentioning ShareASale; [Sync affiliate help](https://help.sync.com/hc/en-us/articles/38275572602643-Does-Sync-have-an-affiliate-reseller-commission-or-rewards-program) identifies Awin and current commission terms.

## Non-Blocking Observations

- `Apply now` means an application priority only; the later authorized task must still resolve pCloud's tracking conflict and capture authenticated advertiser terms.
- Tresorit's public PartnerStack listing supports the headline initial-sale commission, but cookie, validation, reversal, payout, geography, and paid-search terms remain properly unverified.
- Proton's public page supports Drive inclusion and public commission presentation, but the map correctly refuses to infer that CBT's existing Proton relationships attribute Drive sales.
- The monetization standard is stringent and does not weaken existing editorial, evidence, review, publishing, or affiliate-isolation controls.

## Second-Pass Review

### Internxt correction

The Internxt correction passes. The provider record now identifies an Internxt affiliate program operated through Impact, the priority summary uses Impact, Internxt was removed from the direct-program row, and the Impact row identifies Internxt while preserving that CBT has no advertiser approval. Current first-party page links for affiliate signup and login resolve to `app.impact.com`.

### Sync.com correction

The Sync.com correction now passes. The unsupported acceptance-status quote was removed. The map preserves only the retrievable first-party conflict: the live `sync.com/affiliates` page retains stale ShareASale wording while the current official help article directs publishers to Awin. It does not infer CBT acceptance or current merchant availability, and it requires an authenticated Awin recheck before action.

## Final-Pass Result

- Internxt is consistently recorded as an Impact-hosted network program in the provider record, priority summary, direct-program row, and Impact row.
- Sync.com is consistently recorded as an Awin program with a stale live ShareASale reference preserved as a conflict.
- Public availability remains separate from CBT network, advertiser, product, and tracked-link status.
- pCloud's cookie conflict and Proton Drive's attribution uncertainty remain visible.
- The independence gate remains exactly one `PASS` statement and no commercial implementation is authorized.
- All required provider fields, checked dates, named-network coverage, allowed actions, non-affiliate controls, and canonical-standard integrations pass.
- `git diff --check` passes; no article, route, UI, affiliate registry, sitemap, ranking, verdict, or content-count change is present.

## Final Reviewer Decision

`APPROVE FOR MERGE`

All first-pass corrections are resolved. The monetization governance installation and Cloud Storage opportunity map satisfy the binding standard. This approval does not authorize applications, outreach, negotiation, tracked links, CTA changes, rankings, verdict changes, or other commercial implementation.
