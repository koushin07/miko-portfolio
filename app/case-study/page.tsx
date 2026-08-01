import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, CheckCircle2, Database, FileText, Layers, ShieldCheck } from "lucide-react"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "Flagship Case Study — Atlas NHD Hazard Disclosure Platform",
  description:
    "How California statutory hazard disclosure was automated end to end — from raw government geodata to a signed PDF in a homebuyer's inbox. A four-tier system covering the full range of statutory disclosure products.",
  path: "/case-study",
  keywords: [
    "Case study",
    "Atlas Geotech",
    "AtlasNHD",
    "Natural Hazard Disclosure",
    "Geospatial",
    "PostGIS",
    "GeoServer",
    "FastAPI",
    "Next.js",
    "Terraform",
  ],
})

const stats = [
  { value: "Statewide", label: "every residential sale in California" },
  { value: "End to end", label: "government geodata to delivered report" },
  { value: "4 services", label: "one automated pipeline" },
  { value: "Front-end lead", label: "on the hazard analysis app" },
]

const decisions = [
  {
    icon: <Layers className="w-5 h-5 text-[#1e308e]" />,
    title: "Concurrency control under CPU-bound load",
    problem:
      "A single address lookup fanned out into nine fire-and-forget warmup tasks, each eventually submitting to a WeasyPrint process pool. Across three uvicorn workers that meant up to twelve rendering children, PID accumulation to 80, and workers dying in a loop.",
    fix: "Bounded the fan-out with a per-worker asyncio semaphore, then removed the redundant work underneath it: a shared httpx client with connection pooling, an LRU basemap cache with async-lock dedup so concurrent requests for the same tile collapse into one fetch, and rendering moved onto a ProcessPoolExecutor with proper lifespan shutdown hooks.",
  },
  {
    icon: <Database className="w-5 h-5 text-[#1e308e]" />,
    title: "Zero-downtime data promotion",
    problem:
      "Hazard datasets are refreshed from state and federal sources on their own schedules. Swapping a live table mid-transaction risks serving a half-loaded layer into a legally binding document.",
    fix: "A promotion tool that stages the new table, then atomically swaps it — carrying sequences the live table still depends on, and applying additive schema changes behind an explicit flag rather than silently. Orchestrated with Prefect flows promoting from on-prem NAS storage up to AWS.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#1e308e]" />,
    title: "Graceful degradation on third-party outage",
    problem:
      "Flood determinations depend on FEMA's National Flood Hazard Layer. When that service is unreachable, report generation stops — and a disclosure that cannot be produced blocks a property sale.",
    fix: "Failover to a locally held NFHL copy when FEMA is unreachable, so an upstream government outage degrades freshness rather than taking the pipeline down.",
  },
  {
    icon: <FileText className="w-5 h-5 text-[#1e308e]" />,
    title: "Spec-driven delivery",
    problem:
      "Statutory report content is defined by legal templates, not by developer intuition. Getting a checkbox or a citation wrong is a compliance failure, and a rewrite cycle is expensive.",
    fix: "Seventeen design specs and ten implementation plans written and reviewed before the code. Report templates are pinned by tests that assert on the rendered markup contract — including an explicit escaping contract for the cover page, so a formatting regression fails a test rather than reaching a customer.",
  },
]

const architecture = [
  {
    tier: "Atlas SDI",
    role: "Spatial data infrastructure",
    detail:
      "PostGIS, GeoServer, and GeoNode holding state and federal hazard layers. Prefect flows keep datasets current; a registry tracks currency and alerts on drift.",
  },
  {
    tier: "geocoding-service",
    role: "Determination and rendering engine",
    detail:
      "FastAPI service that resolves an address to a parcel and APN, runs the hazard determinations, and renders the result. Covers the full range of disclosure products, with a queue for asynchronous orders.",
  },
  {
    tier: "portal-admin",
    role: "Orders, identity, entitlements",
    detail:
      "Order lifecycle, JWT issuance for the customer API, per-user report access limits, and email delivery. Polls the SDI for report status.",
  },
  {
    tier: "portal-atlas / atlasnhd.com",
    role: "Customer-facing portal",
    detail:
      "Next.js portal for address search, report selection, checkout, and PDF delivery — plus the public marketing site on S3 + CloudFront with OIDC-authenticated deploys.",
  },
]

const results = [
  "The full range of statutory disclosure products in production — residential, commercial, tax, tenancy, fire severity, and more.",
  "Report content locked down by automated checks, so a formatting change cannot quietly alter a legally binding document.",
  "Report generation moved off the request path onto a queue, so a slow dataset no longer blocks a customer's order.",
  "Infrastructure defined as code on AWS, with access permissions tightened to least privilege after a security review.",
]

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-6">
          <FadeIn>
            <p className="text-white/60 text-eyebrow uppercase tracking-wider">Flagship case study</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-h0 text-white">Atlas NHD Hazard Disclosure Platform</h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-white/50 text-sm">
              Atlas Geotech LLC · Full-Stack Developer · Feb 2026–present
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/70 text-xl-custom max-w-3xl">
              California statutory hazard disclosure, automated end to end — from raw government geodata to a
              legally-formatted PDF in a homebuyer&apos;s inbox.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
              >
                Book a Systems Review
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
              >
                Back to projects
                <ArrowRight size={18} className="translate-y-[1px]" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-14">
          {/* The domain */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">The domain</p>
                <h2 className="text-h2 text-foreground">Correctness is the product</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Every residential property sale in California legally requires a Natural Hazard Disclosure. Producing
                  one means checking a specific parcel against dozens of state and federal hazard datasets — flood,
                  fire severity, seismic, landslide, liquefaction, dam inundation, airport noise — and emitting a
                  document in a statutorily prescribed format.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  That constraint shapes every engineering decision. A slow report is an inconvenience; a wrong one is
                  legal liability for the disclosure provider. So the interesting problems here are not about scale —
                  they are about determinism, provenance, and never silently degrading.
                </p>
              </div>
              <div className="rounded-2xl bg-accent-secondary border border-gray-200 p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#1e308e]" />
                  <p className="text-sm font-medium text-foreground">Stack</p>
                </div>
                <p className="text-sm text-foreground/80">
                  Python/FastAPI determination engine over PostGIS and GeoServer, Celery for async report orders,
                  Prefect for dataset refresh, WeasyPrint for PDF rendering, Next.js customer portal, Terraform-defined
                  AWS infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "FastAPI",
                    "PostGIS",
                    "GeoServer",
                    "Celery",
                    "Prefect",
                    "WeasyPrint",
                    "Next.js",
                    "TypeScript",
                    "Terraform",
                    "AWS ECS",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white text-foreground/80 text-xs border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Architecture */}
          <FadeIn>
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Architecture</p>
                <h2 className="text-h2 text-foreground">Four services, one pipeline</h2>
                <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                  Government geodata enters at the top and leaves as a delivered PDF at the bottom. Each tier owns one
                  responsibility and talks to its neighbours over a versioned HTTP contract.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {architecture.map((item, index) => (
                  <div
                    key={item.tier}
                    className="rounded-2xl border border-gray-200 bg-white p-5 space-y-2 h-full"
                  >
                    <span
                      className="text-xs font-bold tracking-widest text-[#1e308e]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground font-semibold text-sm">{item.tier}</p>
                    <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{item.role}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Engineering decisions */}
          <FadeIn>
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Engineering decisions
                </p>
                <h2 className="text-h2 text-foreground">Four problems worth writing down</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {decisions.map((decision) => (
                  <div
                    key={decision.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4 h-full"
                  >
                    <div className="flex items-center gap-2">
                      {decision.icon}
                      <p className="text-foreground font-semibold">{decision.title}</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">The problem</p>
                      <p className="text-foreground/80 text-sm leading-relaxed">{decision.problem}</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">What I did</p>
                      <p className="text-foreground/80 text-sm leading-relaxed">{decision.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Results</p>
                <ul className="space-y-3">
                  {results.map((result) => (
                    <li key={result} className="flex items-start gap-2 text-foreground/80 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">My role</p>
                <div className="rounded-2xl border border-gray-200 bg-accent-secondary p-6 space-y-3">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    Primary developer on the determination and reporting pipeline, and sole developer of the
                    customer-facing portal.
                  </p>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    Scope covered report generation, the data refresh pipeline, AWS infrastructure, the customer-facing
                    portal, and the public site — plus security review of adjacent work, including a stored XSS finding
                    in a colleague&apos;s feature written up and handed over with a suggested fix.
                  </p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-muted-foreground">
                      AtlasNHD.com — public launch in progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#080c24] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="text-h2 font-semibold text-white">Have a system like this to build?</h2>
                <p className="text-white/60 text-base-custom max-w-2xl">
                  Regulated domains, messy third-party data, and pipelines that cannot silently fail — that is the work
                  I do best.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#080c24] rounded-xl hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium shrink-0"
              >
                Book a Systems Review
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
