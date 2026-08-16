const infra = [
  "SELF-HOSTED n8n",
  "HOSTINGER VPS",
  "TRAEFIK",
  "CREDENTIAL MANAGEMENT",
  "IP WHITELISTING",
  "MONITORING / LOGGING",
]

const reviewMetrics = ["49 TRACKED EXECUTIONS", "0 FAILURES", "~1.0S AVG RUNTIME"]

export function OpsBar() {
  return (
    <div className="panel divide-y divide-border/60">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3">
        {infra.map((item) => (
          <li key={item} className="text-node flex items-center gap-2 text-muted-foreground">
            <span aria-hidden="true" className="size-1 rounded-full bg-primary/70" />
            {item}
          </li>
        ))}
      </ul>
      <p className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3">
        <span className="text-node text-amber">AT REVIEW TIME:</span>
        {reviewMetrics.map((metric) => (
          <span key={metric} className="text-node text-muted-foreground">
            {metric}
          </span>
        ))}
      </p>
    </div>
  )
}
