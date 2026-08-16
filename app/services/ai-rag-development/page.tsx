import { buildMetadata } from "@/lib/seo"
import { ServicePage } from "@/components/services/service-page"

export const metadata = buildMetadata({
  title: "AI & RAG Development | OpenAI, pgvector & Knowledge-Based AI",
  absoluteTitle: true,
  description:
    "Build AI applications using OpenAI, embeddings, vector search, pgvector, structured outputs, and RAG pipelines for grounded, knowledge-based answers.",
  path: "/services/ai-rag-development",
  keywords: [
    "AI application development",
    "RAG development",
    "OpenAI integration",
    "pgvector",
    "vector search",
    "embeddings",
    "AI knowledge base",
    "AI chatbot development",
  ],
})

export default function AiRagServicePage() {
  return (
    <ServicePage
      slug="ai-rag-development"
      serviceName="AI & RAG Development"
      eyebrow="SERVICES / AI & RAG DEVELOPMENT"
      h1="AI systems that answer from your knowledge."
      lede="Build AI applications using OpenAI, embeddings, vector search, pgvector, structured outputs, and RAG pipelines for grounded, knowledge-based answers."
      covers={[
        "RAG pipelines that search your knowledge base before the model generates a word.",
        "OpenAI integration with structured outputs your application can render reliably.",
        "Vector search with pgvector — embeddings, similarity retrieval, and hybrid fallbacks.",
        "Content moderation and conversation memory built into the pipeline.",
        "AI extraction that turns raw documents into structured, validated records.",
      ]}
      flowLabel="RETRIEVAL FIRST, GENERATION SECOND"
      flow={[
        { id: "question", label: "QUESTION" },
        { id: "embedding", label: "EMBEDDING" },
        { id: "search", label: "VECTOR SEARCH", sublabel: "pgvector" },
        { id: "knowledge", label: "RELEVANT KNOWLEDGE" },
        { id: "context", label: "CONTEXT" },
        { id: "openai", label: "OPENAI" },
        { id: "answer", label: "STRUCTURED ANSWER" },
      ]}
      proof={[
        {
          label: "Explore the ReadMindMe RAG platform",
          href: "/case-studies/readmindme",
          blurb: "A full RAG system — pgvector search across 36,819 embeddings, GPT-4o structured outputs, and a 14-stage retrieval pipeline.",
        },
        {
          label: "See AI extraction inside the automation platform",
          href: "/automation",
          blurb: "Gemini structured extraction turning raw legal documents into validated records inside a 42-workflow n8n backbone.",
        },
        {
          label: "Explore all AI and RAG projects",
          href: "/projects",
          blurb: "The full project explorer, filterable by AI — inspect the systems behind the claims.",
        },
      ]}
      tech="OPENAI · GEMINI · EMBEDDINGS · PGVECTOR · POSTGRESQL · FASTAPI"
      ctaHeading="Want AI grounded in your data?"
      ctaLine="RAG, embeddings, structured outputs — I'll help you figure out what your product actually needs."
    />
  )
}
