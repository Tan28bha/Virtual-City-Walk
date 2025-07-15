"use client";

import { useEffect, useRef } from "react";

export default function TourCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw simple route
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(40, 50);
    ctx.lineTo(150, 100);
    ctx.lineTo(260, 50);
    ctx.strokeStyle = "#4f46e5";
    ctx.lineWidth = 4;
    ctx.setLineDash([6, 4]);
    ctx.stroke();
  }, []);

  return (
    <div className="overflow-x-auto w-full mb-6">
      <canvas
        ref={canvasRef}
        width={400}
        height={120}
        className="mx-auto border border-gray-300 rounded-lg shadow"
      />
    </div>
  );
}
