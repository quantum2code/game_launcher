import React from "react";
import NoiseBox from "./SVGs/NoiseBox";
import { motion } from "motion/react";

const maskStyle = {
  background: "#00000000",
  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  maskComposite: "subtract",
  WebkitMask:
    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  WebkitMaskComposite: "source-out",
  padding: "2px",
};
const MetalBorderWrapper = ({ children, isActive, borderRadius = 0 }) => {
  return (
    <div className="relative inset-0 p-[4px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
        exit={{ opacity: 0 }}
        style={{ ...maskStyle, borderRadius: borderRadius }}
        className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center z-100"
      >
        <NoiseBox />
      </motion.div>
      {children}
    </div>
  );
};

export default React.memo(MetalBorderWrapper);
