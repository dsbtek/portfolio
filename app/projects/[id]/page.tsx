import React from 'react'
import { notFound } from 'next/navigation'
import projects from '../../../data/projects'
import Navbar from '../../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  const statusColors = {
    'completed': 'text-green-400 border-green-400/30 bg-green-400/10',
    'in-progress': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    'planned': 'text-blue-400 border-blue-400/30 bg-blue-400/10'
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-accent transition-colors mb-8"
        >
          <span>←</span> Back to Projects
        </Link>

        {/* Hero Image */}
        {project.image && (
          <div className="relative h-96 bg-black/40 rounded-2xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-terminal via-terminal/50 to-transparent" />
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-mono text-accent mb-2">
                {project.title}
              </h1>
              {project.year && (
                <p className="text-sm font-mono text-gray-500">{project.year}</p>
              )}
            </div>
            {project.status && (
              <span className={`px-3 py-1 rounded border font-mono text-sm ${statusColors[project.status]}`}>
                {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            )}
          </div>

          <p className="text-lg text-gray-300 font-mono leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="bg-[#051018] border border-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-mono text-accent mb-3">Tech Stack</h2>
          <p className="text-gray-300 font-mono">{project.tech}</p>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="bg-[#051018] border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-mono text-accent mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 font-mono">
                  <span className="text-accent mt-1 flex-shrink-0">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-mono text-accent mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, idx) => (
                <div 
                  key={idx} 
                  className="relative h-64 bg-black/40 rounded-xl overflow-hidden border border-gray-800 group"
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 flex-wrap">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-xl text-accent font-mono transition-colors"
            >
              View Live Demo →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-black/40 hover:bg-black/60 border border-gray-700 rounded-xl text-gray-300 font-mono transition-colors"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </main>
  )
}

