import { caseStudyOgImage, OG_SIZE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "ACE clinical placement booking and CRM workflow"

export default function Image() {
  return caseStudyOgImage({
    eyebrow: "CASE STUDY — SAAS / CRM / BOOKING",
    title: "ACE",
    subtitle: "A placement workflow that keeps bookings, documents, and status in sync.",
    flow: ["SEARCH", "BOOKING", "CRM", "MILESTONE", "DOCUMENTS"],
  })
}
