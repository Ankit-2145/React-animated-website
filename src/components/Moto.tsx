"use client";

import { TextReveal } from "@/components/magicui/text-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Moto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animation starts when the section enters the viewport
  });

  // Control speed (similar to `data-speed`)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Adjust speed effect

  return (
    <motion.div
      ref={ref}
      style={{ y }} // Apply smooth motion
      className="z-10 flex min-h-64 items-center justify-center border bg-white dark:bg-black"
    >
      <TextReveal text="Design. Code. Launch." />
    </motion.div>
  );
}

// Beyond design. Beyond development. Beyond limits.
