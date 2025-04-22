"use client";

import React from "react";
import NavBox from "../nav/NavBox";
import IntroBox from "../intro/IntroBox";
import ProfileBox from "../profile/ProfileBox";
import ProjectBox from "../project/ProjectBox";
import EduBox from "../education/EduBox";
import OutroBox from "../outro/OutroBox";

const Wrapper = () => {
  return (
    <>
      <NavBox />
      <IntroBox />
      <ProfileBox />
      <ProjectBox />
      <EduBox />
      <OutroBox />
    </>
  );
};

export default Wrapper;
