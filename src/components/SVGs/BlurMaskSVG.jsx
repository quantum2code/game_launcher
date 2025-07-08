import React from "react";

const BlurMaskSVG = ({ w = "0", h = "0" }) => {
  return (
    <svg width={w} height={h}>
      <defs>
        <radialGradient id="radial-gradient-mask" cx="70%" cy="25%" r="70%">
          <stop offset="10%" stopColor="black" />
          <stop offset="50%" stopColor="white" />
        </radialGradient>

        <mask id="radial-blur-mask">
          <rect width="100%" height="100%" fill="url(#radial-gradient-mask)" />
        </mask>
      </defs>
    </svg>
  );
};

export default BlurMaskSVG;
