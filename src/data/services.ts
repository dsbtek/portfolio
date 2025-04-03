import { Service } from '@/types';
import {
    faDatabase,
    faCode,
    faBrain,
    faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';

export const services: Service[] = [
    // {
    //     title: 'Instructor',
    //     description:
    //         'Teaching and mentoring in software development, data engineering, and AI/ML technologies.',
    //     icon: faChalkboardTeacher,
    //     capabilities: [
    //         'Technical Training',
    //         'Workshop Facilitation',
    //         'Curriculum Development',
    //         'One-on-One Mentoring',
    //     ],
    //     slug: 'instructor',
    // },
    {
        title: 'Software Engineering',
        description:
            'Developing scalable applications and systems using modern technologies and best practices.',
        icon: faCode,
        capabilities: [
            'Full-Stack Development',
            'API Development',
            'Cloud Solutions',
            'System Architecture',
        ],
        slug: 'software-engineering',
    },
    {
        title: 'Data Engineering',
        description:
            'Building robust data pipelines, ETL processes, and data warehousing solutions. Expert in big data technologies and cloud platforms.',
        icon: faDatabase,
        capabilities: [
            'Data Pipeline Development',
            'ETL/ELT Solutions',
            'Data Warehouse Design',
            'Big Data Processing',
        ],
        slug: 'data-engineering',
    },
    {
        title: 'AI/ML Engineering',
        description:
            'Implementing cutting-edge machine learning solutions and AI-powered applications.',
        icon: faBrain,
        capabilities: [
            'Machine Learning Models',
            'Deep Learning Solutions',
            'NLP Applications',
            'Computer Vision',
        ],
        slug: 'ai-ml-engineering',
    },
];
