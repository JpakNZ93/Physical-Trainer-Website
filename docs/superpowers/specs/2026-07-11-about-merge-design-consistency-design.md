# About + Coach Merge & Design Consistency

**Date:** 2026-07-11  
**Status:** Approved  
**Approach:** Shared primitives + targeted page refactors (Approach 2)

## Overview

Merge the standalone Trainers page into About Us (single-coach business), remove `/trainers` entirely, and unify typography, spacing, and card patterns across all light-themed pages so Home, About, Services, and Contact feel like one design system.

## Decisions

| Decision | Choice |
|----------|--------|
| Coach content placement | Option C — one merged section combining brand origin + coach bio + qualifications |
| Founder image | Keep Stitch About founder image (`stitchImages.aboutFounder`), not `coach.image` |
| `/trainers` route | Remove entirely — no redirect, returns 404 |
| Home stats bar | Replace `12+ Expert Trainers` with `10+ Years Experience` |
| Consistency strategy | Approach 2 — shared primitives + targeted refactors, Home as visual anchor |
| Body font | Hanken Grotesk (already in `layout.tsx`) — no Inter |
| Page padding | `px-page` everywhere on page containers |

## About Page — Merged Structure

Final section order on `/about`:

1. **Hero** — "About Us" / "Turning Lives Around" (unchanged)
2. **Mission** — quote block (unchanged)
3. **Meet Johnson** — merged Foundation + coach profile (replaces "The Foundation")
4. **Personal Approach** — methodology cards (unchanged)
5. **CTA** — "Start Your 180 Today" (unchanged)

### Meet Johnson section spec

**Layout:** Same 2-column grid as current Foundation section — text left, image right on desktop; image stacks above text on mobile.

**Image:** `stitchImages.aboutFounder` with existing grayscale/contrast treatment and `border-2 border-outline-variant`.

**Eyebrow:** `Est. 2014` badge (secondary background).

**Heading:** `The Foundation` or `Meet Johnson Huynh` — use `Meet Johnson Huynh` as H2 with `Founder | Personal Trainer | Boxing Coach` as subtitle.

**Body copy (merged, no duplication):**

- Paragraph 1 (brand): 180PT founded to help people turn their lives around through health, fitness, and discipline.
- Paragraph 2 (brand + experience): 10+ years helping clients build confidence, lose weight, and develop lifelong habits.
- Paragraph 3 (coach voice): Johnson's passion for transformation, consistency, discipline, and accountability.
- Paragraph 4 (coaching style): Supportive, motivating, confidence-building approach.

**Qualifications block:** Border card below body copy listing all items from `qualifications` in `lib/constants.ts`, with `check_circle` Material icons.

## Navigation & Route Changes

**Remove from nav:** `Trainers` link in `navLinks` (`lib/constants.ts`).

**Final nav (4 links):** Home, About, Services, Contact.

**Delete files:**
- `app/trainers/page.tsx`
- `components/CoachPortrait.tsx` (unused after merge)

**Update references:**
- `components/Header.tsx` — reads `navLinks`, no change needed beyond constants
- `components/Footer.tsx` — reads `navLinks`, no change needed beyond constants
- `README.md` — remove `/trainers` from route list

**No redirect:** `/trainers` returns Next.js 404 after route deletion.

## Home Stats Update

In `lib/constants.ts`, update `homeStats`:

```ts
{ value: "10+", label: "Years Experience" }
```

Replaces the `12+ Expert Trainers` entry. Other three stats unchanged.

## Design Consistency System

### Typography (canonical)

| Role | Font variable | Utility classes |
|------|---------------|-----------------|
| Display / headlines | `--font-anton` | `font-headline` + `text-display-lg` / `text-headline-lg` |
| Body | `--font-hanken-grotesk` | `font-body` + `text-body-md` / `text-body-lg` |
| Labels / meta | `--font-jetbrains-mono` | `font-label` + `text-label-sm` |

### Deprecated aliases (migrate then remove)

These Stitch-imported aliases remain as CSS aliases during migration, then all usages are replaced:

- `font-label-mono` / `text-label-mono` → `font-label` / `text-label-sm`
- `font-headline-lg` / `font-headline-xl` / `font-headline-md` → `font-headline` + appropriate `text-*`
- `font-body-lg` → `font-body text-body-lg` (keep `text-body-lg` size token)

### Spacing (canonical)

- **Page horizontal padding:** `px-page` on all page-level sections
- **Max width:** `max-w-container-max mx-auto`
- **Section vertical rhythm:** `py-24 md:py-32` (hero sections may use fixed heights)
- **Grid gaps:** `gap-gutter`

Replace `px-margin`, `px-margin md:px-gutter` on Services and Contact with `px-page`.

### Cards & interaction

- **Standard card:** `brutalist-border` + `industrial-shadow` (matches Home `IndustrialCard`)
- **Hover:** `industrial-hover` class on Services program cards
- **CTAs:** Primary `bg-primary text-on-primary`, secondary `border-2 border-primary`

### Shared primitives (new components)

Thin wrappers in `components/ui/`:

**`SectionLabel`** — mono uppercase eyebrow text  
Props: `children`, optional `className`

**`SectionHeading`** — Anton headline  
Props: `children`, `size?: 'lg' | 'xl'`, optional `className`

**`PageSection`** — standard section wrapper  
Props: `children`, `className?`, `background?` (default / `surface-low` / `primary`)

## Per-Page Refactor Scope

### About (`components/pages/AboutPageContent.tsx`)
- Replace Foundation section with Meet Johnson merged section
- Migrate any remaining `font-label-mono` / `font-headline-lg` to canonical classes

### Services (`components/pages/ServicesPageContent.tsx`)
- Replace `px-margin md:px-gutter` → `px-page`
- Migrate typography aliases to canonical classes
- Align program cards to `brutalist-border industrial-shadow industrial-hover`

### Contact (`components/pages/ContactPageContent.tsx`, `components/ContactFormLight.tsx`)
- Replace `px-margin md:px-gutter` → `px-page`
- Migrate typography aliases to canonical classes
- Form labels: `font-label text-label-sm uppercase`

### Home (no structural changes)
- Update `homeStats` constant only
- Already uses canonical patterns — serves as reference

## Files Changed Summary

| Action | File |
|--------|------|
| Modify | `components/pages/AboutPageContent.tsx` |
| Modify | `lib/constants.ts` |
| Modify | `components/pages/ServicesPageContent.tsx` |
| Modify | `components/pages/ContactPageContent.tsx` |
| Modify | `components/ContactFormLight.tsx` |
| Modify | `app/globals.css` |
| Modify | `README.md` |
| Create | `components/ui/SectionLabel.tsx` |
| Create | `components/ui/SectionHeading.tsx` |
| Create | `components/ui/PageSection.tsx` |
| Delete | `app/trainers/page.tsx` |
| Delete | `components/CoachPortrait.tsx` |

## Out of Scope

- Footer layout redesign
- New Stitch screen imports
- Contact form backend / email integration
- `/trainers` redirect (explicitly excluded per decision)
- Trainers light screen creation in Stitch

## Testing Checklist

- [ ] `/about` shows merged Meet Johnson section with About founder image and qualifications
- [ ] `/trainers` returns 404
- [ ] Nav shows 4 links (no Trainers) on desktop and mobile
- [ ] Home stats bar shows `10+ Years Experience`
- [ ] Services, Contact, About use `px-page` and canonical font classes
- [ ] `npm run build` passes with no TypeScript errors
- [ ] Visual spot-check: headline sizes, label mono font, and card borders consistent across all 4 pages

## Self-Review Notes

- No TBD placeholders remain
- Redirect explicitly excluded (404) — consistent with user decision
- Image source explicit: About Stitch image, not coach local photo
- Scope bounded to 4 marketing pages + shared primitives
- Home remains visual anchor; no full design-system extraction
