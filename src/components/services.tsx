import BentoGrid from "@/components/kokonutui/bento-grid";

const Services = () => {
  return (
    <section className="font-SpaceGrotesk pb-24">
      <div>
        <h1 className="text-3xl md:text-4xl text-center text-foreground tracking-wide leading-tight">
          {/* Animated text for main heading */}
          Innovate. Design. Develop.
          <br /> That's What We Do Best.
        </h1>
      </div>
      <div className="py-16">
        <BentoGrid />
      </div>
    </section>
  );
};

export default Services;
