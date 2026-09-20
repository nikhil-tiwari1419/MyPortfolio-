import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, AwardIcon, Calendar, Terminal } from "lucide-react";
import { BLOG_POSTS, PROFILE } from "@/lib/data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  return { title: post ? `${post.title} — ${PROFILE.name}` : "Post not found" };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-sm text-[#d1b54f] hover:text-[#7fe4da] transition-colors"
      >
        <ArrowLeft size={18} />
        back to blog
      </Link>

      <div className="mt-8 rounded-xl border border-[#23262E] bg-[#d6d9e2c7] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#23262E] bg-[#bee1ea]">
          <Terminal size={18} className="text-[#cbd14f]" />
          <span className="font-mono text-xs text-[#2170f8]">
            {post.id}.mdx
          </span>
        </div>
        <div className="p-6 sm:p-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#00050c]">
            <Calendar size={13} />
            {formatDate(post.date)}
          </div>
          <h1 className="mt-3 font-[Space_Grotesk,ui-sans-serif] text-2xl sm:text-3xl font-medium tracking-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#000000]">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
}
