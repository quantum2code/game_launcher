import React from "react";
import userIcon from "../assets/icon/elden_ring_icon.png";

const UserIcon = () => {
  return (
    <div className="h-10 w-10 bg-neutral-200 rounded-full overflow-hidden">
      <img src={userIcon} alt="User Profile" />
    </div>
  );
};

export default UserIcon;
