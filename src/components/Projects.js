import ProjectCard from "./ProjectCard";
import { ProjectData } from "@/data/data";

const Projects = () => {
  return (
    <div className="max-w-[1024px] w-full  bg-gradient-to-t from-[#E88DFF] to-[#2DBFFE] p-[3px] rounded-[15px]">
      <div className="flex flex-col max-w-screen w-full h-full bg-[#0C162D] rounded-[12px] backdrop:blur-sm py-6 px-[20px]">
        <div>
          <h2 className="text-white text-[32px] text-center lg:text-start w-full font-normal underline leading-[48px]">
            Projects
          </h2>
        </div>
        <div className="flex flex-col mt-8">
          <h4 className="text-white text-[28px] text-center lg:text-start font-semibold w-full leading-[48px]">
            Web
          </h4>
          <div className="flex flex-wrap mt-2 mx-auto gap-6 w-full items-center justify-center">
            {ProjectData.Web.map((item) => (
              <ProjectCard
                key={item.id}
                name={item.name}
                thumbnail={item.thumbnail}
                description={item.description}
                link={item.link}
                github={item.github}
                technologies={item.technologies}
                photo={item.photo}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <h4 className="text-white text-[28px]  text-center lg:text-start font-semibold w-full leading-[48px]">
            App
          </h4>
          <div className="flex  mt-2 flex-wrap mx-auto gap-6 w-full items-center justify-center lg:justify-start">
            {ProjectData.App.map((item) => (
              <ProjectCard
                key={item.id}
                name={item.name}
                thumbnail={item.thumbnail}
                description={item.description}
                link={item.link}
                github={item.github}
                technologies={item.technologies}
                photo={item.photo}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <h4 className="text-white text-[28px]  text-center lg:text-start font-semibold w-full leading-[48px]">
            Software
          </h4>
          <div className="flex flex-wrap mt-2 mx-auto gap-6 w-full items-start justify-center lg:justify-start">
            {ProjectData.Software.map((item) => (
              <ProjectCard
                key={item.id}
                name={item.name}
                thumbnail={item.thumbnail}
                description={item.description}
                link={item.link}
                github={item.github}
                technologies={item.technologies}
                photo={item.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
