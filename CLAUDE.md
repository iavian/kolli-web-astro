# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static tourist-information website for **Kolli Hills** (Kolli Malai), Namakkal
district, Tamil Nadu. Built with Astro + Tailwind CSS v4. There is no database
and no server — every page is generated at build time from Markdown/JSON content
collections. The `dist/` output is a fully static site.

## Commands

```bash
npm install        # first time only
npm run dev        # dev server at http://localhost:4321
npm run build      # static build into dist/
npm run preview    # serve the production build locally
```

There is no test suite or linter configured. `npm run build` is the de-facto
validator: it type-checks and runs Zod schema validation on all content, so a bad
frontmatter field or malformed `contacts.json`/`facilities.json` fails the build.

## Architecture

**Content-driven, no runtime logic.** The split that matters:

- `src/content.config.ts` — the single source of truth for content shape. Every
  collection (`attractions`, `stays`, `eat`, `advisories`, `contacts`,
  `facilities`) is defined here with a Zod schema. Markdown collections load via
  `glob()`; `contacts` and `facilities` load a single JSON file each via `file()`.
  Changing a field, enum value, or default here is what propagates to all pages.
- `src/content/` — the editable data. One `.md` file per item (frontmatter +
  body) for attractions/stays/eat/advisories; one JSON array for contacts and
  facilities. Adding a file to a folder adds an item; deleting removes it.
- `src/pages/` — Astro pages. Index pages call `getCollection(...)`, sort by the
  `order` field, and render cards. Detail pages use `[...slug].astro` dynamic
  routes with `getStaticPaths()` and render the Markdown body into `.prose-kolli`.
- `src/components/` — shared UI (`Header`, `Footer`, `PageHero`, `StatusBadge`,
  `Thumb`). `Thumb` falls back to a colored emoji tile when an item has no `image`.
- `src/lib/icons.ts` — maps each category/severity enum value to an emoji and (for
  severity) Tailwind classes. **When you add an enum value to a schema in
  `content.config.ts`, add the matching entry here** or the placeholder
  tile/badge will be blank.

**Conventions across the codebase:**

- Ordering is controlled by a numeric `order` frontmatter field (smaller = first);
  pages sort on it. Advisories instead sort by `updated` date descending.
- Status/visibility is data, not code: attractions use `status: open|caution|closed`
  (rendered by `StatusBadge`), eat uses `status: open|closed`, advisories use
  `active: true|false` (active ones surface in the homepage banner) plus
  `severity: info|warning|critical`. `featured: true` promotes an attraction to the
  home page.
- Client-side filtering (e.g. attraction category buttons) is done with a small
  inline `<script>` toggling `display` on `data-cat` attributes — no framework.

**Styling:** Tailwind v4 is wired via PostCSS (`postcss.config.mjs`,
`@tailwindcss/postcss`) — not the Vite plugin. The theme (custom `forest-*` and
`clay-*` color scales, `font-display`) is defined in the `@theme` block of
`src/styles/global.css`, which also defines the `.prose-kolli` Markdown styles.
Use the `forest-*` palette for new UI to stay on-theme.

## Editing content

Most changes only touch `src/content/`. `CONTENT-GUIDE.md` is a plain-language
guide written for non-technical editors (copy an existing file, rename, edit
frontmatter). Refer to it rather than duplicating its instructions.

> The phone numbers, prices, and timings in the sample content are placeholder
> data and should be treated as unverified.
