import { aboutMe } from '@/data/about';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-2">{aboutMe.name}</h1>
      <h2 className="text-xl text-indigo-700 mb-4">{aboutMe.title}</h2>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">{aboutMe.summary}</p>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {aboutMe.tags.map((tag) => (
          <span key={tag} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-6 mb-8">
        <a href={`mailto:${aboutMe.contact.email}`} className="text-indigo-600 hover:underline">Email</a>
        <a href={`https://linkedin.com/in/${aboutMe.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
        <a href={`https://github.com/${aboutMe.contact.github}`} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
      </div>

      <a
        href="/about"
        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition mb-2"
      >
        Learn more about me
      </a>
    </main>
  );
}
