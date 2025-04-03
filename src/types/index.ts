import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Service {
    title: string;
    description: string;
    icon: IconDefinition;
    capabilities: string[];
    slug: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
    slug: string;
    details: string;
}

export interface BlogPost {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    imageUrl: string;
    tags: string[];
    slug: string;
    readingTime: string;
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface Contact {
    email: string;
    linkedin: string;
    github: string;
    twitter?: string;
}
