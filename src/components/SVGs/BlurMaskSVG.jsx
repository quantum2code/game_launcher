import React from "react";

const BlurMaskSVG = ({ w = "0", h = "0" }) => {
  return (
    <svg width={w} height={h} viewBox="0 0 2000 2000">
      <defs>
        <radialGradient id="radial-gradient-mask" cx="70%" cy="25%" r="40%">
          <stop offset="0%" stopColor="black" />
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
