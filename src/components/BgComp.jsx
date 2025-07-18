import React from "react";
import BlurMaskSVG from "./SVGs/BlurMaskSVG";
import VinigetteSVG from "./SVGs/VinigetteSVG";

const BgComp = ({
  vinigetteAmount = 1,
  blurOpacityAmount = 0.8,
  blurAmount = 16,
}) => {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      {/* Viniegtte layer */}
      <div
        style={{
          mask: "url(#radial-opacity-mask)",
          WebkitMask: "url(#radial-opacity-mask)",
          opacity: vinigetteAmount,
        }}
        className="fixed inset-0 bg-black"
      ></div>

      {/* Blur layer */}
      <div
        style={{
          mask: "url(#radial-blur-mask)",
          WebkitMask: "url(#radial-blur-mask)",
          backdropFilter: `blur(${blurAmount}px)`,
          opacity: blurOpacityAmount,
        }}
        className="fixed inset-0"
      ></div>

      {/* SVG Blur Mask */}
      <BlurMaskSVG w="100%" h="100%" />
      {/* SVG Viniegtte */}
      <VinigetteSVG w="100%" h="100%" />
    </div>
  );
};

export default React.memo(BgComp);
