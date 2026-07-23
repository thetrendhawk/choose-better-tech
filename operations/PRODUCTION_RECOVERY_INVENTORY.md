# Choose Better Tech Production Recovery Inventory

**Status:** Initial non-secret inventory; evidence-gathering document  
**Owner:** Choose Better Tech  
**Review date:** 2026-07-23  
**Authoritative rule:** UNKNOWN means the repository does not prove the control. It does not mean the control is absent.

## Security boundary

This inventory contains no passwords, tokens, API keys, secret values, raw affiliate URLs, account IDs, recovery codes, private email addresses, or sensitive personal information. Environment variables are listed by name only. Platform access is described by platform and role only.

## Readiness legend

- **Ready:** Required recovery path is documented and supported by current evidence.
- **Partially ready:** Some recovery steps or evidence exist, but one or more material dependencies remain unverified.
- **Not ready:** A required capability is known to be absent or cannot currently be executed from the documented system.
- **Unknown:** The repository does not establish whether the capability exists.

## A. GitHub

| Field | Inventory | Readiness |
|---|---|---|
| Repository owner | `thetrendhawk/choose-better-tech` | Ready |
| Default branch | `main` | Ready |
| Current repository evidence | Current `origin/main` is `73cc4c4` at review time | Ready |
| Branch protection | Repository documentation records required PR workflow, restricted deletion, and blocked force-pushes; exact live ruleset/status-check configuration is not independently reproduced here | Partially ready |
| Local clone/recovery method | Clone the public repository from its documented GitHub source, then verify the expected remote, branch, and commit before recovery work | Partially ready |
| Backup or mirror | Owner confirms no independent repository mirror or backup currently exists | Not ready |
| Access ownership | Primary GitHub repository ownership: Choose Better Tech; individual access holder is not recorded | Unknown |
| Recovery contact/alternate operator | Aaron is currently the sole operator and sole recovery authority; no alternate operator exists | Not ready |
| Secret scanning/dependency alerts | No current GitHub alert-status evidence is recorded | Unknown |
| Recovery gaps | Verify live branch rules, owner access, alternate operator, alerts, and an independent mirror without placing secrets in the repo | Not ready |

## B. Vercel

| Field | Inventory | Readiness |
|---|---|---|
| Project identity | Choose Better Tech Vercel project; exact project/account identifiers intentionally omitted | Partially ready |
| Production branch | `main` | Ready |
| Deployment trigger path | Merge to `main` is the documented production path; platform trigger configuration is not independently evidenced | Partially ready |
| Manual deployment fallback | Existing records document manual production deployment when the expected trigger after PR #54 was missed | Partially ready |
| Missed PR #54 trigger | Trigger was missed, detected, and corrected manually; no root cause is established | Partially ready |
| Project access ownership | Owner/platform role is not recorded | Unknown |
| Environment variable names | `OPTERY_AFFILIATE_URL` is documented as a runtime-only private value; other production variable names are not inventoried here | Partially ready |
| Domains attached | Canonical production domain is `choosebettertech.com`; exact Vercel attachment/configuration is not independently reproduced | Partially ready |
| Rollback/redeploy method | Policy and publishing contract require rollback/kill-switch handling; a completed rollback drill is not evidenced | Partially ready |
| Recovery gaps | Verify project access, trigger settings, all variable names, domain attachment, redeploy/rollback steps, and restore evidence | Not ready |

## C. Domain and DNS

| Field | Inventory | Readiness |
|---|---|---|
| Canonical production domain | `choosebettertech.com` | Ready |
| Registrar | IONOS | Partially ready |
| DNS provider | IONOS | Partially ready |
| Redirect/migration dependencies | Old-domain redirect and Google Change of Address are documented as active/completed owner-confirmed migration dependencies | Partially ready |
| Ownership and renewal responsibility | Not recorded | Unknown |
| DNS recovery requirements | Registrar access, nameserver control, exportable records, TTL plan, and certificate/hosting coordination are required | Unknown |
| Nameserver/export/record backup | No export or backup evidence found; IONOS records still require export and secure retention | Not ready |
| Domain expiration monitoring | No monitoring record found | Unknown |
| Recovery gaps | Identify registrar/DNS owner, export records, document renewal monitoring, and test recovery without changing live DNS | Not ready |

## D. Analytics and search platforms

| Platform | Known evidence | Recovery/readiness |
|---|---|---|
| GA4 | Site has an analytics integration and explicit `affiliate_click` delivery through `window.gtag` or compatible `dataLayer`; direct event delivery was verified in Realtime after the PR #54/PR #57 incident | Partially ready |
| GA4 ownership/access | Google account controls GA4 and Google Search Console; MFA is confirmed enabled and currently depends on the owner's phone. Secondary recovery method, alternate access, report configuration, and measurement identifier remain unrecorded | Partially ready |
| Google Search Console | Search baseline and Change of Address evidence are recorded; current owner/access and recovery path are not recorded | Partially ready |
| Bing Webmaster/IndexNow | IndexNow submissions and key hosting are documented; Bing receipt/indexing and account recovery are not fully evidenced | Partially ready |
| Measurement identifiers | Intentionally omitted from this inventory | Ready |
| Recovery requirements | Preserve property ownership, event definitions, reporting configuration, Search Console verification, sitemap submission path, and alternate access privately; verify secondary Google recovery methods | Partially ready |
| Reporting ownership gaps | No named reporting owner or recurring export/reconciliation record is evidenced | Not ready |

## E. Affiliate and partner platforms

| Area | Inventory | Readiness |
|---|---|---|
| Networks used | CJ, MaxBounty, PartnerStack, Awin, Impact, and direct programs appear in the documented affiliate records; active product mappings include Proton VPN CJ, Proton Mail CJ, Proton Pass MaxBounty, Proton Drive CJ, and Proton Unlimited MaxBounty | Partially ready |
| Product-level mapping | Central registry and affiliate playbook are authoritative for implemented product mappings | Ready |
| Private redirect dependencies | Optery uses an internal redirect dependent on a private runtime environment value; value is not stored in the repo | Partially ready |
| Access ownership | Aaron is currently the sole operator and sole recovery authority; network-specific alternate access is not recorded | Partially ready |
| Payment/profile recovery | Payment, tax, profile, payout, and recovery details are intentionally not stored in the repository and are not evidenced as privately documented | Unknown |
| Destination recovery | Central registry preserves implemented destinations without exposing them here; network-side regeneration and link-health history are not evidenced | Partially ready |
| Commission-history recovery | No approved/paid commission ledger or statement archive is evidenced | Not ready |
| Recovery gaps | Maintain a private, access-controlled record of network ownership, payout recovery, terms, destination regeneration, and historical statements | Not ready |

## F. Application and data

| Asset | Authority/status | Recovery treatment |
|---|---|---|
| Source repository | GitHub repository and `main` history | Must be backed up or mirrored; clone verification required |
| Route manifests | Source route data plus generated `vercel.json` parity checked by `check:generated-routes` | Source is authoritative; generated route file is reproducible and should be retained for review |
| Sitemap/SEO artifacts | Generated by `scripts/generate-seo-files.mjs` during build | Regenerable from source; verify generated output after recovery |
| Content/research/operations records | Markdown and source files in the repository | Must be backed up; these are authoritative records unless a document says otherwise |
| Generated artifacts | Build output, generated sitemap/robots and deployment artifacts | Regenerable; production verification records should be retained as evidence |
| Affiliate registry | `src/data/affiliateLinks.ts` plus playbook/registry documentation | Registry source is authoritative; private destinations must not be copied into this inventory |
| Environment values | Runtime/platform configuration, including private redirect values | Values are not repo-backed; back up names and ownership privately, never values here |
| What must be backed up | Repository, issue/PR evidence, operations records, research records, private configuration inventory, DNS export, analytics/search ownership instructions, partner statement archive | Not ready until external records are confirmed |
| What can be regenerated | Dependencies from lockfile, build output, generated SEO files, generated Vercel routes, local test output | Ready as a process; validate after regeneration |

## G. Credentials and access

| Platform | Role/owner | Recovery method documented | MFA | Alternate operator | Last access verification |
|---|---|---:|---:|---:|---|
| GitHub | Repository owner/admin role | Unknown | Yes; authenticator app | No | Owner-confirmed, date not recorded |
| Vercel | Project owner/admin role | Unknown | Yes | No | Owner-confirmed, date not recorded |
| Registrar | Domain owner/admin role at IONOS | Unknown | Yes | No | Owner-confirmed, date not recorded |
| DNS provider | DNS administrator role at IONOS | Unknown | Yes | No | Owner-confirmed, date not recorded |
| GA4 | Google account property administrator/editor role | Unknown | Yes; phone plus a configured passkey | No | Owner-confirmed, date not recorded |
| Google Search Console | Google account property owner/full-user role | Unknown | Yes; phone plus a configured passkey | No | Owner-confirmed, date not recorded |
| Bing Webmaster/IndexNow | Webmaster owner role | Unknown | Unknown | Unknown | Unknown |
| CJ | Publisher/account role | Unknown | Unknown | Unknown | Unknown |
| MaxBounty | Affiliate account role | Unknown | Yes | No | Owner-confirmed, date not recorded |
| PartnerStack/Awin/Impact/direct programs | Publisher/account role as applicable | Unknown | Unknown | Unknown | Unknown |

No secret values are recorded. Every UNKNOWN requires owner confirmation outside the repository.

## H. Incident ownership

| Control | Current evidence | Readiness |
|---|---|---|
| Primary owner | Aaron / Choose Better Tech | Ready |
| Alternate owner | No alternate operator; Aaron is sole recovery authority | Not ready |
| Escalation path | Platform/network support paths are not assembled in one private record | Unknown |
| Decision authority | Owner is the implied decision authority; formal emergency authority record is absent | Partially ready |
| Rollback authority | Not separately assigned; policy requires stopping/rollback when production verification fails | Partially ready |
| Communication record | PRs, changelog, and operations records provide internal evidence; incident contact tree is absent | Partially ready |
| Post-incident documentation | Publishing contract requires recording production verification and failures; a reusable incident report template is not evidenced | Partially ready |

## Inventory gaps requiring owner input

The repository proves the existence of documentation and code paths, not account-level access, backups, MFA, or restore capability. Until the owner answers the checklist in the readiness audit and private answers are stored securely, those areas remain UNKNOWN.
