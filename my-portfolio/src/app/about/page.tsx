'use client';

import { aboutMe } from '@/data/about';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-base text-gray-800 dark:text-gray-200">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">{aboutMe.name}</h1>
        <h2 className="text-2xl text-indigo-600">{aboutMe.title}</h2>
      </header>

      <section>
        <h3 className="text-xl font-semibold mb-2">Contact</h3>
        <ul className="grid sm:grid-cols-2 gap-y-2">
          <li><strong>Email:</strong> <a href={`mailto:${aboutMe.contact.email}`} className="text-indigo-600">{aboutMe.contact.email}</a></li>
          <li><strong>Mobile:</strong> {aboutMe.contact.mobile}</li>
          <li><strong>LinkedIn:</strong> <a href={`https://linkedin.com/in/${aboutMe.contact.linkedin}`} target="_blank" className="text-indigo-600" rel="noreferrer">{aboutMe.contact.linkedin}</a></li>
          <li><strong>GitHub:</strong> <a href={`https://github.com/${aboutMe.contact.github}`} target="_blank" className="text-indigo-600" rel="noreferrer">{aboutMe.contact.github}</a></li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">About Me</h3>
        <p className="leading-relaxed">{aboutMe.summary}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Skills & Tags</h3>
        <div className="flex flex-wrap gap-2">
          {aboutMe.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
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
