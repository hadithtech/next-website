# 04 — Remove the `/episodes` stub and fix coming-soon copy

**Problems:**
- `app/(dashboard)/episodes/page.tsx` is a "Coming Soon" placeholder. `app/(dashboard)/layout.tsx` is a root layout that returns a fragment (no `<html>`/`<body>`) and has `description: '???'`.
- `components/dashboard/{Sidebar,Header,Playbar}.tsx` are unused.
- `/podcasts/coming-soon` claims "New episodes every week".

## Steps

### Dashboard stub
1. Delete `app/(dashboard)/` and `components/dashboard/`, **or**, if a dashboard is planned, give the layout proper `<html lang="en"><body>` tags and real metadata.
2. If deleted, drop `'/dashboard/', '/episodes/'` from `disallow` in `app/robots.ts` (or keep `/episodes/` and add a redirect to `/podcasts` in `next.config.js`):
   ```js
   async redirects() {
     return [{ source: '/episodes', destination: '/podcasts', permanent: true }];
   },
   ```

### Coming-soon page
3. In `app/(main)/podcasts/coming-soon/page.tsx` and the Arabic version, change "New episodes every week" to wording that matches the real schedule (e.g. "New episodes regularly").
4. Decide if the page is still needed. If not, delete both and remove them from `app/sitemap.ts`.

## Verify

- `npm run build` passes and `/episodes` either redirects or 404s cleanly.
