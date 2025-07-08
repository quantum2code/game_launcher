import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HeroGrid from "./components/HeroGrid";
import BgComp from "./components/BgComp";
export const ActiveIdxContext = React.createContext();

function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full mx-[5rem] pt-[2rem] border-r">
        {/* -------Navbar-------- */}
        <NavBar />
        {/* -------Hero Grid-------- */}
        <ActiveIdxContext.Provider value={{ activeIdx, setActiveIdx }}>
          <HeroGrid />
        </ActiveIdxContext.Provider>
      </div>
      {/* Some absolute elements */}
      {/* ---------Bg Images--------- */}
      {/* <Background /> */}
      {/* ---------BG_comp---------- */}
      <BgComp />
    </div>
  );
}

export default App;
