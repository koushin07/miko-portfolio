"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"
import { RotateCcw } from "lucide-react"

/*
  ReadMindMe RAG stage — V2 §12. The pipeline executes in front of the
  visitor: a question becomes an embedding, vector space lights up around
  the nearest verses, retrieved context feeds GPT-4o, and a grounded,
  structured answer lands. Hover any stage label for the explanation.

  Steps: 0 QUESTION · 1 EMBEDDING · 2 VECTOR SEARCH · 3 points illuminate ·
         4 RETRIEVED CONTEXT · 5 GPT-4o · 6 GROUNDED ANSWER
*/

// Deterministic vector-space scatter (x, y in %); the first five are "nearest".
const POINTS: [number, number][] = [
  [22, 30], [35, 22], [30, 44], [45, 35], [38, 58],
  [10, 15], [15, 55], [8, 38], [18, 72], [26, 85],
  [42, 78], [52, 12], [55, 50], [60, 28], [58, 70],
  [66, 45], [70, 15], [72, 62], [78, 35], [80, 80],
  [86, 20], [88, 55], [92, 40], [90, 72], [50, 90],
  [64, 88], [12, 90], [76, 8], [95, 10], [96, 85],
]
const NEAREST = 5

interface RagNode {
  id: string
  label: string
  sublabel?: string
  activateStep: number
  tip: string
}

const NODES: RagNode[] = [
  { id: "question", label: "QUESTION", activateStep: 0, tip: "A user asks in plain language — no query syntax." },
  { id: "embedding", label: "EMBEDDING", activateStep: 1, tip: "The question becomes a vector — a point in meaning-space." },
  { id: "search", label: "VECTOR SEARCH", sublabel: "pgvector", activateStep: 2, tip: "pgvector finds the nearest points among 36,819 verse embeddings." },
  { id: "context", label: "RETRIEVED CONTEXT", activateStep: 4, tip: "The closest passages become the model's working context." },
  { id: "llm", label: "GPT-4o", activateStep: 5, tip: "Generates an answer grounded in the retrieved context — not from thin air." },
  { id: "answer", label: "GROUNDED ANSWER", activateStep: 6, tip: "Structured output the app renders reliably — with sources." },
]

export function RagStage({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, restart, reduced, done } = useSequence({ steps: 8, active: inView, stepMs: 850, startDelayMs: 350 })
  useReplayOnReenter(inView, done, restart)
  const [openId, setOpenId] = useState<string | null>(null)

  const nodeState = (n: RagNode) => (step > n.activateStep ? "past" : step === n.activateStep ? "arriving" : "future")

  const artifact = (id: string) => {
    switch (id) {
      case "question":
        return step >= 0 ? (
          <div className="rounded-lg rounded-tl-sm border bg-secondary/70 px-4 py-2.5 text-sm text-foreground/90">
            "What does the Bible say about forgiveness?"
          </div>
        ) : null
      case "embedding":
        return step >= 1 ? (
          <p className="font-mono text-xs text-muted-foreground">[ 0.021, −0.334, 0.108, 0.512, − … ]</p>
        ) : null
      case "search":
        return step >= 2 ? (
          <div className="relative h-36 w-full max-w-[300px] overflow-hidden rounded-lg border bg-card/60">
            {POINTS.map(([x, y], i) => {
              const near = i < NEAREST
              const lit = near && step >= 3
              return (
                <span
                  key={i}
                  className={cn(
                    "absolute rounded-full transition-all duration-500",
                    lit ? "size-2 bg-amber shadow-[0_0_8px_var(--amber)]" : "size-1 bg-primary/35",
                    step >= 2 ? "opacity-100" : "opacity-0",
                  )}
                  style={{ left: `${x}%`, top: `${y}%`, transitionDelay: `${(i % 7) * 60}ms` }}
                />
              )
            })}
            <p className="absolute right-2 bottom-1.5 font-mono text-[0.6rem] tracking-[0.08em] text-muted-foreground/70 uppercase">
              {step >= 3 ? "5 nearest of 36,819" : "36,819 verse embeddings"}
            </p>
          </div>
        ) : null
      case "context":
        return step >= 4 ? (
          <div className="flex flex-wrap gap-2">
            {["Matt 6:14", "Eph 4:32", "Col 3:13"].map((ref, j) => (
              <span
                key={ref}
                className="rounded border bg-card px-2 py-1 font-mono text-[0.65rem] text-muted-foreground [animation:node-in_0.4s_ease-out_both]"
                style={{ animationDelay: `${j * 130}ms` }}
              >
                ▤ {ref}
              </span>
            ))}
          </div>
        ) : null
      case "llm":
        return step === 5 ? (
          <p className="font-mono text-xs text-amber">generating grounded response…</p>
        ) : null
      case "answer":
        return step >= 6 ? (
          <pre className="w-fit max-w-full rounded-lg border bg-card px-4 py-3 font-mono text-[0.7rem] leading-relaxed whitespace-pre-wrap text-muted-foreground [animation:node-in_0.5s_ease-out_both]">
            {`{
  "answer": "Forgiveness is central…",
  "verses": ["Matt 6:14", "Eph 4:32", "Col 3:13"],
  "grounded": true
}`}
          </pre>
        ) : null
      default:
        return null
    }
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Vector-space backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
        {POINTS.slice(8).map(([x, y], i) => (
          <span key={i} className="absolute size-0.5 rounded-full bg-primary/30" style={{ left: `${x}%`, top: `${y}%` }} />
        ))}
      </div>

      <div className="relative space-y-0">
        {NODES.map((node, i) => {
          const state = nodeState(node)
          const open = openId === node.id
          return (
            <div key={node.id}>
              {i > 0 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative ml-[92px] block h-9 w-px transition-colors duration-300 sm:ml-[110px]",
                    step >= node.activateStep ? "bg-primary/40" : "bg-border",
                  )}
                >
                  {step === node.activateStep ? (
                    <span
                      key={`${runId}-${node.id}`}
                      className="motion-safe-only absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber [animation:packet-y-once_0.45s_ease-in_both]"
                    />
                  ) : null}
                </span>
              ) : null}
              <div className="grid grid-cols-[184px_1fr] items-center gap-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : node.id)}
                    onMouseEnter={() => setOpenId(node.id)}
                    onMouseLeave={() => setOpenId((c) => (c === node.id ? null : c))}
                    onFocus={() => setOpenId(node.id)}
                    onBlur={() => setOpenId((c) => (c === node.id ? null : c))}
                    aria-expanded={open}
                    className={cn(
                      "w-full cursor-help rounded-md border bg-card px-3 py-2.5 text-center transition-all duration-300",
                      state === "future" && "border-border opacity-45",
                      state === "arriving" && "scale-[1.03] border-amber/70 opacity-100",
                      state === "past" && "border-primary/45 opacity-100",
                    )}
                  >
                    <span className={cn("text-node", state === "future" ? "text-muted-foreground" : "text-foreground")}>
                      {node.label}
                    </span>
                    {node.sublabel ? (
                      <span className="mt-0.5 block font-mono text-[0.6rem] tracking-[0.08em] text-muted-foreground uppercase">
                        {node.sublabel}
                      </span>
                    ) : null}
                  </button>
                  {open ? (
                    <div className="absolute top-full left-1/2 z-20 mt-2 w-56 -translate-x-1/2 rounded-md border bg-popover p-3 shadow-lg">
                      <p className="text-node text-primary">{node.label}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{node.tip}</p>
                    </div>
                  ) : null}
                </div>
                <div className="min-w-0 py-1">{artifact(node.id)}</div>
              </div>
            </div>
          )
        })}
      </div>

      {!reduced && step >= 7 ? (
        <button
          type="button"
          onClick={restart}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          <RotateCcw size={12} />
          RUN AGAIN
        </button>
      ) : null}
    </div>
  )
}
