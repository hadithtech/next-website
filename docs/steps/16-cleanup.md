# 16 — Repository cleanup

## Steps

1. **Duplicate Tailwind config.** Tailwind loads `tailwind.config.js` (it has the font settings). Delete `tailwind.config.ts`, or move everything into `.ts` and delete `.js`. Keep only one.
2. **README.** Replace the create-next-app boilerplate with: what the site is, `npm install` / `npm run dev`, how to add an episode (`content/episodes/{en,ar}/episode-N-slug.mdx` frontmatter fields), how to add a guest, and deploy notes (Netlify).
3. **Env example typo.** `git mv .env.evample .env.example`.
4. **Dead code.**
   - `config/last-episodes.ts` — dummy data ("I'm Episode One"); delete if nothing imports it (`grep -rn last-episodes app components lib`).
   - `components/sections/Newsletter.tsx` — not imported anywhere; delete or use it on the home page.
   - Check `components/sections/FeaturedEpisode.tsx`, `Stats.tsx`, `components/ui/avatar.tsx`, `input.tsx` the same way.
   - `public/Abdulrahman.png`, `episodephoto.jpeg`, `vercel.svg`, `voicewaves.png` — remove any that are unreferenced.
5. **`.DS_Store` files.**
   ```bash
   git rm --cached $(git ls-files '*.DS_Store')
   echo ".DS_Store" >> .gitignore
   ```
   Also consider ignoring `tsconfig.tsbuildinfo`.
6. **Lint.** `npm run lint` and fix warnings.

## Verify

- `npm run build` passes and `git status` is clean after the commit.
