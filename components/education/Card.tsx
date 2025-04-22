import { EducationPropsType } from "@/types/educationProps";
import React from "react";

const Card = ({ title, content, date, options }: EducationPropsType) => {
  return (
    <div className="w-1/2 h-96 p-4 bg-[#262626]">
      <div className="py-1 sm:text-xl xl:text-3xl">{title}</div>
      <div>
        <span>{content}</span>
      </div>
      <div className="pb-4 sm:text-sm xl:text-base">
        <span>{date}</span>
      </div>
      <div className="text-[#bebebe]">
        <div>
          {[
            options.map((item, index) => (
              <div className="sm:text-xs xl:text-base" key={index}>
                <span className="select-none pr-1">•</span>
                {item}
              </div>
            )),
          ]}
        </div>
      </div>
    </div>
  );
};

export default Card;
