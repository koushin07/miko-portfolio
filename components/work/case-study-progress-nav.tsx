"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

/*
  Shared case-study chrome — Master Plan §8. A quiet header ("← Back to
  Work · CASE STUDY 0X/04 · NAME") plus a scroll-spy progress rail:
  a sticky side rail on desktop, a compact dropdown on mobile. Section
  ids/labels are supplied by each page so the rail stays project-specific
  without a generic shared template.
*/

export interface ProgressSection {
  id: string
  label: string
}

interface CaseStudyProgressNavProps {
  index: number
  total: number
  name: string
  sections: ProgressSection[]
}

export function CaseStudyProgressNav({ index, total, name, sections }: CaseStudyProgressNavProps) {
  const [active, setActive] = useState(sections[0]?.id)
  const [mobileOpen, setMobileOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const topmost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
        setActive(topmost.target.id)
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    )
    elements.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [sections])

  const activeSection = sections.find((s) => s.id === active) ?? sections[0]

  return (
    <div className="sticky top-16 z-30 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3 lg:px-8">
        <Link href="/work" className="text-node shrink-0 text-muted-foreground transition-colors hover:text-foreground">
          ← Back to Work
        </Link>
        <p className="text-node hidden shrink-0 text-muted-foreground/70 sm:block">
          CASE STUDY {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")} · {name}
        </p>

        {/* Desktop: inline scroll-spy rail */}
        <nav aria-label="Case study sections" className="hidden items-center gap-1 overflow-x-auto lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={section.id === active ? "true" : undefined}
              className={cn(
                "text-node shrink-0 rounded-md px-2.5 py-1.5 transition-colors duration-200",
                section.id === active ? "bg-amber/10 text-amber" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Mobile: compact dropdown */}
        <div className="relative lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            className="text-node flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-foreground"
          >
            {activeSection?.label}
            <ChevronDown size={12} className={cn("transition-transform duration-200", mobileOpen && "rotate-180")} />
          </button>
          {mobileOpen ? (
            <div className="absolute top-full right-0 z-40 mt-2 w-48 overflow-hidden rounded-md border bg-popover shadow-lg">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-node block px-3 py-2.5 transition-colors",
                    section.id === active ? "bg-amber/10 text-amber" : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
                  )}
                >
                  {section.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
