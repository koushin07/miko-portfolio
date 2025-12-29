"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Sparkles,
    title: "Full Stack Development",
    description: "API-driven products with React, Next.js, Node.js, and TypeScript—built for growth and maintainability.",
    bullets: ["Component systems and design fidelity", "Auth, billing, and data modeling", "Deployments with observability"],
    href: "/projects",
  },
  {
    icon: Zap,
    title: "Automation & Integrations",
    description: "Workflows that connect CRMs, billing, documents, and notifications so operations stop relying on manual steps.",
    bullets: ["n8n, Zapier, Make, custom webhooks", "Stripe, Shopify, Pipedrive, ServiceM8", "Error handling, retries, and monitoring"],
    href: "/automation",
  },
  {
    icon: CheckCircle,
    title: "Reliability & Quality",
    description: "Enterprise QA mindset applied to product delivery—tests, validation, and rollout checks to keep releases stable.",
    bullets: ["API, UI, and integration testing", "Validation on edge cases and failure paths", "Production-readiness reviews"],
    href: "/case-study",
  },
]

export default function Expertise() {
  return (
    <section className="bg-accent-secondary py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="mb-10 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Core capabilities</p>
            <h2 className="text-h1 font-medium text-foreground">Build. Integrate. Validate.</h2>
            <p className="text-muted-foreground text-base max-w-[720px]">
              Full-stack delivery with automation and QA woven in—so every release ships with context, integrations, and
              outcomes that teams can rely on.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full py-6">
          {capabilities.map((capability, i) => (
            <FadeIn key={capability.title} delay={0.1 * (i + 1)} direction="up">
              <div className="bg-white h-full rounded-xl p-6 md:p-8 flex flex-col gap-5 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                <div className="w-10 h-10 bg-accent-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <capability.icon size={20} className="text-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80 flex-1">
                  {capability.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1e308e]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={capability.href}
                  className="text-foreground text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all group/link"
                >
                  View details
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
