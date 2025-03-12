import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "2%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full bg-[#FFFEFC]">
      <div className="sticky top-0 p-8 h-screen w-full flex items-center justify-start border-4 border-red-500">
        <motion.h2
          // style={{color:"transparent"}}
          className="border-4 border-sky-500 z-30"
        >
          Releaf® is a plant-based,
          {/* recyclable plastic. <br />
        <motion.div style={{ x }} className="w-[100vh] p-12 absolute bg-gray-400">
        </motion.div>
        Completely fossil-free.
        <motion.div style={{ x }} className="w-[100vh] p-12 absolute bg-gray-400">
        </motion.div> */}
        </motion.h2>
        <motion.div
          style={{ x }}
          className="bg-black p-8 w-[65vh] absolute"
        ></motion.div>
      </div>
    </section>
  );
};

export default AnimatedText;
