"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import {
  Mail,
  ExternalLink,
  FileCode2,
  GitCommit,
  Terminal,
  Code2,
  Database,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { PROFILE, SKILLS, PROJECTS, TIMELINE } from "@/lib/data";

const GROUP_ICON = { frontend: Code2, backend: Database, tooling: Wrench };

function useTypingEffect(words, typingSpeed = 70, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        typingSpeed / 2
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

export default function Home() {
  const typed = useTypingEffect(PROFILE.roles);
  const initials = PROFILE.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div>
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="rounded-xl border border-[#23262E] bg-[#14161C] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#23262E] bg-[#181B22]">
            <Terminal size={13} className="text-[#4FD1C5]" />
            <span className="font-mono text-xs text-[#7A8290]">
              zsh — whoami
            </span>
          </div>

          <div className="px-5 sm:px-10 py-10 sm:py-16">
            <p className="font-mono text-xs sm:text-sm text-[#4FD1C5] mb-4">
              <span className="text-[#7A8290]">~/portfolio $</span> whoami
            </p>

            <h1 className="font-[Space_Grotesk,ui-sans-serif] text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
              {PROFILE.name}
            </h1>

            <p className="mt-4 font-mono text-lg sm:text-xl text-[#F2A65A] min-h-[1.75rem]">
              {typed}
              <span className="inline-block w-[9px] h-[1.1em] align-middle bg-[#F2A65A] ml-1 animate-pulse" />
            </p>

            <p className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#9BA3AF]">
              {PROFILE.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-[#F2A65A] text-[#14161C] px-5 py-2.5 text-sm font-medium hover:bg-[#f5b678] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A65A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1116]"
              >
                View projects
                <ArrowRight size={15} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#2C303A] px-5 py-2.5 text-sm font-medium text-[#E6E8EB] hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1C5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1116]"
              >
                Get in touch
              </Link>

              <div className="flex items-center gap-1 ml-1">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-[#7A8290] hover:text-[#E6E8EB] transition-colors"
                >
                <FiGithub  size={18} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 text-[#7A8290] hover:text-[#E6E8EB] transition-colors"
                >
                  <CiLinkedin size={18} />

                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email"
                  className="p-2 text-[#7A8290] hover:text-[#E6E8EB] transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About teaser ---------------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionEyebrow path="~/about.md" />
        <div className="mt-6 grid md:grid-cols-[220px_1fr] gap-8 sm:gap-12 items-start">
          <div className="mx-auto md:mx-0 w-40 h-40 sm:w-48 sm:h-48 rounded-xl border border-[#23262E] bg-gradient-to-br from-[#1B1E26] to-[#14161C] flex items-center justify-center">
            <span className="font-[Space_Grotesk,ui-sans-serif] text-4xl text-[#F2A65A]">
              {initials}
            </span>
          </div>
          <div>
            <p className="text-[15px] sm:text-base leading-relaxed text-[#C4C9D1]">
              {PROFILE.bio}
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-[#4FD1C5] hover:text-[#7fe4da] transition-colors"
            >
              Read full bio
              <ArrowRight size={14} />
            </Link>

            {/* Skills */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {SKILLS.map(({ group, items }) => {
                const Icon = GROUP_ICON[group];
                return (
                  <div
                    key={group}
                    className="rounded-lg border border-[#23262E] bg-[#14161C] p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={15} className="text-[#4FD1C5]" />
                      <span className="font-mono text-xs uppercase tracking-wider text-[#7A8290]">
                        {group}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[13px] text-[#C4C9D1]"
                        >
                          <span className="text-[#4FD1C5]">import</span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Featured projects ---------------- */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex items-center justify-between">
          <SectionEyebrow path="~/projects" />
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="group rounded-lg border border-[#23262E] bg-[#14161C] overflow-hidden hover:border-[#3A3F4B] transition-colors"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#23262E] bg-[#181B22]">
                <div className="flex items-center gap-2 min-w-0">
                  <FileCode2 size={14} className="text-[#F2A65A] shrink-0" />
                  <span className="font-mono text-[13px] text-[#C4C9D1] truncate">
                    {project.file}
                  </span>
                </div>
                <ExternalLink
                  size={14}
                  className="text-[#7A8290] group-hover:text-[#4FD1C5] shrink-0 transition-colors"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[14px] leading-relaxed text-[#9BA3AF]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-1 rounded border border-[#2C303A] text-[#7A8290]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------------- Experience timeline ---------------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionEyebrow path="~/experience" tag="git log --oneline" />
        <div className="mt-6 border-l border-[#23262E] ml-2">
          {TIMELINE.map((entry) => (
            <div key={entry.hash} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-[#14161C] border-2 border-[#4FD1C5] flex items-center justify-center">
                <GitCommit size={9} className="text-[#4FD1C5]" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-[#F2A65A]">
                  {entry.hash}
                </span>
                <span className="font-medium text-[#E6E8EB]">{entry.role}</span>
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
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-xl border border-[#23262E] bg-[#14161C] px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-sm text-[#4FD1C5]">
              <span className="text-[#7A8290]">$</span> Let's build something
              worth shipping.
            </p>
            <p className="mt-2 text-[15px] text-[#C4C9D1] max-w-md">
              Open to full-time roles and select freelance projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#F2A65A] text-[#14161C] px-5 py-2.5 text-sm font-medium hover:bg-[#f5b678] transition-colors shrink-0"
          >
            Contact me
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionEyebrow({ path, tag }) {
  return (
    <div className="flex items-baseline gap-3">
      <h2 className="font-mono text-sm text-[#4FD1C5]">{path}</h2>
      {tag && (
        <span className="font-mono text-xs text-[#4A4F5A]">// {tag}</span>
      )}
    </div>
  );
}
