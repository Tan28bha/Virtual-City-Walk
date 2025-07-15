"use client";

import { useEffect, useState } from "react";

export default function BookmarkButton({ landmark }: { landmark: string }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    // On mount, check if already bookmarked
    const stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarked(stored.includes(landmark));
  }, [landmark]);

  const syncTask = async (action: "add" | "remove") => {
    const taskFn = () => {
      console.log(`📡 ${action === "add" ? "Synced bookmark for" : "Unbookmarked"}: ${landmark}`);
      // 🔁 Replace with real API call if needed
    };

    type Scheduler = {
      postTask: (fn: () => void, options?: { priority?: string }) => Promise<void>;
    };

    const scheduler = (navigator as Navigator & { scheduler?: Scheduler }).scheduler;

    if (scheduler && typeof scheduler.postTask === "function") {
      await scheduler.postTask(taskFn, { priority: "background" });
    } else {
      taskFn(); // fallback
    }
  };

  const handleToggle = async () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (bookmarked) {
      // Remove from bookmarks
      const updated = bookmarks.filter((item: string) => item !== landmark);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setBookmarked(false);
      await syncTask("remove");
    } else {
      // Add to bookmarks
      const updated = [...bookmarks, landmark];
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setBookmarked(true);
      await syncTask("add");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`mt-2 px-4 py-2 rounded-md text-sm transition ${
        bookmarked
          ? "bg-gray-400 hover:bg-gray-500 text-white"
          : "bg-indigo-600 hover:bg-indigo-700 text-white"
      }`}
    >
      {bookmarked ? "Unbookmark ❌" : "Bookmark"}
    </button>
  );
}
