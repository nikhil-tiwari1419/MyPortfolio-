
import { PROFILE } from "@/lib/data";
import BlogListing from "./BlogListing";

export const metadata = {
  title: `Blog — ${PROFILE.name}`,
  description:
    "Technical articles on React, Node.js, frontend architecture, authentication, and backend development.",
  openGraph: {
    title: `Blog — ${PROFILE.name}`,
    description:
      "Practical notes on software engineering, frontend architecture, and backend development.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogListing />;
}

