import { Eye, Mail, FileCode2, GitCommit } from "lucide-react";
import { PROJECTS, BLOG_POSTS } from "@/lib/data";

const STATS = [
  { label: "Portfolio views", value: "3,482", icon: Eye },
  { label: "Contact messages", value: "17", icon: Mail },
  { label: "Published projects", value: String(PROJECTS.length), icon: FileCode2 },
  { label: "Blog posts", value: String(BLOG_POSTS.length), icon: GitCommit },
];

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="font-[Space_Grotesk,ui-sans-serif] text-2xl font-medium tracking-tight">
        Overview
      </h1>
      <p className="mt-1 text-sm text-[#9BA3AF]">
        A snapshot of activity across your portfolio site.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-lg border border-[#23262E] bg-[#14161C] p-4"
          >
            <Icon size={16} className="text-[#4FD1C5]" />
            <p className="mt-3 font-[Space_Grotesk,ui-sans-serif] text-2xl">
              {value}
            </p>
            <p className="mt-1 font-mono text-xs text-[#7A8290]">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-[#23262E] bg-[#14161C] p-5">
        <p className="font-mono text-xs text-[#7A8290] uppercase tracking-wider">
          recent activity
        </p>
        <ul className="mt-4 space-y-3 text-sm text-[#C4C9D1]">
          <li className="flex items-center justify-between">
            <span>New contact message from a recruiter</span>
            <span className="font-mono text-xs text-[#7A8290]">2h ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Published "{BLOG_POSTS[0].title}"</span>
            <span className="font-mono text-xs text-[#7A8290]">3d ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Updated project: {PROJECTS[0].file}</span>
            <span className="font-mono text-xs text-[#7A8290]">1w ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
