import { ImageResponse } from "next/og"

/*
  Shared OG-image composition for case studies — SEO plan: each project
  gets its own social image reflecting its system, not one generic card.
*/

export const OG_SIZE = { width: 1200, height: 630 }

export function caseStudyOgImage({
  eyebrow,
  title,
  subtitle,
  flow,
}: {
  eyebrow: string
  title: string
  subtitle: string
  flow: string[]
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0e15",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 10, height: 10, backgroundColor: "#e8a020", borderRadius: 2 }} />
            <div style={{ color: "#9aa0b5", fontSize: 24, letterSpacing: 4 }}>{eyebrow}</div>
          </div>
          <div style={{ color: "#e7e9f2", fontSize: 92, fontWeight: 700, marginTop: 32, letterSpacing: -2 }}>{title}</div>
          <div style={{ color: "#9aa0b5", fontSize: 32, marginTop: 20, maxWidth: 1000, lineHeight: 1.35 }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            {flow.map((node, i) => (
              <div key={node} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {i > 0 ? <div style={{ color: "#e8a020", fontSize: 26 }}>→</div> : null}
                <div
                  style={{
                    color: "#e7e9f2",
                    fontSize: 22,
                    letterSpacing: 2,
                    border: "1px solid #3a3f52",
                    borderRadius: 8,
                    padding: "10px 18px",
                    backgroundColor: "#151722",
                  }}
                >
                  {node}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "#9aa0b5", fontSize: 24, letterSpacing: 4 }}>MIKO.CANARES</div>
            <div style={{ color: "#7d88f5", fontSize: 24 }}>Case Study</div>
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  )
}
