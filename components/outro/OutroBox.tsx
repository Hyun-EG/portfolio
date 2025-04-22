"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { hideNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";
import Image from "next/image";

import iconMail from "../../public/icons/icon-email.svg";
import iconGithub from "../../public/icons/icon-github.svg";

const OutroBox = () => {
  const outroRef = useRef(null);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!outroRef.current) return;
    observeNav(outroRef.current, 0.5, () => {
      dispatch(hideNav());
      setTimeout(() => setIsVisible(true), 10);
    });
  }, [dispatch]);

  return (
    <div className="bg-bgBlack">
      <div
        id="outro"
        ref={outroRef}
        className={`w-full min-h-screen text-white flex transition-opacity duration-[1000ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-1/2 p-24 flex flex-col justify-between border-r">
          <div>
            <div className="text-9xl text-start">Thank You</div>
            <div className="text-9xl text-end">For Visiting.</div>
          </div>
          <div className="text-center">
            <span>Copyright 2025. parkseonghyun — better ux better web.</span>
          </div>
        </div>
        <div className="w-1/2 p-24 flex flex-col justify-end">
          <div className="pb-10 text-center text-7xl">
            <span>Contact Me!</span>
          </div>
          <div className="w-full h-96 px-24 flex justify-between items-center p-10 border border-white rounded-3xl">
            <div
              onClick={() => {
                window.location.href = "mailto:codiee@naver.com";
              }}
              className="w-52 h-52 flex justify-center items-center rounded-full bg-white cursor-pointer"
            >
              <Image
                width={150}
                quality={90}
                src={iconMail}
                alt="이메일 아이콘"
              />
            </div>
            <a href="https://github.com/Hyun-EG">
              <div className="w-52 h-52 flex justify-center items-center rounded-full bg-white cursor-pointer">
                <Image width={300} src={iconGithub} alt="깃허브 아이콘" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutroBox;
