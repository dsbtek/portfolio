export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  description?: string
  skills?: string[]
  logo?: string
}

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    name: 'Test-Driven Development in Django',
    issuer: 'LinkedIn Learning',
    issueDate: '2024',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/',
    description: 'Comprehensive training in test-driven development practices using Django framework.',
    skills: ['Django', 'Python', 'TDD', 'Unit Testing', 'Software Testing'],
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-2',
    name: 'C# and .NET Development with VS Code',
    issuer: 'LinkedIn Learning',
    issueDate: '2024',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/',
    description: 'Professional training in C# and .NET development using Visual Studio Code.',
    skills: ['C#', '.NET', 'Visual Studio Code', 'Software Development'],
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-3',
    name: 'Python Data Structures: Stacks, Queues, and Deques',
    issuer: 'LinkedIn Learning',
    issueDate: '2024',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/',
    description: 'Advanced training in Python data structures and algorithms implementation.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-4',
    name: 'Fundamentals of AI Engineering: Principles and Practical Applications',
    issuer: 'LinkedIn Learning',
    issueDate: '2024',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/',
    description: 'Comprehensive course covering AI engineering principles and real-world applications.',
    skills: ['AI', 'Machine Learning', 'AI Engineering', 'Practical Applications'],
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-5',
    name: 'Advanced GitHub Actions',
    issuer: 'LinkedIn Learning',
    issueDate: '2024',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/',
    description: 'Advanced training in GitHub Actions for CI/CD automation and workflow optimization.',
    skills: ['GitHub Actions', 'CI/CD', 'DevOps', 'Automation', 'Workflow Management'],
    logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=400&fit=crop'
  }
]

