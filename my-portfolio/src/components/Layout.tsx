'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">Nenad Manev</h1>
        </Link>

        <nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <ul
            className={`md:flex md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform ${
              menuOpen ? 'translate-y-0' : '-translate-y-full'
            } md:translate-y-0`}
          >
            <li className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">
              <Link href="/">Home</Link>
            </li>
             <li className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">
              <Link href="/about">About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">
              <Link href="/blog">Blog</Link>
            </li>
           
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6 my-8">{children}</main>

      <footer className="text-center p-6 text-gray-500 text-sm border-t mt-12">
        &copy; {new Date().getFullYear()} Nenad Manev. All rights reserved.
      </footer>
    </>
  );
}
