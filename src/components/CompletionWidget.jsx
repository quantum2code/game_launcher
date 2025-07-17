import React from "react";
import ComplelionSVG from "./SVGs/ComplelionSVG";

const CompletionWidget = () => {
  return (
    <div className="flex gap-3 h-fit p-3 px-4 justify-center items-center rounded-full bg-[#ffffff30] backdrop-blur-2xl">
      <ComplelionSVG />
      <span className="text-xl"> 32% </span>
    </div>
  );
};

export default CompletionWidget;
