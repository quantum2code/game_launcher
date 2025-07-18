import React from "react";
import EllepsisSVG from "./SVGs/Ellepsis";
import MetalBorderWrapperHover from "./MetalBorderWrapperHover";

const PlayButton = () => {
  return (
    <div className="flex gap-3 items-center mt-3 w-[60%] font-medium">
      <MetalBorderWrapperHover
        noiseSize={0.007}
        borderRadius={"calc(infinity*1px)"}
      >
        <button className="flex justify-center items-center min-w-[350px] p-4 rounded-full bg-[#b8b8b82c] backdrop-blur-2xl">
          <span className="text-[25px] tracking-wide">Return to Game</span>
        </button>
      </MetalBorderWrapperHover>
      <MetalBorderWrapperHover
        noiseSize={0.007}
        borderRadius={"calc(infinity*1px)"}
      >
        <button className="flex justify-center items-center min-w-[350px] p-4 rounded-full bg-[#b8b8b82c] backdrop-blur-2xl">
          <span className="text-[25px] tracking-wide">Stream</span>
        </button>
      </MetalBorderWrapperHover>
      <MetalBorderWrapperHover>
        <button className="w-[4rem] h-[4rem] bg-[#76767630] backdrop-blur-2xl rounded-full flex justify-center items-center">
          <EllepsisSVG />
        </button>
      </MetalBorderWrapperHover>
    </div>
  );
};

export default PlayButton;
