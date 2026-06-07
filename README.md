# Kolli Hills — Visitor Guide Website

A tourist information website for **Kolli Hills** (Kolli Malai), Namakkal district,
Tamil Nadu. Built with [Astro](https://astro.build) and Tailwind CSS, using
Markdown content collections so that non-technical people can add, edit and remove
content easily.

## Sections

- **Home** — overview, current advisories banner, featured attractions
- **Attractions** — waterfalls, viewpoints, temples (filterable by category)
- **Stay** — resorts, cottages, homestays, guest houses
- **Eat** — restaurants and cafés
- **Advisories** — safety alerts & status updates (active / past)
- **Contacts** — police, hospital, ambulance, car & bike mechanics, taxi, fuel
- **Plan Your Trip** — how to reach, best time, packing & safety tips

## Editing content

You usually only need to touch the `src/content/` folder. See
**[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** for a plain-language walkthrough
(no coding required).

| Content            | Location                       |
| ------------------ | ------------------------------ |
| Attractions        | `src/content/attractions/*.md` |
| Places to stay     | `src/content/stays/*.md`       |
| Restaurants        | `src/content/eat/*.md`         |
| Advisories         | `src/content/advisories/*.md`  |
| Contacts           | `src/content/contacts.json`    |
| Photos             | `public/images/`               |

## Develop locally

```bash
npm install      # first time only
npm run dev      # start dev server at http://localhost:4321
```

## Build for production

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build locally
```

The `dist/` folder is a fully static site — host it free on Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or any web server.

## Tech notes

- **Astro 5** with content collections (`src/content.config.ts` defines the fields).
- **Tailwind CSS v4** via `@tailwindcss/vite`; theme colours in `src/styles/global.css`.
- No database and no server required — everything is generated from Markdown/JSON
  at build time.

> ⚠️ The phone numbers, prices and timings included are **sample placeholder data**.
> Replace them with verified information before going live.
