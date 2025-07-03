'use client';

import Link from 'next/link';
import { useState } from 'react';


export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent backdrop-blur-none text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 transition-all shadow-none border-none">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="text-2xl font-extrabold tracking-tight cursor-pointer drop-shadow-lg">Nenad Manev</h1>
          </Link>
        </div>
        <nav className="flex items-center">
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul
            className={`md:flex md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform duration-300 ease-in-out ${
              menuOpen ? 'translate-y-0' : '-translate-y-full'
            } md:translate-y-0 shadow-md md:shadow-none`}
          >
            <li className="px-4 py-2 hover:bg-indigo-700 md:hover:bg-transparent transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-indigo-700 md:hover:bg-transparent transition-colors">
              <Link href="/about">About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-indigo-700 md:hover:bg-transparent transition-colors">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="px-4 py-2 hover:bg-indigo-700 md:hover:bg-transparent transition-colors">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="w-full p-6 my-8 animate-fade-in min-h-[70vh]">{children}</main>

      <footer className="text-center p-6 text-gray-500 text-sm border-t bg-white/70 dark:bg-gray-900/70 backdrop-blur-md w-full fixed bottom-0 left-0 z-40">
        &copy; {new Date().getFullYear()} Nenad Manev. All rights reserved.
      </footer>
    </>
  );
}
