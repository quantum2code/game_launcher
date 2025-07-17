import React from "react";

const BlurMaskSVG = ({ w = "100%", h = "100%" }) => {
  return (
    <svg width={w} height={h}>
      <defs>
        <radialGradient id="radial-gradient-mask" cx="70%" cy="50%" r="60%">
          <stop offset="20%" stopColor="black" />
          <stop offset="100%" stopColor="white" />
        </radialGradient>

        <mask id="radial-blur-mask">
          <rect width="100%" height="100%" fill="url(#radial-gradient-mask)" />
        </mask>
      </defs>
    </svg>
  );
};

export default BlurMaskSVG;
