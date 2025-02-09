import BentoGrid from "@/components/kokonutui/bento-grid";
import HandWrittenTitle from "./kokonutui/hand-written-title";

const Services = () => {
  return (
    <section className="font-SpaceGrotesk pb-24">
      <div>
        <HandWrittenTitle title="What We Do Best." />
      </div>
      <div className="pb-16">
        <BentoGrid />
      </div>
    </section>
  );
};

export default Services;
