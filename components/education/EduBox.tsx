"use client";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";
import Card from "./Card";
import TitleBox from "./../common/TitleBox";

const EducationBox = () => {
  const eduRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!eduRef.current) return;
    const cleanup = observeNav(eduRef.current, 0.9, () => dispatch(showNav()));
    return cleanup;
  }, [dispatch]);

  return (
    <div
      ref={eduRef}
      className="w-full min-h-screen pl-96 bg-bgBlack text-black text-white"
    >
      <TitleBox>EDUCATIONS</TitleBox>
      <div className="pt-12 pr-4 flex gap-4 justify-center items-center">
        <Card
          title="패스트캠퍼스"
          content="프론트엔드 과정 부트캠프 수료"
          date="2024.02-2024.09 (약 8개월)"
          options={[
            "프론트엔드 과정 커리큘럼 교육이수",
            "매주 스터디그룹 참여하여 문답식 토론 및 회고",
            "3D 메타버스 플랫폼을 이용하여 다양한 포지션과 커뮤니케이션 진행 및 프로젝트 회의",
            "매주 현직자님과 멘토링 및 코드리뷰 진행",
            "기업 연계 프로젝트 진행",
          ]}
        />
        <Card
          title="서일대학교"
          content="컴퓨터전자공학과 전문학사 졸업"
          date="2016.03-2021.02"
          options={[
            "자료구조, 운영체제 등 CS 학습",
            "C C++ Java 등 객체지향 프로그래밍 언어와 Linux, MySQL, 전자기학 이론 등을 이수",
          ]}
        />
      </div>
    </div>
  );
};

export default EducationBox;
