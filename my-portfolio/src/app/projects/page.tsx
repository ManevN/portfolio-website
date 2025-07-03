'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="w-full px-6 py-12 space-y-12 animate-fade-in">
      <h1 className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">Projects</h1>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">{project.title}</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100 px-3 py-1 rounded-full text-xs font-medium shadow hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() =>
                setSelected(selected === project.title ? null : project.title)
              }
              className="self-start mt-auto text-indigo-600 dark:text-indigo-400 hover:underline font-semibold transition-colors"
            >
              {selected === project.title ? 'Hide details' : 'Show details'}
            </button>

            {selected === project.title && project.details && (
              <div className="mt-6 prose prose-indigo dark:prose-invert max-w-none animate-fade-in">
                <ReactMarkdown>{project.details}</ReactMarkdown>
              </div>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-indigo-700 dark:text-indigo-300 font-semibold hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
