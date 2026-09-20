import Link from "next/link";
import Image from "next/image";
import { Code2, Database, Wrench, ArrowRight, GitCommit } from "lucide-react";
import { PROFILE, SKILLS, TIMELINE } from "@/lib/data";

const GROUP_ICON = { frontend: Code2, backend: Database, tooling: Wrench };

export const metadata = { title: `About — ${PROFILE.name}` };

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <p className="font-mono text-sm text-[#1a1cae]">~/about.md</p>

      <div className="mt-6 grid md:grid-cols-[220px_1fr] gap-8 sm:gap-12 items-start">
        <div className="mx-auto md:mx-0 w-40 h-40 sm:w-48 sm:h-48 rounded-xl border border-[#23262E] overflow-hidden">
          <Image
            src="/Nikhil.jpg"
            alt={PROFILE.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="font-[Space_Grotesk,ui-sans-serif] text-3xl sm:text-4xl font-medium tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-[#F2A65A]">
            {PROFILE.roles[0]} · {PROFILE.location}
          </p>

          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#0b377d]">
            {PROFILE.bio}
          </p>
          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#0b377d]">
            {PROFILE.longBio}
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-[#4f51d1] hover:text-[#000000] transition-colors"
          >
            Work with me
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <p className="font-mono text-sm text-[#4f53d1]">~/skills</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {SKILLS.map(({ group, items }) => {
            const Icon = GROUP_ICON[group];
            return (
              <div
                key={group}
                className="rounded border border-[#23262E] bg-[#f4f6f8b0] p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={15} className="text-[#4f51d1]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#000000]">
                    {group}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[13px] text-[#070707]"
                    >
                      <span className="text-[#58d14f]">import</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <div className="flex items-baseline gap-3">
          <p className="font-mono text-sm text-[#4f5ed1]">~/experience</p>
          <span className="font-mono text-xs text-[#4A4F5A]">
            // git log --oneline
          </span>
        </div>
        <div className="mt-6 border-l border-[#23262E] ml-2">
          {TIMELINE.map((entry) => (
            <div key={entry.hash} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-[#14161C] border-2 border-[#4FD1C5] flex items-center justify-center">
                <GitCommit size={9} className="text-[#4FD1C5]" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-[#f6912c]">
                  {entry.hash}
                </span>
                <span className="font-medium text-[#023c93]">{entry.role}</span>
                <span className="text-sm text-[#7A8290]">@ {entry.org}</span>
                <span className="ml-auto font-mono text-xs text-[#7A8290]">
                  {entry.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#9BA3AF] max-w-xl">
                {entry.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
