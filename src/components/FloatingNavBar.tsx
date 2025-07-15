"use client";

import Link from "next/link";

export default function FloatingNavBar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-300 shadow-lg rounded-full px-6 py-3 flex gap-4 z-50">
      <Link href="/" className="text-pink-400 hover:text-indigo-800">Home</Link>
      <a href="/tour" className="text-pink-400 hover:text-indigo-800">Tour</a>
      <a href="#landmarks" className="text-pink-400 hover:text-indigo-800">Landmarks</a>
      <a href="/bookmarks" className="text-pink-400 hover:text-indigo-800">Bookmarks</a>
      
    </nav>
  );
}
