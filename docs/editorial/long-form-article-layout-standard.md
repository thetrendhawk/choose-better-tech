# Long-Form Article Layout Standard

- Status: Active design guidance
- Last reviewed: 2026-07-20
- Applies to: research-led CBT guides, explainers, and future long-form articles

## Purpose

Long-form pages should make evidence-led reading feel intentional at every viewport, rather than treating body copy, source notes, and decision cards as secondary to the page shell.

## Required treatment

- Use a dedicated reading measure of about 48rem (768px) for dense explanatory prose.
- Use 17-18px body text with approximately 1.75-1.8 line height for primary explanatory copy.
- Give major sections a clear display heading and enough vertical separation to make section changes scannable.
- Keep dense decision cards at one column on mobile, two at tablet widths, and three only when the available width supports their copy.
- Give cards enough padding for their text to breathe; do not rely on tiny text to preserve a grid.
- Present FAQ answers as individually separated content blocks with a clear question hierarchy.
- Present sources as evidence cards with a source label, readable link text, and an explanation of what the section represents.

## Reusable implementation

`src/styles/index.css` provides the following classes for new or refreshed long-form pages:

- `longform-reading`
- `longform-copy`
- `longform-copy-muted`
- `longform-section-title`
- `longform-card-copy`

They establish the reading measure, type scale, line height, and card-copy treatment without changing sitewide navigation, product cards, or commercial surfaces.

## Accessibility checks

- Do not introduce horizontal overflow at 390px width.
- Keep body and support text readable without browser zoom.
- Maintain visible focus styles and semantic heading order.
- Do not use color alone to distinguish a source, disclosure, or decision state.

## Scope boundary

This is a long-form content standard, not a site redesign. Apply it when a page has substantial explanatory prose or evidence sections; do not use it to alter short indexes, navigation, or unrelated product cards.
