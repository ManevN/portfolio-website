import Link from "next/link";
import { blogPosts, BlogPost } from "../../data/blogPosts";

export default function Blog() {
  return (
    <main className="w-full px-2 sm:px-4 py-6 animate-fade-in min-h-[60vh] flex flex-col items-center justify-start">
      <section className="bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-xl p-0 max-w-3xl w-full border border-gray-200 dark:border-gray-800 mt-8 mb-8">
        <div className="px-6 pt-6 pb-3 border-b border-gray-200 dark:border-gray-800 flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-indigo-700 dark:text-indigo-300 mb-1 leading-tight">Blog</h1>
          <p className="text-base text-gray-600 dark:text-gray-400">Insights and articles on software engineering, systems, and technology.</p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {blogPosts.map((post: BlogPost) => (
            <li key={post.slug} className="px-6 py-5 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{post.date}</p>
                <p className="text-base text-gray-700 dark:text-gray-300">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
