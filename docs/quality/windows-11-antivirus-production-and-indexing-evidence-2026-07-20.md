# Windows 11 Antivirus Guide — Production and Indexing Evidence

- Checked: 2026-07-20, America/Los_Angeles
- Canonical URL: `https://choosebettertech.com/guides/do-you-still-need-antivirus-on-windows-11`
- Production merge: `84ffae4389516385b13bca3109cedf482f931f8c` (readability remediation)
- Status: **production verification passed; Google indexing is unverified and pending external evidence**

## Production observations

| Check | Result |
| --- | --- |
| Canonical route | HTTP 200; `www` route also resolved to the canonical host |
| Rendered title/H1/description/canonical | Match the intended Windows 11 guide |
| JSON-LD | Rendered `Article`, `BreadcrumbList`, and `FAQPage` scripts |
| Sitemap and robots | Sitemap HTTP 200 and includes the route; `robots.txt` HTTP 200, allows crawling, and names the sitemap |
| Discovery links | Contextual link to `/best-antivirus-software`; normal site header/footer discovery surfaces render |
| External evidence links | Six visible Microsoft and AV-TEST source URLs render without tracking parameters |
| Responsive rendering | Rendered at 1440×900, 1024×768, 768×1024, and 390×844; no page-level horizontal overflow observed |
| Accessibility basics | `lang=en`, no images missing `alt`, visible header/main/footer landmarks, static FAQ answers, and source links present |
| Browser health | No console warnings/errors captured on the production page; no production network failure was observed during the rendered route checks |

The first 390px geometry capture occurred before the application had settled, but a follow-up rendered-DOM check at the same viewport confirmed the complete article, FAQ, source cards, navigation, and footer. It is not a production defect.

## Indexing and discovery evidence

| Evidence source | Observation | Interpretation |
| --- | --- | --- |
| Live sitemap | Canonical URL is present | Discoverable by sitemap |
| Live robots/canonical/rendering | Crawl permitted; self-canonical; rendered route and schemas valid | No observed technical crawl/indexing blocker |
| Internal links | The article routes commercial product-selection intent to the flagship guide; global navigation/footer provide additional paths | Discovery is adequate for this non-commercial explainer |
| Public Google checks | A focused `site:` query and exact-title query returned no article result | Not proof of non-indexing; public search is inconclusive for a new URL |
| Google Search Console URL Inspection | Not available in this execution environment | Crawl/index state, Google-selected canonical, and manual indexing-request availability are unknown |
| Best Antivirus and TotalAV URL Inspection | Not available in this execution environment | Their required Search Console indexing confirmation is also unknown |

## Interpretation, risks, and recheck

The new guide is technically crawlable and discoverable, but neither public search nor sitemap inclusion proves indexing. Its likely status is **pending external verification**, not indexed or excluded. No rankings or traffic evidence is required by the repository gate, but the older expansion review explicitly requires Search Console confirmation that **Best Antivirus Software** and **TotalAV Review** are indexed.

Unresolved risks: Search Console may report a pending, excluded, duplicate, rendered-content, or canonical state that is not observable here; Google may select a different canonical; the two prerequisite URLs may still be unindexed.

Next recheck: 2026-07-27, or sooner when authenticated Search Console access is available. Use URL Inspection for all three URLs, record Google-selected canonicals and coverage states, and submit an indexing request only if Search Console offers it and no blocking state is reported.

## Expansion-gate result

**Satisfied on 2026-07-20 by owner-supplied sanitized Search Console URL Inspection evidence.** `/best-antivirus-software` and `/reviews/totalav-review` are indexed, and Google selected each inspected URL as canonical. Search Console reports no user-declared canonical for the TotalAV review; that is a separate cleanup item and does not block the approved article. No raw screenshots were supplied or claimed.
