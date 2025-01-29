"use client";

import { TextAnimate } from "./magicui/text-animate";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export default function Hero() {
  return (
    <>
      <section className="mx-10 font-SpaceGrotesk min-h-screen">
        <div className="py-20">
          <div>
            <h1 className="text-3xl md:text-5xl text-foreground tracking-wide text-balance uppercase">
              <TextAnimate
                className="pb-2"
                animation="slideRight"
                by="character"
              >
                Crafting software,
              </TextAnimate>
              <TextAnimate animation="slideRight" by="character">
                perfected to the pixel
              </TextAnimate>
            </h1>
            <p className="text-base py-5 text-muted-foreground">
              <TextAnimate animation="slideLeft" by="word">
                Building digital solutions that scale, perform, and
                inspire—tailored to your vision.
              </TextAnimate>
            </p>
          </div>
          <InteractiveHoverButton>Get Started</InteractiveHoverButton>
        </div>
      </section>
    </>
  );
}
