"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    num: "01",
    title: "SaaS & Internal Tools",
    description:
      "Full-stack platforms built for real workflows: client portals, admin dashboards, scheduling systems, and data pipelines. Not prototypes — production systems teams actually depend on.",
    bullets: [
      "Multi-tenant architecture and role-based access",
      "Complex form systems and document generation",
      "API-first design for clean integrations",
    ],
    href: "/projects",
  },
  {
    num: "02",
    title: "Automation & Integration Pipelines",
    description:
      "n8n, webhooks, and custom backend services that connect your tools and eliminate manual steps. Data in, action out — reliably.",
    bullets: [
      "File processing and data transformation pipelines",
      "CRM, billing, and document automation",
      "Error handling, retries, and run history",
    ],
    href: "/automation",
  },
  {
    num: "03",
    title: "Production Reliability",
    description:
      "Enterprise QA mindset applied to every build. Validation, access control, audit trails, and monitoring so releases don't come back as support tickets.",
    bullets: [
      "API, UI, and integration testing",
      "RBAC and sensitive data handling",
      "Observability and rollout control",
    ],
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
            <h2 className="text-h1 font-medium text-foreground">Build. Automate. Ship.</h2>
            <p className="text-muted-foreground text-base max-w-[720px]">
              Full-stack delivery with automation and reliability baked in — so every system ships with the integrations
              and quality teams can depend on.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full py-6">
          {capabilities.map((capability, i) => (
            <FadeIn key={capability.title} delay={0.1 * (i + 1)} direction="up">
              <div className="bg-white h-full rounded-xl p-6 md:p-8 flex flex-col gap-5 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                <span className="font-display text-[4.5rem] font-bold leading-none text-foreground/[0.07] select-none group-hover:text-foreground/[0.12] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                  {capability.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80 flex-1">
                  {capability.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.55em] inline-block w-3 h-[2px] shrink-0" style={{ backgroundColor: "var(--amber)" }} />
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
