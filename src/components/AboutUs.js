import Link from "next/link";
import ExpEdu from "./EduExp";
import NoSsr from "./no-ssr";
import SkillBubble from "./SkillBubble";
import VoxelDog from "./voxel-dog";
import { Words } from "./Words";

const AboutUs = () => {
  return (
    <div className="max-w-[1024px] w-full  bg-gradient-to-t from-[#E88DFF] to-[#2DBFFE] p-[3px] backdrop-blur-lg rounded-[15px]">
      <div className="flex flex-col max-w-screen w-full h-full bg-[#0C162D] rounded-[12px] backdrop-blur-lg py-6 px-[20px]">
        <div className="hidden lg:block">
          <h2 className="text-white text-[32px] w-full font-normal underline leading-[48px]">
            About
          </h2>
        </div>
        <div className="p-2 lg:mt-10 flex flex-col-reverse lg:flex-row lg:px-16">
          <div>
            <div className="flex flex-col max-w-[600px] w-full gap-4">
              <div>
                <p className="text-[16px] mt-2 lg:mt-0 leading-[24px] font-[400] text-white">
                  &gt;_Hi, I'm
                </p>
                <h3 className="text-white text-[40px] font-semibold leading-[60px]">
                  Piyush Patel
                </h3>
                <Words />
              </div>
              <p className="text-white/60 text-[14px] text-justify leading-[18px]">
                A passionate software engineer in this code verse, on a journey
                to create beautiful software with a side of humor and expertise
                in Next.js, React, Flutter, and C++. Always learning, always
                coding! Constantly honing my skills to craft innovative
                solutions and transform ideas into reality. I would really like
                to connect with those passionate about tech and embark on an
                exciting journey of technology and laughter. Together, to write
                the next chapter of digital wonders!
              </p>
            </div>
            <div className="lg:hidden mt-6">
            <div className="flex items-center gap-3">
              <Link
                href={"https://leetcode.com/u/piyuxshp/"}
                target="_blank"
                className="hover:scale-125 transition-all duration-300 select-none"
              >
                <img
                  src="/socials/leetcode.jpg"
                  className="w-[30px] h-[30px] rounded-full bg-white select-none"
                  alt="leetcode"
                />
              </Link>
              <Link
                href={"https://linkedin.com/in/piyushpatell"}
                target="_blank"
                className="hover:scale-125 transition-all duration-300 select-none"
              >
                <img
                  src="/socials/linkedin.png"
                  className="w-[30px] h-[30px] rounded-full bg-white select-none"
                  alt="linkedin"
                />
              </Link>
              <Link
                href={"https://github.com/Piyushhpatel"}
                target="_blank"
                className="hover:scale-125 transition-all duration-300 select-none"
              >
                <img
                  src="/socials/github.png"
                  className="w-[30px] h-[30px] rounded-full bg-white select-none"
                  alt="github"
                />
              </Link>
              <Link
                href={"https://x.com/astraphiliaa"}
                target="_blank"
                className="hover:scale-125 transition-all duration-300 select-none"
              >
                <img
                  src="/socials/twitter.png"
                  className="w-[30px] h-[30px] rounded-full bg-white select-none"
                  alt="twitter"
                />
              </Link>
          </div>
            </div>
            <ExpEdu/>
          </div>
          <div className="flex rounded-xl items-center justify-center max-h-[400px] max-w-[400px] w-full h-full overflow-hidden">
            <VoxelDog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
