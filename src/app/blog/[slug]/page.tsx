'use client';

import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faUser,
    faCalendar,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <article className="max-w-4xl mx-auto px-4 py-16">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-8 group hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    />
                    <span>Back to Blog</span>
                </Link>

                {/* Hero Image */}
                <div className="relative h-[60vh] mb-8 rounded-xl overflow-hidden shadow-xl">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Article Header */}
                <header className="mb-12">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                        {post.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faCalendar}
                                className="w-4 h-4"
                            />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="w-4 h-4"
                            />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faClock}
                                className="w-4 h-4"
                            />
                            <span>{post.readingTime}</span>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <div className="prose dark:prose-invert prose-lg max-w-none">
                    <div className="leading-relaxed">{post.content}</div>
                </div>

                {/* Share and Navigation Section */}
                <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Share Buttons (You can add social share functionality) */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600 dark:text-gray-400">
                                Share this article:
                            </span>
                            {/* Add your social share buttons here */}
                        </div>

                        {/* Next/Previous Article Navigation */}
                        <Link
                            href="/blog"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
                        >
                            Read More Articles
                        </Link>
                    </div>
                </footer>
            </article>
        </motion.div>
    );
}
