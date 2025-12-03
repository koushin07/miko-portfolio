"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProject = {
  id: 1,
  title: "ERIS · Emergency Resource Information System",
  description:
    "Real-time emergency resource intelligence for Region 10 (Northern Mindanao). Borrow, track, and audit resources across municipalities so relief teams act fast during calamities.",
  details: [
    "Book and dispatch resources between municipalities with full movement history.",
    "Track nearest available items, availability windows, and inventory readiness.",
    "Audit trails and reports for accountability and post-incident review.",
    "Built for rapid response and preparation across the entire region.",
  ],
  tech: ["Laravel", "InertiaJS", "VueJS"],
  image: "/projects/eris (1).png",
  link: "/full-stack",
}

export default function FeaturedWork() {
  return (
    <section className="bg-accent-secondary py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="mb-8">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Featured Work
            </span>
          </div>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-h1 font-medium text-foreground mb-4">{featuredProject.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {featuredProject.description}
            </p>

            <div className="space-y-3 mb-8">
              {featuredProject.details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-foreground/80 text-base">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {featuredProject.tech.map((tech) => (
                <span key={tech} className="text-sm text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={featuredProject.link}
              className="inline-flex items-center gap-2 text-foreground font-medium group relative"
            >
              View project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 h-[2px] bg-foreground w-0 group-hover:w-full transition-all duration-300 origin-left" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
