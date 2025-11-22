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
  title: 'AI / Full-Stack Engineer',
  tagline: 'Building intelligent solutions at the intersection of AI and web development',
  profileImage: '/images/mypix1.jpg',
  
  bio: [
    'I\'m a passionate Full-Stack Engineer with a strong focus on AI integration and modern web technologies. With over 5 years of experience, I specialize in building scalable applications that leverage machine learning and artificial intelligence to solve real-world problems.',
    'My journey in tech started with a curiosity about how things work under the hood. This led me to explore everything from low-level system programming to high-level AI architectures. Today, I combine this knowledge to create intelligent, user-friendly applications.',
    'When I\'m not coding, you\'ll find me contributing to open-source projects, writing technical articles, or exploring the latest advancements in AI and web technologies. I believe in continuous learning and sharing knowledge with the community.',
  ],

  highlights: [
    {
      icon: '💼',
      label: 'Experience',
      value: '5+ Years',
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
      category: 'Frontend Development',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Python', 'Django', 'FastAPI', 'Express', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face', 'Computer Vision'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform'],
    },
    {
      category: 'Mobile Development',
      items: ['React Native', 'Flutter', 'PWA', 'Ionic'],
    },
  ],

  interests: [
    'Artificial Intelligence & Machine Learning',
    'Open Source Contribution',
    'Technical Writing & Blogging',
    'Mentoring Junior Developers',
    'UI/UX Design',
    'Cloud Architecture',
    'Blockchain Technology',
    'Competitive Programming',
  ],

  contact: {
    email: 'muhammad.salihu@example.com',
    location: 'Remote / Global',
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

