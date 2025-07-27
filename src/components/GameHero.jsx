import React, { useContext } from "react";
import PlayButton from "./PlayButton";
import GamesMetadata from "./GamesMetadata";
import { gameData } from "../game.data";
import { ActiveIdxContext } from "../App";
import { motion } from "motion/react";
const GameHero = () => {
  const { activeIdx } = useContext(ActiveIdxContext);
  return (
    <div className=" flex flex-col gap-2 h-full items-start justify-end">
      <motion.div
        key={gameData[activeIdx].name}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="translate-x-[-0.5rem]"
      >
        <img src={gameData[activeIdx].logo_img} className="w-full h-[10rem]" />
      </motion.div>
      <span className="font-extralight w-[25rem] text-[16pt] tracking-wider line-clamp-2 mb-10">
        {gameData[activeIdx].desc}
      </span>
      {/* <Tag tagArray={tagArray} /> */}
      {/* PlayButton */}
      <PlayButton />
    </div>
  );
};

export default React.memo(GameHero);
