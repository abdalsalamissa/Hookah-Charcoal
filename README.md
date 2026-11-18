# Hookah Charcoal landing page

Single-product landing page built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Languages

The site is available in English (`/en`) and Arabic (`/ar`, right-to-left). The bare domain redirects to `/en`.
All copy lives in `lib/content.ts`, once per language. To add a language, add it to `lib/i18n.ts`
and add a matching entry in `content`.

## Edit content

All copy, specs and contact details are in `lib/content.ts`. Replace the placeholders.

## Images

Replace `public/images/hero.svg` with a real photo (e.g. `hero.jpg`) and update the `src`
in `components/sections/Hero.tsx`. Add a 1200×630 `app/opengraph-image.png` for social previews.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import it at vercel.com/new.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain (see `.env.example`).

## Structure

- `app/` layout, page, sitemap, robots, icon
- `components/` Header, MobileMenu (only client component), Footer, Section
- `components/sections/` Hero, Overview, Features, About, Contact
- `lib/content.ts` typed content
