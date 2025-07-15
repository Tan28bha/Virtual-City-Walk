"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
        🏙 Virtual City Walk
      </h1>

      <div className="flex gap-4 items-center">
        <Link href="/" className="text-sm text-emerald-400 hover:underline">
          Home
        </Link>
      </div>
    </nav>
  );
}
