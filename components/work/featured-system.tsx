"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"
import { FlowStage, type FlowNode } from "@/components/system/flow-stage"

/*
  FeaturedSystem — Work spec §6/§12/§13. A large interactive section per
  project: small label, big name, one-line value prop, short problem, the
  system visual as the centerpiece, then tech/outcome/CTA. Optional
  SYSTEM ↔ ARCHITECTURE toggle reveals the hover-inspectable architecture.
*/

interface FeaturedSystemProps {
  index: string
  category: string
  tag?: string
  status?: "PRODUCTION" | "PRIVATE / NDA" | "CASE STUDY"
  name: string
  valueProp: string
  problem: string
  tech: string
  outcome: string
  href: string
  hrefLabel?: string
  layout: "text-left" | "text-right" | "full"
  visual: ReactNode
  architecture?: FlowNode[]
  id?: string
}

function ArchitecturePanel({ nodes, tooltipSide }: { nodes: FlowNode[]; tooltipSide: "right" | "left" }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { step, runId } = useSequence({ steps: nodes.length + 1, active: inView, stepMs: 550, startDelayMs: 250 })
  return (
    <div ref={ref} className="flex justify-center py-4">
      <FlowStage nodes={nodes} step={step} runId={runId} tooltipSide={tooltipSide} />
    </div>
  )
}

export function FeaturedSystem(props: FeaturedSystemProps) {
  const { index, category, tag, status, name, valueProp, problem, tech, outcome, href, hrefLabel, layout, visual, architecture, id } = props
  const [view, setView] = useState<"system" | "architecture">("system")

  const info = (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-node flex items-center gap-2 text-muted-foreground">
          <span aria-hidden="true" className="size-1.5 rounded-sm bg-amber" />
          {index} / {category}
        </p>
        {status ? (
          <span
            className={cn(
              "text-node rounded border px-1.5 py-0.5 text-[0.62rem]",
              status === "PRIVATE / NDA" ? "border-amber/50 text-amber" : "border-border text-muted-foreground",
            )}
          >
            {status}
          </span>
        ) : null}
        {tag ? <span className="text-node ml-auto hidden text-muted-foreground/60 sm:block">{tag}</span> : null}
      </div>
      <h3 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl">{name}</h3>
      <p className="text-xl text-foreground/90">{valueProp}</p>
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">{problem}</p>
      <p className="text-node text-muted-foreground/70">{tech}</p>
      <div className="space-y-4 border-t border-border/60 pt-5">
        <p className="max-w-md text-sm leading-relaxed text-foreground/85">{outcome}</p>
        <Link href={href} className="inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80">
          {hrefLabel ?? "Explore case study →"}
        </Link>
      </div>
    </div>
  )

  const viewToggle = architecture ? (
    <div className="mb-6 flex justify-center gap-1 rounded-lg border border-border/60 bg-card/50 p-1 md:w-fit md:justify-start">
      {(["system", "architecture"] as const).map((v) => (
        <button
          key={v}
          type="button"
          aria-pressed={view === v}
          onClick={() => setView(v)}
          className={cn(
            "rounded-md px-3 py-1.5 font-mono text-xs tracking-[0.08em] uppercase transition-colors duration-200",
            view === v ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {v === "system" ? "System" : "Architecture"}
        </button>
      ))}
    </div>
  ) : null

  const visualArea = (
    <div>
      {viewToggle}
      <div key={view} className="[animation:view-in_0.35s_ease-out_both]">
        {view === "architecture" && architecture ? (
          <ArchitecturePanel nodes={architecture} tooltipSide={layout === "text-left" ? "left" : "right"} />
        ) : (
          visual
        )}
      </div>
    </div>
  )

  return (
    <section id={id} className="noise-bg relative scroll-mt-20 overflow-hidden border-t border-border/60">
      <div className={cn("mx-auto w-full max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32", layout !== "full" && "flex min-h-[85vh] flex-col justify-center")}>
        {layout === "full" ? (
          <div className="space-y-14">
            {info}
            {visualArea}
          </div>
        ) : (
          <div
            className={cn(
              "grid gap-14 lg:items-center",
              layout === "text-right" ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]",
            )}
          >
            <div className={cn(layout === "text-right" && "lg:order-2")}>{info}</div>
            <div className={cn("min-w-0", layout === "text-right" && "lg:order-1")}>{visualArea}</div>
          </div>
        )}
      </div>
    </section>
  )
}
