import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { buildMetadata, getArticleJsonLd } from "@/lib/seo"

const publishedAt = "2025-11-28"
const modifiedAt = "2025-11-28"
const articleTitle = "Modern Testing Essentials"
const articleDescription = "How to shape a modern testing strategy that keeps releases stable and fast."

export const metadata = buildMetadata({
  title: articleTitle,
  description: articleDescription,
  path: "/blog/modern-testing-essentials",
  type: "article",
  image: "/testing-automation-dashboard-with-green-checkmarks.jpg",
  publishedTime: publishedAt,
  modifiedTime: modifiedAt,
  tags: ["Testing", "QA", "Automation"],
})

export default function ModernTestingEssentialsPage() {
  const articleJsonLd = getArticleJsonLd({
    title: articleTitle,
    description: articleDescription,
    path: "/blog/modern-testing-essentials",
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    image: "/testing-automation-dashboard-with-green-checkmarks.jpg",
    tags: ["Testing", "QA", "Automation"],
  })

  return (
    <main className="min-h-screen bg-hero-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Navigation />

      {/* Back Button */}
      <section className="pt-[100px] pb-8">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <span className="text-[#1e308e] text-sm-custom font-medium">QA & Testing</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-h1 text-white mb-6">Modern Testing Essentials</h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex items-center gap-6 text-white/60 text-base-custom mb-12">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                Nov 28, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                8 min read
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-12">
              <img
                src="/testing-automation-dashboard-with-green-checkmarks.jpg"
                alt="Modern Testing Essentials"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <FadeIn delay={0.4}>
            <article className="prose prose-invert max-w-none">
              <div className="text-white/70 space-y-6">
                <div>
                  <p className="text-lg leading-relaxed">
                    Testing is no longer optional in modern web development. With the rise of complex single-page applications and microservices architecture, having a solid testing strategy is crucial for delivering reliable, maintainable software.
                  </p>
                </div>

                <h2 className="text-h3 text-white mt-12 mb-4">Why Testing Matters Now More Than Ever</h2>
                <p className="text-base-custom leading-relaxed">
                  The software landscape has changed dramatically. Applications are more complex, user expectations are higher, and the cost of bugs has increased exponentially. A single production incident can damage your reputation and cost thousands in lost revenue.
                </p>
                <p className="text-base-custom leading-relaxed">
                  Modern testing isn't just about catching bugs—it's about building confidence in your codebase and enabling teams to move faster without sacrificing quality.
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">The Testing Pyramid: A Proven Approach</h2>
                <p className="text-base-custom leading-relaxed">
                  The testing pyramid suggests a balanced approach to testing:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base-custom">
                  <li><strong className="text-white">Unit Tests (Base)</strong> - Fast, isolated tests for individual functions and components. Aim for high coverage here.</li>
                  <li><strong className="text-white">Integration Tests (Middle)</strong> - Test how different parts of your system work together. Database queries, API calls, etc.</li>
                  <li><strong className="text-white">End-to-End Tests (Top)</strong> - Test complete user workflows. These are slower but catch real-world issues.</li>
                </ul>

                <h2 className="text-h3 text-white mt-12 mb-4">Essential Testing Tools & Practices</h2>

                <h3 className="text-xl text-white/90 mt-8 mb-3">1. Unit Testing Framework</h3>
                <p className="text-base-custom leading-relaxed">
                  Choose a solid unit testing framework for your language. Jest for JavaScript, PHPUnit for PHP, JUnit for Java. Write tests as you write code, not as an afterthought.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">2. Integration Testing</h3>
                <p className="text-base-custom leading-relaxed">
                  Test your API endpoints, database interactions, and service integrations. Tools like Postman and REST Assured are invaluable for testing APIs without a UI.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">3. End-to-End Testing</h3>
                <p className="text-base-custom leading-relaxed">
                  Use frameworks like Cypress, Playwright, or Selenium for browser automation. Focus on critical user journeys—don't try to test everything at this level.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">4. Continuous Integration</h3>
                <p className="text-base-custom leading-relaxed">
                  Automate your test suite to run on every commit. This catches issues early and prevents broken code from reaching production. GitHub Actions, GitLab CI, and Jenkins are popular choices.
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">Best Practices for Effective Testing</h2>

                <h3 className="text-xl text-white/90 mt-8 mb-3">Write Testable Code</h3>
                <p className="text-base-custom leading-relaxed">
                  Code that's easy to test is usually good code. Use dependency injection, avoid tight coupling, and keep functions focused on a single responsibility.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">Test Behavior, Not Implementation</h3>
                <p className="text-base-custom leading-relaxed">
                  Focus on what your code does, not how it does it. This makes tests more resilient to refactoring and internal implementation changes.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">Keep Tests Fast</h3>
                <p className="text-base-custom leading-relaxed">
                  Slow tests discourage frequent running. Use mocks and stubs for external dependencies. Aim for unit tests that run in milliseconds, not seconds.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">Maintain Test Code Quality</h3>
                <p className="text-base-custom leading-relaxed">
                  Your test code deserves as much care as your production code. Use clear naming, avoid duplication, and refactor tests when needed.
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">Measuring Test Effectiveness</h2>
                <p className="text-base-custom leading-relaxed">
                  Code coverage is a useful metric, but it's not the whole story. A test can cover 100% of your code and still miss critical bugs if it doesn't test the right things.
                </p>
                <p className="text-base-custom leading-relaxed">
                  Focus on:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base-custom">
                  <li>Critical path coverage - Test the features your users rely on most</li>
                  <li>Error handling - Make sure failures are handled gracefully</li>
                  <li>Edge cases - Test boundary conditions and unusual inputs</li>
                  <li>Integration points - Focus on where systems interact</li>
                </ul>

                <h2 className="text-h3 text-white mt-12 mb-4">The Bottom Line</h2>
                <p className="text-base-custom leading-relaxed">
                  Modern testing isn't a luxury—it's a necessity. By implementing a solid testing strategy with a mix of unit, integration, and end-to-end tests, you'll catch bugs earlier, refactor with confidence, and deliver more reliable software.
                </p>
                <p className="text-base-custom leading-relaxed">
                  Start small, automate your testing pipeline, and continuously improve. Your future self (and your users) will thank you.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.5} className="mt-16">
            <div className="bg-[#1a2444] rounded-2xl p-8 text-center">
              <h3 className="text-h4 text-white mb-3">Interested in improving your testing strategy?</h3>
              <p className="text-white/60 mb-6">Let's discuss how to implement a robust testing framework for your project.</p>
              <Link
                href="/about#contact"
                className="inline-block px-8 py-4 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover transition-colors font-medium"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
