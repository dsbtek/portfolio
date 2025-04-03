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

export const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'Description of Project 1',
        technologies: ['Technology 1', 'Technology 2'],
        imageUrl: '/images/pr1.jpg',
        githubUrl: 'https://github.com/username/project1',
        liveUrl: 'https://project1.com',
        slug: 'project-1',
        details: 'Detailed information about Project 1',
    },
    {
        title: 'Project 2',
        description: 'Description of Project 2',
        technologies: ['Technology 3', 'Technology 4'],
        imageUrl: '/images/pr2.jpg',
        githubUrl: 'https://github.com/username/project2',
        liveUrl: 'https://project2.com',
        slug: 'project-2',
        details: 'Detailed information about Project 2',
    },
    // Add more projects as needed
];
export interface BlogPost {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    imageUrl: string;
    tags: string[];
    slug: string;
}
