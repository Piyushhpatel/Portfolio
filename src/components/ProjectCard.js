"use client";

import { Fragment, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const ProjectCard = ({
  name,
  thumbnail,
  description,
  link,
  github,
  technologies,
  photo,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
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
            onClick={() => setShow(true)}
            className="px-4 mt-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            View Project
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* Dialog Box For Card Details */}
      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="overflow-y-auto max-w-[900px] w-full max-h-[80vh] rounded-xl bg-[#0C162D]/75 backdrop-blur-md border py-5 px-10 border-white/80">
            <button
              onClick={() => setShow(false)}
              className="fixed top-1 right-1 z-10 flex overflow-hidden items-center justify-center rounded-full border border-white/75 p-2 group"
            >
              <div className="h-full w-full absolute -left-[100%] bg-[#E88DFF] group-hover:left-0 transition-all duration-300" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white z-10 group-hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="space-y-4 text-center lg:text-start">
              <img
                src={photo}
                alt={name}
                className="mx-auto h-[350px] opacity-80 w-full object-cover rounded-lg"
              />
              <h2 className="text-white text-2xl leading-8 font-semibold">{name}</h2>
              <p className="text-white text-sm">{description}</p>
              <div className="space-y-4 gap-x-4 flex flex-col lg:flex-row items-center">
                <p className="text-white text-md font-semibold">Technologies Used :</p>
                <div className="flex items-center space-x-2">
                  {technologies?.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt={`Technology ${index + 1}`}
                      className="h-8 w-8 object-contain"
                    />
                  ))}
                </div>
              </div>
              <div className="space-x-4">
                {link.length > 0 && <Link href={link} target="_blank" className="text-[#E88DFF] hover:underline">
                  Live Website
                </Link>}
                <Link href={github} target="_blank" className="text-[#E88DFF] hover:underline">
                  GitHub Repository
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default ProjectCard;
