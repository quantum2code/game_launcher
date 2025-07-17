import { motion, AnimatePresence } from "motion/react";
import React from "react";
import Ps5TitleSVG from "./SVGs/ps5TitleSVG";

const GameIconTitle = ({ game, isActive }) => {
  return (
    <AnimatePresence>
      <motion.div
        animate={
          isActive
            ? { filter: "blur(0px)", opacity: 1 }
            : { filter: "blur(10px)", opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="absolute translate-x-[10rem] translate-y-[-120%] font-extralight text-[22px] origin-left flex gap-2 items-center"
      >
        <span className="h-[1.5rem]">
          <Ps5TitleSVG />
        </span>
        <span>{game.name}</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameIconTitle;
