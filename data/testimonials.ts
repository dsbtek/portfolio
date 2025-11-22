export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  rating?: number
  date?: string
  avatar?: string
  relationship?: string
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'Tech Innovations Inc.',
    content: 'Muhammad is an exceptional developer who consistently delivers high-quality work. His expertise in full-stack development and AI integration helped us launch our product 2 months ahead of schedule. Highly recommended!',
    rating: 5,
    date: 'Nov 2024',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    relationship: 'Client'
  },
  {
    id: 'test-2',
    name: 'David Chen',
    position: 'Product Manager',
    company: 'Digital Solutions Ltd.',
    content: 'Working with Muhammad was a pleasure. He has a deep understanding of both frontend and backend technologies, and his problem-solving skills are outstanding. He transformed our complex requirements into elegant solutions.',
    rating: 5,
    date: 'Oct 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    relationship: 'Colleague'
  },
  {
    id: 'test-3',
    name: 'Emily Rodriguez',
    position: 'Founder & CEO',
    company: 'StartupHub',
    content: 'Muhammad built our entire platform from scratch. His attention to detail, communication skills, and technical expertise are top-notch. He went above and beyond to ensure our success.',
    rating: 5,
    date: 'Sep 2024',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    relationship: 'Client'
  },
  {
    id: 'test-4',
    name: 'Michael Thompson',
    position: 'Senior Developer',
    company: 'CodeCraft Agency',
    content: 'I had the opportunity to work alongside Muhammad on several projects. His code quality is exceptional, and he\'s always willing to share knowledge and help the team grow. A true team player!',
    rating: 5,
    date: 'Aug 2024',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    relationship: 'Colleague'
  },
  {
    id: 'test-5',
    name: 'Lisa Anderson',
    position: 'Director of Engineering',
    company: 'Enterprise Solutions',
    content: 'Muhammad\'s ability to understand complex business requirements and translate them into scalable technical solutions is impressive. He delivered a mission-critical system that exceeded our expectations.',
    rating: 5,
    date: 'Jul 2024',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    relationship: 'Client'
  },
  {
    id: 'test-6',
    name: 'James Wilson',
    position: 'Tech Lead',
    company: 'Innovation Labs',
    content: 'Muhammad is one of the most talented developers I\'ve worked with. His expertise in AI and machine learning, combined with his full-stack skills, makes him invaluable for any project.',
    rating: 5,
    date: 'Jun 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    relationship: 'Colleague'
  }
]

