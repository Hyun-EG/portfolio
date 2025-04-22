"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Link } from "react-scroll";

const NavBox = () => {
  const isVisible = useSelector((state: RootState) => state.nav.isVisible);

  return (
    <div
      className={`hidden xl:block fixed left-0 top-0 w-96 h-screen p-5 rounded-r-3xl flex flex-col gap-4 text-white bg-bgBlack z-50 transition-opacity duration-[500ms] ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <span
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-3xl font-bold cursor-pointer"
      >
        Intro
      </span>
      <Link
        to="profile"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        offset={-200}
        className="group"
      >
        <div className="text-3xl font-bold transition-colors duration-500 cursor-pointer group-[.active]:text-blue">
          Profile
        </div>
      </Link>
      <Link
        to="project"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        offset={-200}
        className="group"
      >
        <div className="text-3xl font-bold transition-colors duration-500 cursor-pointer group-[.active]:text-blue ">
          Projects
        </div>
      </Link>
      <Link
        to="education"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        offset={-200}
        className="group"
      >
        <div className="text-3xl font-bold transition-colors duration-500 cursor-pointer group-[.active]:text-blue">
          Educations
        </div>
      </Link>
      <Link to="outro" smooth={true} duration={500}>
        <span className="text-3xl font-bold cursor-pointer">Outro</span>
      </Link>
    </div>
  );
};

export default NavBox;
