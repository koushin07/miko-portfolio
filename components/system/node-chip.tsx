import { cn } from "@/lib/utils"

interface NodeChipProps {
  label: string
  sublabel?: string
  active?: boolean
  tone?: "default" | "signal" | "amber"
  className?: string
}

export function NodeChip({ label, sublabel, active = false, tone = "default", className }: NodeChipProps) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-center gap-0.5 rounded-md border bg-card px-3 py-1.5 text-center transition-colors duration-200",
        tone === "signal" && "border-primary/50",
        tone === "amber" && "border-amber/50",
        active && "border-primary/70 [animation:pulse-ring_1.8s_ease-in-out_infinite]",
        className,
      )}
    >
      <span
        className={cn(
          "text-node",
          tone === "default" && "text-foreground/90",
          tone === "signal" && "text-primary",
          tone === "amber" && "text-amber",
        )}
      >
        {label}
      </span>
      {sublabel ? (
        <span className="font-mono text-[0.6rem] tracking-[0.08em] text-muted-foreground uppercase">{sublabel}</span>
      ) : null}
    </span>
  )
}
