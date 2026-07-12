# Choose Better Tech Independent Review Protocol

Version: 1.0
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-12

## Author Role

The author may research, draft, implement, document evidence, and disclose limitations.

The author may not give final independent approval to their own work.

## Reviewer Role

The reviewer must begin from the evidence rather than inherit the author's conclusion as true. The reviewer must:

- challenge the main verdict;
- recheck Critical claims;
- examine excluded candidates;
- check affiliate bias;
- check unsupported certainty;
- check duplicate intent;
- inspect visible sources;
- verify testing disclosure;
- score the article under `operations/ARTICLE_QUALITY_SCORECARD.md`;
- identify reasons to reject;
- approve only after deficiencies are resolved.

## Reviewer Independence

Where automation is used:

- author and reviewer must be separate passes;
- the reviewer prompt must not ask for confirmation;
- the reviewer must receive the article, research record, claim ledger, scorecard, and binding standards;
- the reviewer must be explicitly instructed to falsify or challenge conclusions.

## Required Reviewer Report

Store the report at:

`docs/quality/<slug>-independent-review.md`

It must contain:

- Main verdict challenged;
- Critical claims rechecked;
- Excluded candidates reconsidered;
- Affiliate-bias check;
- Methodology check;
- Source-quality check;
- Testing-transparency check;
- Duplicate-intent check;
- Reader-value check;
- Code-quality check;
- Required corrections;
- Final reviewer decision.

Allowed reviewer decisions:

- `REJECT`;
- `RETURN FOR CORRECTION`;
- `APPROVE FOR DEPLOYMENT`.

## Final Approval

The author cannot replace the independent reviewer. Deployment is blocked until the reviewer gives `APPROVE FOR DEPLOYMENT` and all scorecard gates pass.
