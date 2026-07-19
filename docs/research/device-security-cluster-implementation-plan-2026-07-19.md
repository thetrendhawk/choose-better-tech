# Device Security Cluster Implementation Plan

Date: 2026-07-19
Status: Draft implementation planning
Project: Choose Better Tech
Related issue: #36
Related PR: #37
Publication status: Not authorized

## Purpose

Translate the approved consumer device security / antivirus direction into a controlled research and testing sequence before any article drafting or publishing begins.

## Cluster objective

Help beginners decide whether built-in operating-system protections are sufficient, when paid antivirus or security suites add real value, and which tradeoffs matter without using fear-based claims or affiliate incentives as editorial shortcuts.

## Provisional article sequence

### Phase A — decision foundation

1. Do You Still Need Antivirus on Windows 11?
2. Microsoft Defender vs Paid Antivirus
3. Free Antivirus vs Paid Antivirus
4. Antivirus vs Internet Security Suite
5. Antivirus Buying Guide

### Phase B — product selection

6. Best Antivirus for Beginners
7. Best Free Antivirus
8. Best Antivirus for Families

### Phase C — education and limitations

9. How Antivirus Actually Works
10. Does Antivirus Stop Ransomware?

The first article should establish the decision framework before CBT attempts any product ranking.

## Evidence model

Every major claim must be classified as one of:

- observed first-hand CBT result;
- external fact from a primary source or independent testing laboratory;
- provider claim;
- inference;
- editorial recommendation.

Provider marketing claims may not be treated as independent evidence.

## External evidence hierarchy

1. official Microsoft Windows Security documentation;
2. independent testing laboratories such as AV-TEST and AV-Comparatives;
3. standards organizations and recognized security-testing bodies;
4. official vendor documentation for features, pricing, platform support, privacy, renewal, and cancellation;
5. high-quality reporting for ownership, incidents, enforcement, and material company changes;
6. user reports only for usability hypotheses, not technical efficacy claims.

## Safe first-hand testing boundaries

Allowed:

- installation and onboarding;
- interface and alert clarity;
- settings discovery;
- scan duration;
- idle and active resource observations;
- harmless standardized antivirus test artifacts;
- Windows Security provider switching;
- uninstall behavior;
- renewal and cancellation disclosure;
- account deletion and data-retention documentation;
- bundle feature inspection;
- browser-extension behavior;
- family and device-management usability.

Prohibited:

- live malware;
- ransomware samples;
- credential theft against real accounts;
- phishing campaigns;
- exploit creation;
- bypass or evasion testing;
- intentional weakening of the owner's daily-use machine;
- uploading private personal files to analysis systems;
- claiming malware-detection performance from EICAR or AMTSO checks.

## Test environment requirements

The minimum environment is a clean, fully patched Windows 11 system or isolated virtual machine that is not the owner's primary computer.

Record:

- Windows edition and build;
- hardware or VM allocation;
- available storage;
- browser and version;
- Windows Security and Defender platform versions;
- security intelligence version;
- update status;
- default security settings;
- snapshot or restore point status;
- exact test date.

Each third-party product must be tested one at a time from a clean snapshot or equivalent restored state.

## Product-selection criteria for testing

The initial research pool should include:

- Microsoft Defender as the built-in baseline;
- at least two mainstream paid suites;
- one respected lightweight or privacy-oriented product;
- one credible free option.

Selection must consider:

- current Windows 11 support;
- independent lab participation;
- transparent pricing and renewal terms;
- safe uninstall path;
- privacy and telemetry documentation;
- consumer relevance;
- absence of any requirement for an affiliate relationship.

## Provisional shortlist for later approval

Research-only candidates may include:

- Microsoft Defender;
- Bitdefender;
- Norton;
- ESET;
- Malwarebytes;
- Avast or AVG;
- another current product if evidence quality or reader relevance is stronger.

This list is not a recommendation, ranking, or authorization to purchase or install.

## Scorecard dimensions

A later product test scorecard should separate:

### Core protection evidence

- independent laboratory protection results;
- false positives and usability results;
- performance results;
- recency and consistency across multiple test cycles.

### First-hand usability

- installation friction;
- account requirements;
- alert clarity;
- settings clarity;
- scan controls;
- browser changes;
- upsells and notifications;
- uninstall quality;
- restoration of Defender after uninstall.

### Commercial terms

- initial price;
- renewal price;
- auto-renew defaults;
- refund terms;
- cancellation path;
- device limits;
- family controls;
- trial requirements.

### Trust and privacy

- ownership;
- privacy policy;
- telemetry;
- browser or certificate behavior;
- incident history;
- bundled feature quality;
- support quality.

No combined editorial score should hide weaknesses inside a bundle total.

## Lead article charter

### Working title

Do You Still Need Antivirus on Windows 11?

### Primary question

When is built-in Windows Security a reasonable baseline, and when does a paid third-party product add enough value to justify cost, complexity, and data collection?

### Minimum evidence before drafting

- current Microsoft documentation for built-in protections;
- current independent lab data for Defender;
- clean-environment documentation of Windows Security defaults;
- one controlled third-party install/uninstall transition test;
- current product trial, renewal, and cancellation terms;
- clear distinction between antivirus and bundled extras;
- documented limitations and refresh triggers.

### Required editorial posture

- no universal answer;
- no fear-based sales language;
- no presumption that paid protection wins;
- no claim that Defender is perfect;
- no claim that antivirus replaces updates, backups, MFA, password management, or cautious behavior;
- explain the reader's actual decision rather than maximizing product clicks.

## Approval gates

1. opportunity direction approved — complete;
2. implementation plan created — complete;
3. lead-article research package created — complete;
4. clean Windows 11 test environment approved — pending;
5. one third-party transition-test product approved — pending;
6. minimum first-hand test completed — pending;
7. lead article drafting authorized — pending;
8. independent review and publication approval — pending.

## Current status

Repository research and planning are active in draft PR #37. No product has been purchased, installed, tested, ranked, or recommended. No article has been drafted or published.
