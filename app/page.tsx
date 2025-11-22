import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import ProjectsSection from '../components/ProjectsSection'
import GitHubStats from '../components/GitHubStats'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import ContactTerminal from '../components/ContactTerminal'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <ProjectsSection />
        <GitHubStats />
        <Blog />
        <Testimonials />
        <ContactTerminal />
      </div>
    </main>
  )
}
