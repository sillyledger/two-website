"use client"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [downloadOpen, setDownloadOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md h-14 flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center no-underline">
          <img src="/logo.png" alt="TWO" className="h-20 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">
            Product
          </a>
          <a href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">
            Resources
          </a>
          <a href="https://app.two.so" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">
            Web App
          </a>

          {/* Download dropdown */}
          <div className="relative">
            <button
              onClick={() => setDownloadOpen(!downloadOpen)}
              onBlur={() => setTimeout(() => setDownloadOpen(false), 150)}
              className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium"
            >
              Download
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${downloadOpen ? "rotate-180" : ""}`} />
            </button>
            {downloadOpen && (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border border-stone-200 rounded-xl shadow-lg p-2 w-48">
                <div className="flex items-center justify-between px-3 py-2.5 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-stone-900">Mac App</div>
                    <div className="text-xs text-stone-400">Desktop</div>
                  </div>
                  <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">Soon</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2.5 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-stone-900">iPad App</div>
                    <div className="text-xs text-stone-400">iPadOS</div>
                  </div>
                  <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">Soon</span>
                </div>
              </div>
            )}
          </div>

          <a href="/#pricing" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">
            Pricing
          </a>
          <a href="/roadmap" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">
            Roadmap
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.two.so/login" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">
            Log in
          </a>
          <a href="https://app.two.so/signup" className="inline-flex items-center h-8 px-4 bg-stone-950 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors no-underline">
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white border-b border-stone-200 md:hidden">
          <div className="px-6 py-5 flex flex-col gap-4">
            <a href="/#features" className="text-sm text-stone-500 hover:text-stone-900 font-medium">Product</a>
            <a href="#" className="text-sm text-stone-500 hover:text-stone-900 font-medium">Resources</a>
            <a href="https://app.two.so" className="text-sm text-stone-500 hover:text-stone-900 font-medium">Web App</a>
            <div className="text-sm text-stone-500 font-medium">
              Download
              <div className="mt-2 ml-3 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-stone-700">Mac App</span>
                  <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">Soon</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-700">iPad App</span>
                  <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">Soon</span>
                </div>
              </div>
            </div>
            <a href="/#pricing" className="text-sm text-stone-500 hover:text-stone-900 font-medium">Pricing</a>
            <a href="/roadmap" className="text-sm text-stone-500 hover:text-stone-900 font-medium">Roadmap</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-stone-100">
              <a href="https://app.two.so/login" className="text-sm text-stone-500 hover:text-stone-900 font-medium">Log in</a>
              <a href="https://app.two.so/signup" className="inline-flex items-center justify-center h-9 px-4 bg-stone-950 text-white text-sm font-medium rounded-lg">Sign up</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
