# Optery Affiliate Redirect Validation

- Reviewed: 2026-07-20
- Endpoint: `/api/go/optery`
- Status: local technical validation passed; Vercel Preview runtime configuration and browser validation pending owner action

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
- Browser validation remains blocked until the owner configures the private value for Preview.

## Owner configuration

In Vercel Project Settings → Environment Variables, add the private variable named `OPTERY_AFFILIATE_URL` to both Preview and Production. Do not place its value in source control, GitHub, or chat. Redeploy the Preview after configuration so the runtime function receives the variable.
