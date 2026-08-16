"use client"

import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"

/*
  Engineering philosophy — spec §08/§09. Four principles as a progression
  that lights up in sequence. All text is always rendered (reduced motion
  simply shows the complete, fully-lit process).
*/

const principles = [
  {
    num: "01",
    title: "Understand the workflow",
    line: "Understand what the business actually needs before writing code.",
  },
  {
    num: "02",
    title: "Build the simplest system that works",
    line: "Choose architecture based on the problem rather than forcing a favorite stack.",
  },
  {
    num: "03",
    title: "Validate the boundaries",
    line: "Test APIs, integrations, data, permissions, workflows, and failure states.",
  },
  {
    num: "04",
    title: "Ship something maintainable",
    line: "The goal isn't just a working demo — the system has to stay understandable and supportable.",
  },
]

export function Philosophy() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, restart, done, reduced } = useSequence({ steps: 5, active: inView, stepMs: 850, startDelayMs: 350 })
  useReplayOnReenter(inView, done, restart)

  return (
    <div ref={ref}>
      <SectionHeader label="ENGINEERING PHILOSOPHY" title="How I approach systems." />

      <div className="mt-12 max-w-2xl">
        {principles.map((principle, i) => {
          const state = reduced || step > i ? "past" : step === i ? "arriving" : "future"
          return (
            <div key={principle.num} className="relative flex gap-6 pb-10 last:pb-0">
              {i < principles.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-9 left-[17px] h-[calc(100%-2.25rem)] w-px transition-colors duration-500",
                    state === "past" ? "bg-primary/40" : "bg-border",
                  )}
                >
                  {step === i + 1 && !reduced ? (
                    <span
                      key={`${runId}-${i}`}
                      className="motion-safe-only absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber [animation:packet-y-once_0.5s_ease-in_both]"
                    />
                  ) : null}
                </span>
              ) : null}
              <span
                className={cn(
                  "text-node z-10 flex size-9 shrink-0 items-center justify-center rounded-md border bg-card transition-all duration-400",
                  state === "future" && "border-border text-muted-foreground/60",
                  state === "arriving" && "scale-105 border-amber/70 text-amber",
                  state === "past" && "border-primary/50 text-foreground",
                )}
              >
                {principle.num}
              </span>
              <div
                className={cn(
                  "space-y-1.5 pt-1 transition-opacity duration-500",
                  state === "future" ? "opacity-45" : "opacity-100",
                )}
              >
                <p className="text-lg font-medium text-foreground">{principle.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{principle.line}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
