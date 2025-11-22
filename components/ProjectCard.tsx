"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../data/projects'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
  onClick?: () => void
  showDetailLink?: boolean
}

export default function ProjectCard({ project, onClick, showDetailLink = true }: ProjectCardProps){
  const statusColors = {
    'completed': 'text-green-400',
    'in-progress': 'text-yellow-400',
    'planned': 'text-blue-400'
  }

  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#051018] border border-gray-800 rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-black/40 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-mono text-accent/20">{project.title[0]}</span>
          </div>
        )}
        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded border border-gray-700">
            <span className={`text-xs font-mono ${statusColors[project.status]}`}>
              {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
        )}
        {/* Year Badge */}
        {project.year && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded border border-gray-700">
            <span className="text-xs font-mono text-gray-400">{project.year}</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="font-mono text-accent text-lg group-hover:text-accent/80 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 font-mono line-clamp-2">
          {project.description}
        </p>
        <p className="mt-3 text-xs text-gray-400 font-mono">
          {project.tech}
        </p>

        {/* Features Preview */}
        {project.features && project.features.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.features.slice(0, 2).map((feature, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-black/40 rounded border border-gray-700/50 text-gray-400 font-mono">
                {feature.length > 20 ? feature.substring(0, 20) + '...' : feature}
              </span>
            ))}
            {project.features.length > 2 && (
              <span className="text-xs px-2 py-1 text-accent font-mono">
                +{project.features.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="mt-4 flex gap-3 text-sm font-mono">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
          {showDetailLink && (
            <Link
              href={`/projects/${project.id}`}
              className="ml-auto text-accent hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View Details →
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
