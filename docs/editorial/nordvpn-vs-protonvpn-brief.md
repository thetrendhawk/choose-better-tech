# NordVPN vs ProtonVPN Editorial Brief

---
Document Type: Editorial Brief
Topic: NordVPN vs ProtonVPN
Cluster: VPN
Status: Approved for Implementation
Source Inputs:
  - docs/research/canonical/nordvpn-review-research.md
  - docs/research/canonical/protonvpn-review-research.md
  - docs/editorial/nordvpn-review-brief.md
  - docs/editorial/protonvpn-review-brief.md
Implementation: Codex
Last Updated: 2026-07-02
---

## Purpose

Create an evidence-based comparison that helps readers decide whether NordVPN or ProtonVPN better fits their needs. The article must compare tradeoffs by audience and use case, not declare a universal winner.

## Target Reader

| Reader Type | Need |
| --- | --- |
| Beginner VPN shopper | Wants a plain-language comparison between two well-known VPNs. |
| Privacy-conscious user | Wants to understand audits, jurisdiction, open-source transparency, and logging caveats. |
| Streaming or travel user | Wants practical guidance on speed, streaming, reliability, and public Wi-Fi use. |
| Free-plan evaluator | Wants to know whether ProtonVPN's free tier changes the buying decision. |
| Value-focused buyer | Wants to compare pricing uncertainty, support, refunds, and plan volatility without hard-coded current pricing. |

## Primary Comparison Questions

- Which VPN is better for privacy-focused beginners?
- Which VPN is better for streaming, travel, and everyday speed?
- Which VPN is better for people who want a credible free option?
- Which VPN has stronger transparency signals?
- Which VPN has the clearer support and beginner setup story?
- Which tradeoffs should make a reader choose one product over the other?
- Which facts are volatile enough to require verification before publication or promotion?

## Decision Criteria

| Criterion | Editorial Use |
| --- | --- |
| Privacy evidence | Compare no-logs audits, open-source posture, jurisdiction, transparency reporting, and legal nuance. |
| Security features | Compare protocols, encryption, kill switch, DNS/leak protection, threat blocking, Secure Core, Double VPN, and related features only where supported by the canonical repositories. |
| Performance | Preserve uncertainty across speed tests, routes, protocols, distance, and test methods. |
| Streaming | Treat all streaming claims as volatile and avoid overpromising service-specific access. |
| Torrenting | Compare P2P support and port-forwarding limitations or advantages. |
| Gaming | Avoid declaring either provider ideal for competitive gaming; explain latency uncertainty. |
| Ease of use | Compare beginner app experience, setup, advanced feature complexity, and support availability. |
| Price and plans | Do not list current prices. Flag pricing, tiers, device limits, refunds, trials, servers, and countries for verification. |
| Threat model fit | Explain that neither VPN provides full anonymity or replaces broader security practices. |

## Required Sections

- Hero
- Affiliate disclosure
- Quick answer
- Decision table
- Best for privacy
- Best for speed and streaming
- Best free option
- Security and privacy comparison
- Performance comparison
- Streaming, torrenting, and gaming comparison
- Ease of use and support comparison
- Pricing and plan uncertainty
- Who should choose NordVPN
- Who should choose ProtonVPN
- Who should avoid both
- Open questions and editorial review items
- FAQ
- Final verdict
- Related links

## Editorial Guardrails

- Use only the approved inputs named in this brief.
- Do not browse the web.
- Do not add outside facts, statistics, sources, prices, server counts, or claims.
- Do not hard-code affiliate URLs.
- Do not declare a universal winner.
- Do not imply that either VPN guarantees anonymity.
- Preserve uncertainty when repositories conflict or identify volatile information.
- Label plan, pricing, device-limit, server-count, country-count, trial, refund, platform, and streaming details as requiring verification before publication.
- Keep conclusions audience-specific and evidence-based.
- Avoid marketing language and exaggerated claims.

## Internal Linking Opportunities

Include only links that already exist in the site at implementation time:

| Destination | Purpose |
| --- | --- |
| `/reviews/nordvpn-review` | Full NordVPN review. |
| `/reviews/proton-vpn-review` | Full ProtonVPN review. |
| `/guides/best-vpns-for-beginners` | Broader beginner VPN comparison context. |
| `/guides/is-proton-vpn-free-good-enough` | Deeper discussion of ProtonVPN's free tier. |
| `/guides/free-vpn-vs-paid` | Free-plan tradeoff education. |
| `/guides/vpn-buying-guide` | Buyer checklist for volatile plan details. |
| `/guides/how-vpns-work` | Explain what VPNs can and cannot do. |
| `/guides/vpn-myths` | Reinforce limits around anonymity and tracking. |

## Commercial Guidance

- Include the site's existing affiliate disclosure pattern.
- Use the centralized affiliate management system when affiliate CTAs are available.
- Never hard-code affiliate URLs.
- If affiliate infrastructure is unavailable, use internal editorial links only.
- Commercial status for both products remains an Open Question in the canonical repositories.

## Schema Requirements

- Breadcrumb schema.
- Article or comparison-appropriate structured data.
- FAQ schema if FAQ content is included.

## Acceptance Criteria

- The comparison page is available at `/comparisons/nordvpn-vs-protonvpn`.
- The page uses existing Choose Better Tech visual patterns and reusable components.
- Conclusions are audience-specific and do not declare a universal winner.
- Every claim is supported by the approved canonical repositories or approved editorial briefs.
- Volatile information is clearly flagged for verification.
- Missing or conflicting information is preserved as uncertainty.
- No new dependencies are introduced.
- No unrelated pages are modified.
- `npm run build` passes.
