# Windows 11 Antivirus Test Environment and Product Selection

Date: 2026-07-19  
Status: Approved controlled setup plan  
Project: Choose Better Tech  
Related PR: #37  
Publication status: Not authorized

## Purpose

Define the first safe, controlled comparison for the proposed lead article, “Do You Still Need Antivirus on Windows 11?”

This document authorizes setup planning and one owner-controlled trial installation only. It does not authorize article drafting, publication, ranking, affiliate activation, live-malware testing, or broad product recommendations.

## Selected comparison

### Baseline

- Microsoft Defender Antivirus and the broader Windows Security stack already present in Windows 11.

### Representative third-party trial

- ESET HOME Security Premium, using the current official 30-day trial for one Windows 11 device.

## Why ESET was selected first

Observed current evidence supports ESET as a useful first comparison because:

- the official ESET trial page states that the Premium trial supports Windows 11 and covers one device;
- the trial is long enough to observe installation, alerts, controls, upsells, scan behavior, uninstall behavior, and Windows Security restoration;
- ESET appears in current AV-TEST Windows 11 home-user testing;
- ESET is a cleaner first comparison than a heavily bundled security suite, making it easier to distinguish core protection and usability from unrelated VPN, backup, identity, or cleanup features;
- selecting ESET does not imply that it is the best product or that it will be recommended.

## Current external evidence

- AV-TEST’s March–April 2026 Windows 11 home-user evaluation included Microsoft Defender Antivirus and ESET Security Ultimate among 14 products tested under default settings and current public versions.
- Microsoft Defender scored 6/6 for protection, 6/6 for performance, and 6/6 for usability in that cycle.
- ESET scored 6/6 for protection, 5.5/6 for performance, and 6/6 for usability in that cycle.
- The ESET official trial page states that ESET HOME Security Premium can be tried on one Windows 10 or Windows 11 device.

These facts do not replace first-hand usability testing and do not establish a recommendation.

## Required test environment

Use one of the following, in order of preference:

1. a dedicated spare Windows 11 computer that does not contain sensitive personal data;
2. a Windows 11 virtual machine with sufficient storage and memory;
3. a secondary Windows 11 test installation on a non-primary device.

Do not use the owner’s primary daily-use computer unless no safer option exists and the owner explicitly accepts the risk.

## Minimum environment requirements

Record privately before testing:

- Windows edition and version;
- current Windows build;
- device or virtual-machine CPU and memory;
- free storage;
- whether the device is physical or virtual;
- whether the device contains any personal files;
- current Windows Security status;
- current Defender version and update status;
- whether any other security software is installed;
- restoration point or snapshot status.

Do not commit serial numbers, device IDs, user account names, IP addresses, or other identifiers.

## Pre-install baseline capture

Before installing ESET, record:

- Windows Security home-screen status;
- Defender real-time protection status;
- firewall status;
- SmartScreen and reputation-based protection status;
- protection history state;
- startup time using one consistent method;
- idle memory usage after five minutes;
- one full Defender scan duration if practical;
- visible Microsoft prompts, warnings, or upsells;
- whether Windows Security presents the system as fully protected.

Use sanitized notes and screenshots. Do not publish raw screenshots until they are reviewed for identifiers.

## ESET trial setup rules

- Download only from the official ESET website.
- Use the current ESET HOME Security Premium trial.
- Do not enter payment information unless the official trial flow requires it and the owner separately authorizes that step.
- Do not accept optional marketing communications unless needed for the trial.
- Record each account requirement and consent screen.
- Record any browser extension offer, add-on, bundled feature, upsell, renewal prompt, or account-creation requirement.
- Keep default protection settings initially so the first comparison reflects the default user experience.
- Do not test with live malware, suspicious executables, or unsafe websites.

## Safe test sequence

1. Capture the Defender baseline.
2. Create a restore point or virtual-machine snapshot.
3. Download the official ESET installer.
4. Record installer size, required account fields, consent screens, and optional offers.
5. Install with default settings.
6. Confirm how Windows Security reports the active antivirus provider.
7. Record ESET dashboard clarity, alerts, settings discoverability, scan controls, scheduling, browser-extension behavior, and upsells.
8. Run only standard product scans on clean files.
9. Observe idle behavior and one consistent everyday-performance workflow.
10. Uninstall ESET using the normal Windows uninstall path.
11. Confirm whether Microsoft Defender and Windows Security return automatically.
12. Record any leftovers, browser extensions, services, scheduled tasks, or account prompts.
13. Restore the snapshot if needed.

## Prohibited activities

- no live-malware execution;
- no malware samples;
- no ransomware simulation;
- no disabling security controls to create artificial failures;
- no testing against real phishing or malicious sites;
- no publishing unredacted screenshots;
- no scoring protection quality from the owner’s clean-device test;
- no recommendation based only on this single trial.

## Evaluation dimensions

Score only first-hand usability dimensions from this test:

- installation friction;
- account and consent burden;
- clarity of default protection state;
- alert clarity;
- settings discoverability;
- scan-control clarity;
- browser-extension behavior;
- upsell intensity;
- idle performance observations;
- uninstall quality;
- restoration of Windows Security;
- overall beginner suitability.

Do not score malware-detection capability from this environment. Use independent lab results for that dimension.

## Owner-only action required

The owner must identify which safe Windows 11 environment will be used:

- dedicated spare computer;
- Windows 11 virtual machine;
- secondary test installation;
- primary computer only with explicit risk acceptance.

No ESET installation should begin until the environment type is confirmed and the baseline is captured.

## Next repository action

After the owner identifies the environment, update this record with the sanitized environment profile and mark the baseline-capture checklist ready. Do not draft the article until the minimum first-hand testing sequence is complete.
