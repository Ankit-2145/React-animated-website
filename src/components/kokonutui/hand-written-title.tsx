"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export default function HandWrittenTitle({ title }: HandWrittenTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div ref={ref} className="relative w-full max-w-6xl mx-auto py-24">
      <div className="absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full h-full"
        >
          <motion.path
            d="M 950 90 
               C 1250 300, 1050 480, 600 520
               C 250 520, 150 480, 150 300
               C 150 120, 350 80, 600 80
               C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-black dark:text-white opacity-90"
          />
        </motion.svg>
      </div>
      <div className="relative text-center z-10 flex flex-col items-center justify-center">
        <motion.h1
          className="text-3xl md:text-4xl text-center text-foreground tracking-wide leading-tight flex max-w-lg items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
