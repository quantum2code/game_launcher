import React from "react";
import CompletionWidget from "./CompletionWidget";
import PlayTimeWidget from "./PlayTimeWidget";
import MetalBorderWrapperHover from "./MetalBorderWrapperHover";

const GamesMetadata = () => {
  return (
    <div className="flex gap-5">
      <MetalBorderWrapperHover>
        <CompletionWidget />
      </MetalBorderWrapperHover>
      <MetalBorderWrapperHover>
        <PlayTimeWidget />
      </MetalBorderWrapperHover>
    </div>
  );
};

export default GamesMetadata;
