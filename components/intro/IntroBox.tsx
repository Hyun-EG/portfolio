"use client";

import { useEffect, useRef, useState } from "react";
import Code from "./Code";
import iconVscode from "../../public/icons/logo-vscode.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { hideNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";
import { Link } from "react-scroll";

const IntroBox = () => {
  const LINE_NUM = Array.from({ length: 7 });
  const [isShowIntro, setIsShowIntro] = useState(true);
  const introRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!introRef.current) return;
    const cleanup = observeNav(introRef.current, 0.5, () =>
      dispatch(hideNav())
    );
    return cleanup;
  }, [dispatch]);

  return (
    <div
      ref={introRef}
      className="w-full h-screen flex flex-col justify-center items-center px-4"
    >
      <div className="w-full sm:w-[400px] h-[500px] md:w-[768px] h-[700px] lg:w-[1024px] h-[800px] xl:w-[1480px] h-[900px] rounded-tl-3xl flex flex-col bg-bgBlack">
        <div className="flex sm:h-16 xl:h-[64px] ">
          {isShowIntro && (
            <div className="flex justify-center items-center bg-bgBlack sm: w-84 rounded-tl-2xl xl: w-[200px] pl-7 gap-3 rounded-tl-3xl">
              <span className="text-yellow sm:text-xl xl:text-2xl">JS</span>
              <span className="sm:text-xl xl:text-2xl">intro.js</span>
              <span
                onClick={() => {
                  setIsShowIntro(false);
                }}
                className="sm: text-xl xl: text-2xl cursor-pointer"
              >
                ✕
              </span>
            </div>
          )}
          <div className="flex flex-1 justify-end items-center bg-[#4E525F]">
            {isShowIntro && (
              <>
                <span className="hidden xl: block text-xl">
                  Run Code &gt;&gt;&gt;{" "}
                </span>
                <Link to="profile" smooth={true} duration={500}>
                  <span className="px-10 text-3xl cursor-pointer">▷</span>
                </Link>
              </>
            )}
          </div>
        </div>
        {!isShowIntro && (
          <div className="flex flex-col justify-center items-center">
            <Image className="opacity-50" src={iconVscode} alt="vscode이미지" />
            <div>
              <div className=" mb-4 sm: text-center">
                <span className=" sm: text-xl xl: text-2xl">최근항목</span>
              </div>
              <div>
                <span
                  onClick={() => {
                    setIsShowIntro(true);
                  }}
                  className="text-blue xl: pr-4 font-bold cursor-pointer"
                >
                  intro.js
                </span>
                <span className="sm: hidden xl:block text-grey text-lg">
                  C:\parkseonghyun\developer\frontEnd\intro.js
                </span>
              </div>
            </div>
          </div>
        )}
        {isShowIntro && (
          <div className="flex flex-col text-white sm: py-2 xl:px-16 py-8">
            <div className="text-grey sm:text-center xl:text-start text-xs xl:text-xl">
              c: &gt; parkseonghyun &gt; developer &gt; frontEnd &gt;{" "}
              <span className="text-yellow">JS</span> intro.js
            </div>
            <div className="px-4 py-4 flex text-2xl">
              <div className="hidden xl:block flex flex-col gap-1.5">
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
