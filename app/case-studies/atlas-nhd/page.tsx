import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { buildMetadata, getCaseStudyJsonLd, getBreadcrumbJsonLd } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"
import { GeoGrid } from "@/components/case-studies/geo-grid"
import { AtlasStage } from "@/components/stages/atlas-stage"
import { CaseStudyNav } from "@/components/work/case-study-nav"

export const metadata = buildMetadata({
  title: "Atlas NHD Case Study — Geospatial Data Pipeline & SaaS Portal",
  absoluteTitle: true,
  description:
    "Case study of Atlas NHD, a geospatial SaaS platform processing California hazard disclosure data through Python, FastAPI, PostGIS, GeoServer, and Next.js.",
  path: "/case-studies/atlas-nhd",
  keywords: [
    "geospatial software",
    "geospatial application development",
    "geospatial data pipeline",
    "GIS web application",
    "geospatial SaaS",
    "Atlas Geotech",
    "AtlasNHD",
    "Natural Hazard Disclosure",
    "PostGIS",
    "GeoServer",
    "FastAPI",
    "Terraform",
  ],
})

const stats = [
  { value: "Statewide", label: "every residential sale in California" },
  { value: "End to end", label: "government geodata to delivered report" },
  { value: "4 services", label: "one automated pipeline" },
  { value: "Pipeline + portal", label: "primary dev on determinations; sole dev on the portal" },
]

const decisions = [
  {
    title: "Concurrency control under CPU-bound load",
    problem:
      "A single address lookup fanned out into nine fire-and-forget warmup tasks, each eventually submitting to a WeasyPrint process pool. Across three uvicorn workers that meant up to twelve rendering children, PID accumulation to 80, and workers dying in a loop.",
    fix: "Bounded the fan-out with a per-worker asyncio semaphore, then removed the redundant work underneath it: a shared httpx client with connection pooling, an LRU basemap cache with async-lock dedup so concurrent requests for the same tile collapse into one fetch, and rendering moved onto a ProcessPoolExecutor with proper lifespan shutdown hooks.",
  },
  {
    title: "Zero-downtime data promotion",
    problem:
      "Hazard datasets are refreshed from state and federal sources on their own schedules. Swapping a live table mid-transaction risks serving a half-loaded layer into a legally binding document.",
    fix: "A promotion tool that stages the new table, then atomically swaps it — carrying sequences the live table still depends on, and applying additive schema changes behind an explicit flag rather than silently. Orchestrated with Prefect flows promoting from on-prem NAS storage up to AWS.",
  },
  {
    title: "Graceful degradation on third-party outage",
    problem:
      "Flood determinations depend on FEMA's National Flood Hazard Layer. When that service is unreachable, report generation stops — and a disclosure that cannot be produced blocks a property sale.",
    fix: "Failover to a locally held NFHL copy when FEMA is unreachable, so an upstream government outage degrades freshness rather than taking the pipeline down.",
  },
  {
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

const technologies = [
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
]

const jsonLd = [
  getCaseStudyJsonLd({
    title: 'Atlas NHD Case Study — Geospatial Data Pipeline & SaaS Portal',
    description: 'Case study of Atlas NHD, a geospatial SaaS platform processing California hazard disclosure data through Python, FastAPI, PostGIS, GeoServer, and Next.js.',
    path: '/case-studies/atlas-nhd',
  }),
  getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: 'Atlas NHD', path: '/case-studies/atlas-nhd' },
  ]),
]

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />

      {/* Hero with geospatial identity */}
      <section className="relative overflow-hidden">
        <GeoGrid active className="opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <p className="text-node text-muted-foreground">CASE STUDY — GEOSPATIAL SAAS PLATFORM</p>
          <p className="mt-6 font-mono text-3xl tracking-tight text-foreground md:text-5xl">ATLAS NHD</p>
          <p className="mt-4 text-sm text-muted-foreground">Atlas Geotech LLC · Full-Stack Developer · Feb 2026–present</p>
          <h1 className="text-lg-custom mt-6 max-w-3xl font-normal text-muted-foreground">
            From government geodata to a delivered disclosure report — California statutory hazard disclosure,
            automated end to end into a legally-formatted PDF in a homebuyer&apos;s inbox.
          </h1>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border/60 pt-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-mono text-lg text-foreground">{stat.value}</p>
                <p className="text-xs leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Problem */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeader label="01 — PROBLEM" title="Correctness is the product." />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Every residential property sale in California legally requires a Natural Hazard Disclosure. Producing
                one means checking a specific parcel against dozens of state and federal hazard datasets — flood, fire
                severity, seismic, landslide, liquefaction, dam inundation, airport noise — and emitting a document in
                a statutorily prescribed format.
              </p>
              <p>
                That constraint shapes every engineering decision. A slow report is an inconvenience; a wrong one is
                legal liability for the disclosure provider. So the interesting problems here are not about scale —
                they are about determinism, provenance, and never silently degrading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 How it works — geo system map */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="02 — HOW IT WORKS"
            title="Government geodata in, delivered report out."
            lede="Each hop is a service boundary with a versioned contract."
          />
          <div className="mt-12">
            <AtlasStage />
          </div>
        </div>
      </section>

      {/* 03 Architecture */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="03 — ARCHITECTURE"
            title="Four services, one pipeline."
            lede="Government geodata enters at the top and leaves as a delivered PDF at the bottom. Each tier owns one responsibility and talks to its neighbours over a versioned HTTP contract."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {architecture.map((item, index) => (
              <div key={item.tier} className="panel h-full space-y-2.5 p-5 transition-colors duration-300 hover:border-primary/40">
                <p className="text-node text-primary">{String(index + 1).padStart(2, "0")}</p>
                <p className="font-mono text-sm text-foreground">{item.tier}</p>
                <p className="text-node text-muted-foreground">{item.role}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Engineering decisions */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader label="04 — ENGINEERING DECISIONS" title="Four problems worth writing down." />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {decisions.map((decision) => (
              <div key={decision.title} className="panel h-full space-y-4 p-6">
                <p className="text-h5 text-foreground">{decision.title}</p>
                <div className="space-y-1.5">
                  <p className="text-node text-amber">THE PROBLEM</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{decision.problem}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-node text-primary">WHAT I DID</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{decision.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Results + role */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <SectionHeader label="05 — RESULTS" title="What shipped." />
              <ul className="space-y-3">
                {results.map((result) => (
                  <li key={result} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <SectionHeader label="06 — MY ROLE" title="Pipeline and portal." />
              <div className="panel space-y-3 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Primary developer on the determination and reporting pipeline, and sole developer of the
                  customer-facing portal.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Scope covered report generation, the data refresh pipeline, AWS infrastructure, the customer-facing
                  portal, and the public site — plus security review of adjacent work, including a stored XSS finding
                  in a colleague&apos;s feature written up and handed over with a suggested fix.
                </p>
                <p className="text-node border-t border-border/60 pt-3 text-muted-foreground/80">
                  ATLASNHD.COM — PUBLIC LAUNCH IN PROGRESS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Technologies + CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader label="07 — TECHNOLOGIES" title="The stack." />
          <div className="mt-10 flex max-w-3xl flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-md border bg-card px-3 py-1.5 font-mono text-xs text-foreground/85">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center lg:px-8 lg:py-28">
          <h2 className="text-h2 text-balance text-foreground">Have a system like this to build?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            Regulated domains, messy third-party data, and pipelines that cannot silently fail — that is the work I do
            best.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-8">
          <p className="text-node text-muted-foreground/60">RELATED SERVICES</p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            <Link href='/services/full-stack-development' className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Full-stack development services →
            </Link>
          </div>
        </div>
      </section>

      <CaseStudyNav current="atlas" />
      <Footer />
    </main>
  )
}
