# Website Gaps Audit

Audit of the Hadith Tech site as of 2026-10-16 (commit `0298c44`). `next build` passes; everything below is a gap found by reading the code and content, not a build failure.

Each item links to a step file in [`docs/steps/`](./steps) with the implementation plan.

## 1. Broken or half-done

| # | Gap | Where | Steps |
|---|-----|-------|-------|
| 1 | MDX episode/guest content renders unstyled: `prose` classes are used but `@tailwindcss/typography` is not installed | `app/(main)/podcasts/[slug]/page.tsx:1012` and the `ar` / guest equivalents | [01](./steps/01-typography-plugin.md) |
| 2 | Sitemap omits `/guests`, `/ar/guests` and all 47 guest detail pages per locale (dropped in `077a3c3`) | `app/sitemap.ts` | [02](./steps/02-sitemap-guests.md) |
| 3 | Contact page disabled: `notFound()` is called before rendering | `app/(main)/contact/page.tsx`, `app/ar/contact/page.tsx` | [03](./steps/03-contact-page.md) |
| 4 | `/episodes` is a leftover "Coming Soon" stub; its layout renders no `<html>`/`<body>`, description is `'???'`; `Sidebar`/`Header`/`Playbar` are unused | `app/(dashboard)/`, `components/dashboard/` | [04](./steps/04-dashboard-stub.md) |
| 5 | Coming-soon page promises "New episodes every week" and is in the sitemap | `app/(main)/podcasts/coming-soon/page.tsx`, `app/ar/podcasts/coming-soon/page.tsx` | [04](./steps/04-dashboard-stub.md) |

## 2. SEO and sharing

| # | Gap | Steps |
|---|-----|-------|
| 6 | No `hreflang` / `alternates.languages` between `/x` and `/ar/x` | [05](./steps/05-hreflang-alternates.md) |
| 7 | No Open Graph / Twitter images (episode pages could use the YouTube thumbnail from `videoId`) | [06](./steps/06-og-images.md) |
| 8 | No `PodcastSeries` / `PodcastEpisode` JSON-LD structured data | [07](./steps/07-structured-data.md) |
| 9 | No RSS feed on the site | [08](./steps/08-rss-feed.md) |
| 10 | No custom 404 (`not-found.tsx`) in either locale | [09](./steps/09-not-found.md) |

## 3. Navigation and features

| # | Gap | Steps |
|---|-----|-------|
| 11 | Footer only links Home and Podcasts; no Guests, Subscribe or social links | [10](./steps/10-footer-links.md) |
| 12 | No search or tag filtering on `/podcasts`, although every episode has `tags` | [11](./steps/11-tags-and-search.md) |
| 13 | No About / host page (About section was removed; host only appears in the hero) | [12](./steps/12-about-page.md) |
| 14 | Subscribe page lacks Apple Podcasts; "Spotify (Arabic)" points to legacy `anchor.fm` | [13](./steps/13-subscribe-platforms.md) |
| 15 | No analytics | [14](./steps/14-analytics.md) |

## 4. Content

| # | Gap | Steps |
|---|-----|-------|
| 16 | `mohammad-khair` has no photo (initials fallback shown) | [15](./steps/15-content-gaps.md) |
| 17 | Placeholder episode text, e.g. episode 52 description "A Hadith Tech conversation with…" and "His journey in tech" topics (2 episodes) | [15](./steps/15-content-gaps.md) |
| 18 | Guest↔episode relation stored twice (`guestSlugs` in episodes, `episodeSlugs` in guests); only the guest side is read | [15](./steps/15-content-gaps.md) |

## 5. Cleanup

| # | Gap | Steps |
|---|-----|-------|
| 19 | Two Tailwind configs (`tailwind.config.js` and `.ts`); the `.ts` one lacks the font config | [16](./steps/16-cleanup.md) |
| 20 | `README.md` is create-next-app boilerplate | [16](./steps/16-cleanup.md) |
| 21 | `.env.evample` typo | [16](./steps/16-cleanup.md) |
| 22 | `config/last-episodes.ts` dummy data; `components/sections/Newsletter.tsx` unused | [16](./steps/16-cleanup.md) |
| 23 | `.DS_Store` files committed | [16](./steps/16-cleanup.md) |

## Suggested order

Quick wins first: **01 → 02 → 05 → 10**, then **09, 06, 07, 08**, then the content pass (**15**) and feature work (**11, 12, 13, 14**). Cleanup (**16**) can go at any time.
