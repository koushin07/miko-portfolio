"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const PROJECT_TYPES = [
  "SaaS",
  "AI Application",
  "Automation",
  "API Integration",
  "Existing Application",
  "Bug Fix / Improvement",
  "QA / Testing",
  "Other",
]

const inputClasses =
  "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [projectType, setProjectType] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    building: "",
    help: "",
    budget: "",
    currentSite: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, projectType: projectType || undefined }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        setStatus("error")
        setErrorMessage(
          res.status === 503
            ? "The form is temporarily unavailable — email me directly at canaresmiko3@gmail.com."
            : data?.error || "Could not send your message. Please try again.",
        )
        return
      }
      setStatus("success")
    } catch {
      setStatus("error")
      setErrorMessage("Could not send your message. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="panel space-y-4 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/15">
          <Check className="h-6 w-6 text-green-400" />
        </div>
        <h3 className="text-h4 text-foreground">Message sent.</h3>
        <p className="text-sm text-muted-foreground">
          Thanks{form.name ? `, ${form.name}` : ""} — I'll reply within 24 hours with next steps or a few clarifying
          questions.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="contact-name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-foreground">What kind of project is it?</legend>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              aria-pressed={projectType === type}
              onClick={() => setProjectType(projectType === type ? "" : type)}
              className={cn(
                "rounded-md border px-3 py-1.5 font-mono text-xs transition-colors duration-200",
                projectType === type
                  ? "border-primary/70 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <label htmlFor="contact-building" className="block text-sm font-medium text-foreground">
          What are you building?
        </label>
        <textarea
          id="contact-building"
          required
          rows={4}
          value={form.building}
          onChange={(e) => setForm({ ...form, building: e.target.value })}
          className={inputClasses}
          placeholder="The product, tool, or process — in your own words"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-help" className="block text-sm font-medium text-foreground">
          What do you need help with?
        </label>
        <textarea
          id="contact-help"
          rows={3}
          value={form.help}
          onChange={(e) => setForm({ ...form, help: e.target.value })}
          className={inputClasses}
          placeholder="Build it from scratch, add a feature, fix something, automate a process…"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-budget" className="block text-sm font-medium text-foreground">
            Budget / timeline <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="contact-budget"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className={inputClasses}
            placeholder="e.g. $5k, next quarter"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-site" className="block text-sm font-medium text-foreground">
            Current system / website <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="contact-site"
            value={form.currentSite}
            onChange={(e) => setForm({ ...form, currentSite: e.target.value })}
            className={inputClasses}
            placeholder="Link or short description"
          />
        </div>
      </div>

      {status === "error" ? (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive-foreground">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  )
}
