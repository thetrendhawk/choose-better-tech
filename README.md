# Choose Better Tech

Choose Better Tech (CBT) is an independent software review, comparison, and buying-guide publication. It helps beginner and mainstream software buyers make better decisions through evidence-based reviews, comparisons, buying guides, and educational content.

Production site: **https://choosebettertech.com**

## Mission

CBT exists to help readers make better software decisions. Every review, comparison, and guide is produced through a research-first, evidence-based process, and every piece is required to make a genuine original contribution rather than restate marketing copy.

Affiliate availability and commission rates do not affect coverage, rankings, verdicts, or recommendations. A provider offering a lucrative affiliate program creates no presumption of favorable treatment, and a provider with no monetization path at all can still be covered, ranked, and recommended on its merits. Editorial and commercial decisions are made independently of each other, and that separation is enforced by written standards, not just intent.

## Current editorial areas

CBT currently publishes in the following clusters:

- **VPNs** — reviews, comparisons, and buying guides
- **Password managers** — reviews, comparisons, and buying guides
- **Data-removal services** — reviews, comparisons, and buying guides
- **Cloud storage** — reviews, comparisons, and buying guides
- **Cybersecurity tools** (antivirus and adjacent categories) — an approved cluster currently in progress

Any additional topic cluster (for example, AI productivity software) requires formal approval under the repository's topic-cluster process before research or drafting begins. See `operations/TOPIC_CLUSTER_APPROVAL_POLICY.md`.

## Technical stack

- **React 19**
- **Vite 6**
- **TypeScript**
- **React Router 7**
- **Tailwind CSS**
- **Vercel** (hosting and deployment)

CBT is a static, client-rendered single-page application. There is no server-side rendering and no backend, database, CMS, or authentication layer. SEO relies on build-time generation of static assets: the build step (`npm run build`) runs `scripts/generate-seo-files.mjs` before compiling, which produces `robots.txt`, `sitemap.xml`, and related SEO files ahead of the Vite production build. Canonical URLs and metadata are generated per route at build time rather than rendered dynamically per request. Search-engine indexing of individual pages is monitored but not guaranteed by this architecture, and is tracked as a distinct, separately verified status in the operations records rather than assumed from sitemap or IndexNow submission alone.

## Repository structure

```
src/components   shared UI, layout pieces, and homepage cards
src/pages        route-level pages
src/layouts      site shell layout
src/data         article/comparison/review content and the centralized affiliate registry
src/utils        site constants, SEO helpers, analytics, and the affiliate resolver
src/assets       static visual assets imported by the app
src/styles       global Tailwind and base styles
src/types        shared TypeScript types
public           static SEO files such as robots.txt and sitemap.xml
docs/research     per-article and cluster research records
docs/quality      per-article claim ledgers, independent reviews, and quality scorecards
docs/monetization per-cluster and per-article monetization opportunity research
docs/strategy     cluster-approval and strategic decision records
docs/audits       sitewide and cluster quality audits
docs/editorial    editorial-process working documents
operations        canonical operating standards, governance policies, and business records
.github           pull request template and repository automation
```

## Editorial and publishing governance

CBT publishes under a binding set of operational standards designed to keep coverage evidence-based and editorially independent of commercial pressure. In outline, the process for any substantial article is:

1. **Research before drafting.** A dedicated research record is produced and reviewed before any article content is written.
2. **Critical/High claim ledger.** Every Critical or High-impact factual claim is logged with its source, checked date, and reviewer status before it can appear in published content.
3. **Original-contribution requirement.** Content must add genuine analysis, synthesis, or evidence beyond restating vendor marketing material.
4. **Independent review.** Research and drafts are reviewed by a separate reviewing pass before publication, with an explicit decision (approve, return for correction, or reject).
5. **Article quality scorecard.** Published articles are scored against a fixed quality rubric before deployment is authorized.
6. **Branch and pull-request workflow.** Substantial content changes use a dedicated branch and pull request rather than direct commits to `main`; the repository's `main` ruleset requires pull requests and blocks force pushes and branch deletion.
7. **Build and validation checks.** Lint, TypeScript build, and diff checks must pass before merge.
8. **Production deployment and live QA.** After merge, production deployment is verified against the live site, including canonical URLs, schema, sitemap entries, and responsive/structural checks.
9. **Corrections and volatile-claim monitoring.** Claims that are likely to change (pricing, plan details, policy terms, and similar) are tracked in a volatile-claims register and rechecked on a defined cadence; corrections follow a documented policy.
10. **Monetization as a separate parallel workstream.** Commercial research (affiliate programs, networks, terms, and account status) is conducted and recorded separately from editorial decisions, and is required to pass a Monetization Independence Check before and after any related editorial work.

The full standards are in `operations/`; see "Canonical documentation" below for direct links.

## Affiliate implementation rule

- Raw affiliate destinations are centralized in `src/data/affiliateLinks.ts`. Articles, guides, hubs, and comparisons must not hard-code raw affiliate URLs.
- Affiliate-program approval or account creation does not, by itself, authorize link placement, editorial mention, or ranking influence. Each of those is a separate, explicitly authorized step.
- Affiliate links are implemented only after editorial need is established independently, program terms are verified, and a separate implementation task is authorized. See `operations/AFFILIATE_PLAYBOOK.md` for current per-provider status.

## Canonical documentation

- [Editorial Standards](operations/EDITORIAL_STANDARDS.md)
- [Research and Evidence Standard](operations/RESEARCH_AND_EVIDENCE_STANDARD.md)
- [Publishing Workflow](operations/PUBLISHING_WORKFLOW.md)
- [Automation Publishing Contract](operations/AUTOMATION_PUBLISHING_CONTRACT.md)
- [Monetization Research Standard](operations/MONETIZATION_RESEARCH_STANDARD.md)
- [Affiliate Playbook](operations/AFFILIATE_PLAYBOOK.md)
- [Content Dashboard](operations/CONTENT_DASHBOARD.md)
- [Project Status](operations/PROJECT_STATUS.md)
- [Roadmap](operations/ROADMAP.md)
- [Changelog](operations/CHANGELOG.md)
- [Article Quality Scorecard standard](operations/ARTICLE_QUALITY_SCORECARD.md)
- [Claim Ledger Standard](operations/CLAIM_LEDGER_STANDARD.md)
- [Independent Review Protocol](operations/INDEPENDENT_REVIEW_PROTOCOL.md)

Note: the article-quality scorecard, claim-ledger, and independent-review *standards* live under `operations/`, as linked above. `docs/quality/` holds the completed, per-article outputs produced under those standards (for example, `docs/quality/best-secure-cloud-storage-quality-scorecard.md`), not the standards themselves.

## Local setup and commands

```bash
npm install       # install dependencies
npm run dev        # start the Vite development server
npm run build       # generate SEO files, type-check, and build for production
npm run preview      # preview the production build locally
npm run lint       # run ESLint
```

## Deployment

Production deploys run on Vercel from `main` using the default Vite settings (build command `npm run build`, output directory `dist`). The `SITE_URL` environment variable controls canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`.
