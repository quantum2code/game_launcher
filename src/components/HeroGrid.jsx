import React from "react";
import Carousel from "./Carousel";
import GameHero from "./GameHero";

const HeroGrid = () => {
  return (
    <div className=" grid grid-cols-3 grid-rows-[max(40%,12rem)_1fr] gap-3 flex-1 z-20 ">
      {/* Carousel */}
      <Carousel />
      {/* GameHero */}
      <GameHero />
      {/* CardStack */}
    </div>
  );
};

export default HeroGrid;
