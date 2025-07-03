'use client';

import { aboutMe } from '@/data/about';

export default function About() {
  return (
    <main className="w-full px-6 py-12 space-y-16 text-base text-gray-800 dark:text-gray-200 animate-fade-in">
      <header className="space-y-2 text-center">
        <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">{aboutMe.name}</h1>
        <h2 className="text-2xl text-indigo-600 dark:text-indigo-300 font-semibold mb-4">{aboutMe.title}</h2>
      </header>

      <section className="rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Contact</h3>
        <ul className="grid sm:grid-cols-2 gap-y-2">
          <li><strong>Email:</strong> <a href={`mailto:${aboutMe.contact.email}`} className="text-indigo-600 hover:underline">{aboutMe.contact.email}</a></li>
          <li><strong>Mobile:</strong> {aboutMe.contact.mobile}</li>
          <li><strong>LinkedIn:</strong> <a href={`https://linkedin.com/in/${aboutMe.contact.linkedin}`} target="_blank" className="text-indigo-600 hover:underline" rel="noreferrer">{aboutMe.contact.linkedin}</a></li>
          <li><strong>GitHub:</strong> <a href={`https://github.com/${aboutMe.contact.github}`} target="_blank" className="text-indigo-600 hover:underline" rel="noreferrer">{aboutMe.contact.github}</a></li>
        </ul>
      </section>

      <section className="rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">About Me</h3>
        <p className="leading-relaxed text-lg">{aboutMe.summary}</p>
      </section>

      <section className="rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Skills & Tags</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {aboutMe.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100 px-3 py-1 rounded-full text-sm font-medium shadow hover:scale-105 transition-transform"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Certifications</h3>
        <ul className="list-disc list-inside space-y-1">
          {aboutMe.certifications.map((cert, index) => (
            <li key={index}>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
        <div className="space-y-8">
          {aboutMe.experience.map((job, idx) => (
            <article key={idx} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-lg font-semibold">{job.role}</h4>
                {job.period && (
                  <span className="text-sm text-gray-500">{job.period}</span>
                )}
              </div>
              <p className="leading-relaxed">{job.description}</p>

              {job.responsibilities && (
                <div>
                  <p className="font-medium mt-2">Responsibilities:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="font-medium mt-2">Technologies involved:</p>
                <ul className="list-disc list-inside space-y-1">
                  {job.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <p>{aboutMe.education.school}</p>
        <p>{aboutMe.education.program}</p>
      </section>
    </main>
  );
}
