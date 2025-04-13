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

  const [isShowSkillContent, setIsShowSkillContent] = useState(false);

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

  return isShowModal && data ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center text-black overflow-scroll overflow-x-hidden">
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
      <div className="w-full h-full flex flex-col mx-64 bg-white rounded-lg shadow-xl">
        <div className="py-8 text-center bg-blue rounded-t-lg">
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
            <Swiper
              images={[
                { img: data.images.img1 },
                { img: data.images.img2 },
                { img: data.images.img3 },
              ]}
            />
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
            <span className="font-bold text-2xl">기술 및 스택</span>
            <div>
              {data.skills.map((item, index) => (
                <div key={index} className="mb-2 flex gap-1">
                  <div className="font-bold">
                    <span
                      className="cursor-pointer select-none"
                      onClick={() => {
                        setIsShowSkillContent((prev) => (prev ? false : true));
                      }}
                    >
                      ▶
                    </span>
                    {item.skill}
                  </div>
                  <div>{isShowSkillContent && item.content}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold text-2xl">기여도</span>
            <div>{data.contribution}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectModal;
