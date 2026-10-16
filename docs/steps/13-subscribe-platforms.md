# 13 — Fix and expand subscribe links

**Problem:** `app/(main)/subscribe/page.tsx` (and the Arabic page) cover only Spotify and YouTube. "Spotify (Arabic)" points at the legacy `https://anchor.fm/hadith-tech`.

## Steps

1. Look up the current public URLs for each language:
   - Spotify show page (`https://open.spotify.com/show/…`), not the creator dashboard (`podcasters.spotify.com`)
   - Apple Podcasts
   - YouTube playlists (already present)
   - Others in use: Pocket Casts, Overcast, Amazon Music, the raw RSS feed
2. Move the links into one config, e.g. `config/platforms.ts`:
   ```ts
   export const platforms = [
     { name: 'Spotify', en: 'https://open.spotify.com/show/…', ar: 'https://open.spotify.com/show/…' },
     { name: 'Apple Podcasts', en: '…', ar: '…' },
     { name: 'YouTube', en: 'https://www.youtube.com/playlist?list=PL5RA-ZnFo9FOVRgVVlBPTkXa1-mWyun-f', ar: 'https://www.youtube.com/playlist?list=PL5RA-ZnFo9FPndQ-DQckXrEmY4y1eaoS-' },
   ];
   ```
3. Render the subscribe pages and footer icons ([10](./10-footer-links.md)) from that config, with platform icons and `target="_blank" rel="noopener noreferrer"`.
4. Replace the `podcasters.spotify.com` link in `components/sections/Newsletter.tsx` too (or delete the component — see [16](./16-cleanup.md)).

## Verify

- Click every link on `/subscribe` and `/ar/subscribe`; each opens the right show in the right language.
