import React from "react";
import TrophiesForGame from "./TrophiesForGame";
import FriendsPlayingWidget from "./FriendsPlayingWidget";
import GenericCard from "../GenericCard";
import hadesAd from "../../assets/ad/hades_ad.png";
import hadesSs from "../../assets/ad/hades_ss.webp";
import hadesNews from "../../assets/ad/hades_news.jpg";

const GameSpecificMenu = () => {
  return (
    <div className="relative w-full z-100 flex flex-col gap-4 pb-10">
      <div className="flex gap-3 overflow-x-scroll">
        <TrophiesForGame />
        <FriendsPlayingWidget />
      </div>
      <div className="flex gap-2 overflow-x-scroll">
        <GenericCard
          title={"New Updates"}
          subtitle={"Unseen Update pack"}
          img_path={hadesAd}
        />
        <GenericCard
          title={"Screenshots"}
          subtitle={"12 Images"}
          img_path={hadesSs}
        />
        <GenericCard
          title={"Official News"}
          subtitle={"Hades II Update"}
          img_path={hadesNews}
        />
      </div>
    </div>
  );
};

export default GameSpecificMenu;
