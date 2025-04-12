import { RootState } from "@/store/store";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../features/project/projectSlice";
import iconGithub from "../../public/icons/icon-github.svg";

const ProjectModal = () => {
  const isShowModal = useSelector(
    (state: RootState) => state.project.isShowModal
  );
  const dispatch = useDispatch();

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

  return isShowModal ? (
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
          <span className="text-white text-3xl">data.project.title</span>
        </div>
        <div className="h-full px-44">
          <div>
            <span>날짜</span>
          </div>
          <div className="py-4">
            <div className="flex justify-center items-center gap-12 h-44 py-2">
              <div className="w-64 h-44 bg-black" />
              <div className="w-64 h-44 bg-black" />
              <div className="w-64 h-44 bg-black" />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold text-2xl">주요 기능</span>
            <div></div>
          </div>
          <div className="py-2">
            <span className="font-bold text-2xl">기술 및 스택</span>
            <div></div>
          </div>
          <div className="py-2">
            <span className="font-bold text-2xl">기여도</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectModal;
