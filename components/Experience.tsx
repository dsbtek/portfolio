'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { experienceData } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> cat experience.log
        </h2>
        <p className="text-gray-400 mb-12">Professional journey and career milestones</p>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 relative"
            >
              {/* Current badge */}
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent/20 text-accent text-xs font-mono px-3 py-1 rounded-full border border-accent/50">
                    Current
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                {exp.logo && (
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden border border-gray-700">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-accent font-mono">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-gray-400 font-mono text-sm">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 font-mono">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-accent mr-2 flex-shrink-0">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 font-mono">
                        Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-accent mr-2 flex-shrink-0">★</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-800/50 text-accent text-xs font-mono px-3 py-1 rounded border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

