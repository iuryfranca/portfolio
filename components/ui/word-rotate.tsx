"use client";

import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type WordsProps = {
  word: string;
  color: string;
}

interface WordRotateProps {
  words: WordsProps[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
  onChange?: (color: string) => void;
}

export function WordRotate({
  words,
  duration = 3000,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
  onChange,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  useEffect(() => {
    onChange?.(words[index].color);
  }, [index]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index].word}
          className={cn(className)}
          style={{ color: words[index].color }}
          {...framerProps}  
        >
          <span className="font-semibold">{words[index].word}</span>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
