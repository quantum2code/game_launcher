import React from "react";
import NoiseBox from "./SVGs/NoiseBox";
import { motion } from "motion/react";

const MetalBorderWrapperHover = ({
  children,
  paddding = "4px",
  borderRadius = "calc(infinity*1px)",
  noiseSize = "0.01",
}) => {
  return (
    <div style={{ padding: paddding }} className="relative inset-0 p-[5px]">
      <motion.div
        style={{ borderRadius: borderRadius }}
        className="absolute inset-0 noise-border w-full h-full overflow-hidden flex justify-center items-center p-[2px] z-100 hover:opacity-100 opacity-0 transition-opacity"
      >
        <NoiseBox noiseSize={noiseSize} />
      </motion.div>
      {children}
    </div>
  );
};

export default React.memo(MetalBorderWrapperHover);
