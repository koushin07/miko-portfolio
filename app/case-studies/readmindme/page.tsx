import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { buildMetadata, getCaseStudyJsonLd, getBreadcrumbJsonLd } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"
import { RagStage } from "@/components/stages/rag-stage"
import { RetrievalComparison } from "@/components/case-studies/readmindme-visuals"
import { CaseStudyNav } from "@/components/work/case-study-nav"
import { CaseStudyProgressNav } from "@/components/work/case-study-progress-nav"

const SECTIONS = [
  { id: "problem", label: "PROBLEM" },
  { id: "comparison", label: "COMPARISON" },
  { id: "how-it-works", label: "HOW IT WORKS" },
  { id: "capabilities", label: "CAPABILITIES" },
  { id: "under-the-hood", label: "UNDER THE HOOD" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "outcome", label: "TECHNOLOGIES" },
]

export const metadata = buildMetadata({
  title: "ReadMindMe Case Study — AI RAG Platform with OpenAI & pgvector",
  absoluteTitle: true,
  description:
    "Explore a RAG platform using OpenAI, embeddings, pgvector, PostgreSQL, and retrieval-based context to generate grounded answers from a knowledge base.",
  path: "/case-studies/readmindme",
  keywords: [
    "RAG application",
    "RAG development",
    "AI knowledge base",
    "OpenAI RAG",
    "pgvector RAG",
    "vector search",
    "AI knowledge assistant",
    "FastAPI",
  ],
})

const capabilities = [
  "RAG",
  "Embeddings",
  "Vector search",
  "pgvector",
  "OpenAI",
  "Structured outputs",
  "Conversation memory",
  "Authentication",
  "Moderation",
  "Backend services",
  "Database architecture",
]

const underTheHood = [
  { value: "14", label: "pipeline stages" },
  { value: "36,819", label: "verse embeddings" },
  { value: "603K", label: "cross-references" },
  { value: "24", label: "read-only bible tables" },
  { value: "10+", label: "enrichment datasets" },
  { value: "20", label: "API routers" },
  { value: "25", label: "backend services" },
  { value: "33", label: "Alembic migrations" },
  { value: "~40", label: "database tables" },
  { value: "12", label: "Docker Compose services" },
  { value: "~3,400", label: "LOC AI service" },
]

const decisions = [
  {
    title: "Retrieval before generation",
    business: "The AI searches the application's own knowledge base before it answers, so responses are grounded in real content instead of guesses.",
    technical: "14-stage retrieval pipeline with pgvector similarity search across 36,819 embeddings.",
  },
  {
    title: "Context worth retrieving",
    business: "Answers draw on study data a general model doesn't have — original-language detail and how passages relate to each other.",
    technical: "Parallel context retrieval across 10+ enrichment datasets, including Greek/Hebrew morphology and 603K cross-references over 24 read-only bible tables.",
  },
  {
    title: "Answers an app can render",
    business: "Responses come back as structured data — the interface shows verses, references, and explanations consistently instead of parsing free text.",
    technical: "OpenAI structured outputs with conversation memory persisted per user.",
  },
  {
    title: "Safe accounts, safe content",
    business: "Sign-in is protected and user content is screened before the AI works with it.",
    technical: "Google OAuth with TOTP two-factor authentication and a moderation step in the pipeline.",
  },
  {
    title: "Operable in production",
    business: "The whole platform starts from one configuration, and background work runs on a schedule instead of by hand.",
    technical: "Docker Compose orchestrating 12 services; APScheduler for scheduled jobs; Redis caching; 33 Alembic migrations across ~40 tables.",
  },
]

const technologies = [
  "FastAPI",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "OpenAI GPT-4o",
  "Google OAuth",
  "TOTP 2FA",
  "APScheduler",
  "Docker Compose",
  "Alembic",
]

const jsonLd = [
  getCaseStudyJsonLd({
    title: 'ReadMindMe Case Study — AI RAG Platform with OpenAI & pgvector',
    description: 'Explore a RAG platform using OpenAI, embeddings, pgvector, PostgreSQL, and retrieval-based context to generate grounded answers from a knowledge base.',
    path: '/case-studies/readmindme',
  }),
  getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: 'ReadMindMe', path: '/case-studies/readmindme' },
  ]),
]

export default function ReadMindMeCaseStudy() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <CaseStudyProgressNav index={2} total={4} name="READMINDME" sections={SECTIONS} />

      {/* 01 Problem → 02 What I built */}
      <section id="problem" className="relative scroll-mt-32 overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <p className="text-node text-muted-foreground">CASE STUDY — AI / RAG PLATFORM</p>
          <p className="mt-6 font-mono text-3xl tracking-tight text-foreground md:text-5xl">READMINDME</p>
          <h1 className="text-lg-custom mt-6 max-w-2xl font-normal text-muted-foreground">
            An AI system that answers from a knowledge base — a Bible-study platform whose assistant answers from
            scripture and study data, not from thin air.
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium text-foreground/90">
            The difficult part wasn&apos;t generating an answer. It was finding the right information before
            generating one.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="panel space-y-3 p-6">
              <p className="text-node text-amber">01 — PROBLEM</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Generic AI assistants hallucinate because they don't know the application's knowledge base. For a study
                tool, a made-up verse or misattributed reference isn't a quirk — it breaks the product's entire
                promise.
              </p>
            </div>
            <div className="panel space-y-3 p-6">
              <p className="text-node text-amber">02 — WHAT I BUILT</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A retrieval-augmented platform that searches its own knowledge base first, then generates a grounded,
                structured answer. Solo build: architecture, AI pipeline, backend, data modeling, DevOps, and
                security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standard vs retrieval comparison */}
      <section id="comparison" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="WHY RETRIEVAL"
            title="Not simply a prompt to an LLM."
            lede="A standard approach guesses from what the model already knows. ReadMindMe searches first."
          />
          <div className="mt-12 max-w-3xl">
            <RetrievalComparison />
          </div>
        </div>
      </section>

      {/* 03 How it works — RAG visualization */}
      <section id="how-it-works" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="03 — HOW IT WORKS"
            title="Watch a question become a grounded answer."
            lede="Every answer takes this path. No retrieval, no response."
          />
          <div className="mt-12 max-w-3xl">
            <RagStage />
          </div>
        </div>
      </section>

      {/* 04 Key capabilities */}
      <section id="capabilities" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader label="04 — KEY CAPABILITIES" title="What the system demonstrates." />
          <div className="mt-10 flex max-w-3xl flex-wrap gap-2.5">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-md border bg-card px-3 py-1.5 font-mono text-xs text-foreground/85"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Under the hood */}
      <section id="under-the-hood" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="05 — UNDER THE HOOD"
            title="The numbers behind the pipeline."
            lede="For the technically curious — the implementation footprint of a production RAG system."
          />
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border/60 sm:grid-cols-3 lg:grid-cols-4">
            {underTheHood.map((fact) => (
              <div key={fact.label} className="bg-card px-5 py-4">
                <dt className="text-node text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1 font-mono text-xl text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 06 Engineering decisions */}
      <section id="engineering" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader label="06 — ENGINEERING DECISIONS" title="Business value first, implementation underneath." />
          <div className="mt-10 space-y-5">
            {decisions.map((decision) => (
              <div key={decision.title} className="panel p-6">
                <p className="text-h5 text-foreground">{decision.title}</p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{decision.business}</p>
                <p className="text-node mt-4 border-t border-border/60 pt-3 text-muted-foreground/80">
                  TECHNICAL: <span className="normal-case">{decision.technical}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Technologies + 08 CTA */}
      <section id="outcome" className="scroll-mt-32 border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader label="07 — TECHNOLOGIES" title="The stack." />
          <div className="mt-10 flex max-w-3xl flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-md border bg-card px-3 py-1.5 font-mono text-xs text-foreground/85">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center lg:px-8 lg:py-28">
          <h2 className="text-h2 text-balance text-foreground">Exploring how AI can work with your own data?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            RAG, embeddings, structured outputs — I can help you figure out what your product actually needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-8">
          <p className="text-node text-muted-foreground/60">RELATED SERVICES</p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            <Link href='/services/ai-rag-development' className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              AI & RAG development services →
            </Link>
          </div>
        </div>
      </section>

      <CaseStudyNav current="readmindme" />
      <Footer />
    </main>
  )
}
