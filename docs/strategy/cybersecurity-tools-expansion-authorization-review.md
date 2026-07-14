# Cybersecurity Tools Expansion-Authorization Review

- Review date: 2026-07-14
- Reviewer role: independent expansion review (challenge, do not confirm)
- Scope: whether later Phase 6 assets may be authorized beyond the approved two-article sequence
- Decision: **RETURN FOR CORRECTION — conditional single-article authorization only**
- Authority: `operations/ROADMAP.md` (Current Publishing Queue), `operations/TOPIC_CLUSTER_APPROVAL_POLICY.md`, `operations/AUTOMATION_PUBLISHING_CONTRACT.md`

## Why this review exists

`docs/strategy/cybersecurity-tools-cluster-approval.md` states: "Approval authorizes the two-article
sequence only" (Best Antivirus Software, TotalAV Review), and lists *Is Antivirus Still Necessary?*,
*Windows Defender vs Paid Antivirus*, and *Best PC Cleanup Tools* as "planned later assets." Cluster
approval and dossier support are not article authorization. This review decides the later assets.

## Inputs examined

- `docs/strategy/cybersecurity-tools-cluster-approval.md`
- `docs/research/consumer-antivirus-landscape-dossier-2026-07-13.md`
- Live `src/pages/BestAntivirusSoftwarePage.tsx` (section scope)
- Live `src/pages/TotalAvReviewPage.tsx` (section scope)
- `operations/KPI_DASHBOARD.md` (current stage/indexing reality)

## Determination 1 — Intent distinctness

The flagship Best Antivirus guide already contains, as live sections: "Start with Defender. Pay only
for a clearer fit," "Microsoft Defender: the rational default for many people," and "How to compare
price without being misled." The shared dossier already treats "Microsoft Defender is all anyone needs"
and "Paid antivirus is always better" as claims the cluster must NOT make.

Consequence:

- **Windows Defender vs Paid Antivirus** carries HIGH duplicate-intent risk. Its core framing already
  exists inside the flagship guide. It is authorizable only if reframed as a tightly scoped, single
  decision ("is built-in Defender enough for *me*, or do I need paid?") that does not restate the
  guide's multi-product ranking, with an explicit canonical/internal-link plan positioning it as a
  feeder to the guide, not a competitor.
- **Is Antivirus Still Necessary?** carries MODERATE duplicate-intent risk. It is more distinct as an
  evergreen, low-commercial necessity/threat-model explainer, but it must not become a second product
  ranking and must link to (not duplicate) the guide's "Start with Defender" thesis.

## Determination 2 — Dossier adequacy vs article-specific research

The shared antivirus dossier adequately supports the *evidence* for both topics (Defender baseline,
pricing/renewal framework, privacy/ownership, prohibited claims, refresh triggers). It does NOT by
itself satisfy the article-specific requirements: each still needs its own claim ledger and a
near-publication recheck of the dossier's high-volatility fields (Defender feature parity, plan and
renewal pricing, ownership/government actions). *Is Antivirus Still Necessary?* additionally needs a
light supplement on current threat prevalence to avoid stale or vendor-echoed risk framing.

## Determination 3 — Monetization-map validity

No new monetization mechanism is introduced. The cluster monetization map still applies. Independence
risk is concentrated in *Is Antivirus Still Necessary?*: the verdict must be allowed to conclude that
built-in protection plus safe habits is sufficient for many readers, even though that conclusion routes
away from paid affiliate products. Authorization requires an explicit independence guard on that article.

## Determination 4 — Authorization as a second controlled sequence

A blanket two-article authorization is declined. The evidence supports a SINGLE next controlled article,
not a batch, consistent with the automation contract's one-major-article default and the pre-traffic
capacity reality (Determination 5).

## Determination 5 — Order, capacity, and strategic caveat

`operations/KPI_DASHBOARD.md` records the existing antivirus articles' indexing as "Needs verification,"
with organic clicks/impressions "Not measured." Adding more near-identical-layout articles to a young
domain before the existing two are confirmed indexed raises site-level scaled-content risk and adds
maintenance load against volatile fields. Recommended order: (1) confirm indexing of Best Antivirus and
TotalAV; (2) then produce at most one further antivirus article, starting with the more distinct
*Is Antivirus Still Necessary?*.

## Determination 6 — Best PC Cleanup Tools

Remains on HOLD. It sits adjacent to scareware, exaggerated-performance, registry-cleaner, and
subscription-trap risk. It must not inherit the antivirus dossier and requires separate category-risk
research and its own cluster-scope confirmation before any authorization.

## Decision and conditions

**RETURN FOR CORRECTION.** Authorize a single next article — *Is Antivirus Still Necessary?* — only
after ALL conditions are met and recorded in `docs/strategy/cybersecurity-tools-cluster-approval.md`:

1. Distinct-intent statement added: necessity/threat-model explainer, not a product ranking; explicit
   link to the flagship guide rather than restating it.
2. Article-specific claim ledger + near-publication recheck of high-volatility fields.
3. Threat-prevalence research supplement (current, dated, primary where possible).
4. Monetization-independence guard permitting a "built-in is enough for many" verdict.
5. Indexing of the two published antivirus articles confirmed in Search Console.

*Windows Defender vs Paid Antivirus* is NOT authorized: resolve its overlap with the flagship guide
first (distinct single-decision scope + canonical/link plan, or fold into the guide). *Best PC Cleanup
Tools* stays on hold.

## Control metadata

- Failure prevented: authorizing dossier-supported-but-intent-overlapping articles that cannibalize the
  flagship guide, and batch expansion ahead of indexing/capacity reality.
- Mode: governance decision (advisory until ratified by the owner and recorded in the cluster-approval file).
- Likely false negative: a genuinely distinct angle for *Windows Defender vs Paid Antivirus* may exist;
  this review defers, not permanently rejects, that topic.
- Maintenance owner: project owner / cluster approver.
- Review/removal condition: revisit when conditions 1–5 are recorded, or when indexing data materially
  changes the capacity picture.
