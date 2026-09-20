"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Settings, Menu, X, Terminal } from "lucide-react";
import { DASHBOARD_NAV } from "@/lib/data";

const ICONS = {
  overview: LayoutDashboard,
  analytics: BarChart3,
  settings: Settings,
};

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-center justify-between mb-8 lg:hidden">
        <p className="font-mono text-sm text-[#0F766E]">~/dashboard</p>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle dashboard navigation"
          className="p-2 border border-[#E8EAF0] bg-white text-[#1A1D26] hover:bg-[#F9FAFB] hover:text-[#0F766E] focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-md transition-colors"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-12">
        <aside
          className={`${
            open ? "block" : "hidden"
          } lg:block rounded-xl border border-[#E8EAF0] bg-white h-fit overflow-hidden shadow-sm`}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E8EAF0] bg-[#F9FAFB]">
            <Terminal size={13} className="text-[#0F766E]" />
            <span className="font-mono text-xs text-[#9CA3AF] truncate">
              dashboard-router
            </span>
          </div>

          <nav className="p-3 space-y-1">
            {DASHBOARD_NAV.map((item) => {
              const Icon = ICONS[item.id] || LayoutDashboard;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-mono text-[13px] transition-all duration-200 group relative overflow-hidden ${
                    active
                      ? "bg-[#E6F7F5] text-[#0F766E]"
                      : "text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1A1D26]"
                  }`}
                >
                  {/* Subtle active indicator line */}
                  {active && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0F766E] rounded-r" />
                  )}

                  <Icon size={16} className={`shrink-0 ${active ? "text-[#0F766E]" : "text-[#9CA3AF] group-hover:text-[#1A1D26] transition-colors"}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="rounded-xl border border-[#E8EAF0] bg-white p-6 sm:p-8 min-h-[500px] shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
