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

          <FadeIn delay={0.1} direction="up">
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-[0.14em]">LegalTech flows (NDA)</p>
                <span className="px-2 py-0.5 rounded text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200">Private · NDA</span>
              </div>

              {/* Flow 1 — Document Generation */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 space-y-4">
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-[0.12em]">01 — Document Generation Pipeline</p>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { label: "Trigger", name: "SurveyJS Form", highlight: false },
                    { label: "Storage", name: "Supabase", highlight: false },
                    { label: "Orchestrator", name: "n8n", highlight: true },
                    { label: "Action", name: "Doc Generator", highlight: false },
                    { label: "Output", name: "Email Delivery", highlight: false },
                  ].map((step, i, arr) => (
                    <div key={step.name} className="flex items-center gap-2">
                      <div className={`rounded-lg px-3 py-2 text-center border ${step.highlight ? "bg-[#1e308e] border-[#1e308e]" : "bg-accent-secondary border-gray-200"}`}>
                        <p className={`text-[10px] leading-none mb-1 ${step.highlight ? "text-white/60" : "text-muted-foreground"}`}>{step.label}</p>
                        <p className={`text-sm font-semibold whitespace-nowrap ${step.highlight ? "text-white" : "text-foreground"}`}>{step.name}</p>
                      </div>
                      {i < arr.length - 1 && <ArrowRight size={14} className="text-gray-300 shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow 2 — Lead Generation */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 space-y-4">
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-[0.12em]">02 — Lead Generation Pipeline</p>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { label: "Trigger", name: "Zip Upload", highlight: false },
                    { label: "Watch", name: "Google Drive", highlight: false },
                    { label: "Orchestrator", name: "n8n", highlight: true },
                    { label: "Transform", name: "Node / Express", highlight: false },
                    { label: "Output", name: "Leads + Archive", highlight: false },
                  ].map((step, i, arr) => (
                    <div key={step.name} className="flex items-center gap-2">
                      <div className={`rounded-lg px-3 py-2 text-center border ${step.highlight ? "bg-[#1e308e] border-[#1e308e]" : "bg-accent-secondary border-gray-200"}`}>
                        <p className={`text-[10px] leading-none mb-1 ${step.highlight ? "text-white/60" : "text-muted-foreground"}`}>{step.label}</p>
                        <p className={`text-sm font-semibold whitespace-nowrap ${step.highlight ? "text-white" : "text-foreground"}`}>{step.name}</p>
                      </div>
                      {i < arr.length - 1 && <ArrowRight size={14} className="text-gray-300 shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#080c24]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-8">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/40">Real-world n8n flows</p>
              <h2 className="text-h2 text-white">Production pipelines built with n8n</h2>
              <p className="text-white/55 text-base max-w-2xl">
                These flows were built for a LegalTech firm (NDA). Included to show the depth and complexity of
                automation work — no company name or identifying details.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Document Generation Pipeline",
                description:
                  "SurveyJS form submission triggers an n8n workflow that pulls dynamic form data from Supabase, merges it with file metadata, generates a document, and delivers it to the user's email. Handles data mapping, file generation, and delivery in a single automated sequence.",
                tags: ["SurveyJS", "Supabase", "n8n", "Email delivery"],
              },
              {
                num: "02",
                title: "Lead Generation from Bulk Data Uploads",
                description:
                  "n8n watches a Google Drive folder for new zip file uploads. On detection, it retrieves the file, sends it to a custom Node/Express backend for extraction and transformation of ^-separated data into structured leads, then moves the processed file to an archive folder as a completion signal.",
                tags: ["Google Drive API", "n8n", "Node.js", "Express"],
              },
            ].map((flow, i) => (
              <FadeIn key={flow.num} delay={0.1 * i} direction="up">
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 h-full flex flex-col">
                  <span className="text-xs font-bold tracking-widest text-white/30">{flow.num}</span>
                  <h3 className="text-lg font-semibold text-white">{flow.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{flow.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {flow.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs text-white/60 border border-white/10 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
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
