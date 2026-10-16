# 15 — Fill content gaps

## A. Missing guest photo

- `content/guests/en/mohammad-khair.mdx` and `content/guests/ar/mohammad-khair.mdx` have no `photo`.
- Add an image under `public/guests/` (or use a remote URL like other guests) and set `photo:` in both files.

## B. Placeholder episode text

1. Find placeholders:
   ```bash
   grep -l 'A Hadith Tech conversation with' content/episodes/*/*.mdx
   grep -l 'His journey in tech' content/episodes/*/*.mdx
   ```
   Known: `episode-52-abdullatif-abdelfattah` (description and topics), plus one more episode with the generic topics list.
2. For each, write a real `description` (1–2 sentences), a real "Topics Covered" list, and better `tags` than just `["career"]`. Use the YouTube description/chapters as a source.
3. Update both `en` and `ar` versions.
4. Also check for empty `guestHandle: ""` values; fill them or remove the field.

## C. Single source of truth for guest ↔ episode

**Problem:** Episodes have `guestSlugs`, guests have `episodeSlugs`. `lib/guests.ts` only reads `episodeSlugs`, so the two can drift apart.

1. Pick one side. Recommended: **keep `guestSlugs` on episodes** (you add an episode once and tag its guests).
2. Change `getEpisodesForGuest` in `lib/guests.ts` to filter `getAllEpisodes(locale)` by `episode.frontmatter.guestSlugs.includes(guestSlug)`.
3. Change `getGuestsByEpisodeSlug` to read the episode's `guestSlugs` and call `getGuestBySlug` for each.
4. Add `guestSlugs: string[]` to `EpisodeFrontmatter` in `lib/episodes.ts`, then remove `episodeSlugs` from all guest MDX files and from `GuestFrontmatter`.
5. Before removing, run a one-off script to confirm both sides currently agree, so nothing changes unexpectedly.

## Verify

- Every guest page still lists the same episodes; every episode page still shows its guests; `npm run build` passes.
