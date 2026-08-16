"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"
import { FlowStage, type FlowNode } from "@/components/system/flow-stage"
import { RagStage } from "@/components/stages/rag-stage"
import { AtlasStage } from "@/components/stages/atlas-stage"
import { SdiStage } from "@/components/stages/sdi-stage"
import { explorerProjects, type ExplorerCategory } from "@/lib/projects-data"

/*
  Project Explorer — Projects spec §07/§10/§11. Master-detail: the left
  list is navigation, the right panel is the active project. Selecting a
  project runs its system visualization once; only the active project
  animates. Keyboard: ↑/↓ move through the list.
*/

const FILTERS: ("ALL" | ExplorerCategory)[] = [
  "ALL",
  "AI",
  "FULL-STACK",
  "AUTOMATION",
  "GEOSPATIAL",
  "E-COMMERCE",
  "INTERNAL SYSTEMS",
]

function ActiveFlow({ nodes }: { nodes: FlowNode[] }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { step, runId } = useSequence({ steps: nodes.length + 1, active: inView, stepMs: 520, startDelayMs: 200 })
  return (
    <div ref={ref} className="flex justify-center py-4">
      <FlowStage nodes={nodes} step={step} runId={runId} />
    </div>
  )
}

function AutomationMini() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { step, runId } = useSequence({ steps: 5, active: inView, stepMs: 650, startDelayMs: 200 })
  return (
    <div ref={ref} className="flex flex-col items-center py-4">
      <FlowStage
        step={step}
        runId={runId}
        nodes={[
          { id: "trigger", label: "TRIGGER", sublabel: "Webhook · Schedule · Form", detail: "Events enter the platform — pushed, scheduled, or submitted." },
          { id: "engine", label: "N8N ENGINE", sublabel: "Validate · Transform · Retry", detail: "Every event is validated, transformed, and routed with retries and error paths." },
        ]}
      />
      <span aria-hidden="true" className={cn("block h-6 w-px transition-colors duration-300", step >= 2 ? "bg-primary/40" : "bg-border")} />
      <div className="flex flex-wrap justify-center gap-2">
        {["CRM", "AI", "DOCUMENTS", "DATABASE"].map((t, j) => (
          <span
            key={t}
            className={cn(
              "text-node rounded-md border bg-card px-2 py-1 text-[0.65rem] transition-all duration-300",
              step >= 2 ? "border-primary/45 text-foreground" : "border-border text-muted-foreground opacity-45",
            )}
            style={{ transitionDelay: `${j * 100}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
      <span aria-hidden="true" className={cn("block h-6 w-px transition-colors duration-300", step >= 3 ? "bg-primary/40" : "bg-border")} />
      <FlowStage
        step={step >= 3 ? step - 3 : -1}
        runId={runId}
        nodes={[{ id: "output", label: "OUTPUT", sublabel: "Email · PDF · Notify", detail: "Finished work reaches people — 42 workflows deep." }]}
      />
    </div>
  )
}

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL")
  const [activeId, setActiveId] = useState(explorerProjects[0].id)
  const listRef = useRef<HTMLDivElement>(null)

  const filtered = explorerProjects.filter((p) => filter === "ALL" || p.filter === filter)
  const active = filtered.find((p) => p.id === activeId) ?? filtered[0]
  const activeIndex = filtered.findIndex((p) => p.id === active?.id)

  const applyFilter = (f: (typeof FILTERS)[number]) => {
    setFilter(f)
    const next = explorerProjects.filter((p) => f === "ALL" || p.filter === f)
    if (!next.some((p) => p.id === activeId) && next[0]) setActiveId(next[0].id)
  }

  const moveSelection = (event: React.KeyboardEvent, currentId: string) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return
    event.preventDefault()
    const index = filtered.findIndex((p) => p.id === currentId)
    const next = filtered[event.key === "ArrowDown" ? index + 1 : index - 1]
    if (!next) return
    setActiveId(next.id)
    listRef.current?.querySelector<HTMLButtonElement>(`[data-project="${next.id}"]`)?.focus()
  }

  if (!active) return null

  const visual =
    active.visual === "rag" ? (
      <RagStage />
    ) : active.visual === "atlas" ? (
      <AtlasStage />
    ) : active.visual === "sdi" ? (
      <SdiStage />
    ) : active.visual === "automation" ? (
      <AutomationMini />
    ) : active.flow ? (
      <ActiveFlow nodes={active.flow} />
    ) : null

  return (
    <div>
      {/* Filters — controls for an engineering archive */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => applyFilter(f)}
            className={cn(
              "rounded-md border px-3 py-1.5 font-mono text-xs tracking-[0.06em] uppercase transition-colors duration-200",
              filter === f
                ? "border-amber/60 bg-amber/10 text-amber"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
        <p className="text-node ml-auto text-muted-foreground/60">
          {filtered.length} PROJECT{filtered.length === 1 ? "" : "S"}
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[300px_1fr]">
        {/* Project list */}
        <div ref={listRef} role="group" aria-label="Projects" className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
          {filtered.map((project, i) => {
            const isActive = project.id === active.id
            return (
              <button
                key={project.id}
                type="button"
                data-project={project.id}
                aria-pressed={isActive}
                onClick={() => setActiveId(project.id)}
                onKeyDown={(e) => moveSelection(e, project.id)}
                className={cn(
                  "group rounded-md border text-left transition-colors duration-200 max-lg:px-3 max-lg:py-1.5 lg:w-full lg:rounded-none lg:border-x-0 lg:border-t-0 lg:border-b lg:border-border/60 lg:px-3 lg:py-3.5",
                  "max-lg:border-border max-lg:bg-card",
                  isActive
                    ? "max-lg:border-amber/60 max-lg:bg-amber/10 lg:bg-secondary/40"
                    : "hover:lg:bg-secondary/20",
                )}
              >
                <span className="flex items-baseline gap-3">
                  <span className={cn("hidden font-mono text-[0.65rem] lg:inline", isActive ? "text-amber" : "text-muted-foreground/50")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("font-mono text-sm tracking-tight", isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                    {project.name}
                  </span>
                  {project.featured ? <span aria-hidden="true" className="hidden size-1 rounded-full bg-amber lg:inline-block" /> : null}
                </span>
                <span className="text-node mt-1 hidden text-[0.62rem] text-muted-foreground/60 lg:block">
                  {project.type}
                </span>
                <span className="mt-1 hidden max-h-0 overflow-hidden text-xs text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100 lg:block">
                  {project.oneLiner}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active project panel */}
        <div key={active.id} className="panel min-w-0 p-7 [animation:view-in_0.3s_ease-out_both] md:p-10 lg:sticky lg:top-20 lg:self-start">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-node flex items-center gap-2 text-muted-foreground">
              <span aria-hidden="true" className="size-1.5 rounded-sm bg-amber" />
              {String(activeIndex + 1).padStart(2, "0")} / {active.categoryLabel}
            </p>
            {active.status ? (
              <span
                className={cn(
                  "text-node rounded border px-1.5 py-0.5 text-[0.62rem]",
                  active.status === "PRIVATE / NDA" ? "border-amber/50 text-amber" : "border-border text-muted-foreground",
                )}
              >
                {active.status}
              </span>
            ) : null}
            <p className="text-node ml-auto text-muted-foreground/50">
              {String(activeIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            </p>
          </div>

          <h3 className="mt-5 font-mono text-2xl tracking-tight text-foreground md:text-3xl">{active.name}</h3>
          <p className="mt-2 text-lg text-foreground/90">{active.oneLiner}</p>

          <div className="mt-6 border-t border-border/60 pt-5">
            <p className="text-node text-amber">PROBLEM</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{active.problem}</p>
          </div>

          <div className="mt-6 border-t border-border/60 pt-5">
            <p className="text-node text-muted-foreground">SYSTEM</p>
            <div className="mt-4">{visual}</div>
          </div>

          <div className="mt-6 grid gap-x-8 gap-y-4 border-t border-border/60 pt-5 sm:grid-cols-3">
            <div>
              <p className="text-node text-muted-foreground/60">TYPE</p>
              <p className="text-node mt-1.5 text-foreground/85">{active.type}</p>
            </div>
            <div>
              <p className="text-node text-muted-foreground/60">STACK</p>
              <p className="mt-1.5 font-mono text-xs text-foreground/85">{active.stack}</p>
            </div>
            {active.status ? (
              <div>
                <p className="text-node text-muted-foreground/60">STATUS</p>
                <p className="text-node mt-1.5 text-foreground/85">{active.status}</p>
              </div>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-5">
            <p className="max-w-md text-sm leading-relaxed text-foreground/85">{active.outcome}</p>
            <Link
              href={active.href?.url ?? "/contact"}
              className="shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {active.href?.label ?? "Discuss this build →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
