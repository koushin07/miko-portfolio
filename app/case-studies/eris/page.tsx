import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { buildMetadata, getCaseStudyJsonLd, getBreadcrumbJsonLd } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"
import { CaseStudyNav } from "@/components/work/case-study-nav"
import { CaseStudyProgressNav } from "@/components/work/case-study-progress-nav"
import {
  ResourceBoard,
  LifecycleCommand,
  BeforeAfter,
  RegionMap,
  OpsArchitecture,
  RoleSwitcher,
} from "@/components/case-studies/eris-visuals"

const SECTIONS = [
  { id: "lifecycle", label: "LIFECYCLE" },
  { id: "shift", label: "THE SHIFT" },
  { id: "region", label: "REGIONAL VIEW" },
  { id: "architecture", label: "ARCHITECTURE" },
  { id: "access", label: "ACCESS" },
  { id: "outcome", label: "OUTCOME" },
]

export const metadata = buildMetadata({
  title: "ERIS Case Study — Emergency Resource & Operations Management System",
  absoluteTitle: true,
  description:
    "Case study of an emergency resource information system for tracking resource availability, reservations, dispatch, returns, permissions, and audit history.",
  path: "/case-studies/eris",
  keywords: [
    "resource management system",
    "resource tracking software",
    "emergency resource management",
    "dispatch management system",
    "internal operations software",
    "resource lifecycle",
    "audit trail",
    "inventory tracking",
    "RBAC",
    "Laravel",
    "Vue",
    "Inertia",
    "MySQL",
  ],
})

const scorecard = [
  { label: "RESOURCE VISIBILITY", line: "Availability visible across municipalities." },
  { label: "DISPATCH ACCOUNTABILITY", line: "Movement history preserved." },
  { label: "RETURN TRACKING", line: "Resource lifecycle remains traceable." },
  { label: "AUDITABILITY", line: "State transitions remain reviewable." },
  { label: "REPORTING", line: "Operational information surfaced for reporting." },
]

const engineeringLog = [
  {
    num: "01",
    title: "RESOURCE STATE",
    problem: "How do you prevent resource state from becoming inconsistent across reservations, dispatch, and returns?",
    decision: "Centralize the operational state, with movement history baked into the data model.",
  },
  {
    num: "02",
    title: "AUDITABILITY",
    problem: "How do you preserve an accountable history of resource movement across municipalities?",
    decision: "Record state transitions as part of the operational workflow — accountability isn't an afterthought.",
  },
  {
    num: "03",
    title: "ACCESS CONTROL",
    problem: "Different municipalities and operational roles need different access to the same resources.",
    decision: "Role-based access built around operational responsibilities, not just permissions.",
  },
]

const techMap = [
  { layer: "INTERFACE", items: "Vue · Inertia" },
  { layer: "APPLICATION", items: "Laravel" },
  { layer: "DATA", items: "MySQL" },
  { layer: "OPERATIONS", items: "RBAC · Backups · Reporting" },
]

const jsonLd = [
  getCaseStudyJsonLd({
    title: 'ERIS Case Study — Emergency Resource & Operations Management System',
    description: 'Case study of an emergency resource information system for tracking resource availability, reservations, dispatch, returns, permissions, and audit history.',
    path: '/case-studies/eris',
  }),
  getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: 'ERIS', path: '/case-studies/eris' },
  ]),
]

export default function ErisCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <CaseStudyProgressNav index={4} total={4} name="ERIS" sections={SECTIONS} />

      {/* Hero — command center intro */}
      <section className="noise-bg relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-7">
              <p className="text-node text-muted-foreground">CASE STUDY / INTERNAL OPERATIONS</p>
              <h1 className="text-h1 text-balance text-foreground lg:text-[3.2rem] lg:leading-[1.08]">
                Know where every resource is. Know what happened to it.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                When resources are needed, uncertainty is the problem. ERIS gives regional responders a single
                operational view of equipment availability, reservations, dispatch movements, returns, and audit
                history.
              </p>
              <p className="text-node text-muted-foreground/70">
                ERIS — EMERGENCY RESOURCE INFORMATION SYSTEM · REGION 10
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <ResourceBoard />
            </div>
          </div>
        </div>
      </section>

      {/* Signature — resource lifecycle command */}
      <section id="lifecycle" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="THE LIFECYCLE"
            title="Resources move. ERIS remembers."
            lede="Every resource follows an accountable state from inventory readiness through reservation, dispatch, return, and reporting. Click a state — or play the whole lifecycle."
          />
          <div className="mt-14">
            <LifecycleCommand />
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section id="shift" className="noise-bg relative scroll-mt-32 overflow-hidden border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="THE SHIFT" title="From scattered records to one accountable state." />
          <div className="mt-14">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* Region view */}
      <section id="region" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="REGIONAL VISIBILITY"
            title="One region. A live picture of resource readiness."
            lede="Select a municipality to see its operational picture — availability, reservations, dispatches, returns."
          />
          <div className="mt-14">
            <RegionMap />
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionHeader
              label="ARCHITECTURE"
              title="One accountable state, across the whole system."
              lede="Dashboards, reservations, and reporting all read and write the same operational state — Laravel underneath, with MySQL, role-based access, and backups."
            />
            <OpsArchitecture />
          </div>
        </div>
      </section>

      {/* RBAC */}
      <section id="access" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="ACCESS"
            title="The same resource. Different responsibilities."
            lede="Pick a role to see what it can do — access follows operational responsibility."
          />
          <div className="mt-12">
            <RoleSwitcher />
          </div>
        </div>
      </section>

      {/* Operational scorecard */}
      <section id="outcome" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="WHAT SHIPPED" title="The operational scorecard." />
          <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
            {scorecard.map((item) => (
              <div key={item.label} className="bg-card px-5 py-6">
                <dt className="text-node text-primary">{item.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.line}</dd>
              </div>
            ))}
          </dl>
          <p className="text-node mt-6 text-muted-foreground/70">
            MY ROLE: <span className="text-foreground/85 normal-case">Product architecture, development, and QA for critical workflows</span>
          </p>
        </div>
      </section>

      {/* Engineering log */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="ENGINEERING LOG" title="The problems worth solving." />
          <div className="mt-12 max-w-3xl space-y-0">
            {engineeringLog.map((entry, i) => (
              <div key={entry.num} className={i < engineeringLog.length - 1 ? "border-b border-border/60 pb-8 mb-8" : ""}>
                <p className="font-mono text-2xl text-muted-foreground/40">{entry.num}</p>
                <p className="text-node mt-2 text-foreground">{entry.title}</p>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-node text-amber">PROBLEM</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{entry.problem}</p>
                  </div>
                  <div>
                    <p className="text-node text-primary">DECISION</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{entry.decision}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical map */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="SYSTEM" title="The technical map." />
          <div className="mt-10 max-w-md">
            {techMap.map((row) => (
              <div key={row.layer} className="flex items-baseline gap-6 border-l border-border py-3 pl-6">
                <p className="text-node w-36 shrink-0 text-primary">{row.layer}</p>
                <p className="font-mono text-sm text-foreground/85">{row.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <h2 className="text-h2 text-balance text-foreground">Need better visibility over a complex operational workflow?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            I build internal systems that turn fragmented operational workflows into reliable, traceable software.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a project →
            </Link>
            <Link
              href="/case-studies/ace"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              View another case study →
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
            <Link href='/services/business-automation' className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Business automation services →
            </Link>
          </div>
        </div>
      </section>

      <CaseStudyNav current="eris" />
      <Footer />
    </main>
  )
}
