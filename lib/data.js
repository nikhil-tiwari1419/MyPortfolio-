// Centralized placeholder content. Edit these values with your real details
// every page pulls from here so you only have to update content in one place

export const PROFILE = {
  name: "Nikhil Tiwari",
  location: "Nagpur, India",
  roles: [
    "Learning Full-Stack Developer",
    "React & Next.js Engineer",
    "UI Craftsman",
    "Open-Source Contributor",
  ],
  bio: "I build fast, accessible web apps end to end - from database schema to pixel-perfect UI. One years shipping products for Personal project that needed to move quickly without breaking things.",
  longBio:
    "I care most about the seams - the loading state, the empty screen, the error message - because that's where a product either earns trust or loses it. Outside of client work, I contribute to a couple of open-source FSD project as a kernal and write occasionally about frontend - backend - Databese's architecture.And somethig new learning share in my portfolio",
  email: "developernikhil14@gmail.com",
  github: "https://github.com/nikhil-tiwari1419",
  linkedin: "https://linkedin.com/in/nikhil-tiwari-53743b339",
};

export const NAV_TABS = [
  { id: "home", label: "Home.jsx", href: "/" },
  { id: "about", label: "About.jsx", href: "/about" },
  { id: "blog", label: "Blog.jsx", href: "/blog" },
  { id: "contact", label: "Contact.jsx", href: "/contact" },
];

export const SKILLS = [
  {
    group: "frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    group: "backend",
    items: ["Node.js", "PostgreSQL", "MongoDB", "Express", "GraphQL", "Redis", "fastAPI"],
  },
  {
    group: "tooling",
    items: ["Docker", "GitHub Actions", "Vercel", "Playwright"],
  },
];

export const PROJECTS = [
  {
    id: "vxbv",
    file: "CampusVoice - A student griverance portal",
    description:
      "An a complet end to end fullsack Griverance platform contain Student, Admin, SuperAdmin",
    stack: ["React.js", "Node.js", "vite", "MongoDB/ Mongoose / Mongo Atlas", "TailwindCss","Express"],
    href: "https://campus-voice-liart.vercel.app/",
  },
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
    role: "Developement Team lead",
    org: "EduPiSchool.",
    period: "Aug 2026 — Present",
    detail: "Built and maintained internal tooling for the support team.",
  },
];

