# 11 — Tag filtering and search on /podcasts

**Problem:** 52 episodes per locale with `tags` in frontmatter, but `/podcasts` has no way to filter or search.

## Steps

### Tag pages (static, SEO-friendly)
1. Add `getAllTags(locale)` and `getEpisodesByTag(tag, locale)` to `lib/episodes.ts`.
2. Create `app/(main)/podcasts/tags/[tag]/page.tsx` and `app/ar/podcasts/tags/[tag]/page.tsx` with `generateStaticParams` from `getAllTags`.
3. Add a label map for display names, e.g. `{ 'open-source': { en: 'Open Source', ar: 'المصادر المفتوحة' } }`, in `lib/tags.ts`.
4. Make the tag chips on episode pages link to their tag page.
5. Add tag pages to `app/sitemap.ts`.

### Client-side search
6. Create a client component `components/EpisodeSearch.tsx` that receives the episode list (title, guest, description, tags, slug) as props and filters on a text input plus tag chips.
7. Render it at the top of `app/(main)/podcasts/page.tsx` and the Arabic page; pass data from the server component. 52 items is small enough that no search library is needed.
8. Optionally sync the query to `?q=` / `?tag=` with `useSearchParams` so filtered views are shareable.

## Verify

- `/podcasts/tags/open-source` lists only open-source episodes in both locales; typing a guest's name in search narrows the list.
