"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { useInView } from "@/hooks/use-in-view"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"
import { featuredBreakdowns } from "@/lib/work-data"

/*
  Case-study timeline — Work spec §21-§25. The old "Context, decisions,
  and outcomes" text blocks become a stage rail: pick a build, then step
  through CONTEXT → ARCHITECTURE → KEY DECISIONS → OUTCOME. Only one
  stage's content is visible at a time, so nothing reads like a wall.

  The stages auto-advance in a loop while the section is in view — same
  ~6s rhythm as the other system loops. Clicking a stage renders it and
  the loop simply continues from there; the ONLY pause is hovering the
  section (so content never switches under a reader). Reduced motion
  disables the loop entirely.
*/

const AUTO_ADVANCE_MS = 6000 // one full workflow-loop cycle elsewhere ≈ 6s

const STAGES = [
  { id: "context", num: "01", label: "CONTEXT" },
  { id: "architecture", num: "02", label: "ARCHITECTURE" },
  { id: "decisions", num: "03", label: "KEY DECISIONS" },
  { id: "outcome", num: "04", label: "OUTCOME" },
] as const

type StageId = (typeof STAGES)[number]["id"]

export function CaseStudyTimeline() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [stage, setStage] = useState<StageId>("context")
  const project = featuredBreakdowns[projectIndex]

  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const reduced = usePrefersReducedMotion()
  const [hovering, setHovering] = useState(false)

  const autoRunning = inView && !reduced && !hovering

  useEffect(() => {
    if (!autoRunning) return
    const timer = setTimeout(() => {
      setStage((current) => {
        const i = STAGES.findIndex((s) => s.id === current)
        return STAGES[(i + 1) % STAGES.length].id
      })
    }, AUTO_ADVANCE_MS)
    return () => clearTimeout(timer)
  }, [autoRunning, stage, projectIndex])

  const archTiles = [
    { title: "FRONTEND", value: project.techStack.frontend },
    { title: "BACKEND", value: project.techStack.backend },
    { title: "INFRA", value: project.techStack.infra },
    { title: "APIS & INTEGRATIONS", value: project.techStack.apis },
  ]

  return (
    <div>
      <SectionHeader
        label="CASE STUDY BREAKDOWNS"
        title="Context, decisions, and outcomes."
        lede="Three builds in full. Pick one, then walk its story stage by stage."
      />

      {/* Project selector */}
      <div ref={ref}>
      <div className="mt-10 flex flex-wrap gap-2">
        {featuredBreakdowns.map((p, i) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={i === projectIndex}
            onClick={() => {
              setProjectIndex(i)
              setStage("context")
            }}
            className={cn(
              "rounded-md border px-3.5 py-2 text-sm transition-colors duration-200",
              i === projectIndex
                ? "border-primary/60 bg-primary/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
        {/* Stage rail */}
        <div role="tablist" aria-label="Case study stages" className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-visible">
          {STAGES.map((s, i) => {
            const active = stage === s.id
            const passed = STAGES.findIndex((x) => x.id === stage) > i
            return (
              <div key={s.id} className="flex shrink-0 items-center lg:items-stretch lg:gap-0">
                <div className="hidden flex-col items-center lg:flex">
                  <button
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setStage(s.id)
                      setHovering(true)
                    }}
                    onMouseEnter={() => active && setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className={cn(
                      "size-3 rounded-full border transition-all duration-300",
                      active ? "scale-125 border-amber bg-amber" : passed ? "border-primary/60 bg-primary/40" : "border-border bg-card",
                    )}
                    aria-label={s.label}
                  />
                  {i < STAGES.length - 1 ? (
                    <span aria-hidden="true" className={cn("relative my-1 block h-10 w-px", passed ? "bg-primary/40" : "bg-border")}>
                      {autoRunning && active ? (
                        <span
                          key={`fill-${project.id}-${s.id}`}
                          className="motion-safe-only absolute inset-0 origin-top bg-amber/60"
                          style={{ animation: `rail-fill ${AUTO_ADVANCE_MS}ms linear both` }}
                        />
                      ) : null}
                    </span>
                  ) : null}
                </div>
                <button
                  onClick={() => {
                    setStage(s.id)
                    setHovering(true)
                  }}
                  onMouseEnter={() => active && setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className={cn(
                    "text-node rounded-md border px-3 py-2 text-left transition-colors duration-200 lg:mb-0 lg:ml-4 lg:h-fit lg:border-transparent lg:bg-transparent lg:px-2 lg:py-0",
                    active
                      ? "border-amber/60 text-foreground max-lg:bg-amber/10 lg:text-amber"
                      : "border-border bg-card text-muted-foreground hover:text-foreground lg:bg-transparent",
                  )}
                >
                  {s.num} {s.label}
                </button>
              </div>
            )
          })}
        </div>

        {/* Stage content */}
        <div
          key={`${project.id}-${stage}`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="panel relative min-h-[280px] overflow-hidden p-8 [animation:view-in_0.3s_ease-out_both]"
        >
          {stage === "context" ? (
            <div className="space-y-4">
              <p className="text-node text-amber">WHAT WAS HAPPENING</p>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{project.context}</p>
              <p className="text-node border-t border-border/60 pt-4 text-muted-foreground/70">
                MY ROLE: <span className="text-foreground/85 normal-case">{project.role}</span>
              </p>
            </div>
          ) : null}

          {stage === "architecture" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {archTiles.map((tile) => (
                <div key={tile.title} className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <p className="text-node text-primary">{tile.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tile.value}</p>
                </div>
              ))}
            </div>
          ) : null}

          {stage === "decisions" ? (
            <div className="space-y-4">
              <p className="text-node text-amber">WHY THIS ARCHITECTURE</p>
              <div className="grid gap-4 lg:grid-cols-2">
                {project.keyDecisions.map((decision, i) => (
                  <div key={i} className="rounded-lg border border-border/60 bg-background/40 p-4">
                    <p className="text-node text-primary">DECISION {String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{decision}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {stage === "outcome" ? (
            <div className="space-y-5">
              <p className="text-node text-amber">WHAT SHIPPED</p>
              <p className="max-w-3xl text-base leading-relaxed text-foreground/90">{project.outcome}</p>
              <div className="flex flex-wrap gap-4 border-t border-border/60 pt-5">
                {project.caseStudyHref ? (
                  <Link
                    href={project.caseStudyHref}
                    className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Full case study →
                  </Link>
                ) : null}
                <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Discuss this build →
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      </div>
    </div>
  )
}
