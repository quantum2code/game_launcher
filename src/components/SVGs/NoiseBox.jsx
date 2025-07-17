import React from "react";

function NoiseBox({ noiseSize = "0.01", randomSeed = 1 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full aspect-square scale-150 opacity-90"
      preserveAspectRatio="none"
      id="noise-rect"
    >
      <filter id="whiteNoise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={noiseSize}
          numOctaves="1"
          stitchTiles="stitch"
          seed={randomSeed}
          result="noise"
        />
        <feComponentTransfer in="noise">
          <feFuncA type="linear" slope="3" intercept="-1" />
        </feComponentTransfer>
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 1 0"
        />
      </filter>

      <circle r={"50%"} cx={"50%"} cy={"50%"} filter="url(#whiteNoise)" />
    </svg>
  );
}

export default React.memo(NoiseBox);
