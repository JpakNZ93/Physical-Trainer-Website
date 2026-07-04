# 180PT Fitness Website — Design Spec

**Date:** 2026-07-04  
**Status:** Approved  
**Deployment target:** Vercel (static)

## Overview

Build a professional multi-page marketing website for **180PT**, a personal training business in Gregory Hills, NSW. The site follows a dark-mode design (black, white, orange) with the tagline "Turning Lives Around." All images use placeholders; the contact form is UI-only (no backend).

## Decisions

| Decision | Choice |
|----------|--------|
| Tech stack | Next.js App Router + Tailwind CSS, static export |
| Contact form | UI only — client-side validation + success toast |
| CTA behavior | Contact page + `tel:` + `mailto:` links |
| Success Stories | Minimal — 3 transformation cards + 1 testimonial + stats bar |
| Gallery | Minimal — 6–9 placeholder images in a grid, hover zoom only |
| Approach | A — Next.js + Tailwind (fastest maintainable path) |

## Architecture

```
/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Header, Footer)
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── trainers/page.tsx
│   ├── contact/page.tsx
│   ├── success-stories/page.tsx
│   └── gallery/page.tsx
├── components/
│   ├── Header.tsx          # Sticky nav + logo + CTA button
│   ├── Footer.tsx          # Links, tagline, final CTA
│   ├── Hero.tsx            # Reusable hero banner
│   ├── FeatureBar.tsx      # Icon + label row
│   ├── ServiceCard.tsx
│   ├── PackageCard.tsx
│   ├── ContactForm.tsx     # UI-only form with validation
│   ├── CTAButton.tsx       # Orange primary / outlined secondary
│   └── PlaceholderImage.tsx
├── lib/
│   └── constants.ts        # Nav links, contact info, packages, hours
├── public/
│   └── placeholders/       # Grey placeholder images
├── tailwind.config.ts
├── next.config.ts            # output: 'export'
└── vercel.json               # Optional static config
```

### Key Configuration

- `output: 'export'` in `next.config.ts` for fully static build
- `images: { unoptimized: true }` required for static export with `next/image`
- `next build` produces `out/` folder deployed to Vercel with zero server config
- No API routes, no server components requiring runtime

## Design System

### Colors (Tailwind custom tokens)

| Token | Value | Usage |
|-------|-------|-------|
| `brand-black` | `#0A0A0A` | Page backgrounds |
| `brand-white` | `#FFFFFF` | Body text, headings |
| `brand-orange` | `#FF6B00` | Accents, CTAs, icons, highlighted words |
| `brand-grey` | `#1A1A1A` | Cards, form inputs, section alternates |

### Typography

- **Headings:** Bold sans-serif, uppercase, tight tracking
- **Hero headline:** Extra-large, italic on key word ("LIVES" in orange)
- **Body:** Clean white sans-serif, grey for secondary text
- **Font:** Inter via `next/font` (no external requests after build)

### Component Patterns

- **Primary CTA:** Solid orange background, white text, uppercase, hover darken
- **Secondary CTA:** Orange border outline, transparent background
- **Section headings:** Orange, uppercase, large
- **Feature icons:** Orange SVG icons (Lucide React)
- **Cards:** Dark grey background with subtle border, orange top accent or icon
- **Background treatment:** Low-opacity placeholder gym images behind dark overlay (`bg-black/70`)

## Pages

### Home (`/`)

1. **Hero** — Full-width banner with placeholder gym image overlay. Headline "TURNING **LIVES** AROUND" (LIVES in orange). Sub-line: "Personal Training • Boxing • Strength & Fitness". Description paragraph. CTAs: "Start Today" and "Book a Free Consultation" both → `/contact`
2. **Why Choose 180PT?** — Intro paragraph + 4-item feature bar (Personalised Programs, Professional Coaching, Real Accountability, Proven Results)
3. **Footer CTA strip** — "YOUR ONLY LIMIT IS YOU" + consultation button

### About (`/about`)

- Two-column layout: left = "ABOUT US" heading + copy + "Our Mission" callout box; right = large 180PT logo over placeholder weight-plates image
- Content: founding mission, 10+ years experience, personalised programs, mission statement

### Services (`/services`)

- 4-column service grid:
  - Personal Training (weight loss, muscle building, strength, injury prevention, fitness)
  - Boxing Training (fitness, coordination, confidence, technique, conditioning)
  - Small Group Training (affordable, fun, high energy, personal coaching, min 4 people)
  - Online Coaching (custom program, weekly check-ins, progress tracking, nutrition guidance)
- Packages row below: Package 1 ($180, 2×45min/week), Package 2 ($270, 3×45min/week), Small Group ($30/person), Online ($80/session)

### Trainers (`/trainers`)

- Two-column: left = coach portrait placeholder; right = "MEET YOUR COACH" / Peter (Founder | Personal Trainer | Boxing Coach) bio + qualifications checklist

### Contact (`/contact`)

- Two-column over boxing-gloves placeholder background:
  - Left: contact details (Gregory Hills NSW, phone, hello@180pt.com.au, www.180pt.com.au) + opening hours (Mon–Fri 5am–8pm, Sat 7am–12pm, Sun closed)
  - Right: contact form (Name, Email, Phone, Message) with UI-only submit
- Bottom CTA strip: "YOUR ONLY LIMIT IS YOU" + "BOOK YOUR FREE CONSULTATION TODAY"

### Success Stories (`/success-stories`) — minimal

- 3-column before/after placeholder cards (grey boxes labeled "Before" / "After")
- Each card: client name (orange), result (e.g. "-18KG"), timeframe (e.g. "12 WEEKS")
- One centered testimonial quote with orange quotation marks
- Stats bar: "10+ Years Experience", "1000+ Transformations", "100% Commitment to You"
- Footer CTA: "READY TO WRITE YOUR OWN STORY?" + "START TODAY" button

### Gallery (`/gallery`) — minimal

- 6–9 placeholder images in responsive 3-column grid
- Simple hover zoom effect, no lightbox
- Section heading: "THE 180PT EXPERIENCE"

### Shared Layout

- **Header:** Sticky nav with 180PT logo (white + orange), nav links (Home, About, Services, Trainers, Success Stories, Gallery, Contact), orange "BOOK A FREE CONSULTATION" button → `/contact`
- **Footer:** Nav links, contact info, copyright, tagline

## Interactions

### CTA Routing

| Button / Link | Action |
|---------------|--------|
| "Book a Free Consultation" | Navigate to `/contact` |
| "Start Today" | Navigate to `/contact` |
| Phone number | `tel:0450000000` (placeholder digits) |
| Email | `mailto:hello@180pt.com.au` |

### Contact Form (UI Only)

- Client-side validation: required fields, basic email format check
- On submit: `preventDefault()` → show green success toast ("Message sent! We'll be in touch soon.")
- No network request, no backend integration

### Navigation

- Sticky header with dark background and slight blur on scroll
- Desktop: horizontal nav links
- Mobile: hamburger menu → slide-down panel with links + CTA button

### Responsive Behavior

- Mobile-first Tailwind approach
- Service grid: 4-col → 2-col → 1-col
- Two-column sections stack vertically on mobile
- Hero text scales down on small screens

### Placeholder Images

- `PlaceholderImage` component: dark grey box with centered label (e.g. "Coach Portrait", "Before Photo")
- Aspect ratios: hero 16/9, portrait 3/4, gallery 1/1

## SEO

Basic meta tags per page:
- Titles: "180PT | Personal Training Gregory Hills", "180PT | About Us", etc.
- Meta descriptions with relevant keywords
- Open Graph tags with placeholder og-image

## Deployment

- Connect repo to Vercel → auto-detect Next.js → static export on push
- No environment variables required for v1

## Out of Scope (v1)

- Real email sending / form backend
- Booking or calendar integration
- CMS or admin panel
- Real photos or videos (all placeholders)
- Analytics integration
- Gallery lightbox or video playback
