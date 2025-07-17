import React from "react";

const Tag = ({ tagArray }) => {
  return (
    <div className="flex cursor-pointer">
      {tagArray.map((tag, index) => (
        <a
          key={index}
          className=" text-[11pt] bg-[#95959585] backdrop-blur-2xl text-[#bababa] rounded-full px-5 py-[4px] mr-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-102 transition-transform uppercase "
        >
          {tag}
        </a>
      ))}
    </div>
  );
};

export default Tag;
