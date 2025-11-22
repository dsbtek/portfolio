export interface Article {
  id: string
  title: string
  excerpt: string
  content?: string
  publishedDate: string
  readTime: string
  tags: string[]
  category: string
  url?: string
  platform: 'Medium' | 'Dev.to' | 'Personal Blog' | 'LinkedIn' | 'Hashnode'
  image?: string
  views?: number
  likes?: number
}

export const articlesData: Article[] = [
  {
    id: 'article-1',
    title: 'Building Scalable AI Applications with Next.js and Python',
    excerpt: 'A comprehensive guide to integrating AI models into modern web applications using Next.js frontend and Python backend.',
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    tags: ['AI', 'Next.js', 'Python', 'Machine Learning'],
    category: 'AI & ML',
    platform: 'Medium',
    url: 'https://medium.com/@yourusername/building-scalable-ai-applications',
    image: '/images/blog/ai-nextjs.jpg',
    views: 1250,
    likes: 89,
  },
  {
    id: 'article-2',
    title: 'Optimizing React Performance: Advanced Techniques',
    excerpt: 'Deep dive into React performance optimization techniques including memoization, code splitting, and lazy loading.',
    publishedDate: '2023-12-10',
    readTime: '12 min read',
    tags: ['React', 'Performance', 'JavaScript', 'Optimization'],
    category: 'Web Development',
    platform: 'Dev.to',
    url: 'https://dev.to/yourusername/optimizing-react-performance',
    image: '/images/blog/react-performance.jpg',
    views: 2100,
    likes: 156,
  },
  {
    id: 'article-3',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'Learn how to structure and maintain TypeScript codebases in enterprise-level applications with real-world examples.',
    publishedDate: '2023-11-20',
    readTime: '10 min read',
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    category: 'Software Engineering',
    platform: 'Personal Blog',
    url: '#',
    image: '/images/blog/typescript-practices.jpg',
    views: 890,
    likes: 67,
  },
  {
    id: 'article-4',
    title: 'Implementing Real-Time Features with WebSockets',
    excerpt: 'A practical guide to building real-time applications using WebSockets, Socket.io, and modern frameworks.',
    publishedDate: '2023-10-05',
    readTime: '15 min read',
    tags: ['WebSockets', 'Real-time', 'Node.js', 'Socket.io'],
    category: 'Backend Development',
    platform: 'Hashnode',
    url: 'https://hashnode.com/@yourusername/websockets-guide',
    image: '/images/blog/websockets.jpg',
    views: 1560,
    likes: 112,
  },
  {
    id: 'article-5',
    title: 'Microservices Architecture: Lessons Learned',
    excerpt: 'Insights and lessons from building and maintaining microservices architecture in production environments.',
    publishedDate: '2023-09-15',
    readTime: '11 min read',
    tags: ['Microservices', 'Architecture', 'DevOps', 'Docker'],
    category: 'System Design',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/pulse/microservices-architecture',
    image: '/images/blog/microservices.jpg',
    views: 3200,
    likes: 245,
  },
  {
    id: 'article-6',
    title: 'Getting Started with Machine Learning in JavaScript',
    excerpt: 'An introduction to machine learning concepts and implementation using TensorFlow.js and modern JavaScript.',
    publishedDate: '2023-08-22',
    readTime: '9 min read',
    tags: ['Machine Learning', 'JavaScript', 'TensorFlow.js', 'AI'],
    category: 'AI & ML',
    platform: 'Medium',
    url: 'https://medium.com/@yourusername/ml-in-javascript',
    image: '/images/blog/ml-javascript.jpg',
    views: 1780,
    likes: 134,
  },
]

// Get articles by category
export function getArticlesByCategory(category: string): Article[] {
  return articlesData.filter(article => article.category === category)
}

// Get recent articles
export function getRecentArticles(limit: number = 3): Article[] {
  return articlesData
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit)
}

// Get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(articlesData.map(article => article.category)))
}

// Get all platforms
export function getAllPlatforms(): string[] {
  return Array.from(new Set(articlesData.map(article => article.platform)))
}

