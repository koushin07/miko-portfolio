"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"
import { FlowStage } from "@/components/system/flow-stage"

/*
  About hero visual — spec §05. The engineering lifecycle as a quiet,
  slowly-running system: idea → architecture → build → (api/ai/data) →
  integrate → test → ship. Subtle by design; this page is about the person.

  Steps: 0 IDEA · 1 ARCHITECTURE · 2 BUILD · 3 branch · 4 INTEGRATE ·
         5 TEST · 6 SHIP · 7 hold
*/

export function Lifecycle({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId } = useSequence({ steps: 8, active: inView, stepMs: 700, startDelayMs: 400, loop: true, holdMs: 2600 })

  return (
    <div ref={ref} className={cn("flex flex-col items-center opacity-90", className)} aria-hidden="true">
      <FlowStage
        step={step}
        runId={runId}
        nodes={[
          { id: "idea", label: "IDEA" },
          { id: "architecture", label: "ARCHITECTURE" },
          { id: "build", label: "BUILD" },
        ]}
      />
      <span className={cn("block h-7 w-px transition-colors duration-300", step >= 3 ? "bg-primary/40" : "bg-border")} />
      <div className="flex gap-2.5">
        {["API", "AI", "DATA"].map((t, j) => (
          <span
            key={t}
            className={cn(
              "text-node rounded-md border bg-card px-3 py-1.5 transition-all duration-300",
              step >= 3 ? "border-primary/45 text-foreground" : "border-border text-muted-foreground opacity-45",
            )}
            style={{ transitionDelay: `${j * 110}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
      <span className={cn("block h-7 w-px transition-colors duration-300", step >= 4 ? "bg-primary/40" : "bg-border")} />
      <FlowStage
        step={step >= 4 ? step - 4 : -1}
        runId={runId}
        nodes={[
          { id: "integrate", label: "INTEGRATE" },
          { id: "test", label: "TEST" },
          { id: "ship", label: "SHIP" },
        ]}
      />
    </div>
  )
}
