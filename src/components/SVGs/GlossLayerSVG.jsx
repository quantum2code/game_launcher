import React from "react";
import { motion } from "motion/react";

const glossF = {
  x: ["-300%", "50%"],
  y: ["-300%", "50%"],
};
const GlossLayerSVG = () => {
  return (
    <motion.div
      animate={glossF}
      transition={{
        ease: "anticipate",
        repeat: Infinity,
        repeatDelay: 3,
        duration: 4,
      }}
      className={"absolute inset-0 blur-2xl opacity-50"}
    >
      <svg
        width="500%"
        height="500%"
        viewBox="0 0 250 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_2)">
          <path
            d="M0 -125V-75C41.4214 -75 75 -41.4214 75 0H125H175C175 -96.6498 96.6498 -175 0 -175V-125ZM125 0H75C75 41.4214 41.4214 75 0 75V125V175C96.6498 175 175 96.6498 175 0H125ZM0 125V75C-41.4214 75 -75 41.4214 -75 0H-125H-175C-175 96.6498 -96.6498 175 0 175V125ZM-125 0H-75C-75 -41.4214 -41.4214 -75 0 -75V-125V-175C-96.6498 -175 -175 -96.6498 -175 0H-125Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="250" height="250" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
};

export default GlossLayerSVG;
