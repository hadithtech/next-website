# 09 — Add custom 404 pages

**Problem:** No `not-found.tsx`, so unknown URLs (and every `notFound()` call) show Next's default page with no branding or navigation.

## Steps

1. Create `app/(main)/not-found.tsx`:
   ```tsx
   import Link from 'next/link';
   import { cn } from '@/lib/utils';
   import { buttonVariants } from '@/components/ui/button';

   export default function NotFound() {
       return (
           <div className="container min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
               <h1 className="text-4xl font-bold">Page not found</h1>
               <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
               <div className="flex gap-3">
                   <Link href="/" className={cn(buttonVariants())}>Home</Link>
                   <Link href="/podcasts" className={cn(buttonVariants({ variant: 'outline' }))}>Browse episodes</Link>
               </div>
           </div>
       );
   }
   ```
2. Create `app/ar/not-found.tsx` with Arabic copy ("الصفحة غير موجودة", links to `/ar` and `/ar/podcasts`).
3. Note: with multiple root layouts, a URL that matches no route at all uses the first root layout's 404. Test both `/nope` and `/ar/nope`; if `/ar/nope` shows English, add `app/ar/[...rest]/page.tsx` that calls `notFound()`.

## Verify

- `/nope`, `/ar/nope`, `/podcasts/not-real`, `/ar/guests/not-real` all show the branded page in the right language.
