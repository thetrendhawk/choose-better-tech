import assert from "node:assert/strict";
import test from "node:test";
import { validateHtml } from "../scripts/validate-static-output.mjs";

const article = `<h1>Guide</h1><p>${"Reader-visible evidence and practical guidance. ".repeat(10)}</p>`;
const html = (main, afterMain = "") => `<!doctype html><html><head>
  <title>Guide</title><meta name="description" content="Guide description">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="https://choosebettertech.com/guide">
  <meta property="og:title" content="Guide"><meta property="og:description" content="Guide">
  <meta property="og:url" content="https://choosebettertech.com/guide">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Guide"><meta name="twitter:description" content="Guide">
</head><body><nav>${["/", "/about", "/reviews", "/vpn", "/data-removal"].map(path => `<a href="${path}">Browse</a>`).join("")}</nav>
<main>${main}</main>${afterMain}</body></html>`;

test("accepts substantive article content directly inside main without running scripts", () => {
  assert.ok(validateHtml("/guide", html(article)).mainTextLength >= 300);
});

test("rejects an article deferred to React's hidden reveal container", () => {
  assert.throws(() => validateHtml("/guide", html('<template id="B:0"></template>', `<div hidden id="S:0">${article}</div>`)), /not visible in initial main content/);
});

test("rejects an unresolved boundary even when some content is already visible", () => {
  assert.throws(() => validateHtml("/guide", html(`${article}<template id="B:1"></template>`)), /requires a client-side Suspense reveal/);
});

test("rejects a synchronous-render bailout that would leave a client-only section", () => {
  assert.throws(() => validateHtml("/guide", html(`${article}<template data-msg="A component suspended"></template><p>Fallback</p>`)), /requires a client-side Suspense reveal/);
});

test("does not count script text toward substantive main content", () => {
  assert.throws(() => validateHtml("/guide", html(`<h1>Guide</h1><script>${"boilerplate ".repeat(100)}</script>`)), /initial main content is not substantive/);
});
