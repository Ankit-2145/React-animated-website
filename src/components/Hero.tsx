"use client";

import { ShimmerButton } from "./magicui/shimmer-button";
import { TextAnimate } from "./magicui/text-animate";

export default function Hero() {
  return (
    <>
      <div className="mx-10 font-SpaceGrotesk">
        <div className="py-20">
          <div>
            <h1 className="text-3xl md:text-5xl text-foreground tracking-wide text-balance uppercase">
              <TextAnimate
                className="pb-2"
                animation="slideLeft"
                by="character"
              >
                Crafting software,
              </TextAnimate>
              <TextAnimate animation="slideLeft" by="character">
                perfected to the pixel
              </TextAnimate>
            </h1>
            <p className="text-base py-5 text-muted-foreground">
              Crafting digital solutions that scale, perform, and
              inspire—tailored to your vision.
            </p>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Let's connect
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </>
  );
}
