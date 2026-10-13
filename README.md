# Quantum Sports + Entertainment Group — website

Marketing site for [quantumseg.com](https://quantumseg.com), built with [Astro](https://astro.build) and deployed on Vercel.

## Getting started

Requires Node 22.12+.

```sh
npm install
npm run dev       # http://localhost:5180
npm run build     # static output in dist/
npm run preview   # serve the built site
```

## Project layout

| Path | What's there |
| --- | --- |
| `src/pages/` | One file per route (`index`, `about`, `revenue-solutions`, `talent`, `sixth-man`, `work`, `contact`, `404`, `sitemap.xml`) |
| `src/data/site.ts` | Most of the site copy: nav, homepage content, team, clients, case studies |
| `src/data/pages.ts` | Copy for the Revenue Solutions, Sixth Man, Talent, and About pages |
| `src/components/` | Shared UI pieces (hero, logo wall, case cards, charts, CTA band) |
| `src/layouts/Base.astro` | HTML shell, header, footer, meta tags |
| `src/styles/global.css` | All styling, with design tokens at the top |
| `src/assets/` | Images, which Astro optimizes at build time |
| `public/` | Files served as-is (`og.png`, `robots.txt`) |
| `vercel.json` | Redirects from the old site's URLs |

## Common edits

- **Copy, team, or case studies:** edit `src/data/site.ts`.
- **Add a client logo:** drop a PNG into `src/assets/logos-color/` named with the client's slug, then reference that slug in `src/data/site.ts`.
- **Team headshots:** `src/assets/team/<name>.png`.
- **Photos:** `src/assets/photos/*.jpg`.

## Deployment

Deploy to Vercel (framework preset: Astro, output directory: `dist`). Redirects in `vercel.json` are picked up automatically.
