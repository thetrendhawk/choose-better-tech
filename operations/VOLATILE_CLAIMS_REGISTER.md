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
| Storage quotas | `https://choosebettertech.com/best-cloud-storage-for-beginners` | A Google Account currently includes 15 GB shared across Drive, Gmail, and Google Photos. | Google Drive | https://support.google.com/googleone/answer/6374270 | 2026-07-12 | High | Storage or quota-accounting change | Current | The allowance is not Drive-only. |
| Storage quotas | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Dropbox Basic currently starts at 2 GB. | Dropbox | https://help.dropbox.com/plans/dropbox-basic-faq | 2026-07-12 | High | Free-plan or storage change | Current | Referral bonuses are not included in the claim. |
| Recovery behavior | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Basic, Plus, and Family currently document 30 days of version history. | Dropbox | https://help.dropbox.com/delete-restore/version-history-overview | 2026-07-12 | High | Plan or retention-window change | Current | Permanently deleted items cannot be restored. |
| Storage quotas | `https://choosebettertech.com/best-cloud-storage-for-beginners` | iCloud currently includes 5 GB free, shared with backups, Photos, Mail, Drive, and other iCloud data. | Apple iCloud | https://support.apple.com/en-us/121314 | 2026-07-12 | High | Storage or quota-accounting change | Current | Shared-pool growth is an important beginner limitation. |
| Recovery behavior | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Deleted iCloud Drive files are generally available in Recently Deleted for 30 days unless permanently removed. | Apple iCloud | https://support.apple.com/en-us/121314 | 2026-07-12 | High | Recovery-window or deletion-flow change | Current | Recovery is not an independent backup. |
| Storage quotas | `https://choosebettertech.com/best-cloud-storage-for-beginners` | A Microsoft account currently includes 5 GB of Microsoft cloud storage. | Microsoft OneDrive | https://support.microsoft.com/en-us/onedrive/microsoft-storage-faqs | 2026-07-12 | High | Storage, bundle, or quota-accounting change | Current | Microsoft 365 subscriptions have different allocations. |
| Platform support | `https://choosebettertech.com/best-cloud-storage-for-beginners` | The current official OneDrive app list covers Windows, macOS, iOS, Android, and web, not a Linux desktop app. | Microsoft OneDrive | https://support.microsoft.com/en-us/onedrive/onedrive-system-requirements | 2026-07-12 | High | Platform or app launch change | Current | Web access remains available on Linux. |
| Storage quotas | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Proton Drive Free starts at 2 GB and can unlock up to 5 GB through onboarding actions. | Proton Drive | https://proton.me/support/increase-storage-space | 2026-07-12 | High | Free allowance or onboarding change | Current | Avoid summarizing the plan as unconditional 5 GB. |
| Recovery behavior | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Proton Free currently saves up to 10 file versions for seven days; paid plans offer longer configurable history. | Proton Drive | https://proton.me/support/version-history | 2026-07-12 | High | Plan or retention-window change | Current | Version history does not replace backup. |
| Platform support | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Current Proton Drive support lists web, Windows, macOS, Android, and iOS/iPadOS, not a Linux desktop app. | Proton Drive | https://proton.me/support/drive | 2026-07-12 | High | Platform or app launch change | Current | Browser access remains available on Linux. |
| Free plans | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Sync.com currently positions its free plan with 5 GB of storage. | Sync.com | https://www.sync.com/free-cloud-storage/ | 2026-07-12 | High | Free-plan or storage change | Current | Recovery and advanced sharing controls remain plan-dependent. |
| Recovery behavior | `https://choosebettertech.com/best-cloud-storage-for-beginners` | pCloud currently documents 15-day recovery for free accounts, 30 days for paid plans, and a separate extended-history add-on. | pCloud | https://www.pcloud.com/features/backup.html | 2026-07-12 | High | Plan, add-on, or recovery-window change | Current | Ordinary recovery and extended history must not be conflated. |
| Renewals | `https://choosebettertech.com/best-cloud-storage-for-beginners` | Current pCloud terms define a lifetime plan as the account holder's lifetime or 99 years, whichever is shorter. | pCloud | https://help.pcloud.com/article/terms-of-service | 2026-07-12 | Medium | Terms or lifetime-plan definition change | Current | Lifetime does not remove provider or account risk. |
| Storage quotas | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | A Google Account currently includes 15 GB shared across Drive, Gmail, and Google Photos. | Google Drive | https://support.google.com/drive/answer/9312312 | 2026-07-12 | High | Storage or quota-accounting change | Current | Shared folders generally count against the original owner's quota. |
| Platform support | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | Current Drive for desktop setup documentation covers Windows and macOS, not Linux. | Google Drive | https://support.google.com/drive/answer/10838124 | 2026-07-12 | High | Platform or app launch change | Current | Linux users retain web access but not an equivalent official desktop client. |
| Recovery behavior | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | Drive items moved to Trash currently remain for 30 days unless permanently deleted. | Google Drive | https://support.google.com/drive/answer/14933051 | 2026-07-12 | High | Trash or recovery-window change | Current | Ownership can affect shared-file behavior. |
| Storage quotas | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | Dropbox Basic currently starts at 2 GB. | Dropbox | https://help.dropbox.com/plans/dropbox-basic-faq | 2026-07-12 | High | Free-plan or storage change | Current | Referral bonuses are excluded from the stable starting-point claim. |
| Platform support | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | Dropbox currently documents Windows, macOS, and Linux desktop applications. | Dropbox | https://help.dropbox.com/installs/system-requirements | 2026-07-12 | High | Platform or system-requirement change | Current | Linux distribution and architecture limitations apply. |
| Recovery behavior | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | Dropbox Basic, Plus, and Family currently document 30 days of version history. | Dropbox | https://help.dropbox.com/delete-restore/version-history-overview | 2026-07-12 | High | Plan or retention-window change | Current | Longer history on an upgraded plan is not retroactive. |
| Storage quotas | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | Current Google Shared Drive documentation permits files up to 5 TB within storage and upload limits. | Google Drive | https://support.google.com/a/users/answer/7338880 | 2026-07-12 | High | File-size or upload-limit change | Current | Shared Drives are work/school features. |
| Storage quotas | `https://choosebettertech.com/comparisons/google-drive-vs-dropbox` | Dropbox currently documents a 2 TB maximum file and warns browser uploads above 375 GB may be unreliable. | Dropbox | https://help.dropbox.com/sync/upload-limitations | 2026-07-12 | High | File-size or upload-method change | Current | Desktop or API upload is recommended for very large files. |

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
