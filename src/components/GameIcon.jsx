import GlossLayerSVG from "./SVGs/GlossLayerSVG";
import MetalBorderWrapper from "./MetalBorderWrapper";

const GameIcon = ({ icon_img, isActive }) => {
  // const randomSeed = Math.floor(Math.random() * 100);
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={icon_img}
        className=" w-full h-full object-cover aspect-square"
      ></img>
      {isActive && <GlossLayerSVG />}
    </div>
  );
};

export default GameIcon;
