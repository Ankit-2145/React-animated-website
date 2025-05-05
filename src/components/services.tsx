import { ServiceCard } from "./service-card";

const Services = () => {
  return (
    <section className="font-SpaceGrotesk py-24">
      <div>
        <h2 className="text-3xl md:text-4xl text-foreground text-center tracking-wide uppercase">
          What we do best.
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 py-16">
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
