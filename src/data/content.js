/**
 * Every piece of text on the site lives here.
 *
 * Edit this file to update the portfolio - none of the components hold
 * hard-coded copy. Nothing here is secret; it all ships to the browser.
 */

export const profile = {
  name: 'Astha Negi',
  firstName: 'Astha',
  role: 'Full Stack Developer',
  tagline: 'SDE Intern at Amazon',
  blurb:
    'Information Technology undergraduate building full-stack features across React/TypeScript front ends and Node.js backend services. I care about asynchronous processing, clean data models, and tests that actually catch things.',
  email: 'asthan0727@gmail.com',
  github: 'https://github.com/astha-negi',
  linkedin: 'https://www.linkedin.com/in/astha-negi-90874b2b3/',
  // Shown on the contact cards instead of the raw URLs, which are too long
  // to read. Change these freely; they are labels, not links.
  githubLabel: 'github.com/astha-negi',
  linkedinLabel: 'in/astha-negi',
  location: 'New Delhi, India',
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a third-year Information Technology undergraduate at Bhagwan Parshuram Institute of Technology, GGSIPU, carrying a 9.24/10 CGPA and graduating in 2027.",
    "Right now I'm an SDE Intern at Amazon, where I build features end to end - React and TypeScript on the front end, service logic and data models on the back. Before that I spent a summer as a Business Intelligence Engineer Intern writing ETL workflows over millions of customer records.",
    'Outside of work I build full-stack side projects to try things I would not otherwise reach for, and I mentor juniors through my college technical council.',
  ],
  education: {
    degree: 'B.Tech, Information Technology',
    institution: 'Bhagwan Parshuram Institute of Technology, GGSIPU',
    place: 'New Delhi, India',
    period: 'Aug 2023 - Jul 2027',
    score: 'CGPA 9.24 / 10',
  },
  stats: [
    { value: '9.24', label: 'CGPA / 10' },
    { value: '2x', label: 'Amazon internships' },
    { value: '2027', label: 'Graduating' },
  ],
}

export const skills = [
  {
    group: 'Languages',
    accent: 'cyan',
    items: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    group: 'Backend',
    accent: 'emerald',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
      'JWT Auth',
    ],
  },
  {
    group: 'Frontend',
    accent: 'sky',
    items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    group: 'Cloud & Tools',
    accent: 'purple',
    items: [
      'AWS',
      'AWS Lambda',
      'AWS Fargate',
      'CloudWatch',
      'Git',
      'GitHub',
      'CI/CD',
    ],
  },
  {
    group: 'Databases',
    accent: 'amber',
    items: [
      'MySQL',
      'MongoDB',
      'DynamoDB',
      'Data Modeling',
      'Query Optimization',
    ],
  },
  {
    group: 'Testing & Core CS',
    accent: 'pink',
    items: [
      'Unit Testing',
      'Integration Testing',
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
]

export const experience = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'Jul 2026 - Present',
    current: true,
    bullets: [
      'Built an end-to-end CSV bulk-import feature letting customers create up to 500 device groups in a single upload, replacing slow one-at-a-time setup.',
      'Developed the full import experience in React and TypeScript - upload modal, downloadable template, and an import history view - plus the supporting backend service logic.',
      'Designed a device health model that combines multiple independent signals to classify each unit as Online, Needs attention, or Offline, eliminating false "Online" results from the previous model.',
      'Wrote unit and integration tests covering validation, skip paths, job-status transitions, and timeout handling for the bulk-import flow.',
    ],
    stack: ['React', 'TypeScript', 'Java', 'AWS'],
  },
  {
    role: 'Business Intelligence Engineer Intern',
    company: 'Amazon',
    period: 'Jun 2025 - Aug 2025',
    current: false,
    bullets: [
      'Designed ETL workflows in SQL to process over 1M customer records from 20+ upstream data sources, improving query performance by 30%.',
      'Built a customer segmentation analysis identifying new-customer acquisition patterns, achieving 95% accurate customer journey mapping.',
      'Automated recurring visitor-tracking reporting across 100K+ unique visitors over 12 months, reducing manual effort by 80%.',
      'Delivered business intelligence dashboards that enabled data-driven decisions for product teams.',
    ],
    stack: ['SQL', 'ETL', 'Data Modeling', 'Dashboards'],
  },
]

export const projects = [
  {
    name: 'AI Forge',
    subtitle: 'Full Stack AI SaaS Platform',
    description:
      'Six AI content tools behind a subscription - article writer, blog titles, text-to-image, background and object removal, and a resume reviewer. Every creation is persisted and generated images can be published to a shared community feed.',
    problem:
      'Metering and plan enforcement had to be trustworthy, since each premium call hits a paid third-party API.',
    feature:
      'Server-side usage metering with per-plan route gating, so a free account cannot spend money past its allowance.',
    stack: [
      'React 19',
      'Vite',
      'Express 5',
      'PostgreSQL',
      'Tailwind CSS',
      'Clerk',
    ],
    repo: 'https://github.com/astha-negi/ai-forge',
    accent: 'cyan',
  },
  {
    name: 'StayNest',
    subtitle: 'Property Rental Platform',
    description:
      'A MERN backend for a property-rental platform covering listings, bookings, user management, and reviews, structured on MVC so each concern stays testable in isolation.',
    problem:
      'Guests, hosts, and admins need very different permissions over the same booking and listing records.',
    feature:
      'JWT authentication with role-based access control across three roles, protecting every booking and listing operation.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'MVC'],
    repo: null,
    accent: 'emerald',
  },
]

export const achievements = [
  {
    title: 'Senior Council Member, Anveshan',
    detail:
      'Organized 5+ technical events at BPIT and mentored 15 junior students.',
  },
  {
    title: 'FFE Scholar',
    detail:
      'Awarded for academic excellence. Ranked in the top 5% nationally and the top 10% in coding assessments.',
  },
  {
    title: 'Smart India Hackathon Qualifier',
    detail: "Qualified for India's largest national-level hackathon.",
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
