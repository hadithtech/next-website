# 05 — Link English and Arabic pages with hreflang

**Problem:** Every page exists at `/x` and `/ar/x`, but nothing tells search engines they're translations of each other.

## Steps

1. Set `metadataBase` in both root layouts (`app/(main)/layout.tsx`, `app/ar/layout.tsx`):
   ```ts
   metadataBase: new URL('https://hadithtech.com'),
   ```
2. Add a helper in `lib/i18n.ts`:
   ```ts
   export function localeAlternates(path: string) {
       const clean = path.replace(/^\/+|\/+$/g, '');
       return {
           canonical: undefined, // set per page
           languages: {
               en: `/${clean}`,
               ar: `/ar/${clean}`.replace(/\/$/, ''),
               'x-default': `/${clean}`,
           },
       };
   }
   ```
3. Use it in every page's `metadata` / `generateMetadata`, setting `canonical` to the current locale's URL:
   ```ts
   alternates: { ...localeAlternates(`podcasts/${params.slug}`), canonical: `/podcasts/${params.slug}` },
   ```
   Pages to update (both locales): home, podcasts, podcasts/[slug], guests, guests/[slug], subscribe, contact, coming-soon.
4. Optionally add `alternates.languages` to sitemap entries (Next's `MetadataRoute.Sitemap` supports it).

## Verify

- View source on `/podcasts/episode-52-abdullatif-abdelfattah`: expect `<link rel="alternate" hreflang="ar" href="https://hadithtech.com/ar/podcasts/...">` and `<link rel="canonical">`.
