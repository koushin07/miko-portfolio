import { SectionHeader } from "@/components/section-header"
import { PatternViz } from "@/components/automation/pattern-viz"

const patterns = [
  {
    key: "idempotency",
    title: "Idempotency",
    line: "Search-then-insert and reuse-or-create patterns prevent duplicate records, events, folders, and resources.",
  },
  {
    key: "retry",
    title: "Retries",
    line: "Retry-on-fail with backoff for API failures and rate limits.",
  },
  {
    key: "error",
    title: "Error Handling",
    line: "IF-gated branches and dedicated error responses keep failures explicit and manageable.",
  },
  {
    key: "chunking",
    title: "Pagination / Chunking",
    line: "Large API datasets are ingested in bounded pages, so no single run can blow up.",
  },
  {
    key: "extraction",
    title: "AI Extraction",
    line: "Gemini turns raw documents into structured, validated records before they touch the database.",
  },
] as const

export function Patterns() {
  return (
    <div>
      <SectionHeader label="ENGINEERING PATTERNS" title="Not just automation. Engineering." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <div key={pattern.key} className="panel flex h-full flex-col gap-5 p-6 transition-colors duration-300 hover:border-primary/40">
            <div className="space-y-2">
              <p className="text-base font-medium text-foreground">{pattern.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{pattern.line}</p>
            </div>
            <div className="mt-auto flex justify-center py-2">
              <PatternViz variant={pattern.key} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
