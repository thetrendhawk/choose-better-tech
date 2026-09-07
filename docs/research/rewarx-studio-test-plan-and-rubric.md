# Rewarx Studio AI Hands-On Test Plan and Rubric

> Recovered 2026-09-06 from uncommitted desktop notes. Historical observations are dated August 2026; no live product verification occurred during recovery. Private information has been removed. See [recovery handoff](rewarx-review-recovery-handoff-2026-09-06.md) for corrections, limitations, and current continuation steps. Evidence paths below are inventory references, not public files.

Status: Recovered historical test plan; eleven recorded runs; incomplete review
Established: 2026-08-14
Historical credit baseline: 110 verified; 22 consumed through RW-20260814-11; 88 last observed on 2026-08-14

## Purpose

Evaluate whether Rewarx Studio AI produces commercially usable ecommerce visuals while preserving the identity and sale-relevant characteristics of the source product. The test is designed to capture failures and correction costs, not only attractive outputs.

This plan governs hands-on evidence collection. It does not authorize publication, a favorable verdict, a ranking, an affiliate call to action, or use of a tracked link.

## Independence and Disclosure Boundary

- Rewarx supplied 100 complimentary testing credits in addition to the 10-credit new-account baseline.
- Any resulting coverage must disclose the complimentary access.
- Any later use of an affiliate link must separately disclose the Awin relationship and potential commission.
- Affiliate economics, vendor feedback, and continued testing support do not affect scoring.
- Vendor tutorials may explain intended workflows but do not count as evidence that a workflow succeeds.

## Evidence Labels

- **Observed fact:** directly seen during controlled use.
- **Provider claim:** stated by Rewarx or its interface but not independently verified.
- **Measured result:** timing, dimensions, file size, credit charge, or repeatable count captured during testing.
- **Evaluator judgment:** rubric-based assessment tied to retained inputs and outputs.
- **Unresolved:** evidence is insufficient or conflicting.

## Policy Baseline Observed on 2026-08-14

- The privacy policy, labeled last updated January 8, 2026, says uploaded raw images and generated assets are stored in private cloud storage and that generation timestamps and settings are collected.
- It says images are not shared with third parties for marketing, but it does not state a routine retention period for uploads or outputs while the account remains open.
- It says account closure removes uploaded source images and generated assets from active servers within 30 days; it does not define backup deletion timing.
- The policy says public models are not trained on private data without permission, but the phrase “without permission” and the permission mechanism are not defined on the page.
- The terms, effective January 8, 2026, require the user to own rights to uploaded source material.
- The terms waive Rewarx copyright claims and grant a full commercial license only for outputs produced on a paid plan. The complimentary-credit evaluation account's output license is therefore unresolved and must be clarified before public reuse of generated assets.
- The pricing screen advertises a 100% money-back guarantee, while the terms say refunds for used credits are generally not provided. The scope, time limit, and exceptions of the guarantee are unresolved.
- The terms say credits are consumed upon successful generation. Failed or stalled generations must therefore be checked for improper deductions.

## Source-Image Set

Use three non-sensitive images that Choose Better Tech owns or has permission to submit for AI processing. Do not upload client work, personal photos, confidential branding, unreleased products, or files containing hidden personal metadata.

| ID | Product challenge | Required ground-truth traits | Purpose |
| --- | --- | --- | --- |
| RW-S1 | Rigid packaged product | Stable silhouette, readable label or logo, two or more distinct colors, cap or closure detail | Tests geometry, brand/text retention, color, and packaging fidelity |
| RW-S2 | Reflective or transparent product | Glass, polished metal, glossy plastic, or transparent material with visible edges and highlights | Tests material rendering, reflections, transparency, and edge integrity |
| RW-S3 | Wearable or flexible product | Garment, bag, scarf, or similar item with seams, pattern, hardware, or drape cues | Tests deformation, texture, construction details, and specialized apparel workflows |

### Approved Source Record

#### RW-S1 — Generic cardboard retail package

- Source file: `private-inputs/box.jpg`
- Rights status: Owner confirmed permission to upload, modify, and use for the evaluation on 2026-08-14.
- Original conversation image: 1,408 × 768 pixels. The recovered `box.jpg` is already cropped and measures 534 × 674 pixels (verified 2026-09-06); do not treat the original dimensions as the uploaded file's dimensions.
- Preprocessing recorded during testing: the owner cropped out the unrelated sparkle mark. The recovered file shows the cropped package.
- Primary text ground truth: `GENERAL PRODUCT`; `CONTENTS`; `Net Wt. 16 oz (453g)`; `ITEM NO. 12345`.
- Secondary text ground truth: `PREMIUM QUALITY | ECO-FRIENDLY PACKAGING`; `DISTRIBUTED BY:`; `GLOBAL RETAIL SOLUTIONS, INC. | MADE IN USA`.
- Geometry ground truth: upright rectangular kraft-cardboard box; centered bordered label; narrow top flap; folded lower corners; centered logo; barcode below the item number.
- Scoring limitation: the smallest footer text, symbols, and barcode digits appear partly malformed in the source and must not be scored as Rewarx-introduced defects unless the output materially changes their placement or legibility relative to the source.

#### RW-S3 — Blank white T-shirt

- Source file: `private-inputs/Blank-T-shirt-Mockup-PSD-1536x1306.jpg`
- Rights status: Owner confirmed permission to upload, modify, and use for the evaluation on 2026-08-14.
- Source dimensions: 1,536 × 1,306 pixels; suitable for the initial 1K test, below the preferred 2,000-pixel source edge.
- Product ground truth: plain white short-sleeve crew-neck T-shirt without visible branding or printed artwork.
- Construction ground truth: symmetrical front-facing silhouette; ribbed crew collar; visible inner neck facing and blank neck tag; short sleeves; straight lower hem; shoulder and sleeve seams.
- Material ground truth: smooth white fabric with soft folds across the chest and lower torso, subtle cool-toned shadows, and no pattern, graphic, stain, or colored trim.
- Background ground truth: neutral medium-gray surface with a soft product shadow.
- Primary workflows: Photography Studio and Virtual Try-On. Do not use it as the main Ghost Mannequin input because the source is not photographed on a mannequin or model.
- Critical fidelity checks: added logos or graphics, changed collar or sleeve construction, lost seams, invented accessories, altered garment color, implausible drape, or distorted proportions.

#### RW-S2 — Clear empty glass bottle

- Source file: `private-inputs/Clear_empty_glass_bottle.jpg`
- Rights status: Wikimedia Commons source by Santeri Viinamäki, licensed CC BY-SA 4.0; attribution, modification notice, and ShareAlike obligations apply to distributed source or derivative material.
- Original notes listed 3,648 × 2,736 pixels. The recovered local bottle input measures 1,920 × 1,440 pixels (verified 2026-09-06); the larger original was not located.
- Product ground truth: clear empty uncapped bottle; rounded shoulders; narrow threaded neck; thick transparent base; faint green-blue glass cast; visible surface wear, scratches, and rust-colored spots.
- Background ground truth: bottle standing on a weathered white wooden railing with vivid green grass behind it.
- Critical fidelity checks: altered shoulder or neck geometry, removed wear marks, invented label or cap, changed glass color, opaque or implausible transparency, incorrect reflections, or altered physical condition.

Preferred preparation:

- longest edge of at least 2,000 pixels;
- one product per image unless the Group Shot test intentionally uses multiple products;
- uncluttered background and even lighting;
- no personal identifiers or location clues;
- original files retained outside Rewarx for side-by-side comparison;
- a short ground-truth checklist written before generation.

## Scorecard

Score each applicable category from 0 to 5, then apply the listed weight. Record `N/A` only when the category genuinely does not apply; explain every `N/A` and normalize the remaining weights for that output.

| Category | Weight | 5 — Excellent | 3 — Usable with correction | 1 — Material failure |
| --- | ---: | --- | --- | --- |
| Product fidelity | 30 | Shape, proportions, colors, label/logo, material, closures, seams, and distinctive features remain faithful | Minor defects are visible but do not misrepresent the item after limited correction | Product identity or sale-relevant characteristics are materially changed |
| Visual and commercial quality | 20 | Clean composition, credible lighting/shadows, realistic contact, and marketplace-ready polish | Visually acceptable but needs retouching, cropping, or artifact cleanup | Obvious artifacts, implausible scene, or unusable commercial presentation |
| Controllability and repeatability | 15 | Controls and prompts reliably change requested attributes while preserving the product | Mixed adherence or noticeable variation across reruns | Instructions are ignored or corrections introduce new product errors |
| Workflow usability | 10 | Inputs, defaults, progress, error states, and downloads are clear | Learnable with friction or ambiguous controls | Workflow blocks completion or creates a high risk of accidental misuse |
| Speed and reliability | 10 | Completes promptly and consistently with clear status | Noticeable delay, retry, or recoverable failure | Repeated failure, lost task, or unexplained stall |
| Credit efficiency and value | 10 | Charges are disclosed before generation and useful output requires little or no rework | Cost is predictable but correction materially increases effective spend | Charges are unclear, incorrect, or mostly consumed by unusable outputs |
| Export readiness | 5 | Promised resolution/format is delivered without watermark and with suitable dimensions | Export works with minor limitations | Missing, degraded, watermarked, or unusable export |

Weighted score formula: `category score / 5 × category weight`. Report the numeric result only with the applicable workflow, source image, test settings, and known limitations.

## Critical-Failure Flags

Flag an output regardless of its aesthetic score when it:

- changes readable label, logo, dosage, quantity, certification, compatibility, or other product text;
- invents, removes, or relocates a functional component;
- materially changes color, dimensions, pattern, texture, or product count;
- creates implausible contact, reflection, transparency, anatomy, or shadows that could mislead a buyer;
- places a product in a context that implies an unsupported use, included accessory, or performance claim;
- charges more credits than the pre-generation interface indicated;
- cannot be downloaded at the selected quality or includes an undisclosed watermark;
- loses the task or output without a recoverable record.

## Credit Budget

The balance verified on 2026-08-14 was 110 credits. Rewarx's live monthly pricing screen stated that standard images cost 1 credit, 2K images cost 2 credits, 4K images cost 3 credits, and video costs 20 credits. Actual pre-generation charges must still be recorded for every workflow because specialized modes or multi-output sets may differ.

| Allocation | Maximum credits | Rationale |
| --- | ---: | --- |
| Core Photography Studio tests | 24 | Three products, baseline and controlled variants, mostly 1K/2K |
| Fidelity correction and repeatability | 18 | Reruns using identical and corrected directions |
| Specialized workflow tests | 28 | One or more of Product Visual X, Vibe Match, apparel, mockup, group shot, or ad workflow as inputs permit |
| Resolution/export comparison | 9 | Same suitable scene at 1K, 2K, and 4K |
| Optional video test | 20 | One controlled static-to-video generation only after image workflows are characterized |
| Uncommitted reserve | 11 | Failure reproduction or an evidence gap discovered during testing |
| **Total** | **110** | Do not exceed the verified grant without a new written authorization and logged baseline |

No allocation requires spending the maximum. Stop a workflow early when its evidence is already sufficient or when repeated critical failures make further spend uninformative.

## Test Sequence

### Phase 0 — No-Spend Baseline

- Verify signed-in account and displayed balance.
- Record visible workflows, input requirements, controls, and stated credit schedule.
- Record current plan prices, included credits, watermarks, cancellation language, and any guarantee claim.
- Preserve the privacy, terms, upload-rights, output-license, retention, deletion, refund, and cancellation findings; obtain clarification where the live policies remain ambiguous.
- Confirm source-image rights and remove unnecessary metadata.

### Phase 1 — Core Photography Studio

For RW-S1, RW-S2, and RW-S3:

1. Generate one 1K baseline using the documented default or Auto settings.
2. Generate one controlled variant with a fixed background, camera angle, lighting choice, aspect ratio, and concise creative direction.
3. Record the balance before and after each generation, elapsed time, task state, output count, and download behavior.
4. Score each output against its written ground-truth checklist.

### Phase 2 — Repeatability and Correction

- Repeat one promising configuration without changing the input or settings.
- Issue one narrow correction for a material defect found in Phase 1.
- Compare product fidelity, composition variance, correction success, and additional credit cost.
- Do not hide or replace the original failed output in the evidence set.

### Phase 3 — Specialized Workflows

Select workflows based on the available source products:

- Product Visual X: primary photo plus one or more angles if available;
- Vibe Match: one product and a rights-cleared visual-style reference;
- Virtual Try-On or Ghost Mannequin: RW-S3 when the garment input meets the workflow requirements;
- Mockup Generator: a rights-cleared transparent design or a controlled text-prompt design;
- Group Shot: RW-S1 and RW-S2 together, with relative scale documented;
- Product Page or Commercial Ad: one product with deliberately factual marketing copy.

Record every automatic analysis or market-insight step separately from final generation. Treat generated marketing claims and altered product text as critical risks.

### Phase 4 — Resolution and Export

- Use one stable configuration for 1K, 2K, and 4K outputs when the workflow permits.
- Record delivered pixel dimensions, file format, file size, watermark state, metadata, and visible detail differences.
- Check whether the higher-resolution outputs improve detail or merely upscale artifacts.

### Phase 5 — Optional Video

Run only after the static-image evidence is sufficient and 20 credits remain intentionally allocated. Record duration, resolution, motion realism, product deformation, audio state, generation time, file properties, and product-fidelity changes across frames.

## Per-Run Evidence Record

Create one row per charged action:

| Field | Required value |
| --- | --- |
| Run ID | `RW-YYYYMMDD-##` |
| Timestamp | Pacific time and UTC if available |
| Workflow | Exact Rewarx mode and submode |
| Source IDs | RW-S1, RW-S2, RW-S3, or approved reference ID |
| Ground truth | Traits that must not change |
| Prompt/directives | Exact text entered |
| Settings | All selected presets, toggles, angles, ratio, and quality |
| Pre-charge | Credit cost shown before generation |
| Balance before/after | Observed values |
| Elapsed time | Submission to completed or failed state |
| Output files | Private evidence filenames; exclude private URLs and tokens |
| Result | Completed, failed, stalled, or canceled |
| Critical flags | Every applicable flag or `None observed` |
| Rubric scores | Category scores with short reasons |
| Follow-up | Rerun, correction, support question, or no further test |

## Evidence Handling

- Keep source images and full-resolution outputs private until publication rights and disclosure decisions are complete.
- Do not commit authentication material, private task URLs, signed asset URLs, embedded account identifiers, or personal metadata.
- Repository notes may use sanitized filenames, dimensions, timing, settings, credit counts, and textual findings.
- Screenshots intended for later public use require a separate privacy and rights review.

## Stop Conditions

Pause testing and ask for owner direction if:

- source-file rights or upload authorization are unclear;
- the product requests broader account, storage, camera, or identity access than the test requires;
- terms do not clearly permit commercial use of outputs or impose an unexpected license on uploads;
- a workflow attempts to start a subscription, trial, purchase, or automatic renewal;
- actual credit deductions materially differ from disclosed costs;
- generated content creates a serious legal, safety, trademark, likeness, or product-misrepresentation concern;
- the remaining balance is insufficient to preserve the 11-credit evidence reserve.

## Completion Standard

Hands-on testing is complete only when the retained evidence supports a clear statement of:

- what Rewarx reliably does well;
- which product types and workflows it fits;
- which defects, failure modes, and correction costs were observed;
- what the credit model means for a realistic seller workload;
- what rights, privacy, and commercial-use limits apply;
- which conclusions remain provider claims or unresolved;
- whether the appropriate first asset is a review, comparison, buyer's guide, or no publication.
