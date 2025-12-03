"use client"

import { FadeIn } from "@/components/ui/motion"

export default function CTA() {
  return (
    <section className="bg-accent-secondary min-h-screen flex items-center py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="bg-hero-bg rounded-3xl p-8 md:p-12 lg:p-16 text-center group hover:shadow-2xl transition-shadow duration-500">
            <FadeIn delay={0.2}>
              <h2 className="text-h2 font-medium text-white mb-4">Showcase your skills. Impress now.</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-white/70 text-lg-custom max-w-[560px] mx-auto mb-8">
                Ready to elevate your next project? Connect for QA, full-stack, or systems & infrastructure expertise—let's create
                something exceptional together.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <button className="px-6 py-3 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover hover:scale-105 transition-all duration-300 text-base-custom font-medium">
                Get in touch
              </button>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
