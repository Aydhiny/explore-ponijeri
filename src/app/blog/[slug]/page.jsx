import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
};

export default function PostPage({ params }) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div
        className="relative py-16 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a1628 0%, #001f3f 50%, #002F5A 100%)" }}
      >
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(0,132,255,0.12) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/blog" className="hover:text-white/70 transition-colors flex items-center gap-1.5">
              <FaArrowLeft className="text-xs" />
              Blog
            </Link>
            <span>/</span>
            <span className="text-main-color-lighter-green truncate max-w-xs">{post.data.title}</span>
          </div>

          <h1 className="font-playwrite-hr text-3xl sm:text-5xl font-bold text-white leading-tight">
            {post.data.title}
          </h1>

          {post.data.date && (
            <div className="flex items-center gap-2 mt-4 text-white/40 text-sm">
              <FaCalendarAlt className="text-main-color-lighter-green" />
              <span>{new Date(post.data.date).toLocaleDateString("bs-BA")}</span>
            </div>
          )}
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div
          className="rounded-2xl p-6 sm:p-10"
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0,132,255,0.1)",
            boxShadow: "0 4px 24px rgba(0,47,90,0.08)",
          }}
        >
          <Markdown
            className="prose prose-blue max-w-none text-gray-700 text-base sm:text-lg leading-relaxed
              [&_h1]:font-playwrite-hr [&_h1]:text-main-color-dark-green [&_h1]:text-3xl [&_h1]:mb-4
              [&_h2]:font-jakarta [&_h2]:font-bold [&_h2]:text-main-color-dark-green [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3
              [&_h3]:font-jakarta [&_h3]:font-semibold [&_h3]:text-main-color-dark-green [&_h3]:mt-6 [&_h3]:mb-2
              [&_p]:mb-4 [&_p]:text-gray-600
              [&_a]:text-main-color-lighter-green [&_a]:underline [&_a]:hover:text-main-color-dark-green
              [&_strong]:text-main-color-dark-green [&_strong]:font-semibold
              [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_li]:mb-1 [&_li]:text-gray-600
              [&_blockquote]:border-l-4 [&_blockquote]:border-main-color-lighter-green [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500"
          >
            {post.content}
          </Markdown>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(0,132,255,0.08)",
              border: "1px solid rgba(0,132,255,0.15)",
              color: "#002F5A",
            }}
          >
            <FaArrowLeft className="text-xs text-main-color-lighter-green" />
            Nazad na Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
