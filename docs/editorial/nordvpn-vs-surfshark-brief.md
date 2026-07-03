# NordVPN vs Surfshark Editorial Brief

---
Document Type: Editorial Brief
Topic: NordVPN vs Surfshark
Cluster: VPN
Status: Approved for Implementation
Source Inputs:
  - docs/research/canonical/nordvpn-review-research.md
  - docs/research/canonical/surfshark-review-research.md
  - docs/editorial/nordvpn-review-brief.md
  - docs/editorial/surfshark-review-brief.md
Implementation: Codex
Last Updated: 2026-07-02
---

## Purpose

Create an evidence-based comparison that helps readers decide whether NordVPN or Surfshark better fits their needs. The article must compare tradeoffs by audience and use case, not declare a universal winner.

## Target Reader

| Reader Type | Need |
| --- | --- |
| Beginner VPN shopper | Wants a plain-language comparison between two mainstream VPNs. |
| Value-focused buyer | Wants to understand whether Surfshark's unlimited-device value outweighs NordVPN's premium positioning. |
| Household or family user | Wants to cover many devices without overcomplicating the decision. |
| Privacy-focused user | Wants to compare audits, jurisdiction, logging nuance, transparency, and provider-trust tradeoffs. |
| Streaming, torrenting, or gaming user | Wants practical guidance while preserving uncertainty where test results conflict or change over time. |

## Primary Decision Question

Should a reader choose NordVPN for stronger mainstream security, streaming positioning, support, and premium feature depth, or Surfshark for value, households, beginner ease, and unlimited simultaneous connections?

## Comparison Criteria

| Criterion | Editorial Use |
| --- | --- |
| Privacy evidence | Compare no-logs audits, jurisdiction, transparency reports, logging nuance, and closed-source limitations. |
| Security features | Compare protocols, kill switch, DNS/leak protection, Threat Protection, MultiHop/Double VPN, obfuscation, RAM-only claims, and related features only where supported. |
| Value and households | Compare Surfshark's unlimited simultaneous connections against NordVPN's premium positioning and device-limit uncertainty. |
| Beginner fit | Compare setup, interface, support, feature complexity, and learning curve. |
| Performance | Preserve uncertainty across speed tests, routes, protocols, latency, jitter, and test methods. |
| Streaming | Treat streaming claims as volatile and avoid service-specific promises. |
| Torrenting | Compare P2P support and the shared absence of port forwarding. |
| Gaming | Avoid claiming either VPN is guaranteed for low latency; explain route and test uncertainty. |
| Pricing and plans | Do not list current prices. Flag pricing, tiers, device limits, trials, refunds, renewals, servers, and countries for verification. |

## Required Sections

- Hero
- Affiliate disclosure
- Quick answer
- Decision table
- Best for privacy-focused users
- Best for value, families, and many devices
- Best for beginners
- Security and privacy comparison
- Speed and performance comparison
- Streaming, torrenting, and gaming comparison
- Ease of use and support comparison
- Pricing and plan uncertainty
- Who should choose NordVPN
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
- Do not claim NordVPN or Surfshark always improves gaming latency.
- Do not claim either product has stable streaming access across all services or regions.
- Preserve uncertainty when repositories conflict or identify volatile information.
- Keep conclusions audience-specific and evidence-based.
- Avoid marketing language and exaggerated claims.

## Internal Linking Opportunities

Include only links that already exist in the site at implementation time:

| Destination | Purpose |
| --- | --- |
| `/reviews/nordvpn-review` | Full NordVPN review. |
| `/reviews/surfshark-review` | Full Surfshark review. |
| `/reviews/proton-vpn-review` | Privacy-transparency alternative. |
| `/comparisons/nordvpn-vs-protonvpn` | Existing comparison context. |
| `/guides/best-vpns-for-beginners` | Broader beginner VPN comparison context. |
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

- The comparison page is available at `/comparisons/nordvpn-vs-surfshark`.
- The page uses existing Choose Better Tech visual patterns and reusable components.
- Conclusions are audience-specific and do not declare a universal winner.
- Every claim is supported by the approved canonical repositories or approved editorial briefs.
- Volatile information is clearly flagged for verification.
- Missing or conflicting information is preserved as uncertainty.
- No new dependencies are introduced.
- No unrelated pages are modified.
- `npm run build` passes.
