import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ({name, thumbnail}) => {
  return (
    <CardContainer>
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto h-auto rounded-xl p-6 border ">
        <CardItem
          translateZ="10"
          rotateX={2}
          rotateZ={-2}
          className="w-full mt-2"
        >
          <img
            src={thumbnail}
            className="object-fill w-full h-full max-h-[150px] max-w-[250px] rounded-xl group-hover/card:shadow-xl select-none"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-[18px] mt-4 font-bold text-white/80"
        >
          {name}
        </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 mt-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            View Project
          </CardItem>
        
      </CardBody>
    </CardContainer>
  )
};

export default ProjectCard;
