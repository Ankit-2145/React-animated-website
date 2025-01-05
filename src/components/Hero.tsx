"use client";

import Particles from "@/components/magicui/particles";

export default function Hero() {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          We only do the stuff, <br />
          in which we are really good
        </span>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          refresh
        />
      </div>
      <div className="group isolate flex flex-col rounded-2xl bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden">
        <div className="relative z-10 flex-none px-6 order-last pb-6">
          <h3 className="text-sm font-medium text-white">Advanced security</h3>
          <p className="mt-2 text-pretty text-sm/5 text-gray-400">
            Clerk is SOC 2 type 2 certified and CCPA compliant. We conduct
            regular third-party audits and penetration tests.
          </p>
        </div>
        <div
          className="pointer-events-none relative flex-auto select-none isolate"
          aria-hidden="true"
          style={{ minHeight: "10.25rem" }}
        >
          <div className="absolute inset-0 -bottom-5 z-10 bg-[radial-gradient(50%_100%_at_top,theme(colors.gray.900/0),theme(colors.gray.900/0.68)_61.5%,rgb(33,33,38))]"></div>
          <div className="absolute inset-x-0 top-full z-10 mt-5 h-12 bg-gray-900"></div>
          <div className="relative flex h-full items-center justify-center">
            <div className="relative h-[4.5rem] w-[4.5rem]">
              <div
                className="absolute right-full top-1/2 mr-12 mt-[calc(-280/2/16*1rem)]"
                style={{ transform: "translateX(5.1875rem)" }}
              >
                <div className="relative aspect-[224/280] w-[calc(224/16*1rem)] -scale-x-100">
                  <svg
                    viewBox="0 0 224 280"
                    height="280"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full overflow-visible"
                  >
                    <path
                      fill="#fff"
                      fillOpacity="0.05"
                      d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeOpacity="0.05"
                      d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* Center SVG and decorations */}
              <div className="absolute inset-0 z-10 rounded-full bg-gray-950/60 shadow-[0_1px_theme(colors.white/0.03)]"></div>
              <div className="absolute inset-1 z-10 rounded-full bg-gray-800 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 shadow-[0_2px_12px_theme(colors.black/0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
