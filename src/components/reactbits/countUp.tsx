"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface StatItem {
  value: number;
  label: string;
}

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const stats: StatItem[] = [
    { value: 20, label: "Projects Delivered" },
    { value: 2, label: "Years of Experience" },
    { value: 1000, label: "Lines of Code Written" },
  ];

  return (
    <div
      className="flex flex-col lg:flex-row-reverse justify-between gap-8 mt-24"
      ref={ref}
    >
      <div className="lg:self-center">
        <h2 className="text-lg text-foreground tracking-wide uppercase">
          Our Journey So Far
        </h2>
      </div>
      <div className="grid grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-20 flex items-end">
              {(inView || hasAnimated) && (
                <div className="flex items-baseline border-t">
                  <span className="text-4xl lg:text-6xl tabular-nums leading-none pt-2">
                    <CountUp
                      start={0}
                      end={stat.value}
                      separator=","
                      duration={2}
                      useEasing={true}
                      preserveValue={true}
                    />
                  </span>
                  <span className="text-2xl lg:text-4xl ml-1">+</span>
                </div>
              )}
            </div>
            <span className="text-base font-SpaceGrotesk mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
