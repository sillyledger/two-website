"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-zinc-950 font-bold text-sm">J</span>
          </div>
          <span className="text-white font-semibold">John</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-zinc-400 hover:text-white transition">Features</a>
          <a href="#" className="text-zinc-400 hover:text-white transition">Pricing</a>
          <a href="#" className="text-zinc-400 hover:text-white transition">About</a>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button className="px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-100 transition">
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-zinc-400 hover:text-white transition">Features</a>
            <a href="#" className="block text-zinc-400 hover:text-white transition">Pricing</a>
            <a href="#" className="block text-zinc-400 hover:text-white transition">About</a>
            <button className="w-full px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-100 transition">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
