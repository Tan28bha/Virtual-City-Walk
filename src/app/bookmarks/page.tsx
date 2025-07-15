"use client";

import { useEffect, useState } from "react";
import { landmarks } from "@/utils/tourData";
import LandmarkCard from "@/components/LandmarkCard";

export default function BookmarksPage() {
  const [bookmarkedLandmarks, setBookmarkedLandmarks] = useState<typeof landmarks>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const matched = landmarks.filter(l => saved.includes(l.name));
    setBookmarkedLandmarks(matched);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">
        🔖 Bookmarked Landmarks
      </h1>

      {bookmarkedLandmarks.length > 0 ? (
        <div className="space-y-4">
          {bookmarkedLandmarks.map((lm) => (
            <LandmarkCard key={lm.name} {...lm} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          You haven’t bookmarked any places yet. Start exploring!
        </p>
      )}
    </div>
  );
}
