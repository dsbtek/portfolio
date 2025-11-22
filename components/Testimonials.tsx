'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { testimonialsData } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> cat testimonials.json
        </h2>
        <p className="text-gray-400 mb-12">What people say about working with me</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              {/* Rating */}
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}

              {/* Content */}
              <blockquote className="text-gray-300 mb-6 flex-1 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                {testimonial.avatar && (
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-accent/30">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold truncate">{testimonial.name}</p>
                  <p className="text-accent text-sm font-mono truncate">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-400 text-sm truncate">{testimonial.company}</p>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                {testimonial.relationship && (
                  <span className="text-xs font-mono text-gray-500">
                    {testimonial.relationship}
                  </span>
                )}
                {testimonial.date && (
                  <span className="text-xs font-mono text-gray-500">
                    {testimonial.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-mono">
            Want to work together?{' '}
            <a
              href="#contact"
              className="text-accent hover:text-accent/80 transition-colors underline"
            >
              Get in touch
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

