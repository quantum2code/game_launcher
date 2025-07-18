import React, { useId } from "react";

function NoiseBox({ noiseSize = 0.02, randomSeed = 72 }) {
  const filterId = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="aspect-square scale-200 opacity-70"
      preserveAspectRatio="none"
      id="noise-rect"
    >
      <filter id={filterId}>
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

      <circle r={"50%"} cx={"50%"} cy={"50%"} filter={`url(#${filterId})`} />
    </svg>
  );
}

export default NoiseBox;
