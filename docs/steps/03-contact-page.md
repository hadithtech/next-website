# 03 — Re-enable (or replace) the contact page

**Problem:** Both `app/(main)/contact/page.tsx` and `app/ar/contact/page.tsx` call `notFound()` first, so the Calendly widget is unreachable and there's no way to contact the show.

## Decide first

- **Calendly** (`https://calendly.com/nahhas909/30min`) — is this still the right account? It belongs to a past contributor's handle.
- **Alternative:** a simple email link / guest-suggestion form (e.g. a `mailto:` or a Google Form / Tally embed).

## Steps

1. Remove the `notFound()` call (and its import) in both contact pages.
2. Update the Calendly URL in `components/ContactWidget.tsx` if needed, or replace the widget.
3. Add a "Contact" link to the Navbar (desktop + mobile dialog in `components/Navbar.tsx`) and to the footer ([10](./10-footer-links.md)).
4. Add `/contact` and `/ar/contact` to `app/sitemap.ts`.

## Verify

- `/contact` and `/ar/contact` render; the Arabic page shows "جارٍ التحميل" while the widget loads.
