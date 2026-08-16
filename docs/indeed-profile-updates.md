# Indeed Profile — Review & Updates

Reviewed and fixed 2026-08-04 · `profile.indeed.com`
Resume had not been touched since May 6, 2026

---

## 🔴 Third platform carrying the NDA client name

The Indeed Resume named the client in full in the Work experience section:

> Lead Full-Stack — *[client named in full]* — January 2026 to April 2026

Same exposure found on Wellfound. Now replaced with **"Private SaaS Platform (Client under
NDA)"**. Verified: a scripted check of the live resume returns `ndaLeak: false`.

The role description itself was already correctly anonymized ("a private SaaS platform
focused on automation and secure data processing") — only the company field leaked.

---

## ✅ Applied and verified live — 2026-08-04

| Field | Before | After |
|---|---|---|
| **NDA client** | Named in full | **"Private SaaS Platform (Client under NDA)"** |
| **Atlas Geotech** | Absent entirely | **Added — Feb 2026 to Present**, full description |
| **Phone** | 992 896 3516 (dead number) | **909 611 6995** |
| **Location** | Iligan 9200 | **Cagayan de Oro City, Misamis Oriental 9000** |
| **Street address** | Old Iligan barangay | Cleared — see note below |
| **Headline** | *(empty)* | Full-Stack Developer \| Python, TypeScript, AWS \| Production Systems |
| **Summary** | "ERP Application Specialist… LLM/RAG pipelines" | Rewritten, Atlas-first, names the real current stack |
| **Skills** | Laravel/ASP.NET/WordPress/AI-RAG, no Python | Python, FastAPI, PostGIS, AWS, Docker, Terraform, Pytest added |

**Verified live:** `ndaLeak:false`, `atlas:true`, `python:true`, `fastapi:true`,
`postgis:true`, `aws:true`, `oldPhone:false`, `iligan:false`.

### Notes on two judgment calls

**The dead phone number was the quiet killer.** `992 896 3516` is the old number, and
Indeed had "Show my number on Indeed" enabled — so employers were being handed a
disconnected line. This is the third platform carrying it (Hubstaff and the old CV had it
too).

**I cleared the street address rather than leave it.** It held an Iligan barangay
("Sawali Fuentes, Maria Cristina") which directly contradicts the Cagayan de Oro city
value. Indeed marks this field *"Not shown to employers"*, so it is low-stakes, and I did
not have your current street to substitute. **Re-add it yourself if you want it populated.**

---

## Profile photo — not possible on Indeed

Checked 2026-08-04. Indeed job-seeker profiles do **not** support a profile photo; the
avatar is an auto-generated initials monogram ("MC"). Verified directly in Account
settings, which offers only account type, email, phone number, and passkey — no image
upload anywhere in the profile or settings UI.

Nothing to do here. The photo is live on JobStreet, Hubstaff, Wellfound, OnlineJobs.ph,
and LinkedIn.

**Unrelated note:** the account-level phone in Indeed *settings* is `+63 953 322 1805`,
which is different from the resume-level number. That field is tied to account security
and login, so it was deliberately left alone — change it yourself only if you actually
want to move account recovery to a different number.

---

## ☐ Still worth doing

**The old WordPress / AI-RAG skills framing is gone**, but check the remaining role
descriptions — several still lead with "Built with ReactTS & NextTS", which is fine but
inconsistent in tone with the new Atlas entry.

**No location on any role.** Every entry shows an "Add location" prompt. Filling these
(Remote) would slightly improve Indeed's matching.

---

## Cross-platform status after this pass

The NDA client name has now been removed from **every** surface checked:

| Surface | Status |
|---|---|
| Portfolio / public CV | Clean |
| LinkedIn | Clean |
| OnlineJobs.ph | Clean |
| Hubstaff Talent | Clean (CV re-uploaded without contact details) |
| Wellfound | Clean (fixed 2026-08-03) |
| Indeed | **Clean (fixed 2026-08-04)** |
| **Repo git history** | ⚠️ **Still exposed** — see below |

**The one remaining exposure is your own public repo.** CV revisions in
`koushin07/miko-portfolio` git history still name the client, and the repo is public.
Scrubbing means rewriting history (`git filter-repo` or BFG) and force-pushing — a
destructive operation on a published branch, so it needs your explicit go-ahead.
