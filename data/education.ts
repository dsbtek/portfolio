export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  description?: string
  achievements?: string[]
  gpa?: string
  logo?: string
}

export const educationData: Education[] = [
  {
    id: 'edu-1',
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    location: 'City, Country',
    startDate: '2015',
    endDate: '2019',
    description: 'Focused on software engineering, artificial intelligence, and data structures.',
    achievements: [
      'Dean\'s List for Academic Excellence',
      'Led university coding club',
      'Graduated with honors'
    ],
    gpa: '3.8/4.0',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop'
  },
  {
    id: 'edu-2',
    institution: 'Online Learning Platform',
    degree: 'Professional Certificate',
    field: 'Full-Stack Web Development',
    location: 'Online',
    startDate: '2020',
    endDate: '2021',
    description: 'Comprehensive program covering modern web technologies and best practices.',
    achievements: [
      'Completed 10+ real-world projects',
      'Mastered React, Node.js, and TypeScript'
    ],
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop'
  }
]

