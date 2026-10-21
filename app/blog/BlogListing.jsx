"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileCode2,
  Search,
  Terminal,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogdata";

const CATEGORIES = [
  "All posts",
  "React",
  "Node.js",
  "CSS",
  "Backend",
  "Authentication",
  "Development",
];

function getCategory(post) {
  const id = post.id.toLowerCase();

  if (
    id.includes("react") ||
    id.includes("router") ||
    id.includes("prop-drilling") ||
    id.includes("state-management")
  ) {
    return "React";
  }

  if (id.includes("css") || id.includes("tailwind")) {
    return "CSS";
  }

  if (
    id.includes("nodejs") ||
    id.includes("module") ||
    id.includes("express") ||
    id.includes("cors") ||
    id.includes("axios") ||
    id.includes("seed-data")
  ) {
    return id.includes("module") || id.includes("nodejs")
      ? "Node.js"
      : "Backend";
  }

  if (
    id.includes("auth") ||
    id.includes("token") ||
    id.includes("protected") ||
    id.includes("bcrypt")
  ) {
    return "Authentication";
  }

  return "Development";
}

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getReadingTime(content) {
  return Math.max(
    1,
    Math.ceil(content.trim().split(/\s+/).length / 200)
  );
}

function CodeIllustration() {
  return (
    <div className="relative hidden min-h-64 items-center justify-center overflow-hidden border-l border-slate-200 bg-gradient-to-br from-teal-50 via-white to-indigo-50 p-8 md:flex">
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-teal-300/30 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="relative w-full max-w-xs rounded-xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
          </div>
          <FileCode2 size={15} className="text-slate-400" />
        </div>

        <div className="mt-5 space-y-3">
          <div className="h-2 w-3/5 rounded-full bg-teal-500/80" />
          <div className="h-2 w-full rounded-full bg-slate-200" />
          <div className="h-2 w-4/5 rounded-full bg-slate-200" />
          <div className="h-2 w-2/5 rounded-full bg-violet-400/70" />
        </div>

        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="font-mono text-xs text-teal-700">
            {"<build.something />"}
          </p>
          <p className="mt-2 font-mono text-[10px] text-slate-500">
            // learn · build · improve
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlogListing() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All posts");
  const [sort, setSort] = useState("newest");

  const posts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        category === "All posts" || getCategory(post) === category;

      const searchableText =
        `${post.title} ${post.excerpt} ${post.content} ${post.id}`.toLowerCase();

      return matchesCategory && searchableText.includes(query);
    }).sort((a, b) =>
      sort === "newest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date)
    );
  }, [search, category, sort]);

  const featured = posts[0];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
          <Terminal size={16} className="text-teal-600" />
          <span className="text-teal-700">~/blog</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500">developer-notes</span>
        </div>

        {/* Hero */}
        <section className="mt-7 grid items-center gap-8 border-b border-slate-200 pb-10 md:grid-cols-[1fr_auto] md:pb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
              Ideas, code &amp; engineering
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Notes on building{" "}
              <span className="text-teal-600">things.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Practical notes on React, Node.js, frontend architecture,
              authentication, and the engineering decisions behind the
              projects I build.
            </p>

            <div className="mt-5 flex items-center gap-2 font-mono text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              {BLOG_POSTS.length} articles
              <span className="text-slate-300">·</span>
              Always learning, always building
            </div>
          </div>

          <div className="hidden h-36 w-36 items-center justify-center rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-slate-50 md:flex">
            <FileCode2
              size={62}
              strokeWidth={1.1}
              className="text-teal-600"
            />
          </div>
        </section>

        {/* Search */}
        <section className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles, topics, technologies..."
                aria-label="Search blog articles"
                className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sort articles"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>

          {/* Category filters */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                  category === item
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-slate-300 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Featured article */}
        {featured && (
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                {search || category !== "All posts"
                  ? "Matching articles"
                  : "Featured article"}
              </p>
              <span className="font-mono text-xs text-slate-400">
                01 / {String(posts.length).padStart(2, "0")}
              </span>
            </div>

            <Link
              href={`/blog/${featured.id}`}
              className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:border-teal-500 hover:shadow-md md:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs text-teal-700">
                  {getCategory(featured)}
                </span>

                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                  {featured.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    {formatDate(featured.date)}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={14} />
                    {getReadingTime(featured.content)} min read
                  </span>
                </div>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-teal-700">
                  Read article
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>

              <CodeIllustration />
            </Link>
          </section>
        )}

        {/* Article grid */}
        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              All articles
            </h2>
            <span className="font-mono text-xs text-slate-500">
              {posts.length} results
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
              <Search size={26} className="mx-auto text-slate-400" />
              <p className="mt-4 font-medium text-slate-900">
                No articles found
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All posts");
                }}
                className="mt-5 text-sm text-teal-700 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {posts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group flex min-h-60 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-teal-500 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-md border border-teal-200 bg-teal-50 px-2.5 py-1 font-mono text-[11px] text-teal-700">
                      {getCategory(post)}
                    </span>

                    <span className="font-mono text-xs text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-medium leading-snug text-slate-900 transition group-hover:text-teal-700">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <span className="font-mono text-xs text-slate-500">
                      {formatDate(post.date)}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-teal-700">
                      Read article
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 pt-6 text-center">
          <p className="font-mono text-xs text-slate-500">
            Built with curiosity. Documented in code.
          </p>
        </footer>
      </div>
    </main>
  );
}