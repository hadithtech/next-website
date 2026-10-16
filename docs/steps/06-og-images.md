# 06 — Add social preview images

**Problem:** No page sets an Open Graph or Twitter image, so shared links show no preview.

## Steps

1. **Site default:** add `app/(main)/opengraph-image.png` and `app/ar/opengraph-image.png` (1200×630, can be built from `public/logo.png` / `public/Hero.png`). Next picks them up automatically.
2. **Episodes:** in `generateMetadata` of `app/(main)/podcasts/[slug]/page.tsx` and the Arabic version, use the YouTube thumbnail (host already allowed in `next.config.js`):
   ```ts
   const image = `https://i.ytimg.com/vi/${episode.frontmatter.videoId}/maxresdefault.jpg`;
   openGraph: { ..., images: [{ url: image, width: 1280, height: 720 }] },
   twitter: { card: 'summary_large_image', images: [image] },
   ```
3. **Guests:** in both `guests/[slug]` pages, use `guest.frontmatter.photo` when set:
   ```ts
   images: guest.frontmatter.photo ? [guest.frontmatter.photo] : undefined,
   ```
4. Requires `metadataBase` from [05](./05-hreflang-alternates.md) for relative URLs.

## Verify

- Paste an episode URL into https://www.opengraph.xyz (after deploy) or check `<meta property="og:image">` in the page source.
