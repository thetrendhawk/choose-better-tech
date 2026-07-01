# Choose Better Tech

Choose Better Tech is a production-minded static affiliate content website built to help ordinary people make better software decisions through honest reviews, practical comparisons, and beginner-friendly guides.

Version 0.1 establishes the foundation for a long-term authority website: clear navigation, trustworthy editorial framing, static legal pages, reusable components, SEO metadata, and a maintainable React architecture.

## Stack

- React
- Vite
- TypeScript
- TailwindCSS
- React Router
- Lucide Icons

No backend, database, CMS, or authentication is required for this version.

## Project Structure

- src/components - shared UI, layout pieces, and homepage cards
- src/pages - route-level pages
- src/layouts - site shell layout
- src/assets - static visual assets imported by the app
- src/styles - global Tailwind and base styles
- src/types - shared TypeScript types
- src/utils - site constants and SEO helpers
- public - static SEO files such as robots.txt and sitemap.xml

## Installation

~~~bash
npm install
~~~

## Development

~~~bash
npm run dev
~~~

## Build

~~~bash
npm run build
~~~

## Preview

~~~bash
npm run preview
~~~

## Deployment to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Use the default Vite settings:
   - Build command: npm run build
   - Output directory: dist
4. Add a production domain when ready.
5. Update canonical URLs in src/utils/site.ts, public/robots.txt, and public/sitemap.xml if the launch domain changes.

## Editorial Notes

The guide cards in version 0.1 intentionally use placeholder excerpts and Coming Soon labels. No fake reviews, credentials, or invented article content are included.
