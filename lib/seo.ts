import type { Metadata } from "next"

// NOTE: mikocanares.com belongs to a different person (a consultant with a similar
// name) — do not use it here. Production sets NEXT_PUBLIC_SITE_URL; this fallback
// keeps local and preview builds pointing at the real deployment.
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ikoy.vercel.app"

export const siteConfig = {
  name: "Miko Cañares",
  title: "Miko Cañares — Full-Stack Developer for AI, SaaS & Automation",
  description:
    "I build production-ready web applications, AI-powered systems, and business automations — connecting the frontend, backend, APIs, databases, and third-party tools into reliable systems.",
  url: DEFAULT_SITE_URL,
  locale: "en_US",
  email: "canaresmiko3@gmail.com",
  ogImage: "/modern-coding-workspace-with-multiple-monitors-sho.jpg",
  keywords: [
    // Both spellings — people search the ASCII form far more often than the ñ.
    "Miko Cañares",
    "Miko Canares",
    "Full-stack developer",
    "AI developer",
    "AI application development",
    "RAG development",
    "Automation engineer",
    "Internal tools developer",
    "SaaS developer",
    "SaaS development",
    "business automation",
    "API integration",
    "Automation pipelines",
    "n8n developer",
    "n8n automation",
    "Python developer",
    "Laravel developer",
    "PostgreSQL",
    "OpenAI",
    "JavaScript",
    "Next.js",
    "Node.js",
    "TypeScript",
    "LegalTech",
    "Wear OS",
    "n8n",
    "Zapier",
    "Make",
    "Stripe integrations",
    "Shopify integrations",
  ],
}

type MetadataOptions = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  type?: "website" | "article"
  image?: string
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
  /** Skip the "| Miko Cañares" template — the title is used exactly as given. */
  absoluteTitle?: boolean
}

export function absoluteUrl(path = ""): string {
  return new URL(path, siteConfig.url).toString()
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image,
  publishedTime,
  modifiedTime,
  tags,
  absoluteTitle = false,
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image ?? siteConfig.ogImage)
  const mergedKeywords = Array.from(new Set([...siteConfig.keywords, ...keywords]))

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [siteConfig.name],
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

type ArticleJsonLdOptions = {
  title: string
  description: string
  path: string
  publishedTime: string
  modifiedTime?: string
  image?: string
  tags?: string[]
}

export function getArticleJsonLd({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  image,
  tags,
}: ArticleJsonLdOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(path),
    },
    headline: title,
    description,
    image: image ? absoluteUrl(image) : absoluteUrl(siteConfig.ogImage),
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      email: `mailto:${siteConfig.email}`,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    keywords: tags,
  }
}

type BlogJsonLdOptions = {
  title: string
  description: string
  path: string
  posts: Array<{
    title: string
    path: string
    publishedTime: string
  }>
}

export function getBlogListingJsonLd({ title, description, path, posts }: BlogJsonLdOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: title,
    description,
    url: absoluteUrl(path),
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: absoluteUrl(post.path),
      datePublished: post.publishedTime,
    })),
  }
}

type PersonJsonLdOptions = {
  sameAs?: string[]
}

export function getPersonJsonLd({ sameAs = [] }: PersonJsonLdOptions = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    email: `mailto:${siteConfig.email}`,
    url: siteConfig.url,
    jobTitle: 'Full-Stack Developer',
    sameAs,
  }
}

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.url,
  }
}

type BreadcrumbItem = { name: string; path: string }

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function getCaseStudyJsonLd({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    headline: title,
    description,
    url: absoluteUrl(path),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: "en",
  }
}

export function getServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: name,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
  }
}

export function getCollectionJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string
  description: string
  path: string
  items: { name: string; path: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  }
}
