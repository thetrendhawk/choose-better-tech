# Choose Better Tech Volatile Claims Register

Version: 1.0
Status: Active
Owner: Choose Better Tech
Effective Date: 2026-07-12

## Purpose

This register tracks material facts that are likely to change after publication. It supports scheduled refreshes, correction work, and claim traceability. It does not replace article-specific research records.

Do not add a claim without its exact source and checked date. Do not infer current facts merely to populate this file.

## Usage Guidance

- Add one row for each material volatile claim used in published or planned content.
- Use the canonical production URL when the claim appears on a live article.
- Record the claim as published, including important qualifications.
- Link to the exact official or authoritative source, not a search result.
- Use an ISO checked date in `YYYY-MM-DD` format.
- Set expected volatility to `High`, `Medium`, or `Low` based on how frequently the fact may change.
- Define a concrete refresh trigger, such as a scheduled review, provider announcement, plan-page change, ownership change, audit release, or incident update.
- Use a current status such as `Current`, `Needs verification`, `Refresh due`, `Superseded`, or `Removed`.
- Preserve significant history in Notes rather than silently overwriting a materially changed claim.

## Register

| Topic | Article URL | Claim | Product/provider | Source | Checked date | Expected volatility | Refresh trigger | Current status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Device limits | `https://choosebettertech.com/best-vpns-for-streaming` | Current support materials allow 10 simultaneous devices. | NordVPN | https://support.nordvpn.com/hc/en-us/articles/19476515228305-How-many-devices-can-I-use-with-NordVPN | 2026-07-12 | High | Device-limit or plan change | Current | Device limit does not define household-sharing rights. |
| Refunds | `https://choosebettertech.com/best-vpns-for-streaming` | The 30-day direct-purchase guarantee applies to eligible initial purchases; ordinary renewals are excluded unless law requires otherwise. | NordVPN | https://support.nordvpn.com/hc/en-us/articles/19476991311121-What-is-your-refund-policy | 2026-07-12 | High | Refund or renewal-policy change | Current | Purchase channel and local law can change eligibility. |
| Device limits | `https://choosebettertech.com/best-vpns-for-streaming` | Current consumer plans document unlimited simultaneous connections with misuse caveats. | Surfshark | https://support.surfshark.com/hc/en-us/articles/360003069434-How-many-devices-can-I-use-with-Surfshark-simultaneously | 2026-07-12 | High | Device, household, or acceptable-use change | Current | Unlimited connections do not guarantee performance or unrestricted account sharing. |
| Renewals | `https://choosebettertech.com/best-vpns-for-streaming` | Pricing varies by currency, VAT, coupons, plan, and duration; renewal uses the applicable renewal price. | Surfshark | https://surfshark.com/pricing | 2026-07-12 | High | Pricing or renewal-page change | Current | No promotional price is hard-coded in the article. |
| Platform support | `https://choosebettertech.com/best-vpns-for-streaming` | Current setup documentation covers native Apple TV, Android TV, and Fire TV apps plus router and MediaStreamer paths. | ExpressVPN | https://www.expressvpn.com/support/vpn-setup/ | 2026-07-12 | High | App, OS, device, or setup-path change | Current | MediaStreamer is DNS-based, not a full encrypted VPN tunnel. |
| Device limits | `https://choosebettertech.com/best-vpns-for-streaming` | Connection limits are plan-dependent; current Pro wording allows up to 14. | ExpressVPN | https://www.expressvpn.com/support/knowledge-hub/simultaneous-connections/ | 2026-07-12 | High | Plan or connection-limit change | Current | Reader must verify the selected checkout plan. |
| Streaming support | `https://choosebettertech.com/best-vpns-for-streaming` | Current streaming support is documented for paid plans and is separate from Proton Free. | Proton VPN | https://protonvpn.com/support/streaming-guide | 2026-07-12 | High | Plan or streaming-support change | Current | Documentation does not guarantee service-by-service reliability. |
| Platform support | `https://choosebettertech.com/best-vpns-for-streaming` | Paid Apple TV, Android TV, and Fire TV support is currently documented. | Proton VPN | https://protonvpn.com/support/apple-tv | 2026-07-12 | High | App, OS, or plan availability change | Current | Apple TV requires compatible current hardware and tvOS. |
| Device limits | `https://choosebettertech.com/best-vpns-for-streaming` | Current paid documentation supports up to 10 simultaneous devices. | Proton VPN | https://protonvpn.com/streaming/devices/ | 2026-07-12 | High | Plan or connection-limit change | Current | Free-plan and paid-plan limits differ. |
| Device limits | `https://choosebettertech.com/best-vpns-for-streaming` | Current support documents unlimited simultaneous connections. | Private Internet Access | https://helpdesk.privateinternetaccess.com/hc/en-us/articles/46610823773851-How-many-devices-can-I-use-simultaneously-while-connected-to-the-VPN-service | 2026-07-12 | High | Device or acceptable-use change | Current | Does not establish measured streaming performance. |
| Refunds | `https://choosebettertech.com/best-vpns-for-streaming` | Eligible direct payments can receive a refund within 30 days; third-party and listed payment-channel exclusions apply, and prorated refunds are unavailable. | Private Internet Access | https://helpdesk.privateinternetaccess.com/hc/en-us/articles/46777153728539-Am-I-eligible-for-a-refund | 2026-07-12 | High | Refund-policy or payment-channel change | Current | App-store policies can supersede provider terms. |
| Platform support | `https://choosebettertech.com/best-vpns-for-streaming` | Current documentation lists native Apple TV, Android TV, and Fire TV apps plus hotspot, router, proxy, and DNS-based alternatives. | Windscribe | https://windscribe.com/features/smart-tv-vpn | 2026-07-12 | High | App, device, or fallback-path change | Current | DNS-based alternatives are not equivalent to a VPN tunnel. |
| Free plans | `https://choosebettertech.com/best-vpns-for-streaming` | The free tier is data-limited and is treated as a setup test rather than sustained high-volume streaming. | Windscribe | https://windscribe.com/features/fire-tv-stick | 2026-07-12 | High | Free data, location, device, or plan change | Current | Exact allowance and eligibility must be refreshed before promotion. |
| Streaming support | `https://choosebettertech.com/best-vpns-for-streaming` | No included provider is guaranteed to work with every streaming service, catalog, location, or server. | All candidates | `docs/research/best-vpns-for-streaming-research.md` | 2026-07-12 | High | Major streaming-service detection or terms change | Current | Documentation-based fit only; no service-by-service testing occurred. |

## Required Categories

Use these categories in the Topic column when applicable:

| Category | Typical evidence | Suggested refresh trigger |
| --- | --- | --- |
| Prices | Official pricing and billing page | Pricing-page change or scheduled commercial refresh |
| Renewals | Official billing, renewal, or terms page | Renewal-policy or standard-rate change |
| Free plans | Official plan comparison and support page | Free-tier feature or limit change |
| Trials | Official pricing, trial, or support page | Trial length or eligibility change |
| Refunds | Official refund policy or terms | Refund-window or eligibility change |
| Device limits | Official plan or device-support documentation | Plan/device-limit change |
| Family-member limits | Official family-plan and membership documentation | Member, guest, role, or sharing change |
| Storage quotas | Official plan and storage documentation | Quota or included-storage change |
| Platform support | Official download and support documentation | OS/browser support change |
| App availability | Official app-store or provider documentation | Launch, removal, or regional availability change |
| Ownership | Corporate filing, official announcement, or authoritative record | Acquisition, merger, or control change |
| Audit dates | Public audit report or official security page | New audit, scope change, or remediation update |
| Incident updates | Official incident disclosure or regulator notice | Material incident or investigation update |
| Streaming support | Current controlled testing plus cautious provider documentation | Streaming-platform or service behavior change |
| Account-sharing terms | Official terms, plans, and sharing documentation | Household, seat, member, or acceptable-use change |
| Recovery behavior | Official recovery and emergency-access documentation | Recovery flow, authority, or lockout change |
| Privacy-policy changes | Official privacy policy and archived comparison | Material collection, sharing, retention, or deletion change |
