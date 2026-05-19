"use client"

import { useState } from "react"
import { Mail, CheckCircle2 } from "lucide-react"
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen w-full bg-zinc-950 text-white overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm text-zinc-400">Private beta coming soon</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 text-white">
              Your thoughts,<br />
              beautifully organized.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              TWO is a modern note-taking app for capturing ideas, organizing what matters, and finding clarity every day.
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="flex justify-center mb-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-3">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full h-12 pl-12 pr-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-6 rounded-lg bg-white text-black font-semibold hover:bg-zinc-100 transition-colors disabled:opacity-70 whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-green-900/20 border border-green-800 text-green-400 font-medium">
                <CheckCircle2 className="w-5 h-5" />
                You're on the list!
              </div>
            )}
          </div>

          {/* Subtext */}
          <div className="text-center mb-20">
            <p className="text-sm text-zinc-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No spam. Just product updates.
            </p>
          </div>
        </div>

        {/* App Mockup */}
        <AppMockup />
      </section>
    </main>
  )
}
