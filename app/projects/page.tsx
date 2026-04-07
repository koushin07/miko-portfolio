import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, CheckCircle2, Lock } from "lucide-react"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "Products & Systems",
  description: "Full-stack products and automation-heavy systems delivered with context, integrations, and reliability.",
  path: "/projects",
  keywords: ["Projects", "Products", "Full stack", "Automation", "Integrations"],
})

type Project = {
  id: string
  title: string
  summary: string
  stack: string
  integrations: string
  context: string
  role: string
  techStack: {
    frontend: string
    backend: string
    infra: string
    apis: string
  }
  keyDecisions: string[]
  outcome: string
  cta?: { label: string; href: string }
}

const projects: Project[] = [
  {
    id: "ace",
    title: "ACE Clinical Placement Platform",
    summary:
      "CRM-synced booking platform with location search, automated onboarding flows, and document packs triggered on placement milestones.",
    stack: "Next.js, Laravel, TypeScript",
    integrations: "Mapbox, Clerk, PandaDoc, Pipedrive",
    context:
      "Placement coordinators managed bookings, student profiles, and document packs across Pipedrive, email threads, and spreadsheets. Any status update required manual reconciliation across all three.",
    role: "Architecture, full-stack build, integrations, deployment, QA",
    techStack: {
      frontend: "Next.js + TypeScript + Tailwind component system",
      backend: "Laravel API with scheduling, permissions, and CRM sync",
      infra: "Vercel for web app and managed Laravel hosting",
      apis: "Mapbox for search, Clerk for auth, PandaDoc for document packs, Pipedrive for CRM alignment",
    },
    keyDecisions: [
      "API-first booking flow so scheduling, profiles, and documents stay consistent across web and CRM.",
      "Document generation via PandaDoc templates triggered from milestone events.",
      "Centralized error handling around third-party calls with retries and audit logs.",
    ],
    outcome:
      "Onboarding is templated, bookings stay in sync with CRM records, and coordinators see placement status without manual reconciliation.",
  },
  {
    id: "roadworthy",
    title: "Roadworthy Inspection Platform",
    summary:
      "Booking-to-inspection pipeline integrating payments, job creation, and lifecycle comms in one reliable flow.",
    stack: "React, Node.js, TypeScript",
    integrations: "Stripe, ServiceM8, Brevo, Figma QA",
    context:
      "Roadworthy inspections required payments, job creation, and customer messaging to stay in sync across three separate systems. A failure in any one broke the entire flow.",
    role: "Frontend and backend pairing with QA on every release",
    techStack: {
      frontend: "React + TypeScript aligned to Figma for pixel fidelity",
      backend: "Express/Node services handling bookings, payments, and job creation",
      infra: "Containerized services with staged environments for regression runs",
      apis: "Stripe for payments, ServiceM8 for job templates, Brevo for lifecycle comms",
    },
    keyDecisions: [
      "Idempotent API calls for payment and job creation to prevent duplicates on retry.",
      "Validation paths for payment success/failure to keep bookings consistent.",
      "Automated QA passes against Figma components to protect UX quality.",
    ],
    outcome:
      "Bookings reliably trigger payments, job templates, and lifecycle emails — cutting manual cleanup and eliminating sync failures.",
  },
  {
    id: "eris",
    title: "Emergency Resource Information System",
    summary:
      "Real-time resource management for responders with dispatch dashboards, movement audit trails, and RBAC.",
    stack: "Laravel, Inertia, Vue",
    integrations: "Inventory, dispatch workflows, reporting",
    context:
      "Regional responders had no central view of what equipment was available, where it was headed, or who moved it — critical visibility gaps during high-pressure incidents.",
    role: "Product architecture, development, and QA for critical workflows",
    techStack: {
      frontend: "Vue + Inertia for fast dashboards and filtering",
      backend: "Laravel services for inventory readiness, reservations, and audit trails",
      infra: "Hardened hosting with backups and role-based access",
      apis: "Internal dispatch and reporting endpoints designed for future integrations",
    },
    keyDecisions: [
      "Movement history baked into the data model for accountability across municipalities.",
      "Dispatch-ready views that prioritize availability windows and nearest resources.",
      "Reporting endpoints to enable post-incident reviews and oversight.",
    ],
    outcome:
      "Teams locate and dispatch resources faster with clear accountability — reducing coordination failures during incidents.",
    cta: { label: "Read the case study", href: "/case-study" },
  },
  {
    id: "emport",
    title: "Emport Employee Management",
    summary:
      "Unified HR platform linking attendance, payroll, and leave workflows with role-based access and audit exports.",
    stack: "Laravel, React, MySQL",
    integrations: "Payroll exports, role management, notifications",
    context:
      "Schools were managing attendance, payroll, and leave approvals across scattered spreadsheets shared between HR and finance — reconciliation was manual and error-prone.",
    role: "Product architecture, full-stack build, QA, deployment",
    techStack: {
      frontend: "React with reusable dashboards and forms",
      backend: "Laravel services for attendance, payroll, leave workflows",
      infra: "Containerized app with staged environments for approvals",
      apis: "Internal payroll and notification hooks",
    },
    keyDecisions: [
      "Modeled attendance, leave, and payroll as linked workflows to keep calculations consistent.",
      "Role-based permissions to separate HR, finance, and admin actions.",
      "Audit-friendly exports so finance could reconcile without rework.",
    ],
    outcome:
      "Attendance, leave, and payroll stay aligned with approvals and exports — removing manual reconciliation between HR and finance.",
  },
  {
    id: "boostlab",
    title: "Boostlab Digital Storefront",
    summary:
      "Conversion-focused storefront with Shopify backend, Checkout.com payments, and Meta Pixel on key funnel steps.",
    stack: "React, Shopify, Checkout.com",
    integrations: "Shopify, Checkout.com, Meta Pixel",
    context:
      "The team needed a conversion-focused storefront where payments, order syncing, and analytics matched the designed experience exactly — no gaps between design and production.",
    role: "Frontend build, integrations, QA, deployment",
    techStack: {
      frontend: "React + Tailwind pages tuned to the Figma design system",
      backend: "Shopify backend as product/catalog source of truth",
      infra: "Static hosting with CDN for fast global delivery",
      apis: "Shopify for orders, Checkout.com for payments, Meta Pixel for tracking",
    },
    keyDecisions: [
      "Aligned UI components to Figma tokens to preserve fidelity across breakpoints.",
      "Payment and order flows instrumented with error states to prevent silent failures.",
      "Analytics tagged on key funnel steps for clear attribution.",
    ],
    outcome:
      "Customers get a smooth checkout, orders sync cleanly to Shopify, and attribution is accurate — reducing cart drop-offs and support load.",
  },
  {
    id: "logiware",
    title: "LogiWare Inventory Platform",
    summary:
      "Centralized inventory and shipment management with movement history, fulfillment dashboards, and staged rollouts.",
    stack: "ASP.NET, Angular, SQL Server",
    integrations: "Shipment tracking, product flow monitoring",
    context:
      "Logistics teams were reconciling stock levels and shipment status across multiple trackers — no single source of truth meant slow fulfillment decisions.",
    role: "Frontend and backend delivery with QA and deployment",
    techStack: {
      frontend: "Angular + Tailwind dashboards for status visibility",
      backend: "ASP.NET services for inventory, shipment, and activity history",
      infra: "Hardened hosting with backups and staged releases",
      apis: "Internal shipment and inventory endpoints with future carrier hooks",
    },
    keyDecisions: [
      "Centralized inventory state with movement history to avoid conflicting records.",
      "Dashboard views tuned for fulfillment and ops teams with actionable filters.",
      "Deployment pipeline with staged rollouts to protect uptime.",
    ],
    outcome:
      "Teams see inventory and shipment status in one place — reducing manual reconciliation and enabling faster fulfillment decisions.",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between gap-4 mb-3">
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <Link href={`#${project.id}`} className="text-sm text-foreground flex items-center gap-1 group">
          View details
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{project.summary}</p>
      <div className="text-sm text-foreground/80 space-y-1">
        <p>
          <span className="font-semibold">Stack:</span> {project.stack}
        </p>
        <p>
          <span className="font-semibold">Integrations:</span> {project.integrations}
        </p>
      </div>
      {project.cta ? (
        <Link href={project.cta.href} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground mt-4 group">
          {project.cta.label}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : null}
    </article>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div id={project.id} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.12em]">Context</p>
          <h3 className="text-2xl font-semibold text-foreground mt-1">{project.title}</h3>
        </div>
        <Link href="/contact" className="hidden md:inline-flex items-center gap-2 text-sm text-foreground group">
          Discuss this build
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <p className="text-muted-foreground text-base leading-relaxed">{project.context}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-accent-secondary p-4">
          <p className="text-sm text-muted-foreground mb-1">Your Role</p>
          <p className="text-foreground text-sm leading-relaxed">{project.role}</p>
        </div>
        <div className="rounded-xl bg-accent-secondary p-4">
          <p className="text-sm text-muted-foreground mb-1">Outcome</p>
          <p className="text-foreground text-sm leading-relaxed">{project.outcome}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <DetailPill title="Frontend" value={project.techStack.frontend} />
        <DetailPill title="Backend" value={project.techStack.backend} />
        <DetailPill title="Infra" value={project.techStack.infra} />
        <DetailPill title="APIs & Integrations" value={project.techStack.apis} />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground uppercase tracking-[0.12em]">Key Decisions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.keyDecisions.map((decision) => (
            <div key={decision} className="flex items-start gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
              {decision}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DetailPill({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 h-full">
      <p className="text-xs text-muted-foreground uppercase tracking-[0.12em] mb-2">{title}</p>
      <p className="text-sm text-foreground/90 leading-relaxed">{value}</p>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            <FadeIn>
              <p className="text-white/60 text-eyebrow uppercase tracking-wider">Products & Systems</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-h0 text-white">Full-stack builds with automation at the core.</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/70 text-xl-custom max-w-3xl">
                Every project combines API-first development with integrations and automation so teams ship faster and
                operate with confidence.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                >
                  Start a project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/automation"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
                >
                  See automation approach
                  <ArrowRight size={18} className="translate-y-[1px]" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-8">
          <FadeIn>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-h2 text-foreground">Products & systems at a glance</h2>
              <span className="text-muted-foreground text-sm">{projects.length + 1} builds</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={0.08 * i} direction="up">
                <ProjectCard project={project} />
              </FadeIn>
            ))}
            <FadeIn delay={0.08 * projects.length} direction="up">
              <article className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full flex flex-col" style={{ borderTop: "2px solid var(--amber)" }}>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Lock size={13} style={{ color: "var(--amber)" }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--amber)" }}>NDA</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Private SaaS Platform — LegalTech</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  4 internal production systems: document generation pipeline, data transformation engine, multi-party dispute scheduling, and a Wear OS rule engine for mediator workflows.
                </p>
                <div className="text-sm text-foreground/80 space-y-1 mb-4">
                  <p><span className="font-semibold">Stack:</span> React, Node.js, Supabase</p>
                  <p><span className="font-semibold">Integrations:</span> n8n, SurveyJS, Wear OS, Google Drive</p>
                </div>
                <Link href="#private-legaltech" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group mt-auto">
                  See full breakdown
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-8">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Details</p>
              <h2 className="text-h2 text-foreground">Context, decisions, and outcomes</h2>
              <p className="text-muted-foreground text-base max-w-2xl">
                Standardized breakdowns show what was built, why, and how reliability and automation were addressed.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={0.06 * i} direction="up">
                <ProjectDetail project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="private-legaltech" className="py-16 md:py-24 bg-[#080c24]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-10">
          <FadeIn>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--amber)" }}>
                  Under NDA
                </span>
              </div>
              <h2 className="text-h2 text-white">Private SaaS Platform — LegalTech</h2>
              <p className="text-white/50 text-sm">Full-Stack Developer · 4 Internal Systems · Active Production</p>
              <p className="text-white/60 text-base max-w-2xl">
                No company name, links, or screenshots. Descriptions cover system architecture and outcomes only.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Dynamic Document Generation Pipeline",
                body: "Legal forms are complex — static templates break the moment data changes. Built a form-driven document generation pipeline where users complete a SurveyJS form embedded in WordPress via shortcode. On submission, form data flows into Supabase, triggers an n8n workflow, merges dynamic user data and metadata into a document, and delivers it to the user's email automatically.",
                stack: ["React", "SurveyJS", "WordPress", "Supabase", "n8n"],
                outcome: "Zero manual document handling. Form submission → file in inbox.",
              },
              {
                num: "02",
                title: "Lead Generation & Data Transformation Pipeline",
                body: "The firm received bulk data exports in a proprietary ^-separated format inside zip files. Built a fully automated pipeline: files are uploaded to a watched Google Drive folder, n8n detects the upload and triggers a custom Node/Express backend that extracts and transforms the raw data into structured leads, then moves the zip to a processed folder as a completion signal.",
                stack: ["Node.js", "Express", "n8n", "Google Drive API"],
                outcome: "Zero manual data processing. Upload → leads generated → file archived.",
              },
              {
                num: "03",
                title: "Multi-Party Dispute Scheduling System",
                body: "Dispute negotiations require all three parties — creator, receiver, and mediator — to agree on a meeting time. Built a scheduling system where a creator proposes a date, the receiver accepts or declines, and on agreement all three parties are notified automatically. Designed for legal dispute workflows where neutral coordination matters.",
                stack: ["React", "Node.js", "Supabase"],
                outcome: "Three-party consent model with automated notifications on agreement.",
              },
              {
                num: "04",
                title: "Mediator Rule Engine with Wear OS Integration",
                body: "Mediators need to trigger timed actions during sessions — reminders, check-ins, delays — without interrupting the flow. Built a rule engine with three rule types: instant (fires immediately), delay (fires after a set timer), and cron (fires on a set schedule). Rules are configured in a frontend dashboard, mapped to named buttons, and surfaced on a Wear OS watch so the mediator can fire any rule with a single button press. Also includes a voice command system for natural-language scheduling.",
                stack: ["React", "Node.js", "Wear OS", "Android"],
                outcome: "Frontend rule configuration → one-tap execution from a watch during live sessions.",
              },
            ].map((system, i) => (
              <FadeIn key={system.num} delay={0.08 * i} direction="up">
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 h-full flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-white/30">{system.num}</span>
                  <h3 className="text-lg font-semibold text-white">{system.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{system.body}</p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {system.stack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded text-xs text-white/60 border border-white/10 bg-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--amber)" }} />
                      <p className="text-white/70 text-sm">{system.outcome}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
