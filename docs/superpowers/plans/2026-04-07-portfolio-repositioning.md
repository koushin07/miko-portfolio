# Portfolio Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio from "general full-stack developer" to "developer specializing in automation-driven systems, internal tools, and scalable SaaS platforms" — with copy rewrites, a new NDA section, and a bolder hero UI matching the Webflow design reference.

**Architecture:** Content-only updates to existing components plus one new component (`nda-teaser.tsx`). No routing changes. Home page gets NDATeaser inserted between FeaturedWork and Expertise. Projects page gets a new NDA detail block. Automation page gets two new n8n flow entries.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Syne (display font already loaded), Manrope (body font already loaded)

---

## File Map

| File | Change Type | What Changes |
|------|-------------|--------------|
| `lib/seo.ts` | Modify | Title, description, keywords |
| `app/page.tsx` | Modify | Metadata description + NDATeaser import + insertion |
| `components/hero.tsx` | Rewrite | New copy + full-width layout + bold font-weight |
| `components/what-i-do.tsx` | Modify | Copy only |
| `components/expertise.tsx` | Rewrite | All copy + capability titles/bullets |
| `components/featured-work.tsx` | Modify | 3 project descriptions |
| `components/nda-teaser.tsx` | Create | New component |
| `app/projects/page.tsx` | Rewrite | All 6 project data objects + new NDA section block |
| `app/automation/page.tsx` | Modify | Add n8n flows section |

---

## Task 1: Update SEO metadata

**Files:**
- Modify: `lib/seo.ts`

- [ ] **Step 1: Update siteConfig in `lib/seo.ts`**

Replace the `title`, `description`, and `keywords` fields:

```ts
export const siteConfig = {
  name: "Miko Canares",
  title: "Miko Canares — Full-Stack Developer · Automation & Internal Tools",
  description:
    "Full-stack developer specializing in automation-driven systems, internal tools, and scalable SaaS platforms. I help teams eliminate manual work and ship production systems that scale.",
  url: DEFAULT_SITE_URL,
  locale: "en_US",
  email: "canaresmiko3@gmail.com",
  ogImage: "/modern-coding-workspace-with-multiple-monitors-sho.jpg",
  keywords: [
    "Miko Canares",
    "Full-stack developer",
    "Automation engineer",
    "Internal tools developer",
    "SaaS developer",
    "Automation pipelines",
    "n8n developer",
    "JavaScript",
    "Next.js",
    "Node.js",
    "TypeScript",
    "LegalTech",
    "Wear OS",
    "n8n",
    "Zapier",
    "Make",
    "Stripe integrations",
    "Shopify integrations",
  ],
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/seo.ts
git commit -m "feat: update SEO metadata for new positioning"
```

---

## Task 2: Rewrite hero component

**Files:**
- Modify: `components/hero.tsx`

- [ ] **Step 1: Rewrite `components/hero.tsx`**

Replace the entire file content:

```tsx
"use client"

import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"

const highlights = [
  {
    title: "Automation-first architecture",
    detail: "n8n, webhooks, and custom pipelines that eliminate repetitive operations across your stack.",
  },
  {
    title: "Internal tools & SaaS platforms",
    detail: "Client portals, admin dashboards, scheduling systems, and data pipelines built for real workflows — not prototypes.",
  },
  {
    title: "Production-grade reliability",
    detail: "RBAC, audit trails, error handling, and QA baked in from day one.",
  },
]

export default function Hero() {
  return (
    <section className="hero-mesh bg-hero-bg text-hero-foreground pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32 space-y-8">
        <FadeIn delay={0.05} duration={0.8}>
          <h1
            className="text-h0 font-bold text-white leading-[0.97] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I Build Systems<br />That Replace<br />Manual Work.
          </h1>
        </FadeIn>

        <FadeIn delay={0.15} duration={0.8}>
          <p className="text-white/70 text-xl-custom max-w-2xl">
            Full-stack developer specializing in internal tools, SaaS platforms, and automation pipelines. I help teams ship faster, operate leaner, and scale without adding headcount.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.8}>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:border-white/50 transition-all duration-300 text-base-custom font-medium"
            >
              Work With Me
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} duration={0.8} direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {highlights.map((item) => (
              <div key={item.title} className="space-y-1.5">
                <p className="text-white text-sm font-semibold">{item.title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/hero.tsx
git commit -m "feat: rewrite hero with bold display headline and new positioning copy"
```

---

## Task 3: Rewrite What I Do section

**Files:**
- Modify: `components/what-i-do.tsx`

- [ ] **Step 1: Update copy in `components/what-i-do.tsx`**

Replace only the paragraph text inside the component:

```tsx
"use client"

import { FadeIn } from "@/components/ui/motion"

export default function WhatIDo() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="bg-accent-secondary border border-gray-200 rounded-2xl p-8 md:p-10 space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">What I do</p>
            <p className="text-xl-custom text-foreground max-w-4xl leading-relaxed">
              I partner with startups and businesses to build the systems their teams rely on daily — from client-facing
              SaaS platforms to backend automation pipelines that eliminate manual work. Whether integrating a new tool
              into your stack or architecting a system from scratch, I work end-to-end: design, backend, frontend,
              deployment, and automation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/what-i-do.tsx
git commit -m "feat: update what-i-do copy for new positioning"
```

---

## Task 4: Rewrite Expertise section

**Files:**
- Modify: `components/expertise.tsx`

- [ ] **Step 1: Rewrite `components/expertise.tsx`**

Replace the entire file:

```tsx
"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    num: "01",
    title: "SaaS & Internal Tools",
    description:
      "Full-stack platforms built for real workflows: client portals, admin dashboards, scheduling systems, and data pipelines. Not prototypes — production systems teams actually depend on.",
    bullets: [
      "Multi-tenant architecture and role-based access",
      "Complex form systems and document generation",
      "API-first design for clean integrations",
    ],
    href: "/projects",
  },
  {
    num: "02",
    title: "Automation & Integration Pipelines",
    description:
      "n8n, webhooks, and custom backend services that connect your tools and eliminate manual steps. Data in, action out — reliably.",
    bullets: [
      "File processing and data transformation pipelines",
      "CRM, billing, and document automation",
      "Error handling, retries, and run history",
    ],
    href: "/automation",
  },
  {
    num: "03",
    title: "Production Reliability",
    description:
      "Enterprise QA mindset applied to every build. Validation, access control, audit trails, and monitoring so releases don't come back as support tickets.",
    bullets: [
      "API, UI, and integration testing",
      "RBAC and sensitive data handling",
      "Observability and rollout control",
    ],
    href: "/case-study",
  },
]

export default function Expertise() {
  return (
    <section className="bg-accent-secondary py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="mb-10 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Core capabilities</p>
            <h2 className="text-h1 font-medium text-foreground">Build. Automate. Ship.</h2>
            <p className="text-muted-foreground text-base max-w-[720px]">
              Full-stack delivery with automation and reliability baked in — so every system ships with the integrations
              and quality teams can depend on.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full py-6">
          {capabilities.map((capability, i) => (
            <FadeIn key={capability.title} delay={0.1 * (i + 1)} direction="up">
              <div className="bg-white h-full rounded-xl p-6 md:p-8 flex flex-col gap-5 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                <span
                  className="font-display text-[4.5rem] font-bold leading-none text-foreground/[0.07] select-none group-hover:text-foreground/[0.12] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {capability.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80 flex-1">
                  {capability.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.55em] inline-block w-3 h-[2px] shrink-0" style={{ backgroundColor: "var(--amber)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={capability.href}
                  className="text-foreground text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all group/link"
                >
                  View details
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/expertise.tsx
git commit -m "feat: rewrite expertise section copy for automation/SaaS positioning"
```

---

## Task 5: Rewrite Featured Work descriptions

**Files:**
- Modify: `components/featured-work.tsx`

- [ ] **Step 1: Update project descriptions in `components/featured-work.tsx`**

Replace only the `projects` array and the section heading/subtext. Keep all styling identical:

```tsx
const projects = [
  {
    title: "ACE Clinical Placement Platform",
    description:
      "Placement coordinators were juggling bookings, student profiles, and document packs across spreadsheets and email. Built a CRM-synced booking platform with location search, automated onboarding flows, and PandaDoc document packs triggered on placement milestones.",
    stack: ["Next.js", "Laravel", "TypeScript"],
    integrations: ["Mapbox", "Clerk", "PandaDoc", "Pipedrive"],
    accent: "#4F6EF7",
    num: "01",
    link: "/projects#ace",
  },
  {
    title: "Roadworthy Inspection Platform",
    description:
      "Inspection bookings required manual coordination across payments, job creation, and customer comms — any failure broke the chain. Built an end-to-end pipeline with idempotent Stripe payments, ServiceM8 job creation, and Brevo lifecycle comms in one reliable flow.",
    stack: ["React", "Node.js", "TypeScript"],
    integrations: ["Stripe", "ServiceM8", "Brevo"],
    accent: "#E8A020",
    num: "02",
    link: "/projects#roadworthy",
  },
  {
    title: "Emergency Resource Information System",
    description:
      "Regional responders had no central view of equipment availability or movement history during incidents. Built a real-time resource management system with dispatch-ready dashboards, movement audit trails, and RBAC across municipalities.",
    stack: ["Laravel", "Inertia", "Vue"],
    integrations: ["Inventory", "Dispatch", "Reporting"],
    accent: "#2D9A6E",
    num: "03",
    link: "/case-study",
  },
]
```

Also update the section heading and subtext:

```tsx
<h2 className="text-h1 font-medium text-white mt-2">Systems built to solve real problems</h2>
<p className="text-white/50 text-base-custom max-w-2xl mt-3">
  Problem → solution → impact. Each build combines full-stack delivery with automation and integration reliability.
</p>
```

- [ ] **Step 2: Commit**

```bash
git add components/featured-work.tsx
git commit -m "feat: rewrite featured work descriptions with problem-solution-impact framing"
```

---

## Task 6: Create NDA Teaser component

**Files:**
- Create: `components/nda-teaser.tsx`

- [ ] **Step 1: Create `components/nda-teaser.tsx`**

```tsx
"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, Lock } from "lucide-react"
import Link from "next/link"

const tools = ["React", "n8n", "Supabase", "Node.js", "SurveyJS", "Wear OS", "WordPress"]

export default function NDATeaser() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="bg-[#080c24] rounded-2xl p-8 md:p-10 space-y-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Lock size={14} className="text-amber-400" style={{ color: "var(--amber)" }} />
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.14em]"
                    style={{ color: "var(--amber)" }}
                  >
                    Under NDA
                  </span>
                </div>
                <h2 className="text-h2 font-semibold text-white">
                  Private SaaS Platform — LegalTech
                </h2>
                <p className="text-white/50 text-sm">Full-Stack Developer · 4 Production Systems · Active</p>
              </div>
            </div>

            <p className="text-white/70 text-base-custom max-w-3xl leading-relaxed">
              Built four internal systems for a LegalTech firm — a document generation pipeline, a data transformation
              engine for lead generation, a multi-party dispute scheduling system, and a Wear OS–integrated rule engine
              for mediator workflows. All systems are in active production handling sensitive legal data.
            </p>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-white/10 text-white/70 text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-white/10">
              <p className="text-white/35 text-xs">No company name, links, or screenshots — NDA protected.</p>
              <Link
                href="/projects#private-legaltech"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium group transition-colors duration-200"
              >
                See full breakdown
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/nda-teaser.tsx
git commit -m "feat: add NDA teaser component for LegalTech private work"
```

---

## Task 7: Update home page to include NDATeaser

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update `app/page.tsx`**

Replace the entire file:

```tsx
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustedBrands from "@/components/trusted-brands";
import Expertise from "@/components/expertise";
import TechStack from "@/components/tech-stack";
import FeaturedWork from "@/components/featured-work";
import WhatIDo from "@/components/what-i-do";
import NDATeaser from "@/components/nda-teaser";
import Footer from "@/components/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Full-stack developer specializing in automation-driven systems, internal tools, and scalable SaaS platforms. I help teams eliminate manual work and ship production systems that scale.",
  path: "/",
  keywords: ["Full-stack developer", "Automation engineer", "Internal tools", "SaaS platforms", "n8n"],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBrands />
      <WhatIDo />
      <FeaturedWork />
      <NDATeaser />
      <Expertise />
      <TechStack />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add NDATeaser to home page layout"
```

---

## Task 8: Rewrite all 6 projects + add NDA section on projects page

**Files:**
- Modify: `app/projects/page.tsx`

- [ ] **Step 1: Replace the `projects` array in `app/projects/page.tsx`**

Replace the entire `projects` array (lines 34–174) with:

```tsx
const projects: Project[] = [
  {
    id: "ace",
    title: "ACE Clinical Placement Platform",
    summary:
      "CRM-synced booking platform with location search, automated onboarding flows, and document packs triggered on placement milestones.",
    stack: "Next.js, Laravel, TypeScript",
    integrations: "Mapbox, Clerk, PandaDoc, Pipedrive",
    context:
      "Placement coordinators managed bookings, student profiles, and document packs across Pipedrive, email threads, and spreadsheets. Any status update required manual reconciliation across all three.",
    role: "Architecture, full-stack build, integrations, deployment, QA",
    techStack: {
      frontend: "Next.js + TypeScript + Tailwind component system",
      backend: "Laravel API with scheduling, permissions, and CRM sync",
      infra: "Vercel for web app and managed Laravel hosting",
      apis: "Mapbox for search, Clerk for auth, PandaDoc for document packs, Pipedrive for CRM alignment",
    },
    keyDecisions: [
      "API-first booking flow so scheduling, profiles, and documents stay consistent across web and CRM.",
      "Document generation via PandaDoc templates triggered from milestone events.",
      "Centralized error handling around third-party calls with retries and audit logs.",
    ],
    outcome:
      "Onboarding is templated, bookings stay in sync with CRM records, and coordinators see placement status without manual reconciliation.",
  },
  {
    id: "roadworthy",
    title: "Roadworthy Inspection Platform",
    summary:
      "Booking-to-inspection pipeline integrating payments, job creation, and lifecycle comms in one reliable flow.",
    stack: "React, Node.js, TypeScript",
    integrations: "Stripe, ServiceM8, Brevo, Figma QA",
    context:
      "Roadworthy inspections required payments, job creation, and customer messaging to stay in sync across three separate systems. A failure in any one broke the entire flow.",
    role: "Frontend and backend pairing with QA on every release",
    techStack: {
      frontend: "React + TypeScript aligned to Figma for pixel fidelity",
      backend: "Express/Node services handling bookings, payments, and job creation",
      infra: "Containerized services with staged environments for regression runs",
      apis: "Stripe for payments, ServiceM8 for job templates, Brevo for lifecycle comms",
    },
    keyDecisions: [
      "Idempotent API calls for payment and job creation to prevent duplicates on retry.",
      "Validation paths for payment success/failure to keep bookings consistent.",
      "Automated QA passes against Figma components to protect UX quality.",
    ],
    outcome:
      "Bookings reliably trigger payments, job templates, and lifecycle emails — cutting manual cleanup and eliminating sync failures.",
  },
  {
    id: "eris",
    title: "Emergency Resource Information System",
    summary:
      "Real-time resource management for responders with dispatch dashboards, movement audit trails, and RBAC.",
    stack: "Laravel, Inertia, Vue",
    integrations: "Inventory, dispatch workflows, reporting",
    context:
      "Regional responders had no central view of what equipment was available, where it was headed, or who moved it — critical visibility gaps during high-pressure incidents.",
    role: "Product architecture, development, and QA for critical workflows",
    techStack: {
      frontend: "Vue + Inertia for fast dashboards and filtering",
      backend: "Laravel services for inventory readiness, reservations, and audit trails",
      infra: "Hardened hosting with backups and role-based access",
      apis: "Internal dispatch and reporting endpoints designed for future integrations",
    },
    keyDecisions: [
      "Movement history baked into the data model for accountability across municipalities.",
      "Dispatch-ready views that prioritize availability windows and nearest resources.",
      "Reporting endpoints to enable post-incident reviews and oversight.",
    ],
    outcome:
      "Teams locate and dispatch resources faster with clear accountability — reducing coordination failures during incidents.",
    cta: { label: "Read the case study", href: "/case-study" },
  },
  {
    id: "emport",
    title: "Emport Employee Management",
    summary:
      "Unified HR platform linking attendance, payroll, and leave workflows with role-based access and audit exports.",
    stack: "Laravel, React, MySQL",
    integrations: "Payroll exports, role management, notifications",
    context:
      "Schools were managing attendance, payroll, and leave approvals across scattered spreadsheets shared between HR and finance — reconciliation was manual and error-prone.",
    role: "Product architecture, full-stack build, QA, deployment",
    techStack: {
      frontend: "React with reusable dashboards and forms",
      backend: "Laravel services for attendance, payroll, leave workflows",
      infra: "Containerized app with staged environments for approvals",
      apis: "Internal payroll and notification hooks",
    },
    keyDecisions: [
      "Modeled attendance, leave, and payroll as linked workflows to keep calculations consistent.",
      "Role-based permissions to separate HR, finance, and admin actions.",
      "Audit-friendly exports so finance could reconcile without rework.",
    ],
    outcome:
      "Attendance, leave, and payroll stay aligned with approvals and exports — removing manual reconciliation between HR and finance.",
  },
  {
    id: "boostlab",
    title: "Boostlab Digital Storefront",
    summary:
      "Conversion-focused storefront with Shopify backend, Checkout.com payments, and Meta Pixel on key funnel steps.",
    stack: "React, Shopify, Checkout.com",
    integrations: "Shopify, Checkout.com, Meta Pixel",
    context:
      "The team needed a conversion-focused storefront where payments, order syncing, and analytics matched the designed experience exactly — no gaps between design and production.",
    role: "Frontend build, integrations, QA, deployment",
    techStack: {
      frontend: "React + Tailwind pages tuned to the Figma design system",
      backend: "Shopify backend as product/catalog source of truth",
      infra: "Static hosting with CDN for fast global delivery",
      apis: "Shopify for orders, Checkout.com for payments, Meta Pixel for tracking",
    },
    keyDecisions: [
      "Aligned UI components to Figma tokens to preserve fidelity across breakpoints.",
      "Payment and order flows instrumented with error states to prevent silent failures.",
      "Analytics tagged on key funnel steps for clear attribution.",
    ],
    outcome:
      "Customers get a smooth checkout, orders sync cleanly to Shopify, and attribution is accurate — reducing cart drop-offs and support load.",
  },
  {
    id: "logiware",
    title: "LogiWare Inventory Platform",
    summary:
      "Centralized inventory and shipment management with movement history, fulfillment dashboards, and staged rollouts.",
    stack: "ASP.NET, Angular, SQL Server",
    integrations: "Shipment tracking, product flow monitoring",
    context:
      "Logistics teams were reconciling stock levels and shipment status across multiple trackers — no single source of truth meant slow fulfillment decisions.",
    role: "Frontend and backend delivery with QA and deployment",
    techStack: {
      frontend: "Angular + Tailwind dashboards for status visibility",
      backend: "ASP.NET services for inventory, shipment, and activity history",
      infra: "Hardened hosting with backups and staged releases",
      apis: "Internal shipment and inventory endpoints with future carrier hooks",
    },
    keyDecisions: [
      "Centralized inventory state with movement history to avoid conflicting records.",
      "Dashboard views tuned for fulfillment and ops teams with actionable filters.",
      "Deployment pipeline with staged rollouts to protect uptime.",
    ],
    outcome:
      "Teams see inventory and shipment status in one place — reducing manual reconciliation and enabling faster fulfillment decisions.",
  },
]
```

- [ ] **Step 2: Add NDA section after the detail section in `app/projects/page.tsx`**

Add this new section just before `<Footer />`, after the closing `</section>` of the detail section:

```tsx
      <section id="private-legaltech" className="py-16 md:py-24 bg-[#080c24]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-10">
          <FadeIn>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--amber)" }}>
                  Under NDA
                </span>
              </div>
              <h2 className="text-h2 text-white">Private SaaS Platform — LegalTech</h2>
              <p className="text-white/50 text-sm">Full-Stack Developer · 4 Internal Systems · Active Production</p>
              <p className="text-white/60 text-base max-w-2xl">
                No company name, links, or screenshots. Descriptions cover system architecture and outcomes only.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Dynamic Document Generation Pipeline",
                body: "Legal forms are complex — static templates break the moment data changes. Built a form-driven document generation pipeline where users complete a SurveyJS form embedded in WordPress via shortcode. On submission, form data flows into Supabase, triggers an n8n workflow, merges dynamic user data and metadata into a document, and delivers it to the user's email automatically.",
                stack: ["React", "SurveyJS", "WordPress", "Supabase", "n8n"],
                outcome: "Zero manual document handling. Form submission → file in inbox.",
              },
              {
                num: "02",
                title: "Lead Generation & Data Transformation Pipeline",
                body: "The firm received bulk data exports in a proprietary ^-separated format inside zip files. Built a fully automated pipeline: files are uploaded to a watched Google Drive folder, n8n detects the upload and triggers a custom Node/Express backend that extracts and transforms the raw data into structured leads, then moves the zip to a processed folder as a completion signal.",
                stack: ["Node.js", "Express", "n8n", "Google Drive API"],
                outcome: "Zero manual data processing. Upload → leads generated → file archived.",
              },
              {
                num: "03",
                title: "Multi-Party Dispute Scheduling System",
                body: "Dispute negotiations require all three parties — creator, receiver, and mediator — to agree on a meeting time. Built a scheduling system where a creator proposes a date, the receiver accepts or declines, and on agreement all three parties are notified automatically. Designed for legal dispute workflows where neutral coordination matters.",
                stack: ["React", "Node.js", "Supabase"],
                outcome: "Three-party consent model with automated notifications on agreement.",
              },
              {
                num: "04",
                title: "Mediator Rule Engine with Wear OS Integration",
                body: "Mediators need to trigger timed actions during sessions — reminders, check-ins, delays — without interrupting the flow. Built a rule engine with three rule types: instant (fires immediately), delay (fires after a set timer), and cron (fires on a set schedule). Rules are configured in a frontend dashboard, mapped to named buttons, and surfaced on a Wear OS watch so the mediator can fire any rule with a single button press. Also includes a voice command system for natural-language scheduling.",
                stack: ["React", "Node.js", "Wear OS", "Android"],
                outcome: "Frontend rule configuration → one-tap execution from a watch during live sessions.",
              },
            ].map((system, i) => (
              <FadeIn key={system.num} delay={0.08 * i} direction="up">
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 h-full flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-white/30">{system.num}</span>
                  <h3 className="text-lg font-semibold text-white">{system.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{system.body}</p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {system.stack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded text-xs text-white/60 border border-white/10 bg-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--amber)" }} />
                      <p className="text-white/70 text-sm">{system.outcome}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 3: Commit**

```bash
git add app/projects/page.tsx
git commit -m "feat: rewrite all 6 project descriptions and add NDA private work section"
```

---

## Task 9: Add n8n flows to automation page

**Files:**
- Modify: `app/automation/page.tsx`

- [ ] **Step 1: Add n8n flows section to `app/automation/page.tsx`**

Add this new section between the existing "Use cases" section and the "Reliability focus" section (after the closing `</section>` of the use cases block):

```tsx
      <section className="py-16 md:py-20 bg-[#080c24]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-8">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/40">Real-world n8n flows</p>
              <h2 className="text-h2 text-white">Production pipelines built with n8n</h2>
              <p className="text-white/55 text-base max-w-2xl">
                These flows were built for a LegalTech firm (NDA). Included to show the depth and complexity of
                automation work — no company name or identifying details.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Document Generation Pipeline",
                description:
                  "SurveyJS form submission triggers an n8n workflow that pulls dynamic form data from Supabase, merges it with file metadata, generates a document, and delivers it to the user's email. Handles data mapping, file generation, and delivery in a single automated sequence.",
                tags: ["SurveyJS", "Supabase", "n8n", "Email delivery"],
              },
              {
                num: "02",
                title: "Lead Generation from Bulk Data Uploads",
                description:
                  "n8n watches a Google Drive folder for new zip file uploads. On detection, it retrieves the file, sends it to a custom Node/Express backend for extraction and transformation of ^-separated data into structured leads, then moves the processed file to an archive folder as a completion signal.",
                tags: ["Google Drive API", "n8n", "Node.js", "Express"],
              },
            ].map((flow, i) => (
              <FadeIn key={flow.num} delay={0.1 * i} direction="up">
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 h-full flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-white/30">{flow.num}</span>
                  <h3 className="text-lg font-semibold text-white">{flow.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{flow.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {flow.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs text-white/60 border border-white/10 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Commit**

```bash
git add app/automation/page.tsx
git commit -m "feat: add n8n LegalTech flows to automation page"
```

---

## Self-Review Checklist

- [x] SEO title/description updated — Task 1
- [x] Hero: full-width bold display headline + new copy + "Work With Me" CTA — Task 2
- [x] What I Do: new copy — Task 3
- [x] Expertise: all 3 cards rewritten with new capability titles and bullets — Task 4
- [x] Featured Work: all 3 descriptions rewritten with problem-solution-impact — Task 5
- [x] NDA teaser: new component with dark card, lock icon, amber NDA badge, 4 tools listed — Task 6
- [x] Home page: NDATeaser inserted between FeaturedWork and Expertise — Task 7
- [x] Projects page: all 6 project data objects rewritten, NDA section added at `#private-legaltech` — Task 8
- [x] Automation page: 2 n8n flows added in dark section — Task 9
- [x] No TBDs or placeholders — all content is complete
- [x] `CheckCircle2` is already imported in `app/projects/page.tsx` — consistent with existing usage
- [x] `FadeIn` is available in all files that use it — already imported
- [x] `var(--amber)` used consistently for NDA accent color across all new UI
