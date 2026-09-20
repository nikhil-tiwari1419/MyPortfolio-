"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileCode2 } from "lucide-react";
import { NAV_TABS, PROFILE } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const initials = PROFILE.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#E8EAF0] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6058]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
            <span className="ml-2 hidden sm:inline font-mono text-sm font-medium text-[#1A1D26]">
              portfolio — {initials}
            </span>
          </Link>

          {/* Desktop tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_TABS.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-[13px] transition-all duration-200 ${
                  isActive(tab.href)
                    ? "text-[#0F766E] bg-[#E6F7F5] font-medium"
                    : "text-[#6B7280] hover:text-[#1A1D26] hover:bg-[#F3F4F6]"
                }`}
              >
                <FileCode2
                  size={13}
                  className={`${
                    isActive(tab.href)
                      ? "text-[#0F766E] opacity-100"
                      : "text-[#D97706] opacity-70"
                  } group-hover:opacity-100`}
                />
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 -mr-2 text-[#1A1D26] hover:bg-[#F3F4F6] rounded-lg transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#E8EAF0] bg-white/95 backdrop-blur-xl px-4 py-2">
          {NAV_TABS.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={() => setMenuOpen(false)}
              className={`w-full flex items-center gap-3 py-3 font-medium text-[15px] border-b border-[#F3F4F6] last:border-0 transition-colors ${
                isActive(tab.href)
                  ? "text-[#0F766E]"
                  : "text-[#374151] hover:text-[#0F766E]"
              }`}
            >
              <FileCode2
                size={16}
                className={isActive(tab.href) ? "text-[#0F766E]" : "text-[#D97706]"}
              />
              {tab.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
