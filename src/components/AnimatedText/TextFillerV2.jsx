import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./TextFiller.css";
import { div } from "framer-motion/client";

const TextFillerV2 = ({ text, animStart, animEnd }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    // target: targetRef,
    // offset: [`start ${animStart}`, `end ${animEnd}`],
  });

  return (
    <div ref={targetRef} className="textFillerSection relative">
      <h2 className="text-black/20">
        {text}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          className="w-full h-full bg-black absolute"
        ></motion.div>
      </h2>
    </div>
  );
};

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="wordContainer">
      <span className="">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default TextFillerV2;
