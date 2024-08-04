"use client";
import { useState } from "react";

const SkillBubble = ({name, icon}) => {
  const [isHover, setIsHovered] = useState(false);
  return (
    <div className="relative flex flex-col">
      {isHover && <div className="text-white/75 transition-all duration-500  border border-white/70 rounded-lg py-2 px-6 absolute -left-5 -top-14 z-10 bg-black select-none">{name}</div>}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center cursor-pointer select-none hover:scale-110 transition-all duration-200 p-[2px] rounded-full h-14 w-14 border border-white"
      >
        <img
          src={icon}
          className="w-[50px] h-[50px] rounded-full shadow-blue-300 shadow-md"
          alt={name}
        />
      </div>
    </div>
  );
};

export default SkillBubble;
