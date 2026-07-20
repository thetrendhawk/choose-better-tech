# Windows Defender vs Paid Antivirus — Intent and Cannibalization Audit

- Audit date: 2026-07-20
- Proposed route: `/guides/windows-defender-vs-paid-antivirus`
- Result: **PASS WITH CONTROLS**

## Intent map

| Page | Primary query stage | Decision owned | Content reserved for that page |
| --- | --- | --- | --- |
| Windows 11 necessity guide | Problem/category awareness | Whether another antivirus is needed at all | Broad Windows Security baseline, "enough" scenarios, general limitations, general paid reasons |
| New capability-gap guide | Need definition | Which missing capability, if any, justifies paying | Paid-feature decomposition, duplication audit, household/cross-platform/support worksheet |
| Best Antivirus Software | Product selection | Which provider/product fits after a paid need is established | Rankings, lab comparison table, provider verdicts, prices, renewal, privacy, product fit |
| TotalAV Review | Product validation | Whether TotalAV is legitimate and worth its exact tradeoffs | TotalAV terms, privacy, platform limits, company, evidence, and verdict |

## First-300-word control

The new guide may state that Windows includes Defender and a wider security stack, but it must move immediately to the capability-gap test. It must not recreate the necessity guide's eight-feature inventory, three-column decision framework, or full set of "enough" conditions.

## Heading and FAQ control

Required unique headings include:

- "Before you pay, name the missing capability"
- "What paid antivirus actually adds—and what each extra solves"
- "Features that sound like antivirus but solve another problem"
- "The five-question paid-suite test"

Avoid using the existing guide's core headings as the structural spine. FAQ coverage must center on payment, bundles, provider switching, cross-platform scope, parental controls, support, and business boundaries rather than generic "Do I need antivirus?" questions.

## Failure tests

| Failure mode | Test | Result |
| --- | --- | --- |
| Another "Do I need antivirus?" article | Does the article mainly decide whether any antivirus is necessary? | No. It assumes the reader is comparing built-in and paid paths and audits the missing capability. |
| Paid antivirus ranking | Does it list providers, name a winner, compare prices, or present product-selection evidence? | No. Product selection is delegated to `/best-antivirus-software`. |
| TotalAV review | Does it discuss TotalAV terms, privacy, platforms, company, or verdict? | No. TotalAV is excluded. |
| Generic Windows security overview | Does it inventory every Windows security feature or become setup documentation? | No. The built-in baseline is summarized only far enough to run the gap audit. |
| Enterprise endpoint article | Does it advise on EDR, SOC, compliance, fleet policy, or managed detection? | No. It states that work/school devices follow organizational policy and enterprise needs are out of scope. |

## Internal-link relevance

- New → necessity guide: helps a reader who still needs the broader category answer.
- New → ranking: helps only after the worksheet establishes a paid need.
- Necessity guide → new: helps a reader who accepts that paid can sometimes make sense but needs to audit the extras.
- Ranking → new: prevents premature shopping when the reader has not identified a paid requirement.
- TotalAV → new: rejected because it would add a generic detour to a product-specific decision.

## Final-copy audit requirement

Before the PR is merge-ready, compare title, description, H1, first 300 words, all H2s, FAQs, conclusion, and internal anchors against the three live pages. Any product winner, price, provider table, generic necessity framing, or TotalAV-specific analysis fails the audit.

## Corrected final-copy audit — 2026-07-20

The first independent pass found that the working title, description, H1, first H2, and homepage excerpt still overemphasized whether Defender is “enough.” Those discovery surfaces were corrected before the second review:

| Surface | Corrected role | Cannibalization result |
| --- | --- | --- |
| Title/H1 | “Windows Defender vs Paid Antivirus: What Are You Paying For?” | Capability and purchase-value intent, not a generic necessity question. |
| Meta description | Names household, platform, support, parental-control, and bundle capabilities | Does not promise a universal enough/not-enough answer. |
| First H2 | “Start with the capability gap, not the subscription” | Begins with the audit rather than recreating the necessity guide's verdict. |
| First 300 words | Defines the page as a pre-shopping capability audit and links the broad question away | Passes the feeder-page control. |
| Homepage excerpt | Lists the concrete capability categories a reader should audit | Avoids duplicating the necessity guide's discovery promise. |
| H2 set | Naming, capability matrix, evidence limits, provider switching, bundle decomposition, worksheet, shared limits | No provider ranking, pricing table, or Windows feature inventory. |
| FAQ | Payment, bundles, provider switching, family controls, managed-device boundary, and testing | Does not become a second generic “do I need antivirus?” FAQ set. |
| Conclusion | Pay only for a defined and verified capability | Sends provider choice to the ranking rather than naming a winner. |

Final-copy comparison result after corrections: **PASS — capability-gap intent retained**. The necessity guide continues to own the broad need question; the ranking continues to own product selection; the new route owns pre-purchase capability decomposition.

## Conclusion

The route has a defensible distinct role only as a **paid-capability gap audit**. With the controls above, it supports rather than competes with the necessity guide and commercial ranking.
