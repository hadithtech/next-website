# 14 — Add analytics

**Problem:** No visitor analytics, so there's no data on which episodes, guests or languages get traffic.

## Options

| Option | Notes |
|--------|-------|
| Netlify Analytics | Site is on Netlify (`NETLIFY_NEXT_SKEW_PROTECTION` in `.env.evample`); server-side, no script, paid add-on |
| Plausible / Umami | Lightweight, cookie-free, no consent banner needed |
| PostHog | Free tier, events + funnels; heavier |
| Google Analytics | Free; needs a cookie consent banner for EU visitors |

## Steps (script-based option)

1. Pick a provider and create the site in its dashboard.
2. Add the script once per root layout (`app/(main)/layout.tsx`, `app/ar/layout.tsx`) with `next/script`:
   ```tsx
   import Script from 'next/script';
   <Script defer data-domain="hadithtech.com" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
   ```
3. Track a few custom events: subscribe-link clicks (with platform + language), episode page views by slug, language toggle.
4. Put any keys in env vars and document them in `.env.example`.

## Verify

- Visit the site and confirm the visit appears in the provider's real-time view.
