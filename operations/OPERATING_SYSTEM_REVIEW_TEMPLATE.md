# Operating System Review Template

Use this review to identify missing systems, weak systems, hidden assumptions, and processes that will not scale safely. Complete it quarterly, before duplicating the platform, and after any material operational failure.

Review date:

Reviewer:

Scope:

## Executive findings

### Critical now

- None identified / findings:

### Important before scale

- None identified / findings:

### Optimization later

- None identified / findings:

### Unnecessary complexity

- None identified / findings:

## System inventory

For each system, record a maturity level from 1–7:

1. Absent
2. Ad hoc
3. Documented
4. Tested
5. Measured
6. Repeatable
7. Scalable

| System | Maturity | Owner | KPI | Failure signal | Validation | Review cadence | Recovery documented? | Portable? | Findings/actions |
|---|---:|---|---|---|---|---|---|---|---|
| Strategy and niche selection | | | | | | | | | |
| Audience, positioning, and brand | | | | | | | | | |
| Research and evidence | | | | | | | | | |
| Editorial production and review | | | | | | | | | |
| SEO, indexing, and discovery | | | | | | | | | |
| Architecture and routing | | | | | | | | | |
| Accessibility and user experience | | | | | | | | | |
| Performance and reliability | | | | | | | | | |
| Security, backup, and recovery | | | | | | | | | |
| Analytics and attribution | | | | | | | | | |
| Affiliate and partner management | | | | | | | | | |
| Legal, disclosure, privacy, and corrections | | | | | | | | | |
| Publishing, deployment, and rollback | | | | | | | | | |
| Testing and site audits | | | | | | | | | |
| Revenue, costs, and profitability | | | | | | | | | |
| Documentation and knowledge transfer | | | | | | | | | |
| Duplication and portfolio operations | | | | | | | | | |

## Outcome-chain review

| Stage | Current measurement | Result | Target/expectation | Gap | Responsible system | Next action |
|---|---|---:|---:|---|---|---|
| Published pages | | | | | | |
| Indexed pages | | | | | | |
| Search impressions | | | | | | |
| Qualified visits | | | | | | |
| Engaged readers | | | | | | |
| Affiliate/commercial actions | | | | | | |
| Partner-recorded conversions | | | | | | |
| Collected revenue | | | | | | |
| Profit after operating costs | | | | | | |

## Unknown-unknowns questions

Answer with evidence where possible.

1. What important area has not been discussed recently?
2. What are we assuming without evidence?
3. What could fail while the website still appears to work?
4. What metric could be giving false confidence?
5. What process depends on one person’s memory?
6. What knowledge exists only in chat history?
7. What current process would become unreasonable across five sites?
8. What data, credentials, claims, or destinations are improperly hardcoded?
9. What official guidance or mature external practice contradicts our current method?
10. What are we overengineering?
11. What are we underengineering because it has not failed yet?
12. What single failure would cause the greatest financial, legal, reader-trust, or operational harm?

## Portfolio-readiness check

- [ ] Brand identity can be replaced from explicit configuration.
- [ ] Canonical domain and SEO defaults are isolated.
- [ ] Analytics identifiers are project-specific and separable.
- [ ] Affiliate partners and destinations are project-specific and separable.
- [ ] Legal and disclosure language is reviewed for the new project.
- [ ] Production credentials are absent from the reusable foundation.
- [ ] Topic clusters and navigation can be replaced without structural rewrites.
- [ ] Shared components contain no hidden CBT-specific assumptions.
- [ ] Tests can detect residual CBT names, URLs, IDs, and content.
- [ ] A new GitHub/Vercel deployment can be configured independently.
- [ ] Documentation is sufficient for another operator to launch the duplicate.
- [ ] The duplicate passes the standard validation and production audit.

## Decisions and actions

| Priority | Action | Owner | Due/review date | Completion evidence |
|---|---|---|---|---|
| | | | | |

## Review conclusion

Overall system maturity:

Safe to continue current operation? Yes / No / Conditional

Safe to scale content volume? Yes / No / Conditional

Safe to duplicate into another site? Yes / No / Conditional

Reasoning:
