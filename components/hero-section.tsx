"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Navigation } from "./navigation"
import { AppMockup } from "./app-mockup"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen w-full bg-white text-stone-900 overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section id="waitlist" className="px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-100 border border-stone-200 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-stone-500">Private beta coming soon</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-none mb-6 text-stone-950">
            Your thoughts,<br />
            <span className="italic text-stone-400">beautifully</span> organized.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
            TWO is a modern note-taking app for capturing ideas, organizing what matters, and finding clarity every day.
          </p>

          {/* Waitlist Form */}
          <div className="flex justify-center mb-4">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-11 px-4 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 px-5 rounded-xl bg-stone-950 text-white text-sm font-medium hover:bg-stone-800 transition-colors disabled:opacity-60 whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" />
                You're on the list!
              </div>
            )}
          </div>

          {/* Hint */}
          <p className="text-xs text-stone-400 flex items-center justify-center gap-1.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No spam. Just product updates.
          </p>
        </div>

        {/* App Mockup */}
        <div className="mt-20">
          <AppMockup />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone-50 border-t border-stone-200 px-6 py-24 text-center">
        <h2 className="font-serif font-normal text-4xl sm:text-5xl tracking-tight text-stone-950 mb-4">
          Ready to think more clearly?
        </h2>
        <p className="text-stone-500 text-base mb-8">
          Join hundreds of people already on the waitlist.
        </p>
        <form className="flex gap-2 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-11 px-4 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition text-sm"
          />
          <button
            type="submit"
            className="h-11 px-5 rounded-xl bg-stone-950 text-white text-sm font-medium hover:bg-stone-800 transition-colors whitespace-nowrap"
          >
            Join
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-stone-950 rounded-md flex items-center justify-center text-white font-serif text-xs">
            T
          </div>
          <span className="text-sm text-stone-400 font-medium">TWO</span>
        </div>
        <span className="text-xs text-stone-400">© 2026 TWO. All rights reserved.</span>
        <span className="text-xs text-stone-400">Made with care.</span>
      </footer>
    </main>
  )
}
