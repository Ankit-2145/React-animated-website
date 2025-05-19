"use client";

import { Novatrix } from "uvcanvas";
import { Button } from "@/components/ui/button";
import { ArrowDownCircleIcon } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { TextAnimate } from "@/components/magicui/text-animate";

export const Hero = () => {
  const springOptions = { bounce: 0.1 };
  return (
    <>
      <section className="font-WorkSans py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Left column: Main heading and subheading */}
            <div className="space-y-4 text-left font-SpaceGrotesk">
              <h1 className="text-3xl md:text-5xl text-foreground tracking-wide uppercase">
                {/* Animated text for main heading */}
                We&apos;re Building,
                <br /> Cool Experiences
              </h1>
              {/* Subheading with animated text */}
              <TextAnimate
                as="h2"
                className="text-base text-muted-foreground"
                animation="slideLeft"
                by="word"
              >
                AI / WEB / APPS / UI-UX / BRANDING
              </TextAnimate>
            </div>

            {/* Right column: Description and CTA buttons */}
            <div className="flex flex-col gap-4 max-w-sm">
              {/* Animated description text */}
              <TextAnimate
                as="p"
                className="text-base text-left text-muted-foreground"
                animation="slideLeft"
                by="word"
              >
                Crafting awesome stories, killer designs, and powerful software
                to make brands stand out.
              </TextAnimate>
              {/* Call-to-action buttons */}
              <div className="flex flex-wrap justify-start gap-4">
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  {/* Primary CTA button */}
                  <Button variant="default" size="default">
                    <Magnetic
                      intensity={0.1}
                      springOptions={springOptions}
                      actionArea="global"
                      range={200}
                    >
                      <span>Get in touch </span>
                    </Magnetic>
                    <ArrowDownCircleIcon className="-rotate-[120deg] ml-2" />
                  </Button>
                </Magnetic>
                {/* Secondary CTA button */}
                <Button variant="secondary" size="default">
                  See Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Velustro Gradient Animation */}
        <div className="mt-10 max-w-6xl mx-auto h-64 md:h-96 overflow-hidden rounded-md">
          <Novatrix />
        </div>
      </section>
    </>
  );
};
