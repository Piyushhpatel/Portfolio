"use client";

import { useRef, useState, useEffect, Fragment } from "react";
import { useInView } from "react-intersection-observer";
import AboutUs from "@/components/AboutUs";
import BgWrapper from "@/components/BgWrapper";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import SideBar from "@/components/SideBar";
import Skills from "@/components/Skills";
import { CiMenuBurger } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("aboutus");
  const [showNav, setShowNav] = useState(false);

  // Use a ref to debounce the scroll events
  const sectionRefs = {
    aboutus: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    certificates: useRef(null),
  };

  const handleScroll = () => {
    const sectionEntries = Object.entries(sectionRefs).map(([section, ref]) => ({
      section,
      ref: ref.current,
    }));

    let currentSection = "";

    for (const { section, ref } of sectionEntries) {
      const { top, bottom } = ref.getBoundingClientRect();
      if (top < window.innerHeight * 0.5 && bottom > window.innerHeight * 0.5) {
        currentSection = section;
      }
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="-z-[100] h-screen w-screen fixed">
        <BgWrapper />
      </div>
      <div className="flex flex-col lg:flex-row lg:p-8 pb-6 gap-5">
        <nav className="lg:hidden flex items-center justify-between px-10 sticky z-[100] h-14 inset-x-0 top-0 w-full bottom-b border-white/70 bg-[#0C162D]/75 backdrop-blur-lg transition-all">
          <img
            src="/avtar.jpeg"
            className="h-[30px] w-[30px] rounded-full opacity-75"
            alt="avtar"
          />
          <div className="flex gap-4 items-center">
            <Link href="https://drive.google.com/file/d/1XJmhB_ecW2YNqWo7b2qD0pLz2mVe7XKm/view?usp=sharing" target="_blank">
              <GrDocumentText className="text-xl text-white/75" />
            </Link>
            <Link href="mailto:piyushpatel1746@gmail.com" target="_blank">
              <MdEmail className="text-2xl text-white/75" />
            </Link>
            <div
              className="cursor-pointer z-10"
              onClick={() => setShowNav(true)}
            >
              <CiMenuBurger className="text-white text-2xl cursor-pointer" />
            </div>
          </div>
        </nav>
        <div className="hidden lg:block sticky top-8 min-w-[300px] ml-5 max-h-[90vh]">
          <SideBar activeSection={activeSection} />
        </div>
        <div className="relative flex flex-col px-4 lg:px-0 justify-center items-center w-full gap-8 lg:ml-14">
          <section ref={sectionRefs.aboutus} id="aboutus" className="z-10 w-full">
            <AboutUs />
          </section>
          <section ref={sectionRefs.skills} id="skills" className="z-10 w-full">
            <Skills />
          </section>
          <section ref={sectionRefs.projects} id="projects" className="z-10 w-full">
            <Projects />
          </section>
          <section ref={sectionRefs.certificates} id="certificates" className="w-full">
            <Certificates />
          </section>
        </div>
      </div>
      <footer className="lg:hidden flex items-center justify-center px-10 z-[100] h-14 inset-x-0 bottom-0 w-full bottom-t border-white bg-[#0C162D] backdrop-blur-lg transition-all">
        <p className="text-white text-sm">🌱 Made by Piyush Patel</p>
      </footer>

      {/* Navigation Modal */}
      <Transition
        show={showNav}
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
        className="fixed top-0 left-0 right-0 bg-[#0C162D] backdrop-blur-2xl opacity-95 flex items-center shadow-lg z-[100]"
      >
        <div className="z-10 flex items-center justify-center mx-auto px-10 py-12 select-none">
          <button
            onClick={() => setShowNav(false)}
            className="fixed top-3 right-5 z-10 flex overflow-hidden items-center justify-center rounded-full border border-white/75 p-2 group"
          >
            <div className="h-full w-full absolute -left-[100%] bg-[#E88DFF] group-hover:left-0 transition-all duration-300" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-white z-10 group-hover:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-center justify-center gap-3">
            {["aboutus", "skills", "projects", "certificates"].map((section) => (
              <li
                key={section}
                className={`text-center text-[16px] font-semibold w-full hover:scale-105 select-none ${
                  activeSection === section ? "text-white" : "text-white/80"
                }`}
                onClick={() => setShowNav(false)}
              >
                <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                <div
                  className={`h-[2px] bg-white w-full ${
                    activeSection === section ? "opacity-1" : "opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </>
  );
}
