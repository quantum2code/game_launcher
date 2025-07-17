import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HeroGrid from "./components/HeroGrid";
import BgComp from "./components/BgComp";
import Background from "./components/Background";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
export const ActiveIdxContext = React.createContext();

function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeBgImg, setActiveBgImg] = useState(0);

  return (
    <div>
      <div className="absolute h-screen inset-0 overflow-hidden inter-font">
        <div className="relative h-[100%] inset-0 mx-[5rem] pt-8 z-50 flex flex-col gap-[2rem]">
          {/* -------Navbar-------- */}
          <NavBar />
          {/* -------Hero Grid-------- */}
          <ActiveIdxContext.Provider
            value={{ activeIdx, setActiveIdx, setActiveBgImg }}
          >
            <HeroGrid />
          </ActiveIdxContext.Provider>
        </div>
        {/* Some absolute elements */}
        {/* ---------Bg Images--------- */}
        <Background bg_Idx={activeBgImg} />
        {/* ---------BG_comp---------- */}
        <BgComp />
      </div>
    </div>
  );
}

export default App;
