"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactTerminal() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' })
      return false
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Invalid email format' })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // Option 1: Using FormSubmit (no backend needed)
      const response = await fetch('https://formsubmit.co/ajax/dsbtek@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Contact',
          message: formData.message,
          _captcha: 'false', // Disable captcha for testing
        }),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '✓ Message sent successfully! I\'ll get back to you soon.',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' })
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '✗ Failed to send message. Please try again or email me directly.',
      })
    }
  }

  const handleClear = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setStatus({ type: 'idle', message: '' })
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> ./send-message.sh
        </h2>
        <p className="text-gray-400 mb-8">
          Get in touch — I&apos;d love to hear from you
        </p>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-gray-300 mb-2">
                  <span className="text-accent">$</span> name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-gray-700 rounded px-4 py-3 text-gray-200 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                  disabled={status.type === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-2">
                  <span className="text-accent">$</span> email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-gray-700 rounded px-4 py-3 text-gray-200 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                  disabled={status.type === 'loading'}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-mono text-gray-300 mb-2">
                <span className="text-accent">$</span> subject <span className="text-gray-600">(optional)</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black/20 border border-gray-700 rounded px-4 py-3 text-gray-200 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="What's this about?"
                disabled={status.type === 'loading'}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-300 mb-2">
                <span className="text-accent">$</span> message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-black/20 border border-gray-700 rounded px-4 py-3 text-gray-200 font-mono text-sm resize-none focus:outline-none focus:border-accent transition-colors"
                placeholder="Hi Muhammad — I'd like to work with you..."
                disabled={status.type === 'loading'}
              />
            </div>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded font-mono text-sm ${
                  status.type === 'success'
                    ? 'bg-accent/10 border border-accent/30 text-accent'
                    : status.type === 'error'
                    ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                    : 'bg-gray-800/50 border border-gray-700 text-gray-300'
                }`}
              >
                {status.message}
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="flex-1 px-6 py-3 font-mono bg-accent text-terminal rounded hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              <button
                type="button"
                onClick={handleClear}
                disabled={status.type === 'loading'}
                className="px-6 py-3 font-mono bg-gray-800 border border-gray-700 rounded hover:border-accent/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear
              </button>
            </div>
          </form>

          {/* Alternative Contact Methods */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 font-mono mb-4">Or reach me directly:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:dsbtek@gmail.com"
                className="flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                dsbtek@gmail.com
              </a>
              <a
                href="https://github.com/dsbtek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
