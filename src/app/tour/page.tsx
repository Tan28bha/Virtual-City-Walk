"use client";

import MapView from "@/components/MapView";
import Compass from "@/components/Compass";
import FloatingNavBar from "@/components/FloatingNavBar";
import LandmarkCard from "@/components/LandmarkCard";
import { landmarks } from "@/utils/tourData";

export default function TourPage() {
  return (
    <main className="p-6 bg-white dark:bg-black min-h-screen transition-all">
      <Compass />
      <MapView />
      <h2 className="text-2xl font-bold mt-6 mb-4 text-indigo-800 dark:text-indigo-300 text-center">Landmarks</h2>
      <section id="landmarks" className="grid gap-6">
        {landmarks.map((place, i) => (
          <LandmarkCard key={i} {...place} />
        ))}
      </section>
      <FloatingNavBar />
    </main>
  );
}
