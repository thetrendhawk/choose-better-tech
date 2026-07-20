# Browser Validation — Windows Defender vs Paid Antivirus

Date: 2026-07-20
Environment: Vercel preview for PR #43
Validated head: `c1765b659f08f2a3ca167789bfe282f8e627955a`
Preview: `https://choose-better-tech-git-content-wi-dcb690-aaron-s-evans-projects.vercel.app`

## Viewports

| Viewport | Result | Document width |
| --- | --- | ---: |
| 1440×1000 | Passed | 1440 |
| 1024×900 | Passed | 1024 |
| 768×900 | Passed | 768 |
| 390×844 | Passed | 390 |

The article and modified homepage were visually inspected on desktop and mobile. Hero hierarchy, line length, section spacing, cards, responsive grids, FAQ, evidence blocks, newsletter, and footer remained readable with no clipping or page-level horizontal overflow.

## Interaction and accessibility

- Direct deep-route load and reload passed.
- Internal navigation to `/best-antivirus-software` passed.
- Browser back and forward navigation passed.
- First keyboard Tab focused the home link with a visible solid outline.
- One H1 and thirteen H2 headings were present.
- Article, BreadcrumbList, and FAQPage JSON-LD blocks were present.
- Canonical resolved to `https://choosebettertech.com/guides/windows-defender-vs-paid-antivirus`.
- Title and meta description matched the intended capability-gap framing.
- No browser console errors or page errors were observed after clean reloads.

## Visual evidence

External screenshots are stored outside the repository under:

`C:\Users\Aaron Scott Evans\Documents\CBT\qa-artifacts\windows-defender-vs-paid-antivirus-preview`

Files include article captures at all four required widths and homepage captures at 1440 and 390 pixels.

## Result

**PASS — EXTERNAL PREVIEW SCREENSHOT QA.** Production remains pending explicit owner approval and merge.
