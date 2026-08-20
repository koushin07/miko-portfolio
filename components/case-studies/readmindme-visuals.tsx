"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"

/*
  ReadMindMe signature comparison — Master Plan §5. Teaches, in one
  glance, why retrieval matters: the standard flow guesses from model
  knowledge, the retrieval flow grounds itself in real content first.
*/

const STANDARD = ["QUESTION", "MODEL KNOWLEDGE", "GENERATED RESPONSE"]
const RETRIEVAL = ["QUESTION", "QUERY UNDERSTANDING", "VECTOR RETRIEVAL", "RELEVANT KNOWLEDGE", "CONTEXT ASSEMBLY", "GENERATED RESPONSE"]

function Row({ label, steps, tone, active }: { label: string; steps: string[]; tone: "muted" | "amber"; active: boolean }) {
  return (
    <div>
      <p className={cn("text-node mb-3", tone === "amber" ? "text-amber" : "text-muted-foreground/70")}>{label}</p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            {i > 0 ? <span className={cn("text-sm", tone === "amber" ? "text-amber/70" : "text-muted-foreground/40")}>→</span> : null}
            <span
              className={cn(
                "text-node rounded-md border px-2.5 py-1.5 transition-all duration-400",
                tone === "amber" ? "border-amber/50 bg-amber/10 text-foreground" : "border-border/60 bg-card/60 text-muted-foreground",
                active ? "opacity-100" : "opacity-40",
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {step}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function RetrievalComparison() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, restart, done } = useSequence({ steps: 3, active: inView, stepMs: 900, startDelayMs: 300, holdMs: 2600 })
  useReplayOnReenter(inView, done, restart)

  return (
    <div ref={ref} className="panel space-y-8 p-7">
      <Row label="STANDARD APPROACH" steps={STANDARD} tone="muted" active={step >= 1} />
      <Row label="RETRIEVAL APPROACH — READMINDME" steps={RETRIEVAL} tone="amber" active={step >= 2} />
    </div>
  )
}
