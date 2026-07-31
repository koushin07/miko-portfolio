# Atlas Work + Conversion Rebuild — Design

**Date:** 2026-07-31
**Status:** Approved
**Scope:** `miko-portfolio` — homepage, `/projects`, `/case-study`

## Problem

Two problems, one fix.

1. The strongest body of work Miko has — the Atlas Geotech platform (7 repos, ~59–96% authorship
   on the four that matter) — is entirely absent from the portfolio.
2. The portfolio has measurable conversion gaps: no closing CTA, no measurable outcomes on any
   project, no personal identification in the hero, and six fabricated testimonials sitting one
   import away from shipping.

Atlas fixes gap #2 as a side effect: it is the first project with hard, verifiable numbers.

## Research basis

Findings that drove the structure (see conversation for sources):

- Visitors scan for 5–10 seconds before deciding. Above-fold clarity dominates everything else.
- Specific numbers outperform adjectives ("increased conversion 23%" > "improved conversions").
- Converting bio formula: **specific outcome → for whom → through what method**.
- Benefit-led CTAs beat generic ones ("Book a Systems Review" > "Contact Me").
- Best structure: project-first, 3–5 projects, each with stack + measurable outcome + links.
- 2026 benchmarks: median landing page ~4.3–6.6%; good ≥10%; top decile ≥11.45%. ~83% mobile.

## Verified facts about the Atlas work

Everything asserted on the site must come from this list. Established by reading the repos and
running the test suites on 2026-07-31.

| Fact | Evidence |
|---|---|
| `atlas-sdi`: 561 / 957 commits | `git shortlog -sne --all` |
| `portal-atlas`: 160 / 167 commits | same |
| `atlasnhd-website`: 24 / 39 commits | same |
| `sandbox-frontend`: 123 / 369 commits | same |
| 38 PDF report generators | `ls app/services/pdf` |
| ~107k LOC Python (geocoding-service app) | `find app -name "*.py" | xargs cat | wc -l` |
| 142 test files, ~16.5k LOC tests | same method over `tests/` |
| 710 passing tests | `pytest tests --ignore=tests/tax_bill` in container |
| `portal-atlas` 151/151 passing | `npx vitest run` |
| `atlasnhd-website` 162/162 passing | `npx vitest run` |
| 17 design specs, 10 implementation plans | `ls docs/superpowers/{specs,plans}` |

**Not verified — must NOT be claimed:** report volume, customer count, revenue, turnaround time
before/after, uptime.

Decided 2026-07-31: these business metrics are **not** being added, and no TODO slots are left
on the page for them. Miko doesn't have the numbers, and developer portfolios generally don't
carry them. The engineering metrics above (report generators, tests, commits, services) are the
proof this site runs on — they are verifiable, they are the right register for a technical
audience, and they are sufficient. Do not reintroduce business-metric placeholders.

## Disclosure

Approved as **fully named and linked**: "Atlas Geotech" and "AtlasNHD" may be named, and
atlasnhd.com may be linked. The live site is currently the Phase-1 coming-soon page, so the link
is labelled "public launch in progress" rather than "view live site".

## Design

### 1. Flagship case study — `/case-study` → Atlas NHD

Replaces ERIS as flagship. Sections:

- **Hero** — Atlas NHD Platform · Lead Full-Stack Engineer · 2025–present
- **The domain** — CA statutory Natural Hazard Disclosure; correctness is the product because
  wrong data is legal liability
- **Architecture** — the four-tier system (SDI → geocoding-service → portal-admin → portal-atlas
  → atlasnhd.com)
- **Four engineering decisions**, each demonstrating a different competency:
  1. Concurrency control under CPU-bound load (semaphore + shared httpx pool + LRU basemap cache
     + ProcessPoolExecutor; fixed worker crashes at 80 PIDs)
  2. Zero-downtime data promotion (`promote_table.py` atomic swap, additive schema, Prefect)
  3. Graceful degradation (FEMA → local NFHL failover)
  4. Spec-driven delivery (17 specs / 10 plans written before code)
- **Results** — verified engineering numbers only
- **CTA** — "Book a Systems Review"

### 2. ERIS relocation — `/case-study/eris`

Content unchanged. Seven inbound links updated: `navigation`, `footer`, `expertise`, `blog`,
`page-navigation`, `projects`, `sitemap`. Permanent redirect `/case-study` → unaffected (new
content lives there); no redirect needed for ERIS since it was never externally linked under a
distinct URL, but `next.config.mjs` gains a redirect entry for safety.

### 3. Two `/projects` entries

- **`atlas-sdi` — Atlas SDI Report Engine.** Backend/data/infra showcase. Python/FastAPI, PostGIS,
  GeoServer, Celery, Prefect, Terraform/ECS Fargate, WeasyPrint.
- **`atlas-portal` — Atlas NHD Customer Portal.** Frontend showcase. Next.js, TypeScript,
  Tailwind, Zustand. Order-to-delivery flow.

### 4. Homepage restructure

```
Hero          name + photo + outcome headline + ONE primary CTA + proof strip
Trusted by    (unchanged)
Featured Work (Atlas first; ACE moves to /projects only)
What I Do     (single merged section — was WhatIDo + Expertise + TechStack)
Closing CTA   (new copy, benefit-led)
Footer
```

### 5. Employment vs freelance labelling

Added 2026-07-31 after Miko flagged that DXC is a corporate job, not a client engagement.

The logo strip previously read "Trusted by leading brands — companies I've supported… each
collaboration", which implies every logo hired him as a contractor. Two of them employed him.
`trusted-brands.tsx` now renders two labelled groups under "Where I've built":

- **Employed at** — Atlas Geotech, DXC Technology
- **Freelance & contract clients** — ACE, ASAP Roadworthys, Boostlab, The Tech Academy

About cards gain an Employment/Contract badge. Atlas Geotech was missing from the experience
list entirely despite being the flagship case study — now added as the current role.

Date correction: Miko joined Atlas in **Feb 2026** (first commit 2026-02-12), not 2025. The
case study hero said "2025–present" and was wrong; the repos predate his joining.

### 6. Conversion fixes

| Fix | Severity |
|---|---|
| Delete `components/testimonials.tsx` (6 fabricated testimonials) | 4 |
| Add closing CTA to homepage; rewrite `cta.tsx` (was v0 template copy) | 3 |
| Hero: add name, photo (`/profile-pic.png`), outcome headline, proof strip | 3 |
| Add measurable outcomes to project entries | 3 |
| Merge three overlapping "what I do" sections into one | 3 |
| Fix duplicate `<h1>` in `trusted-brands.tsx` → `<h2>` | 2 |
| Rename nav "Case Study" → "Atlas Case Study" | 2 |

## Non-goals

- No redesign of the visual system — colors, type scale, and motion stay as they are.
- No new dependencies.
- Removing the other unused components (`blog`, `portfolio-tabs`, `portfolio-layout`,
  `services`, `nda-teaser`, `page-navigation`, `theme-provider`) is out of scope; only
  `testimonials.tsx` is deleted, because only it carries fabricated data.

## Testing

The portfolio has no test suite. Verification is `npm run build` passing plus manual review of
the three changed routes at mobile and desktop widths.
