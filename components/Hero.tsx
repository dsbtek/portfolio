"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TypingEffect from './TypingEffect'

export default function Hero(){
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [showThirdLine, setShowThirdLine] = useState(false)

  return (
    <section className="my-12">
      <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6, ease: "easeOut"}}
      >
        <div className="bg-[#071014] border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <motion.div
              className="flex-shrink-0"
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: 0.3, type: "spring", stiffness: 200}}
            >
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-accent/20 to-black/40 flex items-center justify-center font-mono text-accent text-2xl border border-accent/30 shadow-lg shadow-accent/10">
                M
              </div>
            </motion.div>
            <div className="flex-1">
              <motion.h1
                className="text-3xl md:text-4xl font-mono text-accent"
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.5}}
              >
                Muhammad Salihu
              </motion.h1>
              <motion.p
                className="mt-3 font-mono text-sm md:text-base text-gray-300"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.7}}
              >
                AI / Full-stack Engineer — building reliable systems, intelligent apps, and delightful developer experiences.
              </motion.p>

              {/* Terminal Commands */}
              <div className="mt-6 space-y-2 font-mono text-sm">
                <motion.div
                  className="bg-black/40 p-3 rounded border border-gray-700/50"
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.9}}
                >
                  <span className="text-gray-500">$ </span>
                  <TypingEffect
                    text="whoami"
                    speed={80}
                    delay={1200}
                    className="text-accent"
                    onComplete={() => setShowSecondLine(true)}
                  />
                </motion.div>

                {showSecondLine && (
                  <motion.div
                    className="bg-black/40 p-3 rounded border border-gray-700/50"
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                  >
                    <TypingEffect
                      text="Muhammad Salihu - AI/Full-stack Engineer"
                      speed={40}
                      className="text-gray-300"
                      onComplete={() => setShowThirdLine(true)}
                    />
                  </motion.div>
                )}

                {showThirdLine && (
                  <motion.div
                    className="bg-black/40 p-3 rounded border border-gray-700/50"
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                  >
                    <span className="text-gray-500">$ </span>
                    <TypingEffect
                      text="cat skills.txt"
                      speed={80}
                      className="text-accent"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
