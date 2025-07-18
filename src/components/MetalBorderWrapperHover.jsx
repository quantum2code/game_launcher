import React from "react";
import NoiseBox from "./SVGs/NoiseBox";
import { motion } from "motion/react";

const MetalBorderWrapperHover = ({
  children,
  padding = "4px",
  borderRadius = "calc(infinity*1px)",
  noiseSize,
}) => {
  return (
    <div style={{ padding: padding }} className="relative h-fit w-fit inset-0">
      <motion.div
        style={{ borderRadius: borderRadius }}
        className="absolute inset-0 noise-border w-full h-full overflow-hidden flex justify-center items-center p-[2px] z-100 hover:opacity-80 opacity-0 transition-opacity"
      >
        <NoiseBox noiseSize={noiseSize} />
      </motion.div>
      {children}
    </div>
  );
};

export default React.memo(MetalBorderWrapperHover);
