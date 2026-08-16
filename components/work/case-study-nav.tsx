import Link from "next/link"

/*
  Prev/next navigation between case studies — Work spec §29. Visitors move
  between projects without re-scrolling the Work page.
*/

const CASE_STUDIES = [
  { id: "readmindme", label: "ReadMindMe", href: "/case-studies/readmindme" },
  { id: "atlas", label: "Atlas NHD", href: "/case-studies/atlas-nhd" },
  { id: "eris", label: "ERIS", href: "/case-studies/eris" },
  { id: "ace", label: "ACE", href: "/case-studies/ace" },
]

export function CaseStudyNav({ current }: { current: "readmindme" | "atlas" | "eris" | "ace" }) {
  const index = CASE_STUDIES.findIndex((c) => c.id === current)
  const prev = CASE_STUDIES[index - 1]
  const next = CASE_STUDIES[index + 1]

  return (
    <nav aria-label="Case study navigation" className="border-t border-border/60">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-8 lg:px-8">
        {prev ? (
          <Link href={prev.href} className="text-node text-muted-foreground transition-colors hover:text-foreground">
            ← {prev.label.toUpperCase()}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/work" className="text-node text-muted-foreground transition-colors hover:text-primary">
          BACK TO WORK
        </Link>
        {next ? (
          <Link href={next.href} className="text-node text-muted-foreground transition-colors hover:text-foreground">
            {next.label.toUpperCase()} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  )
}
