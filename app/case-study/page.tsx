import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, CheckCircle2, Network, Server } from "lucide-react"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "Flagship Case Study",
  description: "Emergency Resource Information System — full-stack build with integrations and audit-ready reliability.",
  path: "/case-study",
  keywords: ["Case study", "Emergency Resource Information System", "Full stack", "Integrations", "Automation"],
})

const integrations = ["Inventory readiness", "Dispatch workflows", "Audit & reporting endpoints"]

const results = [
  "Resource availability visible across municipalities in one place.",
  "Dispatch flows keep movement history and accountability intact.",
  "Audit-ready reporting to review responses and plan improvements.",
]

const improvements = [
  "Add incident-level postmortems tied to movement history.",
  "Expand monitoring with alerts on low inventory and overdue returns.",
  "Introduce offline-ready mobile views for responders in the field.",
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
            <h1 className="text-h0 text-white">Emergency Resource Information System</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/70 text-xl-custom max-w-3xl">
              Live resource intelligence for regional responders. Built to track availability, dispatch movements, and
              keep audit trails during high-pressure events.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
              >
                Talk through the build
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
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-12">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Overview</p>
                <h2 className="text-h2 text-foreground">What this system does and who it serves</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  ERIS gives Region 10 responders a single source of truth for available equipment. Teams can see what
                  exists, reserve it, dispatch it, and review movement history while incidents unfold.
                </p>
              </div>
              <div className="rounded-2xl bg-accent-secondary border border-gray-200 p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-[#1e308e]" />
                  <p className="text-sm font-medium text-foreground">Stack</p>
                </div>
                <p className="text-sm text-foreground/80">
                  Laravel services with inventory and dispatch workflows, Vue + Inertia dashboards, hardened hosting with
                  RBAC, backups, and audit logging.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Inertia", "Vue", "MySQL", "Tailwind"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white text-foreground/80 text-xs border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard title="Problem" description="Responders could not easily see what equipment was ready, where it was located, or who last used it. Dispatching during incidents depended on manual calls and outdated sheets." />
              <InfoCard title="Solution" description="An API-first system for inventory readiness, reservations, dispatch, and returns—with movement history and permissions so municipalities share resources confidently." />
              <InfoCard title="System Architecture" description="Frontend dashboards via Vue/Inertia; Laravel services handling inventory state, reservations, and audit trails; role-based access; reporting endpoints to serve future integrations." icon={<Network className="w-5 h-5 text-[#1e308e]" />} />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Key Integrations</p>
                <ul className="space-y-3">
                  {integrations.map((integration) => (
                    <li key={integration} className="flex items-start gap-2 text-foreground/80 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
                      {integration}
                    </li>
                  ))}
                </ul>
              </div>
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
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl border border-gray-200 bg-accent-secondary p-6 space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">What I'd improve next</p>
              <ul className="space-y-3">
                {improvements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/80 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function InfoCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">{title}</p>
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
