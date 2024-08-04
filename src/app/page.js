import AboutUs from "@/components/AboutUs";
import BgWrapper from "@/components/BgWrapper";
import Projects from "@/components/Projects";
import SideBar from "@/components/SideBar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
    <div className="h-screen w-screen fixed">
      <BgWrapper/>
    </div>
    <div className="flex p-8 gap-5">
      <div className="hidden lg:block sticky top-8 min-w-[300px] ml-5 max-h-[90vh]">
      <SideBar />
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-8">
      <AboutUs/>
      <Skills/>
      <Projects/>
      </div>
    </div>
    </>
  );
}
