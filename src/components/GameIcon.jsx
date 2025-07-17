import GlossLayerSVG from "./SVGs/GlossLayerSVG";
import MetalBorderWrapper from "./MetalBorderWrapper";
const borderRadius = "28px";

const GameIcon = ({ icon_img, isActive }) => {
  // const randomSeed = Math.floor(Math.random() * 100);
  return (
    <MetalBorderWrapper
      key={icon_img}
      isActive={isActive}
      borderRadius={borderRadius}
    >
      <div className="relative rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <img
          src={icon_img}
          className=" w-full h-full object-cover aspect-square"
        ></img>
        {isActive && <GlossLayerSVG />}
      </div>
    </MetalBorderWrapper>
  );
};

export default GameIcon;
