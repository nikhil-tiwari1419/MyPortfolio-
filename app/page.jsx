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
        <div className="rounded-2xl border border-[#E8EAF0] bg-white overflow-hidden shadow-sm">
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#E8EAF0] bg-[#F9FAFB]">
            <Terminal size={13} className="text-[#0F766E]" />
            <span className="font-mono text-xs text-[#9CA3AF]">
              zsh — whoami
            </span>
          </div>

          <div className="px-5 sm:px-10 py-10 sm:py-16">
            <p className="font-mono text-xs sm:text-sm text-[#0F766E] mb-4">
              <span className="text-[#9CA3AF]">~/portfolio $</span> whoami
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-[#111827]">
              {PROFILE.name}
            </h1>

            <p className="mt-4 font-mono text-lg sm:text-xl text-[#D97706] min-h-7">
              {typed}
              <span className="inline-block w-2.25 h-[1.1em] align-middle bg-[#D97706] ml-1 animate-blink" />
            </p>

            <p className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#6B7280]">
              {PROFILE.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0F766E] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#0D6B63] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
              >
                View projects
                <ArrowRight size={15} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#D1D5DB] px-5 py-2.5 text-sm font-medium text-[#374151] hover:border-[#0F766E] hover:text-[#0F766E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
              >
                Get in touch
              </Link>

              <div className="flex items-center gap-1 ml-1">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-[#0f67ff] hover:text-[#1A1D26] transition-colors rounded-md hover:bg-[#F3F4F6]"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1 text-[#ff0000] hover:text-[#0077B5] transition-colors rounded-md hover:bg-[#F3F4F6]"
                >
                  <CiLinkedin size={20} />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email"
                  className="p-2 text-[#8c00ff] hover:text-[#06abd9] transition-colors rounded-md hover:bg-[#F3F4F6]"
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
          <div className="mx-auto md:mx-0 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border border-[#E8EAF0] bg-linear-to-br from-[#F0FDF4] to-[#ECFDF5] flex items-center justify-center shadow-sm">
            <span className="text-4xl font-semibold text-[#0F766E]">
              {initials}
            </span>
          </div>
          <div>
            <p className="text-[15px] sm:text-base leading-relaxed text-[#4B5563]">
              {PROFILE.bio}
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-[#0F766E] hover:text-[#0D6B63] font-medium transition-colors"
            >
              Read full bio
              <ArrowRight size={15} />
            </Link>

            {/* Skills */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {SKILLS.map(({ group, items }) => {
                const Icon = GROUP_ICON[group];
                return (
                  <div
                    key={group}
                    className="rounded-xl border border-[#E8EAF0] bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-[#E6F7F5] flex items-center justify-center">
                        <Icon size={14} className="text-[#0F766E]" />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#9CA3AF] font-medium">
                        {group}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[13px] text-[#4B5563]"
                        >
                          <span className="text-[#0F766E]">import</span>{" "}
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
              className="group rounded-xl border border-[#E8EAF0] bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#D1D5DB] transition-all duration-200"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E8EAF0] bg-[#F9FAFB]">
                <div className="flex items-center gap-2 min-w-0">
                  <FileCode2 size={14} strokeWidth={2.5} className="text-[#D97706] shrink-0" />
                  <span className="font-mono text-[13px] text-[#6B7280] truncate">
                    {project.file}
                  </span>
                </div>
                <ExternalLink
                  size={14}
                  strokeWidth={2.5}
                  className="text-[#D1D5DB] group-hover:text-[#0F766E] shrink-0 transition-colors"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[14px] leading-relaxed text-[#6B7280]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-1 rounded-md border border-[#E8EAF0] bg-[#F9FAFB] text-[#6B7280]"
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
        <div className="mt-6 border-l-2 border-[#E8EAF0] ml-2">
          {TIMELINE.map((entry) => (
            <div key={entry.hash} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-2.25 top-0.5 w-4 h-4 rounded-full bg-white border-2 border-[#0F766E] flex items-center justify-center shadow-sm">
                <GitCommit size={9} className="text-[#0F766E]" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-[#D97706] font-medium">
                  {entry.hash}
                </span>
                <span className="font-semibold text-[#111827]">{entry.role}</span>
                <span className="text-sm text-[#9CA3AF]">@ {entry.org}</span>
                <span className="ml-auto font-mono text-xs text-[#9CA3AF]">
                  {entry.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#6B7280] max-w-xl">
                {entry.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-2xl border border-[#E8EAF0] bg-linear-to-br from-[#ECFDF5] to-[#F0FDFA] px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <p className="font-mono text-sm text-[#0F766E] font-medium">
              <span className="text-[#9CA3AF]">$</span> Let&apos;s build something
              worth shipping.
            </p>
            <p className="mt-2 text-[15px] text-[#6B7280] max-w-md">
              Open to full-time roles and select freelance projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0F766E] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#0D6B63] transition-colors shadow-sm shrink-0"
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
      <h2 className="font-mono text-sm text-[#0F766E] font-medium">{path}</h2>
      {tag && (
        <span className="font-mono text-xs text-[#D1D5DB]">// {tag}</span>
      )}
    </div>
  );
}
