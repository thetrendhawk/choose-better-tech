# Windows 11 Antivirus Lead Article Claim Ledger

Date: 2026-07-20  
Status: Draft research control  
Project: Choose Better Tech  
Related PR: #37  
Publication status: Not authorized

## Purpose

Control the factual claims for the proposed article “Do You Still Need Antivirus on Windows 11?” while this phase remains web-research-only.

This ledger does not authorize article drafting, publication, rankings, recommendations, affiliate activation, product installation, or hands-on-test claims.

## Evidence standard

- **Primary-source fact:** supported by Microsoft documentation or an independent testing organization’s published result.
- **Inference:** a cautious conclusion drawn from multiple facts.
- **Blocked claim:** not supportable without stronger evidence, first-hand testing, or a broader product comparison.
- **Volatile claim:** may change and must be rechecked immediately before publication.

## Approved factual claims

| ID | Proposed claim | Classification | Support | Required wording control |
| --- | --- | --- | --- | --- |
| W11-01 | Windows 11 includes the Windows Security app and Microsoft Defender Antivirus. | Primary-source fact | Microsoft Support, “Stay protected with the Windows Security app.” | Say “includes” or “built into Windows”; do not say it guarantees complete protection. |
| W11-02 | Windows Security also reports or manages security areas beyond antivirus, including firewall and reputation-based protections. | Primary-source fact | Microsoft Support and Microsoft Learn Windows Security documentation. | Describe it as a security dashboard or integrated security stack, not as one single antivirus feature. |
| W11-03 | Microsoft Defender Antivirus provides real-time malware protection and can run manual scans. | Primary-source fact | Microsoft Support Windows Security documentation. | Attribute capability to Microsoft documentation; avoid absolute prevention language. |
| W11-04 | When a compatible third-party antivirus product is installed and kept current, Microsoft Defender Antivirus is normally disabled automatically while Windows Security continues to report protection status. | Primary-source fact | Microsoft Learn Windows Security documentation, updated 2026-05-27. | Use “normally” and “compatible/current third-party antivirus”; do not imply every installer behaves identically. |
| W11-05 | Microsoft Defender Antivirus received 6/6 for protection, performance, and usability in AV-TEST’s January–February 2026 Windows 11 consumer test. | Independent-lab fact | AV-TEST report 261115. | Name the exact lab, dates, platform, version, methodology context, and score scale. |
| W11-06 | Microsoft Defender Antivirus again received 6/6 for protection, performance, and usability in AV-TEST’s March–April 2026 Windows 11 consumer test. | Independent-lab fact | AV-TEST report 261213. | Do not convert one lab’s score into a universal “best” or “perfect protection” claim. |
| W11-07 | AV-TEST tested current public product versions under default settings and realistic threat scenarios in those cycles. | Independent-lab fact | AV-TEST test descriptions for reports 261115 and 261213. | Attribute the methodology directly to AV-TEST. |
| W11-08 | Microsoft Defender has posted strong recent AV-TEST results across multiple Windows 11 cycles, though results have not been identical in every historical cycle. | Primary-source synthesis | AV-TEST Microsoft manufacturer history. | Say “strong recent results,” not “always perfect.” |
| W11-09 | A paid antivirus suite may add features beyond core antivirus protection, but those added features vary by vendor and plan. | Inference with provider-document requirement | Product plan pages and official feature documentation must be collected before use. | Do not publish until at least three representative vendors are checked. Mark as volatile. |
| W11-10 | For many careful Windows 11 users, built-in protection may be sufficient when the system and browser are kept updated and safe-computing practices are followed. | Editorial inference | Microsoft built-in capability documentation plus recent independent lab results. | Must remain qualified: “may be sufficient for many users,” never “is enough for everyone.” |
| W11-11 | Some users may still benefit from paid software because of cross-platform coverage, family administration, support, bundled tools, or preferred controls. | Editorial inference | Requires current plan documentation from representative products. | Present as use-case reasons, not evidence that paid malware protection is automatically superior. |

## Claims allowed only with explicit qualification

| ID | Claim direction | Required qualification |
| --- | --- | --- |
| Q-01 | “Microsoft Defender is good.” | Replace with specific evidence: recent AV-TEST results were strong under that lab’s methodology. |
| Q-02 | “Windows Security is enough.” | Use “may be enough for many users,” followed by conditions and exceptions. |
| Q-03 | “Paid antivirus is better.” | Not allowed as a general statement. Define the exact feature, product, test, and user need. |
| Q-04 | “Third-party antivirus replaces Defender.” | Explain that Defender Antivirus is normally disabled while Windows Security remains active as a status interface and other Windows protections may continue. |
| Q-05 | “Defender has no performance impact.” | Not allowed. Independent tests measure impact; even strong scores do not mean zero impact. |
| Q-06 | “Defender catches 100% of malware.” | Not allowed. Specific lab test percentages are bounded by dates, samples, and methodology. |
| Q-07 | “You do not need antivirus.” | Misleading. Windows 11 already includes antivirus; the real question is whether a user needs additional third-party protection. |

## Blocked claims

Do not publish any of the following without new evidence:

- CBT personally installed, tested, timed, uninstalled, or compared Microsoft Defender or any third-party antivirus.
- CBT observed alert quality, scan speed, resource use, upsell intensity, cancellation friction, or uninstall quality.
- Microsoft Defender is the best antivirus.
- A named paid antivirus is better than Microsoft Defender overall.
- A paid antivirus provides materially better malware protection for every user.
- Microsoft Defender provides complete protection against phishing, scams, account takeover, ransomware, or data loss.
- Independent lab results guarantee a user will not be infected.
- Any product is lightweight, private, beginner-friendly, intrusive, or easy to remove based solely on vendor documentation.
- Any product ranking, score, winner, or recommendation.

## Volatile facts requiring same-day verification before publication

- Windows Security and Microsoft Defender feature descriptions;
- Windows 11 version applicability;
- current AV-TEST and AV-Comparatives results;
- product names and plan tiers;
- trial terms;
- prices, renewal prices, device limits, and refund terms;
- bundled VPN, password-manager, identity, backup, or parental-control features;
- supported operating systems;
- ownership, privacy-policy, and data-processing details.

## Required article disclosure

Until hands-on testing exists, any article based on this package must state substantially:

> Choose Better Tech did not install or run these antivirus products for this article. The analysis is based on current Microsoft documentation, independent security-lab results, and verified product information. Hands-on usability claims are excluded.

Do not describe the article as a hands-on review, test, benchmark, or product comparison.

## Provisional answer framework

The article’s evidence-supported answer may follow this structure:

1. Windows 11 already includes active antivirus and a broader security dashboard.
2. Recent independent lab results show Microsoft Defender can deliver strong protection, performance, and usability results under tested conditions.
3. Therefore, paying for third-party antivirus is not automatically necessary for every Windows 11 user.
4. Paid software may still make sense when a person needs clearly defined extras such as cross-platform coverage, family administration, support, or bundled tools.
5. No security product replaces updates, backups, strong passwords, multifactor authentication, and careful handling of links and downloads.

Point 5 requires separate authoritative sourcing before article publication.

## Additional research still required

- current Microsoft documentation for SmartScreen, Smart App Control, tamper protection, controlled folder access, and potentially unwanted application blocking;
- current CISA or Microsoft guidance for updates, backups, phishing resistance, and layered security;
- latest available AV-Comparatives consumer results and methodology;
- current official plan documentation for at least three representative third-party antivirus products;
- ownership and privacy-policy review for those vendors;
- clear separation between core antivirus features and bundle extras;
- cannibalization check against existing CBT VPN and password-manager pages.

## Next authorized repository action

Complete the remaining primary-source collection and build a source matrix for Microsoft protections, independent labs, and representative paid suites. Do not draft the article until the source matrix and article charter are reviewed.
