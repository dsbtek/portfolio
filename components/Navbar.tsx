'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#github', label: 'GitHub' },
    { href: '/#blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <nav className="w-full border-b border-gray-800 sticky top-0 bg-terminal/95 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-mono text-lg text-accent hover:text-accent/80 transition-colors">
            Muhammad Salihu
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-gray-300 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="font-mono text-sm bg-accent text-terminal px-4 py-2 rounded hover:bg-accent/80 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-accent focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-800 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-mono text-sm text-gray-300 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="block font-mono text-sm bg-accent text-terminal px-4 py-2 rounded hover:bg-accent/80 transition-colors text-center"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
