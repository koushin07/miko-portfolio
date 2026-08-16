"use client"

import { useRef, useState } from "react"
import { RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

/*
  Document Factory — V2 §20-§22. The documented flagship workflow (~18 nodes
  in production) rendered as a live execution: nodes process in order, a
  trace log builds like a real run, and every node explains itself on
  hover/click. No fabricated business data — generic execution statuses only.
*/

interface FactoryStep {
  id: string
  label: string
  tech?: string
  blurb: string
  activateStep: number
  branch?: boolean
}

const STEPS: FactoryStep[] = [
  { id: "webhook", label: "SUPABASE WEBHOOK", tech: "Supabase", blurb: "Starts the workflow when a queued intake is ready.", activateStep: 0 },
  { id: "gate", label: "READY TO PROCESS?", tech: "n8n IF node", blurb: "An IF gate keeps unfinished intakes from producing documents — failures stay explicit.", activateStep: 1 },
  { id: "template", label: "GET TEMPLATE", tech: "Supabase", blurb: "Retrieves the appropriate document template.", activateStep: 2 },
  { id: "render", label: "RENDER DOCUMENT", tech: "DocxTemplater", blurb: "Merges intake data into the document template.", activateStep: 3 },
  { id: "footer", label: "ADD FOOTER", tech: "Microservice", blurb: "Adds required footer/branding information.", activateStep: 4 },
  { id: "pdf", label: "CONVERT TO PDF", tech: "Gotenberg", blurb: "Converts the generated document into a production-ready PDF.", activateStep: 5 },
  { id: "metadata", label: "ADD METADATA", tech: "Microservice", blurb: "Adds document fingerprint metadata.", activateStep: 6 },
  { id: "upload", label: "UPLOAD PDF", tech: "Supabase Storage", blurb: "Stores the final document.", activateStep: 7 },
  { id: "link", label: "GENERATE LINK", tech: "Supabase", blurb: "Creates a client-accessible download link.", activateStep: 8 },
  { id: "email", label: "EMAIL", tech: "Brevo", blurb: "Sends the transactional email with the document link.", activateStep: 9, branch: true },
  { id: "notify", label: "NOTIFY", tech: "Pushover", blurb: "Notifies the internal team or agent.", activateStep: 9, branch: true },
]

const TOTAL_STEPS = 11 // 0-9 node phases + 10 = complete

const TRACE: { step: number; line: string }[] = [
  { step: 0, line: "NEW INTAKE" },
  { step: 1, line: "READY" },
  { step: 2, line: "TEMPLATE FOUND" },
  { step: 3, line: "DOCUMENT GENERATED" },
  { step: 5, line: "PDF CREATED" },
  { step: 7, line: "STORED" },
  { step: 8, line: "LINK GENERATED" },
  { step: 9, line: "EMAIL SENT" },
]

const linearSteps = STEPS.filter((s) => !s.branch)
const branchSteps = STEPS.filter((s) => s.branch)

export function DocumentFactory({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { step, runId, restart, reduced } = useSequence({ steps: TOTAL_STEPS, active: inView, stepMs: 680, startDelayMs: 400 })
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const selected = STEPS.find((s) => s.id === selectedId)
  const complete = step >= TOTAL_STEPS - 1

  const moveFocus = (event: React.KeyboardEvent, currentId: string) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return
    event.preventDefault()
    const index = STEPS.findIndex((s) => s.id === currentId)
    const next = STEPS[event.key === "ArrowDown" ? index + 1 : index - 1]
    if (!next) return
    listRef.current?.querySelector<HTMLButtonElement>(`[data-step="${next.id}"]`)?.focus()
    setSelectedId(next.id)
  }

  const nodeButton = (node: FactoryStep) => {
    const state = step > node.activateStep ? "past" : step === node.activateStep ? "processing" : "future"
    const isSelected = node.id === selectedId
    return (
      <button
        key={node.id}
        type="button"
        data-step={node.id}
        aria-pressed={isSelected}
        onClick={() => setSelectedId(isSelected ? null : node.id)}
        onMouseEnter={() => setSelectedId(node.id)}
        onFocus={() => setSelectedId(node.id)}
        onKeyDown={(e) => moveFocus(e, node.id)}
        className={cn(
          "text-node w-full rounded-md border bg-card px-4 py-2.5 text-left transition-all duration-300",
          state === "future" && "border-border text-muted-foreground opacity-50",
          state === "processing" && "scale-[1.02] border-amber/70 text-foreground shadow-[0_0_14px_-6px_var(--amber)]",
          state === "past" && "border-primary/45 text-foreground/90",
          isSelected && "border-amber/70",
        )}
      >
        <span className="flex items-center gap-2">
          {state === "past" ? <span className="text-amber">✓</span> : null}
          {state === "processing" ? <span className="motion-safe-only size-1.5 rounded-full bg-amber [animation:pulse-ring_0.9s_ease-in-out_infinite]" /> : null}
          {node.label}
          {node.tech ? <span className="ml-auto text-[0.6rem] text-muted-foreground normal-case">{node.tech}</span> : null}
        </span>
      </button>
    )
  }

  return (
    <div ref={ref} className={cn("grid gap-10 lg:grid-cols-[minmax(0,400px)_1fr]", className)}>
      <div ref={listRef} onMouseLeave={() => setSelectedId(null)} role="group" aria-label="Document Factory workflow steps">
        {linearSteps.map((node, i) => (
          <div key={node.id}>
            {i > 0 ? (
              <span
                aria-hidden="true"
                className={cn("relative mx-auto block h-4 w-px transition-colors duration-300", step >= node.activateStep ? "bg-primary/40" : "bg-border")}
              >
                {step === node.activateStep ? (
                  <span key={`${runId}-${node.id}`} className="motion-safe-only absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber [animation:packet-y-once_0.35s_ease-in_both]" />
                ) : null}
              </span>
            ) : null}
            {nodeButton(node)}
          </div>
        ))}
        <div aria-hidden="true" className="mx-auto flex h-4 w-44 items-end justify-between">
          <span className={cn("block h-full w-px -rotate-12 transition-colors duration-300", step >= 9 ? "bg-primary/40" : "bg-border")} />
          <span className={cn("block h-full w-px rotate-12 transition-colors duration-300", step >= 9 ? "bg-primary/40" : "bg-border")} />
        </div>
        <div className="grid grid-cols-2 gap-3">{branchSteps.map((node) => nodeButton(node))}</div>
      </div>

      <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
        {/* Execution trace — reads like a real run */}
        <div className="panel p-5">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <p className="text-node text-muted-foreground">EXECUTION</p>
            {!reduced && complete ? (
              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                <RotateCcw size={11} />
                Run again
              </button>
            ) : null}
          </div>
          <div className="mt-3 min-h-[13rem] font-mono text-xs leading-7">
            {TRACE.filter((t) => step >= t.step).map((t) => (
              <p key={t.line} className="text-muted-foreground [animation:node-in_0.3s_ease-out_both]">
                <span className="text-primary">▸</span> {t.line}
              </p>
            ))}
            {complete ? (
              <p className="text-amber [animation:node-in_0.3s_ease-out_both]">✓ COMPLETE</p>
            ) : step >= 0 ? (
              <p className="text-muted-foreground/50">…</p>
            ) : (
              <p className="text-muted-foreground/50">waiting for intake…</p>
            )}
          </div>
        </div>

        {/* Node detail */}
        <div className="panel space-y-3 p-5" aria-live="polite">
          {selected ? (
            <>
              <p className="text-node text-amber">{selected.label}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{selected.blurb}</p>
              {selected.tech ? (
                <p className="text-node border-t border-border/60 pt-3 text-muted-foreground">
                  INTEGRATION: <span className="text-foreground">{selected.tech}</span>
                </p>
              ) : null}
            </>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              Hover or tab through the nodes to see what each one does. ~18 nodes in production.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
