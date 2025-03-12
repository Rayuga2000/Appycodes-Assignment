import { motion } from "framer-motion";

const Marquee = ({ xAxisRange }) => {
  return (
    <motion.div
      className="flex justify-around gap-4 text-5xl font-bold"
      initial={{ x: "0" }}
      animate={{ x: xAxisRange }}
      transition={{
        ease: "linear",
        duration: 30,
        repeat: Infinity,
        repeatType: "loop",
        delay: 0,
        repeatDelay: 0,
      }}
    >
      {[...Array(3)].map((_, i) => {
        {
          return <span key={i}>Rebels With a Cause</span>;
        }
      })}
    </motion.div>
  );
};

export default Marquee;
