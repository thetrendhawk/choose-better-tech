# Production Validation — Do You Still Need Antivirus on Windows 11?

Date: 2026-07-20
Status: Technical and source validation complete; human visual review still required
Related issue: #38
Related PR: #39
Branch: `content/windows-11-antivirus-need-assessment`
Current validated head before final report update: `4bef9beddc6f039190fb1688c4380075677f2224`

## Scope

Validate the focused production implementation for:

- exact application route;
- canonical route inventory and sitemap inclusion;
- Vercel HTTP routing behavior;
- title and description metadata wiring;
- Article, BreadcrumbList, and FAQ structured data wiring;
- editorial controls from PR #37;
- Vercel build and deployment status;
- preview runtime errors available through Vercel logs;
- same-day refresh of volatile Microsoft and AV-TEST claims.

## Verified

### Route and production page

- Application route: `/guides/do-you-still-need-antivirus-on-windows-11`.
- The route lazy-loads `DoYouStillNeedAntivirusOnWindows11Page`.
- The production page uses the exact same path constant for SEO and structured data.
- The page compiled into a dedicated lazy-loaded production asset during the Vercel build.

### Vercel HTTP routing defect found and fixed

- After preview authentication was temporarily disabled, the exact article URL initially returned the SPA shell with HTTP `404`.
- Root cause: `vercel.json` had not been regenerated after the new route was added. The route was present in React, `src/routes.manifest.mjs`, and the sitemap, but absent from the Vercel allowlist regex, so the request fell through to the catch-all 404 rule.
- Fix: added `guides/do-you-still-need-antivirus-on-windows-11` to the explicit Vercel route allowlist.
- Fix commit: `4bef9beddc6f039190fb1688c4380075677f2224`.
- Vercel rebuilt successfully.
- Exact preview URL retest returned HTTP `200 OK`.
- This defect would have been an indexing and publication blocker if left unresolved.

### SEO and structured data

- Title: `Do You Still Need Antivirus on Windows 11?`
- Description remains a non-commercial need assessment.
- Shared `SEO` component receives the exact route path, title, and description.
- Article schema includes headline, description, publication/modification date, organization author/publisher, and exact `mainEntityOfPage`.
- BreadcrumbList schema includes Home and the exact guide URL.
- FAQPage schema is generated from the same FAQ content rendered on the page.

### Route inventory

- The exact route is present once in `src/routes.manifest.mjs`.
- The exact route is present in the Vercel route allowlist.
- The generated sitemap contains the exact canonical URL once.
- Sitemap inventory increased from 66 to 67 application routes.

### Editorial boundaries

- Explicit disclosure says CBT did not install or personally test the products.
- No product ranking, product table, named paid winner, affiliate CTA, or tracked provider destination appears.
- Product-selection intent links to `/best-antivirus-software`.
- Consumer guidance is separated from business and regulated security needs.
- Identity monitoring and support services are not represented as stronger malware prevention.
- AV-TEST wording is limited to the March–April 2026 Windows 11 home-user cycle.

### Same-day volatile-claim refresh

Microsoft documentation checked on 2026-07-20 still supports that:

- Microsoft Defender Antivirus is built into supported Windows versions;
- a compatible third-party antivirus may become the active provider;
- Defender can return when no other working security product is present;
- Microsoft advises against simultaneously running multiple real-time security products;
- Windows Security includes virus/threat protection and optional Controlled Folder Access ransomware-related controls.

AV-TEST still reports that Microsoft Defender Antivirus Consumer 4.18 received 6/6 for protection, 6/6 for performance, and 6/6 for usability in its March–April 2026 Windows 11 test cycle. The page does not convert that bounded result into a permanent or multi-lab superiority claim.

### Build and deployment

- Vercel deployment state: READY.
- Vite production build completed successfully after the route correction.
- Dedicated article asset generated: `DoYouStillNeedAntivirusOnWindows11Page-*.js`.
- Exact article URL returns HTTP `200 OK`.
- No preview runtime error or fatal logs were returned for the deployment during the checked window.

## Not independently verified in this environment

The available connector can inspect source, deployment state, HTTP response, build logs, and runtime logs, but it does not provide an interactive browser viewport or screenshot capture for this Vite preview. Therefore these checks remain human-required:

- desktop visual review;
- 390×844 mobile visual review;
- horizontal-overflow inspection in a rendered browser;
- client-side browser-console inspection;
- rendered DOM inspection of canonical and JSON-LD output.

Source inspection, successful compilation, and the corrected HTTP 200 response give no current reason to expect failure, but they are not substitutes for the human browser pass.

## Verdict

**TECHNICAL PASS WITH HUMAN VISUAL GATE**

PR #39 is not yet merge-ready because the requested desktop/mobile rendered review and browser-console check have not been independently completed. No merge or publication authorization is implied by this report.
