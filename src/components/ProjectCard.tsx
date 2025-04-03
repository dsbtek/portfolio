import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}