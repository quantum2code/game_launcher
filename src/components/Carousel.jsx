import React, { useCallback, useContext, useEffect } from "react";
import { gameData } from "../game.data";
import { ActiveIdxContext } from "../App";
import { AnimatePresence, motion } from "motion/react";

//const values
const ICON_SIDE_LENGTH_n = "6rem";
const ICON_SIDE_LENGTH_a = "8rem";

const ICON_ANIM_n = {
  width: ICON_SIDE_LENGTH_n,
  height: ICON_SIDE_LENGTH_n,
};
const ICON_ANIM_a = {
  width: ICON_SIDE_LENGTH_a,
  height: ICON_SIDE_LENGTH_a,
};

const Carousel = () => {
  //
  const { activeIdx, setActiveIdx, setActiveBgImg } =
    useContext(ActiveIdxContext);
  //handlers
  const handleClick = (idx) => {
    setActiveIdx(idx);
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "ArrowLeft" || event.key === "j") {
        setActiveIdx((prev) => (prev > 0 ? prev - 1 : gameData.length - 1));
      }

      if (event.key === "ArrowRight" || event.key === "l") {
        setActiveIdx((prev) => (prev < gameData.length - 1 ? prev + 1 : 0));
      }
    },
    [gameData.length, setActiveIdx]
  );

  //
  const carouselConstructor = () => {
    return gameData.map((game, idx) => (
      <AnimatePresence>
        <motion.div
          key={idx + game.name}
          initial={ICON_ANIM_a}
          animate={activeIdx === idx ? ICON_ANIM_a : ICON_ANIM_n}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          ////////////////////////////////////////////////////////
          className="border-r"
          onClick={() => handleClick(idx)}
        ></motion.div>
      </AnimatePresence>
    ));
  };

  useEffect(() => {
    // Update the background image when the active index changes
    setActiveBgImg(null);
    setActiveBgImg(activeIdx);
  }, [activeIdx]);

  //keypress handler
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  //
  return <div className="flex gap-2 col-span-3">{carouselConstructor()}</div>;
};

export default Carousel;
