"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

/*
  PatternViz — V2 §23. Tiny living diagrams that teach an engineering
  concept by running it: each frame is the exact set of lit nodes, so a
  branch can alternate outcomes across a loop (reuse vs create, ok vs error).
*/

type Tone = "default" | "amber" | "danger"

interface VizNode {
  id: string
  label: string
  tone?: Tone
}

export type PatternVariant = "idempotency" | "retry" | "error" | "chunking" | "extraction"

interface PatternSpec {
  rows: VizNode[][]
  frames: string[][]
  stepMs?: number
}

const PATTERNS: Record<PatternVariant, PatternSpec> = {
  idempotency: {
    rows: [
      [{ id: "event", label: "EVENT" }],
      [{ id: "check", label: "CHECK EXISTING" }],
      [
        { id: "reuse", label: "✓ REUSE", tone: "amber" },
        { id: "create", label: "+ CREATE" },
      ],
    ],
    frames: [
      ["event"],
      ["event", "check"],
      ["event", "check", "reuse"],
      ["event"],
      ["event", "check"],
      ["event", "check", "create"],
    ],
  },
  retry: {
    rows: [
      [{ id: "req", label: "API REQUEST" }],
      [{ id: "fail", label: "✕ FAIL", tone: "danger" }],
      [
        { id: "backoff", label: "BACKOFF" },
        { id: "retry", label: "RETRY" },
      ],
      [{ id: "success", label: "✓ SUCCESS", tone: "amber" }],
    ],
    frames: [
      ["req"],
      ["req", "fail"],
      ["req", "fail", "backoff"],
      ["req", "fail", "backoff", "retry"],
      ["req", "fail", "backoff", "retry", "success"],
    ],
  },
  error: {
    rows: [
      [{ id: "process", label: "PROCESS" }],
      [{ id: "gate", label: "ERROR?" }],
      [
        { id: "continue", label: "→ CONTINUE", tone: "amber" },
        { id: "errpath", label: "ERROR PATH", tone: "danger" },
      ],
    ],
    frames: [
      ["process"],
      ["process", "gate"],
      ["process", "gate", "continue"],
      ["process"],
      ["process", "gate"],
      ["process", "gate", "errpath"],
    ],
  },
  chunking: {
    rows: [
      [{ id: "api", label: "API" }],
      [{ id: "c1", label: "[ 1 – 100 ]" }],
      [{ id: "c2", label: "[ 101 – 200 ]" }],
      [{ id: "c3", label: "[ 201 – 300 ]" }],
      [{ id: "more", label: "…", tone: "amber" }],
    ],
    frames: [["api"], ["api", "c1"], ["api", "c1", "c2"], ["api", "c1", "c2", "c3"], ["api", "c1", "c2", "c3", "more"]],
  },
  extraction: {
    rows: [
      [{ id: "raw", label: "RAW DOCUMENT" }],
      [{ id: "ai", label: "AI", tone: "amber" }],
      [{ id: "structured", label: "{ STRUCTURED DATA }" }],
      [{ id: "db", label: "DATABASE" }],
    ],
    frames: [["raw"], ["raw", "ai"], ["raw", "ai", "structured"], ["raw", "ai", "structured", "db"]],
  },
}

export function PatternViz({ variant, className }: { variant: PatternVariant; className?: string }) {
  const spec = PATTERNS[variant]
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4, once: false })
  const { step, reduced } = useSequence({
    steps: spec.frames.length,
    active: inView,
    stepMs: spec.stepMs ?? 620,
    startDelayMs: 500,
    loop: true,
    holdMs: 1700,
  })
  const lit = reduced ? spec.frames[spec.frames.length - 1] : (spec.frames[Math.max(step, 0)] ?? [])

  return (
    <div ref={ref} aria-hidden="true" className={cn("flex flex-col items-center gap-1.5", className)}>
      {spec.rows.map((row, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          {i > 0 ? <span className="block h-3 w-px bg-border" /> : null}
          <div className="flex gap-2">
            {row.map((node) => {
              const active = lit.includes(node.id)
              return (
                <span
                  key={node.id}
                  className={cn(
                    "rounded border bg-card px-2 py-1 font-mono text-[0.62rem] tracking-[0.06em] uppercase transition-all duration-300",
                    !active && "border-border text-muted-foreground/60 opacity-50",
                    active && node.tone === "amber" && "border-amber/60 text-amber",
                    active && node.tone === "danger" && "border-destructive/60 text-destructive-foreground",
                    active && (!node.tone || node.tone === "default") && "border-primary/50 text-foreground",
                  )}
                >
                  {node.label}
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
