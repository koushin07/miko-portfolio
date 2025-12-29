"use client"

import { FadeIn } from "@/components/ui/motion"

const stacks = [
  {
    label: "Web",
    tools: ["React", "Next.js", "Node.js", "TypeScript"],
    note: "API-first delivery for products and internal tools.",
  },
  {
    label: "Automation",
    tools: ["n8n", "Zapier", "Make", "Webhooks"],
    note: "Orchestration with retries, alerts, and run history.",
  },
  {
    label: "Platforms",
    tools: ["Stripe", "Shopify", "Pipedrive", "ServiceM8", "Brevo", "PandaDoc"],
    note: "Payments, CRM, docs, and ops stitched together.",
  },
  {
    label: "Cloud & Ops",
    tools: ["AWS", "Vercel", "Railway", "Docker"],
    note: "Deployments with logging, monitoring, and rollout control.",
  },
]

const techList = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "AWS",
  "n8n",
  "Zapier",
  "Make",
  "Stripe",
  "Shopify",
  "Pipedrive",
  "ServiceM8",
  "Brevo",
  "PandaDoc",
]

export default function TechStack() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 mb-12">
            <div className="space-y-4">
              <span className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">Tech & Platforms</span>
              <h2 className="text-h1 font-medium text-foreground">Modern JavaScript stack plus automation natives</h2>
              <p className="text-muted-foreground text-base-custom max-w-[640px]">
                Tools chosen to build API-driven products, wire up CRMs and billing, and run automations with monitoring,
                validation, and sane handoffs.
              </p>
              <div className="flex flex-wrap gap-2">
                {techList.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-accent-secondary text-foreground/80 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-accent-secondary border border-gray-200 rounded-2xl p-6 md:p-8">
              <p className="text-sm-custom text-foreground font-semibold mb-3">What this unlocks</p>
              <ul className="space-y-3 text-muted-foreground text-sm-custom">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1e308e]" />
                  API-first apps ready for auth, payments, and analytics.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1e308e]" />
                  Automations that sync data across CRMs, docs, and billing without brittle scripts.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1e308e]" />
                  Observability, error handling, and QA embedded from the start.
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, i) => (
            <FadeIn key={stack.label} delay={0.08 * (i + 1)} direction="up">
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-6 h-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{stack.label}</h3>
                  <span className="text-xs text-muted-foreground">{stack.tools.length} tools</span>
                </div>
                <ul className="space-y-2">
                  {stack.tools.map((tool) => (
                    <li key={tool} className="text-sm text-foreground/80 leading-relaxed">
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground">{stack.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
