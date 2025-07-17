import React from "react";
import hadesAd from "../../assets/ad/hades_ad.png";

const AdCard = () => {
  return (
    <div className="relative w-[20rem] h-[25rem] right-20 rounded-[3px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <img src={hadesAd} className="w-full h-full object-cover brightness-90" />
      <div className="absolute w-full bottom-0 backdrop-blur-3xl p-4 pb-6 flex flex-col gap-1">
        <span className="font-extralight text-[14pt] text-white tracking-wide">
          Hades II: The Unseen Update Patch Notes
        </span>
        {/* <span className="text-[10pt] text-[#ffffff91]">
          Friday, July 11, 2025
        </span> */}
      </div>
    </div>
  );
};

export default AdCard;
