"use client"

import { FadeIn } from "@/components/ui/motion"

export default function WhatIDo() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="bg-accent-secondary border border-gray-200 rounded-2xl p-8 md:p-10 space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">What I do</p>
            <p className="text-xl-custom text-foreground max-w-4xl leading-relaxed">
              I design and develop full-stack web applications, integrate third-party systems, and build automation
              workflows that reduce manual work and improve operational reliability.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
