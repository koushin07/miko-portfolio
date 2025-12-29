import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, CheckCircle2, Workflow } from "lucide-react"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "Automation & Integrations",
  description: "Automation and workflow engineering that connects SaaS tools, CRMs, billing, and documents with reliability.",
  path: "/automation",
  keywords: ["Automation", "Integrations", "n8n", "Zapier", "Make", "Webhooks"],
})

const tools = ["n8n", "Zapier", "Make", "Webhooks", "REST APIs"]

const useCases = [
  "Lead capture → CRM → notification",
  "Booking → document generation → CRM sync",
  "Payment → invoice → accounting sync",
  "Form submission → task creation → Slack alert",
]

const reliability = [
  "Input validation and schema checks before actions run.",
  "Retries with backoff for flaky third parties.",
  "Alerting and run logs so failures are visible.",
  "Versioned workflows with rollbacks and tests.",
]

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            <FadeIn>
              <p className="text-white/60 text-eyebrow uppercase tracking-wider">Automation & Workflow Engineering</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-h0 text-white">Connect the tools. Remove the manual checks.</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/70 text-xl-custom max-w-3xl">
                I design and build automation workflows that connect SaaS tools, CRMs, forms, and internal systems to
                reduce manual work and scale operations.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                >
                  Scope an automation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
                >
                  See integrated builds
                  <ArrowRight size={18} className="translate-y-[1px]" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-8">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Use cases</p>
              <h2 className="text-h2 text-foreground">Automation that lands impact fast</h2>
              <p className="text-muted-foreground text-base max-w-2xl">
                Common flows I build and harden so data stays consistent across your stack.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, i) => (
              <FadeIn key={useCase} delay={0.08 * i} direction="up">
                <div className="rounded-2xl border border-gray-200 bg-accent-secondary p-5 flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[#1e308e] mt-0.5" />
                  <p className="text-foreground/90 text-sm leading-relaxed">{useCase}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-8">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Reliability focus</p>
              <h2 className="text-h2 text-foreground">Automations built like production software</h2>
              <p className="text-muted-foreground text-base max-w-2xl">
                Automations are built with validation, error handling, retries, and monitoring in mind.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reliability.map((item, i) => (
              <FadeIn key={item} delay={0.08 * i} direction="up">
                <div className="rounded-2xl bg-white p-5 border border-gray-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1e308e] mt-0.5" />
                  <p className="text-foreground/80 text-sm leading-relaxed">{item}</p>
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
