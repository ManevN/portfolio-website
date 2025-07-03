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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900 transition-colors">
      <section className="w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md flex flex-col items-center text-center border border-indigo-100 dark:border-gray-800">
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

        <div className="flex gap-6 mb-8">
          <a
            href={`mailto:${aboutMe.contact.email}`}
            className="text-indigo-600 dark:text-indigo-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Email
          </a>
          <a
            href={`https://linkedin.com/in/${aboutMe.contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 dark:text-indigo-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`https://github.com/${aboutMe.contact.github}`}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 dark:text-indigo-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            GitHub
          </a>
        </div>

        <a
          href="/about"
          className="inline-block bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-indigo-600 hover:to-blue-600 hover:scale-105 transition-all mb-2"
        >
          Learn more about me
        </a>
      </section>
    </main>
  );
}
