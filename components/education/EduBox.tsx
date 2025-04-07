"use client";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";

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
      className="w-full min-h-screen bg-white text-black flex justify-center items-center"
    >
      EducationBox
    </div>
  );
};

export default EducationBox;
