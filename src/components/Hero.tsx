"use client";

import Particles from "@/components/magicui/particles";

export default function Hero() {


  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        We only do the stuff, <br/>
        in which we are really good
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
}
