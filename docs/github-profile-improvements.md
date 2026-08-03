# GitHub Profile — Action Checklist

Reviewed 2026-08-02 against `github.com/koushin07`
(29 public repos · 0 followers · no bio · no location · no website · `hireable: true`)

**Only step 1 is a file edit. Everything else is clicking around in GitHub's UI —
none of it can be done by pasting a file.** Total time ≈ 25 minutes.

---

## ☐ 1. Replace the profile README — 2 min

The one file change.

1. Go to **github.com/koushin07/koushin07**
2. Click `README.md` → ✏️ pencil icon
3. Select all → delete → paste the entire contents of `github-profile-README.md`
4. **Commit changes**

That file is now clean — no comments to strip, paste the whole thing.

**Why it matters:** your current README says *"Currently working as Analyst II – ERP
Product Application"*. That role ended **Dec 2025**. Atlas is not mentioned at all.
It also contains two broken images and a dead LinkedIn link (see below).

---

## ☐ 2. Fill in your profile fields — 3 min

**Not in any file.** These live in your account settings and appear in GitHub search
results and next to every comment you leave.

Go to **github.com/koushin07** → **Edit profile** (left sidebar, under your avatar).

| Field | Paste this |
|---|---|
| **Bio** | `Full-stack engineer — production systems for regulated and data-heavy industries. Python/FastAPI · TypeScript/Next.js · AWS` |
| **Location** | `Misamis Oriental, Philippines` |
| **Website** | `https://ikoy.vercel.app` |
| **Company** | `Atlas Geotech LLC` |

Bio is the single highest-value field here — it's the only thing that follows you
around the site.

---

## ☐ 3. Fix the two broken links — 2 min

Both are live on your profile right now.

**Dead LinkedIn link.** Your README links to an old auto-generated URL that no longer
resolves. Both previous forms — with and without the ñ — now 404, because renaming the
profile regenerated the slug.

Confirmed live 2026-08-03:
```
https://www.linkedin.com/in/mikocanares
```
This is a custom vanity URL, so it survives future renames. ✅ Step 1 fixes the README
automatically — it already points here.

**Placeholder Upwork link.** Your README links to:
```
https://www.upwork.com/freelancers/~yourprofileid
```
That's an unfilled template value. ✅ Step 1 removes it. If you want Upwork on your
profile, add the real URL to the last line of the new README.

---

## ☐ 4. Repin your repos — 2 min

Currently pinned: `koushin07` (the profile repo itself) and `spring_eris` (a 2023 Java
project). Neither shows your best work. GitHub allows six.

**github.com/koushin07** → **Customize your pins** (right-hand side)

1. `miko-portfolio`
2. `LogiWare`
3. `archiplan`
4. `boostlab`
5. `Employee-Management-System`
6. `ERIS`

---

## ☐ 5. Add descriptions and topics — 10 min

**25 of your 29 repos have no description. Zero have topics.** A recruiter browsing
sees a wall of unlabelled names, and GitHub search can't find you without topics.

For each repo: open it → ⚙️ gear icon next to **About** (top right) → paste → Save.

<details>
<summary><b>miko-portfolio</b></summary>

**Description:** Personal portfolio and case-study site. Next.js 16, TypeScript, Tailwind v4, deployed on Vercel.

**Topics:** `nextjs` `typescript` `tailwindcss` `portfolio` `vercel`
</details>

<details>
<summary><b>LogiWare</b></summary>

**Description:** Inventory and shipment management platform with movement history, fulfilment dashboards, and staged rollouts.

**Topics:** `typescript` `inventory-management` `logistics` `dashboard`
</details>

<details>
<summary><b>archiplan</b></summary>

**Description:** Architecture planning and project management tool built with React and TypeScript.

**Topics:** `react` `typescript` `project-management` `saas`
</details>

<details>
<summary><b>boostlab</b></summary>

**Description:** Conversion-focused Shopify storefront with Checkout.com payments and Meta Pixel funnel tracking.

**Topics:** `react` `typescript` `shopify` `ecommerce` `checkout`
</details>

<details>
<summary><b>Employee-Management-System</b></summary>

**Description:** HR platform for academic institutions — attendance tracking, workload scheduling, leave approvals, and automated reporting. Laravel + React.

**Topics:** `laravel` `php` `react` `hr-management` `employee-management`
</details>

<details>
<summary><b>ERIS</b></summary>

**Description:** Emergency Resource Information System — real-time equipment tracking and dispatch for regional responders, with movement audit trails and role-based access. Vue + Inertia + Laravel.

**Topics:** `vue` `laravel` `inertiajs` `emergency-response` `inventory`
</details>

<details>
<summary><b>servicem8</b></summary>

**Description:** ServiceM8 API integration for booking and job synchronisation.

**Topics:** `servicem8` `api-integration` `booking`
</details>

<details>
<summary><b>swot</b></summary>

**Description:** SWOT analysis tool for Android, built with Kotlin.

**Topics:** `kotlin` `android`
</details>

<details>
<summary><b>DateApp.FE</b></summary>

**Description:** Frontend for a dating application. React + TypeScript.

**Topics:** `react` `typescript` `frontend`
</details>

---

## ☐ 6. Clean up repo sprawl — 5 min

**Five portfolio repos dilute the profile:**
`miko-portfolio` (current) · `miko-canares` · `second-portfolio` · `miko.portfolio` · `its-miko`

Keep `miko-portfolio`. For the other four: **repo → Settings → scroll to bottom →
Archive this repository.** Archiving keeps the history but greys them out and drops
them down the listing. Deleting also works if you don't want them.

**Two forks advertise other people's sites** via their homepage field:
- `prometheus` → points at `prometheus.io`
- `microservices` → points at `amigoscode.com`

Either clear that field (⚙️ next to About → empty the Website box) or archive the forks.

---

## Not on this list

**Follower count (0).** Not something to engineer directly — it follows from having
work that's findable. Steps 2 and 5 are what make that possible.

**Stats badges.** The `github-readme-stats` service is down (`DEPLOYMENT_PAUSED`),
which is why the two stat images on your current profile are broken. Left out of the
new README. Re-add only if the service comes back.

**Streak counters, trophy walls, contribution-graph snake.** Current guidance is
explicit that recruiters read these as noise rather than signal.
