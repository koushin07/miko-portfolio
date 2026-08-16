import Link from "next/link"
import { HeroSystem } from "@/components/home/hero-system"

const stats = ["10+ SYSTEMS", "AI / RAG", "SAAS", "AUTOMATION", "QA MINDSET"]

export default function Hero() {
  return (
    <section className="noise-bg relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <p className="text-node text-muted-foreground">MIKO CAÑARES — FULL-STACK DEVELOPER</p>
            <h1 className="text-h1 text-balance text-foreground">
              I build AI-powered software, SaaS products, and business automation.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Full-stack engineer specializing in Next.js, React, Python, Laravel, APIs, AI systems, and automation —
              from frontend to backend and production.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Start a Project →
              </Link>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              {stats.map((stat) => (
                <li key={stat} className="text-node flex items-center gap-2 text-muted-foreground">
                  <span aria-hidden="true" className="size-1 rounded-full bg-amber" />
                  {stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <HeroSystem />
          </div>
        </div>
      </div>
    </section>
  )
}
