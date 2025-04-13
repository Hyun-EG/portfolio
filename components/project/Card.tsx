import React from "react";
import { CardProps } from "@/types/cardProps";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { showModal } from "@/features/project/projectSlice";

const Card = ({
  projectImg,
  projectName,
  projectDesc,
  badges,
  onClick,
}: CardProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showModal());
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      onClick={handleClick}
      className="w-80 h-96 flex flex-col bg-neutral-800 rounded-3xl cursor-pointer"
    >
      <div className="h-40 w-full relative">
        <Image
          className="rounded-t-3xl object-cover"
          src={projectImg}
          alt={`${projectName}의 이미지입니다.`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="h-16 p-4">
        <span className="text-2xl">{projectName}</span>
      </div>
      <div className="h-20 p-4">
        <span>{projectDesc}</span>
      </div>
      <div className="h-20 p-4">
        <span>{badges}</span>
      </div>
    </div>
  );
};

export default Card;
