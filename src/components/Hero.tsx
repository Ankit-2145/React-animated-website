"use client";

import DecryptedText from "./bits/decrypted-text";

export default function Hero() {
  return (
    <>
      <div className="mx-10 font-SpaceGrotesk">
        <div className="max-w-5xl py-20">
          <h1 className="text-5xl text-foreground tracking-wide leading-snug text-balance uppercase">
            We don&apos;t just build softwares - we master what we do best,
            every single time.
          </h1>
          <DecryptedText text="We are Pinnacle" />
        </div>
      </div>
    </>
  );
}
