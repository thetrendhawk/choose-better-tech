# Production Validation — Do You Still Need Antivirus on Windows 11?

Date: 2026-07-20
Status: Technical, source, and rendered-browser validation complete
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

## Initial browser-validation gap (resolved)

Before the final browser pass, the following checks were outstanding:

- desktop visual review;
- 390×844 mobile visual review;
- horizontal-overflow inspection in a rendered browser;
- client-side browser-console inspection;
- rendered DOM inspection of canonical and JSON-LD output.

They were completed and recorded in the final validation section below. The original text is retained to preserve the prior gate history.

## Verdict

### Final local validation and rendered-browser review

The following checks were completed against the PR branch after the Vercel-route correction:

- `npm.cmd run lint`: passed.
- `vitest run --no-file-parallelism`: passed, with 22 tests across 2 files. The explicit single-file setting avoids a local worker-startup stall; it does not skip tests.
- TypeScript project build and Vite production build: passed. The latter emitted `DoYouStillNeedAntivirusOnWindows11Page-*.js`.
- Generated-route parity: passed after regenerating `vercel.json` from the canonical manifest.
- The route-manifest test expectation was updated from 66 to 67 routes, matching the new canonical URL and committed sitemap.
- Desktop browser review: passed. The rendered page has readable cards, visible disclosure and sources, and no clipped text.
- Mobile browser review at 390 by 844: passed. `scrollWidth` and `clientWidth` were both 390, so no page-level horizontal overflow was present.
- Rendered metadata: passed. The browser title, description, and canonical URL match the intended guide.
- Structured-data wiring: source and rendered-page inspection confirm the Article, BreadcrumbList, and FAQ JSON-LD scripts are emitted with the page.
- Navigation: passed. The internal product-selection link reaches `/best-antivirus-software`; browser back and forward navigation both returned to the expected route.
- Console review: passed. The checked local session contained only Vite connection and React DevTools informational messages, with no page runtime or network failure.

Browser screenshots were captured during the desktop and mobile review in the local browser-test workspace. They are validation evidence only and are not committed as public site assets.

**MERGE-READY VALIDATION PASS**

The earlier human visual gate is now satisfied. PR #39 has passed the requested technical, source, route, and rendered-browser checks. No merge or publication authorization is implied by this report; owner approval remains required.
