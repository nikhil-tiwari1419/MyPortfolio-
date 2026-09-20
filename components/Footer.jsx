import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8EAF0] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#000000] font-mono">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
