# Wellfound Profile — Review & Updates

Reviewed and fixed 2026-08-03 · `wellfound.com/profile/edit/overview`
Status: Ready to interview · 3 years exp · Profile complete

---

## 🔴 What this review found: a live NDA breach, in two places

The NDA client was **named in full** on this profile the entire time — the one exposure
we had removed from LinkedIn, the CV, the portfolio, OnlineJobs.ph, and Hubstaff.

**1. In the Experience section:**

> Lead Full Stack Developer — *[client named in full]* — Jan 2026 to Apr 2026

**2. In the attached resume.** The PDF Wellfound served was a 5-page pre-Atlas version.
Downloaded and text-extracted it: the client was named on line 23. It also carried the
dead phone number `+63 992 896 3516` and contained no Atlas, Python, FastAPI, PostGIS,
AWS, or Terraform.

The profile was even internally inconsistent — the *Achievements* paragraph correctly
said "a private SaaS automation platform" while the Experience entry named the client
outright.

**Both are now fixed and verified.** A scripted check of the live profile returns
`ndaLeak: false`.

---

## ✅ Applied and verified live — 2026-08-03

| Field | Before | After |
|---|---|---|
| **NDA client** | Named in full | **"Under NDA"** |
| **Attached CV** | 5-page pre-Atlas, named the client, dead phone | Rebuilt 2-page version |
| **Atlas Geotech** | Absent entirely | **Added, Feb 2026 – Present**, full description |
| **ACE dates** | Oct 2025 – **Jun 2026** | Oct 2025 – **Jan 2026** (matches CV) |
| **Desired salary** | $14,560/yr | **$45,000/yr** |
| **Desired tech stack** | PHP, .NET, React, TypeScript, Node.js | **Python, SQL, Node.js, TypeScript, React.js** |
| **Company size "Ideal"** | 201-500, 501-1000, 1000+ | **1-10, 11-50, 51-200** |
| **Job types** | Full-time only | Full-time + **Contractor** |
| **Bio** | "ERP Specialist… AI/RAG systems" | Python/FastAPI, TypeScript/Next.js, PostgreSQL/PostGIS, AWS |
| **LinkedIn URL** | Old numeric slug | `linkedin.com/in/mikocanares` |
| **Skills** | No Python/PostgreSQL/AWS/Docker/FastAPI | All five added |

### Why these mattered beyond tidiness

**The salary was the second-worst item after the NDA.** $14,560/yr ≈ **$1,213/month** —
below your OnlineJobs.ph rate (₱96,800 ≈ $1,669/mo) and far under the $2,500–4,500/mo
remote-senior band. It was anchored to the old $6–7/hr thinking corrected elsewhere.
$45,000 ≈ your new $20/hr Hubstaff rate at full-time hours, and sits mid-band.

**Three roles overlapped.** ACE ran to Jun 2026 on paper, overlapping both the NDA
contract *and* the whole Atlas period. Correcting the end date resolves it.

**The company-size preference contradicted your own stated goal.** Your "looking for"
text says *"a remote role with a startup or small team"* — but Large/Very Large/Massive
were all marked **Ideal** and the small tiers only "Yes". On Wellfound, a startup-focused
platform, that is backwards and actively mis-targets your matches.

**Desired Tech Stack drives job matching**, and it had no Python. Wellfound's taxonomy is
a fixed 49-item list with no AWS, PostgreSQL, Docker, or FastAPI option — SQL is the
closest accurate proxy for the database work, so the five slots are now
Python / SQL / Node.js / TypeScript / React.js.

**Contractor was unchecked** despite that being how you actually engage with every client.

### One thing worth knowing about Wellfound's company picker

It aggressively fuzzy-matches what you type to existing companies rather than creating new
ones, and the dropdown re-renders between render and click. On the first attempts it
silently attached the NDA role to an unrelated real company called "Legal Tech", and the
Atlas role to **"Atlas Search LLC."** — a different real business. Both were caught and
corrected. If you edit employers here later, **re-read the field after selecting** rather
than trusting the click.

---

## ☐ Still outstanding

**The Achievements paragraph is pre-Atlas.** It's accurate and correctly anonymized, but
it leads with the Emport employee-management platform and never mentions the hazard
disclosure work. Worth rewriting to lead with Atlas, as the other platforms now do.

**"Quiet office" is marked Important** on a profile targeting remote work — harmless, but
it's an odd signal.

**Skill-tag entries on individual roles** wouldn't stick through the UI (the Atlas entry
has none). The stack is fully named in that role's description text, so this is cosmetic.

---

## Cross-platform note this resolved

Wellfound lists **Emport as Jan 2025 – Apr 2025**, matching your CV. That's two sources
against LinkedIn's Jun 2025 — so **Apr is almost certainly correct and LinkedIn is the
one to fix.** That closes a question left open since the LinkedIn pass.
