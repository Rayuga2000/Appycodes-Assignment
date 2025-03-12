import { motion } from "framer-motion";

const RightMarquee = () => {
  return (
    <div className="flex justify-around gap-4">
      <motion.div
        className="flex justify-around gap-4 text-5xl font-bold"
        initial={{ x: "0"}}
        animate={{ x: ["-100%","0%"] }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0,
          repeatDelay: 0,
        }}
      >
        <span>Rebels With a Cause</span>
        <span>Rebels With a Cause</span>
        <span>Rebels With a Cause</span>
      </motion.div>

      <motion.div
        className="flex justify-around gap-4 text-5xl font-bold"
        initial={{ x: "0"}}
        animate={{ x: ["-100%","0%"] }}
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0,
          repeatDelay: 0,
        }}
      >
        <span>Rebels With a Cause</span>
        <span>Rebels With a Cause</span>
        <span>Rebels With a Cause</span>
      </motion.div>
    </div>
  );
};

export default RightMarquee;
