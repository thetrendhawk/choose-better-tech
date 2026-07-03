# Proton VPN vs Surfshark Editorial Brief

---
Document Type: Editorial Brief
Topic: Proton VPN vs Surfshark
Cluster: VPN
Status: Approved for Implementation
Source Inputs:
  - docs/research/canonical/protonvpn-review-research.md
  - docs/research/canonical/surfshark-review-research.md
  - docs/editorial/protonvpn-review-brief.md
  - docs/editorial/surfshark-review-brief.md
Implementation: Codex
Last Updated: 2026-07-02
---

## Purpose

Create an evidence-based comparison that helps readers decide whether Proton VPN or Surfshark better fits their needs. The article must compare tradeoffs by audience and use case, not declare a universal winner.

## Target Reader

| Reader Type | Need |
| --- | --- |
| Privacy-focused beginner | Wants to compare Proton VPN's transparency with Surfshark's mainstream value. |
| Free-plan user | Wants to know whether Proton VPN's permanent free tier changes the decision. |
| Budget or household buyer | Wants to understand Surfshark's value and unlimited-device appeal. |
| Beginner VPN shopper | Wants a plain-English comparison of fit, tradeoffs, and uncertainty. |
| Streaming, torrenting, or gaming user | Wants practical guidance without overstated performance or compatibility claims. |

## Primary Decision Question

Should a reader choose Proton VPN for privacy transparency, open-source apps, Swiss jurisdiction, and free-plan credibility, or Surfshark for value, beginner ease, unlimited simultaneous connections, and mainstream household use?

## Comparison Criteria

| Criterion | Editorial Use |
| --- | --- |
| Privacy transparency | Compare open-source posture, no-logs audits, jurisdiction, transparency reporting, logging nuance, and legal caveats. |
| Free-plan fit | Explain Proton VPN's permanent free tier and limits; avoid implying Surfshark has a comparable permanent free plan. |
| Value and households | Compare Surfshark's unlimited simultaneous connections and price-to-feature positioning against Proton VPN's privacy-first value proposition. |
| Beginner fit | Compare app ease, learning curve, support caveats, and advanced feature complexity. |
| Security features | Compare protocols, encryption, kill switches, leak protection, Secure Core, MultiHop, CleanWeb, and audit scope only where supported. |
| Performance | Preserve uncertainty around speed, latency, jitter, and route-specific results. |
| Streaming | Treat streaming claims as volatile and avoid service-specific promises. |
| Torrenting | Compare Proton VPN's paid-plan P2P and port-forwarding evidence against Surfshark's casual P2P fit and lack of port forwarding. |
| Gaming | Avoid claiming either VPN is ideal for competitive gaming. |
| Pricing and plans | Do not list current prices. Flag pricing, tiers, device limits, trials, refunds, renewals, servers, countries, and platform support for verification. |

## Required Sections

- Hero
- Affiliate disclosure
- Quick answer
- Decision table
- Best for privacy-focused users
- Best for free-plan users
- Best for value, families, and many devices
- Best for beginners
- Security and privacy comparison
- Speed and performance comparison
- Streaming, torrenting, and gaming comparison
- Ease of use and support comparison
- Pricing and plan uncertainty
- Who should choose Proton VPN
- Who should choose Surfshark
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
- Use centralized affiliate infrastructure only where affiliate CTAs are used.
- Do not declare a universal winner.
- Do not imply that either VPN guarantees anonymity.
- Do not describe Surfshark as open source.
- Do not describe Surfshark as metadata-free.
- Do not imply Surfshark has a permanent free plan comparable to Proton VPN's.
- Do not claim Proton VPN is always the fastest or always the best value.
- Do not claim either product has stable streaming access across all services or regions.
- Preserve uncertainty when repositories conflict or identify volatile information.
- Keep conclusions audience-specific and evidence-based.
- Avoid marketing language and exaggerated claims.

## Internal Linking Opportunities

Include only links that already exist in the site at implementation time:

| Destination | Purpose |
| --- | --- |
| `/reviews/proton-vpn-review` | Full Proton VPN review. |
| `/reviews/surfshark-review` | Full Surfshark review. |
| `/reviews/nordvpn-review` | Mainstream premium alternative. |
| `/comparisons/nordvpn-vs-protonvpn` | Existing privacy/mainstream comparison context. |
| `/comparisons/nordvpn-vs-surfshark` | Existing premium/value comparison context. |
| `/guides/best-vpns-for-beginners` | Broader beginner VPN comparison context. |
| `/guides/is-proton-vpn-free-good-enough` | Deeper Proton VPN free-plan context. |
| `/guides/free-vpn-vs-paid` | Free-plan tradeoff education. |
| `/guides/vpn-buying-guide` | Buyer checklist for volatile plan details. |
| `/guides/how-vpns-work` | Explain what VPNs can and cannot do. |
| `/guides/vpn-myths` | Reinforce limits around anonymity and tracking. |

## Commercial Guidance

- Include the site's existing affiliate disclosure pattern.
- Never hard-code affiliate URLs.
- Commercial status for both products remains an Open Question in the canonical repositories.
- Use internal editorial links when centralized affiliate destinations are internal-only.

## Schema Requirements

- Breadcrumb schema.
- Article or comparison-appropriate structured data.
- FAQ schema if FAQ content is included.

## Acceptance Criteria

- The comparison page is available at `/comparisons/proton-vpn-vs-surfshark`.
- The page uses existing Choose Better Tech visual patterns and reusable components.
- Conclusions are audience-specific and do not declare a universal winner.
- Every claim is supported by the approved canonical repositories or approved editorial briefs.
- Volatile information is clearly flagged for verification.
- Missing or conflicting information is preserved as uncertainty.
- No new dependencies are introduced.
- No unrelated pages are modified.
- `npm run build` passes.
