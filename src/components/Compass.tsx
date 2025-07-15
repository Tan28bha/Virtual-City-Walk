"use client";
import { useEffect, useState } from "react";

export default function Compass() {
  const [direction, setDirection] = useState<number | null>(null);

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.alpha !== null) setDirection(e.alpha);
    };

    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === "function"
    ) {
      (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission().then((response: string) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        }
      });
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-center">
      <div className="w-16 h-16 relative">
        <div
          className="absolute w-1 h-8 bg-red-600 top-0 left-1/2 origin-bottom"
          style={{ transform: `rotate(${direction ?? 0}deg)` }}
        />
      </div>
      <p className="text-xs mt-1 text-gray-700 dark:text-gray-300">
        {direction !== null ? `${Math.round(direction)}°` : "Detecting..."}
      </p>
    </div>
  );
}
