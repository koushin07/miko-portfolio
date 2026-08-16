/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old case-study URLs → new /case-studies structure (SEO plan: permanent redirects)
      { source: "/case-study", destination: "/case-studies/atlas-nhd", permanent: true },
      { source: "/case-study/readmindme", destination: "/case-studies/readmindme", permanent: true },
      { source: "/case-study/eris", destination: "/case-studies/eris", permanent: true },
      { source: "/case-study/ace", destination: "/case-studies/ace", permanent: true },
      // The automation experience lives at /automation; keep the case-studies URL pattern usable
      { source: "/case-studies/automation", destination: "/automation", permanent: true },
    ]
  },
}

export default nextConfig
