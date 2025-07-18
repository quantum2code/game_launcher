import React from "react";
import MetalBorderWrapperHover from "../MetalBorderWrapperHover";
import bronzeTrophy from "../../assets/trophies/ps5_bronze_trophy.png";
import silverTrophy from "../../assets/trophies/ps5_silver_trophy.png";
import goldTrophy from "../../assets/trophies/ps5_gold_trophy.png";
import platinumTrophy from "../../assets/trophies/ps5_platinum_trophy.png";
const trophiesArray = [
  { name: "bronze", count: 0, img: bronzeTrophy },
  { name: "silver", count: 0, img: silverTrophy },
  { name: "gold", count: 0, img: goldTrophy },
  { name: "platinum", count: 0, img: platinumTrophy },
];
const TrophiesForGame = () => {
  return (
    <MetalBorderWrapperHover noiseSize={0.005} borderRadius="12px">
      <div className=" backdrop-blur-3xl min-w-[25rem] min-h-32 p-4 flex flex-col gap-3 bg-[#00000070] rounded-[8px] text-[15pt]">
        <div className="flex justify-items-start gap-6">
          {trophiesArray.map((trophy) => (
            <div key={trophy.name} className="flex gap-2 items-end">
              <img src={trophy.img} alt="" className="w-7" />
              <span>{trophy.count}</span>
            </div>
          ))}
        </div>
        <span>Trophies</span>
        <div className="w-full flex flex-col items-end">
          <div className="w-full flex justify-between font-extralight text-[13pt]">
            <span className="opacity-50">12/62</span>
            <span>8%</span>
          </div>
          <span className="relative w-full h-[3px] bg-[#ffffff50]">
            <span className="absolute letf-0 w-[20%] h-full bg-[#ffffff70]"></span>
          </span>
        </div>
      </div>
    </MetalBorderWrapperHover>
  );
};

export default TrophiesForGame;
