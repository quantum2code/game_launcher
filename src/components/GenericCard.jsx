import React from "react";
import MetalBorderWrapperHover from "./MetalBorderWrapperHover";

const GenericCard = ({ title, subtitle, img_path }) => {
  return (
    <MetalBorderWrapperHover noiseSize={0.004} borderRadius="12px">
      <div
        style={{ backgroundImage: `url(${img_path})`, backgroundSize: "cover" }}
        className="relative overflow-hidden w-[22rem] h-[15rem] flex items-end rounded-[10px]"
      >
        <div className="absolute inset-0 w-full h-full bg-linear-0 from-black from-10% to-[#00000000] to-70%"></div>
        <div className="absolute flex flex-col gap-3 p-4">
          <h2 className="text-[18px] font-extralight tracking-wider">
            {subtitle}
          </h2>
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
      </div>
    </MetalBorderWrapperHover>
  );
};

export default GenericCard;
