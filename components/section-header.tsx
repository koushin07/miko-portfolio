import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  index?: string
  label: string
  title: string
  lede?: string
  className?: string
}

export function SectionHeader({ index, label, title, lede, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl space-y-4", className)}>
      <p className="text-node flex items-center gap-2 text-muted-foreground">
        <span aria-hidden="true" className="size-1.5 rounded-sm bg-amber" />
        {index ? `${index} — ${label}` : label}
      </p>
      <h2 className="text-h2 text-foreground">{title}</h2>
      {lede ? <p className="text-base-custom text-muted-foreground">{lede}</p> : null}
    </div>
  )
}
