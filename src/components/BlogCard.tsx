import { BlogPost } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}