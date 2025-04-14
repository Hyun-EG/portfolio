"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";
import NavBox from "../nav/NavBox";
import TitleBox from "../common/TitleBox";
import Image from "next/image";

//images
import imgMeColor from "../../public/images/image-me-color.jpg";
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

  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [skillAchievement, setSkillAchievement] = useState(
    "스킬 이미지에 마우스를 올려주세요."
  );

  useEffect(() => {
    if (!navRef.current) return;
    const cleanup = observeNav(navRef.current, 0.9, () => {
      dispatch(showNav());
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
    });
    return cleanup;
  }, [dispatch]);

  return (
    <>
      <NavBox />
      <div
        ref={navRef}
        className=" w-full min-h-screen pl-96 py-12 flex flex-col bg-bgBlack text-white"
      >
        <TitleBox>PROFILE</TitleBox>
        {isMounted && (
          <>
            <div className="w-full flex px-12 py-4">
              <div
                className={`w-64 h-72 bg-white rounded-full overflow-hidden transition-opacity duration-[500ms] ${
                  isVisible ? "opacity-100" : "opacity-0"
                } `}
              >
                <Image className="w-64 h-72" src={imgMeColor} alt="나의 사진" />
              </div>
              <div className="flex-1 flex flex-col justify-center items-center gap-4">
                {contactArr.map((item, index) => (
                  <div
                    key={index}
                    className="w-1/2 h-12 p-6 rounded-xl bg-white flex gap-8 items-center justify-center text-black"
                  >
                    <Image
                      className="w-10"
                      src={item.img}
                      alt={`${item.title}의 이미지`}
                    />
                    <a className="text-2xl" href={item.email} target="blink">
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-24 flex justify-center items-center border border-white">
              <span className="text-xl font-bold text-center">
                협업을 통해 다양한 측면에서 배우고 도입하며 사용할 웹을 만들면서
                진정한 개발의 재미를 느끼고 있습니다. <br /> 이제는 팀원에
                합류하여 역량을 펼치고 함께 성장해 나가고 싶습니다 :)
              </span>
            </div>
            <div className="w-full px-12 py-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue via-olive to-purple bg-clip-text text-transparent">
                SKILLS
              </span>
              <div className="flex gap-4 py-8">
                {skillsArr.map((item, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 flex justify-center items-center bg-white rounded-full overflow-hidden"
                    onMouseEnter={() => setSkillAchievement(item.content)}
                    onMouseLeave={() =>
                      setSkillAchievement(
                        "스킬 이미지에 마우스를 올려주세요 :)"
                      )
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
          </>
        )}
      </div>
    </>
  );
};

export default ProfileBox;
