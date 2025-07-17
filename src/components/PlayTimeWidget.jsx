import React from "react";
import ClockSVG from "./SVGs/ClockSVG";

const PlayTimeWidget = () => {
  return (
    <div className="flex gap-3 h-fit p-3 px-4 justify-center items-center rounded-full bg-[#ffffff30] backdrop-blur-2xl">
      <ClockSVG />
      <span className="text-xl"> 13h </span>
    </div>
  );
};

export default PlayTimeWidget;
