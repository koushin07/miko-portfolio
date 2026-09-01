"use client"

import { FlowStage } from "@/components/system/flow-stage"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"

/*
  AutomationBeforeAfter — selling-system spec §13. The shift: scattered
  manual work on the left, one automated backbone on the right. Mirrors
  the ERIS BeforeAfter pattern.
*/

const FRAGMENTS = [
  "DAILY COURT FILES",
  "MANUAL LEAD TRIAGE",
  "MANUAL DOCUMENT HANDLING",
  "HANDOFFS BETWEEN TOOLS",
  "SCATTERED SCHEDULES",
]

export function AutomationBeforeAfter() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, restart, done } = useSequence({ steps: 7, active: inView, stepMs: 650, startDelayMs: 300 })
  useReplayOnReenter(inView, done, restart)

  return (
    <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <p className="text-node text-destructive-foreground/70">BEFORE</p>
        <div aria-hidden="true" className="relative mt-6 h-56">
          {FRAGMENTS.map((fragment, i) => (
            <span
              key={fragment}
              className="text-node absolute rounded-md border border-dashed border-border bg-card/60 px-3 py-1.5 text-muted-foreground/70"
              style={{
                left: `${[6, 48, 16, 52, 10][i]}%`,
                top: `${[8, 18, 44, 62, 80][i]}%`,
                transform: `rotate(${[-3, 2, -2, 3, -1][i]}deg)`,
              }}
            >
              {fragment}
            </span>
          ))}
          <span className="text-node absolute right-[4%] bottom-[8%] rounded border border-amber/40 px-1.5 py-0.5 text-[0.6rem] text-amber/80">
            EVERY HANDOFF A DELAY OR AN ERROR
          </span>
        </div>
      </div>
      <div>
        <p className="text-node text-primary">AFTER — ONE BACKBONE</p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <FlowStage
            step={step - 1}
            runId={runId}
            nodes={[
              { id: "feed", label: "FEED PARSED" },
              { id: "leads", label: "LEADS CLASSIFIED" },
              { id: "queue", label: "QUEUE PRIORITIZED" },
              { id: "documents", label: "DOCUMENTS GENERATED" },
              { id: "delivered", label: "DELIVERED" },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
