'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogPostCardProps {
    post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
            <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="flex gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2 dark:text-white">
                        {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.date}</span>
                        <span>{post.readingTime}</span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
