import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
    {
        title: 'Building Scalable Data Pipelines',
        excerpt:
            'Learn how to design and implement scalable data pipelines using modern tools and best practices.',
        content: `
      # Building Scalable Data Pipelines

      In this post, we'll explore the key considerations and best practices for building scalable data pipelines...
    `,
        date: '2024-01-15',
        author: 'Your Name',
        imageUrl: '/images/pr2.jpg',
        tags: ['Data Engineering', 'ETL', 'AWS', 'Best Practices'],
        slug: 'building-scalable-data-pipelines',
        readingTime: '10 min read',
    },
    // Add more blog posts...
];
