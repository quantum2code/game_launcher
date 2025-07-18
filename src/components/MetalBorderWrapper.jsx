import React from "react";
import NoiseBox from "./SVGs/NoiseBox";
import { motion } from "motion/react";

const MetalBorderWrapper = ({ children, isActive, borderRadius = 0 }) => {
  return (
    <div className="relative inset-0 p-[4px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
        exit={{ opacity: 0 }}
        style={{ borderRadius: borderRadius }}
        className="absolute inset-0 noise-border w-full h-full overflow-hidden flex justify-center items-center z-100"
      >
        <NoiseBox />
      </motion.div>
      {children}
    </div>
  );
};

export default React.memo(MetalBorderWrapper);
