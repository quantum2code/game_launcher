import React from "react";
import Carousel from "./Carousel";
import GameHero from "./GameHero";
import AdCard from "./SVGs/AdCard";
import GamesMetadata from "./GamesMetadata";

const HeroGrid = () => {
  return (
    <div className=" flex flex-col h-[calc(100vh-16rem)] mb-2 z-20">
      {/* Carousel */}
      <Carousel />
      {/* GameHero */}
      <div className="flex-1 flex flex-row justify-between items-end">
        <GameHero />
        <GamesMetadata />
      </div>
      {/* CardStack */}
    </div>
  );
};

export default HeroGrid;
