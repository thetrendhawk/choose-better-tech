# Choose Better Tech Production Recovery Runbook

**Purpose:** Controlled, non-secret recovery procedures for the current Choose Better Tech production system.  
**Owner:** Choose Better Tech  
**Safety rule:** Stop when an UNKNOWN affects authorization, data integrity, domain control, credentials, or a production decision. Do not improvise credentials, destinations, DNS records, or analytics identifiers.

## General incident controls

1. Record UTC time, detector, affected system, current production commit/URL, and the decision owner.
2. Contain before changing state. Preserve logs, screenshots, deployment records, and the failing command/result without recording secrets.
3. Use the smallest authorized recovery action. Never test rollback, DNS, environment, credential, or affiliate changes on live production without owner approval.
4. Validate the exact recovered surface, then record the result in the PR/changelog/incident record.
5. Stop and escalate if access, ownership, destination, domain, or data integrity is UNKNOWN.

## 1. GitHub repository access loss

- **Detection:** Owner cannot authenticate, clone, view the repository, or push an authorized branch.
- **Immediate containment:** Stop repository changes; do not create replacement credentials in chat or commit local secrets.
- **Recovery steps:** Use the privately maintained GitHub recovery method; authenticate with the repository owner/admin role; verify repository, remote, default branch, and latest `main` commit; restore alternate operator access if authorized.
- **Required evidence:** Access restoration timestamp, verified repository URL, branch/commit comparison, and audit-log/reference number without tokens.
- **Validation:** Fresh conceptual clone from the documented source; `git remote -v`; verify `main` and expected commit; run no production action until access is confirmed.
- **Rollback/stop:** Stop if owner identity, MFA, or repository ownership cannot be verified.
- **Owner:** Choose Better Tech; alternate operator UNKNOWN.
- **UNKNOWNs:** Backup mirror, alternate operator, MFA, alert status, private recovery contact.

## 2. Local workstation loss

- **Detection:** Workstation unavailable, disk failure, malware, or loss of local uncommitted work.
- **Immediate containment:** Revoke/rotate affected device sessions privately if compromise is possible; do not copy secrets to a replacement machine.
- **Recovery steps:** Provision a clean machine; clone the documented repository; verify `main` and remote; install dependencies from the lockfile; regenerate build/route artifacts; restore only approved private configuration through the platform’s secure mechanism.
- **Required evidence:** Clean-machine date, commit checked out, dependency install result, generated-route/build result, and private configuration checklist status.
- **Validation:** `npm run build`, `npm run check:generated-routes`, and appropriate tests after owner authorization; verify no secrets entered the repository.
- **Rollback/stop:** Stop if source integrity, dependency provenance, or private configuration ownership is UNKNOWN.
- **Owner:** Choose Better Tech; alternate operator UNKNOWN.
- **UNKNOWNs:** Off-device backup, recovery machine, environment-name inventory, MFA, alternate operator.

## 3. Vercel deployment failure

- **Detection:** Deployment fails, never reaches Ready, serves the wrong commit, or production route checks fail.
- **Immediate containment:** Stop further merges/deployments for the affected change; preserve deployment logs and commit references.
- **Recovery steps:** Confirm `main` commit and deployment target; inspect the platform failure; use the documented manual deployment fallback only with owner authorization; redeploy the known-good commit if required.
- **Required evidence:** Commit, deployment status, failure category, deployment URL without private identifiers, route check results, and decision owner.
- **Validation:** Production HTTP/deep-route, canonical, sitemap/robots, build, and relevant browser checks as risk requires.
- **Rollback/stop:** Roll back or stop if production serves a bad commit, broken routes, invalid configuration, or failed verification. Do not claim a root cause without platform evidence.
- **Owner:** Choose Better Tech; Vercel project access owner UNKNOWN.
- **UNKNOWNs:** Trigger settings, project access, rollback permissions, deployment logs retention.

## 4. Main branch ahead of production

- **Detection:** `origin/main` contains a commit not represented by the production deployment.
- **Immediate containment:** Do not assume the gap is a failure; freeze additional production changes and record both commits.
- **Recovery steps:** Identify whether the deployment is pending, failed, or intentionally delayed; inspect the platform status; use authorized manual deployment only after confirming the intended commit and approvals.
- **Required evidence:** Main commit, production commit, deployment status, approval record, and reason for divergence.
- **Validation:** Confirm production serves the intended commit and run the relevant route/build/production checks.
- **Rollback/stop:** Stop if intended commit, approval, or production identity is UNKNOWN.
- **Owner:** Choose Better Tech.
- **UNKNOWNs:** Automatic trigger reliability and live deployment metadata access.

## 5. Bad production deployment

- **Detection:** Broken route, incorrect canonical/metadata, runtime error, failed affiliate/analytics behavior, or failed production QA.
- **Immediate containment:** Stop promotion; preserve the failing commit and evidence; activate the existing rollback/kill-switch policy when its trigger criteria are met.
- **Recovery steps:** Identify last known-good verified commit; obtain owner authorization; roll back or redeploy that commit through the approved platform path; record the incident and affected surface.
- **Required evidence:** Failure reproduction, bad and good commit, deployment records, rollback authorization, validation output.
- **Validation:** Exact affected route plus appropriate sitewide route/build/analytics/affiliate checks.
- **Rollback/stop:** Stop if no known-good commit, rollback authority, or production access is confirmed.
- **Owner:** Choose Better Tech; alternate rollback owner UNKNOWN.
- **UNKNOWNs:** Tested rollback execution, recovery time objective, communication tree.

## 6. Missing or invalid environment configuration

- **Detection:** Runtime redirect/configuration fails safely, deployment reports missing configuration, or a feature requiring private runtime configuration is unavailable.
- **Immediate containment:** Do not print, copy, or infer secret values; disable the affected feature if the existing safe-failure behavior permits.
- **Recovery steps:** Confirm the variable name and intended environment privately; restore the value through Vercel’s secure configuration; redeploy/revalidate only with owner authorization.
- **Required evidence:** Variable name, environment, non-secret validation result, deployment commit, and owner approval.
- **Validation:** Confirm expected safe success/failure behavior without exposing the value; verify no value appears in logs, source, or PR.
- **Rollback/stop:** Stop if the variable owner, value source, or environment is UNKNOWN.
- **Owner:** Choose Better Tech; Vercel access owner UNKNOWN.
- **UNKNOWNs:** Complete variable-name inventory, backup/recovery source, rotation schedule.

## 7. Domain or DNS failure

- **Detection:** Canonical domain unavailable, wrong host served, redirect/migration failure, certificate issue, or DNS resolution mismatch.
- **Immediate containment:** Do not change nameservers or records from an unverified instruction; preserve DNS observations and hosting status.
- **Recovery steps:** Verify registrar and DNS ownership; compare current records to a trusted private export; restore only the minimum authorized record set; coordinate hosting/certificate validation.
- **Required evidence:** Resolver results, registrar/DNS status, private export reference, change authorization, propagation timestamps.
- **Validation:** Canonical root, key deep routes, redirects, HTTPS, sitemap, robots, and Search Console implications.
- **Rollback/stop:** Stop if registrar/DNS ownership or known-good export is unavailable.
- **Owner:** Choose Better Tech; registrar/DNS owner UNKNOWN.
- **UNKNOWNs:** Provider, nameserver export, renewal monitoring, TTL plan, alternate DNS operator.

## 8. Analytics event failure

- **Detection:** Expected `affiliate_click` absent in GA4 Realtime or event parameters are incomplete.
- **Immediate containment:** Preserve the affected page, commit, browser/network evidence, and GA4 observation; do not install a second tag or change the measurement property.
- **Recovery steps:** Verify the shared tracking implementation prefers `window.gtag` and falls back to the existing compatible `dataLayer`; compare deployed commit; correct through the normal PR workflow only.
- **Required evidence:** Event name and parameter names, delivery path, environment, timestamp, and Realtime confirmation; never record measurement IDs.
- **Validation:** One genuine CTA click produces one event with provider, destination, URL, text, and page-path parameters; non-affiliate/fallback actions produce none.
- **Rollback/stop:** Stop if the property, tag ownership, or deployed commit is unknown. Do not infer a business attribution failure from missing local instrumentation alone.
- **Owner:** Choose Better Tech; GA4 owner/reporting owner UNKNOWN.
- **UNKNOWNs:** Custom dimensions/key events, report ownership, retention, conversion reconciliation.

## 9. Affiliate redirect failure

- **Detection:** Approved CTA does not resolve, internal redirect returns safe failure, destination is invalid, or partner landing page is unavailable.
- **Immediate containment:** Preserve the registry record and failing response; do not paste or replace private tracked destinations in an issue or PR.
- **Recovery steps:** Confirm product/network mapping in the centralized registry; verify destination through the authorized network account privately; for private redirects, verify the named runtime variable without exposing its value; use a known-good approved destination only through an authorized change.
- **Required evidence:** Product, network, route/CTA, status code, registry status, validation timestamp, and owner approval.
- **Validation:** CTA navigation, safe fallback behavior, disclosure/status wording, and exactly one event where applicable.
- **Rollback/stop:** Stop if network approval, destination provenance, or private configuration is UNKNOWN.
- **Owner:** Choose Better Tech; network account owner UNKNOWN.
- **UNKNOWNs:** Link-health monitoring, destination regeneration, terms freshness, partner-side conversion receipt.

## 10. Lost access to an affiliate network

- **Detection:** Cannot authenticate, view program terms, retrieve destination, or access statements.
- **Immediate containment:** Pause affected activation/reconciliation decisions; do not fabricate a link or expose account details.
- **Recovery steps:** Use the privately documented network recovery path; restore publisher access; verify product approvals, terms, destinations, payout profile, and statement history; update only authorized private records.
- **Required evidence:** Network, role, recovery timestamp, approval/terms verification, and statement-retrieval result without identifiers.
- **Validation:** Registry remains accurate; affected CTAs are either verified or safely paused; no editorial conclusion changes solely because access was lost.
- **Rollback/stop:** Stop if account ownership, approval, payout, or destination provenance cannot be verified.
- **Owner:** Choose Better Tech; alternate network operator UNKNOWN.
- **UNKNOWNs:** MFA, recovery contact, payout recovery, statement archive, terms refresh cadence.

## 11. Credential compromise

- **Detection:** Suspicious login, alert, leaked secret, unauthorized change, malware, or unexplained platform activity.
- **Immediate containment:** Isolate affected session/device; revoke/rotate credentials through the platform; preserve non-secret evidence; stop deployments, DNS, redirects, and payout changes until authorized.
- **Recovery steps:** Follow platform incident support; rotate affected credentials and sessions; verify MFA and alternate access; inspect repository/deployment/DNS/analytics/affiliate changes; restore known-good configuration if needed.
- **Required evidence:** Timeline, affected platform/role, actions, authorization, audit-log references, validation, and notification decisions. Never record secret values.
- **Validation:** Access review, MFA confirmation, clean deployment/configuration comparison, domain/analytics/affiliate integrity checks.
- **Rollback/stop:** Stop all nonessential changes if scope or decision authority is unknown.
- **Owner:** Choose Better Tech; incident alternate UNKNOWN.
- **UNKNOWNs:** Incident contact tree, retention, legal/privacy notification criteria, backup integrity.

## 12. Full-site recovery from a clean machine

- **Detection:** Workstation and/or production project unavailable, with repository still recoverable or source backup available.
- **Immediate containment:** Establish a clean machine and preserve the last known-good commit; do not reconnect compromised credentials.
- **Recovery steps:** Clone source; verify commit and remote; install locked dependencies; regenerate SEO and route artifacts; run build and route parity checks; restore platform access/configuration privately; verify domain, analytics, Search Console, affiliate registry, and production deployment in that order.
- **Required evidence:** Source commit, generated-artifact checks, platform-access confirmations, deployment commit, domain/analytics/search/affiliate verification, and owner approvals.
- **Validation:** Build, route parity, key production routes, canonical/metadata, sitemap/robots, analytics event behavior, affiliate safe behavior, and required browser checks.
- **Rollback/stop:** Stop if source integrity, domain ownership, environment provenance, or platform access is UNKNOWN. Do not declare recovery complete on a local build alone.
- **Owner:** Choose Better Tech; alternate operator UNKNOWN.
- **UNKNOWNs:** Independent source mirror, recovery environment, platform credentials/MFA, DNS export, private configuration backup, recovery time objective.

## Recovery completion record

Every completed recovery must record: incident ID, UTC start/end, owner, affected systems, detection, containment, authorized changes, commits/deployments, validation evidence, unresolved UNKNOWNs, user/business impact, and follow-up owner. Do not store secrets or private tracked destinations in the record.
