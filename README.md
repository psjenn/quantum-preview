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

## Contact form

The form on `/contact` isn't connected yet. Until it is, submitting shows "This form isn't connected yet." Before launch:

1. Create a form at [formspree.io](https://formspree.io) (the free plan covers 50 submissions a month) and set it to deliver to Quantum's inbox.
2. Paste the form's endpoint (for example `https://formspree.io/f/abcd1234`) into `formEndpoint` in `src/data/site.ts`.
3. Set `email` in the same file. It's shown to visitors if a message fails to send.
4. Deploy, send a test message, and confirm it arrives.

The form posts standard form data and expects a JSON response, so any service that works the same way (Basin, Getform, a custom endpoint) will also work. Submissions include `topic`, `name`, `email`, `organization`, and `message`, plus a hidden `_gotcha` field that Formspree uses to filter spam.

## Deployment

Deploy to Vercel (framework preset: Astro, output directory: `dist`). Redirects in `vercel.json` are picked up automatically.
