export default function Blog() {
  return (
    <main className="w-full px-6 py-12 animate-fade-in min-h-[60vh] flex flex-col items-center justify-center">
      <section className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Blog posts will be listed here.</p>
      </section>
    </main>
  );
}
