# VPN Privacy Guide - Research Record

Current facts checked: 2026-07-11  
Planned production URL: https://choosebettertech.com/guides/vpn-privacy-guide  
Distinct intent: How should readers evaluate VPN privacy and trust claims?

## Editorial Scope

This research record supports an educational privacy guide, not a product ranking. Provider examples are used to explain evidence types, tradeoffs, and uncertainty. Inclusion does not imply endorsement, and affiliate availability must not affect examples, criticism, CTA placement, or conclusions.

The guide is distinct from:

- How VPNs Work: technical explanation of tunnels, routing, and encryption.
- Are VPNs Worth It?: value decision for whether a VPN solves a useful problem.
- VPN Myths: broad misconception correction.
- VPN Buying Guide: general product-selection criteria.
- Best VPNs for Beginners, Best Free VPNs, Best VPNs for Travel, and Best VPNs for Students: fit-based product selection.
- Individual VPN reviews: provider-specific evaluations.

## Privacy Questions Answered

- What does a VPN hide from the local network, ISP, and websites?
- What can the VPN provider still see or infer?
- What does a VPN not hide, including accounts, cookies, fingerprinting, GPS, malware, phishing, managed devices, and payment identity?
- What does "no logs" mean across activity logs, connection logs, account records, diagnostics, temporary operational data, and telemetry?
- How should readers interpret audits, privacy policies, transparency reports, legal requests, ownership, jurisdiction, open-source claims, and leak-protection claims?
- Which threat models are helped substantially, helped partially, not helped, or made more trust-dependent by a VPN?

## Source Hierarchy Used

Priority was given to official privacy policies, official logging documentation, official audit or transparency materials, independent audit reports where public, government guidance, and civil-society guidance. Search snippets and affiliate ranking pages were not used as proof.

## Foundational Guidance

- EFF's VPN guidance frames VPN choice as a trust and threat-model decision. A VPN can move visibility away from a local network or ISP, but it also makes the VPN provider a central trust point.
- FTC public Wi-Fi guidance emphasizes that HTTPS is now widespread and users should check for encrypted connections. This supports careful language: a VPN can help with local-network visibility, but HTTPS already protects much modern web content.
- NIST Privacy Framework and privacy engineering guidance support the article's risk-framing approach: privacy depends on data flows, actors, purposes, and individual risk, not a single product label.

## Core Concepts

- Trust transfer: a consumer VPN reduces some local-network and ISP visibility while increasing dependence on the VPN provider's policy, architecture, staff, infrastructure, payment processors, support systems, and legal process handling.
- No anonymity guarantee: VPNs do not erase account identity, cookies, browser fingerprints, device IDs, payment trails, GPS, social identity, malware, phishing, or managed-device monitoring.
- HTTPS distinction: HTTPS encrypts browser-to-site content. A VPN encrypts device-to-VPN traffic and changes which network actor sees destination metadata.
- No logs is not standardized: providers use the phrase differently. Activity logs, connection logs, diagnostic logs, account records, payment records, support tickets, temporary operational data, aggregated analytics, and telemetry need separate review.
- Audits are useful but limited: scope, date, auditor, access, systems examined, exclusions, remediation, and report availability determine what an audit can support. An audit does not prove future behavior.
- Jurisdiction is relevant but not decisive: incorporation, operations, staff, infrastructure, data processing, ownership, mutual legal assistance, and specific legal orders matter more than simplified Five Eyes labels.
- Open-source clients help inspectability, but do not prove server behavior, production configuration, logging controls, or update integrity.
- Transparency reports and warrant canaries can show request-handling patterns but cannot prove no logging by themselves.
- Anonymous account and payment options reduce some account linkage but can be weakened by IP use, payment processors, blockchain traceability, refunds, support interactions, and repeated behavior.
- Leak protection is situational: DNS, IPv6, WebRTC, kill switch, split tunneling, captive portals, mobile handoffs, and app exclusions require current platform-specific testing. A single leak test is not permanent proof.

## Provider Evidence Examples

| Provider | Useful example | Current evidence checked | Limits and uncertainty |
| --- | --- | --- | --- |
| Mullvad | Minimal account model, no-email account numbers, cash/crypto options, law-enforcement request handling | Official no-logging policy says Mullvad does not store activity logs; official government-request page says it designs the service to make data requests impossible to fulfill; official 2023 search-warrant post says Swedish police left without customer data; official audit pages document recurring app and server audits. | Still requires trust in server-side behavior and current configuration. Search-warrant evidence is strong for that incident, not proof of all future behavior. |
| IVPN | Email-free signup, open-source apps, cash/Monero/Bitcoin, no-logs policy, anti-fluff privacy language | Official site says no email is required, no personal data is collected on signup, cash/Monero/Bitcoin are accepted, apps and website are open source, and no-logs claims have been audited. Cure53 no-logging audit material is available. | Audit freshness and exact scope need rechecking before high-risk use. Open-source apps do not prove server behavior. |
| Proton VPN | Open-source apps, Swiss no-logs posture, transparency report, annual no-logs audits | Proton privacy policy discloses account-level IP logging nuance for abuse/fraud and optional account authentication logs; Proton transparency report has a VPN-specific section saying requests based on server IP/timestamp cannot be fulfilled because activity logs are not retained; Securitum audit material supports no-logs claims for the audited period; Proton publishes open-source app information. | Proton's broader transparency report covers multiple Proton services, so VPN-specific legal-request interpretation matters. Account-level abuse and security logging must not be confused with VPN activity logging. |
| NordVPN | Repeated no-logs assurance engagements and mainstream privacy claims | NordVPN official materials and press coverage report a sixth no-logs assurance engagement covering late 2025 / early 2026, with prior PwC/Deloitte history. | Full reports may require customer/account access; a limited assurance engagement is not a permanent guarantee or public full technical proof. Clients are not positioned as fully open-source in CBT research. |
| Surfshark | No-logs audit examples plus diagnostic-data nuance | Surfshark Trust Center reports Deloitte no-logs audits in 2023 and 2025 and a SecuRing infrastructure security audit completed in December 2025. Surfshark support documents diagnostic collection workflows. | Diagnostic or support data can be separate from activity logging. Marketing language should not be treated as proof beyond audit scope. |
| ExpressVPN | Privacy-policy audit, RAM-only TrustedServer architecture, BVI jurisdiction, Kape ownership caveat | ExpressVPN privacy policy says it does not log browsing history, traffic destination, data content, DNS queries, source IP, assigned VPN IP, timestamps, or session duration. Trust Center/audit pages report KPMG privacy-policy audits and other security audits; access to some reports requires agreeing to terms or signing in. | Ownership by Kape is a governance consideration, not automatic proof of bad behavior. Report access limits make the public evidence less complete. |
| Private Internet Access | Court-tested no-logs claims, Deloitte audits, transparency report | PIA privacy policy/no-logs pages say it does not log activity, connection metadata, source IPs, destination IPs, DNS, or timestamps. PIA transparency report says it is unable to provide logs; PIA cites 2016/2017 court-tested subpoena events and Deloitte audits. | US jurisdiction and Kape ownership are relevant context but not by themselves proof of logging. Court-tested claims are historical, not future-proof. |

## Threat-Model Findings

- Helps substantially: reducing local Wi-Fi operator visibility, masking home/public IP from ordinary websites, reducing ISP visibility into destination details when the VPN is configured correctly, and protecting some traffic on shared or hostile local networks.
- Helps partially: location-based profiling, casual network monitoring, travel account access, streaming-region attempts, torrenting visibility from peers, and some public Wi-Fi risks.
- Does little: logged-in account tracking, cookies, browser/device fingerprinting, advertising network profiles, GPS location, malware, phishing, compromised accounts, weak passwords, social identity, and payment identity.
- May create new risks: choosing an opaque provider, relying on unsupported anonymity claims, installing unknown free apps, using a VPN on employer/school-managed devices, or assuming a VPN bypasses legal or organizational controls.
- High-risk users: journalists, activists, targets of state surveillance, and vulnerable communities should seek specialized security guidance rather than relying on a consumer VPN guide.

## Audit Interpretation Framework

Readers should identify:

- Audit type: financial audit, code audit, penetration test, infrastructure audit, privacy-policy assessment, no-logs assurance, app security assessment, browser-extension audit, server-configuration review, SOC 2 report, or ISO certification.
- Auditor, date, and period covered.
- Systems examined and excluded.
- Whether the full report is public, customer-only, NDA-gated, summary-only, or inaccessible.
- Whether remediation was verified.
- Whether the audit supports the precise marketing claim being made.

## Misleading Terminology

- "Anonymous VPN" often overpromises; VPNs can reduce linkage but do not create complete anonymity.
- "Zero logs" can hide exceptions for account, payment, support, diagnostic, abuse, or temporary operational records.
- "Military-grade encryption" is imprecise marketing.
- "Audited" may mean a narrow app assessment, not a no-logs infrastructure review.
- "Five Eyes safe" oversimplifies jurisdiction, ownership, infrastructure, and legal-process realities.
- "RAM-only" and "owned servers" are architecture claims that require verification and do not prove all operational practices.

## Conflicts, Caveats, and Evidence Limits

- Some provider audit reports are not fully public or require customer login/terms acceptance.
- Provider privacy pages can change quickly; policy version and checked date must be recorded.
- Public no-logs claims often omit account, billing, support, and diagnostics nuance in headline copy.
- Transparency reports show request handling, not necessarily all legal pressure or all data flows.
- App-store labels can be useful but are self-reported and platform-scoped.
- CBT did not perform hands-on leak tests, packet capture, app telemetry inspection, code review, or infrastructure testing for this guide.

## Key Sources

- EFF: https://ssd.eff.org/module/choosing-vpn-thats-right-you
- FTC public Wi-Fi guidance: https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know
- NIST Privacy Framework: https://www.nist.gov/privacy-framework
- Mullvad no-logging policy: https://mullvad.net/en/help/no-logging-data-policy
- Mullvad government requests: https://mullvad.net/en/help/how-we-handle-government-requests-user-data
- Mullvad search warrant post: https://mullvad.net/en/blog/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised
- IVPN privacy and service overview: https://www.ivpn.net/en/
- IVPN no-logging audit: https://www.ivpn.net/blog/ivpn-no-logging-claim-verified-by-independent-audit/
- Proton privacy policy: https://proton.me/legal/privacy
- Proton transparency report: https://proton.me/legal/transparency
- Proton open-source apps: https://proton.me/community/open-source
- Proton no-logs audit report: https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf
- NordVPN no-logs assurance update: https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/
- Surfshark Trust Center: https://surfshark.com/trust-center
- Surfshark diagnostics guidance: https://support.surfshark.com/hc/en-us/articles/13412100532242-How-to-collect-diagnostics-from-any-device
- ExpressVPN privacy policy: https://www.expressvpn.com/privacy-policy
- ExpressVPN Trust Center: https://www.expressvpn.com/trust
- PIA privacy policy: https://www.privateinternetaccess.com/privacy-policy
- PIA transparency report: https://www.privateinternetaccess.com/transparency-report
- PIA no-logs audit: https://www.privateinternetaccess.com/blog/privacy-audit/

