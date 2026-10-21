import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  FileCode2,
  Terminal,
} from "lucide-react";
import { PROFILE } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blogdata";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((item) => item.id === id);

  return {
    title: post ? `${post.title} — ${PROFILE.name}` : "Post not found",
    description: post?.excerpt,
  };
}

function formatDate(date) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCategory(post) {
  const id = post.id.toLowerCase();

  if (id.includes("react") || id.includes("router") || id.includes("prop-drilling"))
    return "React";
  if (id.includes("css") || id.includes("tailwind")) return "CSS";
  if (
    id.includes("nodejs") ||
    id.includes("express") ||
    id.includes("cors") ||
    id.includes("axios") ||
    id.includes("seed-data")
  )
    return "Backend";
  if (
    id.includes("auth") ||
    id.includes("token") ||
    id.includes("protected") ||
    id.includes("bcrypt")
  )
    return "Authentication";

  return "Development";
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((item) => item.id === id);

  if (!post) notFound();

  const wordCount = post.content.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const currentIndex = BLOG_POSTS.findIndex((item) => item.id === id);
  const relatedPosts = BLOG_POSTS.filter(
    (item) => item.id !== id && getCategory(item) === getCategory(post)
  ).slice(0, 2);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-teal-700"
        >
          <ArrowLeft size={16} />
          All articles
        </Link>

        <article className="mt-10">
          <header className="border-b border-slate-200 pb-9">
            <div className="flex items-center gap-2 font-mono text-xs text-teal-700">
              <Terminal size={15} />
              <span>~/blog/{post.id}</span>
            </div>

            <div className="mt-6">
              <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs text-teal-700">
                {getCategory(post)}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <CalendarDays size={15} className="text-teal-600" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={15} className="text-teal-600" />
                {readTime} min read
              </span>
              <span className="flex items-center gap-2">
                <FileCode2 size={15} className="text-teal-600" />
                Technical notes
              </span>
            </div>
          </header>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-teal-700">
              In this article
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {post.excerpt}
            </p>
            <div className="mt-4 h-px bg-slate-200" />
            <p className="mt-4 text-xs text-slate-500">
              A practical look at the concepts, trade-offs, and implementation
              decisions behind this topic.
            </p>
          </div>

          <div className="prose-custom mt-10 max-w-3xl">
            <p className="text-base leading-8 text-slate-700 sm:text-[17px]">
              {post.content}
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg border border-teal-200 bg-white p-3">
                <FileCode2 size={23} className="text-teal-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Keep exploring
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Software engineering is about understanding trade-offs,
                  writing maintainable code, and learning from implementation
                  decisions.
                </p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900"
                >
                  Explore all articles
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="mt-14 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Related articles
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.id}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-500 hover:shadow-md"
                >
                  <p className="font-mono text-xs text-teal-700">
                    {getCategory(item)}
                  </p>
                  <h3 className="mt-3 font-medium leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 flex justify-between border-t border-slate-200 pt-6 text-sm">
          <Link
            href="/blog"
            className="text-slate-500 transition hover:text-teal-700"
          >
            ← Back to blog
          </Link>
          <span className="font-mono text-xs text-slate-500">
            Article {currentIndex + 1} / {BLOG_POSTS.length}
          </span>
        </div>
      </div>
    </main>
  );
}