import React from "react";
import SearchIcon from "./SVGs/SearchIcon";
import UserIcon from "./UserIcon";
const navList = [
  { name: "Home", link: "#" },
  { name: "Library", link: "#" },
  { name: "Store", link: "#" },
];

const navConstructor = () => {
  return navList.map((nav, idx) => (
    <li key={idx + nav.name}>
      <a
        href={nav.link}
        className=" font-light hover:font-medium transition-all"
      >
        {nav.name}
      </a>
    </li>
  ));
};

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      {/* Left nav */}
      <div className="flex gap-[2rem] text-[20px] tracking-wide ">
        {navConstructor()}
      </div>
      {/* Right nav */}
      <div className="flex items-center gap-[2rem]">
        <SearchIcon />
        <UserIcon />
      </div>
    </nav>
  );
};

export default NavBar;
