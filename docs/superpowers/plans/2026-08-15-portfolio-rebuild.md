# Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio into a dark-first, premium, interactive client-conversion experience where visitors visually explore the systems Miko builds — per `docs/Miko_Portfolio_Rebuild_Spec.md`.

**Architecture:** Keep the existing Next.js 16 App Router structure and routes; replace the design system (dark-first Geist), rebuild the homepage as a 10-section journey, rebuild `/automation` as the n8n signature page, add a new `/case-study/readmindme` page with a RAG visualization, restructure the Atlas case study, and rebuild About/Contact. All signature animations are built with inline SVG + CSS keyframes + IntersectionObserver hooks — **no new dependencies**.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4 (CSS-config), shadcn/ui (existing), Geist + Geist Mono via `next/font/google`, SVG/SMIL/CSS animations.

**Spec:** `docs/Miko_Portfolio_Rebuild_Spec.md` (the spec also carries the n8n facts, since `n8n_Portfolio_Writeup.md` is not in the repo — the spec's quoted facts are the source of truth).

## Global Constraints

- **No commits.** User's global CLAUDE.md forbids auto-committing. Never run `git commit`; the user commits when satisfied. (This overrides the plan-skill's per-task commit steps.)
- **Do not invent project data** (spec §38): no invented clients, metrics, years, counts, integrations, or technologies. Every number must trace to the spec or existing repo content.
- **NDA:** The LegalTech client is never named. Allowed descriptors: "a LegalTech firm (NDA)", "Private SaaS Platform — LegalTech". Atlas Geotech / AtlasNHD may be named.
- **n8n execution metrics** ("49 tracked executions / 0 failures / ~1.0s average runtime") must be labeled **"At review time"** (spec §41).
- **Approved fact set** (verified sources):
  - n8n platform (spec §16/§39): self-hosted n8n, 42 workflows, Hostinger VPS, Traefik, IP whitelisting, credential management, monitoring/logging; Document Factory (~18 nodes); categories: Document Generation, Court / Legal Data, Telephony, E-signature, CRM / Intake / Email, Scheduling, Link Tracking, Voice / Miscellaneous (NO per-category counts); integrations: n8n, Supabase, PostgreSQL, Google Drive, Google Calendar, Gmail, SmartSuite, VoIP.ms, DocuSeal, Documenso, Gotenberg, DocxTemplater, Brevo, Pushover, ElevenLabs, CourtListener, Miami-Dade Clerk API, Google Gemini, REST APIs, JavaScript.
  - ReadMindMe (app/projects/page.tsx:91-113): 14-stage pipeline, pgvector similarity across 36,819 embeddings, GPT-4o, structured outputs, conversation memory, Google OAuth + TOTP, moderation, APScheduler, Redis, FastAPI, 33 Alembic migrations, 12 Docker Compose services, 10+ enrichment datasets, 24 read-only bible tables, 603K cross-references, ~3,400 LOC AI service, 20 routers, 25 services, ~40 tables.
  - Atlas (app/case-study/page.tsx): four-tier architecture (Atlas SDI → geocoding-service → portal-admin → portal-atlas), PostGIS, GeoServer, GeoNode, Prefect, Celery, WeasyPrint, FEMA NFHL failover, FAA ADHP, CAL FIRE FHSZ, USGS 3DEP, libpostal/gRPC, Terraform/AWS ECS, PID-80 worker crash fix, atomic table swap, 17 design specs / 10 implementation plans, stored-XSS finding. Role: "Primary developer on the determination and reporting pipeline, and sole developer of the customer-facing portal." (Drop the conflicting "Front-end lead" stat.)
  - Broad integrations (§25, all verified in repo): OpenAI, Google Gemini, ElevenLabs / Stripe, Checkout.com / Pipedrive, SmartSuite / PandaDoc, DocuSeal, Documenso, Gotenberg / Brevo, Gmail, Pushover / Shopify, Supabase. Additionally verified: ServiceM8, Mapbox, Clerk, Google Calendar, VoIP.ms.
  - Hero stat "10+ systems": projects page displays 10 builds (9 + NDA card) and the NDA card itself covers 6 systems.
- **Positioning copy** (spec §1/§7): heading "I build AI-powered software, SaaS products, and business automation." Never lead with "regulated industries". Primary CTAs: "View My Work" / "Start a Project". Remove all "Book a Systems Review" copy.
- **Known conflicts to resolve during execution:** ASAP Roadworthys dates (qa page "Jan 2024 – May 2024" vs about "Sep 2025 – Nov 2025") — check `docs/cv/miko-canares-cv.html` and align both pages to the CV; if the CV is silent, remove dates from the QA page.
- **No new npm dependencies.** Animations = SVG + CSS + IntersectionObserver. (Spec §34 permits Framer Motion but prefers the simplest tech; existing deps suffice.)
- **Reduced motion** (§36): every animated component must render its complete static final state under `prefers-reduced-motion: reduce` (packets hidden, reveals become fades/instant).
- **Mobile** (§37): wide node networks become vertical flows; no horizontal page scroll.
- **Verification protocol (every task):** `npm run build` must pass; then check the affected route in the dev server with the Playwright browser tools (desktop 1440px + mobile 390px), and check the browser console for errors. No claims of completion without this.
- **Existing typography class names (`text-h0`…`text-h6`, `text-eyebrow`, etc.) must keep working** — untouched pages (blog, eris) rely on them.

## File Structure

```
app/layout.tsx                     — Geist fonts, updated metadata
app/globals.css                    — dark-first tokens, type scale, motion utilities
app/page.tsx                       — homepage assembly (new section order)
app/automation/page.tsx            — n8n signature page (rebuilt)
app/case-study/readmindme/page.tsx — NEW ReadMindMe case study
app/case-study/page.tsx            — Atlas restructure
app/about/page.tsx                 — condensed about
app/contact/page.tsx               — contact form experience
app/api/contact/route.ts           — extended fields
app/qa/page.tsx, app/system/page.tsx — cleanup (remove invented %, restyle)
app/sitemap.ts                     — + /case-study/readmindme
lib/seo.ts                         — new positioning metadata
hooks/use-in-view.ts               — NEW shared IntersectionObserver hook
hooks/use-reduced-motion.ts        — NEW
components/motion/reveal.tsx       — NEW scroll-reveal wrapper
components/system/system-map.tsx   — NEW reusable node-flow component (signature)
components/system/node-chip.tsx    — NEW node primitive
components/home/hero.tsx           — NEW (replaces components/hero.tsx)
components/home/hero-system.tsx    — NEW "system comes to life" SVG animation
components/home/what-i-build.tsx   — NEW 3 service cards + client-language services
components/home/featured-work.tsx  — NEW (replaces components/featured-work.tsx)
components/home/ai-engineering.tsx — NEW RAG teaser
components/home/automation-teaser.tsx — NEW n8n teaser
components/home/integrations.tsx   — NEW integration categories
components/home/qa-mindset.tsx     — NEW QA differentiator + why-work-with-me
components/home/how-i-work.tsx     — NEW 7-step timeline
components/home/cta.tsx            — NEW (replaces components/cta.tsx)
components/automation/n8n-architecture.tsx — NEW interactive diagram
components/automation/document-factory.tsx — NEW interactive workflow
components/automation/patterns.tsx — NEW 5 engineering-pattern cards
components/automation/workflow-categories.tsx — NEW category tiles
components/automation/integration-wall.tsx — NEW
components/automation/ops-bar.tsx  — NEW production status bar
components/case-study/rag-flow.tsx — NEW RAG visualization
components/case-study/geo-grid.tsx — NEW geospatial hover/hero visual
components/booking-sheet.tsx       — NEW (extracted from navigation.tsx)
components/navigation.tsx          — rebuilt simple nav
components/footer.tsx              — rebuilt
DELETE: components/services.tsx, what-i-do.tsx, tech-stack.tsx, nda-teaser.tsx,
        portfolio-tabs.tsx, portfolio-layout.tsx, page-navigation.tsx, blog.tsx,
        components/hero.tsx, components/featured-work.tsx, components/cta.tsx,
        components/expertise.tsx, app/full-stack/layout.tsx
KEEP: app/full-stack/page.tsx (redirect), blog pages, eris page (token-inherited restyle only)
```

## Design System (locked)

**Palette** — structure is indigo/neutral, *live data is amber*. This color grammar repeats in every visualization (hero, RAG, n8n, QA): lines and nodes are quiet, the moving packet is warm.

| token | value | role |
|---|---|---|
| `--background` | `oklch(0.165 0.012 275)` (≈ #0d0e15) | page ground, near-black cool ink |
| `--card` | `oklch(0.205 0.014 275)` | surface panels |
| `--secondary` | `oklch(0.245 0.016 275)` | elevated/hover surface |
| `--border` | `oklch(0.32 0.02 275 / 55%)` | hairlines |
| `--foreground` | `oklch(0.93 0.008 275)` | text |
| `--muted-foreground` | `oklch(0.70 0.018 275)` | secondary text |
| `--primary` | `oklch(0.72 0.13 277)` (≈ #7d88f5, "signal") | accent: links, CTAs, active nodes |
| `--amber` | `#E8A020` ("pulse") | data packets, live states only |

**Type:** Geist (sans) — headings weight 500/tight tracking, body 400. Geist Mono — the "voice of the system": node labels, eyebrows, stats, tech metadata, all uppercase with `0.08em` tracking (`.text-node` utility). Section eyebrows are numbered (`01 — WHAT I BUILD`) because the homepage genuinely is a sequence (a pipeline the visitor travels).

**Signature element:** the SystemMap node-flow grammar (mono node chips + hairline connectors + traveling amber packet), reused across hero, featured cards, RAG viz, geo viz, n8n architecture, QA pipeline. Everything else stays quiet.

---

### Task 1: Design tokens, typography, motion utilities (Phase 1)

**Files:**
- Modify: `app/globals.css` (full rewrite of token blocks; keep class names)
- Modify: `app/layout.tsx:4,16-17,116` (fonts)

**Interfaces produced:** CSS utilities `.text-node`, `.panel`, `.grid-bg`, keyframes `packet-travel`, `node-in`, `pulse-ring`; CSS vars per palette table; `--font-sans` = Geist, `--font-mono` = Geist Mono.

- [x] **Step 1:** In `app/layout.tsx` replace Manrope import with Geist:

```tsx
import { Geist, Geist_Mono } from "next/font/google"
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
// <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
```

- [x] **Step 2:** Rewrite `app/globals.css` `:root` with the locked palette (keep all shadcn token names; map `.dark` to the same values; set `--font-sans: var(--font-geist), system-ui, sans-serif` and `--font-mono: var(--font-geist-mono), monospace` in `@theme inline`). Keep `--radius: 0.625rem`. Keep custom tokens `--amber`; retire `--hero-bg`/`hero-mesh` (delete the mesh block). Update `.text-h0/.text-h1/.text-h2` to `font-weight: 500` and tracking `-0.03em/-0.025em/-0.015em`. Add utilities:

```css
.text-node { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; }
.panel { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-lg); }
.grid-bg { background-image: linear-gradient(oklch(0.32 0.02 275 / 12%) 1px, transparent 1px), linear-gradient(90deg, oklch(0.32 0.02 275 / 12%) 1px, transparent 1px); background-size: 40px 40px; }
@keyframes node-in { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
@keyframes pulse-ring { 0%,100% { outline: 1px solid transparent; outline-offset: 0 } 50% { outline: 1px solid color-mix(in oklab, var(--amber) 55%, transparent); outline-offset: 3px } }
@keyframes packet-travel { 0% { offset-distance: 0%; opacity: 0 } 8% { opacity: 1 } 92% { opacity: 1 } 100% { offset-distance: 100%; opacity: 0 } }
@media (prefers-reduced-motion: reduce) {
  .motion-safe-only { display: none !important; }
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
```

- [x] **Step 3:** `npm run build`; browse `/` — expect dark background, Geist rendering, old pages readable (they use token classes). Fix any contrast fallout on untouched pages.

### Task 2: Motion + system primitives (Phase 1)

**Files:** Create `hooks/use-in-view.ts`, `hooks/use-reduced-motion.ts`, `components/motion/reveal.tsx`, `components/system/node-chip.tsx`, `components/system/system-map.tsx`.

**Interfaces produced:**

```tsx
useInView<T extends Element>(opts?: { threshold?: number; rootMargin?: string; once?: boolean }): { ref: React.RefObject<T | null>; inView: boolean }
usePrefersReducedMotion(): boolean
<Reveal delay?: number className?: string>{children}</Reveal>            // fade+rise on viewport entry
NodeChip({ label, sublabel?, active?, tone? }: { label: string; sublabel?: string; active?: boolean; tone?: "default" | "signal" | "amber" })
SystemMap({ nodes, direction?, animate?, className? }: { nodes: { id: string; label: string; sublabel?: string }[]; direction?: "vertical" | "responsive"; animate?: boolean; className?: string })
```

- [x] **Step 1:** `hooks/use-in-view.ts` — IntersectionObserver hook, `once: true` default, returns `{ref, inView}`; guards for SSR.
- [x] **Step 2:** `hooks/use-reduced-motion.ts` — `matchMedia("(prefers-reduced-motion: reduce)")` with change listener; returns boolean (default false SSR).
- [x] **Step 3:** `components/motion/reveal.tsx` — client component using `useInView`; renders `<div>` with `transition-[opacity,transform] duration-500 ease-out`, translated 12px until in view, honoring `usePrefersReducedMotion` (instant when reduced). Replaces old `components/ui/motion.tsx` FadeIn for new sections (leave motion.tsx in place for untouched pages).
- [x] **Step 4:** `NodeChip` — mono uppercase chip: `.text-node` label + optional sublabel; border, `bg-card`; `active` → border-primary + `pulse-ring` animation (motion-safe).
- [x] **Step 5:** `SystemMap` — renders nodes as a vertical flow (or `responsive`: horizontal ≥ md) with connector segments between chips; when `animate` and in view, chips stagger in with `node-in` and each connector runs a looping amber packet dot (span with `packet-travel` on a straight `offset-path`, staggered `animation-delay`, class `motion-safe-only`). Static full render when reduced motion.
- [x] **Step 6:** Build + render a throwaway usage on `/` temporarily or via the next task's hero; verify chips, connectors, packet loop, reduced-motion static state (emulate via Playwright `prefers-reduced-motion`).

### Task 3: Navigation + BookingSheet extraction + Footer (Phase 1)

**Files:** Create `components/booking-sheet.tsx`; rewrite `components/navigation.tsx`, `components/footer.tsx`.

**Interfaces:** `BookingSheet({ trigger }: { trigger: React.ReactNode })` — self-contained Sheet with the existing availability/booking flow moved verbatim from navigation.tsx (state, fetch to `/api/availability`, POST `/api/booking`, success panel). `Navigation()` and `Footer()` prop-less.

- [x] **Step 1:** Extract the booking sheet JSX + state from `components/navigation.tsx:31-256` into `components/booking-sheet.tsx` unchanged in behavior (fields: name, email, date, start/end, timezone, notes; keeps `source: "nav-book-call"`).
- [x] **Step 2:** Rebuild `Navigation`: fixed top bar, `MIKO.CANARES` wordmark (`.text-node`, links home), links **Work** `/projects` · **Services** `/#services` · **About** `/about`; right-aligned primary button **Start a Project →** `/contact`. Mobile: wordmark `MIKO` + Menu button opening a small sheet with the same 4 links. Subtle `backdrop-blur` + hairline bottom border on scroll.
- [x] **Step 3:** Rebuild `Footer`: slim; link groups **Work** (Projects, ReadMindMe Case Study → /case-study/readmindme, Atlas NHD Case Study → /case-study, Automation → /automation), **More** (About, Blog, Contact, Download CV → /Miko-Canares-CV.pdf); socials GitHub `github.com/koushin07`, LinkedIn `linkedin.com/in/miko-canares`; keep BookingSheet trigger as quiet "Book a call" text link; tagline + copyright. Remove the big CTA band (homepage CTA section owns conversion).
- [x] **Step 4:** Build; verify nav/footer on `/`, `/projects`, `/blog` desktop+mobile; booking sheet still fetches availability and validates (open sheet, pick date, see slots or graceful error).

### Task 4: Hero + "system comes to life" animation (Phase 1+3)

**Files:** Create `components/home/hero.tsx`, `components/home/hero-system.tsx`; modify `app/page.tsx` to use them.

**Interfaces:** `Hero()` renders copy + CTAs + stats and embeds `<HeroSystem />` (right column ≥ lg, below copy on mobile). `HeroSystem()` self-contained client component.

- [x] **Step 1:** `hero.tsx` copy (spec §7 verbatim): eyebrow `MIKO CAÑARES — FULL-STACK DEVELOPER` (mono); H1 **"I build AI-powered software, SaaS products, and business automation."**; sub: "Full-stack engineer specializing in Next.js, React, Python, Laravel, APIs, AI systems, and automation — from frontend to backend and production."; CTAs **View My Work** → `/projects` (primary), **Start a Project** → `/contact` (secondary); mono stat row: `10+ SYSTEMS · AI / RAG · SAAS · AUTOMATION · QA MINDSET`.
- [x] **Step 2:** `hero-system.tsx` — inline SVG (`viewBox="0 0 360 560"`) node network per spec §8 phases: CLIENT IDEA → ARCHITECTURE → row(FRONTEND, API, DATABASE) → AI → INTEGRATIONS → row(TESTING, SECURITY) → PRODUCTION. Nodes = `<g>` rect+text (mono, uppercase); connectors = `<path>` with `stroke-dasharray` draw-in. Phase timing via CSS `animation-delay` classes (phase 1: 0ms, 2: 400ms, 3: 900ms, 4: 1400ms, 5: 1900ms), triggered by `useInView`. One amber packet `<circle r="3">` per main spine using SMIL `<animateMotion dur="4s" repeatCount="indefinite">` + `<mpath>`, rendered only when in view and not reduced-motion. Final caption fades in at ~2.4s: `BUILT → TESTED → SHIPPED` (mono, amber arrows). Reduced motion: everything visible immediately, no packet.
- [x] **Step 3:** `app/page.tsx`: replace `<Hero />` import with new one; temporarily keep remaining old sections.
- [x] **Step 4:** Build; verify animation sequence, packet, mobile stacking, reduced-motion static; console clean.

### Task 5: What I Build + client-language services (Phase 2)

**Files:** Create `components/home/what-i-build.tsx`; wire into `app/page.tsx` (section id `services`).

- [x] **Step 1:** Three service cards (spec §9, copy verbatim): **Full-Stack SaaS Development** / **AI & RAG Development** / **Business Automation & Integrations**, each with description + example list (mono chips), subtle border-hover (`border-primary/40`, 200–300ms). Mini SystemMap-flavored icon strip per card (3 static NodeChips, e.g. FRONTEND–API–DB / QUESTION–RAG–ANSWER / TRIGGER–N8N–OUTPUT).
- [x] **Step 2:** Below cards, the client-language row (spec §26): five compact items — Build / Add AI / Automate / Improve / Test with their one-line descriptions.
- [x] **Step 3:** Wire into homepage after Hero with eyebrow `01 — WHAT I BUILD`; build + verify (incl. `/#services` anchor from nav).

### Task 6: Featured Work cards with visual identities (Phase 2)

**Files:** Create `components/home/featured-work.tsx`, `components/case-study/geo-grid.tsx`; wire into `app/page.tsx`.

**Interfaces:** `GeoGrid({ active }: { active?: boolean })` — absolutely-positioned background layer: `.grid-bg` + 6 fixed-position amber/primary points (fade in when `active`) + one connecting SVG polyline. Reused later by the Atlas case-study hero.

- [x] **Step 1:** Card data (order per spec §11): 01 **ReadMindMe** — `AI / RAG PLATFORM` — `Next.js · FastAPI · OpenAI · pgvector` → `/case-study/readmindme`; 02 **Atlas NHD** — `GEOSPATIAL SAAS PLATFORM` — `FastAPI · PostGIS · GeoServer · Next.js` → `/case-study`; 03 **Automation / LegalTech** — `AI + N8N + BUSINESS AUTOMATION` — `n8n · Supabase · Gemini · Docker` → `/automation`. (Atlas chip list uses the projects-page stack; no invented tech.)
- [x] **Step 2:** Card interaction (spec §12): base = large mono title, category, tech metadata; hover (200–400ms) = slight lift of inner visual, metadata brightens, **View Case Study →** appears, and the per-project visual animates: ReadMindMe = 3-node mini flow QUESTION→RETRIEVE→ANSWER with packet; Atlas = `<GeoGrid active={hovered}>`; LegalTech = 4 tiny workflow nodes lighting in sequence. Hover state driven by CSS `group-hover` where possible; focus-visible shows the same state for keyboard.
- [x] **Step 3:** Wire into homepage (eyebrow `02 — FEATURED WORK`); build + verify hover/focus/mobile (on touch, CTA is always visible).

### Task 7: AI Engineering + Automation teaser sections (Phase 2)

**Files:** Create `components/home/ai-engineering.tsx`, `components/home/automation-teaser.tsx`; wire into `app/page.tsx`.

- [x] **Step 1:** `ai-engineering.tsx` (eyebrow `03 — AI ENGINEERING`): heading "AI that answers from *your* knowledge, not thin air."; body: grounded-RAG explanation (problem: generic assistants hallucinate; solution: retrieval before generation — spec §14 framing); right side `SystemMap` (responsive) `QUESTION → EMBEDDING → VECTOR SEARCH → CONTEXT → GPT-4o → ANSWER` animated; CTA link "See the ReadMindMe case study →" `/case-study/readmindme`.
- [x] **Step 2:** `automation-teaser.tsx` (eyebrow `04 — AUTOMATION`): heading (spec §17) **"I don't just build n8n workflows. I build automation systems."**; sub: "Connect your CRM, AI, documents, APIs, databases, communication tools, and internal systems into one reliable automation layer."; `SystemMap` `WEBHOOK → VALIDATE → AUTOMATE → INTEGRATE → OUTPUT`; mono stat `42 WORKFLOWS · ONE AUTOMATION PLATFORM`; CTA "Explore the automation platform →" `/automation`.
- [x] **Step 3:** Wire in; build + verify.

### Task 8: Integrations, QA differentiator, How I Work, CTA — homepage complete (Phase 2)

**Files:** Create `components/home/integrations.tsx`, `components/home/qa-mindset.tsx`, `components/home/how-i-work.tsx`, `components/home/cta.tsx`; finalize `app/page.tsx`; delete `components/hero.tsx`, `components/featured-work.tsx`, `components/cta.tsx`, `components/expertise.tsx` (superseded), keep `components/trusted-brands.tsx` **only if** re-styled cheaply — otherwise fold employer names into About and delete.

- [x] **Step 1:** `integrations.tsx` (eyebrow `05 — INTEGRATIONS`): heading "Integrations I've worked with."; category groups (spec §25 verified list): AI (OpenAI, Google Gemini, ElevenLabs) · Payments (Stripe, Checkout.com) · CRM (Pipedrive, SmartSuite) · Documents (PandaDoc, DocuSeal, Documenso, Gotenberg) · Communication (Brevo, Gmail, Pushover) · Platforms (Shopify, Supabase, Google Calendar, Mapbox, Clerk, ServiceM8). Text-chip wall (mono), no logos (licensing-safe), category headers, quiet hover.
- [x] **Step 2:** `qa-mindset.tsx` (eyebrow `06 — RELIABILITY`): heading **"Built with a QA mindset."**; body (spec §10): "I don't just make software work on my machine. I build, test, validate, and troubleshoot systems with production reliability in mind."; horizontal SystemMap `BUILD → TEST → VALIDATE → DEPLOY → MONITOR` where each node gains a small amber check on activation; supporting line on the unusual combination: FULL-STACK DEVELOPMENT + AI / AUTOMATION + QA / RELIABILITY (mono equation treatment) with one sentence each, citing enterprise QA background (DXC ERP QA) — reused on About.
- [x] **Step 3:** `how-i-work.tsx` (eyebrow `07 — HOW I WORK`): 7 steps (spec §27) with one-liners: 01 Understand — "Clarify the problem, the users, and what done means."; 02 Design — "Map the system: data, APIs, integrations, edge cases."; 03 Build — "Ship in small, reviewable increments."; 04 Integrate — "Connect the tools and services your business already runs on."; 05 Test — "Validate behavior, access, and failure paths before release."; 06 Deploy — "Production configuration, monitoring, and rollout."; 07 Improve — "Measure, fix, and extend once real usage arrives." Vertical timeline, steps reveal on scroll.
- [x] **Step 4:** `cta.tsx` (spec §28): heading **"Have something you want to build?"**; sub "Tell me what you're trying to build, automate, fix, or improve. I'll help you figure out the right technical approach."; primary **Start a Project →** `/contact`; secondary **View GitHub →** `github.com/koushin07`. Keep the honest reassurance line "Reply within 24 hours" (existing claim).
- [x] **Step 5:** Final `app/page.tsx` order: Navigation → Hero → WhatIBuild → FeaturedWork → AiEngineering → AutomationTeaser → Integrations → QaMindset → HowIWork → Cta → Footer. Delete superseded components. Decision recorded: TrustedBrands employer strip is retired from home; employer proof lives on About.
- [x] **Step 6:** Full build + homepage walkthrough desktop/mobile/reduced-motion; console clean; no horizontal scroll at 390px.

### Task 9: Automation page — hero, architecture, data-flow animation (Phase 4)

**Files:** Create `components/automation/n8n-architecture.tsx`, `components/automation/ops-bar.tsx`; begin rewrite of `app/automation/page.tsx`.

- [x] **Step 1:** Page top (storytelling order §40): eyebrow `AUTOMATION PLATFORM`; problem lead ("Growing businesses run on disconnected tools — CRM here, documents there, email everywhere. Every manual handoff is a delay or an error."); then hero **"I don't just build n8n workflows. I build automation systems."** + backbone line (§17); context line: "Below: a self-hosted automation platform built for a LegalTech firm (NDA) — 42 production workflows on one n8n backbone."
- [x] **Step 2:** `n8n-architecture.tsx` — interactive diagram (spec §18): desktop SVG three-band layout TRIGGERS (Webhook, Schedule, Form, External API, File Upload) → n8n ENGINE (Validate, Business Logic, Transform, AI / LLM, API Integrations, Error Handling, Retry / Recovery) → branches CRM/SmartSuite · AI/OpenAI·Gemini · STORAGE/Supabase → reconverge → OUTPUTS (Email, PDF, Calendar, Notifications, Records). Data-flow animation on viewport entry (§19): trigger lights → packet into engine → validation → logic → packet splits to 3 branches → reconverges → outputs light, looping slowly (~8s cycle) via staggered CSS delays + SMIL packets. Hover a node band → highlight, others dim (CSS group). Mobile: render `SystemMap` vertical fallback `TRIGGER → N8N ENGINE → CRM / AI / STORAGE → OUTPUTS` instead of the SVG.
- [x] **Step 3:** `ops-bar.tsx` (spec §41): slim mono status bar `SELF-HOSTED n8n · HOSTINGER VPS · TRAEFIK · CREDENTIAL MANAGEMENT · IP WHITELISTING · MONITORING / LOGGING`; second row labeled **AT REVIEW TIME:** `49 TRACKED EXECUTIONS · 0 FAILURES · ~1.0S AVG RUNTIME`.
- [x] **Step 4:** Build + verify diagram animation, hover dim/highlight, mobile fallback.

### Task 10: Document Factory interactive workflow (Phase 4)

**Files:** Create `components/automation/document-factory.tsx`; wire into `app/automation/page.tsx`.

- [x] **Step 1:** Data: 11 steps (spec §20 verbatim node list + blurbs): SUPABASE WEBHOOK ("Starts the workflow when a queued intake is ready."), READY TO PROCESS? (IF gate), GET TEMPLATE ("Retrieves the appropriate document template."), RENDER DOCUMENT / DocxTemplater ("Merges intake data into the document template."), ADD FOOTER / Microservice ("Adds required footer/branding information."), CONVERT TO PDF / Gotenberg ("Converts the generated document into PDF."), ADD METADATA / Microservice ("Adds document fingerprint metadata."), UPLOAD PDF / Supabase Storage ("Stores the final document."), GENERATE LINK ("Creates a client-accessible download link."), then branch: EMAIL / Brevo ("Sends transactional email.") + NOTIFY / Pushover ("Notifies the internal team or agent."). Title **Document Factory**, subtitle "From intake to finished PDF — automatically.", note "~18 nodes in production".
- [x] **Step 2:** Interaction (spec §21): each node is a `<button>`; selected/hovered node scales slightly, its connector highlights amber, unrelated nodes dim to 40%; a contextual side panel (desktop, sticky) / inline panel (mobile) shows the blurb + `INTEGRATION: <tech>` badge. No modals. Keyboard: arrow-key/tab navigation between nodes, `aria-expanded` semantics.
- [x] **Step 3:** Build + verify interactions, keyboard access, mobile inline panels.

### Task 11: Automation page — patterns, categories, integration wall, assembly (Phase 4)

**Files:** Create `components/automation/patterns.tsx`, `components/automation/workflow-categories.tsx`, `components/automation/integration-wall.tsx`; finish `app/automation/page.tsx`.

- [x] **Step 1:** `patterns.tsx` — heading **"Not just automation. Engineering."**; five cards verbatim (spec §22): Idempotency / Resilience / Error Handling / Modular Services / Observability.
- [x] **Step 2:** `workflow-categories.tsx` — heading **"42 workflows. One automation platform."**; 8 category tiles (§23) with 2–4 representative workflows each drawn ONLY from documented facts (§39 + NDA systems list on projects page): Document Generation (Document Factory; SurveyJS intake merge; footer/branding microservice), Court / Legal Data (court-data ingestion; CourtListener sync; Miami-Dade Clerk API pulls; lead classification), Telephony (VoIP.ms automation), E-signature (Documenso event handling; DocuSeal flows), CRM / Intake / Email (SmartSuite onboarding; client intake; Brevo transactional email), Scheduling (calendar automation; multi-party consent scheduling), Link Tracking (client link tracking), Voice / Misc (ElevenLabs webhook handling). Footer line: "+ additional production workflows". NO per-category counts.
- [x] **Step 3:** `integration-wall.tsx` — elegant mono text-chip wall of the 20 §24 items, grouped loosely, subtle stagger-in.
- [x] **Step 4:** Assemble `app/automation/page.tsx` in §40 order: Problem → Backbone hero → Architecture (+OpsBar) → Document Factory → Patterns → Categories → Integration wall → "More automation builds" (preserve the two existing documented flows: SurveyJS document pipeline + Google Drive lead-generation ingestion, restyled as compact SystemMap cards) → CTA (Start a Project). Update page metadata (n8n automation, business automation keywords §45).
- [x] **Step 5:** Build + full-page verification desktop/mobile/reduced-motion; console clean.

### Task 12: ReadMindMe case study + RAG visualization (Phase 3/4)

**Files:** Create `app/case-study/readmindme/page.tsx`, `components/case-study/rag-flow.tsx`; modify `app/sitemap.ts` (+route), `app/projects/page.tsx` readmindme record CTA → `/case-study/readmindme`.

- [x] **Step 1:** `rag-flow.tsx` (spec §13): stages USER QUESTION → EMBEDDING ("Convert question into a vector representation.") → VECTOR SEARCH ("Search semantically similar content." / pgvector) → RELEVANT CHUNKS (renders 3 small document blocks) → CONTEXT → GPT-4o ("Generate a grounded response using retrieved context.") → STRUCTURED RESPONSE (small JSON-ish snippet `{ "answer": …, "verses": […] }`) → USER. Desktop: vertical spine with side annotations that activate as an amber packet descends (scroll/inView-sequenced, ~500–1200ms per hop); mobile: same vertical, simplified annotations. Reduced motion: all annotations visible.
- [x] **Step 2:** Page structure (spec §14/§31): 01 Problem ("Generic AI assistants hallucinate because they don't know the application's knowledge base.") → 02 What I built (retrieval-augmented Bible-study platform; retrieves before generating) → 03 How it works (`<RagFlow />`) → 04 Key capabilities (RAG, embeddings, vector search, pgvector, OpenAI, structured outputs, conversation memory, authentication, moderation, backend services, database architecture) → 05 **Under the hood** (mono fact grid: 14-stage pipeline · 36,819 embeddings · 603K cross-references · 24 read-only tables · 10+ enrichment datasets · 20 routers · 25 services · 33 migrations · ~40 tables · 12 Docker services · ~3,400 LOC AI service) → 06 Engineering decisions (business-value-first phrasing per §32, e.g. "Retrieval searches the knowledge base before the model answers — technical implementation: 14-stage pipeline.") → 07 Technologies chips → 08 CTA. Metadata via `buildMetadata` (RAG development, AI application development keywords).
- [x] **Step 3:** Build; verify page, sitemap entry, projects-page link, RAG animation + reduced motion.

### Task 13: Atlas case study restructure + geo visual (Phase 3/4)

**Files:** Modify `app/case-study/page.tsx`; reuse `components/case-study/geo-grid.tsx`; add geo SystemMap.

- [x] **Step 1:** Reorganize existing content into §31 order; hero gets `<GeoGrid active>` background (subtle, title stays readable); replace stats bar entry "Front-end lead" with role-accurate stat ("Pipeline + portal" / "primary developer, determination & reporting; sole developer, customer portal"); keep the four engineering decisions, four-tier architecture, results.
- [x] **Step 2:** Add geo SystemMap (spec §15/§42): `DATA → POSTGIS → GEOSERVER → API → NEXT.JS → MAP / REPORT` animated.
- [x] **Step 3:** Replace both "Book a Systems Review" CTAs with **Start a Project →** `/contact`; keep "public launch in progress" status note.
- [x] **Step 4:** Build + verify.

### Task 14: About + Contact rebuild (Phase 2/5)

**Files:** Modify `app/about/page.tsx`, `app/contact/page.tsx`, `app/api/contact/route.ts`.

- [x] **Step 1:** About (spec §30): lead "Full-stack engineer with experience building, testing, integrating, and supporting business-critical software."; combination block FULL-STACK DEVELOPMENT + AI / AUTOMATION + QA / RELIABILITY (same treatment as home); keep experience snapshot with Contract/Employment `kind` labels + education + location + availability; links GitHub, LinkedIn, CV (spec §44); portrait optional-keep; cut anything resume-exhaustive. Resolve ASAP date conflict against `docs/cv/miko-canares-cv.html`.
- [x] **Step 2:** Contact (spec §29): form with Name, Email, project-type chips (SaaS, AI Application, Automation, API Integration, Existing Application, Bug Fix / Improvement, QA / Testing, Other — single-select toggle chips), "What are you building?" (textarea, required), "What do you need help with?" (textarea), Budget / timeline (optional input), Current system / website (optional input); client-side required validation; POST `/api/contact`; clean confirmation state ("Thanks — I'll reply within 24 hours."). Keep direct-contact cards (email/LinkedIn/GitHub/WhatsApp) + BookingSheet trigger ("Prefer to talk? Book a call").
- [x] **Step 3:** Extend `app/api/contact/route.ts`: accept `{name, email, projectType?, building, help?, budget?, currentSite?}`; require name/email/building; keep email regex + escaping; compose labeled HTML email; keep Resend config + 503 fallback (form shows email fallback message when 503).
- [x] **Step 4:** Build; verify form validation, submit path (expect 503 locally without RESEND_API_KEY → fallback message), booking sheet, About rendering.

### Task 15: Peripheral pages + SEO + cleanup (Phase 5)

**Files:** Modify `lib/seo.ts`, `app/qa/page.tsx`, `app/system/page.tsx`, `app/projects/page.tsx` (header polish only), delete orphaned components + `app/full-stack/layout.tsx`.

- [x] **Step 1:** `lib/seo.ts`: title → "Miko Cañares — Full-Stack Developer for AI, SaaS & Automation"; description → "I build production-ready web applications, AI-powered systems, and business automations — connecting frontend, backend, APIs, databases, and third-party tools into reliable systems."; keywords per §45 (add: AI developer, RAG development, n8n automation, SaaS development, automation engineer; keep name variants); `getPersonJsonLd` jobTitle → "Full-Stack Developer". Keep the mikocanares.com prohibition comment.
- [x] **Step 2:** `app/system/page.tsx`: delete the self-rated percentage skill bars (unsourced); keep factual DXC + Apollo Tech content. `app/qa/page.tsx`: align ASAP dates per CV finding (Task 14); both pages inherit new tokens — spot-fix contrast only.
- [x] **Step 3:** Delete orphans: `components/services.tsx`, `what-i-do.tsx`, `tech-stack.tsx`, `nda-teaser.tsx`, `portfolio-tabs.tsx`, `portfolio-layout.tsx`, `page-navigation.tsx`, `blog.tsx`, `app/full-stack/layout.tsx` (+ `trusted-brands.tsx` per Task 8 decision). `grep -r` each name first to prove zero imports.
- [x] **Step 4:** Build; verify `/qa`, `/system`, `/projects`, `/blog`, `/case-study/eris` all render correctly on the new tokens.

### Task 16: Final verification sweep (Phase 6)

- [x] **Step 1:** `npm run build` clean; `npm run lint` — eslint is not installed in this repo (pre-existing; script exists but no devDependency). tsc --noEmit: only pre-existing chart.tsx errors.
- [x] **Step 2:** Playwright pass over `/`, `/automation`, `/case-study`, `/case-study/readmindme`, `/case-study/eris`, `/projects`, `/about`, `/contact`, `/qa`, `/system`, `/blog` at 1440px and 390px: no console errors, no horizontal scroll, nav/CTA reachable.
- [x] **Step 3:** Reduced-motion emulation on `/`, `/automation`, `/case-study/readmindme`: all information visible without animation.
- [x] **Step 4:** Spec acceptance walkthrough (§47): 10-second positioning check, 30-second work+CTA check, n8n orchestration story, per-section next actions. Fix gaps.
- [x] **Step 5:** Report remaining conflicts/facts needing user confirmation (e.g. ASAP dates if CV silent) in the final summary.

## Self-Review Notes

- Spec coverage: §1-§12 → Tasks 3-6; §13-§14 → Task 12; §15 → Task 13; §16-§24, §39-§41 → Tasks 9-11; §25 → Task 8; §26 → Task 5; §27-§28 → Task 8; §29 → Task 14; §30 → Task 14; §31-§32 → Tasks 12-13; §33-§37 → embedded in every animated task + Task 16; §38 → Global Constraints; §42 → Task 2 (SystemMap); §43-§45 → Tasks 8, 15; §46 phasing → task ordering; §47 → Task 16; §48-§49 → design system section.
- Type consistency: `SystemMap`/`NodeChip`/`Reveal`/`useInView`/`GeoGrid` signatures defined once (Tasks 2, 6) and consumed by name elsewhere.
- Deviation from spec §46 ordering: hero animation built in Task 4 (early) because it defines the SystemMap grammar everything else reuses.

---

# V2 Addendum — Interaction-Model Redesign (docs/Miko_Portfolio_UI_Master_Direction_V2.md)

V1 verdict from user: too close to a conventional dark portfolio. V2 goal: the UI itself demonstrates how the systems work — large living stages, not decorated cards.

- [x] **V2-1: Sequence engine + FlowStage** — `hooks/use-sequence.ts` (timer-driven step index, loop/hold, reduced-motion → final state); `components/system/flow-stage.tsx` (vertical node flow with dim→arriving→active states, arrival-synced packet per connector, tooltip/detail support); stage background utilities (vector-space scatter, noise, automation network) in globals.css.
- [x] **V2-2: Hero (P0)** — living system: idle-dim start, phased execution with packet traveling edge-by-edge (arrival-synced node pulses), per-node hover → path highlight + dim + tooltip; larger scale (min-h ~90vh, very large H1).
- [x] **V2-3: ReadMindMe RAG stage (P0)** — homepage 90vh stage on vector-space backdrop: question → embedding → vector search (scatter points appear, relevant ones illuminate) → context chunks → GPT-4o → grounded answer; hover explanations; replay; reused on /case-study/readmindme.
- [x] **V2-4: n8n AutomationExplorer (P0)** — overview architecture (WEBHOOK/SCHEDULE/FORM → n8n ENGINE → CRM/AI/DOCUMENTS → STORAGE → OUTPUT) with continuous event animation + subsystem hover focus panels; click DOCUMENTS zooms into Document Factory; factory gains an execution-trace log (NEW INTAKE → … → ✓ COMPLETE) with per-node processing/complete states; reused on /automation; mobile = vertical tap model.
- [x] **V2-5: Services as system modules** — each service card body is its animated mini-system (request through stack / RAG pipeline / branching automation), tech as secondary mono metadata, no tiny-text walls.
- [x] **V2-6: Atlas spatial stage (P1)** — geographic graticule backdrop, pipeline runs while a map panel accumulates layers (parcel point, hazard layers, report); reused on /case-study.
- [x] **V2-7: Patterns/categories/integrations** — PatternViz animated concept cards (idempotency, retries, error handling, pagination/chunking, AI extraction); 42-workflows interactive category explorer; HubNetwork radial integration map (n8n hub on /automation; "your system" hub on homepage) replacing chip walls.
- [x] **V2-8: QA + homepage assembly** — "Built to work. Built to survive." + BUILD→VALIDATE→TEST→FAILURE PATHS→DEPLOY→MONITOR; homepage becomes the guided tour: Hero → Services → Systems in production (RAG stage, Atlas stage, n8n explorer) → Patterns → Integrations hub → QA → How I Work → CTA; delete superseded home components.
- [x] **V2-9: Scale/typography pass + verification** — 80–120vh stages, generous whitespace, larger headings/body; build + desktop/mobile + reduced-motion + console sweep.

---

# Work Page Addendum (docs/Miko_Portfolio_Work_Page_UI_UX_Spec.md)

Turn /projects from a project database into an interactive system showcase: hero → 4 featured systems (alternating layouts, project-specific visuals, optional architecture toggle) → filterable project explorer with hover mini-previews and inline expansion → interactive case-study timeline (replaces the "Context, decisions, outcomes" text blocks) → NDA six-systems (content preserved, retokened) → capabilities strip → CTA. Case-study pages get prev/next/back navigation (§29).

- [x] **W-1: Data module** — `lib/work-data.ts`: move the three featured breakdown records + secondary project records (with category + mini-flow) + NDA systems out of the page, content verbatim.
- [x] **W-2: SDI stage** — `components/stages/sdi-stage.tsx`: SPATIAL DATA → (POSTGIS + GEOSERVER) → REPORT ENGINE → PDF, with a disclosure-report document materializing line by line.
- [x] **W-3: FeaturedSystem frame** — `components/work/featured-system.tsx`: label/tag/status, large name, value prop, 2–3 sentence problem, visual slot, tech metadata, outcome, CTA; layouts text-left / text-right / full; optional SYSTEM ↔ ARCHITECTURE toggle (FlowStage with per-node details).
- [x] **W-4: Project explorer** — `components/work/project-explorer.tsx`: category filters (ALL/FULL-STACK/GEOSPATIAL/E-COMMERCE/OPERATIONS/AUTOMATION), compact cards with hover mini system previews, inline detail expansion for projects without case-study routes, NDA card with PRIVATE/NDA status.
- [x] **W-5: Case-study timeline** — `components/work/case-study-timeline.tsx`: project tabs (Atlas SDI / Atlas Portal / ReadMindMe) + stage rail (CONTEXT → ARCHITECTURE → KEY DECISIONS → OUTCOME) swapping a content panel.
- [x] **W-6: Page assembly + hero** — rebuilt `app/projects/page.tsx` per §3 order with new hero ("Software systems built for real operational problems." + mini system preview + EXPLORE WORK ↓); NDA section retokened; capabilities strip; "You've seen the systems. Now let's build one." CTA.
- [x] **W-7: Case-study navigation** — prev/next/back-to-work links on /case-study, /case-study/readmindme, /case-study/eris.
- [x] **W-8: Perf + verification** — looping visualizations pause off-screen (useInView once:false for loops); build; desktop/mobile/reduced-motion/console sweep.

---

# Projects Page Addendum (Miko_Portfolio_Projects_Page_UI_UX_Spec.md)

New IA level: Home → /work (selected systems) → /projects (deep engineering explorer) → case studies.

- [x] **P-1: Route split** — move the Work page to `app/work/page.tsx` (its explorer section becomes a "browse the archive" banner → /projects); nav gains Projects link (Work→/work); footer/homepage/CaseStudyNav links updated; sitemap + metadata updated.
- [x] **P-2: Explorer data** — `lib/projects-data.ts`: 10 real projects with category, type, status (documented only), one-liner, short problem, concise stack, per-project system visual (RagStage/AtlasStage/SdiStage/automation-mini/FlowStage flows with hover details).
- [x] **P-3: Split project explorer** — `components/projects/explorer.tsx`: left list (featured first, keyboard ↑/↓), right active-project panel (label/status, name, one-liner, PROBLEM, SYSTEM visual with run-once activation, TYPE/STACK/STATUS metadata, CTA), integrated category filters + secondary count, instant filtering, mobile = wrap chips above panel.
- [x] **P-4: Patterns behind the work** — `components/projects/work-patterns.tsx`: five looping mini-flows (AI/RAG, Automation, Integration, QA, Data) proving repeatable engineering shapes.
- [x] **P-5: Page assembly** — new `app/projects/page.tsx`: compact intro → filters+explorer → NDA six-systems section (moved from Work, #private-legaltech anchor preserved) → patterns → CTA; delete superseded work explorer component; verification sweep (build, mobile, keyboard, reduced motion, console).

---

# Case Study Experience Addendum (docs/CASE_STUDY_EXPERIENCE_MASTER_PLAN.md)

Audit (2026-08-20): ACE and ERIS were substantially rebuilt in a prior session per their own specs and already satisfy most of this master plan. Atlas NHD and ReadMindMe need the biggest additions — Atlas is missing its signature "parcel journey" and problem-equation visuals; ReadMindMe is missing the standard-LLM-vs-retrieval comparison. All four need the shared progress-rail nav (spec §8) and CTA headlines aligned to the spec's exact directive (§16).

## Global Constraints (this addendum)
- No invented metrics/results (spec §12) — every new visual reuses only already-verified facts from the existing pages.
- Reduced motion: new components render complete static state; motion is enhancement only (spec §14).
- Mobile: vertical flows, tap-friendly, no hidden-behind-hover info, no horizontal overflow (spec §13).
- CTA headlines must match spec §16 exactly (word-for-word); supporting line may stay close to what's already there.

- [x] **CS-1: Shared progress rail** — `components/work/case-study-progress-nav.tsx`: sticky desktop side rail (section labels scroll-spy highlighted via IntersectionObserver) + "← Back to Work" and "CASE STUDY 0X / 04 · NAME" header; mobile collapses to a compact dropdown/sheet control. Each case-study page wraps its `<section>`s with `id`s and passes a `sections: {id, label}[]` prop. Wire into all four pages directly under `<Navigation />`.
- [x] **CS-2: Atlas — problem equation + parcel journey** — `components/case-studies/atlas-visuals.tsx`: (a) `PropertyEquation` — "A property is not just an address." large statement + animated equation (Property + Parcel geometry + Flood data + Fire hazard data + Jurisdiction rules + Regulatory requirements = Disclosure determination), fragmented-sources-converge framing reusing the FragmentsConverge visual language; (b) `ParcelJourney` — interactive 7-stage clickable state list (Property entered → Parcel identified → Spatial datasets queried → Conditions determined → Rules applied → Output generated → Customer accesses) with a detail panel per stage, same pattern as ERIS's LifecycleCommand. Insert both into `app/case-studies/atlas-nhd/page.tsx` between Problem and How-it-works.
- [x] **CS-3: ReadMindMe — standard vs retrieval comparison** — `components/case-studies/readmindme-visuals.tsx`: `RetrievalComparison` — two-row comparison (Standard: Question → Model knowledge → Response; Retrieval: Question → Query understanding → Vector retrieval → Relevant knowledge → Context assembly → Response) with the retrieval row visually "winning" (amber vs muted). Insert into `app/case-studies/readmindme/page.tsx` right after the hero, before "How it works."
- [x] **CS-4: ACE + ERIS small additions** — ACE: add "The difficult part was not building individual screens. It was keeping the workflow connected." as the lede on the existing FragmentsConverge section header. ERIS: extend `LifecycleCommand`'s state machine with a PASS → READY / ISSUE → MAINTENANCE branch after AUDITED (toggle button, not full rebuild); add "When resources are needed, uncertainty is the problem." to the hero.
- [x] **CS-5: CTA headline alignment** — update all four case-study CTA `<h2>` to the spec §16 exact wording: Atlas "Building something where the data has to be correct?"; ReadMindMe "Exploring how AI can work with your own data?"; ACE "Trying to connect disconnected business systems?"; ERIS "Need better visibility over a complex operational workflow?" Keep existing supporting copy where it still reads naturally.
- [x] **CS-6: Verification** — build; Playwright pass on all four case studies at desktop 1440px + mobile 390px (progress nav scroll-spy, parcel journey clicks, retrieval comparison, PASS/ISSUE toggle); reduced-motion check; console-error sweep.
