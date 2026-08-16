import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/work",
    "/projects",
    "/services",
    "/services/full-stack-development",
    "/services/ai-rag-development",
    "/services/business-automation",
    "/services/api-integrations",
    "/automation",
    "/case-studies/atlas-nhd",
    "/case-studies/readmindme",
    "/case-studies/eris",
    "/case-studies/ace",
    "/contact",
    "/blog",
    "/blog/solid-principles-guide",
    "/blog/modern-testing-essentials",
    "/blog/vibe-coder-impact",
    "/qa",
    "/system",
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
  }))
}
