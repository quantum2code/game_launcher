import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HeroGrid from "./components/HeroGrid";
import BgComp from "./components/BgComp";
import Background from "./components/Background";
import GameSpecificMenu from "./components/GameSpacificMenu/GameSpecificMenu";
export const ActiveIdxContext = React.createContext();

function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeBgImg, setActiveBgImg] = useState(0);

  return (
    <div className="w-screen h-screen">
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
      <div className="fixed w-full h-full bg-gray-900 z-200 md:hidden flex justify-center items-center ">
        <div className="text-2xl text-gray-600 font-mono">
          {"Please open this website on a bigger screen :-)"}
        </div>
      </div>
    </div>
  );
}

export default App;
