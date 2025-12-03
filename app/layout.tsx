import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Manrope, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import AnalyticsListener from "@/components/analytics-listener"
import {
  getPersonJsonLd,
  getWebsiteJsonLd,
  siteConfig,
} from "@/lib/seo"
import { GA_MEASUREMENT_ID } from "@/lib/analytics"
import "./globals.css"

const _manrope = Manrope({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const defaultOgImage = `${siteConfig.url}${siteConfig.ogImage}`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  generator: "Next.js",
  keywords: siteConfig.keywords,
  category: "Technology",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: ["/icon-light-32x32.png", "/icon-dark-32x32.png"],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [
    getPersonJsonLd({ sameAs: [`mailto:${siteConfig.email}`] }),
    getWebsiteJsonLd(),
  ]
  const gaId = GA_MEASUREMENT_ID

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {gaId ? (
          <>
            <Script
              id="ga-loader"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="ga-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                  send_page_view: false
                });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="font-sans antialiased">
        {gaId ? (
          <Suspense fallback={null}>
            <AnalyticsListener />
          </Suspense>
        ) : null}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
