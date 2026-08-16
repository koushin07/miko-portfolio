import { caseStudyOgImage, OG_SIZE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "ERIS resource lifecycle and audit trail"

export default function Image() {
  return caseStudyOgImage({
    eyebrow: "CASE STUDY — INTERNAL OPERATIONS",
    title: "ERIS",
    subtitle: "Know where every resource is. Know what happened to it.",
    flow: ["AVAILABLE", "RESERVED", "DISPATCHED", "RETURNING", "AUDITED"],
  })
}
