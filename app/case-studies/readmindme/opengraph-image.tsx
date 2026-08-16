import { caseStudyOgImage, OG_SIZE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "ReadMindMe RAG knowledge retrieval architecture"

export default function Image() {
  return caseStudyOgImage({
    eyebrow: "CASE STUDY — AI / RAG PLATFORM",
    title: "ReadMindMe",
    subtitle: "An AI system that answers from a knowledge base.",
    flow: ["QUESTION", "EMBEDDING", "VECTOR SEARCH", "CONTEXT", "ANSWER"],
  })
}
