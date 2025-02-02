"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "./ui/button";
import { ArrowDownCircleIcon } from "lucide-react";

/**
 * Hero Component
 *
 * This component renders the main hero section of the landing page.
 * It showcases the company's main message and call-to-action buttons.
 *
 * @returns {JSX.Element} The rendered Hero component
 */
export default function Hero() {
  return (
    <section className="font-SpaceGrotesk py-12 md:py-24 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-8 border-b-2">
          {/* Left column: Main heading and subheading */}
          <div className="space-y-4 text-left">
            <h1 className="text-3xl md:text-5xl text-foreground tracking-wide leading-tight uppercase">
              {/* Animated text for main heading */}
              <TextAnimate animation="slideRight" by="character">
                We&apos;re Building,
              </TextAnimate>
              <TextAnimate animation="slideRight" by="character">
                Cool Experiences
              </TextAnimate>
            </h1>
            {/* Subheading with animated text */}
            <h2 className="text-base">
              <TextAnimate animation="slideLeft" by="word">
                AI \ WEB3 \ UI \ 3D \ MOTION
              </TextAnimate>
            </h2>
          </div>

          {/* Right column: Description and CTA buttons */}
          <div className="flex flex-col gap-4 max-w-sm">
            {/* Animated description text */}
            <p className="text-base md:text-lg text-left text-muted-foreground">
              <TextAnimate animation="slideLeft" by="word">
                Crafting Awesome Stories and Killer Designs & Softwares to Make
                Brands Stand Out
              </TextAnimate>
            </p>
            {/* Call-to-action buttons */}
            <div className="flex flex-wrap justify-start gap-4">
              {/* Primary CTA button */}
              <Button variant="default" size="lg" className="rounded-full">
                Get Started{" "}
                <ArrowDownCircleIcon className="-rotate-[120deg] ml-2" />
              </Button>
              {/* Secondary CTA button */}
              <Button variant="outline" size="lg" className="rounded-full">
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
