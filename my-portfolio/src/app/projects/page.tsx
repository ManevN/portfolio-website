'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-10 text-indigo-700">Projects</h1>

      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400">
              {project.title}
            </h2>
            <p className="mt-2 mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() =>
                setSelected(selected === project.title ? null : project.title)
              }
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
            >
              {selected === project.title ? 'Hide details' : 'Show details'}
            </button>

            {selected === project.title && project.details && (
              <div className="mt-6 prose prose-indigo dark:prose-invert max-w-none">
                <ReactMarkdown>{project.details}</ReactMarkdown>
              </div>
            )}
            <br></br>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-indigo-700 dark:text-indigo-300 font-semibold hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
