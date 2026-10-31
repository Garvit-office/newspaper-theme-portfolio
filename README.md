# Sushama Ghosh — Portfolio

Next.js 16 (App Router, TypeScript). Vintage editorial design: Fraunces, Newsreader and Courier Prime on warm paper tones.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Editing content

All text lives in **`src/content/site.ts`**: hero, about, stats, case studies, experience, skills, awards, testimonials and contact.

- **Placeholders:** any text in `[square brackets]` is highlighted with a dashed outline. Replace it and the highlight disappears. Add `?clean` to any URL to preview without highlights.
- **Images:** put files in `public/images/` and set the `image` field, e.g. `image: "/images/portrait.jpg"`. Until then a labelled placeholder box is shown at the right shape.
- **Case studies:** add an object to `caseStudies`. Its page at `/work/<slug>` and its sitemap entry are generated automatically.
- **Résumé:** save the PDF as `public/Sushama-Ghosh-Resume.pdf` and rebuild. The download buttons turn on automatically.
- **Social links:** set `contact.linkedin.href` and `contact.instagram.href`.

## Contact form

The form posts to `/api/contact`, which validates input, rate-limits and filters bots, then emails the message via [Resend](https://resend.com).

1. Create a free Resend account and API key.
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
3. To send from your own domain, verify it in Resend and set `CONTACT_FROM_EMAIL`.

Until the key is set, the form shows a friendly error with a direct email link.

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com). Add the same environment variables there, plus `NEXT_PUBLIC_SITE_URL` (your domain), which is used for SEO, the sitemap and social previews.
# newspaper-theme-portfolio
