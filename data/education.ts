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
    institution: 'Ahmadu Bello University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    location: 'Zaria, Nigeria',
    startDate: 'May 2024',
    endDate: 'May 2027',
    description: 'Pursuing advanced studies in Computer Science with focus on software engineering, AI, and systems programming.',
    achievements: [
      'Strong commitment to continuous learning and excellence',
      'Focus on software engineering and AI applications',
      'Building foundation in computer science fundamentals'
    ],
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop'
  }
]

