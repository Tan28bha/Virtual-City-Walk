"use client";

import { useEffect, useState } from "react";

interface Props {
  highRes: string;
  lowRes: string;
  alt?: string;
}

export default function SmartImage({ highRes, lowRes, alt }: Props) {
  const [src, setSrc] = useState(highRes);

  useEffect(() => {
    type NetworkInformation = {
      effectiveType?: string;
      saveData?: boolean;
    };
    const connection: NetworkInformation = (navigator as Navigator & { connection?: NetworkInformation }).connection || {};
    const { effectiveType, saveData } = connection;

    const isSlow = effectiveType === "2g" || effectiveType === "3g" || saveData;

    if (isSlow) {
      setSrc(lowRes);
    }
  }, []);

  return (
    <img
      src={src}
      alt={alt}
      className="rounded-xl w-full h-auto shadow transition-all duration-500"
    />
  );
}
