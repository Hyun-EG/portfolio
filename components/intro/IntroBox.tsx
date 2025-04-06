"use client";

import { useState } from "react";
import Code from "./Code";
import iconVscode from "../../public/icon/logo-vscode.svg";
import Image from "next/image";

const IntroBox = () => {
  const LINE_NUM = Array.from({ length: 7 });

  const [isShowIntro, setIsShowIntro] = useState(true);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4">
      <div className="w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1600px] h-[800px] rounded-tl-3xl flex flex-col bg-bgGrey">
        <div className="h-[64px] flex">
          {isShowIntro && (
            <div className="w-[200px] pl-7 flex gap-3 justify-center items-center rounded-tl-3xl bg-[#1E1E1E]">
              <span className="text-2xl text-yellow">JS</span>
              <span className="text-2xl">intro.js</span>
              <span
                onClick={() => {
                  setIsShowIntro(false);
                }}
                className="text-2xl cursor-pointer"
              >
                ✕
              </span>
            </div>
          )}
          <div className="flex flex-1 justify-end items-center bg-[#4E525F]">
            {isShowIntro && (
              <>
                <span className="text-xl">Run Code &gt;&gt;&gt; </span>
                <span className="px-10 text-3xl cursor-pointer">▷</span>
              </>
            )}
          </div>
        </div>
        {!isShowIntro && (
          <div className="flex flex-col justify-center items-center">
            <Image className="opacity-50" src={iconVscode} alt="vscode이미지" />
            <div>
              <div className=" mb-4">
                <span className="text-2xl">최근항목</span>
              </div>
              <div>
                <span
                  onClick={() => {
                    setIsShowIntro(true);
                  }}
                  className="pr-4 text-blue font-bold cursor-pointer"
                >
                  intro.js
                </span>
                <span className="text-grey text-lg">
                  C:\parkseonghyun\developer\frontEnd\intro.js
                </span>
              </div>
            </div>
          </div>
        )}
        {isShowIntro && (
          <div className="px-16 py-8 flex flex-col text-white">
            <div className="text-grey text-xl">
              c: &gt; parkseonghyun &gt; developer &gt; frontEnd &gt;{" "}
              <span className="text-yellow">JS</span> intro.js
            </div>
            <div className="px-4 py-4 flex text-2xl">
              <div className="flex flex-col gap-1.5">
                {LINE_NUM.map((_, index) => (
                  <div key={index} className="text-grey">
                    {index + 1}
                  </div>
                ))}
              </div>
              <Code />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroBox;
