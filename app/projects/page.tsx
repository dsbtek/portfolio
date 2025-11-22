"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import ProjectsSection from '../../components/ProjectsSection'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-mono text-accent mb-2">Projects</h1>
          <p className="text-sm md:text-base font-mono text-gray-400 mb-8">
            A collection of projects I've built — from AI tools to full-stack applications.
          </p>
        </motion.div>
        <ProjectsSection />
      </div>
    </main>
  )
}
