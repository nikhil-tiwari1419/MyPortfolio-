"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Terminal, Check } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

import { PROFILE } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — swap this for an API route or form service
    // (e.g. Resend, Formspree) when you're ready to receive real messages.
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
      <p className="font-mono text-sm text-[#4FD1C5]">~/contact</p>
      <h1 className="mt-3 font-[Space_Grotesk,ui-sans-serif] text-3xl sm:text-4xl font-medium tracking-tight">
        Let's talk
      </h1>
      <p className="mt-3 text-[15px] sm:text-base text-[#9BA3AF] max-w-xl">
        Open to full-time roles and select freelance projects. Fill out the
        form or reach me directly — I read every message.
      </p>

      <div className="mt-10 grid sm:grid-cols-[1fr_180px] gap-6">
        <div className="rounded-xl border border-[#23262E] bg-[#14161C] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#23262E] bg-[#181B22]">
            <Terminal size={13} className="text-[#4FD1C5]" />
            <span className="font-mono text-xs text-[#7A8290]">
              zsh — send-message
            </span>
          </div>

          {sent ? (
            <div className="p-6 sm:p-8 flex items-start gap-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#4FD1C5]/10 flex items-center justify-center shrink-0">
                <Check size={14} className="text-[#4FD1C5]" />
              </span>
              <div>
                <p className="font-mono text-sm text-[#4FD1C5]">
                  message queued
                </p>
                <p className="mt-1 text-sm text-[#9BA3AF]">
                  Thanks, {form.name || "there"} — I'll get back to you at{" "}
                  {form.email || "your email"} soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5">
              <Field
                label="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                required
              />
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs text-[#7A8290] mb-1.5"
                >
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  className="w-full rounded-md bg-[#0F1116] border border-[#23262E] px-3 py-2 text-sm text-[#E6E8EB] placeholder:text-[#4A4F5A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1C5] resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-[#F2A65A] text-[#14161C] px-5 py-2.5 text-sm font-medium hover:bg-[#f5b678] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A65A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1116]"
              >
                <Send size={15} />
                Send message
              </button>
            </form>
          )}
        </div>

        <div className="flex sm:flex-col gap-3 sm:gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-2 text-sm text-[#9BA3AF] hover:text-[#E6E8EB] transition-colors"
          >
            <Mail size={16} className="text-[#4FD1C5] shrink-0" />
            <span className="truncate">{PROFILE.email}</span>
          </a>
          <span className="flex items-center gap-2 text-sm text-[#9BA3AF]">
            <MapPin size={16} className="text-[#4FD1C5] shrink-0" />
            {PROFILE.location}
          </span>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#9BA3AF] hover:text-[#E6E8EB] transition-colors"
          >
            <FiGithub size={16} className="text-[#4FD1C5] shrink-0" />
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#9BA3AF] hover:text-[#E6E8EB] transition-colors"
          >
            <CiLinkedin size={16} className="text-[#4FD1C5] shrink-0" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block font-mono text-xs text-[#7A8290] mb-1.5"
      >
        {label}
      </label>
      <input
        id={props.name}
        {...props}
        className="w-full rounded-md bg-[#0F1116] border border-[#23262E] px-3 py-2 text-sm text-[#E6E8EB] placeholder:text-[#4A4F5A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1C5]"
      />
    </div>
  );
}
