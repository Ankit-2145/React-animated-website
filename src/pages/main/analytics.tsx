import { Button } from "@/components/ui/button";
import StatsCounter from "@/components/reactbits/countUp";

export const Analytics = () => {
  return (
    <section className="font-WorkSans py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <h2 className="text-lg text-foreground tracking-wide uppercase">
              We don't just design.
              <br />
              we deconstruct problems.
            </h2>
            <Button className="group relative overflow-hidden mt-6">
              <span className="relative overflow-hidden">
                <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
                  Explore Our Story
                </div>
                <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
                  Explore Our Story
                </div>
              </span>
            </Button>
          </div>
          <div className="max-w-2xl">
            <p className="text-base text-left text-muted-foreground">
              <span className="text-foreground">
                At Pinnacle, we craft digital experiences—not just websites.
              </span>{" "}
              We dive deep, analyze complexities, and craft digital experiences
              that make an impact. Whether it&apos;s AI-driven solutions,
              intuitive UI/UX, or high-performance web apps, we blend creativity
              with technology to build brands that stand out, our goal is simple
              <span className="text-foreground">
                —make brands unforgettable.
              </span>
            </p>
          </div>
        </div>

        <StatsCounter />
      </div>
    </section>
  );
};
