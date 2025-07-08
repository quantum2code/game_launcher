import React, { useCallback, useContext, useEffect } from "react";
import { gameData } from "../game.data";
import { ActiveIdxContext } from "../App";
import { motion } from "motion/react";

//const values
const ICON_SIDE_LENGTH_n = "7rem";
const ICON_SIDE_LENGTH_a = "10rem";

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
  const { activeIdx, setActiveIdx } = useContext(ActiveIdxContext);
  //handlers
  const handleClick = useCallback(
    (activeIdx, setActiveIdx, idx) => {
      setActiveIdx(idx);
    },
    [setActiveIdx]
  );

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
      <motion.div
        initial={{
          width: ICON_SIDE_LENGTH_n,
          height: ICON_SIDE_LENGTH_n,
        }}
        animate={activeIdx === idx ? ICON_ANIM_a : ICON_ANIM_n}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        ////////////////////////////////////////////////////////
        key={idx + game.name}
        className="border-r"
        onClick={() => handleClick(activeIdx, setActiveIdx, idx)}
      ></motion.div>
    ));
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  //
  return (
    <div className="grid col-span-3 row-span-1 row-start-1 border-b ">
      <div className="flex gap-2">
        {carouselConstructor(activeIdx, setActiveIdx)}
      </div>
    </div>
  );
};

export default Carousel;
