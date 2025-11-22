export interface Project {
  id: string
  title: string
  description: string
  tech: string
  link: string
  repo: string
  image?: string
  screenshots?: string[]
  features?: string[]
  status?: 'completed' | 'in-progress' | 'planned'
  year?: string
}

const projects: Project[] = [
  {
    id: "smartautoroam",
    title: "SmartAutoRoam",
    description: "SmartAutoRoam intelligently detects stronger WiFi networks and seamlessly switches to maintain a stable connection — no more weak-network frustration.",
    tech: "React, Linux networking, System-level WiFi management",
    link: "",
    repo: "",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    status: "completed",
    year: "2024",
    features: [
      "Automatic network detection and switching",
      "Signal strength monitoring",
      "Seamless connection management",
      "Linux system integration"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "community",
    title: "Community",
    description: "Full-stack web app for building communities: groups, posts, and discussions. Django (DRF) backend with React + Tailwind frontend.",
    tech: "Django, Django REST Framework, React, Tailwind",
    link: "https://community-git-staging-dsbteks-projects.vercel.app/",
    repo: "",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    status: "completed",
    year: "2024",
    features: [
      "User authentication and profiles",
      "Group creation and management",
      "Real-time discussions",
      "Post creation and interactions"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "saut-alquran",
    title: "Saut Al-Qur’an (صوت القرآن)",
    description: "Mobile-first PWA to record Qur’an recitations and submit them to certified scholars for personalized Tajweed and fluency feedback.",
    tech: "PWA, Service Workers, React",
    link: "",
    repo: "",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop",
    status: "in-progress",
    year: "2024",
    features: [
      "Audio recording functionality",
      "Offline-first PWA architecture",
      "Scholar feedback system",
      "Progress tracking"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "marketplace",
    title: "Marketplace Platform",
    description: "An open-source location-based marketplace with product listings, real-time chat, voice assistance, and location search built as microservices.",
    tech: "React, FastAPI, Node.js, PostgreSQL, Microservices",
    link: "",
    repo: "",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    status: "completed",
    year: "2023",
    features: [
      "Location-based search",
      "Real-time chat system",
      "Voice assistance integration",
      "Microservices architecture"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "promptcraft",
    title: "PromptCraft",
    description: "No-code AI IDE that lets developers build software by speaking or typing prompts — streamlining prototype-to-product workflows.",
    tech: "AI integrations, Node.js, React",
    link: "",
    repo: "",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    status: "in-progress",
    year: "2024",
    features: [
      "Natural language code generation",
      "Voice-to-code interface",
      "AI-powered suggestions",
      "Rapid prototyping tools"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1676277791608-ac5a5ea7f8e3?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "hostel-allocation",
    title: "Hostel Allocation System",
    description: "Full-stack system to manage hostel room allocations for educational institutions with role-based controls and allocation logic.",
    tech: "React, Node.js, TypeScript, Prisma, Express",
    link: "",
    repo: "",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop",
    status: "completed",
    year: "2023",
    features: [
      "Role-based access control",
      "Automated room allocation",
      "Student management",
      "Reporting and analytics"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
    ]
  }
]

export default projects
