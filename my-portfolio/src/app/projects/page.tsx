'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {projects.map((project) => (
        <div
          key={project.title}
          className="border p-6 rounded-lg mb-6 shadow hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={() =>
              setSelected(selected === project.title ? null : project.title)
            }
            className="text-blue-600 hover:underline"
          >
            {selected === project.title ? 'Hide details' : 'Show details'}
          </button>

          {selected === project.title && project.details && (
            <div className="mt-4 prose max-w-none">
              <ReactMarkdown>{project.details}</ReactMarkdown>
            </div>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-3 block"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </main>
  );
}