# SOP: Publishing

Version: 1.0  
Status: Active  
Owner: Choose Better Tech  
Last Updated: 2026-07-02

## Purpose

Define the standard workflow for implementing, checking, deploying, and indexing published content.

## Procedure

| Step | Action | Output |
| --- | --- | --- |
| 1 | Confirm approved brief and source materials. | Ready-to-build package. |
| 2 | Implement the article through the Codex workflow. | Documentation or site changes. |
| 3 | Run the build and relevant checks. | Validation result. |
| 4 | Complete QA checklist. | Publication approval. |
| 5 | Deploy the article. | Live URL. |
| 6 | Submit or monitor indexing. | Search visibility tracking. |
| 7 | Update operations dashboards. | Current status records. |

## Codex Workflow

- Provide the approved brief, sources, and acceptance criteria.
- Keep application changes scoped to the requested article.
- Avoid unrelated UI, routing, or architecture changes.
- Review the diff before committing.

## Build

- Run the project build before publishing when application files change.
- Record failures and fixes in the task notes.
- Do not publish known broken routes or pages.

## QA

- Confirm article accuracy.
- Confirm links and disclosures.
- Confirm mobile readability.
- Confirm metadata and structured content where applicable.

## Deployment

- Deploy only after QA passes.
- Confirm the live page URL.
- Add the live URL to the content calendar.

## Indexing

- Check Google Search Console.
- Check Bing Webmaster Tools.
- Record index status in `CONTENT_CALENDAR.md`.
- Recheck unindexed pages during weekly review.

