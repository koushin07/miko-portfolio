"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const proofPoints = [
  { value: "7", label: "production systems" },
  { value: "4", label: "industries" },
  { value: "38", label: "report generators shipped" },
]

export default function Hero() {
  return (
    <section className="hero-mesh bg-hero-bg text-hero-foreground pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Left — identity, headline, CTA */}
          <div className="space-y-5 md:space-y-6">
            <FadeIn delay={0.05} duration={0.8}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/30" aria-hidden="true" />
                <p className="text-white/70 text-sm font-semibold uppercase tracking-[0.16em]">
                  Miko Canares — Full-Stack Engineer
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} duration={0.8}>
              <h1
                className="text-h1 font-bold text-white leading-[1.05] tracking-tight max-w-[16ch]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                I build production systems for regulated industries.
              </h1>
            </FadeIn>

            <FadeIn delay={0.15} duration={0.8}>
              <p className="text-white/70 text-xl-custom max-w-2xl">
                Geospatial compliance platforms, RAG pipelines, and automation for data-heavy teams — where a wrong
                result is a liability, not just a bug.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} duration={0.8}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                >
                  Book a Systems Review
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:border-white/50 transition-all duration-300 text-base-custom font-medium"
                >
                  See the flagship build
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} duration={0.8} direction="up">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 border-t border-white/10">
                {proofPoints.map((point) => (
                  <div key={point.label} className="flex items-baseline gap-2">
                    <span
                      className="text-white text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {point.value}
                    </span>
                    <span className="text-white/55 text-sm">{point.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — portrait */}
          <FadeIn delay={0.18} duration={0.9} direction="up">
            <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#1e308e]/40 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/5">
                <Image
                  src="/profile-pic.png"
                  alt="Miko Canares"
                  width={520}
                  height={520}
                  priority
                  sizes="(max-width: 1024px) 300px, 420px"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
