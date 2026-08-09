"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Settings, Menu, X } from "lucide-react";
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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <p className="font-mono text-sm text-[#4FD1C5]">~/dashboard</p>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle dashboard navigation"
          className="p-2 text-[#E6E8EB] focus-visible:ring-2 focus-visible:ring-[#F2A65A] rounded-md"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-10">
        <aside
          className={`${
            open ? "block" : "hidden"
          } lg:block rounded-lg border border-[#23262E] bg-[#14161C] p-2 h-fit`}
        >
          <p className="hidden lg:block font-mono text-xs text-[#4FD1C5] px-2 py-2">
            ~/dashboard
          </p>
          <nav className="space-y-1">
            {DASHBOARD_NAV.map((item) => {
              const Icon = ICONS[item.id];
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md font-mono text-[13px] transition-colors ${
                    isActive(item.href)
                      ? "bg-[#1B1E26] text-[#E6E8EB]"
                      : "text-[#9BA3AF] hover:bg-[#1B1E26] hover:text-[#E6E8EB]"
                  }`}
                >
                  <Icon size={15} className="text-[#4FD1C5] shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
