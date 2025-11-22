# Muhammad Salihu — Portfolio

**AI / Full-stack Engineer**

A modern, terminal-inspired portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

✅ **Animated terminal-style hero section**
- Typing code effect with blinking cursor
- Sequential command animations
- Smooth fade-in transitions

✅ **Experience section**
- Professional work history with timeline
- Company logos and positions
- Key responsibilities and achievements
- Technologies used for each role
- Current position indicator

✅ **Education section**
- Academic background with institutions
- Degrees, fields of study, and GPAs
- Achievements and honors
- Institution logos

✅ **Certifications section**
- Professional certifications and credentials
- Issuer information and dates
- Credential IDs and verification links
- Skills covered by each certification
- Expiry date tracking

✅ **Enhanced project cards**
- Placeholder images from Unsplash
- Status badges (Completed, In Progress, Planned)
- Year indicators
- Hover animations and effects
- Feature previews

✅ **Full modal previews**
- Click any project card to open detailed modal
- Screenshot galleries
- Feature lists
- Tech stack details
- Live demo and GitHub links

✅ **Project detail pages**
- Individual pages for each project at `/projects/[id]`
- Full screenshot galleries
- Comprehensive project information
- Responsive image layouts

✅ **Testimonials section**
- Client and colleague testimonials
- 5-star rating system
- Professional photos and details
- Relationship indicators (Client/Colleague)
- Call-to-action for new clients

✅ **Responsive dark-themed UI**
- Mobile-first design
- Custom scrollbar styling
- Accent color selection effects
- Smooth animations throughout
- Sticky navigation with mobile menu

## 🚀 Quick Start

⚠️ **Important:** This project requires Node.js 18.17 or higher. See `SETUP_NOTES.md` for upgrade instructions.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
muhammad-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   └── projects/
│       ├── page.tsx        # Projects listing
│       └── [id]/
│           └── page.tsx    # Individual project pages
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Animated hero section
│   ├── TypingEffect.tsx    # Typing animation component
│   ├── Experience.tsx      # Work experience section
│   ├── Education.tsx       # Education history section
│   ├── Certifications.tsx  # Certifications section
│   ├── ProjectCard.tsx     # Project card component
│   ├── ProjectsSection.tsx # Projects grid with modal
│   ├── ProjectModal.tsx    # Project detail modal
│   ├── Testimonials.tsx    # Testimonials section
│   └── ContactTerminal.tsx # Contact form
├── data/
│   ├── about.ts            # Personal bio and details
│   ├── projects.ts         # Project data
│   ├── experience.ts       # Work experience data
│   ├── education.ts        # Education data
│   ├── certifications.ts   # Certifications data
│   └── testimonials.ts     # Testimonials data
└── public/                 # Static assets
```

## 🎨 Customization

### Update Your Information

All content is stored in TypeScript files in the `data/` directory:

**Experience** (`data/experience.ts`):
```typescript
{
  company: "Your Company",
  position: "Your Position",
  location: "City, Country",
  startDate: "Jan 2022",
  endDate: "Present",
  current: true,
  description: "What you do...",
  responsibilities: ["Task 1", "Task 2"],
  achievements: ["Achievement 1"],
  technologies: ["React", "Node.js"]
}
```

**Education** (`data/education.ts`):
```typescript
{
  institution: "University Name",
  degree: "Bachelor of Science",
  field: "Computer Science",
  location: "City, Country",
  startDate: "2015",
  endDate: "2019",
  gpa: "3.8/4.0",
  achievements: ["Honor 1", "Honor 2"]
}
```

**Certifications** (`data/certifications.ts`):
```typescript
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  issueDate: "Mar 2023",
  expiryDate: "Mar 2026",
  credentialId: "CERT-12345",
  credentialUrl: "https://...",
  skills: ["Skill 1", "Skill 2"]
}
```

**Testimonials** (`data/testimonials.ts`):
```typescript
{
  name: "Client Name",
  position: "Their Position",
  company: "Their Company",
  content: "Their testimonial...",
  rating: 5,
  relationship: "Client" // or "Colleague"
}
```

**Projects** (`data/projects.ts`):
```typescript
{
  id: "project-slug",
  title: "Project Name",
  description: "Description...",
  tech: "React, Node.js",
  status: "completed",
  year: "2024",
  features: ["Feature 1", "Feature 2"],
  screenshots: ["url1", "url2"]
}
```

**About** (`data/about.ts`):
```typescript
{
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline...",
  profileImage: "your-image-url",
  bio: ["Paragraph 1", "Paragraph 2"],
  highlights: [
    { icon: "💼", label: "Experience", value: "5+ Years" }
  ],
  skills: [
    { category: "Frontend", items: ["React", "Next.js"] }
  ],
  interests: ["Interest 1", "Interest 2"],
  contact: {
    email: "your@email.com",
    location: "Your Location",
    availability: "Available"
  },
  social: [
    { platform: "GitHub", url: "...", username: "@you" }
  ]
}
```

### Color Scheme

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  terminal: '#0b0f12',  // Background
  accent: '#00ff85'      // Accent color
}
```

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Images:** Next.js Image Optimization

## 🌟 Pages & Sections Included

### Pages
1. **Home** (`/`) — Main landing page with all sections
2. **About** (`/about`) — Detailed personal profile and bio
3. **Projects** (`/projects`) — Full project showcase
4. **Project Details** (`/projects/[id]`) — Individual project pages

### Home Page Sections
1. **Hero** — Animated terminal-style introduction
2. **Experience** — Professional work history (3 positions)
3. **Education** — Academic background (2 entries)
4. **Certifications** — Professional credentials (5 certifications)
5. **Projects** — Portfolio showcase (6 projects)
6. **Testimonials** — Client reviews (6 testimonials)
7. **Contact** — Terminal-style contact form

### About Page Features
- **Profile Picture** — Professional photo with hover effect
- **Bio** — Multi-paragraph personal introduction
- **Highlights** — Key stats (experience, projects, certifications, rating)
- **Skills** — Categorized technical skills (Frontend, Backend, AI/ML, DevOps, Mobile)
- **Interests** — Personal and professional interests
- **Social Links** — GitHub, LinkedIn, Twitter, Dev.to
- **Contact Info** — Email, location, availability status
- **Call to Action** — Links to contact and projects

## 📝 License

MIT License - feel free to use this template for your own portfolio!
