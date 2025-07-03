'use client';

import { aboutMe } from '@/data/about';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-8 prose prose-indigo dark:prose-invert">
      <h1>{aboutMe.name}</h1>
      <h2 className="text-indigo-700">{aboutMe.title}</h2>

      <section className="mb-8">
        <h3>Contact</h3>
        <ul>
          <li>Email: <a href={`mailto:${aboutMe.contact.email}`} className="text-indigo-600">{aboutMe.contact.email}</a></li>
          <li>LinkedIn: <a href={`https://linkedin.com/in/${aboutMe.contact.linkedin}`} target="_blank" className="text-indigo-600" rel="noreferrer">{aboutMe.contact.linkedin}</a></li>
          <li>GitHub: <a href={`https://github.com/${aboutMe.contact.github}`} target="_blank" className="text-indigo-600" rel="noreferrer">{aboutMe.contact.github}</a></li>
          <li>Mobile: {aboutMe.contact.mobile}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3>About Me</h3>
        <p>{aboutMe.summary}</p>
      </section>

      <section className="mb-8">
        <h3>Skills & Tags</h3>
        <div className="flex flex-wrap gap-2">
          {aboutMe.tags.map((tag) => (
            <span key={tag} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3>Certifications</h3>
        <ul className="list-disc list-inside">
          {aboutMe.certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3>Professional Experience</h3>
        {aboutMe.experience.map((job, idx) => (
          <article key={idx} className="mb-6">
            <h4>
              {job.role}
              {job.period && (
                <span className="block text-sm font-normal text-gray-600 dark:text-gray-400">
                  {job.period}
                </span>
              )}
            </h4>
            <p>{job.description}</p>

            {job.responsibilities && (
              <>
                <strong>Responsibilities:</strong>
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <strong>Technologies involved:</strong>
            <ul className="list-disc list-inside">
              {job.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h3>Education</h3>
        <p>{aboutMe.education.school}</p>
        <p>{aboutMe.education.program}</p>
      </section>
    </main>
  );
}
