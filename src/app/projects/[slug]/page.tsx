import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href="/#projects"
        className="text-blue-600 dark:text-blue-400 mb-8 inline-block"
      >
        ← Back to Projects
      </Link>
      <div className="relative h-96 mb-8">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 dark:text-white">
        {project.title}
      </h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {project.details}
      </div>
      <div className="flex gap-4 mt-8">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800"
          >
            View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}