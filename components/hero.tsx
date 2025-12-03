"use client"

import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-hero-bg text-hero-foreground pt-[72px] min-h-max flex flex-col">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14 md:py-22 lg:py-30 flex-1 flex flex-col justify-center">
        <FadeIn delay={0.1} duration={0.8}>
          <h1 className="text-8xl mb-12 md:mb-16 text-balance">
            QA. FULL-STACK.
            <br />
            SYSTEMS & INFRASTRUCTURE SPECIALIST. EXPERT.
          </h1>
        </FadeIn>

        {/* Three Column Layout matching front.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
          <FadeIn delay={0.3} duration={0.6} direction="up">
            <div className="text-white/70 text-base-custom max-w-[280px]">
              Skilled in quality assurance, development, and user experience. Explore a streamlined, impactful
              portfolio.
            </div>
          </FadeIn>

          <FadeIn delay={0.4} duration={0.6} direction="up">
            <div className="text-white/70 text-base-custom max-w-[280px]">
              Experience smooth, animated navigation through modern digital solutions and professional design.
            </div>
          </FadeIn>

          <FadeIn delay={0.5} duration={0.6} direction="up">
            <div className="md:text-right">
              <Link
                href="/full-stack"
                className="inline-block px-6 py-3 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover hover:scale-105 transition-all duration-300 text-base-custom font-medium"
              >
                See portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
