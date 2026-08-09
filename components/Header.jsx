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
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#23262E] bg-[#14161C]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 hidden sm:inline font-mono text-xs text-[#7A8290]">
              portfolio — {initials}
            </span>
          </Link>

          {/* Desktop tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_TABS.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-[13px] transition-colors ${
                  isActive(tab.href)
                    ? "text-[#E6E8EB] bg-[#1B1E26]"
                    : "text-[#9BA3AF] hover:text-[#E6E8EB] hover:bg-[#1B1E26]"
                }`}
              >
                <FileCode2
                  size={14}
                  className={`${
                    isActive(tab.href) ? "opacity-100" : "opacity-70"
                  } text-[#F2A65A] group-hover:opacity-100`}
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
            className="md:hidden p-2 -mr-2 text-[#E6E8EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A65A] rounded-md"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#23262E] bg-[#14161C] px-4 py-2">
          {NAV_TABS.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={() => setMenuOpen(false)}
              className={`w-full flex items-center gap-2 py-2.5 font-mono text-sm border-b border-[#1E212A] last:border-0 ${
                isActive(tab.href) ? "text-[#E6E8EB]" : "text-[#9BA3AF]"
              }`}
            >
              <FileCode2 size={14} className="text-[#F2A65A]" />
              {tab.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
