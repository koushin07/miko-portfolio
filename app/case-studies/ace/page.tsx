import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { buildMetadata, getCaseStudyJsonLd, getBreadcrumbJsonLd } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"
import { HubNetwork } from "@/components/system/hub-network"
import { CaseStudyNav } from "@/components/work/case-study-nav"
import { CaseStudyProgressNav } from "@/components/work/case-study-progress-nav"

const SECTIONS = [
  { id: "problem", label: "PROBLEM" },
  { id: "workflow", label: "WORKFLOW" },
  { id: "system", label: "SYSTEM" },
  { id: "integrations", label: "INTEGRATIONS" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "practice", label: "IN PRACTICE" },
  { id: "outcome", label: "OUTCOME" },
]
import {
  PlacementBoard,
  FragmentsConverge,
  PlacementTimeline,
  AceLayers,
  DecisionStack,
  PlacementFlowPlayer,
} from "@/components/case-studies/ace-visuals"

export const metadata = buildMetadata({
  title: "ACE Clinical Placement Platform Case Study | SaaS, CRM & Booking",
  absoluteTitle: true,
  description:
    "Case study of a clinical placement platform connecting booking workflows, CRM synchronization, documents, milestones, location search, and operational status.",
  path: "/case-studies/ace",
  keywords: [
    "clinical placement software",
    "booking platform development",
    "CRM integration",
    "workflow automation",
    "Pipedrive integration",
    "PandaDoc integration",
    "Mapbox",
    "Laravel",
  ],
})

const heroMetrics = [
  { num: "01", label: "BOOKING FLOW", line: "Search → booking → CRM" },
  { num: "02", label: "DOCUMENT FLOW", line: "Milestone → document → completion" },
  { num: "03", label: "INTEGRATIONS", line: "CRM · PandaDoc · Maps · Auth" },
  { num: "04", label: "DELIVERY", line: "Architecture → development → QA" },
]

const shipped = [
  "Location search and placement discovery",
  "Booking workflow",
  "CRM synchronization",
  "Placement milestone handling",
  "Automated document workflows",
  "Coordinator status visibility",
  "Third-party integrations",
  "QA and deployment",
]

const inventory = [
  { name: "FRONTEND", items: ["Next.js", "TypeScript", "Tailwind", "Clerk"] },
  { name: "BACKEND", items: ["Laravel", "API", "Scheduling", "Permissions"] },
  { name: "INTEGRATIONS", items: ["Pipedrive", "PandaDoc", "Mapbox"] },
  { name: "DELIVERY", items: ["Vercel", "QA", "Deployment"] },
]

const jsonLd = [
  getCaseStudyJsonLd({
    title: 'ACE Clinical Placement Platform Case Study | SaaS, CRM & Booking',
    description: 'Case study of a clinical placement platform connecting booking workflows, CRM synchronization, documents, milestones, location search, and operational status.',
    path: '/case-studies/ace',
  }),
  getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: 'ACE', path: '/case-studies/ace' },
  ]),
]

export default function AceCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <CaseStudyProgressNav index={3} total={4} name="ACE" sections={SECTIONS} />

      {/* Hero — the placement control room */}
      <section className="noise-bg relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-7">
              <p className="text-node text-muted-foreground">CASE STUDY / SAAS / CRM / BOOKING</p>
              <h1 className="text-h1 text-balance text-foreground lg:text-[3.2rem] lg:leading-[1.08]">
                A placement workflow that keeps bookings, documents, and status in sync.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                ACE turns clinical placement coordination into a connected workflow — from location search and booking
                to CRM updates, milestone documents, and coordinator visibility.
              </p>
              <p className="text-node text-muted-foreground/70">
                FULL-STACK DEVELOPER · OCT 2025 – JAN 2026 · CONTRACT
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <PlacementBoard />
            </div>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-6 border-t border-border/60 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {heroMetrics.map((metric) => (
              <div key={metric.num} className="flex gap-4">
                <span className="font-mono text-lg text-muted-foreground/40">{metric.num}</span>
                <div>
                  <p className="text-node text-primary">{metric.label}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{metric.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → convergence (signature) */}
      <section id="problem" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="THE PROBLEM"
            title="Before ACE, the workflow was fragmented."
            lede="The difficult part was not building individual screens. It was keeping the workflow connected. Placement coordinators had to keep bookings, student profiles, document packs, CRM records, and communication status aligned across separate tools. Watch the system connect."
          />
          <div className="mt-10">
            <FragmentsConverge />
          </div>
        </div>
      </section>

      {/* Placement timeline */}
      <section id="workflow" className="noise-bg relative scroll-mt-32 overflow-hidden border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="THE WORKFLOW"
            title="One placement. Every event accounted for."
            lede="Click any event to see what happens at that point in the workflow."
          />
          <div className="mt-14">
            <PlacementTimeline />
          </div>
        </div>
      </section>

      {/* Layered system */}
      <section id="system" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="THE SYSTEM"
            title="One application. Multiple systems. One workflow."
            lede="The placement is the source of truth — every layer reads from it and keeps its own systems aligned."
          />
          <div className="mt-14 max-w-4xl">
            <AceLayers />
          </div>
        </div>
      </section>

      {/* Integration constellation */}
      <section id="integrations" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="INTEGRATIONS"
            title="The integrations are part of the product."
            lede="Hover a system to see what ACE uses it for."
          />
          <div className="mt-12">
            <HubNetwork
              centerLabel="ACE"
              centerSublabel="placement platform"
              spokes={[
                { id: "pipedrive", label: "PIPEDRIVE", sublabel: "CRM", detail: "CRM synchronization — placement information stays aligned with the CRM instead of coordinators maintaining duplicate records manually." },
                { id: "pandadoc", label: "PANDADOC", sublabel: "Documents", detail: "Document generation — milestone-triggered document packs and the signing workflow." },
                { id: "mapbox", label: "MAPBOX", sublabel: "Search", detail: "Map-based location search for placement discovery." },
                { id: "clerk", label: "CLERK", sublabel: "Auth", detail: "Authentication for coordinators and students." },
                { id: "vercel", label: "VERCEL", sublabel: "Hosting", detail: "Deployment for the web app, alongside managed Laravel hosting." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Decision stack */}
      <section id="engineering" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="ENGINEERING DECISIONS" title="Why the system stays synchronized." />
          <div className="mt-12 max-w-4xl">
            <DecisionStack />
          </div>
        </div>
      </section>

      {/* Day in the life */}
      <section id="practice" className="noise-bg relative scroll-mt-32 overflow-hidden border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="IN PRACTICE"
            title="A coordinator's morning, simulated."
            lede="One placement moving through the connected workflow — no tool-hopping, no re-entry."
          />
          <div className="mt-12">
            <PlacementFlowPlayer />
          </div>
        </div>
      </section>

      {/* What shipped */}
      <section id="outcome" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="WHAT SHIPPED" title="From placement search to completion." />
          <ul className="mt-12 grid max-w-3xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {shipped.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span aria-hidden="true" className="text-amber">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-node mt-10 border-t border-border/60 pt-6 text-muted-foreground/70">
            MY ROLE: <span className="text-foreground/85 normal-case">Architecture · Full-stack development · Integrations · Deployment · QA</span>
          </p>
        </div>
      </section>

      {/* System inventory */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="TECHNOLOGY" title="System inventory." />
          <div className="mt-10 max-w-3xl overflow-hidden rounded-lg border">
            <div className="flex items-center gap-2 border-b border-border/60 bg-card px-4 py-2">
              <span aria-hidden="true" className="size-2 rounded-full bg-border" />
              <span aria-hidden="true" className="size-2 rounded-full bg-border" />
              <p className="text-node ml-2 text-[0.62rem] text-muted-foreground/60">ace / stack</p>
            </div>
            <div className="grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
              {inventory.map((group) => (
                <div key={group.name} className="bg-card/70 p-5">
                  <p className="text-node text-primary">{group.name}</p>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="font-mono text-xs text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <h2 className="text-h2 text-balance text-foreground">Trying to connect disconnected business systems?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            I build systems that connect the workflow instead of adding another tool for your team to manage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a project →
            </Link>
            <Link
              href="/automation"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              See how I approach automation →
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
            <Link href='/services/api-integrations' className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              API integration services →
            </Link>
            <Link href='/services/business-automation' className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Business automation services →
            </Link>
          </div>
        </div>
      </section>

      <CaseStudyNav current="ace" />
      <Footer />
    </main>
  )
}
