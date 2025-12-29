import type React from "react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About",
  description:
    "How Miko Canares approaches full-stack development, automation, and reliability across projects.",
  path: "/about",
  keywords: ["About Miko Canares", "Full-stack experience", "Automation approach"],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
