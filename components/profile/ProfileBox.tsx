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
import imgMeColor from "../../public/images/image-me-color.jpg";
import iconGithub from "../../public/icons/icon-github.svg";
import iconMail from "../../public/icons/icon-email.svg";
import iconHuman from "../../public/icons/icon-human.svg";
import iconJs from "../../public/icons/icon-javascript.svg";
import iconTs from "../../public/icons/icon-typescript.svg";
import iconHtml from "../../public/icons/icon-html.svg";
import iconCss from "../../public/icons/icon-css.svg";
import iconReact from "../../public/icons/icon-react.svg";
import iconNext from "../../public/icons/icon-next.svg";
import iconNode from "../../public/icons/icon-nodejs.svg";
import iconGit from "../../public/icons/icon-git.svg";
import iconSass from "../../public/icons/icon-sass.svg";
import iconJest from "../../public/icons/icon-jest.svg";

const ProfileBox = () => {
  const contactArr = [
    { img: iconHuman, title: "박성현" },
    { img: iconGithub, title: "Github", email: "https://github.com/Hyun-EG" },
    { img: iconMail, title: "Email", email: "mailto:codiee@naver.com" },
  ];

  const skillsArr = [
    {
      name: "HTML",
      img: iconHtml,
      content:
        "tried : 웹 표준과 접근성을 고려한 마크업을 학습하고 적용하고 있습니다.",
    },
    {
      name: "CSS",
      img: iconCss,
      content: "familiar : 반응형 디자인과 애니메이션 구현이 가능합니다.",
    },
    {
      name: "Javascript",
      img: iconJs,
      content:
        "familiar : ES6 문법을 자유롭게 사용하며, 로직 구현에 능숙합니다.",
    },
    {
      name: "Typescript",
      img: iconTs,
      content: "tried : 타입 안정성과 인터페이스 활용에 익숙합니다.",
    },
    {
      name: "React",
      img: iconReact,
      content: "familiar : 컴포넌트 기반 구조와 훅 사용에 능숙합니다.",
    },
    {
      name: "NextJS",
      img: iconNext,
      content: "tried : SSR/CSR 개념 이해와 API 라우팅 구현 경험이 있습니다.",
    },
    {
      name: "NodeJS",
      img: iconNode,
      content: "tried : Express를 활용한 간단한 서버 구축 경험이 있습니다.",
    },
    {
      name: "Git",
      img: iconGit,
      content: "familiar : 협업을 위한 브랜치 전략과 기본 명령어에 익숙합니다",
    },
    {
      name: "Sass",
      img: iconSass,
      content:
        "familiar : 변수와 믹스인으로 스타일을 효율적으로 관리할 수 있습니다.",
    },
    {
      name: "Jest",
      img: iconJest,
      content: "tried : 단위 테스트를 작성하고 실행하는 경험이 있습니다.",
    },
  ];

  const dispatch = useDispatch();
  const navRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isColorMe, setIsColorMe] = useState(false);

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
                <Image
                  onMouseEnter={() => {
                    setIsColorMe(true);
                  }}
                  onMouseLeave={() => {
                    setIsColorMe(false);
                  }}
                  className="w-64 h-72"
                  src={isColorMe ? imgMeColor : imgMe}
                  alt="나의 사진"
                />
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
