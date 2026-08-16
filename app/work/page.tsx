import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { FeaturedSystem } from "@/components/work/featured-system"
import { CaseStudyTimeline } from "@/components/work/case-study-timeline"
import { HeroPreview } from "@/components/work/hero-preview"
import { RagStage } from "@/components/stages/rag-stage"
import { AtlasStage } from "@/components/stages/atlas-stage"
import { SdiStage } from "@/components/stages/sdi-stage"
import { AutomationExplorer } from "@/components/automation/automation-explorer"

export const metadata = buildMetadata({
  title: "Software Development Projects & Case Studies | Miko Cañares",
  absoluteTitle: true,
  description:
    "Explore full-stack software, SaaS platforms, AI applications, internal systems, APIs, integrations, and automation projects built for real operational workflows.",
  path: "/work",
  keywords: ["Software development projects", "Case studies", "Full stack", "AI developer", "RAG development", "Automation", "Geospatial"],
})

const capabilities = [
  { label: "FULL-STACK", line: "Frontend to database, one owner.", proof: "ReadMindMe · Atlas Portal · ACE" },
  { label: "AI / RAG", line: "Retrieval, structured outputs, moderation.", proof: "ReadMindMe · LegalTech" },
  { label: "GEOSPATIAL", line: "PostGIS, GeoServer, spatial pipelines.", proof: "Atlas SDI · Atlas NHD" },
  { label: "AUTOMATION", line: "n8n orchestration, idempotent workflows.", proof: "LegalTech · Roadworthy" },
  { label: "QA / RELIABILITY", line: "Validation, failure paths, monitoring.", proof: "Every build" },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero — Work spec §4 */}
      <section className="noise-bg relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-7">
              <p className="text-node text-muted-foreground">WORK / SELECTED SYSTEMS</p>
              <h1 className="text-h1 text-balance text-foreground lg:text-[3.6rem] lg:leading-[1.06]">
                Software systems built around real business problems.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Full-stack applications, AI systems, geospatial platforms, and business automation — each one
                explorable below, from problem to architecture to outcome.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#featured"
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Explore Work ↓
                </a>
                <p className="text-node text-muted-foreground/70">10+ SYSTEMS · 4 FEATURED</p>
              </div>
            </div>
            <div className="hidden justify-center lg:flex">
              <HeroPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Featured systems — Work spec §5-§13 */}
      <div id="featured" className="scroll-mt-16">
        <FeaturedSystem
          index="01"
          category="AI PLATFORM"
          tag="AI / RAG"
          name="READMINDME"
          valueProp="Knowledge-grounded AI platform."
          problem="Generic AI assistants hallucinate because they don't know the application's knowledge base. For a Bible-study tool, a made-up verse or misattributed reference breaks the product's entire promise."
          tech="FASTAPI · POSTGRESQL · PGVECTOR · OPENAI"
          outcome="A production-shaped RAG platform — retrieval, personalization, moderation, and operations — built solo, end to end."
          href="/case-studies/readmindme"
          layout="text-left"
          visual={<RagStage />}
          architecture={[
            { id: "client", label: "CLIENT", sublabel: "mobile / web + admin", detail: "Mobile/web client and admin dashboard as separate repos within the monorepo." },
            { id: "api", label: "FASTAPI API", sublabel: "20 routers · 25 services", detail: "Async Python with SQLAlchemy 2.0, Pydantic v2, JWT + refresh-token rotation." },
            { id: "db", label: "POSTGRESQL + PGVECTOR", sublabel: "~40 tables · 36,819 embeddings", detail: "Two-schema design: static bible data (24 read-only tables, 603K cross-references) separated from versioned app data." },
            { id: "redis", label: "REDIS", detail: "Caching layer alongside SlowAPI rate limiting." },
            { id: "openai", label: "OPENAI", sublabel: "GPT-4o · embeddings · moderation", detail: "Tiered model selection: GPT-4o for answers, GPT-4o-mini for background memory extraction." },
            { id: "scheduler", label: "APSCHEDULER", detail: "Scheduled background jobs — the platform runs itself." },
          ]}
        />

        <FeaturedSystem
          index="02"
          category="GEOSPATIAL PLATFORM"
          tag="GEOSPATIAL / SAAS"
          status="PRODUCTION"
          name="ATLAS NHD"
          valueProp="Statutory hazard disclosure, automated end to end."
          problem="Every residential sale in California legally requires a hazard disclosure checked against dozens of state and federal datasets. A slow report is an inconvenience; a wrong one is legal liability."
          tech="FASTAPI · POSTGIS · GEOSERVER · NEXT.JS"
          outcome="The full range of statutory disclosure products in production — residential, commercial, tax, tenancy, fire severity, and more."
          href="/case-studies/atlas-nhd"
          layout="text-right"
          visual={<AtlasStage />}
          architecture={[
            { id: "sdi", label: "ATLAS SDI", sublabel: "PostGIS · GeoServer · GeoNode", detail: "Spatial data infrastructure holding state and federal hazard layers, kept current by Prefect flows with drift alerting." },
            { id: "geocoding", label: "GEOCODING-SERVICE", sublabel: "FastAPI", detail: "Resolves an address to a parcel and APN, runs hazard determinations, renders the result — with a queue for async orders." },
            { id: "admin", label: "PORTAL-ADMIN", detail: "Order lifecycle, JWT issuance, per-user report access limits, and email delivery." },
            { id: "portal", label: "PORTAL-ATLAS", sublabel: "Next.js · atlasnhd.com", detail: "Customer portal for search, checkout, and PDF delivery — plus the public site on S3 + CloudFront." },
          ]}
        />

        <FeaturedSystem
          index="03"
          category="REPORT ENGINE"
          tag="GEOSPATIAL / DOCUMENTS"
          status="PRODUCTION"
          name="ATLAS SDI REPORT ENGINE"
          valueProp="Complex spatial data in. Structured legal reports out."
          problem="Producing a disclosure means resolving an address to a parcel, querying every hazard layer, and rendering a statutorily formatted PDF — without a single wrong determination along the way."
          tech="PYTHON · FASTAPI · POSTGIS · GEOSERVER · CELERY · WEASYPRINT"
          outcome="Report generation moved from synchronous request-time rendering to a queued pipeline with warmup caching."
          href="/case-studies/atlas-nhd"
          layout="full"
          visual={<SdiStage />}
        />

        <FeaturedSystem
          index="04"
          category="AUTOMATION PLATFORM"
          tag="N8N / ORCHESTRATION"
          status="PRIVATE / NDA"
          name="AUTOMATION / LEGALTECH"
          valueProp="42 production workflows on one n8n backbone."
          problem="A legal-document business runs on court data, client intake, documents, e-signatures, and scheduling — each in a different tool. Every manual handoff between them was a delay or an error."
          tech="N8N · SUPABASE · GEMINI · DOCKER"
          outcome="Six internal systems and the automation layer connecting them — architecture shown with sensitive details removed. Hover the subsystems, then open the Document Factory."
          href="/automation"
          hrefLabel="Explore the automation platform →"
          layout="full"
          visual={<AutomationExplorer />}
        />
      </div>

      {/* Archive banner → deep project explorer */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="panel flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
            <div className="space-y-2">
              <p className="text-node text-muted-foreground">PROJECT ARCHIVE</p>
              <h2 className="text-h3 text-foreground">Every project, inspectable.</h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                The full engineering archive — pick any system and inspect its problem, architecture, and stack in the
                interactive explorer.
              </p>
            </div>
            <Link
              href="/projects"
              className="shrink-0 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Open the Project Explorer →
            </Link>
          </div>
        </div>
      </section>

      {/* Case-study breakdowns — Work spec §21-§25 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <CaseStudyTimeline />
        </div>
      </section>

      {/* Capabilities demonstrated — Work spec §3 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-24">
          <p className="text-node flex items-center gap-2 text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-sm bg-amber" />
            CAPABILITIES DEMONSTRATED
          </p>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability) => (
              <div key={capability.label} className="space-y-2">
                <p className="text-node text-primary">{capability.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{capability.line}</p>
                <p className="text-node text-[0.62rem] text-muted-foreground/60">{capability.proof}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Work spec §30 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <p className="text-node text-muted-foreground">YOU'VE SEEN THE SYSTEMS.</p>
          <h2 className="text-h2 mt-4 text-balance text-foreground">Now let's build one.</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            Have a product, internal tool, AI workflow, or business process that needs to be built?
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

      <Footer />
    </main>
  )
}
