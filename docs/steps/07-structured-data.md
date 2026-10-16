# 07 — Add podcast structured data (JSON-LD)

**Problem:** No schema.org data, so search engines can't show podcast rich results.

## Steps

1. Create `components/JsonLd.tsx`:
   ```tsx
   export default function JsonLd({ data }: { data: object }) {
       return (
           <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
           />
       );
   }
   ```
2. **Home pages** (`app/(main)/page.tsx`, `app/ar/page.tsx`): render a `PodcastSeries`:
   ```ts
   { '@context': 'https://schema.org', '@type': 'PodcastSeries',
     name: 'Hadith Tech', url: 'https://hadithtech.com', inLanguage: 'en',
     author: { '@type': 'Person', name: 'Abdurrahman Rajab' } }
   ```
3. **Episode pages**: render a `PodcastEpisode` using frontmatter:
   ```ts
   { '@context': 'https://schema.org', '@type': 'PodcastEpisode',
     name: fm.title, description: fm.description, datePublished: fm.publishedAt,
     episodeNumber: fm.id, url: `https://hadithtech.com/podcasts/${slug}`,
     partOfSeries: { '@type': 'PodcastSeries', name: 'Hadith Tech', url: 'https://hadithtech.com' },
     associatedMedia: { '@type': 'VideoObject', embedUrl: fm.embedUrl,
       thumbnailUrl: `https://i.ytimg.com/vi/${fm.videoId}/maxresdefault.jpg`, uploadDate: fm.publishedAt } }
   ```
   `duration` can be added as ISO 8601 (convert `"1:16:35"` → `PT1H16M35S`).
4. **Guest pages**: a `Person` with `name`, `description` (shortBio), `image`, `sameAs` (social links).

## Verify

- Run the deployed URLs through https://search.google.com/test/rich-results.
