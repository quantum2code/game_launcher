import { motion, AnimatePresence } from "motion/react";
import React from "react";
import Ps5TitleSVG from "./SVGs/ps5TitleSVG";

const GameIconTitle = ({ game, isActive }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={game.name}
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute translate-x-[10rem] h-fit font-extralight text-[22px] flex gap-2 items-center tracking-wide"
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
