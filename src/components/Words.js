import React from "react";
import { FlipWords } from "./ui/FlipWords";

export function Words() {
  const words = [ "CPer", // bc space k lie bhi unicode 
    "MERN\u00A0Developer",
    "AI/ML\u00A0Enthusiast",
    "OpenSource\u00A0Contributor",
    "Coder",
  "Freelancer"]

  return (
    <div className="justify-center items-center px-4">
      <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      I am a 
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}