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
    <main className="min-h-screen flex flex-col px-6 py-8">
      {/* Top Left Logo */}
      <div className="mb-16">
        <span className="text-2xl font-semibold tracking-tight text-foreground">TWO</span>
      </div>

      <div className="max-w-3xl mx-auto text-center flex-1 flex flex-col justify-center">

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
        <div className="mt-16 flex items-center justify-center gap-4 opacity-60">
          <div className="w-3 h-3 rounded-full bg-pastel-yellow" />
          <div className="w-3 h-3 rounded-full bg-pastel-coral" />
          <div className="w-3 h-3 rounded-full bg-pastel-lime" />
          <div className="w-3 h-3 rounded-full bg-pastel-purple" />
          <div className="w-3 h-3 rounded-full bg-pastel-cyan" />
        </div>
      </div>

      {/* App Mockup Screenshot */}
      <div className="mt-16 mb-8 w-full max-w-5xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 ring-1 ring-border">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-16%20at%203.47.03%E2%80%AFAM-NXMKRdRPwPwiD5eCoMHGMhVQcD2wsE.png"
            alt="TWO app interface showing colorful note cards"
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  )
}
