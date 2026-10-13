# Arthrosamid® landing page — Joint Care Clinics

React 18 + Vite 5 + Framer Motion. Single-page marketing site for the ultrasound-guided Arthrosamid® knee injection.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build locally
```

Deploy the contents of `dist/` to any static host (cPanel public_html, Netlify, Vercel, Cloudflare Pages).
`vite.config.js` sets `base: './'`, so the build also works from a sub-folder such as `/arthrosamid/`.

## Where things live

| File | What to edit there |
| --- | --- |
| `src/config.js` | Phone, email, address, prices, and `FORM_ENDPOINT` |
| `src/data/content.js` | All copy: nav, steps, timeline, comparison table, inclusions, suitability lists, clinician profile, reviews, FAQs, clinics |
| `src/styles/global.css` | Design tokens (`:root`), layout and every animation keyframe |
| `src/components/Hero.jsx` | Full-screen video hero: name, headline, one line of copy, buttons and a three-stat strip |
| `public/media/` | Hero film (`hero.mp4` + `hero-poster.jpg`) and section photos. Replace files with the same names to swap them |
| `src/components/Logo.jsx`, `public/logo-icon*.png` | Logo: the round knee icon (navy + white) with “ARTHROSAMID®” and the tagline as live text. `public/logo.png` is the original Joint Care Clinics logo, kept for reference |
| `src/components/KneeFigure.jsx` | The animated knee cross-section (SVG) in “How it works”, with pointer tilt |

## Before go-live

1. **Form** – set `FORM_ENDPOINT` in `src/config.js` to the URL that receives the JSON call-back request
   (`{ name, phone, email, clinic, knee, message, consent, page }`). While it is empty the form shows a
   clearly labelled preview message and sends nothing.
2. **Photo** – drop the clinician photo into `public/` and set `CLINICIAN.photo` in `src/data/content.js`
   (e.g. `'./ram-rachaputi.jpg'`).
3. **Prices and claims** – confirm the per-knee price and the clinical wording with the client.
4. **Legal links** – the footer links point at the existing privacy page on jointcareclinics.co.uk; update if needed.

## Motion

- Intro: navy curtain with the wordmark lifts to reveal the hero. Gold reading-progress line along the top.
- Hero: background film with scroll parallax (the video sinks and zooms while the copy lifts away), pause/play button, film grain, magnetic and shining CTAs, glass card with an animated 4-year ring.
- Photos: clip-path wipe reveals and parallax drift (`ParallaxImage.jsx`); “Life, back” gallery with columns drifting at different speeds under an outlined marquee line.
- Previously: brand wipe-and-shimmer, word-by-word headline, drifting colour fields, rising motes, the knee that draws itself,
  calms and fills with hydrogel, pointer tilt on desktop, pulsing CTA ring, trust ticker.
- Page: scroll reveals, count-up stats, scroll-linked progress line through the appointment steps, aftercare timeline fill,
  animated checkmarks on the price card, auto-advancing reviews, animated FAQ.
- Everything respects `prefers-reduced-motion` (CSS animations are gated behind `html.anim`, Framer Motion uses `useReducedMotion`).

## Media credits

- Hero film: “Grandfather and grandson walking in forest”, [Pexels](https://www.pexels.com/video/grandfather-and-grandson-walking-in-forest-10431051/), [Pexels licence](https://www.pexels.com/license/) (free commercial use; don’t present the people as patients). Mirrored, trimmed to a 15 s seamless loop, full HD `hero.mp4` (1920×1012, ~7.3 MB) and a phone crop `hero-mobile.mp4` (720×942, ~3.4 MB).
- Photos: [Unsplash](https://unsplash.com/license) licence (knee exam, ultrasound, beach couple behind the consultation card); “Life, back” gallery photos from Pexels ([grandchild](https://www.pexels.com/photo/30351504/), [cycling](https://www.pexels.com/photo/36756427/), [couple walking](https://www.pexels.com/photo/16540278/)); “You know the feeling” stairs photo from [Pexels](https://www.pexels.com/photo/39040862/) ([Pexels licence](https://www.pexels.com/license/)).
