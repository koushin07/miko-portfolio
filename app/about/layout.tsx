import type React from "react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About",
  description:
    "Background, experience, and capabilities of QA engineer and full-stack developer Miko Canares.",
  path: "/about",
  keywords: ["About Miko Canares", "QA background", "Full-stack experience"],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
