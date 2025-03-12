import "./HeroScroll.css";
import LeftTypo from "./LeftTypo";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CardStack from "./CardStack";

const HeroScroll = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.7], [2000, -700]);

  return (
    <section ref={scrollRef} className="relative h-[300vh]">
      <div className="flex-container">
        <LeftTypo />
        <CardStack y={y} />
      </div>
    </section>
  );
};

export default HeroScroll;
