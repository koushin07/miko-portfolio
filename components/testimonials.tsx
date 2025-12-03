"use client"

import { useRef, useEffect, useState } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Clear communication and strong QA expertise throughout our project.",
      author: "Jamie Brooks",
      company: "InnoStack",
    },
    {
      quote: "Balanced technical skill with creative UI solutions. Reliable delivery.",
      author: "Morgan Ellis",
      company: "DesignLogic",
    },
    {
      quote: "Consistently thorough and proactive in every phase.",
      author: "Taylor Reed",
      company: "Pathwise",
    },
    {
      quote: "Innovative problem-solver with a focus on quality.",
      author: "Avery Shaw",
      company: "DevPilot",
    },
    {
      quote: "Professional, efficient, and detail-oriented at every step.",
      author: "Jordan Cruz",
      company: "FlowUX",
    },
    {
      quote: "Strong QA and systems & infrastructure skills. Smooth process from start to finish.",
      author: "Casey Lin",
      company: "AppVantage",
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener("scroll", updateScrollButtons)
      updateScrollButtons()
      return () => el.removeEventListener("scroll", updateScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-white min-h-screen flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        {/* Scroll Buttons */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition disabled:opacity-30"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition disabled:opacity-30"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-[calc((100%-1200px)/2+24px)] pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] bg-accent-secondary rounded-2xl p-6">
            <p className="text-foreground font-semibold text-base-custom mb-4">{testimonial.quote}</p>
            <div>
              <p className="font-semibold text-foreground text-sm-custom">{testimonial.author}</p>
              <p className="text-muted-foreground text-tag">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
