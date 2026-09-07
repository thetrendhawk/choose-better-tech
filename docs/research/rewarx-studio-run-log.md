# Rewarx Studio AI Hands-On Run Log

> Recovered 2026-09-06 from uncommitted desktop notes. Historical observations are dated August 2026; no live product verification occurred during recovery. Private information has been removed. See [recovery handoff](rewarx-review-recovery-handoff-2026-09-06.md) for corrections, limitations, and current continuation steps. Evidence paths below are inventory references, not public files.

Status: Active
Opened: 2026-08-14
Related rubric: [Rewarx Studio AI Hands-On Test Plan and Rubric](rewarx-studio-test-plan-and-rubric.md)

## Evidence Boundary

This sanitized log excludes account identifiers, private task URLs, CDN asset URLs, and embedded source data. Full-resolution outputs are retained privately outside the repository. Complimentary credits and the affiliate relationship do not affect observations or scoring.

> Recovery qualification: earlier download-event timeouts do not establish that downloading failed. Two visually corresponding exports were recovered from Downloads. Later runs also resolved the early upload blocker. See the handoff for details.

## RW-20260814-01 — Photography Studio Auto Baseline

### Run identity

| Field | Recorded value |
| --- | --- |
| Started | 2026-08-14 12:41:40 PM Pacific / 2026-08-14 19:41:40 UTC |
| Workflow | Photography Studio → Photo → Batch mode |
| Sources | RW-S2 clear glass bottle; RW-S3 blank white T-shirt |
| Prompt | None; Creative Direction left blank |
| Toggles | Remove Background on; Auto Props off; Add Model off |
| Controls | Aesthetic Auto; Lighting Auto; Atmosphere Auto; Background Auto; Camera Auto; Format Auto; Quality 1K |
| Pre-charge | `Generate Batch of 2 (2 Credits)` |
| Balance | 110 before; 108 after |
| Charged | 2 credits, matching the disclosed cost |
| Measured completion | Approximately 86 seconds from initial Generate click, including required product-selection and no-model confirmations |
| Result | Completed; two distinct 1,024 × 1,024 PNG output assets observed |
| Private evidence | `private-evidence/RW-20260814-01/RW-20260814-01-bottle-auto-1k.png`; `private-evidence/RW-20260814-01/RW-20260814-01-tshirt-auto-1k.png` |

### Workflow observations

- Rewarx analyzed each image and required product confirmation before rendering.
- For RW-S3, it identified the white T-shirt correctly but also classified the inner neck tag as a separate `clothing label`. The T-shirt was retained and the tag was excluded as a separate product.
- For RW-S2, it identified the bottle correctly but also classified the wooden railing and grass background as separate products. Only the bottle was retained.
- After product confirmation, Rewarx prompted `Add a model for better results?` even though Add Model was off. `No, Keep Simple` preserved the baseline.
- The balance remained 110 during analysis and changed to 108 after successful generation, consistent with the terms' successful-generation charging rule.
- The result displayed a one-hour first-generation subscription offer at $9.90 for the first month.
- It also displayed `Unlock commercial rights & remove watermarks — Upgrade to Pro`. Both outputs visibly contained a `rewarx.com` watermark. The UI presented clean commercial export as an upgrade feature; the complimentary grant's legal output rights remain unresolved.
- The gallery stated `Variations 1 / 4`, but only two distinct generated CDN assets were observed alongside source-image data. The four-item count is unresolved.
- Update Image was offered at 1 credit under the current 1K settings. No refinement was initiated.

### RW-S2 bottle result

Observed strengths:

- Clean, coherent outdoor lifestyle composition.
- Credible warm lighting, depth of field, tabletop contact, and glass transparency at ordinary viewing size.
- The output remained recognizably a clear, empty, uncapped glass bottle.

Critical fidelity failures:

- The source bottle's rust-colored spots, dirt, scratches, and wear were removed, turning a visibly used bottle into a pristine product.
- The rounded, bulbous source shoulders became narrower and more angular.
- The output appeared taller and slimmer relative to its width.
- Surface reflections, color cast, base appearance, and neck details were materially regenerated rather than preserved.
- These changes could misrepresent the condition and physical shape of a product offered for sale.

Other findings:

- The grassy/railing environment was replaced with a polished warm outdoor scene and wooden block.
- A visible `rewarx.com` watermark prevents clean commercial deployment on this account.

Provisional assessment: visually attractive, but unsuitable for product-condition-sensitive ecommerce use without careful comparison and correction. Product fidelity receives a critical-failure flag.

### RW-S3 T-shirt result

Observed strengths:

- The output remained a plain white, unbranded, short-sleeve crew-neck T-shirt.
- The crew collar, blank inner tag, shoulder seams, sleeve hems, lower hem, and major fabric folds remained recognizable.
- The lifestyle tabletop composition was clean and commercially plausible.

Limitations and control findings:

- Rewarx changed the viewing angle, fold geometry, proportions, and lighting, requiring closer comparison before a high fidelity score is justified.
- The scene added books, a plant, and a mug bearing `CAFE` text even though Auto Props was off. The interface does not explain whether background-scene objects are exempt from that toggle.
- The `CAFE` mug introduced generated text unrelated to the product.
- A visible `rewarx.com` watermark prevents clean commercial deployment on this account.

Provisional assessment: substantially better identity retention than the bottle and potentially useful for lifestyle mockups, but added scene objects and the free-account rights/watermark restriction remain material limitations.

### Follow-up authorized by the rubric

1. Run one controlled Photography Studio variant using explicit background, camera, lighting, aspect ratio, and concise fidelity direction.
2. Run one narrow bottle correction designed to preserve wear marks and original geometry.
3. Compare identical-settings repeatability after the controlled variant establishes a stable configuration.
4. Do not purchase or start a subscription without separate owner authorization.

## RW-20260814-05 — Five-Cycle Workflow, Export, and 2K Upscale Block

### Authorization and boundary

The owner authorized five uninterrupted evaluation cycles using the existing approved assets and credit pool. The block did not authorize a subscription, upgrade, publication, deletion, or payment action.

### Cycle 1 — Virtual Try-On access and upload

- Opened Virtual Try-On and observed batch garment upload, optional target-model upload, eleven pose choices, model description, eleven background choices, ten lighting choices, and additional requirements.
- At the active external-Chrome width, Rewarx hid both the desktop sidebar and mobile menu control. A temporary 1,280 × 900 viewport was required to expose specialized-mode navigation.
- The product upload input accepted multiple images and the target-model input accepted one image, but Chrome did not expose the hidden product file chooser to automation.
- The approved T-shirt was not transmitted and no credit was spent. Specialized apparel generation remains blocked until the browser extension can upload local files.

### Cycle 2 — Standard Library download

- Opened the latest 1K bottle output in Library and selected Download.
- No browser download event or visible success confirmation appeared within ten seconds.
- Direct evidence retrieval from the generated result asset remained available, but the ordinary user-facing download path was not verified as successful.
- No credit was spent.

### Cycle 3 — One-click 2K upscale

| Field | Recorded value |
| --- | --- |
| Source | RW-20260814-04 controlled bottle repeat output |
| Action | Library detail → One-Click Upscale → 2K |
| Cost disclosure | No cost shown on the 2K button or in a confirmation step; processing began immediately |
| Balance | 105 before; 103 after |
| Charged | 2 credits, consistent with the general pricing table but not disclosed at action time |
| Completion | Approximately 42 seconds |
| Output | 2,048 × 2,048 PNG; 5,493,327 bytes |
| Private evidence | `private-evidence/RW-20260814-05/RW-20260814-05-bottle-upscale-2k.png` |

### Cycle 4 — Save as Template

- Saved the 2K result as `RW Evaluation 2K Bottle Upscale` and received a `Saved` confirmation with Start Batch and Dismiss actions.
- After dismissing the confirmation, opening Templates triggered the Membership Plans subscription screen instead of a template library.
- The interface therefore permits a free-account user to create a named style before revealing that template access is paywalled.
- No credit was spent and no subscription action was taken.

### Cycle 5 — Upscale fidelity comparison

- The 1K input was 1,024 × 1,024 and the 2K output was 2,048 × 2,048.
- After Lanczos-downsampling the 2K output to the 1K dimensions, the mean absolute RGB differences were 3.081 red, 2.976 green, and 2.922 blue; the difference covered the full frame.
- Visual composition and bottle identity were closely retained, indicating that the operation behaves primarily as an upscale with modest global processing rather than a fresh scene generation.
- The 2K output visibly contained two `rewarx.com` marks: a newly rendered large mark plus a smaller retained/upscaled mark. Upscaling a free-account output therefore compounds the watermark instead of replacing it.

### Block assessment

- 2K dimensional delivery passed, while action-point credit disclosure and watermark handling failed.
- Template creation reported success, but retrieval appears subscription-gated.
- Specialized-mode upload and ordinary UI download remain unverified because the Chrome upload permission and download event paths did not complete.
- No subscription, upgrade, or payment action occurred.

### Required external prerequisite

To continue Virtual Try-On, Ghost Mannequin, Mockup Generator, or other local-upload specialized tests in external Chrome, enable `Allow access to file URLs` under the ChatGPT browser extension's Details page at `chrome://extensions`.

## RW-20260814-06 — Controlled Virtual Try-On

### Run identity

| Field | Recorded value |
| --- | --- |
| Started | 2026-08-14 10:26:54 PM Pacific / 2026-08-15 05:26:54 UTC |
| Workflow | Virtual Try-On |
| Source | RW-S3 plain white unbranded T-shirt |
| Target model | Generated model; adult, average build, neutral expression, natural proportions, arms relaxed, full body requested |
| Pose and scene | Standing Front; Studio White; Soft Studio lighting |
| Additional requirements | Preserve the exact plain white unbranded T-shirt identity, collar, blank neck label, sleeves, seams, hems, color, and proportions; no logos, graphics, text, accessories, layers, or props; natural anatomy; complete garment unobstructed |
| Output controls | Portrait; 1K Standard |
| Final disclosed cost | `Required Cost: 1 Credits` |
| Balance | 103 before; 101 after |
| Actual charge | 2 credits, one more than the final disclosed cost |
| Completion | Approximately 46 seconds from final Generate click |
| Output | 896 × 1,200 PNG; 1,591,657 bytes |
| Private evidence | `private-evidence/RW-20260814-06/RW-20260814-06-tshirt-virtual-try-on-1k.png` |

### Workflow observations

- Enabling `Allow access to file URLs` for the ChatGPT Chrome extension resolved the automated upload blocker.
- Clicking Start Production did not disclose a cost. A secondary dialog then exposed format and resolution controls.
- The secondary dialog initially showed 2 credits. Selecting 1K Standard changed the display to `Required Cost: 1 Credits`.
- The balance nevertheless moved from 103 to 101 after completion. This is a direct action-point billing-disclosure mismatch.
- Rewarx reported Portrait as a 3:4 aspect ratio and 1K resolution; the saved file measured 896 × 1,200, which is near 3:4 but not 1,024 pixels on either axis.
- The result gallery reported 1 / 2 variations, displaying the generated output and source garment.

### Result assessment

Observed strengths:

- Natural-looking adult anatomy, symmetrical stance, plausible arm and hand placement, and a clean white studio presentation.
- The shirt remained plain white, unbranded, short-sleeved, and crew-necked with visible sleeve and lower hems.
- No logos, text, graphics, layers, accessories, or scene props were added.
- The garment was unobstructed across the visible torso.

Limitations and fidelity failures:

- The instruction to show the full body was ignored; the image cropped the model around the thighs.
- The output materially regenerated the source shirt's collar shape, fit, torso proportions, sleeve width and length, shoulder geometry, and fold pattern.
- The source's blank inner neck label was not visible on the worn result, so that identity cue could not be verified.
- The output is suitable as a generic white-shirt visualization, not as exact evidence of how the specific source garment fits.
- A visible `rewarx.com` watermark prevents clean commercial deployment on this account.

Provisional assessment: visually plausible model and acceptable generic garment-category retention, but insufficient exact fit and construction fidelity for product-specific apparel representation. The 1-credit disclosure versus 2-credit charge is a critical billing-transparency defect.

## RW-20260814-04 — Controlled Bottle Repeatability

### Run identity

| Field | Recorded value |
| --- | --- |
| Started | 2026-08-14 7:29:59 PM Pacific / 2026-08-15 02:29:59 UTC |
| Workflow | Library → RW-S2 Original Asset → New Production → Photography Studio Photo |
| Source | RW-S2 clear glass bottle |
| Prompt and controls | Identical to RW-20260814-02: preservation prompt; Pro Studio; Soft Window; Clean; White; Front; 1:1; 1K |
| Pre-charge | `Generate Photos (1 Credits)` after camera-state correction |
| Balance | 106 before; 105 after |
| Charged | 1 credit, matching the disclosed cost |
| Measured completion | Approximately 66 seconds from Generate click, including product-selection and no-model confirmations |
| Result | Completed; one 1,024 × 1,024 PNG output observed |
| Private evidence | `private-evidence/RW-20260814-04/RW-20260814-04-bottle-repeat-1k.png` |

### Workflow observations

- Rewarx carried the prior box prompt and selected controls into the bottle project created from Library → New Production.
- Re-entering the bottle prompt and clicking the intended controls left Front deselected because it had persisted from the prior project and the click toggled it off.
- With zero camera angles selected, the enabled generation button temporarily displayed `Generate Photos (0 Credits)`. Front was reselected, the disclosed cost returned to 1 credit, and all settings were verified before generation.
- Rewarx again separated bottle, railing, and grass; only the bottle was confirmed. It again presented the no-model confirmation despite Add Model being off.
- The balance moved from 106 to 105 after successful completion.

### Repeatability comparison with RW-20260814-02

Consistent characteristics:

- Plain white square studio composition, upright front-facing placement, uncapped threaded neck, rounded shoulders, thick base, and visible wear.
- Similar rust-cluster region on the upper neck, scattered dirt and scratches, base marks, and a visible `rewarx.com` watermark.
- Comparable product scale and centered framing.

Material differences:

- RW-20260814-04 rendered the glass darker and greener than RW-20260814-02.
- The repeat appeared slimmer, with different shoulder curvature and neck proportions.
- Highlight paths, glass thickness cues, exact rust spots, scratches, dirt marks, and base details shifted between outputs.
- Fine product-condition evidence is therefore not deterministic even under identical inputs and settings.

Provisional assessment: good composition and style repeatability, but only moderate exact-product repeatability. Rewarx can reproduce the intended studio treatment while regenerating sale-relevant physical details, so condition-sensitive ecommerce use requires output-by-output source comparison.

### Follow-up authorized by the rubric

1. Run a specialized apparel workflow on RW-S3 and assess garment identity, anatomy, and practical usability.
2. Test export behavior and, if justified, one narrow correction without purchasing a plan.
3. Begin provisional rubric scoring after the specialized-mode evidence is captured.
4. Do not purchase or start a subscription without separate owner authorization.

## RW-20260814-03 — Controlled Labeled-Package Fidelity

### Run identity

| Field | Recorded value |
| --- | --- |
| Started | 2026-08-14 7:21:55 PM Pacific / 2026-08-15 02:21:55 UTC |
| Workflow | Photography Studio → Photo |
| Source | RW-S1 cropped generic kraft-cardboard product box |
| Prompt | Preserve the exact source box dimensions, front-facing orientation, top and bottom flap geometry, kraft-cardboard color and texture, border placement, circular leaf logo, barcode position, and every visible label line. Keep the readable front text unchanged, including GENERAL PRODUCT, CONTENTS, Net Wt. 16 oz (453g), ITEM NO. 12345, and the distributor and packaging lines. Do not redesign, relabel, repair, reshape, add branding, invent text, or add props. Place only this unchanged box upright on a plain white studio background with soft even lighting. |
| Controls | Aesthetic Pro Studio; Lighting Soft Window; Atmosphere Clean; Background White; Camera Front; Format 1:1; Quality 1K |
| Product selection | Cardboard box, product label, brand logo, barcode, recycle symbol, and keep-dry symbol selected (6 total) |
| Pre-charge | `Generate Photos (1 Credits)` |
| Balance | 107 before; 106 after |
| Charged | 1 credit, matching the disclosed cost |
| Measured completion | Approximately 84 seconds from Generate click, including product-selection and no-model confirmations |
| Result | Completed; one 1,024 × 1,024 PNG output observed, with the gallery reporting 1 / 2 variations including the source |
| Private evidence | `private-evidence/RW-20260814-03/RW-20260814-03-box-controlled-1k.png` |

### Workflow observations

- The cropped source excluded the original bottom-right sparkle mark without changing the package itself.
- Rewarx classified the box and five intrinsic printed elements as six separate products. A user who confirms only the default box selection may unintentionally exclude the label, logo, barcode, and handling symbols.
- All six candidates were selected to preserve the complete package face.
- Rewarx again asked whether to add a model despite Add Model being off. `No, Keep Simple` was selected.
- The promotional first-shot modal again failed to close through its visible close control, reproducing the earlier recovery issue in external Chrome.
- The balance moved from 107 to 106 after successful completion, and no upgrade or purchase action was taken.

### Result assessment

Observed strengths:

- The requested white background, upright front view, square composition, and soft studio treatment were followed.
- `GENERAL PRODUCT`, `CONTENTS`, `Net Wt. 16 oz (453g)`, `ITEM NO. 12345`, the barcode digits, the premium-quality line, distributor line, and `MADE IN USA` remained substantially readable and correctly positioned.
- The border, circular leaf logo, barcode, recycling and keep-dry symbol positions, kraft color and texture, top flap, bottom seam, and rectangular silhouette remained recognizable.
- No unrelated props, added brand, model, or new package panel was introduced.

Remaining limitations:

- Fine detail was not pixel-exact: small text around the recycling/keep-dry symbols showed minor corruption, and the handling icons were regenerated.
- The package proportions, edge wear, flap curvature, paper fibers, shadows, and exact print geometry were subtly regularized or regenerated.
- The visible `rewarx.com` watermark prevents clean commercial deployment on this account.

Provisional assessment: strong packaging fidelity at ordinary viewing size, including unusually good prominent-text and barcode retention, but not suitable for claims of exact label reproduction without source comparison. Intrinsic-detail segmentation is a meaningful usability and error risk.

### Follow-up authorized by the rubric

1. Run an identical-settings bottle repeatability test to measure consistency.
2. Run a specialized apparel workflow on RW-S3 and assess garment identity, anatomy, and practical usability.
3. Test export behavior and, if justified, one controlled correction without purchasing a plan.
4. Do not purchase or start a subscription without separate owner authorization.

## RW-20260814-02 — Controlled Bottle Preservation

### Run identity

| Field | Recorded value |
| --- | --- |
| Started | 2026-08-14 1:33:53 PM Pacific / 2026-08-14 20:33:53 UTC |
| Workflow | Library → RW-S2 Original Asset → New Production → Photography Studio Photo |
| Source | RW-S2 clear glass bottle |
| Prompt | Preserve the exact source bottle geometry, rounded shoulders, threaded neck, thick base, green-blue glass cast, rust-colored spots, scratches, dirt, and visible wear. Do not clean, repair, reshape, relabel, cap, fill, or beautify the bottle. Place only this unchanged bottle on a plain white studio background with soft even lighting and no props. |
| Controls | Aesthetic Pro Studio; Lighting Soft Window; Atmosphere Clean; Background White; Camera Front; Format 1:1; Quality 1K |
| Pre-charge | `Generate Photos (1 Credits)` |
| Balance | 108 before; 107 after |
| Charged | 1 credit, matching the disclosed cost |
| Measured completion | Approximately 80 seconds from Generate click, including product-selection and no-model confirmations |
| Result | Completed; one 1,024 × 1,024 PNG output observed, with the gallery reporting 1 / 2 variations including the source |
| Private evidence | `private-evidence/RW-20260814-02/RW-20260814-02-bottle-controlled-1k.png` |

### Workflow observations

- Reusing the saved source through Library → New Production avoided a second local upload.
- Before that reuse path was found, a first-shot promotional modal did not respond to its visible close control, Escape, or ordinary clicks; reloading recovered the Studio workflow. The offer was not claimed and no purchase action was taken.
- Rewarx again classified the bottle, wooden railing, and grass as separate candidate products. Only the preselected bottle was confirmed.
- Rewarx again asked whether to add a model despite Add Model being off. `No, Keep Simple` was selected.
- The balance moved from 108 to 107 only after successful completion.
- The result remained visibly watermarked and the interface again offered a paid upgrade for commercial rights and watermark removal.

### Result assessment

Observed improvements over RW-20260814-01:

- The requested plain white background, front view, square composition, and soft studio treatment were followed.
- The threaded neck, rounded shoulders, thick base, and blue-green glass cast were more faithful to the source.
- Rust-colored spots, scratches, dirt, and general wear remained visible instead of being polished away.
- No unrelated props, labels, cap, liquid, or model were added.

Remaining limitations:

- The output is a regenerated representation, not a pixel-preserving edit; exact silhouette, proportions, highlight paths, and individual mark placement still require side-by-side review.
- The clean studio treatment slightly regularizes the source's irregular surface appearance.
- The visible `rewarx.com` watermark prevents clean commercial deployment on this account.

Provisional assessment: explicit preservation language and controlled studio settings materially improved condition fidelity relative to the Auto baseline. The test supports a workflow recommendation to avoid Auto for condition-sensitive products and to require a source-comparison review before use. It does not clear the product for exact-representation claims.

### Follow-up authorized by the rubric

1. Run an identical-settings repeatability test on RW-S2 to measure consistency.
2. Controlled rigid-package testing on cropped RW-S1 was completed in RW-20260814-03.
3. Run a specialized apparel workflow on RW-S3 and assess garment identity, anatomy, and usability.
4. Do not purchase or start a subscription without separate owner authorization.
## RW-20260814-11 — Controlled Group Shot

- **Workflow:** Group Shot Studio; white T-shirt selected as hero, clear empty bottle as secondary product; Standard 1K, 1:1.
- **Direction:** Neutral studio composition; preserve both approved objects; no text, labels, logos, liquid, caps, graphics, people, or claims.
- **Cost:** Secondary dialog disclosed 4 credits; balance moved from 90 to 88, charging 2 credits.
- **Result:** One 1,024 × 1,024 PNG. The clean, plausible composition kept the bottle empty and avoided additions, but folded and substantially reinterpreted the shirt, defeating exact source-shape preservation.
- **Private evidence:** `private-evidence/RW-20260814-11/RW-20260814-11-shirt-bottle-group-shot-1k.png`

## RW-20260814-10 — Product Page Eight-Asset Set

- **Workflow:** Product Page; approved white T-shirt; United States; English; Elevated Minimalist Studio; 1K, 1:1.
- **Sensing risk:** From the photograph alone, Rewarx invented a SKU, exact dimensions, 150 g weight, 100% cotton composition, OEKO-TEX certification, price, return policy, and shipping commitment. It also presented unsourced CTR predictions and market-research quotations.
- **Safety direction:** The final requirements explicitly prohibited fiber composition, measurements, weight, price, SKU, return/shipping promises, performance claims, gender claims, and all other unsupported facts.
- **Cost:** Both production gates disclosed 32 credits (4 × 8); balance moved from 98 to 90, charging only 8 credits. The gallery contained eight generated assets plus the source.
- **Result:** All eight assets were saved. The system ignored the safety direction across the set, displaying unsupported claims including `100% PREMIUM COTTON`, breathability, durable construction, male positioning, itch/comfort claims, and precision engineering. Some layouts also duplicated text or placed it into watermark/crop collision zones. This is a critical publication-safety failure.
- **Private evidence:** `private-evidence/RW-20260814-10/` (eight generated files).

## RW-20260814-09 — Background Remover Transparency Test

- **Workflow:** Background Remover; approved white T-shirt; Transparent Background, 1K, 1:1; default repair, edge, and lighting options.
- **Cost:** No action-point disclosure; balance moved from 99 to 98, charging 1 credit.
- **Result:** The preview remained on `Loading high-res preview...`. The returned file was JPEG/JFIF (`image/jpg`), so it had no alpha channel despite Transparent Background. Intrinsic garment parts were segmented separately and required manual inclusion. Multiple Rewarx marks were visible.
- **Private evidence:** `private-evidence/RW-20260814-09/RW-20260814-09-tshirt-transparent-cutout-1k.jpg`

## RW-20260814-08 — Controlled Mockup Generator

- **Workflow:** Private `CBT TEST` SVG applied to a plain white ceramic mug; front view, centered at 45% height; item only; 1K, 1:1.
- **Cost:** No action-point disclosure; balance moved from 100 to 99, charging 1 credit.
- **Result:** Strong text and graphic preservation, complete circle geometry, plausible mug curvature, uncluttered background, and no unwanted model. Visible watermark remained.
- **Private evidence:** `private-evidence/RW-20260814-08/RW-20260814-08-cbt-test-mug-mockup-1k.png`

## RW-20260814-07 — Ghost Mannequin Stress Test

- **Workflow:** Ghost Mannequin; approved flat-lay white T-shirt used as an explicit input-suitability stress test; White, Front, 1K, 3:4.
- **Cost:** Disclosed and charged 1 credit; balance moved from 101 to 100.
- **Result:** Plausible hollow-neck presentation with blank identity intact, but sleeve angles, taper, proportions, folds, and fabric structure were regenerated. Because the source was not photographed on a person or mannequin, this run is workflow evidence rather than the primary quality benchmark.
- **Private evidence:** `private-evidence/RW-20260814-07/RW-20260814-07-tshirt-ghost-mannequin-1k.png`
