# Portfolio Repositioning Design

**Date:** 2026-04-07
**Status:** Approved
**Approach:** B — Copy rewrite + page restructure

---

## Goal

Reposition the portfolio from "general full-stack developer" to:
> "Developer specializing in automation-driven systems, internal tools, and scalable SaaS platforms"

**Target audience:** Both direct clients (business owners, startups, SMEs) and employers/recruiters — roughly equal.

---

## Page Structure Changes

### Home page (current → new)
```
Navigation
Hero                    ← rewrite copy
TrustedBrands           ← no change
WhatIDo                 ← rewrite copy
FeaturedWork            ← rewrite 3 project descriptions
NDATeaser (NEW)         ← new component
Expertise               ← rewrite copy
TechStack               ← no change
Footer
```

### Projects page
- Rewrite all 6 public project descriptions (context, outcome, key decisions)
- Add NDA full detail section after public projects (anchored at `#private-legaltech`)

### Automation page
- Add 2 n8n flows from the NDA LegalTech work (document generation + lead generation pipeline)

### SEO metadata
- Update `lib/seo.ts` siteConfig title and description
- Update `app/page.tsx` metadata

---

## Section Designs

### Hero (`components/hero.tsx`)

**Headline:**
> I Build Systems That Replace Manual Work

**Subtext:**
> Full-stack developer specializing in internal tools, SaaS platforms, and automation pipelines. I help teams ship faster, operate leaner, and scale without adding headcount.

**"What I deliver" card:**
1. Automation-first architecture — n8n, webhooks, and custom pipelines that eliminate repetitive operations across your stack.
2. Internal tools & SaaS platforms — Client portals, admin dashboards, scheduling systems, and data pipelines built for real workflows — not prototypes.
3. Production-grade reliability — RBAC, audit trails, error handling, and QA baked in from day one.

**Tags:** `Automation` `Internal Tools` `SaaS` `API-first`

**CTAs:** "View Projects" | "Work With Me" (rename from "Contact Me")

---

### What I Do (`components/what-i-do.tsx`)

> I partner with startups and businesses to build the systems their teams rely on daily — from client-facing SaaS platforms to backend automation pipelines that eliminate manual work. Whether integrating a new tool into your stack or architecting a system from scratch, I work end-to-end: design, backend, frontend, deployment, and automation.

---

### Expertise (`components/expertise.tsx`)

**01 — SaaS & Internal Tools**
> Full-stack platforms built for real workflows: client portals, admin dashboards, scheduling systems, and data pipelines. Not prototypes — production systems teams actually depend on.
- Multi-tenant architecture and role-based access
- Complex form systems and document generation
- API-first design for clean integrations

**02 — Automation & Integration Pipelines**
> n8n, webhooks, and custom backend services that connect your tools and eliminate manual steps. Data in, action out — reliably.
- File processing and data transformation pipelines
- CRM, billing, and document automation
- Error handling, retries, and run history

**03 — Production Reliability**
> Enterprise QA mindset applied to every build. Validation, access control, audit trails, and monitoring so releases don't come back as support tickets.
- API, UI, and integration testing
- RBAC and sensitive data handling
- Observability and rollout control

---

### Featured Work (`components/featured-work.tsx`)

**01 — ACE Clinical Placement Platform**
> Placement coordinators were juggling bookings, student profiles, and document packs across spreadsheets and email. Built a CRM-synced booking platform with location search, automated onboarding flows, and PandaDoc document packs triggered on placement milestones.

**02 — Roadworthy Inspection Platform**
> Inspection bookings required manual coordination across payments, job creation, and customer comms — any failure broke the chain. Built an end-to-end booking pipeline with idempotent Stripe payments, ServiceM8 job creation, and Brevo lifecycle comms in one reliable flow.

**03 — Emergency Resource Information System**
> Regional responders had no central view of equipment availability or movement history during incidents. Built a real-time resource management system with dispatch-ready dashboards, movement audit trails, and RBAC across municipalities.

---

### NDA Teaser — new component (`components/nda-teaser.tsx`)

Single card section inserted between FeaturedWork and Expertise on home page.

**Title:** Private SaaS Platform — LegalTech *(NDA)*
**Subtitle:** Full-Stack Developer · 4 Production Systems
**Body:**
> Built four internal systems for a LegalTech firm — document generation pipelines, data transformation engines, multi-party scheduling, and a Wear OS–integrated rule engine for mediator workflows. All systems are in active production handling sensitive legal data.

**Tags:** `React` `n8n` `Supabase` `Node.js` `SurveyJS` `Wear OS` `WordPress`
**Footer note:** "Under NDA — no company name, links, or screenshots."
**CTA:** "See full breakdown →" → links to `/projects#private-legaltech`

---

### Projects Page — 6 public project rewrites (`app/projects/page.tsx`)

#### ACE Clinical Placement Platform
- **Context:** Placement coordinators managed bookings, student profiles, and document packs across Pipedrive, email threads, and spreadsheets. Any status update required manual reconciliation across all three.
- **Solution:** API-first booking platform synced to Pipedrive — location-aware search, automated onboarding flows, and PandaDoc document packs triggered on placement milestones.
- **Outcome:** Onboarding is templated, bookings stay in sync with CRM records, and coordinators see placement status without manual reconciliation.
- **Key decisions:** Same as current, tone only updated.

#### Roadworthy Inspection Platform
- **Context:** Roadworthy inspections required payments, job creation, and customer messaging to stay in sync across three separate systems. A failure in any one broke the entire flow.
- **Solution:** Booking-to-inspection pipeline integrating Stripe, ServiceM8, and Brevo — idempotent API calls, payment validation, and automated job creation in one flow.
- **Outcome:** Bookings reliably trigger payments, job templates, and lifecycle emails — cutting manual cleanup and eliminating sync failures.

#### Emergency Resource Information System
- **Context:** Regional responders had no central view of what equipment was available, where it was headed, or who moved it — critical visibility gaps during high-pressure incidents.
- **Solution:** Real-time resource management system with dispatch-ready dashboards, movement audit trails, and role-based access across multiple municipalities.
- **Outcome:** Teams locate and dispatch resources faster with clear accountability — reducing coordination failures during incidents.

#### Emport Employee Management
- **Context:** Schools were managing attendance, payroll, and leave approvals across scattered spreadsheets shared between HR and finance — reconciliation was manual and error-prone.
- **Solution:** Unified HR platform with linked attendance, leave, and payroll workflows. Role-based permissions separate HR, finance, and admin actions. Audit-friendly exports eliminate spreadsheet handoffs.
- **Outcome:** Attendance, leave, and payroll stay aligned with approvals and exports — removing manual reconciliation between HR and finance.

#### Boostlab Digital Storefront
- **Context:** The team needed a conversion-focused storefront where payments, order syncing, and analytics matched the designed experience exactly — no gaps between design and production.
- **Solution:** React storefront aligned to Figma tokens, Shopify as product/catalog backend, Checkout.com for payments, and Meta Pixel instrumented on key funnel steps.
- **Outcome:** Customers get a smooth checkout, orders sync cleanly to Shopify, and attribution is accurate — reducing cart drop-offs and support load.

#### LogiWare Inventory Platform
- **Context:** Logistics teams were reconciling stock levels and shipment status across multiple trackers — no single source of truth meant slow fulfillment decisions.
- **Solution:** Centralized inventory and shipment management platform with movement history, fulfillment dashboards, and a deployment pipeline with staged rollouts.
- **Outcome:** Teams see inventory and shipment status in one place — reducing manual reconciliation and enabling faster fulfillment decisions.

---

### Projects Page — NDA Full Detail (new section, `#private-legaltech`)

**Header:** Private SaaS Platform — LegalTech (NDA)
**Role line:** Full-Stack Developer · 4 Internal Systems · Active Production

#### System 1 — Dynamic Document Generation Pipeline
> Legal forms are complex. Static templates break the moment data changes. Built a form-driven document generation pipeline where users complete a SurveyJS form embedded in WordPress via shortcode. On submission, form data flows into Supabase, triggers an n8n workflow, merges dynamic user data and metadata into a document, and delivers it to the user's email automatically.

Stack: `React` `SurveyJS` `WordPress` `Supabase` `n8n`
Key outcome: Zero manual document handling. Form submission → file in inbox.

#### System 2 — Lead Generation & Data Transformation Pipeline
> The firm received bulk data exports in a proprietary `^`-separated format inside zip files. Built a fully automated pipeline: files are uploaded to a watched Google Drive folder, n8n detects the upload and triggers a custom Node/Express backend that extracts and transforms the raw data into structured leads, then moves the zip to a processed folder as a completion signal.

Stack: `Node.js` `Express` `n8n` `Google Drive API`
Key outcome: Zero manual data processing. Upload → leads generated → file archived.

#### System 3 — Multi-Party Dispute Scheduling System
> Dispute negotiations require all three parties — creator, receiver, and mediator — to agree on a meeting time. Built a scheduling system where a creator proposes a date, the receiver accepts or declines, and on agreement all three parties are notified automatically. Designed for legal dispute workflows where neutral coordination matters.

Stack: `React` `Node.js` `Supabase`
Key outcome: Three-party consent model with automated notifications on agreement.

#### System 4 — Mediator Rule Engine with Wear OS Integration
> Mediators need to trigger timed actions during sessions — reminders, check-ins, delays — without interrupting the flow. Built a rule engine with three rule types: *instant* (fires immediately), *delay* (fires after a set timer), and *cron* (fires on a set schedule). Rules are configured in a frontend dashboard, mapped to named buttons, and surfaced on a Wear OS watch so the mediator can fire any rule with a single button press. Also includes a voice command system for natural-language scheduling.

Stack: `React` `Node.js` `Wear OS` `Android`
Key outcome: Frontend rule configuration → one-tap execution from a watch during live sessions.

---

### Automation Page — 2 new n8n flows

#### Flow 1 — Document Generation Pipeline (LegalTech, NDA)
> SurveyJS form submission triggers an n8n workflow that pulls dynamic form data from Supabase, merges it with file metadata, generates a document, and delivers it to the user's email. Handles data mapping, file generation, and delivery in a single automated sequence.

#### Flow 2 — Lead Generation from Bulk Data Uploads (LegalTech, NDA)
> n8n watches a Google Drive folder for new zip file uploads. On detection, it retrieves the file, sends it to a custom Node/Express backend for extraction and transformation of `^`-separated data into structured leads, then moves the processed file to an archive folder as a completion signal.

---

## SEO Updates

**`lib/seo.ts` title:**
> Miko Canares — Full-Stack Developer · Automation & Internal Tools

**`lib/seo.ts` description:**
> Full-stack developer specializing in automation-driven systems, internal tools, and scalable SaaS platforms. I help teams eliminate manual work and ship production systems that scale.

**New keywords to add:** `internal tools`, `SaaS developer`, `automation pipelines`, `LegalTech`, `n8n developer`, `Wear OS`

---

## Files to Touch

| File | Change |
|------|--------|
| `components/hero.tsx` | Full copy rewrite |
| `components/what-i-do.tsx` | Copy rewrite |
| `components/expertise.tsx` | Full copy rewrite |
| `components/featured-work.tsx` | Rewrite 3 project descriptions |
| `components/nda-teaser.tsx` | NEW component |
| `app/page.tsx` | Add NDATeaser import + insert in layout |
| `app/projects/page.tsx` | Rewrite 6 projects + add NDA section |
| `app/automation/page.tsx` | Add 2 n8n flow entries |
| `lib/seo.ts` | Update title, description, keywords |
