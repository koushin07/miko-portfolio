import type React from "react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Full-Stack Portfolio",
  description:
    "Full-stack projects delivering booking platforms, commerce builds, and integrated systems engineered by Miko Canares.",
  path: "/full-stack",
  keywords: ["Full-stack projects", "Laravel builds", "Next.js work"],
})

export default function FullStackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
