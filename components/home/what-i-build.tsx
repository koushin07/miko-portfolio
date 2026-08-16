"use client"

import { SectionHeader } from "@/components/section-header"
import { FlowStage, type FlowNode } from "@/components/system/flow-stage"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"
import { cn } from "@/lib/utils"

/*
  Services as interactive system modules — V2 §10. Each card's body is a
  small system that visibly executes, not an icon strip.
*/

const engagements = [
  { verb: "Build", line: "A new SaaS product, internal tool, booking platform, dashboard, or business application." },
  { verb: "Add AI", line: "AI chat, RAG, document intelligence, structured outputs, or AI-powered workflows." },
  { verb: "Automate", line: "APIs, CRMs, documents, payments, email, scheduling, and internal systems — connected." },
  { verb: "Improve", line: "Bugs fixed, performance improved, features added, reliability strengthened." },
  { verb: "Test", line: "APIs, workflows, access controls, integrations, and production behavior — validated." },
]

function ServiceModule({
  title,
  description,
  tech,
  nodes,
  branch,
  startDelay,
}: {
  title: string
  description: string
  tech: string
  nodes: FlowNode[]
  branch?: { before: FlowNode; targets: string[]; after: FlowNode }
  startDelay: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const total = branch ? 4 : nodes.length + 1
  const { step, runId } = useSequence({
    steps: total,
    active: inView,
    stepMs: 700,
    startDelayMs: startDelay,
    loop: true,
    holdMs: 2600,
  })

  return (
    <div ref={ref} className="panel flex h-full flex-col gap-6 p-7 transition-colors duration-300 hover:border-primary/40">
      <div className="space-y-2.5">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-1 items-center justify-center py-2">
        {branch ? (
          <div className="flex flex-col items-center">
            <FlowStage nodes={[branch.before]} step={step >= 0 ? 0 : -1} runId={runId} compact />
            <span aria-hidden="true" className={cn("block h-4 w-px transition-colors duration-300", step >= 1 ? "bg-primary/40" : "bg-border")} />
            <FlowStage nodes={[nodes[0]]} step={step >= 1 ? 0 : -1} runId={runId} compact />
            <span aria-hidden="true" className={cn("block h-4 w-px transition-colors duration-300", step >= 2 ? "bg-primary/40" : "bg-border")} />
            <div className="flex gap-2">
              {branch.targets.map((t, j) => (
                <span
                  key={t}
                  className={cn(
                    "text-node rounded-md border bg-card px-2 py-1 text-[0.62rem] transition-all duration-300",
                    step >= 2 ? "border-primary/45 text-foreground" : "border-border text-muted-foreground opacity-45",
                  )}
                  style={{ transitionDelay: `${j * 110}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
            <span aria-hidden="true" className={cn("block h-4 w-px transition-colors duration-300", step >= 3 ? "bg-primary/40" : "bg-border")} />
            <FlowStage nodes={[branch.after]} step={step >= 3 ? 0 : -1} runId={runId} compact />
          </div>
        ) : (
          <FlowStage nodes={nodes} step={step} runId={runId} compact />
        )}
      </div>

      <p className="text-node border-t border-border/60 pt-4 text-muted-foreground/80">{tech}</p>
    </div>
  )
}

export default function WhatIBuild() {
  return (
    <section id="services" className="noise-bg relative scroll-mt-20 overflow-hidden border-t border-border/60">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-36">
        <SectionHeader index="01" label="WHAT I BUILD" title="Three ways I help teams ship." />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <ServiceModule
            title="Full-Stack SaaS Development"
            description="Complete web applications — frontend to backend, database, auth, payments, and deployment."
            tech="NEXT.JS · REACT · PYTHON · LARAVEL · POSTGRESQL"
            startDelay={300}
            nodes={[
              { id: "request", label: "REQUEST" },
              { id: "frontend", label: "FRONTEND" },
              { id: "api", label: "API" },
              { id: "database", label: "DATABASE" },
              { id: "response", label: "RESPONSE" },
            ]}
          />
          <ServiceModule
            title="AI & RAG Development"
            description="AI applications grounded in your data — retrieval, structured outputs, custom workflows."
            tech="OPENAI · EMBEDDINGS · PGVECTOR · RAG"
            startDelay={600}
            nodes={[
              { id: "question", label: "QUESTION" },
              { id: "embedding", label: "EMBEDDING" },
              { id: "search", label: "VECTOR SEARCH" },
              { id: "context", label: "CONTEXT" },
              { id: "llm", label: "LLM" },
              { id: "answer", label: "ANSWER" },
            ]}
          />
          <ServiceModule
            title="Business Automation & Integrations"
            description="CRMs, documents, payments, and communication tools connected into one reliable layer."
            tech="N8N · WEBHOOKS · REST APIS · SUPABASE"
            startDelay={900}
            nodes={[{ id: "n8n", label: "N8N" }]}
            branch={{
              before: { id: "trigger", label: "TRIGGER" },
              targets: ["CRM", "AI", "DOCS", "DB"],
              after: { id: "output", label: "OUTPUT" },
            }}
          />
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-8 border-t border-border/60 pt-12 sm:grid-cols-2 lg:grid-cols-5">
          {engagements.map((item) => (
            <div key={item.verb} className="space-y-2">
              <p className="text-node text-primary">{item.verb}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
