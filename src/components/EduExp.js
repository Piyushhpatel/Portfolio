"use client";

import { useState } from "react";

const ExpEdu = () => {
  const [currentTab, setCurrentTab] = useState("education");

  return (
    <div className="flex flex-col w-full mt-8">
      <div className="flex w-full justify-between max-w-[250px] items-center">
        <span
          className={`${
            currentTab == "education"
              ? "text-[#B20DFF] underline"
              : "text-white"
          } text-[21px] font-normal leading-[31px] select-none cursor-pointer transition-all duration-300`}
          onClick={() => setCurrentTab("education")}
        >
          Education
        </span>
        <span
          className={`${
            currentTab == "experience"
              ? "text-[#B20DFF] underline"
              : "text-white"
          } text-[21px] font-normal leading-[31px] select-none cursor-pointer transition-all duration-100`}
          onClick={() => setCurrentTab("experience")}
        >
          Experience
        </span>
      </div>

      <div className="w-full relative py-2 px-6 m-2 overflow-y-auto min-h-[100px]">
        <div className="absolute left-1 top-0 w-[2px] h-full bg-white/40" />
        <div className="w-[8px] h-[8px] rounded-full absolute top-4 left-[1px] bg-white" />
        {currentTab == "education" && (
          <div className="flex flex-col gap-2">
            <span className="text-white text-[16px] leading-[25px] font-[500]">2020-2024</span>
            <span className="text-white/75 text-[14px] leading-[16px] font-normal">Bachelors of Technology - Computer Science Engineering, Institute of Engineering and Science, IPS Academy</span>
          </div>
        )}
        {currentTab == "experience" && (
          <div className="flex flex-col gap-2">
            <span className="text-white text-[16px] leading-[25px] font-[500]">2022-2023</span>
            <span className="text-white/75 text-[14px] leading-[16px] font-normal">Core Member - Google Student Developer Club, IPS Academy</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpEdu;
