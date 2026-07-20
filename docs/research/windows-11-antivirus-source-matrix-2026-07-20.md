# Windows 11 Antivirus Source Matrix

Date: 2026-07-20  
Status: Draft research record  
Project: Choose Better Tech  
Related PR: #37  
Publication status: Not authorized

## Purpose

Create a source-by-source evidence map for the proposed article “Do You Still Need Antivirus on Windows 11?” under the current web-research-only constraint.

This document does not authorize article publication, product ranking, affiliate activation, or any claim that Choose Better Tech personally tested antivirus software.

## Source classification

- **Primary source:** official Microsoft, vendor, or independent testing-lab documentation.
- **Observed source fact:** a statement directly supported by the cited source.
- **Provider claim:** a product or vendor statement that requires qualification.
- **Inference:** a cautious interpretation requiring editorial judgment.
- **Blocked claim:** a statement that cannot be supported from the current evidence set.

## Microsoft protection stack

| Topic | Source | Source type | Supported fact | Editorial use | Volatility |
| --- | --- | --- | --- | --- | --- |
| Windows Security app | [Microsoft Support — Stay protected with the Windows Security app](https://support.microsoft.com/en-US/Windows/Security/Windows-Security/stay-protected-with-the-windows-security-app) | Primary | Windows Security is built into Windows 11 and presents Microsoft Defender Antivirus, Windows Firewall, Smart App Control, scan controls, and status information. | Supports the statement that Windows 11 includes a broader built-in security stack, not only a standalone antivirus engine. | Medium |
| Defender Antivirus | [Microsoft Learn — Virus and threat protection in Windows 11](https://learn.microsoft.com/en-us/windows/security/book/operating-system-security-virus-and-threat-protection) | Primary | Microsoft Defender Antivirus is included in Windows 11, monitors for malware and threats, receives updates, and uses real-time, behavior-based, heuristic, and cloud-delivered protection. | Supports factual description of the built-in baseline. Do not convert Microsoft’s promotional language into an independent quality verdict. | Medium |
| Third-party provider switching | [Microsoft Learn — Defender compatibility without Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/defender-antivirus-compatibility-without-mde) | Primary | On Windows 10 and Windows 11, Defender is active when it is the primary antivirus and automatically enters disabled mode when a non-Microsoft antivirus is installed. | Supports explaining that adding a third-party antivirus generally replaces Defender as the active antivirus rather than stacking two full engines. | Medium |
| Windows Security remains present | [Microsoft Learn — Windows Security](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/windows-defender-security-center/windows-defender-security-center) | Primary | Windows Security remains the status interface even when third-party antivirus is active; it can report third-party protection and continues to show other Windows security features. | Supports distinguishing the Windows Security app from Defender Antivirus itself. | Medium |
| SmartScreen | [Microsoft Learn — Microsoft Defender SmartScreen overview](https://learn.microsoft.com/en-us/windows/security/operating-system-security/virus-and-threat-protection/microsoft-defender-smartscreen/) | Primary | SmartScreen checks sites and downloaded files against reputation and threat signals and warns about suspected phishing, malware, or unsafe downloads. | Supports explaining that Windows 11’s protections extend beyond local file scanning. | Medium |
| Protection History | [Microsoft Support — Protection History](https://support.microsoft.com/en-US/Windows/Security/windows-security/protection-history-in-the-windows-security-app) | Primary | Protection History shows actions Defender has taken, potentially unwanted apps, and important disabled services; events are retained for two weeks. | Supports practical guidance about reviewing security events and the two-week retention limitation. | Medium |
| PUA and ransomware-related controls | [Microsoft Learn — Virus & threat protection](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/windows-defender-security-center/wdsc-virus-threat-protection) | Primary | Windows Security exposes controls such as potentially unwanted app blocking and Controlled folder access, and includes ransomware-recovery guidance. | Supports a careful description of available controls; availability and defaults must be rechecked before publication. | High |
| S mode limitation | [Microsoft Support — Windows 10 and Windows 11 in S mode FAQ](https://support.microsoft.com/en-US/Windows/Experience/Platform-variants/windows-10-and-windows-11-in-s-mode-faq) | Primary | Windows 11 in S mode does not support installing third-party antivirus; the built-in Windows security stack is the compatible option. | Supports a narrow exception section for S mode users. | Medium |

## Independent lab evidence

### AV-TEST

| Product | Test cycle | Result | Supported conclusion | Limitation |
| --- | --- | --- | --- | --- |
| Microsoft Defender Antivirus | March–April 2026 | 6/6 protection, 6/6 performance, 6/6 usability | Defender performed strongly under AV-TEST’s Windows 11 home-user methodology in that cycle. | One lab and one cycle do not establish universal superiority, perfect protection, or identical results on every device. |
| Bitdefender Total Security | March–April 2026 | 6/6 protection, 6/6 performance, 6/6 usability | A representative paid suite also earned full scores in the same cycle. | The result does not establish that paying for Bitdefender is necessary for most users. |
| Norton 360 | March–April 2026 | 6/6 protection, 6/6 performance, 6/6 usability | Norton’s tested suite performed strongly under the same methodology. | Product bundles, renewal pricing, and features are separate purchase-decision questions. |
| ESET Security Ultimate | March–April 2026 | 6/6 protection, 5.5/6 performance, 6/6 usability | ESET scored strongly overall, with a slightly lower performance score in that cycle. | The tested product tier does not map perfectly to every ESET retail plan or future version. |

Primary lab sources:

- [AV-TEST — Microsoft Defender Antivirus, March–April 2026](https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/microsoft-defender-antivirus-consumer-4.18-261213/)
- [AV-TEST — April 2026 Windows 11 home-user results](https://www.av-test.org/en/antivirus/home-windows/?cHash=185f30746d0485823fcf3d445cfcb25f&debug=true&debug_url=1)
- [AV-TEST — ESET Security Ultimate, March–April 2026](https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/eset-security-ultimate-19.0--19.1-261206/)
- [AV-TEST — Bitdefender product history](https://www.av-test.org/en/antivirus/home-windows/manufacturer/bitdefender/)
- [AV-TEST — Norton product history](https://www.av-test.org/en/antivirus/home-windows/manufacturer/norton/)

### Independent-lab gap

A second current lab source should be added before publication where possible. AV-Comparatives is the preferred next source, but the current research pass did not produce a sufficiently precise 2026 consumer-Windows result page for citation.

Until a second lab is added:

- do not describe the evidence as a multi-lab consensus;
- write “AV-TEST reported” rather than “independent labs agree”;
- do not convert the AV-TEST point totals into a CBT product ranking.

## Representative paid-suite source matrix

The following products are examples for feature and pricing comparison only. Inclusion is not a recommendation.

| Product | Official source | Current supported facts | Provider-claim caution | Editorial relevance |
| --- | --- | --- | --- | --- |
| Norton 360 Deluxe | [Official Norton 360 Deluxe page](https://us.norton.com/products/norton-360-deluxe) | Supports Windows 11; covers five devices; includes antivirus, VPN, password manager, dark-web monitoring, parental controls, and Windows-only cloud backup; page displays first-year and renewal pricing. | Claims such as “top-performing VPN,” scam-detection effectiveness, and the “Virus Protection Promise” are provider claims with terms and exclusions. | Illustrates why paid-suite value often comes from bundles and household features rather than antivirus detection alone. |
| Bitdefender Total Security | [Bitdefender support — What is Bitdefender Total Security?](https://www.bitdefender.com/consumer/support/answer/121668/) | Supports Windows 11 and major operating systems; Windows features include antivirus, behavior-based threat defense, and optimization tools. | “Complete” protection and efficacy language are vendor claims. | Useful as a representative multi-platform paid suite with strong current AV-TEST results. |
| ESET HOME Security Premium | [Official ESET free-trial page](https://www.eset.com/us/home/free-trial/) and [ESET protection plans](https://www.eset.com/us/home/protection-plans/) | Offers a 30-day trial with no credit card and no automatic charge; supports Windows 10 and Windows 11; current plans include real-time antivirus, ransomware protection, anti-phishing, firewall, secure browsing, and subscription management. | “Low impact,” “award-winning,” and “AI-powered” wording are provider claims unless tied to independent evidence. | Useful as a cleaner example of a security-focused paid plan and as a contrast to heavily bundled suites. |
| Microsoft Defender | Microsoft sources above | Included with Windows 11; active by default when no third-party antivirus is primary; integrates with Windows Security, SmartScreen, firewall, and other Windows controls. | Microsoft’s own efficacy language remains a provider claim even though inclusion and feature descriptions are factual. | Baseline for the reader’s real decision: whether paying adds enough value beyond existing protection. |

## Decision-use matrix

| Reader situation | Evidence-supported direction | Qualification required |
| --- | --- | --- |
| Typical Windows 11 user who keeps Windows and browsers updated | Built-in protection may be sufficient when paired with safe behavior and enabled security controls. | Do not promise that Defender prevents every threat or that user behavior does not matter. |
| User primarily seeking VPN, password manager, backup, parental controls, identity monitoring, or multi-device management | A paid suite may provide convenience through bundled features. | Compare each bundled feature against dedicated products and renewal pricing; do not assume the bundle is best. |
| Household managing multiple Windows, macOS, Android, or iOS devices | Cross-platform administration and device allowances may justify a paid suite. | Feature availability differs by platform and plan. |
| Windows 11 in S mode | Third-party antivirus generally is not an installable option; rely on the built-in security stack and S mode restrictions. | Keep the scope limited to S mode and verify Microsoft’s current compatibility guidance before publication. |
| User needing hands-on support or centralized family controls | Paid software may be worthwhile for support and administration rather than superior malware protection alone. | Support quality and usability are not verified by CBT under the current web-only research mode. |

## Claims supported now

The current source set supports careful statements that:

1. Windows 11 includes Microsoft Defender Antivirus and the Windows Security app.
2. Windows Security includes multiple security layers beyond antivirus, including firewall and reputation-based protections.
3. Installing a supported third-party antivirus generally disables Defender as the primary antivirus while Windows Security remains the status interface.
4. Microsoft Defender earned full category scores in AV-TEST’s March–April 2026 Windows 11 home-user test.
5. Several paid suites also earned full or near-full scores in the same AV-TEST cycle.
6. Paid suites may add cross-platform coverage, multi-device management, VPNs, password managers, parental controls, backup, support, or identity-related features.
7. Those extras, not an automatic assumption of stronger malware protection, are the main evidence-supported reason many users may consider paying.

## Claims requiring qualification

- “Defender is enough.”  
  Qualify by user behavior, current updates, enabled protections, risk profile, and whether the user needs added features or support.

- “Paid antivirus is better.”  
  Separate malware-protection evidence from suite features, administration, support, platform coverage, and commercial terms.

- “Windows Security replaces every security product.”  
  It does not replace a dedicated password manager, full backup strategy, VPN, identity-theft service, or safe browsing behavior.

- “All paid suites include the same features.”  
  Plan and platform differences are substantial and volatile.

## Blocked claims

The current evidence does not support:

- CBT personally installed or tested any antivirus product;
- CBT measured startup impact, scan speed, memory use, alert clarity, or uninstall quality;
- Defender is universally the best antivirus;
- paid antivirus is unnecessary for everyone;
- any listed product guarantees protection;
- one AV-TEST cycle proves long-term superiority;
- Norton, Bitdefender, or ESET should rank above another product;
- bundle features are equivalent to dedicated CBT-recommended tools;
- current first-year prices represent long-term cost.

## Volatile facts requiring same-day verification

Before publication, recheck:

- Windows 11 support and S mode limitations;
- Microsoft feature names and default states;
- current AV-TEST cycle and product versions;
- vendor plan names, prices, renewal prices, device counts, and included features;
- trial length, payment requirements, and auto-renewal behavior;
- platform-specific feature exclusions;
- product ownership or major privacy-policy changes.

## Required disclosure

Any article produced from this record must state clearly that:

> Choose Better Tech reviewed official product documentation and independent laboratory results for this guide. We did not install or hands-on test the antivirus products discussed.

Do not use “tested,” “our test,” “we found,” “we experienced,” or equivalent first-hand wording.

## Remaining evidence gaps

1. Add a second current independent lab source, preferably AV-Comparatives.
2. Capture current privacy-policy and telemetry sources for Microsoft Defender and any paid product discussed in detail.
3. Verify current retail terms and renewal pricing on the day of drafting and publication.
4. Decide whether the lead article will mention named paid suites or keep product examples secondary to the decision framework.
5. Confirm the article charter and search-intent boundary against the already published “Best Antivirus Software” route.

## Next authorized repository action

Complete the intent and cannibalization audit against existing CBT antivirus content, then decide whether this lead article remains distinct enough to draft. No publication or product ranking is authorized.