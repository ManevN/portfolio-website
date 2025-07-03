import { aboutMe } from '@/data/about';

const tagColors = [
  'bg-indigo-100 text-indigo-800',
  'bg-blue-100 text-blue-800',
  'bg-teal-100 text-teal-800',
  'bg-purple-100 text-purple-800',
  'bg-pink-100 text-pink-800',
  'bg-emerald-100 text-emerald-800',
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900 transition-colors">
      <section className="w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md flex flex-col items-center text-center border border-indigo-100 dark:border-gray-800 mb-8">
        <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">{aboutMe.name}</h1>
        <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">{aboutMe.title}</h2>
        <p className="mb-6 text-lg text-gray-800 dark:text-gray-200 max-w-2xl">{aboutMe.summary}</p>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {aboutMe.tags.map((tag, i) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm font-semibold shadow-sm transition-colors ${tagColors[i % tagColors.length]} hover:scale-105`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Contact links removed as requested */}

        <a
          href="/about"
          className="inline-block bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-indigo-600 hover:to-blue-600 hover:scale-105 transition-all mb-2"
        >
          Learn more about me
        </a>
      </section>

      <section className="w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md flex flex-col items-center text-center border border-indigo-100 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">Contact Me</h2>
        {/* Stack Overflow link removed as requested */}
        <form
          action="https://formspree.io/f/xovdqwyy"
          method="POST"
          className="w-full max-w-lg mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition-colors mt-2"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
