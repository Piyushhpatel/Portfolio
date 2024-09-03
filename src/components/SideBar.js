"use client";

import Link from "next/link";

const SideBar = ({ activeSection = "aboutus" }) => {
  const isActive = (section) => section === activeSection;

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1XJmhB_ecW2YNqWo7b2qD0pLz2mVe7XKm/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <aside className="hidden lg:flex max-w-[300px] w-full min-h-[92vh] h-full bg-gradient-to-t from-[#E88DFF] to-[#2DBFFE] p-[3px] rounded-[15px]">
      <div className="flex flex-col py-8 items-center justify-between max-w-[300px] w-full min-h-[91vh] h-full bg-[#0C162D] rounded-[12px] backdrop:blur-sm">
        {/* Name Section */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="/avtar.jpeg"
            alt="Avatar"
            className="w-[120px] h-[120px] rounded-full select-none"
          />
          <div>
            <h2 className="text-white/75 text-[24px] text-center font-bold leading-[34px] select-none">
              Piyush Patel
            </h2>
            <h4 className="text-white/70 text-[16px] font-light text-center leading-[18px] select-none">
              Software Developer
            </h4>
          </div>
        </div>

        {/* Nav Links */}
        <div className="z-10 flex select-none">
          <ul className="flex flex-col items-center justify-center gap-3">
            {["aboutus", "skills", "projects", "certificates"].map((section) => (
              <li
                key={section}
                className={`text-center text-[16px] font-semibold w-full hover:scale-105 transition-transform select-none ${
                  isActive(section) ? "text-white" : "text-white/80"
                }`}
              >
                <a
                  href={`#${section}`}
                  aria-current={isActive(section) ? "page" : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
                <div
                  className={`h-[2px] bg-white w-full ${
                    isActive(section) ? "opacity-1" : "opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Socials and Contact Part */}
        <div className="z-10 flex flex-col items-center justify-center gap-5">
          <div className="flex items-center gap-3">
            {[
              { href: "https://leetcode.com/u/piyuxshp/", src: "/socials/leetcode.jpg", alt: "leetcode" },
              { href: "https://linkedin.com/in/piyushpatell", src: "/socials/linkedin.png", alt: "linkedin" },
              { href: "https://github.com/Piyushhpatel", src: "/socials/github.png", alt: "github" },
              { href: "https://x.com/astraphiliaa", src: "/socials/twitter.png", alt: "twitter" }
            ].map((link) => (
              <Link
                key={link.alt}
                href={link.href}
                target="_blank"
                className="hover:scale-125 transition-transform duration-300 select-none"
              >
                <img
                  src={link.src}
                  className="w-[30px] h-[30px] rounded-full bg-white select-none"
                  alt={link.alt}
                />
              </Link>
            ))}
          </div>

          <div>
            <button
              onClick={handleResumeClick}
              className="relative max-w-[210px] max-h-[50px] w-full h-full rounded-[15px] border border-white/80 text-white/80 px-8 py-2 overflow-hidden group select-none"
            >
              <div className="absolute top-0 -left-[100%] rounded-[15px] -z-[10] bg-[#B20DFF] h-full w-full group-hover:left-0 transition-all duration-300 ease-in-out" />
              <p className="z-10 text-white font-bold">View Resume</p>
            </button>
          </div>

          <div>
            <Link
              href="mailto:piyushpatel1746@gmail.com"
              className="max-w-[210px] max-h-[50px] w-full h-full rounded-[15px] text-white bg-[#B20DFF] px-8 py-2 font-bold hover:opacity-90 hover:scale-110 transition-transform duration-300 select-none"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
