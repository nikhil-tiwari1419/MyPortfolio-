"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Send, Mail, MapPin, Terminal, Check } from "lucide-react";
import { PROFILE } from "@/lib/data";

const inputClass =
  "w-full rounded-lg border border-[#E3E6EC] bg-white px-4 py-3 text-sm text-[#14161C] placeholder:text-[#9AA1AE] focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          title: "New Portfolio Contact Message",
          name: form.name,
          email: form.email,
          time: new Date().toLocaleString(),
          message: form.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Message could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const isValid = form.name && form.email && form.message;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <p className="font-mono text-sm text-[#0F766E]">~/contact</p>
      <h1 className="mt-3 font-[Space_Grotesk,ui-sans-serif] text-3xl sm:text-4xl font-medium tracking-tight text-[#14161C]">
        Let&apos;s work together
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] sm:text-base text-[#5B6270]">
        Have a project in mind? I&apos;m available for full-time roles and select
        freelance work. Reach out and let&apos;s create something great.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Form */}
        <div className="overflow-hidden rounded-xl border border-[#E3E6EC] bg-white">
          <div className="flex items-center gap-2 border-b border-[#E3E6EC] bg-[#F5F7FB] px-4 py-3">
            <Terminal size={13} className="text-[#0F766E]" />
            <span className="font-mono text-xs text-[#5B6270]">contact.jsx</span>
          </div>

          {sent ? (
            <div className="flex min-h-[400px] items-center justify-center p-8 sm:p-10">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F7F5]">
                  <Check size={24} className="text-[#0F766E]" />
                </div>
                <p className="font-mono text-sm font-semibold text-[#0F766E]">
                  Message sent
                </p>
                <p className="mt-2 text-sm text-[#5B6270]">
                  Thanks for reaching out, {form.name || "friend"}. I&apos;ll get
                  back to you soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
              <Field
                label="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                autoComplete="name"
                required
              />
              <Field
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                autoComplete="email"
                required
              />
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-[#5B6270]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={!isValid || loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4FD1C5] px-6 py-3 text-sm font-semibold text-[#14161C] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-3 rounded-lg border border-[#E3E6EC] bg-white p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E6F7F5]">
              <Mail size={18} className="text-[#0F766E]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs text-[#5B6270]">Email</p>
              <p className="truncate text-sm text-[#14161C]">{PROFILE.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-lg border border-[#E3E6EC] bg-white p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FEF1E4]">
              <MapPin size={18} className="text-[#C2711F]" />
            </div>
            <div>
              <p className="font-mono text-xs text-[#5B6270]">Location</p>
              <p className="text-sm text-[#14161C]">{PROFILE.location}</p>
            </div>
          </div>

          <div className="pt-2">
            <p className="mb-3 font-mono text-xs text-[#5B6270]">Connect</p>
            <div className="flex gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex flex-1 items-center justify-center rounded-lg border border-[#E3E6EC] bg-white p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                <FiGithub size={18} className="text-[#14161C]" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex flex-1 items-center justify-center rounded-lg border border-[#E3E6EC] bg-white p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
              >
                <FiLinkedin size={18} className="text-[#14161C]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, ...props }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-xs text-[#5B6270]"
      >
        {label}
      </label>
      <input id={name} name={name} className={inputClass} {...props} />
    </div>
  );
}
