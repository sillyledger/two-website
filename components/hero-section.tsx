"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-foreground rounded-full">
            <span className="text-background font-semibold text-xl">T</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
          Notes that think
          <br />
          with you
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto mb-10 text-pretty">
          A calmer way to capture ideas. Organize thoughts. Build clarity.
        </p>

        {/* Waitlist Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 h-12 px-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-6 rounded-xl bg-foreground text-background font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {isSubmitting ? (
                "Joining..."
              ) : (
                <>
                  Join waitlist
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-pastel-lime text-foreground font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {"You're on the list!"}
          </div>
        )}

        {/* Decorative Pastel Cards */}
        <div className="mt-20 flex items-center justify-center gap-4 opacity-60">
          <div className="w-3 h-3 rounded-full bg-pastel-yellow" />
          <div className="w-3 h-3 rounded-full bg-pastel-coral" />
          <div className="w-3 h-3 rounded-full bg-pastel-lime" />
          <div className="w-3 h-3 rounded-full bg-pastel-purple" />
          <div className="w-3 h-3 rounded-full bg-pastel-cyan" />
        </div>
      </div>
    </main>
  )
}
