import { animate, motion, useInView } from "framer-motion";
import { useRef } from "react";

const LeftTypo = () => {
  const heading = ["Pioneering", "the Future of", "Sustainable", "Plastics"];
  const h2Ref = useRef(null);

  const isInView = useInView(h2Ref, { once: false });

  return (
    <div className="leftTypo">
      <h2 ref={h2Ref} className="">
        {heading.map((line, i) => {
          return (
            <div className="">
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
      <p className="">
        By re-engineering plastics, releaf® is reducing the environmental
        footprint and creating superior products. Now is the time to make it
        right.
      </p>
      <div className="">
        <button></button>
        <button>Applications</button>
        <button></button>
      </div>
    </div>
  );
};

export default LeftTypo;
