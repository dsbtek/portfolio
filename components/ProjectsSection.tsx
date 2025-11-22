"use client"

import React, { useState } from 'react'
import projects, { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function ProjectsSection(){
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> ls projects/
        </h2>
        <p className="text-gray-400 mb-8">
          A collection of my recent work and side projects
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {projects.map(p=> (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={() => handleProjectClick(p)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
