import React from "react";

const VinigetteSVG = ({ w = "0", h = "0" }) => {
  return (
    <svg
      width={w}
      height={h}
      // viewBox="0 0 2000 2000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="radial-gradient-opacity-mask"
          cx="60%"
          cy="40%"
          r="60%"
        >
          <stop offset="0%" stopColor="black" />
          <stop offset="100%" stopColor="white" />
        </radialGradient>

        <mask id="radial-opacity-mask">
          <rect
            width="100%"
            height="100%"
            fill="url(#radial-gradient-opacity-mask)"
          />
        </mask>
      </defs>
    </svg>
  );
};

export default VinigetteSVG;
