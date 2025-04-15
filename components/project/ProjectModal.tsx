import { RootState } from "@/store/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../features/project/projectSlice";
import iconGithub from "../../public/icons/icon-github.svg";
import Swiper from "./Swiper";
import { projectData } from "../../data/project-data/ProjectData";

const ProjectModal = () => {
  const isShowModal = useSelector(
    (state: RootState) => state.project.isShowModal
  );
  const selectedProject = useSelector(
    (state: RootState) => state.selectedProject.selectedProject
  );
  const dispatch = useDispatch();

  const data = selectedProject ? projectData[selectedProject] : null;

  const [openSkills, setOpenSkills] = useState<boolean[]>([]);
  const [openContribution, setOpenContribution] = useState<boolean[]>([]);

  useEffect(() => {
    if (data) {
      setOpenSkills(new Array(data.skills.length).fill(false));
      setOpenContribution(new Array(data.contribution.length).fill(true));
    }
  }, [data]);

  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isShowModal]);

  const toggleSkill = (index: number) => {
    setOpenSkills((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const toggleContribution = (index: number) => {
    setOpenContribution((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return isShowModal && data ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start text-black overflow-scroll overflow-x-hidden">
      <div className="absolute top-12 right-24 flex flex-col gap-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-bgBlack cursor-pointer">
          <span
            onClick={() => dispatch(hideModal())}
            className="text-3xl text-white"
          >
            ✕
          </span>
        </div>
        <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full bg-white cursor-pointer">
          <Image className="w-12 h-12" src={iconGithub} alt="깃허브 아이콘" />
        </div>
      </div>
      <div className="w-full h-auto flex flex-col mx-64 pb-12 bg-white rounded-lg shadow-xl">
        <div
          className="py-8 text-center rounded-t-lg"
          style={{ backgroundColor: data.mainColor }}
        >
          <span className="text-white text-3xl">{data.title}</span>
        </div>
        <div className="h-full px-44">
          <div className="py-4 text-center">
            <div className="py-2 font-bold">{data.description}</div>
            <div>
              <span className="p-1 rounded-lg bg-olive font-bold">
                {data.date}
              </span>
            </div>
            <div className="py-2">
              <span className="p-1 rounded-lg bg-purple font-bold">
                {data.team}
              </span>
            </div>
          </div>
          <div className="py-4">
            <Swiper images={data.images} />
          </div>
          <div className="py-2">
            <div className="pb-2">
              <span className="font-bold text-2xl">주요 기능</span>
            </div>
            <div>
              {data.keyFeatures.map((item, index) => (
                <div key={index}>
                  <span className="select-none pr-1">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="py-2">
            <div className="pb-2">
              <span className="font-bold text-2xl">기술 및 스택</span>
            </div>
            <div>
              {data.skills.map((item, index) => (
                <div key={index} className="mb-2">
                  <div
                    className="p-1 cursor-pointer select-none bg-[#f2f2f2] hover:bg-[#bebebe]"
                    onClick={() => toggleSkill(index)}
                  >
                    <span className="inline-block w-4">
                      {openSkills[index] ? "⯆" : "⯈"}
                    </span>
                    <span className="pl-1">{item.skill}</span>
                  </div>
                  {openSkills[index] && (
                    <div className="pt-1 pl-6 text-base text-gray-700">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="py-2">
            <div className="pb-2">
              <span className="font-bold text-2xl">기여도</span>
            </div>
            <div>
              {data.contribution.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => toggleContribution(index)}
                    className="p-1 font-bold cursor-pointer select-none bg-[#f2f2f2] hover:bg-[#bebebe]"
                  >
                    {item.title}
                  </div>
                  <div>
                    {openContribution[index] &&
                      item.content.map((item, index) => (
                        <div key={index}>
                          <span className="select-none pr-1">•</span>
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectModal;
