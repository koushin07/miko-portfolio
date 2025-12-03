import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { buildMetadata, getArticleJsonLd } from "@/lib/seo"

const publishedAt = "2025-12-01"
const modifiedAt = "2025-12-01"
const articleTitle = "The SOLID Principles: Building Better Code"
const articleDescription = "A practical guide to applying SOLID design principles for maintainable software."

export const metadata = buildMetadata({
  title: articleTitle,
  description: articleDescription,
  path: "/blog/solid-principles-guide",
  type: "article",
  image: "/modern-coding-workspace-with-multiple-monitors-sho.jpg",
  publishedTime: publishedAt,
  modifiedTime: modifiedAt,
  tags: ["SOLID", "Clean code", "Software architecture"],
})

export default function SOLIDPrinciplesPage() {
  const articleJsonLd = getArticleJsonLd({
    title: articleTitle,
    description: articleDescription,
    path: "/blog/solid-principles-guide",
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    image: "/modern-coding-workspace-with-multiple-monitors-sho.jpg",
    tags: ["SOLID", "Software engineering", "Clean code"],
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
              <span className="text-[#1e308e] text-sm-custom font-medium">Full-Stack Development</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-h1 text-white mb-6">The SOLID Principles: Building Better Code</h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex items-center gap-6 text-white/60 text-base-custom mb-12">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                Dec 1, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                12 min read
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-12">
              <img
                src="/modern-coding-workspace-with-multiple-monitors-sho.jpg"
                alt="SOLID Principles"
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
                    Every developer has encountered it—code that's so convoluted it feels impossible to modify. Functions that do too many things, classes tightly coupled to concrete implementations, or massive files that seem to do everything. This is where SOLID principles come in.
                  </p>
                </div>

                <p className="text-base-custom leading-relaxed">
                  SOLID is an acronym for five design principles that help you write cleaner, more maintainable, and more flexible code. Whether you're working on a small project or a large-scale application, these principles will transform how you think about software design.
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">What Are the SOLID Principles?</h2>
                <p className="text-base-custom leading-relaxed">
                  Introduced by Robert C. Martin, SOLID stands for:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base-custom">
                  <li><strong className="text-white">S</strong> - Single Responsibility Principle (SRP)</li>
                  <li><strong className="text-white">O</strong> - Open/Closed Principle (OCP)</li>
                  <li><strong className="text-white">L</strong> - Liskov Substitution Principle (LSP)</li>
                  <li><strong className="text-white">I</strong> - Interface Segregation Principle (ISP)</li>
                  <li><strong className="text-white">D</strong> - Dependency Inversion Principle (DIP)</li>
                </ul>

                <h2 className="text-h3 text-white mt-12 mb-4">1. Single Responsibility Principle (SRP)</h2>
                <p className="text-base-custom leading-relaxed">
                  <strong className="text-white">A class should have only one reason to change.</strong>
                </p>
                <p className="text-base-custom leading-relaxed">
                  This principle states that a class or module should have only a single responsibility or purpose. When a class has multiple responsibilities, changing one aspect of functionality can inadvertently break another.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">Example:</h3>
                <p className="text-base-custom leading-relaxed text-sm bg-[#0a0e1a] p-4 rounded">
                  <span className="text-red-400">Bad:</span> A User class that handles user data, validation, and database operations
                  <br/>
                  <span className="text-green-400">Good:</span> User class for data, UserValidator for validation, UserRepository for database operations
                </p>

                <p className="text-base-custom leading-relaxed">
                  By separating concerns, you make your code easier to test, modify, and reuse. If business validation rules change, you only modify the validator, not the user model.
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">2. Open/Closed Principle (OCP)</h2>
                <p className="text-base-custom leading-relaxed">
                  <strong className="text-white">Classes should be open for extension but closed for modification.</strong>
                </p>
                <p className="text-base-custom leading-relaxed">
                  This principle encourages you to write code that doesn't require changes when new features are added. Instead, you extend functionality through inheritance or composition.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">Example:</h3>
                <p className="text-base-custom leading-relaxed text-sm bg-[#0a0e1a] p-4 rounded">
                  <span className="text-red-400">Bad:</span> A payment processor with a massive switch statement for each payment type
                  <br/>
                  <span className="text-green-400">Good:</span> A PaymentProcessor interface with specific implementations (Stripe, PayPal, etc.)
                </p>

                <p className="text-base-custom leading-relaxed">
                  When you need to add a new payment method, you create a new implementation without touching existing code. This minimizes the risk of introducing bugs.
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">3. Liskov Substitution Principle (LSP)</h2>
                <p className="text-base-custom leading-relaxed">
                  <strong className="text-white">Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.</strong>
                </p>
                <p className="text-base-custom leading-relaxed">
                  This principle ensures that derived classes can be substituted for their base classes without causing errors. In other words, subclasses should honor the contract defined by their parent class.
                </p>
                <h3 className="text-xl text-white/90 mt-8 mb-3">Example:</h3>
                <p className="text-base-custom leading-relaxed text-sm bg-[#0a0e1a] p-4 rounded">
                  <span className="text-red-400">Bad:</span> A Bird base class with a fly() method, but a Penguin subclass that doesn't fly
                  <br/>
                  <span className="text-green-400">Good:</span> Bird base class with move() method, Penguin swims, Eagle flies
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">4. Interface Segregation Principle (ISP)</h2>
                <p className="text-base-custom leading-relaxed">
                  <strong className="text-white">A client should never be forced to depend on interfaces it does not use.</strong>
                </p>
                <p className="text-base-custom leading-relaxed">
                  Instead of having large, monolithic interfaces, create smaller, more focused interfaces. This prevents classes from being burdened with methods they don't need.
                </p>
                <h3 className="text-xl text-white/90 mt-8 mb-3">Example:</h3>
                <p className="text-base-custom leading-relaxed text-sm bg-[#0a0e1a] p-4 rounded">
                  <span className="text-red-400">Bad:</span> An Animal interface with fly(), swim(), and run() methods
                  <br/>
                  <span className="text-green-400">Good:</span> Separate interfaces - Flyer, Swimmer, Runner that classes implement as needed
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">5. Dependency Inversion Principle (DIP)</h2>
                <p className="text-base-custom leading-relaxed">
                  <strong className="text-white">High-level modules should not depend on low-level modules. Both should depend on abstractions.</strong>
                </p>
                <p className="text-base-custom leading-relaxed">
                  Rather than tightly coupling your code to specific implementations, depend on abstractions. This makes your code more flexible and easier to test.
                </p>
                <h3 className="text-xl text-white/90 mt-8 mb-3">Example:</h3>
                <p className="text-base-custom leading-relaxed text-sm bg-[#0a0e1a] p-4 rounded">
                  <span className="text-red-400">Bad:</span> A UserService that directly creates a MySQLDatabase instance
                  <br/>
                  <span className="text-green-400">Good:</span> UserService accepts a Database interface, allowing any database implementation
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">Why SOLID Matters</h2>
                <p className="text-base-custom leading-relaxed">
                  Following SOLID principles provides tangible benefits:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base-custom">
                  <li><strong className="text-white">Maintainability</strong> - Code is easier to understand and modify</li>
                  <li><strong className="text-white">Testability</strong> - Loosely coupled code is easier to unit test</li>
                  <li><strong className="text-white">Scalability</strong> - Systems can grow without becoming unwieldy</li>
                  <li><strong className="text-white">Flexibility</strong> - Adding new features requires minimal changes to existing code</li>
                  <li><strong className="text-white">Reusability</strong> - Well-designed components can be reused across projects</li>
                </ul>

                <h2 className="text-h3 text-white mt-12 mb-4">Practical Tips for Applying SOLID</h2>

                <h3 className="text-xl text-white/90 mt-8 mb-3">1. Start with SRP</h3>
                <p className="text-base-custom leading-relaxed">
                  If you follow nothing else, follow SRP. It's the foundation of good design. Keep classes small and focused.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">2. Use Dependency Injection</h3>
                <p className="text-base-custom leading-relaxed">
                  Instead of creating dependencies inside a class, pass them in. This makes testing easier and promotes loose coupling.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">3. Program to Interfaces, Not Implementations</h3>
                <p className="text-base-custom leading-relaxed">
                  Use interfaces and abstract classes to define contracts. This allows you to swap implementations without changing client code.
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">4. Think Before You Code</h3>
                <p className="text-base-custom leading-relaxed">
                  Don't just start coding. Spend time designing your classes and interfaces. Ask yourself: What is this class's responsibility? Will I need to change it for different reasons?
                </p>

                <h3 className="text-xl text-white/90 mt-8 mb-3">5. Refactor Regularly</h3>
                <p className="text-base-custom leading-relaxed">
                  SOLID principles aren't about getting it perfect the first time. As your code evolves, refactor to maintain these principles.
                </p>

                <h2 className="text-h3 text-white mt-12 mb-4">Common Pitfalls</h2>
                <ul className="list-disc pl-6 space-y-3 text-base-custom">
                  <li><strong className="text-white">Over-engineering</strong> - Don't apply SOLID to trivial code. Use common sense.</li>
                  <li><strong className="text-white">Ignoring Context</strong> - Different projects have different needs. Adapt principles accordingly.</li>
                  <li><strong className="text-white">Forgetting Tests</strong> - SOLID and testing go hand in hand. Write tests as you code.</li>
                </ul>

                <h2 className="text-h3 text-white mt-12 mb-4">The Bottom Line</h2>
                <p className="text-base-custom leading-relaxed">
                  SOLID principles aren't laws carved in stone—they're guidelines that help you write better code. A codebase built on SOLID principles is:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-base-custom">
                  <li>Easier for new developers to understand</li>
                  <li>Faster to modify and extend</li>
                  <li>More resistant to bugs</li>
                  <li>Better suited for long-term maintenance</li>
                </ul>

                <p className="text-base-custom leading-relaxed mt-6">
                  Investing time in understanding and applying these principles now will pay dividends throughout your career. Your future self, your team, and your users will thank you.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.5} className="mt-16">
            <div className="bg-[#1a2444] rounded-2xl p-8 text-center">
              <h3 className="text-h4 text-white mb-3">Ready to refactor your codebase?</h3>
              <p className="text-white/60 mb-6">Let's work together to build scalable, maintainable systems using clean code principles.</p>
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
