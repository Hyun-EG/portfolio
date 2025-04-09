"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const NavBox = () => {
  const isVisible = useSelector((state: RootState) => state.nav.isVisible);

  return (
    <div
      className={`fixed left-0 top-0 w-96 h-screen p-5 rounded-r-3xl flex flex-col gap-4 text-white bg-bgBlack z-50 transition-opacity duration-[500ms] ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <span
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-3xl cursor-pointer"
      >
        Intro
      </span>
      <span className="text-3xl cursor-pointer">Profile</span>
      <span className="text-3xl cursor-pointer">Projects</span>
      <span className="text-3xl cursor-pointer">Educations</span>
      <span className="text-3xl cursor-pointer">Outro</span>
    </div>
  );
};

export default NavBox;
