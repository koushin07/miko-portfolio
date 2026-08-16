import { caseStudyOgImage, OG_SIZE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Atlas NHD geospatial data pipeline architecture"

export default function Image() {
  return caseStudyOgImage({
    eyebrow: "CASE STUDY — GEOSPATIAL SAAS",
    title: "Atlas NHD",
    subtitle: "From government geodata to a delivered disclosure report.",
    flow: ["DATA", "POSTGIS", "GEOSERVER", "API", "REPORT"],
  })
}
