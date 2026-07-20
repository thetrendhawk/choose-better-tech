# Optery Affiliate Redirect Validation

- Reviewed: 2026-07-20
- Endpoint: `/api/go/optery`
- Status: Preview runtime and browser validation passed; production deployment remains outside this PR's scope

## Architecture and secret handling

- The browser receives only the internal `/api/go/optery` route.
- The Vercel serverless function reads `OPTERY_AFFILIATE_URL` at request time.
- The raw destination is not committed, documented, logged, tested as a real value, or emitted to Vite static output.
- A configured redirect necessarily sends the destination only in its HTTP `Location` header. This is the intended, limited disclosure at click time.
- The handler ignores caller-controlled destination parameters and accepts only HTTPS URLs on the approved Optery host, preventing open-redirect behavior.

## Safe-failure behavior

| Condition | Result |
| --- | --- |
| Missing configuration | HTTP 503, plain user-safe message, no `Location` header, no cache. |
| Invalid or non-HTTPS configuration | HTTP 503, plain user-safe message, no `Location` header, no cache. |
| Valid GET | HTTP 307 with the configured `Location`, `Cache-Control: private, no-store, max-age=0`, and `X-Robots-Tag: noindex, nofollow`. |
| Valid HEAD | HTTP 307 and redirect headers without a response body. |
| Unsupported method | HTTP 405 with `Allow: GET, HEAD`; no redirect. |

## Checks completed

- Unit tests cover valid HTTPS host validation, missing/invalid/non-HTTPS configuration, GET, HEAD, caller-controlled redirect input, no logging, status codes, headers, and unsupported methods.
- Source, Markdown, public assets, generated output, issue text, and PR text require a no-raw-destination scan before merge approval.
- Final source scan confirmed the raw destination is absent from source, Markdown, generated static assets, and client JavaScript bundles. The only intended runtime exposure is the configured redirect's `Location` response at click time.
- Fresh Preview deployment validation passed: the endpoint returns HTTP 307, ignores a caller-controlled `destination` parameter, and sends the required no-store and noindex headers. The review route returns HTTP 200 and an unknown route returns HTTP 404.
- Browser validation passed on the Preview at 1440px, 1024px, 768px, and 390 x 844. The disclosure and CTA remain visible; the CTA has a 44px minimum height; no horizontal overflow or console errors were observed; keyboard focus reached the CTA; and direct reload plus internal back/forward navigation worked.

## Runtime configuration

The owner confirmed the private `OPTERY_AFFILIATE_URL` variable is configured for Preview and Production. A fresh Preview deployment was created after that confirmation. Do not place the value in source control, GitHub, logs, screenshots, or chat.
