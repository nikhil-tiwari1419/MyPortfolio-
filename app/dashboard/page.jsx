import { Eye, Mail, FileCode2, GitCommit, ArrowUpRight } from "lucide-react";
import { PROJECTS, BLOG_POSTS } from "@/lib/data";

const STATS = [
  { label: "Portfolio views", value: "3,482", icon: Eye, trend: "+12%" },
  { label: "Contact messages", value: "17", icon: Mail, trend: "+3" },
  { label: "Published projects", value: String(PROJECTS.length), icon: FileCode2 },
  { label: "Blog posts", value: String(BLOG_POSTS.length), icon: GitCommit },
];

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="font-[Space_Grotesk,ui-sans-serif] text-2xl font-medium tracking-tight text-[#1A1D26]">
        Overview
      </h1>
      <p className="mt-1 text-sm text-[#6B7280]">
        A snapshot of activity across your portfolio site.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map(({ label, value, icon: Icon, trend }) => (
          <div
            key={label}
            className="rounded-xl border border-[#E8EAF0] bg-white p-5 hover:border-[#0F766E] hover:shadow-md transition-all group relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#E6F7F5] group-hover:text-[#0F766E] transition-colors">
                <Icon size={18} className="text-[#6B7280] group-hover:text-[#0F766E] transition-colors" />
              </div>
              {trend && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F766E] bg-[#E6F7F5] px-2 py-1 rounded-full">
                  <ArrowUpRight size={12} />
                  {trend}
                </span>
              )}
            </div>

            <div className="mt-4">
              <p className="font-[Space_Grotesk,ui-sans-serif] text-3xl font-semibold text-[#111827]">
                {value}
              </p>
              <p className="mt-1 font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#E8EAF0] bg-white overflow-hidden shadow-sm">
        <div className="border-b border-[#E8EAF0] px-5 py-4 bg-[#F9FAFB]">
          <p className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider font-medium">
            recent activity
          </p>
        </div>
        <ul className="divide-y divide-[#E8EAF0]">
          <li className="flex items-center justify-between px-5 py-4 hover:bg-[#F9FAFB] transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FEF1E4] flex items-center justify-center text-[#D97706]">
                <Mail size={14} />
              </span>
              <span className="text-sm text-[#4B5563]">New contact message from a recruiter</span>
            </div>
            <span className="font-mono text-xs text-[#9CA3AF]">2h ago</span>
          </li>
          <li className="flex items-center justify-between px-5 py-4 hover:bg-[#F9FAFB] transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#E6F7F5] flex items-center justify-center text-[#0F766E]">
                <GitCommit size={14} />
              </span>
              <span className="text-sm text-[#4B5563]">Published "{BLOG_POSTS[0]?.title || "New post"}"</span>
            </div>
            <span className="font-mono text-xs text-[#9CA3AF]">3d ago</span>
          </li>
          <li className="flex items-center justify-between px-5 py-4 hover:bg-[#F9FAFB] transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#F3F4F6] border border-[#E8EAF0] flex items-center justify-center text-[#1A1D26]">
                <FileCode2 size={14} />
              </span>
              <span className="text-sm text-[#4B5563]">Updated project: {PROJECTS[0]?.file || "Main app"}</span>
            </div>
            <span className="font-mono text-xs text-[#9CA3AF]">1w ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
