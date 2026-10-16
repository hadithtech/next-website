# 10 — Complete the footer

**Problem:** `components/Footer.tsx` links only Home and Podcasts.

## Steps

1. Extend the `copy` object in `components/Footer.tsx`:
   ```ts
   en: { ..., guests: "Guests", subscribe: "Subscribe" },
   ar: { ..., guests: "الضيوف", subscribe: "اشترك" },
   ```
2. Add `<Link>`s for `${t.base}/guests` and `${t.base}/subscribe` (and `/contact` once [03](./03-contact-page.md) is done), using the same classes as the existing links.
3. Add a row of social icon links (lucide-react: `Youtube`, `Music` for Spotify, `Rss`, `Twitter`/`Linkedin`) with `target="_blank" rel="noopener noreferrer"` and `aria-label`s. Reuse the platform URLs from `app/(main)/subscribe/page.tsx`.
4. Add a copyright line: `© {new Date().getFullYear()} Hadith Tech`.
5. Remove the stray Angular attributes (`_ngcontent-kty-c18=""`) from the SVG wave, and give the `<pattern id="a">` a unique id (e.g. `footer-wave`).
6. Change the footer `<h1>` brand to a `<p>` or `<Link href={t.base + '/'}>`; pages should only have one `<h1>`.

## Verify

- Check both `/` and `/ar` at mobile and desktop widths.
