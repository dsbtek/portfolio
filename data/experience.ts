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
    company: 'SMARTFLOW TECHNOLOGIES LTD',
    position: 'Executive Senior Software Engineer',
    location: 'Ikeja, Lagos State, Nigeria',
    startDate: 'Mar 2024',
    endDate: 'Present',
    current: true,
    description: 'Leading development of enterprise-grade IoT solutions for remote monitoring in the Oil and Gas sector.',
    responsibilities: [
      'Maintained and optimized the SmarEye application for enterprise B2B IoT monitoring',
      'Collaborated with development and testing teams to design robust, scalable solutions',
      'Updated outdated code bases to modern development standards',
      'Built innovative microservices and web services to enhance application functionality',
      'Efficiently deployed and integrated software with improved CI/CD practices'
    ],
    achievements: [
      'Enhanced SmarEye application to scale reliably for mission-critical Oil and Gas operations',
      'Implemented robust CI/CD pipelines, significantly improving deployment efficiency',
      'Upgraded legacy codebases improving functionality and code quality',
      'Delivered IoT solutions for remote monitoring of tanks, pumps, and equipment'
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'IoT', 'PostgreSQL', 'CI/CD', 'Microservices'],
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-2',
    company: 'Punch Group',
    position: 'MERN Stack Developer',
    location: 'San Francisco Bay Area (Remote)',
    startDate: 'Mar 2024',
    endDate: 'Jan 2025',
    current: false,
    description: 'Contributed to machine learning project for proof object detection using advanced ML techniques.',
    responsibilities: [
      'Developed algorithms for image classification and model training',
      'Implemented machine learning models using PyTorch and scikit-learn',
      'Managed data storage and retrieval using Amazon S3',
      'Configured AWS services for model training and deployment',
      'Collaborated with team to troubleshoot and optimize ML model performance'
    ],
    achievements: [
      'Successfully developed proof detection system for valid/invalid video analysis',
      'Optimized ML model performance and scalability on AWS',
      'Demonstrated strong problem-solving in meeting project deadlines',
      'Efficiently managed large image datasets with S3'
    ],
    technologies: ['Python', 'PyTorch', 'scikit-learn', 'AWS', 'S3', 'Machine Learning', 'MERN Stack'],
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-3',
    company: 'ZeroTech Agency LTD',
    position: 'Back End Developer',
    location: 'Brighton, England, United Kingdom (Remote)',
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
    current: false,
    description: 'Optimized backend systems and developed scheduling solutions for the Vibes app.',
    responsibilities: [
      'Refactored and optimized the Vibes app database operations',
      'Developed scheduling system similar to Calendly using Google Calendar API',
      'Integrated third-party APIs from external applications',
      'Debugged and tested software to improve efficiency',
      'Collaborated with Agile Scrum team in high-tempo production environment'
    ],
    achievements: [
      'Reduced server resource usage through database optimization',
      'Successfully integrated Google Calendar API for scheduling',
      'Improved code efficiency and cleanliness through debugging',
      'Delivered features aligned with client expectations'
    ],
    technologies: ['Python', 'Django', 'Google Calendar API', 'REST APIs', 'PostgreSQL', 'Agile'],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-4',
    company: 'SMARTFLOW TECHNOLOGIES LTD',
    position: 'Software Engineer',
    location: 'Lagos, Nigeria',
    startDate: 'Jul 2022',
    endDate: 'Mar 2024',
    current: false,
    description: 'Maintained and optimized SmarEye application for IoT-based remote monitoring solutions.',
    responsibilities: [
      'Maintained and optimized enterprise B2B IoT monitoring application',
      'Collaborated with teams to design solutions for functionality and scalability',
      'Updated outdated code bases to modern standards',
      'Deployed and integrated software with improved CI practices',
      'Built microservices and web services for enhanced functionality'
    ],
    achievements: [
      'Improved application functionality and efficiency',
      'Enhanced continuous integration practices',
      'Delivered scalable solutions for Oil and Gas sector',
      'Successfully worked with IoT devices for remote monitoring'
    ],
    technologies: ['Python', 'Django', 'IoT', 'PostgreSQL', 'Microservices', 'CI/CD'],
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-5',
    company: 'QualiByte',
    position: 'Full-stack Developer',
    location: 'Niger, Nigeria',
    startDate: 'Jul 2021',
    endDate: 'Oct 2022',
    current: false,
    description: 'Developed loan management application from start to finish including DevOps and maintenance.',
    responsibilities: [
      'Participated in code design and development from start to finish',
      'Collaborated with back-end developers to design crucial APIs',
      'Implemented automated build and deployment pipelines',
      'Handled DevOps, product launch, and ongoing maintenance',
      'Ensured efficient integration and deployment of updates'
    ],
    achievements: [
      'Successfully delivered complete loan management application',
      'Streamlined development process with automated pipelines',
      'Saved time and resources through efficient CI/CD implementation',
      'Designed and implemented critical API functionality'
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'DevOps', 'CI/CD', 'REST APIs'],
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-6',
    company: '3Deez Global Nigeria Limited',
    position: 'Full-stack Developer',
    location: 'Niger State, Nigeria',
    startDate: 'Dec 2018',
    endDate: 'Feb 2020',
    current: false,
    description: 'Created multiple web applications handling entire development lifecycle.',
    responsibilities: [
      'Participated in product design and estimation',
      'Handled code design and development',
      'Managed DevOps and deployment',
      'Designed UI/UX for applications',
      'Handled product launch and maintenance'
    ],
    achievements: [
      'Successfully delivered multiple web applications',
      'Managed complete development lifecycle',
      'Implemented effective UI/UX designs',
      'Maintained applications post-launch'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'MySQL'],
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop'
  },
  {
    id: 'exp-7',
    company: 'Itbaez Solutions',
    position: 'Frontend Developer',
    location: 'Niger State, Nigeria',
    startDate: 'Jan 2017',
    endDate: 'Sep 2018',
    current: false,
    description: 'Enhanced application features and facilitated collaboration between marketing and IT.',
    responsibilities: [
      'Collaborated with stakeholders on creative proposals and design best practices',
      'Enhanced application tools and features for better UX',
      'Facilitated communication between marketing and IT teams',
      'Integrated front-end assets with back-end systems',
      'Ensured seamless and cohesive user experience'
    ],
    achievements: [
      'Improved user experience through enhanced features',
      'Successfully bridged marketing and IT collaboration',
      'Delivered cohesive front-end and back-end integration',
      'Met stakeholder needs and expectations'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop'
  }
]

