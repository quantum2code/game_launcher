import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HeroGrid from "./components/HeroGrid";
import BgComp from "./components/BgComp";
import Background from "./components/Background";
import { motion } from "motion/react";
import GameSpecificMenu from "./components/GameSpacificMenu/GameSpecificMenu";
export const ActiveIdxContext = React.createContext();

function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeBgImg, setActiveBgImg] = useState(0);

  return (
    <div className="">
      <div className="absolute inset-0 flex flex-col inter-font">
        <div className="relative h-fit inset-0 mx-[5rem] pt-8 z-50 flex flex-col gap-[2rem] no-scroll">
          {/* -------Navbar-------- */}
          <NavBar />
          {/* -------Hero Grid-------- */}
          <ActiveIdxContext.Provider
            value={{ activeIdx, setActiveIdx, setActiveBgImg }}
          >
            <HeroGrid />
          </ActiveIdxContext.Provider>
          <GameSpecificMenu />
        </div>
      </div>
      {/* Some absolute elements */}
      {/* ---------Bg Images--------- */}
      <Background bg_Idx={activeBgImg} />
      {/* ---------BG_comp---------- */}
      <BgComp />
    </div>
  );
}

export default App;
