import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollInView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: ref, // Track this section
    offset: ["start end", "end start"], // Animation starts when entering
  });

  // Create a smooth fade and scale effect using scroll progress
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className=" relative h-[300vh] flex flex-col items-center justify-center gap-20 p-10">
      {/* Animated Section */}
      <div className="sticky top-0  w-screen flex justify-around items-end border-5 border-amber-500">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 5000 }}
          // animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ opacity, y, scale }} // Apply scroll-based animation
          className="w-80 h-40 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-lg"
        >
          Scroll + InView Animation
        </motion.div>
      </div>
      <div className="bg-gray-700 p-48 w-full mt-48"></div>
      <div className="bg-red-700 p-48 w-full"></div>
    </div>
  );
};

export default ScrollInView;
