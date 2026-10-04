# MaxBounty streaming-placement independent review

- Reviewer: independent Codex pass, separate from implementation author
- Date: October 4, 2026
- Reviewed: `BestVpnsForStreamingPage.tsx` diff and renderer, reconciliation record, NordVPN review content, affiliate registry and resolver, AffiliateButton and added regression tests
- Scope: direct-placement removal plus centralized temporary NordVPN offer suppression; no product evaluation or independent authenticated network investigation

## Main conclusion challenged

Removing the optional NordVPN provider mapping correctly removes the direct NordVPN affiliate button from the streaming guide. The renderer tests `product.provider` before emitting `AffiliateButton`; the internal research link remains. It does not establish that remaining CBT traffic meets every offer restriction. Authenticated terms are author-observed evidence, not reconfirmed by this reviewer.

## Claims, code and commercial independence

The only implementation change removes an optional field. No competing offer, new tracking URL, ranking change, product exclusion, verdict rewrite, or performance claim is introduced. Keeping NordVPN's editorial coverage is appropriate: commercial restrictions do not invalidate documented product fit. The reconciliation separates September account totals from implemented CBT offers and refuses page-level attribution or profit inference. Nothing in this diff collects additional personal data or changes GA4 tracking.

## Testing and evidence limits

The conditional renderer establishes the expected absence of this direct button; production output must still be verified. Source and testing requirements for unchanged product statements are not renewed by this review. No product account testing, network click, conversion, payout, new contract, or blanket compliance result is established. The offer's restrictions and approved geography are account observations and must stay dated.

## Mixed-purpose journeys: concrete recommendation

The NordVPN review explicitly covers streaming and torrenting, includes streaming-user fit, and exposes existing affiliate buttons through the shared review layout. The streaming guide's retained internal link can therefore route a streaming-origin visitor to the same restricted offer after one internal navigation. The text “NO ... streaming or torrent traffic” does not establish that internal navigation makes this eligible. Nor does it establish that every general review visitor is prohibited. The uncertainty concerns traffic, not just page labels.

Temporarily suppress offer24611 through the centralized NordVPN registry until the network provides written clarification permitting the actual mixed-purpose editorial journeys, or a verified implementation reliably excludes prohibited traffic. Preserve internal links, rankings and research coverage. No existing mechanism examined here partitions traffic by reader purpose. Do not invent a replacement network, treat a referrer as complete intent detection, or claim this precaution is an independently interpreted contractual mandate. It is a bounded operational recommendation under unresolved documented eligibility. Clarification should explicitly cover streaming-origin internal referrals and the review's streaming/torrenting sections. The US-only ProtonPass offer has a separate geography question; approval here does not resolve it.

## Centralized suppression follow-up

The registry now sets NordVPN `DISABLED` and `trackingEnabled: false`. The existing resolver therefore returns the internal VPN buying guide with `isExternal: false` and `isAffiliateLink: false`. The added fallback label is used only by AffiliateButton's internal branch, keeping other active buttons unchanged and making the paused action honestly read “Read VPN buying guide.” There is no same-review selflink or purchase promise. The internal branch has no affiliate tracking handler and uses normal router navigation. Added resolver and interaction tests cover the disabled flags, destination, label, absence of sponsored/new-tab behavior, and absence of an affiliate event. These tests are useful behavioral protection rather than a false product-test claim.

Repository source search found the offer URL in the centralized registry, not a separate hard-coded button/API bypass. This pause removes the investigated active NordVPN referral route; the original configured destination remains in registry data and is not erased or made secret. Production build/readback should check emitted anchors across the site for absence of offer24611 referral links, not just the streaming guide. No broader full-site policy guarantee follows.

## Required corrections

No code corrections required. Update the reconciliation to describe the implemented centralized pause, with reactivation pending written clarification. Narrow its statement about private account identifiers to newly observed private account evidence: existing configured referral URLs and their identifiers are already present in the registry and remain unchanged. Do not claim that all account/tracking identifiers are absent from public source. Preserve unresolved US-only offer geography and avoid blanket compliance wording.

## Final reviewer decision

**APPROVE FOR DEPLOYMENT** for the direct removal and centralized temporary suppression code. Reconciliation wording corrections listed above must accompany release documentation. Full compliance is not approved or asserted; reactivation requires documented eligibility clarification or an appropriate verified permitted offer.
