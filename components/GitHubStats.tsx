'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GitHubStats() {
  const username = 'dsbtek' // Your GitHub username

  return (
    <section id="github" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> git log --author=&quot;{username}&quot;
        </h2>
        <p className="text-gray-400 mb-8">
          My open source contributions and coding activity
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-mono">
              GitHub Statistics
            </h3>
            <div className="relative w-full h-[200px] rounded overflow-hidden">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0b0f12&title_color=00ff85&icon_color=00ff85&text_color=ffffff`}
                alt="GitHub Stats"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-mono">
              Most Used Languages
            </h3>
            <div className="relative w-full h-[200px] rounded overflow-hidden">
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0b0f12&title_color=00ff85&text_color=ffffff`}
                alt="Top Languages"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          {/* GitHub Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-mono">
              Contribution Streak
            </h3>
            <div className="relative w-full h-[200px] rounded overflow-hidden">
              <Image
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0b0f12&ring=00ff85&fire=00ff85&currStreakLabel=00ff85&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff&dates=ffffff`}
                alt="GitHub Streak"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Activity Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-accent/50 transition-all lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-mono">
              Contribution Activity
            </h3>
            <div className="relative w-full h-[200px] rounded overflow-hidden">
              <Image
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=0b0f12&color=00ff85&line=00ff85&point=ffffff&area=true&area_color=00ff85`}
                alt="Contribution Graph"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-lg px-6 py-3 hover:border-accent/50 transition-all group"
          >
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-mono text-sm text-gray-300 group-hover:text-accent transition-colors">
              View Full GitHub Profile
            </span>
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

