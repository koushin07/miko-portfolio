"use client"

import { SectionHeader } from "@/components/section-header"
import { FlowStage } from "@/components/system/flow-stage"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

const combination = [
  {
    label: "FULL-STACK DEVELOPMENT",
    line: "Frontend, backend, APIs, and databases — built as one coherent system.",
  },
  {
    label: "AI / AUTOMATION",
    line: "RAG pipelines, structured AI outputs, and n8n orchestration in production.",
  },
  {
    label: "QA / RELIABILITY",
    line: "An enterprise QA background (ERP application testing at DXC Technology) applied to every build.",
  },
]

export default function QaMindset() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const { step, runId } = useSequence({ steps: 7, active: inView, stepMs: 750, startDelayMs: 350 })

  return (
    <section className="noise-bg relative overflow-hidden border-t border-border/60">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <SectionHeader
              index="06"
              label="RELIABILITY"
              title="Built to work. Built to survive."
              lede="I approach software with a development and QA mindset — building the feature, validating the behavior, handling failures, and thinking about what happens after deployment."
            />
            <div className="grid gap-6 border-t border-border/60 pt-8 sm:grid-cols-3">
              {combination.map((item, i) => (
                <div key={item.label} className="flex gap-3">
                  <span aria-hidden="true" className="text-node mt-0.5 text-amber">
                    {i > 0 ? "+" : " "}
                  </span>
                  <div className="space-y-2">
                    <p className="text-node text-foreground">{item.label}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{item.line}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={ref} className="flex justify-center lg:justify-end">
            <FlowStage
              step={step}
              runId={runId}
              showChecks
              tooltipSide="left"
              nodes={[
                { id: "build", label: "BUILD", detail: "The feature, built end to end." },
                { id: "validate", label: "VALIDATE", detail: "Does it actually solve the problem?" },
                { id: "test", label: "TEST", detail: "Behavior, access, integrations — checked before release." },
                { id: "failure", label: "FAILURE PATHS", detail: "What happens when the API is down or the data is wrong." },
                { id: "deploy", label: "DEPLOY", detail: "Production configuration and rollout." },
                { id: "monitor", label: "MONITOR", detail: "Logs, alerts, and eyes on what happens after launch." },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
