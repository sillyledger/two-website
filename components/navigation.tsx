"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md h-14 flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-7 h-7 bg-stone-950 rounded-lg flex items-center justify-center text-white text-sm font-normal">T</div>
          <span className="text-stone-950 font-semibold text-sm tracking-tight">TWO</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">Features</a>
          <a href="#pricing" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">Pricing</a>
          <a href="#about" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium no-underline">About</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#waitlist" className="inline-flex items-center h-8 px-4 bg-stone-950 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors no-underline">Sign Up</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-700" aria-label="Toggle menu">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white border-b border-stone-200 md:hidden">
          <div className="px-6 py-5 flex flex-col gap-4">
            <a href="#features" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium">Pricing</a>
            <a href="#about" className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium">About</a>
            <a href="#waitlist" className="inline-flex items-center justify-center h-9 px-4 bg-stone-950 text-white text-sm font-medium rounded-lg">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  )
}
