import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#23262E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A8290] font-mono">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
