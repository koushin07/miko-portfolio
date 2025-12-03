import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/blog",
    "/blog/solid-principles-guide",
    "/blog/modern-testing-essentials",
    "/blog/vibe-coder-impact",
    "/full-stack",
    "/qa",
    "/system",
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
  }))
}
