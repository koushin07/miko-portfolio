import type { Metadata } from "next"

const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mikocanares.com"

export const siteConfig = {
  name: "Miko Canares",
  title: "Miko Canares - QA, Full-Stack & Systems Specialist",
  description:
    "QA engineer, full-stack developer, and systems specialist delivering production-ready builds across web, infrastructure, and automation.",
  url: DEFAULT_SITE_URL,
  locale: "en_US",
  email: "canaresmiko3@gmail.com",
  ogImage: "/modern-coding-workspace-with-multiple-monitors-sho.jpg",
  keywords: [
    "Miko Canares",
    "QA engineer",
    "Full-stack developer",
    "Systems specialist",
    "Automation testing",
    "Laravel developer",
    "ASP.NET Core",
    "Next.js",
    "Angular",
    "Infrastructure engineering",
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
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image ?? siteConfig.ogImage)
  const mergedKeywords = Array.from(new Set([...siteConfig.keywords, ...keywords]))

  return {
    title,
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
    jobTitle: 'QA Engineer, Full-Stack Developer, Systems Specialist',
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
