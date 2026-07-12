# Choose Better Tech Search Monitoring and Anomaly Policy

Version: 1.0
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-12

## Signals to Track

Where data is available, track:

- indexed pages;
- excluded pages;
- impressions;
- clicks;
- query mix;
- average position;
- crawl errors;
- canonical issues;
- manual actions;
- security warnings;
- page-level drops;
- cluster-level drops;
- sitewide drops.

## Suggested Investigation Triggers

- approximately 40% page-level impression decline across comparable 28-day periods;
- broad cluster decline;
- an abrupt increase in `Crawled — currently not indexed`;
- canonical changes;
- a manual action;
- a security warning;
- a sharp drop after a large publishing batch;
- sudden growth in excluded URLs.

These are investigation triggers, not automatic proof of a penalty or content defect.

## Response Rules

- Do not panic over normal volatility.
- Compare equivalent periods and check seasonality.
- Pause new publication while a serious unresolved anomaly exists.
- Investigate technical, editorial, indexing, and competitive causes.
- Do not assume an algorithmic penalty without evidence.
- Record unavailable data as unavailable rather than inferring it.

Store findings at:

`docs/monitoring/search-anomaly-YYYY-MM-DD.md`
