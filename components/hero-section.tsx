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

      </div>

      {/* Floating App Mockup - Marathon Style */}
      <div className="mt-16 mb-8 w-full max-w-4xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-card shadow-2xl shadow-foreground/8 ring-1 ring-border">
          {/* Mockup Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-pastel-coral" />
              <div className="w-3 h-3 rounded-full bg-pastel-yellow" />
              <div className="w-3 h-3 rounded-full bg-pastel-lime" />
            </div>
          </div>
          
          {/* Mockup Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 border-r border-border p-4 hidden sm:block">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-background text-xs font-medium">T</span>
                </div>
                <span className="font-medium text-sm">TWO</span>
              </div>
              <div className="space-y-1">
                <div className="h-8 rounded-lg bg-muted flex items-center px-3">
                  <span className="text-xs text-foreground">All Notes</span>
                </div>
                <div className="h-8 rounded-lg flex items-center px-3">
                  <span className="text-xs text-muted-foreground">Favorites</span>
                </div>
                <div className="h-8 rounded-lg flex items-center px-3">
                  <span className="text-xs text-muted-foreground">Archive</span>
                </div>
              </div>
            </div>
            
            {/* Main Content - Note Cards Grid */}
            <div className="flex-1 p-6">
              <h3 className="text-lg font-medium mb-4">Notes</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="aspect-[4/3] rounded-xl bg-pastel-yellow p-3">
                  <p className="text-xs font-medium text-foreground/80 leading-snug">The beginning of screenless design</p>
                  <p className="text-[10px] text-foreground/50 mt-auto pt-6">May 21</p>
                </div>
                <div className="aspect-[4/3] rounded-xl bg-pastel-coral p-3">
                  <p className="text-xs font-medium text-foreground/80 leading-snug">13 Things to Give Up</p>
                  <p className="text-[10px] text-foreground/50 mt-auto pt-6">May 25</p>
                </div>
                <div className="aspect-[4/3] rounded-xl bg-pastel-lime p-3 hidden md:block">
                  <p className="text-xs font-medium text-foreground/80 leading-snug">Psychology Principles</p>
                  <p className="text-[10px] text-foreground/50 mt-auto pt-6">June 5</p>
                </div>
                <div className="aspect-[4/3] rounded-xl bg-pastel-purple p-3">
                  <p className="text-xs font-medium text-foreground/80 leading-snug">10 UI & UX Lessons</p>
                  <p className="text-[10px] text-foreground/50 mt-auto pt-6">June 12</p>
                </div>
                <div className="aspect-[4/3] rounded-xl bg-pastel-cyan p-3">
                  <p className="text-xs font-medium text-foreground/80 leading-snug">52 Research Terms</p>
                  <p className="text-[10px] text-foreground/50 mt-auto pt-6">June 18</p>
                </div>
                <div className="aspect-[4/3] rounded-xl bg-pastel-yellow p-3 hidden md:block">
                  <p className="text-xs font-medium text-foreground/80 leading-snug">Text fields & Forms</p>
                  <p className="text-[10px] text-foreground/50 mt-auto pt-6">June 22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
