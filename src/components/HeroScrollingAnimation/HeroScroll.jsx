import "./HeroScrollingAnimation.css";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CardStack from "./CardStack";
import LeftTypo from "./LeftTypo";

const HeroScroll = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.7], [2000, -700]);

  return (
    <section ref={scrollRef} className="heroSection">
      <div className="flex-container">
        <LeftTypo />
        <CardStack y={y} />
      </div>
    </section>
  );
};

export default HeroScroll;
