# DevAccountix Website (Next.js 14 + Tailwind + Framer Motion)

A modern, animated company site with a Medium blog section and contact form.

## Quickstart
```bash
pnpm i # or npm i / yarn
pnpm dev # http://localhost:3000
```

### Environment
Create `.env.local`:
```
MEDIUM_USERNAME=your-medium-handle
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
Medium posts are fetched from `/api/medium?username=<handle>`.

## Customization
- **Logo:** `public/logo.svg`
- **Tagline:** `components/Hero.tsx`
- **Services table:** `components/ServicesTable.tsx`
- **Contact info:** `components/ContactForm.tsx` and footer in `app/page.tsx`
- **Colors:** Tailwind `brand` scale

## Deploy
- Push to GitHub and deploy on Vercel. Set env vars in project settings.
