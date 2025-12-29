"use client"

import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"

const highlights = [
  {
    title: "API-first web apps",
    detail: "React, Next.js, Node.js, and TypeScript with auth, billing, and data models ready for growth.",
  },
  {
    title: "Automation that sticks",
    detail: "Workflows across CRMs, billing, documents, and notifications using n8n, Zapier, Make, and webhooks.",
  },
  {
    title: "Production reliability",
    detail: "Enterprise QA mindset: validation, error handling, and monitoring baked into every release.",
  },
]

export default function Hero() {
  return (
    <section className="bg-hero-bg text-hero-foreground pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14 md:py-22 lg:py-26 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-6">
          <FadeIn delay={0.05} duration={0.8}>
            <h1 className="text-h0 leading-[1.05] text-white">Full Stack Web Developer & Automation Engineer</h1>
          </FadeIn>
          <FadeIn delay={0.15} duration={0.8}>
            <p className="text-white/75 text-xl-custom max-w-2xl">
              I build scalable, API-driven web applications and automate business workflows using modern JavaScript
              stacks.
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
                Contact Me
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} duration={0.8} direction="up">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5 shadow-lg shadow-black/20">
            <p className="text-white/60 text-sm font-medium uppercase tracking-[0.14em]">What I deliver</p>
            <div className="space-y-5">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1e308e]" />
                  <div className="space-y-1">
                    <p className="text-white text-base-custom font-semibold">{item.title}</p>
                    <p className="text-white/65 text-sm-custom leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["API-first", "Automation", "Integrations", "Reliability"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-white/10 text-white/75 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
