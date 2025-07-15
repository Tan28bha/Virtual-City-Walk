"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BookmarkButton from "@/components/BookmarkButton";



interface Props {
  name: string;
  description: string;
  image: string;
  funFact: string;
}

export default function LandmarkCard({ name, description, image, funFact }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const speak = (text: string) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg flex gap-4 items-center"
    >
      <Image
        src={image}
        alt={name}
        width={96}
        height={96}
        className="w-24 h-24 object-cover rounded-lg dark:brightness-90"
        style={{ objectFit: "cover" }}
      />
      <div>
      
        <div className="flex-1 justify-between items-center">
          <h3 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">{name}</h3>
          <BookmarkButton landmark={name} />
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
        <p className="text-base text-green-700  mt-1">💡 {funFact}</p>
        <button 
          onClick={() => speak(description)} 
          className="mt-2 text-sm text-blue-200 hover:underline"
          aria-label={`Listen to description of ${name}`}
        >
          🎧 Listen
        </button>
      </div>
    </motion.div>
  );
}
