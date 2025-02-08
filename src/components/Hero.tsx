"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "./ui/button";
import { ArrowDownCircleIcon } from "lucide-react";
import { Novatrix } from "uvcanvas";

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
    <>
      <section className="font-SpaceGrotesk py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
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
              <h2 className="text-base text-muted-foreground">
                <TextAnimate animation="slideLeft" by="word">
                  AI / WEB / APPS / UI-UX / BRANDING
                </TextAnimate>
              </h2>
            </div>

            {/* Right column: Description and CTA buttons */}
            <div className="flex flex-col gap-4 max-w-sm">
              {/* Animated description text */}
              <p className="text-base text-left text-muted-foreground">
                <TextAnimate animation="slideLeft" by="word">
                  Crafting Awesome Stories and Killer Designs & Softwares to
                  Make Brands Stand Out
                </TextAnimate>
              </p>
              {/* Call-to-action buttons */}
              <div className="flex flex-wrap justify-start gap-4">
                {/* Primary CTA button */}
                <Button variant="default" size="lg" className="rounded-full">
                  Get in touch{" "}
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
        {/* Velustro Gradient Animation */}
        <div className="mt-12 max-w-6xl mx-auto h-64 md:h-96 overflow-hidden rounded-md">
          <Novatrix />
        </div>
      </section>
    </>
  );
}
