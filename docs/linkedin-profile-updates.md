# LinkedIn Profile — Rebuild on the Primary Account

Rebuilt 2026-08-04 · `linkedin.com/in/miko-canares`

---

## Context: this is a different account from the earlier work

There were two LinkedIn accounts:

| | Status |
|---|---|
| `linkedin.com/in/mikocanares` | Secondary, created while the primary was locked out. **Now deactivated.** All earlier profile work in this project landed here and is gone with it. |
| `linkedin.com/in/miko-canares` | **Primary.** Recovered and now the one in use. Was nearly empty — a single 2023 internship entry. |

So the primary had to be rebuilt from the CV rather than edited.

**Vanity URL is now `miko-canares`** — ASCII with a hyphen, which is paste-safe and
survives renames. A ñ version (`mikoca%C3%B1ares`) was briefly considered and rejected:
percent-encoding is unreadable on a printed CV and unreliable in ATS parsers. The display
name keeps the ñ, which is the part employers actually see.

---

## ✅ Done and verified live

**Nine roles added**, each with employment type, Remote location type, dates, and a
written description:

| Role | Company | Dates | Type |
|---|---|---|---|
| Full-Stack Developer | Atlas Geotech LLC | Feb 2026 – Present | Contract |
| Lead Full-Stack Developer | Private SaaS Platform (Client under NDA) | Jan 2026 – Apr 2026 | Contract |
| Full-Stack Developer | American Clinical Experience | Oct 2025 – Jan 2026 | Contract |
| Analyst II, ERP Product Application | DXC Technology | Aug 2023 – Dec 2025 | **Full-time** |
| Backend Developer | ASAP Roadworthys | Sep 2025 – Nov 2025 | Contract |
| Frontend Developer | Boostlab | Jun 2025 – Aug 2025 | Contract |
| Instructor & Developer | The Tech Academy | Jan 2025 – Jun 2025 | Contract |
| Full-Stack Developer | Emport | Jan 2025 – Apr 2025 | Contract |
| Network Engineer | ApolloTech Software Corporation | Feb 2023 – May 2023 | Internship *(pre-existing)* |

**Only DXC is Full-time.** Everything else is Contract, which is accurate and makes the
overlapping dates read as normal freelance work rather than concurrent employment.

**The NDA client is never named** — the entry reads "Private SaaS Platform (Client under
NDA)" and the description describes the systems without identifying the client.

**Headline** (was the auto-generated "Full-Stack Developer at Emport"):

```
Full-Stack Developer | Python, FastAPI, TypeScript, AWS | I build production systems for regulated, data-heavy work | Open to remote contract & full-time
```

**Location:** Iligan → **Cagayan De Oro City, Northern Mindanao, Philippines**

**Profile photo** replaced with the portfolio headshot (`public/profile-pic.png`, resized
to 800×800 JPEG for upload reliability). The previous image dated to June 2023 — confirmed
by the media URL timestamp changing from `1686731549901` to `1786776969011`, so this is
the new file rather than a cached render. The #OpenToWork frame carried over automatically.

---

## ☐ Still to do

- **About section** — not yet written. This is the highest-value remaining item.
- **Skills** — none added yet; needs Python, FastAPI, PostgreSQL, PostGIS, AWS, Docker,
  Terraform, TypeScript, Next.js, React.
- **Contact info** — add the portfolio URL (`ikoy.vercel.app`).
- **Wellfound and Hubstaff** still have the *old* `mikocanares` URL in their LinkedIn
  fields. Both need repointing to `miko-canares`.
- **ApolloTech title mismatch** — LinkedIn says "Network Engineer", the CV says
  "System & Infrastructure Engineer – Intern". Pick one.
- **#OpenToWork photo frame** is on while the profile now shows a current role. Worth
  deciding whether to keep it.

---

## Repo changes made alongside

Every reference to the old vanity URL was updated to `miko-canares`:

| File | |
|---|---|
| `app/contact/page.tsx` | 2 replacements |
| `components/footer.tsx` | 1 |
| `docs/cv/miko-canares-cv.html` | 1 → PDF regenerated |
| `docs/cv/miko-canares-cv-hubstaff.html` | 1 → PDF regenerated |
| `docs/github-profile-README.md` | 1 |

Both PDFs re-verified after regeneration: 2 pages, correct URL, no NDA client, and the
Hubstaff variant still carries no email or phone. `npm run build` passes.
