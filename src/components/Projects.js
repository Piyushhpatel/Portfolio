import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="z-10 max-w-[1024px] lg:max-h-[600px] w-full  bg-gradient-to-t from-[#E88DFF] to-[#2DBFFE] p-[3px] rounded-[15px]">
    <div className="flex flex-col max-w-screen lg:max-h-[600px] w-full h-full bg-[#0C162D] rounded-[12px] backdrop:blur-sm py-6 px-[20px]">
    <div>
        <h2 className="text-white text-[32px] w-full font-normal underline leading-[48px]">
          Projects
        </h2>
      </div>
      <div className="flex flex-wrap mx-auto mt-10 gap-6 max-w-[800px] w-full items-center justify-center">
      {
        <ProjectCard/>
      }
      </div>
    </div>
  </div>
  );
};

export default Projects;
