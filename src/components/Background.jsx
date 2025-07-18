import { AnimatePresence, motion } from "motion/react";
import { gameData } from "../game.data";

const Background = ({ bg_Idx }) => {
  return (
    <AnimatePresence>
      <motion.img
        key={bg_Idx}
        initial={{ opacity: 0.5, scale: 1.2, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
        transition={{ duration: 0.3, type: "tween" }}
        alt="Background"
        src={gameData[bg_Idx].bg_img}
        className="w-full h-full object-cover fixed inset-0 pointer-events-none overflow-hidden"
      ></motion.img>
    </AnimatePresence>
  );
};

export default Background;
