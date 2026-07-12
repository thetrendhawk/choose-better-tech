# Choose Better Tech Research and Evidence Standard

Version: 1.0
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-12

## Research Before Drafting

Every substantial article requires a research record before drafting.

Default path:

`docs/research/<slug>-research.md`

Drafting may not begin until the research-completion gate in this standard passes.

## Required Research-Record Sections

Every research record must include:

- title;
- checked date;
- research objective;
- distinct search intent;
- adjacent or potentially competing pages;
- scope;
- exclusions;
- article type;
- candidate set;
- evaluation criteria;
- source hierarchy;
- primary sources reviewed;
- independent sources reviewed;
- provider-by-provider or product-by-product evidence;
- volatile facts;
- source conflicts;
- unresolved gaps;
- inclusion reasons;
- exclusion reasons;
- provisional conclusions;
- hands-on testing status;
- prohibited claims;
- refresh triggers.

## Evidence Burden by Article Type

### Major Ranking

Must include:

- a broad candidate set;
- explicit inclusion and exclusion logic;
- current feature verification;
- pricing and renewal verification where relevant;
- ownership and privacy review;
- audits and incident review where relevant;
- fit labels;
- limitations for every recommendation;
- non-affiliate alternatives;
- confirmation that selection was not affiliate-driven.

A short list of vendor links and conclusions is insufficient.

### Comparison

Must include:

- a distinct reason for comparing the products;
- a direct but conditional verdict;
- category-by-category evidence;
- who should choose each product;
- methodology;
- pricing;
- migration;
- portability;
- privacy;
- security;
- support;
- recovery;
- lock-in;
- limitations;
- scenario recommendations.

### Review

Must include:

- company and ownership;
- security and privacy model;
- plans and pricing;
- renewal terms;
- platform support;
- major features;
- limitations;
- support;
- cancellation;
- refund terms;
- audits;
- incidents;
- best-fit and poor-fit users;
- testing disclosure.

### Educational Guide

Must include:

- accurate definitions;
- concept distinctions;
- limitations;
- failure cases;
- authoritative sources;
- practical implications;
- visible evidence;
- testing disclosure;
- no disguised ranking unless ranking is the explicit intent.

## Source Hierarchy

Prefer sources in this order:

1. Government and standards bodies.
2. Official technical architecture documentation.
3. Official policies, terms, pricing, and support documentation.
4. Independent public audits.
5. Academic or peer-reviewed research.
6. Official incident disclosures.
7. Reputable independent technical testing.
8. Community evidence only as secondary context.

Do not use search snippets as evidence. Do not treat vendor comparison pages as independent evidence.

## Primary Versus Independent Evidence

Official sources are best for:

- features;
- plan limits;
- prices;
- platform support;
- terms;
- architecture claims.

Independent sources are needed where possible for:

- testing;
- audit interpretation;
- incidents;
- performance;
- trust claims;
- disputed security claims;
- industry context.

## Claim Traceability

Every important factual claim should be traceable to a source in the research record. High-impact claims must be supported by the strongest available evidence.

## Visible Evidence Section

Every substantial ranking, comparison, review, or educational guide must include a visible `Sources`, `Evidence checked`, or `Research sources` section.

The hidden research record is not enough.

## Volatile Claims

Volatile facts include:

- pricing;
- renewal pricing;
- plan limits;
- device limits;
- member limits;
- feature availability;
- platform support;
- refund terms;
- trials;
- company ownership;
- audits;
- incident status;
- app availability;
- free-plan restrictions;
- streaming support;
- account-sharing rules;
- recovery behavior.

Every volatile claim must record:

- exact source;
- checked date;
- qualification;
- refresh trigger.

Track reusable volatile claims in `operations/VOLATILE_CLAIMS_REGISTER.md`.

## Pricing Rules

Distinguish:

- monthly billing;
- annual billing;
- promotional pricing;
- standard pricing;
- renewal pricing;
- taxes;
- regional variation;
- refunds;
- trials;
- cancellation;
- member, device, storage, or seat limits.

Do not calculate savings without verified inputs.

## Evidence Conflicts

When sources disagree:

- record both sources;
- identify their dates and authority;
- explain which source is relied upon and why;
- preserve remaining uncertainty.

Do not silently choose the more favorable source.

## Evidence Limitations

Always record what was not tested or verified. Examples include:

- no live account testing;
- no packet capture;
- no source-code audit;
- no penetration testing;
- no streaming-service testing;
- no speed benchmarks;
- no cancellation test;
- no support interaction.

## Research Completion Gate

Research is complete only when the evidence supports the planned article structure and conclusions.

If the evidence does not support them, the status must remain:

`RESEARCH INCOMPLETE`
