export interface AboutData {
  name: string
  title: string
  tagline: string
  profileImage: string
  bio: string[]
  highlights: {
    icon: string
    label: string
    value: string
  }[]
  skills: {
    category: string
    items: string[]
  }[]
  interests: string[]
  contact: {
    email: string
    location: string
    availability: string
  }
  social: {
    platform: string
    url: string
    username: string
  }[]
}

export const aboutData: AboutData = {
  name: 'Muhammad Salihu',
  title: 'Executive Senior Software Engineer',
  tagline: 'Building scalable, high-performance applications with expertise in Software, AI and Data Engineering',
  profileImage: '/images/mypix1.jpg',

  bio: [
    'I am a seasoned Software Engineer with over seven years of professional experience in building scalable, high-performance applications using Python, JavaScript, C, C++, and C#. I have successfully delivered end-to-end solutions across multiple industries, leveraging my versatility in both high-level application development and low-level systems programming.',
    'At SMARTFLOW TECHNOLOGIES LTD, I focus on refining enterprise-grade solutions through Internet of Things (IoT) innovations for remote monitoring. I\'ve played a pivotal role in enhancing the SmarEye application, ensuring it scales reliably to meet the dynamic and mission-critical demands of the Oil and Gas sector. My work involved upgrading legacy codebases and implementing robust CI/CD pipelines, significantly improving deployment efficiency and code quality.',
    'My technical arsenal includes frameworks such as Django, FastAPI, React.js, Next.js, and Node.js, as well as deep experience with PostgreSQL, MySQL, and MongoDB. I\'ve also architected solutions involving machine learning, Bluetooth device communication, and real-time facial recognition, emphasizing performance, reliability, and clean architecture. I hold a Bachelor\'s degree in Computer Science from Ahmadu Bello University, Zaria, Nigeria, and maintain a strong commitment to continuous learning, mentorship, and excellence in software engineering.',
  ],

  highlights: [
    {
      icon: '💼',
      label: 'Experience',
      value: '7+ Years',
    },
    {
      icon: '🚀',
      label: 'Projects',
      value: '50+ Completed',
    },
    {
      icon: '🎓',
      label: 'Certifications',
      value: '5+ Professional',
    },
    {
      icon: '⭐',
      label: 'Client Rating',
      value: '5.0/5.0',
    },
  ],

  skills: [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'C#'],
    },
    {
      category: 'Frontend Development',
      items: ['React.js', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend Development',
      items: ['Django', 'FastAPI', 'Node.js', 'Express', 'Spring Boot', '.NET'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['PyTorch', 'scikit-learn', 'TensorFlow', 'Computer Vision', 'Facial Recognition', 'Data Analysis'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['AWS', 'S3', 'Docker', 'CI/CD', 'GitHub Actions', 'IoT'],
    },
    {
      category: 'Data Engineering',
      items: ['Data Pipelines', 'ETL', 'Data Analysis', 'Big Data', 'Data Modeling'],
    },
  ],

  interests: [
    'Artificial Intelligence & Machine Learning',
    'IoT & Remote Monitoring Systems',
    'Software Architecture & Design Patterns',
    'Mentoring & Knowledge Sharing',
    'Clean Code & Best Practices',
    'DevOps & CI/CD Automation',
    'Data Engineering & Analytics',
    'Continuous Learning & Innovation',
  ],

  contact: {
    email: 'dsbtek@gmail.com',
    location: 'Minna, Niger State, Nigeria',
    availability: 'Open to opportunities',
  },

  social: [
    {
      platform: 'GitHub',
      url: 'https://github.com/dsbtek',
      username: '@dsbtek',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/dsbtek',
      username: '@dsbtek',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/dsbtek3818',
      username: '@dsbtek3818',
    },
    {
      platform: 'Dev.to',
      url: 'https://dev.to/dsbtek',
      username: '@dsbtek',
    },
  ],
}

