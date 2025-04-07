"use client";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";
import NavBox from "../nav/NavBox";

const ProfileBox = () => {
  const dispatch = useDispatch();
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;
    const cleanup = observeNav(navRef.current, 0.9, () => dispatch(showNav()));
    return cleanup;
  }, [dispatch]);

  return (
    <>
      <NavBox />
      <div ref={navRef} className="w-full min-h-screen bg-bgBlack text-white">
        ProfileBox
      </div>
    </>
  );
};

export default ProfileBox;
