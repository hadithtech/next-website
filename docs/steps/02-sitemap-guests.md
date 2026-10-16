# 02 — Add guest pages to the sitemap

**Problem:** `app/sitemap.ts` lists static pages and episodes only. `/guests`, `/ar/guests` and every `/guests/[slug]` page are missing.

## Steps

1. Import guests in `app/sitemap.ts`:
   ```ts
   import { getAllGuests } from '@/lib/guests'
   ```
2. Add the index pages to `staticPagesEn` / `staticPagesAr`:
   ```ts
   { url: `${baseUrl}/guests`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
   // and `${baseUrl}/ar/guests` in the Arabic list
   ```
3. Add detail pages for both locales:
   ```ts
   const guestPagesEn = getAllGuests('en').map((guest) => ({
       url: `${baseUrl}/guests/${guest.slug}`,
       lastModified: new Date(),
       changeFrequency: 'monthly' as const,
       priority: 0.6,
   }))
   // same for 'ar' with `${baseUrl}/ar/guests/...`
   ```
   Better `lastModified`: the newest `publishedAt` among `getEpisodesForGuest(slug, locale)`.
4. Spread `guestPagesEn` and `guestPagesAr` into the returned array.
5. Decide whether `/podcasts/coming-soon` belongs in the sitemap at all (see [04](./04-dashboard-stub.md)).

## Verify

- `npm run build && npm start`, open `/sitemap.xml`: expect 47 `/guests/…` and 47 `/ar/guests/…` entries.
