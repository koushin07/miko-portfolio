"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const reassurances = [
  "Reply within 24 hours",
  "No obligation — a scoping call, not a pitch",
  "Happy to review an existing codebase",
]

export default function CTA() {
  return (
    <section className="bg-accent-secondary py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="bg-hero-bg rounded-3xl p-8 md:p-12 lg:p-14 text-center">
            <FadeIn delay={0.15}>
              <h2 className="text-h2 font-medium text-white mb-4">
                Have a system that has to be right?
              </h2>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-white/70 text-lg-custom max-w-[600px] mx-auto mb-8">
                Tell me what you&apos;re building and where it&apos;s breaking. I&apos;ll come back with how I&apos;d
                approach it — architecture, risks, and a realistic scope.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                >
                  Book a Systems Review
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:border-white/50 transition-all duration-300 text-base-custom font-medium"
                >
                  See the work first
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.45}>
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-white/10">
                {reassurances.map((item) => (
                  <li key={item} className="text-white/45 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
