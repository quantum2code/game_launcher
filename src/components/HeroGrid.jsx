import React from "react";
import Carousel from "./Carousel";

const HeroGrid = () => {
  return (
    <div className=" grid grid-cols-3 grid-rows-2 h-[10rem] border-r">
      {/* Carousel */}
      <Carousel />
      {/* GameHero */}
      {/* CardStack */}
    </div>
  );
};

export default HeroGrid;
