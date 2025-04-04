import { Metadata } from 'next';
import { BlogPost } from '@/types';
import BlogPostCard from '@/components/BlogPostCard';

export const metadata: Metadata = {
    title: 'Blog - Your Name',
    description:
        'Thoughts and insights about software development, tech, and more',
};

async function getBlogPosts(): Promise<BlogPost[]> {
    // In a real app, this would fetch from your CMS or API
    return [
        {
            slug: 'getting-started-with-nextjs',
            title: 'Getting Started with Next.js',
            excerpt: 'Learn how to build modern web applications with Next.js',
            date: '2024-01-15',
            imageUrl: '/blog/nextjs-cover.jpg',
            readingTime: '5 min read',
            tags: ['Next.js', 'React', 'Web Development'],
            author: 'John Doe',
            content:
                "# Getting Started with Next.js\n\nIn this post, we'll explore the key considerations and best practices for building scalable data pipelines...",
        },
        // Add more blog posts
    ];
}

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 dark:text-white">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}
