export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current?: boolean
  description: string
  responsibilities?: string[]
  achievements?: string[]
  technologies?: string[]
  logo?: string
}

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company Inc.',
    position: 'Senior Full-Stack Engineer',
    location: 'Remote',
    startDate: 'Jan 2022',
    endDate: 'Present',
    current: true,
    description: 'Leading development of scalable web applications and mentoring junior developers.',
    responsibilities: [
      'Architecting and implementing full-stack solutions',
      'Leading code reviews and technical discussions',
      'Mentoring team of 5 junior developers',
      'Collaborating with product team on feature planning'
    ],
    achievements: [
      'Reduced application load time by 60%',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Led migration to microservices architecture'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-2',
    company: 'Startup Solutions',
    position: 'Full-Stack Developer',
    location: 'City, Country',
    startDate: 'Jun 2020',
    endDate: 'Dec 2021',
    current: false,
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    responsibilities: [
      'Built responsive web applications from scratch',
      'Integrated third-party APIs and services',
      'Collaborated with designers and stakeholders',
      'Maintained and optimized existing codebases'
    ],
    achievements: [
      'Delivered 15+ client projects on time',
      'Improved code quality with comprehensive testing',
      'Reduced bug reports by 40% through better QA processes'
    ],
    technologies: ['React', 'Django', 'Python', 'MongoDB', 'REST APIs'],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-3',
    company: 'Digital Agency',
    position: 'Junior Developer',
    location: 'City, Country',
    startDate: 'Jan 2019',
    endDate: 'May 2020',
    current: false,
    description: 'Started career building websites and learning modern development practices.',
    responsibilities: [
      'Developed responsive websites for clients',
      'Fixed bugs and implemented new features',
      'Participated in daily standups and sprint planning'
    ],
    achievements: [
      'Successfully completed first solo project',
      'Learned React and modern JavaScript',
      'Contributed to open-source projects'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop'
  }
]

