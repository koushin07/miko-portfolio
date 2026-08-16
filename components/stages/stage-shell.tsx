import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/*
  StageShell — the frame for a large interactive case-study stage (V2 §3/§11).
  Big heading, room to breathe, the visualization as the focal point.
*/

interface StageShellProps {
  index: string
  category: string
  name: string
  tagline: string
  description: string
  meta: string
  href: string
  hrefLabel: string
  className?: string
  children: ReactNode
}

export function StageShell({ index, category, name, tagline, description, meta, href, hrefLabel, className, children }: StageShellProps) {
  return (
    <section className={cn("noise-bg relative overflow-hidden border-t border-border/60", className)}>
      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-[1240px] flex-col justify-center px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-node flex items-center gap-2 text-muted-foreground">
              <span aria-hidden="true" className="size-1.5 rounded-sm bg-amber" />
              {index} — {category}
            </p>
            <h2 className="font-mono text-3xl tracking-tight text-foreground md:text-5xl">{name}</h2>
            <p className="text-xl text-foreground/90">{tagline}</p>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">{description}</p>
            <p className="text-node text-muted-foreground/70">{meta}</p>
            <Link href={href} className="inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80">
              {hrefLabel}
            </Link>
          </div>
          <div className="relative">{children}</div>
        </div>
      </div>
    </section>
  )
}
