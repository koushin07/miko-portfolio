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
              I partner with startups and businesses to build the systems their teams rely on daily — from client-facing SaaS platforms to backend automation pipelines that eliminate manual work. Whether integrating a new tool into your stack or architecting a system from scratch, I work end-to-end: design, backend, frontend, deployment, and automation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
