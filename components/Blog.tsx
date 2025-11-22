'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { articlesData, getAllCategories, type Article } from '../data/articles'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', ...getAllCategories()]

  const filteredArticles = selectedCategory === 'All'
    ? articlesData
    : articlesData.filter(article => article.category === selectedCategory)

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Medium':
        return '📝'
      case 'Dev.to':
        return '💻'
      case 'LinkedIn':
        return '💼'
      case 'Hashnode':
        return '📰'
      default:
        return '✍️'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <section id="blog" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
          <span className="text-accent">$</span> cat blog/*.md
        </h2>
        <p className="text-gray-400 mb-8">
          Technical articles and insights on software development
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-terminal'
                  : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-accent/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-accent/50 transition-all group"
            >
              {/* Article Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">{getPlatformIcon(article.platform)}</span>
              </div>

              <div className="p-6">
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                    {article.platform}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-gray-500 bg-gray-800/50 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-xs text-gray-500 font-mono">
                    {formatDate(article.publishedDate)}
                  </span>
                  <a
                    href={article.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Stats */}
                {(article.views || article.likes) && (
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-800">
                    {article.views && (
                      <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {article.views.toLocaleString()}
                      </span>
                    )}
                    {article.likes && (
                      <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {article.likes}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Articles Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-mono">No articles found in this category.</p>
          </div>
        )}
      </motion.div>
    </section>
  )
}

