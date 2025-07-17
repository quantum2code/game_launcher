import React from "react";

const TimeWidget = () => {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Pad with leading zeros if single digit
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;
  return <div>{formattedTime}</div>;
};

export default TimeWidget;
