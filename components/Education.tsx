'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { educationData } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> cat education.txt
        </h2>
        <p className="text-gray-400 mb-12">Academic background and learning journey</p>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                {edu.logo && (
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden border border-gray-700">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
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
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-accent font-mono">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.field} • {edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-gray-400 font-mono text-sm">
                        {edu.startDate} - {edu.endDate}
                      </p>
                      {edu.gpa && (
                        <p className="text-accent text-sm font-mono mt-1">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 font-mono">
                        Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-accent mr-2 flex-shrink-0">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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

