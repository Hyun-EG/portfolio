"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";
import NavBox from "../nav/NavBox";
import TitleBox from "../common/TitleBox";
import Image from "next/image";

//images
import imgMe from "../../public/images/image-me.png";
import iconGithub from "../../public/icons/icon-github.svg";
import iconMail from "../../public/icons/icon-email.svg";
import iconHuman from "../../public/icons/icon-human.svg";

import { skillsArr } from "../../data/profile-data/ProfileData";

const ProfileBox = () => {
  const contactArr = [
    { img: iconHuman, title: "박성현" },
    { img: iconGithub, title: "Github", email: "https://github.com/Hyun-EG" },
    { img: iconMail, title: "Email", email: "mailto:codiee@naver.com" },
  ];

  const dispatch = useDispatch();
  const navRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const [skillAchievement, setSkillAchievement] = useState(
    "스킬 이미지에 마우스를 올려주세요."
  );

  useEffect(() => {
    if (!navRef.current) return;
    observeNav(navRef.current, 0.5, () => {
      dispatch(showNav());
      setTimeout(() => setIsVisible(true), 10);
    });
  }, [dispatch]);

  return (
    <div id="profile">
      <NavBox />
      <div
        ref={navRef}
        className="w-full min-h-screen pl-96 py-12 flex flex-col bg-bgBlack text-white "
      >
        <TitleBox>PROFILE</TitleBox>
        <div
          className={`transition-opacity duration-[500ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          } `}
        >
          <div className="w-full flex px-12 py-4">
            <div className="w-64 h-64 bg-white rounded-full overflow-hidden">
              <Image className="w-64 h-72" src={imgMe} alt="나의 사진" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-4">
              {contactArr.map((item, index) => (
                <div
                  key={index}
                  className="w-1/2 h-12 p-6 rounded-xl  bg-white flex gap-8 items-center justify-center text-black"
                >
                  <Image
                    className="w-10"
                    src={item.img}
                    alt={`${item.title}의 이미지`}
                  />
                  <a
                    className="text-2xl text-black"
                    href={item.email}
                    target="blink"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-24 flex justify-center items-center">
            <span className="text-xl font-bold text-center">
              사용자의 입장에서 생각하며, 직관적이고 효율적인 UI/UX를 제공하는
              것을 중요하게 여깁니다. <br /> 끊임없이 개선을 추구하며, 사용자
              편의성을 최우선으로 생각합니다. :)
            </span>
          </div>
          <div className="w-full px-12 py-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-white via-purple to-blue bg-clip-text text-transparent">
              SKILLS
            </span>
            <div className="flex gap-4 py-8">
              {skillsArr.map((item, index) => (
                <div
                  key={index}
                  className="w-32 h-32 flex justify-center items-center bg-white rounded-full overflow-hidden"
                  onMouseEnter={() => setSkillAchievement(item.content)}
                  onMouseLeave={() =>
                    setSkillAchievement("스킬 이미지에 마우스를 올려주세요 :)")
                  }
                >
                  <Image src={item.img} alt={`${item.name}의 이미지`} />
                </div>
              ))}
            </div>
            <div className="w-full h-24 flex justify-center items-center bg-white rounded-3xl text-black">
              <span className="text-xl font-bold">{skillAchievement}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
