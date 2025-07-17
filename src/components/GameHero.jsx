import React from "react";
import hadesIcon from "../assets/logo/hades_logo.png";
import PlayButton from "./PlayButton";
import Tag from "./Tag";
import GamesMetadata from "./GamesMetadata";
const tagArray = ["Sucker Punch"];
const GameHero = () => {
  return (
    <div className=" flex flex-col gap-2 h-full items-start justify-end">
      <div>
        <img src={hadesIcon} className="h-[9rem]" />
      </div>
      <span className="font-extralight w-[20rem] text-[16pt] tracking-wide truncate-text mb-10">
        Defy the god of the dead as you hack and slash out of the Underworld in
        this rogue-like dungeon crawler from the creators of Bastion,
        Transistor, and Pyre.
      </span>
      {/* <Tag tagArray={tagArray} /> */}
      {/* PlayButton */}
      <PlayButton />
    </div>
  );
};

export default React.memo(GameHero);
