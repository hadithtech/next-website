# 01 — Style MDX content with the Typography plugin

**Problem:** Episode and guest pages wrap MDX in `prose prose-lg dark:prose-invert`, but `@tailwindcss/typography` isn't installed, so headings and lists render as plain text.

## Steps

1. Install the plugin:
   ```bash
   npm install -D @tailwindcss/typography
   ```
2. Register it in `tailwind.config.js` (the config Tailwind actually loads — see [16](./16-cleanup.md) about the duplicate `.ts`):
   ```js
   plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
   ```
3. Check RTL: in `app/ar/podcasts/[slug]/page.tsx` and `app/ar/guests/[slug]/page.tsx`, confirm lists indent on the right. If not, add `prose-ul:ps-6` or similar logical-property overrides.
4. Optionally tune colours to the theme (`prose-a:text-primary`, `prose-headings:font-bold`).

## Verify

- `npm run dev`, open `/podcasts/episode-52-abdullatif-abdelfattah` and `/ar/podcasts/episode-52-abdullatif-abdelfattah`: the `#`/`##` headings and bullet lists should be styled.
- `npm run build` still passes.
