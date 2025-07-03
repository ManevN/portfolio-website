import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "../../../data/blogPosts";
import React from "react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p: BlogPost) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="w-full px-2 sm:px-4 py-6 animate-fade-in min-h-[60vh] flex flex-col items-center justify-start">
      <section className="bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-xl p-0 max-w-3xl w-full border border-gray-200 dark:border-gray-800 mt-8 mb-8">
        <div className="px-6 pt-6 pb-3 border-b border-gray-200 dark:border-gray-800 flex flex-col items-start">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-700 dark:text-indigo-300 mb-1 leading-tight">{post.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
        </div>
        <article className="prose dark:prose-invert max-w-none px-6 py-6 text-base leading-relaxed prose-headings:mt-6 prose-headings:mb-2 prose-p:mb-2 prose-ul:mb-2 prose-li:marker:text-indigo-400">
          {post.content.split("\n").map((line: string, i: number) =>
            line.startsWith("### ") ? (
              <h3 key={i}>{line.replace("### ", "")}</h3>
            ) : line.startsWith("- ") ? (
              <ul key={i}><li>{line.replace("- ", "")}</li></ul>
            ) : line.startsWith("**") ? (
              <strong key={i}>{line.replace(/\*\*/g, "")}</strong>
            ) : line === "---" ? (
              <hr key={i} />
            ) : (
              <p key={i}>{line}</p>
            )
          )}
        </article>
      </section>
    </main>
  );
}
