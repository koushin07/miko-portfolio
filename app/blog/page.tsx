import { FadeIn } from "@/components/ui/motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { buildMetadata, getBlogListingJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on QA, engineering workflows, and full-stack delivery from Miko Canares.",
  path: "/blog",
  keywords: ["QA blog", "Full-stack articles", "Engineering insights"],
})

const blogPosts = [
  {
    id: 1,
    category: "Full-Stack Development",
    title: "The SOLID Principles: Building Better Code",
    description: "Five design principles that help you write cleaner, more maintainable code.",
    excerpt:
      "Every developer has encountered it: code that's so convoluted it feels impossible to modify. Functions that do too many things, classes tightly coupled to concrete implementations, or massive files that seem to do everything. This is where SOLID principles come in...",
    image: "/modern-coding-workspace-with-multiple-monitors-sho.jpg",
    date: "Dec 1, 2025",
    publishedAt: "2025-12-01",
    readTime: "12 min read",
    featured: true,
    href: "/blog/solid-principles-guide",
  },
  {
    id: 2,
    category: "QA & Testing",
    title: "Modern Testing Essentials",
    description: "Actionable steps for reliable, efficient web app testing.",
    excerpt:
      "Testing is no longer optional in modern web development. With the rise of complex single-page applications and microservices architecture, having a solid testing strategy is crucial for delivering reliable, maintainable software...",
    image: "/testing-automation-dashboard-with-green-checkmarks.jpg",
    date: "Nov 28, 2025",
    publishedAt: "2025-11-28",
    readTime: "8 min read",
    featured: true,
    href: "/blog/modern-testing-essentials",
  },
  {
    id: 3,
    category: "Team & Development",
    title: "The Effect of Vibe Coder in a Team",
    description: "How intuitive coding without understanding creates cascading bugs and debugging cycles.",
    excerpt:
      "Every development team has encountered them: developers who code by intuition, making changes based on a vibe rather than understanding the system architecture. While the spirit of innovation is admirable, vibe coding creates a hidden cost that compounds over time...",
    image: "/colorful-ui-design-mockups-and-mobile-app-interfac.jpg",
    date: "Dec 1, 2025",
    publishedAt: "2025-12-01",
    readTime: "10 min read",
    featured: false,
    href: "/blog/vibe-coder-impact",
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)
  const blogJsonLd = getBlogListingJsonLd({
    title: "Insights & Ideas",
    description: metadata.description ?? "QA and engineering articles",
    path: "/blog",
    posts: blogPosts.map((post) => ({
      title: post.title,
      path: post.href,
      publishedTime: post.publishedAt,
    })),
  })

  return (
    <main className="min-h-screen bg-hero-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-white/60 text-eyebrow uppercase tracking-wider mb-4">Blog</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-h0 text-white mb-6">Insights & Ideas</h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/70 text-xl-custom max-w-2xl">
              Fresh perspectives on QA, full-stack development, and systems and infrastructure. Practical insights, workflows, and
              trends for digital creators.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-h3 text-foreground mb-10">Featured Articles</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, i) => (
              <FadeIn key={post.id} delay={0.1 * (i + 1)} direction="up">
                <Link href={post.href}>
                  <article className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                    <div className="overflow-hidden aspect-[16/10]">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[#1e308e] text-sm-custom font-medium">{post.category}</span>
                        <span className="text-muted-foreground text-sm-custom flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                        <span className="text-muted-foreground text-sm-custom flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      </div>
                      <h3 className="text-h4 font-semibold text-foreground mb-3 group-hover:text-accent-primary-hover transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-base-custom line-clamp-3">{post.excerpt}</p>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 md:py-24 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-h3 text-foreground mb-10">All Articles</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.length > 0 ? (
              regularPosts.map((post, i) => (
                <FadeIn key={post.id} delay={0.1 * (i + 1)} direction="up">
                  <Link href={post.href}>
                    <article className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[#1e308e] text-sm-custom font-medium">{post.category}</span>
                          <span className="text-muted-foreground text-xs">{post.readTime}</span>
                        </div>
                        <h3 className="text-h5 font-semibold text-foreground mb-2 group-hover:text-accent-primary-hover transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm-custom line-clamp-2">{post.description}</p>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-base-custom">More articles coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
