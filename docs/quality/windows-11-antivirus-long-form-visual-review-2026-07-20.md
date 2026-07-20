# Windows 11 Antivirus Guide Long-Form Visual Review

- Page: `/guides/do-you-still-need-antivirus-on-windows-11`
- Review date: 2026-07-20
- Scope: readability remediation only; no factual, recommendation, affiliate, or route change
- Baseline: live production page reviewed at 1440px, 1024px, and 390 by 844px

## Observed baseline

The live page was structurally sound and had no horizontal overflow, but the audit confirmed several readability issues:

- Primary copy and supporting notes appeared small relative to the page’s research depth.
- The wide outer shell left the article’s hierarchy feeling sparse rather than deliberately composed.
- The three-column decision framework was overly dense at ordinary desktop/tablet widths.
- Dark-section cards, FAQ answers, and source links had insufficient size and spacing for comfortable reading.
- The evidence area resembled a compact collection of undifferentiated link pills rather than a source section.
- Footer explanatory and navigation text was smaller than appropriate for a research publication.

## Correction approach

The correction is system-oriented but intentionally narrow:

- added reusable long-form reading, heading, and card-copy classes;
- applied them to the antivirus guide;
- increased hero support, disclosure, FAQ, evidence, and footer text treatment;
- made feature and decision grids expand only when adequate width is available;
- turned sources into labeled evidence cards;
- left navigation, commercial surfaces, routes, article claims, metadata, schema, and publication dates unchanged.

## Browser-validation plan

After implementation, validate local production output at large desktop, 1024px tablet, 768px intermediate, and 390 by 844px mobile for reading measure, heading hierarchy, card wrapping, source visibility, footer hierarchy, overflow, clipped content, console errors, title, description, canonical URL, JSON-LD, direct reload, and browser history.

## Post-correction result

Local browser validation passed at 1440px, 1024px, 768px, and 390 by 844px.

- The guide retained a controlled reading column for explanatory copy while cards use the available page width.
- Body, disclosure, FAQ, source, and footer text have a larger and more deliberate treatment.
- The feature grid remains two-column at tablet widths; it becomes four-column only at extra-large widths.
- The decision framework is two-column at tablet widths, three-column only at extra-large widths, and one-column on mobile.
- The dark-section cards, FAQ cards, and source cards gained padding and clearer hierarchy.
- The source section now labels evidence cards and explains their role.
- No page-level horizontal overflow was found: `scrollWidth` equaled `clientWidth` at each tested width.
- No clipped content, runtime error, or browser-console error was found. The only console entries were local Vite connection and React DevTools informational messages.
- The rendered title, description, canonical URL, Article/BreadcrumbList/FAQ JSON-LD wiring, direct reload, internal product-selection link, and browser history behavior remain unchanged and valid.

The visual correction is ready for production validation after the pull request is deployed.

## Accessibility implications

The changes increase text size, line height, card padding, and visual grouping while preserving semantic headings, source links, disclosure visibility, and existing visible-focus treatment. The FAQ remains static content rather than an accordion, so all answers remain available to keyboard and assistive-technology users without an interaction requirement.
