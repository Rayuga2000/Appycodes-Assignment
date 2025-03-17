import { motion } from "framer-motion";

const Circle = () => {
  return (
    <div className="circleContainer">
      <div className="">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          src="https://www.datocms-assets.com/135926/1720019032-badge.png?auto=format&crop=focalpoint&fit=crop"
          alt=""
        />
      </div>
    </div>
  );
};

export default Circle;
