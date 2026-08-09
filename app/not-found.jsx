import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 sm:py-32 text-center">
      <div className="inline-block rounded-xl border border-[#23262E] bg-[#14161C] overflow-hidden text-left w-full">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#23262E] bg-[#181B22]">
          <Terminal size={13} className="text-[#4FD1C5]" />
          <span className="font-mono text-xs text-[#7A8290]">zsh — error</span>
        </div>
        <div className="p-8 sm:p-10">
          <p className="font-mono text-sm text-[#F2A65A]">
            Error 404: route_not_found
          </p>
          <h1 className="mt-3 font-[Space_Grotesk,ui-sans-serif] text-3xl sm:text-4xl font-medium tracking-tight">
            This page doesn't exist
          </h1>
          <p className="mt-4 text-[15px] text-[#9BA3AF]">
            The path you followed doesn't resolve to anything on this site.
            Double-check the URL, or head back home.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#F2A65A] text-[#14161C] px-5 py-2.5 text-sm font-medium hover:bg-[#f5b678] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
