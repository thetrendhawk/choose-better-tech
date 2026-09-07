# Rewarx Studio AI Evaluation Log

> Recovered 2026-09-06 from uncommitted desktop notes. Historical observations are dated August 2026; no live product verification occurred during recovery. Private information has been removed. See [recovery handoff](rewarx-review-recovery-handoff-2026-09-06.md) for corrections, limitations, and current continuation steps. Evidence paths below are inventory references, not public files.

Status: Recovered research; review incomplete; last observed balance 88 on 2026-08-14
Last updated: 2026-08-14

## Strategic Role

Rewarx Studio AI is the founding product for Choose Better Tech's AI Ecommerce Creative Tools pillar. This is not an isolated affiliate intake and should not be folded into the broad AI Productivity backlog without preserving its ecommerce-specific purpose.

## Relationship Timeline

### Access and relationship disclosure

Choose Better Tech joined Rewarx's affiliate program and received 100 complimentary evaluation credits in addition to the 10-credit signup baseline. This disclosure is retained; private correspondence and commercial account details are excluded.

### 2026-08-07 — Account baseline verified

- Choose Better Tech registered and signed into the Rewarx Studio account.
- The new-account balance displayed 10 credits, matching Rewarx's stated onboarding allowance.
- The guided product tour was completed without uploading an asset or generating output.
- No credits were consumed; the verified post-tour balance remained 10.
- Visible top-level workflows were Photo, Video, Poster, and Set.
- Visible studio modes were AI Product Visual X, Photography Studio, Model Studio, Virtual Try-On, Ghost Mannequin, Mockup Generator, Group Shot, Product Page, Commercial Ad, Vibe Match, and Background Remover.
- The initial AI Product Photography workspace exposed batch upload, creative-direction text, background removal, automatic props, model insertion, aesthetic presets, lighting, atmosphere, background color, camera angle, aspect ratio, and 1K/2K/4K quality controls.

### 2026-08-14 — Hands-on evaluation preparation opened

- The live signed-in account displayed 110 credits, independently confirming the original 10-credit baseline plus the 100-credit grant.
- No credits were consumed during preparation.
- The live monthly pricing screen displayed Starter at a $9.90 new-user first-month price with $29.90 also shown, Growth at $54.90 per month, Scale at $129.90 per month, and Agency at $249.90 per month.
- The same screen stated that the monthly plans include 100, 200, 500, and 1,000 credits respectively; it described standard images as 1 credit, 2K images as 2 credits, 4K images as 3 credits, and video as 20 credits.
- The interface also displayed no-watermark language for Starter, a 100% money-back guarantee, and cancel-anytime language. These are current provider claims and require terms-level qualification before publication.
- All eleven visible studio modes were opened without uploading assets or initiating generation. Their input requirements and controls were inventoried.
- A category-specific hands-on test plan and weighted scoring rubric was established at `docs/research/rewarx-studio-test-plan-and-rubric.md`.
- The privacy policy says raw uploads and generated assets are stored privately and that account closure removes them from active servers within 30 days, but it does not provide a routine retention period for an open account or a backup-deletion schedule.
- The privacy policy says public models are not trained on private data without permission, but the page does not define the permission mechanism.
- The terms require upload rights and grant a full commercial license only to outputs produced on a paid plan. Whether the complimentary-credit evaluation account receives equivalent output rights is unresolved; generated assets must not be reused publicly until clarified.
- The pricing page's 100% money-back guarantee and the terms' general exclusion of refunds for used credits require clarification about scope and exceptions.
- The owner approved `box.jpg` as RW-S1, the primary rigid packaged-product source. Its readable label text, kraft-cardboard texture, flap geometry, border, logo, and barcode placement form the pre-generation ground truth; small source-text defects are excluded from Rewarx fault scoring.
- The owner approved `Blank-T-shirt-Mockup-PSD-1536x1306.jpg` as RW-S3, the wearable/flexible-product source. Its plain white color, unbranded surface, crew collar, sleeves, seams, folds, and silhouette form the pre-generation ground truth for Photography Studio and Virtual Try-On testing.

### 2026-08-14 — First charged baseline completed

- RW-20260814-01 tested RW-S2 and RW-S3 together in Photography Studio batch mode at 1K with Creative Direction blank, Remove Background on, Auto Props off, Add Model off, and all visual controls on Auto.
- The interface disclosed a 2-credit charge; the balance moved from 110 to 108 after successful completion.
- Completion took approximately 86 seconds including two product-selection steps and a no-model confirmation.
- Rewarx correctly selected the T-shirt and bottle as primary objects but also classified the T-shirt's neck tag, the wooden railing, and the grass background as separate candidate products.
- The completed interface explicitly offered an upgrade to unlock commercial rights and remove watermarks. Both outputs visibly displayed `rewarx.com`, showing that clean commercial export was presented as an upgrade feature. The grant's legal output rights remain unresolved.
- The bottle output was visually polished but materially changed product condition and geometry by removing wear marks and producing a cleaner, narrower, taller bottle. It received a critical product-fidelity failure flag.
- The T-shirt output preserved the main garment identity more successfully but added books, a plant, and a `CAFE` mug even though Auto Props was off.
- Full findings and private evidence locations are recorded in `docs/research/rewarx-studio-run-log.md`.

### 2026-08-14 — Controlled bottle preservation test completed

- RW-20260814-02 reused the saved RW-S2 source asset through Library → New Production and disclosed a 1-credit charge.
- The run used a concise preservation instruction plus Pro Studio aesthetic, Soft Window lighting, Clean atmosphere, White background, Front camera, 1:1 format, and 1K quality.
- Rewarx again segmented the source into bottle, wooden railing, and grass candidates; only the bottle was selected. It again asked whether to add a model despite Add Model being off.
- Completion took approximately 80 seconds including the required product-selection and no-model confirmations. The balance moved from 108 to 107.
- The controlled result followed the requested front-view white-background composition and retained the threaded neck, thick base, blue-green cast, and substantially more rust spots, scratches, dirt, and wear than the Auto baseline.
- Product condition fidelity improved materially, demonstrating that explicit preservation direction can mitigate—but does not eliminate—the need for source comparison. The bottle was still regenerated rather than pixel-preserved, so exact geometry and mark placement require close review.
- A visible `rewarx.com` watermark remained. The result gallery reported two variations, with the saved source appearing alongside the generated result.
- Full findings and the private evidence location are recorded in `docs/research/rewarx-studio-run-log.md`.

### 2026-08-14 — Controlled labeled-package test completed

- RW-20260814-03 tested the owner-cropped RW-S1 source in Photography Studio with explicit package-preservation direction, Pro Studio aesthetic, Soft Window lighting, Clean atmosphere, White background, Front camera, 1:1 format, and 1K quality.
- Rewarx segmented the package into six selectable “products”: cardboard box, product label, brand logo, barcode, recycle symbol, and keep-dry symbol. All six were selected because the five printed elements are intrinsic package details.
- The run disclosed and charged 1 credit, moving the balance from 107 to 106. Completion took approximately 84 seconds including the selection and no-model confirmations.
- The output substantially preserved the main typography, label hierarchy, weight, item number, barcode placement and digits, distributor line, logo placement, kraft texture, border, and flap structure.
- Fine-print and small-symbol fidelity was not exact: the recycle/keep-dry area contained minor text or symbol corruption, while geometry, texture, and lighting were subtly regenerated.
- A visible `rewarx.com` watermark remained. The result supports strong-but-not-exact package fidelity and still requires close source comparison before ecommerce use.
- Full findings and the private evidence location are recorded in `docs/research/rewarx-studio-run-log.md`.

### 2026-08-14 — Controlled bottle repeatability test completed

- RW-20260814-04 repeated RW-20260814-02 using the same RW-S2 source, prompt, Pro Studio aesthetic, Soft Window lighting, Clean atmosphere, White background, Front camera, 1:1 format, and 1K quality.
- Rewarx carried the previous box prompt and settings into the reused bottle project. Correcting the inherited state temporarily left zero camera angles selected and displayed `Generate Photos (0 Credits)` until Front was reselected; generation did not begin in the invalid state.
- The corrected run disclosed and charged 1 credit, moving the balance from 106 to 105. Completion took approximately 66 seconds including selection and no-model confirmations.
- Both controlled bottle outputs used a consistent white studio composition and retained similar rust-cluster regions, scratches, base wear, uncapped threaded neck, and overall product identity.
- Exact-product repeatability was only moderate: the repeat was darker and greener, appeared slimmer, changed shoulder and neck proportions, altered highlights, and shifted fine wear-mark placement.
- The test supports good style/composition repeatability but not deterministic product-condition reproduction. Both outputs remain visibly watermarked.
- Full findings and the private evidence location are recorded in `docs/research/rewarx-studio-run-log.md`.

### 2026-08-14 — Five-cycle unattended workflow block completed

- Cycle 1 opened Virtual Try-On and inventoried its garment upload, optional target-model upload, pose, model-description, background, lighting, and additional-requirements controls. Automated upload of the already approved T-shirt was blocked because Chrome did not expose the hidden file chooser; no file was transmitted and no credit was spent.
- The external Chrome layout also exposed a responsive defect at the active window width: both the desktop mode sidebar and mobile menu control were hidden. A temporary 1280 × 900 viewport exposed the specialized-mode navigation.
- Cycle 2 tested the Library Download action on the latest 1K bottle result. The click produced no browser download event or visible success confirmation within ten seconds; no credit was spent. Direct evidence retrieval from the result asset remained possible.
- Cycle 3 ran one-click 2K upscale on RW-20260814-04. The action began immediately without displaying its 2-credit cost at the action point, completed in approximately 42 seconds, and moved the balance from 105 to 103. The saved PNG measured 2,048 × 2,048 and 5,493,327 bytes.
- Cycle 4 saved `RW Evaluation 2K Bottle Upscale` as a style/template and received a Saved confirmation, but opening Templates immediately triggered the subscription screen. No credit was spent.
- Cycle 5 compared the 2K asset with the 1K input. Downsampling the 2K asset produced mean absolute RGB differences of 3.081, 2.976, and 2.922 across the full frame, showing a close but non-identical upscale. The 2K output visibly contained two `rewarx.com` marks: the upscaled original watermark plus a newly applied watermark.
- Full findings and the private evidence location are recorded in `docs/research/rewarx-studio-run-log.md`.

### 2026-08-14 — Controlled Virtual Try-On completed

- After Chrome extension file-URL access was enabled, RW-S3 uploaded successfully through the visible Virtual Try-On garment control.
- RW-20260814-06 used Standing Front, a generated adult model with average build and neutral stance, Studio White, Soft Studio lighting, Portrait format, 1K Standard, and explicit garment-preservation and full-body requirements.
- Start Production initially showed no cost. The secondary production dialog initially showed 2 credits, then changed to `Required Cost: 1 Credits` after 1K Standard was selected.
- The completed balance nevertheless moved from 103 to 101, charging 2 credits rather than the final disclosed 1-credit cost.
- Completion took approximately 46 seconds. The saved portrait PNG measured 896 × 1,200 and 1,591,657 bytes.
- The output produced plausible anatomy and a clean, recognizable white crew-neck T-shirt, but ignored the full-body requirement by cropping around the thighs and materially regenerated garment fit, collar, sleeve shape, proportions, and folds.
- The blank, unbranded identity was retained and no props or graphics were added. The hidden source neck label could not be preserved visibly on the worn garment.
- A visible `rewarx.com` watermark remained. Full findings and private evidence are recorded in `docs/research/rewarx-studio-run-log.md`.

### 2026-08-14 — Specialized overnight cycles

- **2026-08-14 — Five specialized overnight cycles completed:** Ghost Mannequin, Mockup Generator, Background Remover, Product Page, and Group Shot were executed with approved/private assets. Mockup generation preserved exact test text well. Background Remover returned a JPEG without transparency. Product Page invented commercial facts during sensing and ignored an explicit prohibition against unsupported claims in all eight customer-facing assets. Group Shot produced a polished composition but reinterpreted the hero garment. Credit disclosures were inconsistent: Product Page disclosed 32 but charged 8; Group Shot disclosed 4 but charged 2. Balance ended at 88.

## Independence and Disclosure Controls

- Complimentary credits must be disclosed in resulting coverage.
- The affiliate relationship and potential commission must be disclosed if a tracked link is later used.
- Additional credits should be logged with date and quantity so readers can understand the extent of provided access.
- Complimentary access must not influence coverage, timing, tone, ranking, or verdict.
- No favorable coverage commitment is recorded.
- No tracked link, CTA, verdict, ranking, or publication is authorized by this intake record.

## Next Actions

The original preparation checklist was stale after testing. Follow the recovery handoff: reconcile evidence, complete missing research and scoring, and obtain a separate authorization for any new product testing, vendor contact, or publication.
