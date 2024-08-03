import React from "react";
import { FlipWords } from "./ui/FlipWords";

export function Words() {
  const words = [ "a\u00A0Software\u00A0Developer",
    "an\u00A0AI/ML\u00A0Enthusiast",
    "an\u00A0OpenSource\u00A0Contributor",
  "a\u00A0Freelancer",
  "a\u00A0Sports\u00A0Freak"
]

  return (
    <div className="justify-center items-center">
      <div className="text-[21px] font-normal mx-auto text-neutral-600 dark:text-neutral-400">
      I'm
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}