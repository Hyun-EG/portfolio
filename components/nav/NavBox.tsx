"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const NavBox = () => {
  const isVisible = useSelector((state: RootState) => state.nav.isVisible);

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 top-0 w-96 h-screen flex flex-col text-white bg-bgBlack z-50">
      <span className="text-3xl cursor-pointer">Intro</span>
      <span className="text-3xl cursor-pointer">Profile</span>
      <span className="text-3xl cursor-pointer">Projects</span>
      <span className="text-3xl cursor-pointer">Educations</span>
    </div>
  );
};

export default NavBox;
