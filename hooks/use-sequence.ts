"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"

/**
 * Replays a finished run-once sequence when its section re-enters the
 * viewport — so a visitor who scrolled past never lands on a dead diagram.
 */
export function useReplayOnReenter(inView: boolean, done: boolean, restart: () => void) {
  const wasInView = useRef(inView)
  useEffect(() => {
    if (inView && !wasInView.current && done) restart()
    wasInView.current = inView
  }, [inView, done, restart])
}

interface SequenceOptions {
  /** Total number of steps; `step` runs -1 → steps-1. */
  steps: number
  /** Sequence only advances while active (typically: section in view). */
  active: boolean
  /** Per-step duration, or an array of durations (ms). */
  stepMs?: number | number[]
  startDelayMs?: number
  loop?: boolean
  /** Pause on the final state before looping. */
  holdMs?: number
}

/**
 * Drives a phased system animation: -1 (idle) then one step at a time.
 * Reduced motion jumps straight to the final state and stays there.
 */
export function useSequence({ steps, active, stepMs = 700, startDelayMs = 300, loop = false, holdMs = 2400 }: SequenceOptions) {
  const reduced = usePrefersReducedMotion()
  const [step, setStep] = useState(-1)
  const [runId, setRunId] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const durationFor = useCallback(
    (index: number) => (Array.isArray(stepMs) ? (stepMs[index] ?? stepMs[stepMs.length - 1] ?? 700) : stepMs),
    [stepMs],
  )

  useEffect(() => {
    if (reduced) {
      setStep(steps - 1)
      return
    }
    if (!active) return
    if (step >= steps - 1 && !loop) return

    const delay = step === -1 ? startDelayMs : step === steps - 1 ? holdMs : durationFor(step)
    timer.current = setTimeout(() => {
      setStep((s) => (s >= steps - 1 ? 0 : s + 1))
    }, delay)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [active, step, steps, loop, holdMs, startDelayMs, reduced, durationFor, runId])

  const restart = useCallback(() => {
    if (reduced) return
    if (timer.current) clearTimeout(timer.current)
    setStep(-1)
    setRunId((r) => r + 1)
  }, [reduced])

  return { step, done: step >= steps - 1, restart, reduced, runId }
}
