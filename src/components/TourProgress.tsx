"use client";

import { useEffect, useState } from "react";

export default function TourProgress({ total }: { total: number }) {
  const [visited, setVisited] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index") || "0");
        if (entry.isIntersecting) {
          setVisited((prev) => Math.max(prev, index + 1));
        }
      });
    });

    const cards = document.querySelectorAll(".landmark-card");
    cards.forEach((el) => observer.observe(el));

    return () => cards.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-100 z-50">
      🏁 Tour Progress: {visited}/{total}
    </div>
  );
}
