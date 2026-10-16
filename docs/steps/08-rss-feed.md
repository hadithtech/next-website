# 08 — Publish an RSS feed

**Problem:** No feed on the site for readers or aggregators.

> Note: podcast apps already get the audio feed from Spotify for Podcasters. This feed is for site updates and episode discovery; link the official audio RSS too if you want apps to subscribe.

## Steps

1. Create route handlers `app/(main)/feed.xml/route.ts` and `app/ar/feed.xml/route.ts`:
   ```ts
   import { getAllEpisodes } from '@/lib/episodes';

   export const dynamic = 'force-static';

   const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => `&#${c.charCodeAt(0)};`);

   export function GET() {
       const base = 'https://hadithtech.com';
       const items = getAllEpisodes('en').map(({ slug, frontmatter: fm }) => `
       <item>
         <title>${esc(fm.title)}</title>
         <link>${base}/podcasts/${slug}</link>
         <guid>${base}/podcasts/${slug}</guid>
         <pubDate>${new Date(fm.publishedAt).toUTCString()}</pubDate>
         <description>${esc(fm.description)}</description>
       </item>`).join('');

       const xml = `<?xml version="1.0" encoding="UTF-8"?>
   <rss version="2.0"><channel>
     <title>Hadith Tech</title><link>${base}</link>
     <description>Technology podcast</description><language>en</language>${items}
   </channel></rss>`;

       return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
   }
   ```
   Arabic version: locale `'ar'`, `/ar/podcasts/…` links, `<language>ar</language>`, Arabic title/description.
2. Advertise it in both layouts' metadata:
   ```ts
   alternates: { types: { 'application/rss+xml': '/feed.xml' } },
   ```
3. Add an RSS link in the footer ([10](./10-footer-links.md)).

## Verify

- `/feed.xml` and `/ar/feed.xml` validate at https://validator.w3.org/feed/.
