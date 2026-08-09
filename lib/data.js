// Centralized placeholder content. Edit these values with your real details
// every page pulls from here so you only have to update content in one place

export const PROFILE = {
  name: "Nikhil Tiwari",
  location: "Nagpur, India",
  roles: [
    "Full-Stack Developer",
    "React & Next.js Engineer",
    "UI Craftsman",
    "Open-Source Contributor",
  ],
  bio: "I build fast, accessible web apps end to end — from database schema to pixel-perfect UI. Four years shipping products for startups that needed to move quickly without breaking things.",
  longBio:
    "I care most about the seams — the loading state, the empty screen, the error message — because that's where a product either earns trust or loses it. Outside of client work, I contribute to a couple of open-source design-system libraries and write occasionally about frontend architecture.",
  email: "developernikhil14@gmail.com",
  github: "https://github.com/nikhil-tiwari1419",
  linkedin: "https://linkedin.com/in/nikhil-tiwari-53743b339",
};

export const NAV_TABS = [
  { id: "home", label: "Home.jsx", href: "/" },
  { id: "about", label: "About.jsx", href: "/about" },
  { id: "blog", label: "Blog.jsx", href: "/blog" },
  { id: "contact", label: "Contact.jsx", href: "/contact" },
  { id: "dashboard", label: "Dashboard.jsx", href: "/dashboard" },
];

export const SKILLS = [
  {
    group: "frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    group: "backend",
    items: ["Node.js", "PostgreSQL", "Express", "GraphQL", "Redis", "fastAPI"],
  },
  {
    group: "tooling",
    items: ["Docker", "GitHub Actions", "Vercel", "Playwright"],
  },
];

export const PROJECTS = [
  {
    id: "commerce-engine",
    file: "MusicMenia - music streaming app",
    description:
      "An a complet end to end fullsack Music platform contain users, Admin, Artist's",
    stack: ["React.js", "Node.js", "vite", "MongoDB/ Mongoose / Mongo Atlas", "TailwindCss","Express"],
    href: "https://music-menia-app.vercel.app/",
  },
  {
    id: "pulse-analytics",
    file: "University Student Application ",
    description:
      "An a university application , helping Student for navigation g colleges ,serching colleges who fit for they ",
    stack: ["React", "Node.js", "WebSockets" , "TailwindCss","Express"],
    href: "https://university-student-app.vercel.app/",
  },
  {
    id: "fieldnotes-cms",
    file: "Service leave aggrement",
    description:
      "An application helping for people for there essentials of there socities ",
    stack: ["React.js + vite", "Tailwindcss", "Vercel", "MongooDB", "Gorq API","Express"],
    href: "https://service-leave-agreement.vercel.app/",
  },
  {
    id: "routewise-api",
    file: "RagAitutor",
    description:
      "An Education platform for 8, 9, 10, Student for heping there Doubt Without Teacking Headeack.",
    stack: ["React.js + vite", "Redis", "Docker", "Node.js","FastAPI","Google gimini API", "Express"],
    href: "#",
  },
];

export const TIMELINE = [
  {
    hash: "a1c9e2f",
    role: "Open Source Contributer as Kernal",
    org: "Nexus Spring of code",
    period: "April-2026 — June-2026",
    detail:
      "Leading the Project , managing , rewiving , and solving contributers issues .",
  },
  {
    hash: "6b3f0d8",
    role: "Hackthone-GDG Nagpur",
    org: "GDG-Nagpur",
    period: "jan 31 - 1 feb",
    detail:
      "Shipped The service leave aggrement in small Amount of Time .",
  },
  {
    hash: "0e7a441",
    role: "Junior Developer",
    org: "EduPiSchool.",
    period: "Aug 2026 — Present",
    detail: "Built and maintained internal tooling for the support team.",
  },
];

export const BLOG_POSTS = [
  {
    id: "designing-with-constraints",
    title: "Designing with constraints, not despite them",
    date: "2026-05-14",
    excerpt:
      "Why the best interfaces I've shipped came from tight technical limits, not creative freedom.",
    content:
      "Every project I'm proud of had a hard constraint attached — a slow API, a tiny team, a device I couldn't control. Constraints force you to decide what actually matters, and that decision is most of what good design is. This post walks through three projects and the specific limit that shaped each one, and the shortcuts I was glad I didn't take.",
  },
  {
    id: "state-management-2026",
    title: "State management in 2026: less is more",
    date: "2026-03-02",
    excerpt:
      "A look at how server components changed what 'client state' even means.",
    content:
      "A few years ago every project needed a global store. Today, most of my apps ship with a handful of useState calls and a couple of server actions. This post covers where I still reach for a dedicated state library, and where I've learned to just let the server be the source of truth.",
  },
  {
    id: "reviewing-your-own-code",
    title: "How I review my own code before anyone else does",
    date: "2026-01-20",
    excerpt:
      "A short checklist I run through before opening a pull request.",
    content:
      "Self-review is a skill, not a formality. This post shares the checklist I run before every PR: reading the diff top to bottom as a stranger would, checking error and empty states, and re-reading variable names for anything that only made sense to me at 11pm.",
  },
];

export const DASHBOARD_NAV = [
  { id: "overview", label: "Overview", href: "/dashboard" },
  { id: "analytics", label: "Analytics", href: "/dashboard/analytics" },
  { id: "settings", label: "Settings", href: "/dashboard/settings" },
];
