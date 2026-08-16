"use client"

import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"
import { FlowStage } from "@/components/system/flow-stage"

/*
  Subtle system preview beside the Work hero — spec §4. Not the main
  attraction; the projects are.
*/

export function HeroPreview() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId } = useSequence({ steps: 6, active: inView, stepMs: 750, loop: true, holdMs: 2600 })

  return (
    <div ref={ref} className="opacity-90">
      <FlowStage
        step={step}
        runId={runId}
        nodes={[
          { id: "idea", label: "IDEA" },
          { id: "architecture", label: "ARCHITECTURE" },
          { id: "build", label: "BUILD" },
          { id: "automation", label: "AUTOMATION" },
          { id: "production", label: "PRODUCTION" },
        ]}
      />
    </div>
  )
}
