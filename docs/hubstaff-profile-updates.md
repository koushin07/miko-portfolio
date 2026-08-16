# Hubstaff Talent Profile — Review & Updates

Reviewed 2026-08-03 · `hubstafftalent.net/profiles/miko-canares`
Reply rate 44.44% · Experience 3 years · Visibility: Everyone

---

## ✅ Applied and verified live — 2026-08-03

| Field | Before | After |
|---|---|---|
| **Pay rate** | $6/hr | **$20/hr** |
| **Phone** | +63 992 896 3516 | **+63 909 611 6995** |
| **Location** | Iligan City, Lanao Del **Sur** | **Cagayan de Oro City, Misamis Oriental** |
| **Headline** | Full Stack Developer \| QA Automation | **Full-Stack Developer \| Python, TypeScript, AWS \| Production Systems** |
| **About** | 2024 stack, no Python | Rewritten — Atlas first, full current stack |
| **LinkedIn** | *(empty)* | **mikocanares** |
| **CV** | 4-page pre-Atlas version | Rebuilt 2-page version |

**Skills — the 10-slot cap forced trade-offs.** Final list:

> Python · PostgreSQL · Docker · Amazon Web Services · React · Full Stack ·
> Web Development · Laravel · Software Testing · Linux & Unix Administration

Added Python, PostgreSQL, Docker, AWS. Dropped:
- **Shopify Development** and **ASP & ASP.NET** — stack you've moved past, and they were
  skewing the "Find jobs" feed toward work you don't want
- **SQL** — redundant once PostgreSQL is listed
- **QA Automation** — redundant with Software Testing, which stays and keeps the QA
  differentiator intact

**The phone number was wrong in two places, not one.** Beyond the CV, the profile's own
Phone contact field also held the old number. Both now corrected.

**Still outstanding:** reply rate (only you can raise that), the empty Portfolio tab, and
the Emport date mismatch at the bottom of this doc.

---

## ⚠️ Resume rejected by Hubstaff review — fixed same day

Hubstaff rejected the uploaded CV:

> We held back from posting your resume as it includes sensitive information.
> Before we post your resume, please remove or blur sensitive information such as:
> Email Addresses, Phone Numbers, ID Numbers

Note their own upload page claims *"Email addresses and phone numbers will be stripped
out of the resume. We do this to prevent spam."* — that automatic stripping evidently
does not run, so removal has to happen before upload.

**Fix: a Hubstaff-only variant.** Your master CV keeps its contact details, since it needs
them for direct applications. Only the Hubstaff copy has them stripped.

| File | Purpose |
|---|---|
| `docs/cv/miko-canares-cv.html` | Master. **Unchanged** — still has email + phone. |
| `docs/cv/miko-canares-cv-hubstaff.html` | Generated variant, those two lines removed. |
| `docs/cv/Miko-Canares-CV-Hubstaff.pdf` | Rendered 2-page PDF — what was uploaded. |
| `public/Miko-Canares-CV.pdf` | Public download. **Unchanged.** |

Header on the Hubstaff variant now reads:

```
MIKO CAÑARES
Full-Stack Engineer — Business Systems, Automation & Cloud
ikoy.vercel.app | linkedin.com/in/mikocanares | github.com/koushin07
```

Links are kept — Hubstaff's own profile fields carry website and GitHub, so URLs are
clearly acceptable to them; only email/phone/ID are not. Recruiters still reach you
through the Hubstaff message centre and the profile's contact fields.

Verified with `pdftotext` before upload: no `@`, no `+63`, no phone-shaped digits;
Atlas / Python / FastAPI still present; NDA client absent; still 2 pages.

**To regenerate after editing the master CV:**

```bash
python3 - <<'PY'
from pathlib import Path
h = Path('docs/cv/miko-canares-cv.html').read_text(encoding='utf-8')
h = h.replace('      <span>canaresmiko3@gmail.com</span>\n', '')
h = h.replace('      <span>+63 909 611 6995</span>\n', '')
assert 'canaresmiko3' not in h and '+63' not in h
Path('docs/cv/miko-canares-cv-hubstaff.html').write_text(h, encoding='utf-8')
PY

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="docs/cv/Miko-Canares-CV-Hubstaff.pdf" \
  "file://$PWD/docs/cv/miko-canares-cv-hubstaff.html"

pdftotext docs/cv/Miko-Canares-CV-Hubstaff.pdf - | grep -nE "@|\+63" && echo "STILL PRESENT" || echo clean
```

**Status:** re-uploaded, conversion in progress. Hubstaff reviews resumes manually, so
approval is on their timeline — worth checking back in a day.

**Worth checking:** Wellfound may apply a similar policy. Its currently-attached CV is the
full master with email and phone. It has not been rejected, so leave it unless they flag it
— but if they do, the same variant works.

---

## Read this first: the traffic reality

I pulled your profile analytics. Over the **full year Aug 2025 – Aug 2026** this profile
received roughly **44 views total** — about 3–4 a month, with most days at zero.

The last six views break down as:

| When | Source | Location |
|---|---|---|
| Jul 21 (×4, same day) | Yahoo search | San Antonio, Texas |
| Jul 15, Jul 9 | Direct visit | Ashburn, Virginia |

Four hits from one Yahoo search on one day is likely a single person or a scraper.
**Ashburn, Virginia is an AWS datacenter region** — that is almost certainly bot traffic,
not a human employer.

**So: this is a low-value surface.** Do not sink an afternoon into it. But three things on
it are *actively costing you*, and they take about fifteen minutes to fix. Do those, skip
the rest.

---

## 🔴 Fix these three — ~15 minutes

### 1. Your phone number is wrong

The CV attached to this profile lists:

```
+63 992 896 3516
```

Your current number is **+63 909 611 6995**.

An employer who gets far enough to want to call you reaches a dead number. This is the
single most expensive item on the page, because it silently kills your *best* leads —
the ones who were already convinced.

Fixed by replacing the CV (item 3).

---

### 2. $6/hr

For comparison, you are now at **₱550/hour ≈ $9.48/hour** on OnlineJobs.ph — a platform
serving employers who specifically come looking for Philippine rates. Hubstaff Talent is a
free directory used by US and EU companies hiring direct, where the expectation runs
*higher*, not lower.

You are advertising yourself here at roughly **two-thirds of your own PH-domestic rate**.

**Set to $20/hr.** This one is backed by measured data, not estimate — see below.

At $6/hr you were filtered out by anyone screening for competence, and the clients you did
attract were the ones optimising purely for cheapness. Given the traffic numbers above,
you lose nothing by pricing at what you actually want; there is no volume here to protect.

### The market data (sampled 2026-08-03)

I pulled **74 Philippines-based Python freelancers with published rates** off Hubstaff
search (of 318 total matching), then filtered out the VAs, accountants, and data analysts
that the "Python" skill tag sweeps in.

| Cohort | n | p25 | **median** | p75 | max |
|---|---|---|---|---|---|
| All Python freelancers in PH | 74 | $5.75 | **$10** | $17 | $50 |
| Developers only | 40 | $6.50 | **$15** | $23.75 | $50 |
| Full-stack / senior devs | 14 | $13.25 | **$22.50** | $26.25 | $50 |

Developer rates sorted:

```
1  2  3  4  5  5  5  5  5  6  8  8 10 10 10 10 11 14 14 15
15 15 15 15 15 16 20 20 20 20 25 25 25 25 30 30 35 40 40 50
```

Two observations. There is a dense floor at $5–15 — the tier $6 placed you *below*. And
the market clusters hard on round numbers (5/10/15/20/25), which is why an odd figure like
$18 reads as out of place.

**$20 sits above the developer median ($15) and just below the full-stack/senior median
($22.50).** A deliberate, conservative step. $25 is defensible on this data whenever you
want it — that is the p75 of developers and above the senior median.

**Caveats:** not experience-matched (some of those seniors have 8–10 years to your 3),
titles are self-reported, and these are *asking* rates, not settled prices.

---

### 3. The attached CV is pre-Atlas

**Good news first:** I downloaded and text-extracted it. It does **not** name the NDA
client. Note this was luck rather than design — CV revisions still reachable in this
repo's git history *do* name that client, so an older copy uploaded elsewhere may be
exposed. Worth auditing anywhere you have posted a resume.

Everything else about it is stale:

| Problem | Detail |
|---|---|
| **No Atlas Geotech** | Your current role is entirely absent |
| **No Python, FastAPI, PostGIS, AWS, Docker, Terraform** | Verified — zero matches in the PDF text |
| **Latest role ends Feb 2026** | It is August. Reads as six months unemployed |
| **Summary is QA-first** | *"IT Professional with hands-on experience in system-level QA…"* |
| **Old phone number** | See item 1 |
| **Wrong address** | Says "Initao, Misamis Oriental" |
| **ACE dates** | Says Oct 2025 – **Feb** 2026; your current CV says Oct 2025 – **Jan** 2026 |
| **4 pages** | Your rebuilt CV is 2 |

**Fix:** CV/Resume tab → **Remove** → upload `public/Miko-Canares-CV.pdf` from the repo.
That is the rebuilt 2-page ATS-safe version with Atlas, the correct phone number, and the
NDA client omitted.

---

## 🟠 Worth doing if you have another ten minutes

### 4. Location is wrong twice over

| Surface | Says |
|---|---|
| Hubstaff profile field | **Iligan City, Lanao Del Sur** |
| Attached CV | Initao, Misamis Oriental |
| Reality | Cagayan de Oro City, Misamis Oriental |

Note the profile field is not just outdated, it is **geographically incorrect** — Iligan
City is in Lanao del **Norte**. Lanao del Sur is a different province entirely (BARMM).
Anyone who knows the region reads that as carelessness.

Set it to **Cagayan de Oro, Misamis Oriental, Philippines** and it finally matches your
CV, portfolio, and LinkedIn.

---

### 5. Reply rate: 44.44%, shown publicly

This sits in the header next to your rate, visible to every visitor. It says fewer than
half of employer messages get a response.

There is no way to hide it — only to raise it. **Reply to everything, including the ones
you are declining.** A one-line "thanks, not available for this" counts as a reply and
costs you nothing.

---

### 6. Your About section is the 2024 stack

Currently opens: *"My expertise spans full-stack development using Laravel, ASP.NET Core,
Angular, ReactTS, Vue, NextTS, ExpressTS, and Shopify integrations."*

No Python. No FastAPI. No PostgreSQL or PostGIS. No AWS, Docker, or Terraform. It also
says *"As a SAP Signavio Process Data Analyst…"* in the present tense — that framing
belongs to the DXC role, which ended December 2025.

**Replace the About with:**

```
I build production systems for businesses that can't afford downtime or wrong data —
system design, development, testing, integrations, deployment, and the production issues
nobody planned for.

Right now I build the platform behind California's legally required natural hazard
disclosure reports: a property is checked against dozens of government hazard datasets and
the finished legal document is generated automatically. I'm front-end lead on the hazard
analysis application and built the customer portal end to end. I've also built six
internal systems for a legal-document SaaS covering document generation, copy protection,
and turning public court records into ranked sales leads.

Two years of enterprise ERP quality assurance sit underneath the development work, so
testing and reliability are habits rather than afterthoughts.

Key Skills

Backend: Python, FastAPI, Node.js/Express, Laravel, ASP.NET Core
Frontend: TypeScript, React, Next.js, Vue, Angular, Tailwind CSS
Data: PostgreSQL, PostGIS, MySQL, Supabase, Redis
Cloud & Infrastructure: AWS (ECS, RDS, S3), Docker, Terraform, CI/CD, Linux
QA & Testing: Pytest, PHPUnit, JUnit, Postman, Playwright, BrowserStack
Integrations: Stripe, Checkout.com, Shopify, ServiceM8, Pipedrive, PandaDoc
Automation: Celery, n8n, BullMQ

Portfolio: https://ikoy.vercel.app
```

---

### 7. Skills list has no Python — and it drives job matching

Currently tagged:

> ASP & ASP.NET · Linux & Unix Administration · Shopify Development · Software Testing ·
> Web Development · SQL · Laravel · React · Full Stack · QA Automation

This is the same gap that was on OnlineJobs.ph. It matters more here, though: the platform
builds your **"Find jobs"** feed directly from these skill IDs. Wrong skills means the jobs
it shows you are wrong too.

**Add:** `Python` (highest priority), plus `PostgreSQL`, `AWS`, `Docker`, `DevOps`,
`Node.js`/`TypeScript` if the taxonomy offers them.

**Consider dropping:** `Shopify Development` and `ASP & ASP.NET` — both real, both a stack
you have moved past, and both pulling your job feed toward work you do not want.

---

### 8. Headline positions you as QA

Currently: **"Full Stack Developer | QA Automation"**

QA in the headline reads as a QA person who also codes. Your QA background is a genuine
differentiator, but as *support* for the development story, not the co-headline — which is
how you have it on OnlineJobs.ph and LinkedIn.

**Suggested:** `Full-Stack Developer | Python, TypeScript, AWS | Production Systems`

---

### 9. Portfolio tab is empty

The PORTFOLIO tab is publicly linked and has nothing in it. Either add two or three
projects or ignore it — an empty tab is mildly worse than no tab, but not by much.

---

## Cross-platform inconsistencies this surfaced

Worth resolving once, everywhere:

| Field | Hubstaff | Attached CV | Current CV | LinkedIn |
|---|---|---|---|---|
| **Location** | Iligan, Lanao del **Sur** | Initao, Misamis Or. | Misamis Oriental | Cagayan de Oro |
| **Phone** | — | +63 992 896 3516 | +63 909 611 6995 | — |
| **ACE end** | — | Feb 2026 | Jan 2026 | Jan 2026 |
| **Emport** | — | Jan – Jun 2025 | Jan – **Apr** 2025 | Jan – Jun 2025 |

**The Emport mismatch is still unresolved** — I flagged it during the LinkedIn pass and
you have not said which is right. Two surfaces say Jun, your CV says Apr. Whichever is
correct, the other two need changing.

---

## What's already fine

- **Portfolio link** points at `ikoy.vercel.app` and works.
- **GitHub link** points at `github.com/koushin07` and works.
- **Profile visibility** is set to "Everyone" — correct.
- **Experience: 3 years** — accurate.
- **The attached CV does not name the NDA client.** Verified, not assumed.
