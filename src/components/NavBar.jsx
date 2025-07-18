import React from "react";
import SearchIcon from "./SVGs/SearchIcon";
import UserIcon from "./UserIcon";
import TimeWidget from "./TimeWidget";
import MetalBorderWrapperHover from "./MetalBorderWrapperHover";
const navList = [
  // { name: "Home", link: "#" },
  { name: "Library", link: "#" },
  { name: "Store", link: "#" },
];

const navConstructor = () => {
  return navList.map((nav, idx) => (
    <li key={idx + nav.name}>
      <MetalBorderWrapperHover noiseSize={0.02}>
        <a href={nav.link} className=" font-extralight p-2 px-3">
          {nav.name}
        </a>
      </MetalBorderWrapperHover>
    </li>
  ));
};

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center ">
      {/* Left nav */}
      <div className="flex gap-[2rem] text-[24px] tracking-wide ">
        <MetalBorderWrapperHover>
          <span className="p-2 px-3">Games</span>
        </MetalBorderWrapperHover>
        {navConstructor()}
      </div>
      {/* Right nav */}
      <div className="flex items-center gap-[2rem] text-[24px] font-light">
        <MetalBorderWrapperHover>
          <div className="p-2">
            <SearchIcon />
          </div>
        </MetalBorderWrapperHover>
        <MetalBorderWrapperHover>
          <div className="p-1">
            <UserIcon />
          </div>
        </MetalBorderWrapperHover>
        <TimeWidget />
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
