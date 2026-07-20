# Windows Defender vs Paid Antivirus — Source Matrix

- Checked: 2026-07-20
- Method: current documentation, government guidance, and independent-lab review only
- Hands-on testing: none

## Source hierarchy and matrix

| ID | Topic | Source | Source type | Source date/status | Supported publication-safe wording | Limit or conflict | Volatility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S-01 | Windows Security baseline | [Microsoft Support — Stay protected with the Windows Security app](https://support.microsoft.com/en-US/Windows/Security/Windows-Security/stay-protected-with-the-windows-security-app) | Primary platform documentation | Current; checked 2026-07-20 | Windows Security is built into Windows and brings together Defender Antivirus, Firewall, Smart App Control, and related controls. | Microsoft describes its own product; configuration and availability vary. | Medium |
| S-02 | Antivirus controls and provider switching | [Microsoft Support — Virus and threat protection](https://support.microsoft.com/en-us/windows/security/threat-malware-protection/virus-and-threat-protection-in-the-windows-security-app) | Primary platform documentation | Current; checked 2026-07-20 | Windows Security manages Defender and third-party antivirus settings; compatible non-Microsoft antivirus normally causes Defender Antivirus to turn off. | Product-specific coexistence can vary; enterprise passive-mode cases are excluded. | Medium |
| S-03 | Consumer third-party antivirus | [Microsoft Support — Consumer antivirus software providers](https://support.microsoft.com/en-us/windows-antivirus-software-providers) | Primary platform documentation | Current; checked 2026-07-20 | Defender is built into supported Windows; Microsoft warns against running two antimalware products at the same time. | A provider's appearance on the list is compatibility context, not a CBT endorsement. | Medium |
| S-04 | Active provider check and restoration | [Microsoft Support — Scan an item with Windows Security](https://support.microsoft.com/en-us/windows/scan-an-item-with-windows-security-d1c8c01d-12ed-e768-cbb8-830ea8ccf8e6) | Primary platform documentation | Current; checked 2026-07-20 | Readers can check the active provider in Windows Security; Defender should return to active mode after non-Microsoft antivirus is uninstalled. | "Should" is not a CBT-tested guarantee for every removal workflow. | Medium |
| S-05 | Windows version support | [Microsoft Lifecycle — Windows 11 Home and Pro](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro) | Primary lifecycle record | Current; checked 2026-07-20 | Windows 11 servicing is version-specific; readers should confirm their version is supported. | Do not hard-code a current version into evergreen copy. | High |
| S-06 | Microsoft Defender naming distinction | [Microsoft Support — Installing Microsoft Defender](https://support.microsoft.com/en-us/defender/installing-microsoft-defender) | Primary product documentation | Current; checked 2026-07-20 | The Microsoft Defender app included with Microsoft 365 Personal/Family is distinct from Defender Antivirus built into Windows. | Subscription and platform scope can change. | High |
| S-07 | Cross-device Microsoft Defender app | [Microsoft Support — Adding devices to Microsoft Defender](https://support.microsoft.com/en-us/defender/adding-devices-to-microsoft-defender) | Primary product documentation | Current; checked 2026-07-20 | Microsoft's subscription app offers a cross-device dashboard; this may affect whether a separate paid suite is needed. | Do not state device counts or feature parity in the article. | High |
| S-08 | Family controls already available | [Microsoft Support — Set up Microsoft Family Safety](https://support.microsoft.com/en-us/family-safety/set-up-microsoft-family-safety) | Primary product documentation | Current; checked 2026-07-20 | Microsoft Family Safety provides family-group roles, limits, permissions, and activity reporting. | Platform/features vary and were not tested by CBT. | High |
| S-09 | Defender lab cycle 1 | [AV-TEST — Defender, January–February 2026](https://www.av-test.org/en/antivirus/home-windows/windows-11/february-2026/microsoft-defender-antivirus-consumer-4.18-261115/) | Independent laboratory | Jan–Feb 2026 cycle; checked 2026-07-20 | Defender received full scores in protection, performance, and usability under this cycle's methodology. | One version, test window, settings set, and lab methodology; not a guarantee. | High |
| S-10 | Defender lab cycle 2 | [AV-TEST — Defender, March–April 2026](https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/microsoft-defender-antivirus-consumer-4.18-261213/) | Independent laboratory | Mar–Apr 2026 cycle; checked 2026-07-20 | Defender again received full category scores under this cycle's methodology. | Same lab; do not call it permanent superiority. | High |
| S-11 | Second-lab context | [AV-Comparatives — Real-World Protection Test, February–May 2026](https://av-comparatives.org/wp-content/uploads/2026/06/avc_real-world_protection_2026a-1.pdf) | Independent laboratory | Revised 2026-06-08; checked 2026-07-20 | The report placed Microsoft in its top protection cluster and reported no false alarms for Microsoft in that report's clean set. | Copyright/reuse conditions apply; summarize only, do not reproduce the table. Dynamic test not exactly replicable. | High |
| S-12 | Security habits beyond antivirus | [CISA — Secure Our World](https://www.cisa.gov/secure-our-world) | Government guidance | Current/archived campaign page; checked 2026-07-20 | Phishing awareness, strong passwords/password managers, MFA, and software updates remain separate security controls. | Not an antivirus comparison and not a complete threat model. | Low |
| S-13 | Paid household/cross-platform example | [Bitdefender Support — App interface and device/family management](https://www.bitdefender.com/consumer/support/answer/124140/) | Provider documentation | Current; checked 2026-07-20 | A paid security ecosystem may centralize devices, family members, security status, and additional services. | Provider claim; no CBT usability or quality testing. | High |
| S-14 | Paid parental-control example | [Bitdefender Support — Parental Control profiles](https://www.bitdefender.com/consumer/support/answer/100430/) | Provider documentation | Current; checked 2026-07-20 | Paid suites may provide child profiles, content controls, time restrictions, and cross-platform assignments. | Availability and behavior vary; quality not independently established here. | High |
| S-15 | Bundle-category example | [Norton — Norton 360 Deluxe](https://us.norton.com/products/norton-360-deluxe) | Provider marketing/plan documentation | Current; checked 2026-07-20 | Current suites may bundle VPN, backup, parental controls, identity/dark-web monitoring, and multi-device coverage. | Plan/platform/region limitations; marketing source; no value or protection inference. | High |
| S-16 | Support-category example | [Norton — Internet Security and support](https://us.norton.com/internet-security) | Provider marketing/support documentation | Current; checked 2026-07-20 | Some paid suites include access to support services. | Scope, availability, and quality were not tested; guarantees have conditions. | High |

## Evidence use rules

- Microsoft sources establish current Windows behavior and terminology, not independent quality.
- Lab sources establish bounded results for named cycles, not a permanent rank.
- Provider sources establish that a capability is marketed/documented, not that it works well or improves malware detection.
- CISA supports the separation between antivirus and account/update/phishing controls.
- No source supports a universal paid or built-in winner.

## Source conflicts and resolution

1. **"Microsoft Defender" naming:** Microsoft uses the name for both built-in Defender Antivirus and a subscription-based cross-device app. The article defines both and avoids using "Defender" without context when the distinction matters.
2. **Consumer versus enterprise coexistence:** Enterprise Defender for Endpoint documentation contains passive-mode scenarios not appropriate for an ordinary unmanaged PC. The article follows consumer sources and excludes enterprise behavior.
3. **Paid feature breadth:** Provider pages differ by plan, device, country, and date. The article uses categories only, instructs readers to verify exact platform support, and includes no plan-level promises.
4. **Lab outcomes:** Different labs test different workflows. The article uses the convergence only to support "credible baseline" and preserves test limits.

## Refresh checklist

- Reopen S-01 through S-08 after material Microsoft feature, naming, lifecycle, or provider-registration changes.
- Reopen S-09 through S-11 after a new comparable consumer Windows lab cycle.
- Reopen S-13 through S-16 before adding any plan-specific example or commercial implementation.
