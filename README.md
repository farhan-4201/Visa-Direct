# Visa Direct Immigration — Screen Design Recreation

A **production-ready Next.js (App Router)** project that reproduces the visual design and page structure of [visadirectimmigration.com](https://visadirectimmigration.com/), built as an original implementation focused on screen design rather than backend functionality.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 20 LTS |
| npm | ≥ 10 |

---

## Getting Started

```bash
# Clone / open in workspace root (/Users/farhantariq/Desktop/VisaDirect)

# Install dependencies
npm install --legacy-peer-deps

# Start development server with Turbopack
npm run dev
```

The dev server starts at **http://localhost:3000**.

---

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Turbopack dev server (hot-reload) |
| `npm run build` | Production build (static generation) |
| `npm start` | Serve production build |
| `npm test` | Run Vitest unit/component tests |
| `npm run test:watch` | Run tests in interactive watch mode |
| `npm run lint` | ESLint (Next.js ruleset) |

---

## Route Structure

All routes are **statically generated** at build time.

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Homepage — hero, features, services grid, stats banner, how-we-work, CTA, blog preview, callback form |
| `/about` | `src/app/about/page.tsx` | About Us — team, practice areas, skill bars, timeline |
| `/services` | `src/app/services/page.tsx` | Services directory — filterable grid by category |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Service detail — key features, eligibility, documents, FAQ |
| `/blog` | `src/app/blog/page.tsx` | Blog index — search, category filter, tag cloud |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Blog article — full content, comment form, related services |
| `/success-stories` | `src/app/success-stories/page.tsx` | Success stories — filterable cards by visa category |
| `/contact` | `src/app/contact/page.tsx` | Contact page — office map placeholder, enquiry form |
| `/appointment` | `src/app/appointment/page.tsx` | Appointment booking — 4-step AppointmentScheduler |
| `/_not-found` | `src/app/not-found.tsx` | Custom 404 — navigation recovery links |
| *(error boundary)* | `src/app/error.tsx` | Runtime error boundary with reset |

---

## Component Inventory

### Layout

| Component | Path | Notes |
|-----------|------|-------|
| `Header` | `src/components/layout/Header.tsx` | Sticky; rotating address ticker; mega-dropdown for services; mobile drawer |
| `Footer` | `src/components/layout/Footer.tsx` | 4-column; gallery placeholder; office addresses; back-to-top |

### UI Primitives

| Component | Path | Notes |
|-----------|------|-------|
| `SafeImage` | `src/components/ui/SafeImage.tsx` | Wraps `next/image`; renders fallback placeholder div on error or empty src |
| `Button` | `src/components/ui/Button.tsx` | `primary` / `outline` / `ghost` variants; optional icon slot |
| `Badge` | `src/components/ui/Badge.tsx` | Small label chip with colour variants |
| `PageHeader` | `src/components/ui/PageHeader.tsx` | Full-width navy hero for inner pages |

### Home Sections

| Component | Path |
|-----------|------|
| `HeroSection` | `src/components/home/HeroSection.tsx` |
| `FeaturesSection` | `src/components/home/FeaturesSection.tsx` |
| `AboutPreviewSection` | `src/components/home/AboutPreviewSection.tsx` |
| `ServicesGridSection` | `src/components/home/ServicesGridSection.tsx` |
| `StatsBannerSection` | `src/components/home/StatsBannerSection.tsx` |
| `WhyChooseUsSection` | `src/components/home/WhyChooseUsSection.tsx` |
| `HowWeWorkSection` | `src/components/home/HowWeWorkSection.tsx` |
| `CtaBanner` | `src/components/home/CtaBanner.tsx` |
| `BlogPreviewSection` | `src/components/home/BlogPreviewSection.tsx` |
| `CallbackFormSection` | `src/components/home/CallbackFormSection.tsx` |

### Appointment

| Component | Path |
|-----------|------|
| `AppointmentScheduler` | `src/components/appointment/AppointmentScheduler.tsx` — 4-step wizard |

### Blog

| Component | Path |
|-----------|------|
| `BlogCommentForm` | `src/components/blog/BlogCommentForm.tsx` — interactive `"use client"` form |

---

## Design System Tokens

Defined in `src/app/globals.css` and used as raw Tailwind CSS values throughout:

| Token | Value | Usage |
|-------|-------|-------|
| Primary Navy | `#0c4c6d` | CTAs, headings, active states |
| Dark Navy | `#072333` | Header top bar, footer background |
| Amber Accent | `#c68a4c` | Icon accents, taglines, highlights |
| Light Slate | `#f8fafc` | Section backgrounds |
| Success Green | `#10b981` (Tailwind emerald-500) | Confirmation badges |

**Typography:** `Inter` (Google Fonts) via `next/font/google`, applied globally.

---

## Data Files

All content is defined as static TypeScript data arrays — no API calls required.

| File | Exports | Records |
|------|---------|---------|
| `src/data/servicesData.ts` | `servicesData`, `ServiceItem` | 9 visa services |
| `src/data/blogData.ts` | `blogPosts`, `BlogPost` | 5 blog articles |
| `src/data/teamData.ts` | `teamMembers` | 4 team profiles |
| `src/data/officesData.ts` | `officesData`, `rotatingAddresses` | 5 offices + ticker list |
| `src/data/successStoriesData.ts` | `successStories` | 8 client case results |

---

## Testing

Tests are written with **Vitest + React Testing Library** and run in a `jsdom` environment.

```bash
npm test
# → 6 test files, 25 tests, all passing
```

| Test File | What it covers |
|-----------|----------------|
| `SafeImage.test.tsx` | Renders img element; fallback div when src is empty |
| `Header.test.tsx` | Brand identity; nav links; phone number; mobile menu toggle |
| `CallbackFormSection.test.tsx` | Form renders; validation errors; successful submission + confirmation |
| `AppointmentScheduler.test.tsx` | Steps 1-4 progression; confirmation screen with client data |
| `AppointmentApi.test.ts` | Resend API key validation; contact field validation; bad JSON handling; 200 email dispatch |
| `NotFound.test.tsx` | 404 numeral; heading; CTA links; phone link |

---

## Environment Variables (Optional)

The application includes an integrated serverless email dispatch route (`POST /api/appointment`) powered by [Resend](https://resend.com):

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `RESEND_API_KEY` | Optional | `""` | Resend API key (`re_...`). If omitted, the form gracefully completes with UI confirmation and records the booking without failing. |
| `OFFICE_EMAIL` | Optional | `info@visadirectimmigration.com` | Internal recipient for appointment notifications |
| `FROM_EMAIL` | Optional | `Visa Direct Immigration <onboarding@resend.dev>` | Verified sender address in Resend |

To configure locally, create a `.env.local` file:
```bash
RESEND_API_KEY=re_your_api_key_here
OFFICE_EMAIL=info@visadirectimmigration.com
FROM_EMAIL="Visa Direct Immigration <onboarding@resend.dev>"
```

---

## Error Handling

| Scenario | Handling |
|----------|---------|
| Image fails to load | `SafeImage` catches `onError` and renders a styled placeholder `div` |
| Image `src` is empty | `SafeImage` skips the `<Image>` render and shows the placeholder immediately |
| Unknown route | `src/app/not-found.tsx` — custom 404 with recovery navigation |
| Runtime client error | `src/app/error.tsx` — Next.js error boundary with `reset()` button |
| Unknown service slug | `services/[slug]/page.tsx` calls `notFound()` → triggers 404 |
| Unknown blog slug | `blog/[slug]/page.tsx` calls `notFound()` → triggers 404 |

---

## Architecture Decisions & Assumptions

1. **Static-only generation** — All routes use `generateStaticParams` where dynamic and are fully statically generated. No server actions, database, or authentication layer.

2. **Leave Services excluded** — As per scope, no "Leave Services" section is built or stubbed beyond its presence as a navigation concept.

3. **Original copy** — All paragraph text, headings, and legal copy are original placeholder content. No verbatim scraping from the reference site.

4. **Neutral brand assets** — The compass icon (Lucide) stands in for the original trademark logo. All colours/fonts are independently chosen to match the visual feel.

5. **Copyright year** — Static `2026` in the footer footer to avoid Next.js prerender blocking (no `new Date()` in Client Components during static generation).

6. **`--legacy-peer-deps`** — Required at install time due to `@types/node` version conflict between `vitest@5`, `vite@8`, and `next@16`. Runtime behaviour is unaffected.

7. **Tailwind v4** — Uses the new CSS-first configuration model; no `tailwind.config.js` is needed; all design tokens are expressed via CSS custom properties in `globals.css`.

8. **`"use client"` boundary** — Interactive components (`Header`, `Footer`, `AppointmentScheduler`, `CallbackFormSection`, `BlogCommentForm`, blog index page) are client components; all page-level Server Components remain RSC for optimal static output.
