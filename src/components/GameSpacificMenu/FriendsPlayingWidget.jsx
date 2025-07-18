import React from "react";
import MetalBorderWrapperHover from "../MetalBorderWrapperHover";

import userIcon1 from "../../assets/icon/marvel_rivals_icon.png";
import userIcon2 from "../../assets/icon/stardew_valley_icon.png";
import userIcon3 from "../../assets/icon/hades_icon.jpeg";

const friendsArray = [
  { name: 1, img: userIcon1 },
  { name: 2, img: userIcon2 },
  { name: 3, img: userIcon3 },
];

const FriendsPlayingWidget = () => {
  return (
    <div>
      <MetalBorderWrapperHover noiseSize={0.005} borderRadius="12px">
        <div className=" backdrop-blur-3xl min-w-[25rem] min-h-37 p-4 flex flex-col gap-2 bg-[#00000070] rounded-[8px] text-[15pt]">
          <div className="relative flex justify-items-start w-20 h-10">
            {friendsArray.map((friend, idx) => (
              <div
                key={friend.name}
                style={{
                  translate: `${idx * 1.5}rem 0`,
                  backgroundImage: `url(${friend.img})`,
                }}
                className="h-10 w-10 rounded-full absolute bg-cover bg-center border-2 border-[#737373]"
              ></div>
            ))}
          </div>
          <span>Friends Who Play</span>
          <div className="w-full opacity-50 font-extralight text-[13pt]">
            3 friends own this game
          </div>
        </div>
      </MetalBorderWrapperHover>
    </div>
  );
};

export default FriendsPlayingWidget;
