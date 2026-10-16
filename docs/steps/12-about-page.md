# 12 — Add an About / host page

**Problem:** The About section was removed in `077a3c3`. The only place the show's mission and host appear is the hero copy in `components/sections/HomeHero.tsx`.

## Steps

1. Write the content (both languages): what Hadith Tech is, why it exists, the host (Abdurrahman Rajab — bio, photo, links), how to suggest a guest.
2. Store it as MDX in `content/pages/en/about.mdx` and `content/pages/ar/about.mdx`, rendered with `MDXRemote` like episodes (depends on [01](./01-typography-plugin.md) for styling).
3. Create `app/(main)/about/page.tsx` and `app/ar/about/page.tsx` with metadata and alternates ([05](./05-hreflang-alternates.md)).
4. Optionally show stats: episode count (`getAllEpisodes(locale).length`), guest count, languages. `components/sections/Stats.tsx` exists and may be reusable.
5. Add "About" / "من نحن" to the Navbar (desktop + mobile), footer, and sitemap.

## Verify

- `/about` and `/ar/about` render with correct direction; links appear in nav on both locales.
