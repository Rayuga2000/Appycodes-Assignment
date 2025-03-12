import { animate, motion, useInView } from "framer-motion";
import { useRef } from "react";

const LeftTypo = () => {
  const heading = ["Pioneering", "the Future of", "Sustainable", "Plastics"];
  const h2Ref = useRef(null);

  const isInView = useInView(h2Ref, { once: false });

  return (
    <div className="sticky top-0 text-white flex flex-col justify-around">
      <h2 ref={h2Ref} className="text-7xl/15 font-bold leading-20">
        {heading.map((line, i) => {
          return (
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: "easeIn" }}
                key={i}
              >
                {line}
              </motion.div>
            </div>
          );
        })}
      </h2>
      <p className="w-2xs font-bold">
        By re-engineering plastics, releaf® is reducing the environmental
        footprint and creating superior products. Now is the time to make it
        right.
      </p>
      <div className="Applications">
        <button></button>
        <button>Applications</button>
        <button></button>
      </div>
    </div>
  );
};

export default LeftTypo;
