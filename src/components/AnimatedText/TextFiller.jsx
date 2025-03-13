import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./TextFiller.css";

const TextFiller = ({ text, animStart, animEnd }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [`start ${animStart}`, `end ${animEnd}`],
  });

  const words = text.split(" ");

  return (
    <section
      ref={targetRef}
      style={{ opacity: scrollYProgress }}
      className="textFillerSection"
    >
      <h2 ref={targetRef} className="">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </h2>
    </section>
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

export default TextFiller;
