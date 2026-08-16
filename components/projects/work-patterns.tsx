"use client"

import { SectionHeader } from "@/components/section-header"
import { FlowStage } from "@/components/system/flow-stage"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

/*
  Patterns behind the work — Projects spec §29. The projects aren't
  random: the same engineering shapes repeat across them. Each pattern is
  a small system that runs.
*/

const patterns = [
  {
    key: "rag",
    label: "AI / RAG",
    line: "Ground the model before it speaks.",
    steps: ["RETRIEVAL", "CONTEXT", "GENERATION"],
  },
  {
    key: "automation",
    label: "AUTOMATION",
    line: "Events flow; nothing is handed off by hand.",
    steps: ["TRIGGER", "VALIDATION", "PROCESSING", "OUTPUT"],
  },
  {
    key: "integration",
    label: "INTEGRATION",
    line: "External systems become one system.",
    steps: ["API", "TRANSFORM", "STORE", "NOTIFY"],
  },
  {
    key: "qa",
    label: "QA",
    line: "Shipping means proving it works.",
    steps: ["BUILD", "VALIDATE", "TEST", "DEPLOY"],
  },
  {
    key: "data",
    label: "DATA",
    line: "Raw input becomes usable answers.",
    steps: ["INGEST", "PROCESS", "QUERY", "PRESENT"],
  },
]

function PatternCard({ label, line, steps, delay }: { label: string; line: string; steps: string[]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35, once: false })
  const { step, runId } = useSequence({
    steps: steps.length + 1,
    active: inView,
    stepMs: 650,
    startDelayMs: delay,
    loop: true,
    holdMs: 2400,
  })

  return (
    <div ref={ref} className="panel flex h-full flex-col gap-5 p-6 transition-colors duration-300 hover:border-primary/40">
      <div className="space-y-1.5">
        <p className="text-node text-primary">{label}</p>
        <p className="text-sm text-muted-foreground">{line}</p>
      </div>
      <div className="flex flex-1 items-center justify-center py-2">
        <FlowStage compact step={step} runId={runId} nodes={steps.map((s) => ({ id: s, label: s }))} />
      </div>
    </div>
  )
}

export function WorkPatterns() {
  return (
    <div>
      <SectionHeader
        label="REPEATABLE SHAPES"
        title="Patterns behind the work."
        lede="Different domains, same engineering shapes — that's what makes the next system predictable to build."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {patterns.map((pattern, i) => (
          <PatternCard key={pattern.key} label={pattern.label} line={pattern.line} steps={pattern.steps} delay={300 + i * 200} />
        ))}
      </div>
    </div>
  )
}
