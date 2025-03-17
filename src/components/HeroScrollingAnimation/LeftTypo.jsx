import { animate, motion, useInView } from "framer-motion";
import { useRef } from "react";

const LeftTypo = () => {
  const heading = ["Pioneering", "the Future of", "Sustainable", "Plastics"];
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  const isH2InView = useInView(h2Ref, { once: false });
  const isPInView = useInView(pRef, { once: false });

  return (
    <div className="leftTypo">
      <h2 ref={h2Ref} className="">
        {heading.map((line, i) => {
          return (
            <div className="">
              <motion.div
                initial={{ y: 100 }}
                animate={isH2InView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: "easeIn" }}
                key={i}
              >
                {line}
              </motion.div>
            </div>
          );
        })}
      </h2>
      <motion.p
        ref={pRef}
        initial={{ opacity: 0,}}
        whileInView={{ opacity: 1,}}
        transition={{ duration: 1 }}
        className=""
      >
        By re-engineering plastics, releaf® is reducing the environmental
        footprint and creating superior products. Now is the time to make it
        right.
      </motion.p>
      <div className="">
        <motion.button
          initial={{ scaleX: 0 }}
          animate={isPInView ? { scaleX: 1, transformOrigin: "left" } : {}}
          transition={{ duration: 0.7 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.button>
        <motion.button
          initial={{ scaleX: 0 }}
          animate={isPInView ? { scaleX: 1, transformOrigin: "left" } : {}}
          transition={{ duration: 0.7 }}
        >
          Applications
        </motion.button>
      </div>
    </div>
  );
};

export default LeftTypo;
