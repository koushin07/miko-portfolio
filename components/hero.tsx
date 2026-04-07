"use client"

import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"

const highlights = [
  {
    title: "Automation-first architecture",
    detail: "n8n, webhooks, and custom pipelines that eliminate repetitive operations across your stack.",
  },
  {
    title: "Internal tools & SaaS platforms",
    detail: "Client portals, admin dashboards, scheduling systems, and data pipelines built for real workflows — not prototypes.",
  },
  {
    title: "Production-grade reliability",
    detail: "RBAC, audit trails, error handling, and QA baked in from day one.",
  },
]

export default function Hero() {
  return (
    <section className="hero-mesh bg-hero-bg text-hero-foreground pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32 space-y-8">
        <FadeIn delay={0.05} duration={0.8}>
          <h1
            className="text-h0 font-bold text-white leading-[0.97] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I Build Systems<br />That Replace<br />Manual Work.
          </h1>
        </FadeIn>

        <FadeIn delay={0.15} duration={0.8}>
          <p className="text-white/70 text-xl-custom max-w-2xl">
            Full-stack developer specializing in internal tools, SaaS platforms, and automation pipelines. I help teams ship faster, operate leaner, and scale without adding headcount.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.8}>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:border-white/50 transition-all duration-300 text-base-custom font-medium"
            >
              Work With Me
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} duration={0.8} direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {highlights.map((item) => (
              <div key={item.title} className="space-y-1.5">
                <p className="text-white text-sm font-semibold">{item.title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
