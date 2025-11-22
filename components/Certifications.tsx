'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { certificationsData } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> ls certifications/
        </h2>
        <p className="text-gray-400 mb-12">Professional certifications and credentials</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex gap-4 mb-4">
                {/* Logo */}
                {cert.logo && (
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 relative rounded-lg overflow-hidden border border-gray-700">
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-accent font-mono text-sm">{cert.issuer}</p>
                </div>
              </div>

              {/* Description */}
              {cert.description && (
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
              )}

              {/* Date and Credential */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm mb-4">
                <div>
                  <span className="text-gray-400 font-mono">Issued: </span>
                  <span className="text-gray-300">{cert.issueDate}</span>
                </div>
                {cert.expiryDate && (
                  <div>
                    <span className="text-gray-400 font-mono">Expires: </span>
                    <span className="text-gray-300">{cert.expiryDate}</span>
                  </div>
                )}
              </div>

              {cert.credentialId && (
                <div className="mb-4">
                  <span className="text-gray-400 font-mono text-xs">ID: </span>
                  <span className="text-gray-300 text-xs font-mono">{cert.credentialId}</span>
                </div>
              )}

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800/50 text-accent text-xs font-mono px-2 py-1 rounded border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Credential Link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-mono transition-colors"
                >
                  View Credential
                  <svg
                    className="w-4 h-4 ml-1"
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
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

