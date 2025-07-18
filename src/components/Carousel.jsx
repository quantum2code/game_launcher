import React, { useCallback, useContext, useEffect } from "react";
import { gameData } from "../game.data";
import { ActiveIdxContext } from "../App";
import { AnimatePresence, motion, scale } from "motion/react";
import GameIcon from "./GameIcon";
import GameIconTitle from "./GameIconTitle";
import MetalBorderWrapper from "./MetalBorderWrapper";

//const values
const ICON_SIDE_LENGTH_n = "6rem";
const ICON_SIDE_LENGTH_a = "9rem";
const BORDER_RADIUS_n = "18px";
const BORDER_RADIUS_a = "28px";

const ICON_ANIM_n = {
  width: ICON_SIDE_LENGTH_n,
};
const ICON_ANIM_a = {
  width: ICON_SIDE_LENGTH_a,
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
    return gameData.map((game, idx) => {
      const isActive = activeIdx === idx;
      return (
        <div key={game.name + idx}>
          <motion.div
            initial={ICON_ANIM_a}
            animate={isActive ? ICON_ANIM_a : ICON_ANIM_n}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="flex justify-center"
            onClick={() => handleClick(idx)}
          >
            <AnimatePresence>
              <motion.div
                initial={{ scale: 1 }}
                animate={isActive ? { scale: 1.5 } : { scale: 1 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                ////////////////////////////////////////////////////////
                className="origin-top w-[6rem]"
              >
                <MetalBorderWrapper isActive={isActive} borderRadius={"20px"}>
                  <GameIcon icon_img={game.icon_img} isActive={isActive} />
                </MetalBorderWrapper>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <GameIconTitle game={game} isActive={isActive} />
        </div>
      );
    });
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
  return (
    <div className="flex gap-1 col-span-3 h-[10rem]">
      {carouselConstructor()}
    </div>
  );
};

export default Carousel;
