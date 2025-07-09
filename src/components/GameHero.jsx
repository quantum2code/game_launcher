import React from "react";
import hadesIcon from "../assets/icon/hades_logo.png";
import PlayButton from "./PlayButton";
const tagArray = ["RougeLike", "Sucker Punch"];
const GameHero = () => {
  return (
    <div className="col-span-2 flex flex-col gap-2 items-start">
      <div>
        <img src={hadesIcon} className="h-[9rem]" />
      </div>
      <div>
        {tagArray.map((tag, index) => (
          <span
            key={index}
            className="font-semibold text-[12pt] text-[#4B4B4B] bg-[#dfdfdf90] rounded-full px-4 py-1 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* PlayButton */}
      <PlayButton />
    </div>
  );
};

export default React.memo(GameHero);
