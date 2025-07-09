import React from "react";
import EllepsisSVG from "./SVGs/Ellepsis";

const PlayButton = () => {
  return (
    <div className="flex gap-3 items-center justify-center mt-3">
      <button className="flex justify-center items-center min-w-[350px] min-h-[5rem] rounded-[25px] backdrop-blur-2xl border-r bg-linear-[var(--new-grad)]">
        <span className="text-[25px] font-semibold">PLay Game</span>
      </button>
      <button className="w-[4rem] h-[4rem] rounded-full border-b flex justify-center items-center backdrop-blur-2xl">
        <EllepsisSVG />
      </button>
    </div>
  );
};

export default PlayButton;
