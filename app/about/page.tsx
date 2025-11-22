'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { aboutData } from '../../data/about'

// Note: Metadata export doesn't work in client components
// SEO is handled via layout.tsx and can be enhanced with next-seo if needed

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-mono">
            <span className="text-accent">$</span> cat about.md
          </h1>
          <p className="text-gray-400">Get to know me better</p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Profile Image */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/20"
            >
              <Image
                src={aboutData.profileImage}
                alt={aboutData.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 font-mono mb-1">Email</p>
                <a
                  href={`mailto:${aboutData.contact.email}`}
                  className="text-accent hover:text-accent/80 text-sm break-all"
                >
                  {aboutData.contact.email}
                </a>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 font-mono mb-1">Location</p>
                <p className="text-white text-sm">{aboutData.contact.location}</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 font-mono mb-1">Status</p>
                <p className="text-accent text-sm">{aboutData.contact.availability}</p>
              </div>
            </div>
          </div>

          {/* Bio and Details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{aboutData.name}</h2>
              <p className="text-xl text-accent font-mono mb-4">{aboutData.title}</p>
              <p className="text-gray-300 italic mb-6">{aboutData.tagline}</p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4">
              {aboutData.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center hover:border-accent/50 transition-all"
                >
                  <div className="text-3xl mb-2">{highlight.icon}</div>
                  <p className="text-xs text-gray-400 font-mono mb-1">{highlight.label}</p>
                  <p className="text-lg font-bold text-accent">{highlight.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono">
            <span className="text-accent">$</span> ls skills/
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 font-mono">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800/50 text-accent text-sm font-mono px-3 py-1 rounded border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono">
            <span className="text-accent">$</span> cat interests.txt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutData.interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-accent/50 transition-all"
              >
                <p className="text-gray-300 text-sm flex items-start">
                  <span className="text-accent mr-2 flex-shrink-0">▹</span>
                  <span>{interest}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono">
            <span className="text-accent">$</span> ls social/
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutData.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {social.platform}
                  </h3>
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm font-mono">{social.username}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center bg-gray-900/50 border border-gray-800 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-accent text-terminal font-mono px-6 py-3 rounded hover:bg-accent/80 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="bg-gray-800 text-white font-mono px-6 py-3 rounded hover:bg-gray-700 transition-colors border border-gray-700"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
