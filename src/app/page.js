"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AboutUs from "@/components/AboutUs";
import BgWrapper from "@/components/BgWrapper";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import SideBar from "@/components/SideBar";
import Skills from "@/components/Skills";

export default function Home() {
  const [activeSection, setActiveSection] = useState("aboutus");

  const { ref: aboutInViewRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });
  const { ref: skillInViewRef, inView: skillInView } = useInView({
    threshold: 0.5,
  });
  const { ref: projectInViewRef, inView: projectInView } = useInView({
    threshold: 0.5,
  });
  const { ref: certificateInViewRef, inView: certificateInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (aboutInView) setActiveSection("aboutus");
    else if (skillInView) setActiveSection("skills");
    else if (projectInView) setActiveSection("projects");
    else if (certificateInView) setActiveSection("certificates");
    else setActiveSection("");
  }, [aboutInView, skillInView, projectInView, certificateInView]);

  return (
    <>
      <div className="-z-[100] h-screen w-screen fixed">
        <BgWrapper />
      </div>
      <div className="flex flex-col lg:flex-row lg:p-8 pb-6 gap-5">
        <nav className="lg:hidden flex items-center justify-between px-10 sticky z-[100] h-14 inset-x-0 top-0 w-full bottom-b border-white/70 bg-[#0C162D]/75 backdrop-blur-lg transition-all">
            <img
              src="/avtar.jpeg"
              className="h-[30px] w-[30px] rounded-full opacity-75 "
              alt="avtar"
            />
            <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white/70 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            </div>
        </nav>
        <div className="hidden lg:block sticky top-8 min-w-[300px] ml-5 max-h-[90vh]">
          <SideBar activeSection={activeSection} />
        </div>
        <div className="relative flex flex-col px-8 lg:px-0 justify-center items-center w-full gap-8 lg:ml-14">
          <div ref={aboutInViewRef} id="aboutus" className="-z-10 w-full">
            <AboutUs />
          </div>
          <div ref={skillInViewRef} id="skills" className=" w-full">
            <Skills />
          </div>
          <div ref={projectInViewRef} id="projects" className="w-full">
            <Projects />
          </div>
          <div ref={certificateInViewRef} id="certificates" className="w-full">
            <Certificates />
          </div>
        </div>
        
      </div>
      <footer className="lg:hidden flex items-center justify-center px-10  z-[100] h-14 inset-x-0 bottom-0 w-full bottom-t border-white bg-[#0C162D] backdrop-blur-lg transition-all">
          <p className="text-white text-sm">🌱 Made by Piyush Patel</p>
      </footer>
    </>
  );
}
