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
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: 'Mar 2023',
    expiryDate: 'Mar 2026',
    credentialId: 'AWS-SA-12345',
    credentialUrl: 'https://aws.amazon.com/certification/',
    description: 'Validates expertise in designing distributed systems on AWS.',
    skills: ['AWS', 'Cloud Architecture', 'System Design', 'Security'],
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-2',
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    issueDate: 'Jan 2023',
    credentialId: 'PSM-67890',
    credentialUrl: 'https://www.scrum.org/professional-scrum-certifications',
    description: 'Demonstrates fundamental understanding of Scrum framework and agile practices.',
    skills: ['Scrum', 'Agile', 'Team Leadership', 'Project Management'],
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-3',
    name: 'Meta Front-End Developer',
    issuer: 'Meta (Facebook)',
    issueDate: 'Sep 2022',
    credentialId: 'META-FE-11223',
    credentialUrl: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
    description: 'Professional certificate covering modern front-end development with React.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX', 'Version Control'],
    logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-4',
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    issueDate: 'Jun 2022',
    credentialId: 'MONGO-DEV-44556',
    credentialUrl: 'https://university.mongodb.com/certification',
    description: 'Validates skills in MongoDB database design and development.',
    skills: ['MongoDB', 'NoSQL', 'Database Design', 'Data Modeling'],
    logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=400&fit=crop'
  },
  {
    id: 'cert-5',
    name: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    issueDate: 'Apr 2022',
    expiryDate: 'Apr 2024',
    credentialId: 'GCP-PRO-78901',
    credentialUrl: 'https://cloud.google.com/certification',
    description: 'Demonstrates ability to design and manage solutions on Google Cloud Platform.',
    skills: ['GCP', 'Cloud Computing', 'Kubernetes', 'DevOps'],
    logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop'
  }
]

