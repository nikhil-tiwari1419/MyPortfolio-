import Link from "next/link";
import { FileCode2, ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS, PROFILE } from "@/lib/data";

export const metadata = { title: `Blog — ${PROFILE.name}` };

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <p className="font-mono text-sm text-[#4FD1C5]">~/blog</p>
      <h1 className="mt-3 font-[Space_Grotesk,ui-sans-serif] text-3xl sm:text-4xl font-medium tracking-tight">
        Notes on building things
      </h1>
      <p className="mt-3 text-[15px] sm:text-base text-[#C4C9D1] max-w-xl">
        Short write-ups on frontend architecture, tooling, and the decisions
        behind the projects I ship.
      </p>

      <div className="mt-10 space-y-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group block rounded-lg border border-[#23262E] bg-[#5d5e624f] overflow-hidden hover:border-[#4FD1C5] hover:bg-[#789bf6] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b-2 border-[#23262E] bg-[#595e5d] transition-colors">
              <FileCode2 size={14} className="text-[#F2A65A] shrink-0" />
              <span className="font-mono text-[13px] text-[#C4C9D1] truncate">
                {post.id}.mdx
              </span>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#1a1b1d]">
                <Calendar size={13} />
                {formatDate(post.date)}
              </div>
              <h2 className="mt-2 font-medium text-lg text-[#111212] group-hover:text-[#dfe9e8] transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#303132] ">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-[#4f76d1 group-hover:text-[#e73030] transition-colors] group-hover:translate-x-1 transition-all">
                Read post
                <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
