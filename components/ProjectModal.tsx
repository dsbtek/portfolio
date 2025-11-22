"use client"

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '../data/projects'
import Image from 'next/image'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  const statusColors = {
    'completed': 'text-green-400 border-green-400/30 bg-green-400/10',
    'in-progress': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    'planned': 'text-blue-400 border-blue-400/30 bg-blue-400/10'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl bg-[#051018] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/80 border border-gray-700 rounded-lg transition-colors"
                >
                  <span className="text-gray-400 text-xl">×</span>
                </button>

                {/* Header Image */}
                {project.image && (
                  <div className="relative h-64 md:h-80 bg-black/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051018] to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-mono text-accent">
                        {project.title}
                      </h2>
                      {project.year && (
                        <p className="mt-1 text-sm font-mono text-gray-500">{project.year}</p>
                      )}
                    </div>
                    {project.status && (
                      <span className={`px-3 py-1 rounded border font-mono text-sm ${statusColors[project.status]}`}>
                        {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-300 font-mono text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h3 className="text-sm font-mono text-accent mb-2">Tech Stack</h3>
                    <p className="text-sm text-gray-400 font-mono">{project.tech}</p>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-mono text-accent mb-3">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300 font-mono">
                            <span className="text-accent mt-1">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Screenshots */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-mono text-accent mb-3">Screenshots</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.screenshots.map((screenshot, idx) => (
                          <div key={idx} className="relative h-48 bg-black/40 rounded-lg overflow-hidden border border-gray-800">
                            <Image
                              src={screenshot}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="mt-8 flex gap-4 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent font-mono text-sm transition-colors"
                      >
                        View Live Demo →
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-black/40 hover:bg-black/60 border border-gray-700 rounded-lg text-gray-300 font-mono text-sm transition-colors"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

