"use client";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { hideNav } from "@/features/nav/navSlice";
import { observeNav } from "@/utils/observeNav";

const OutroBox = () => {
  const outroRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!outroRef.current) return;
    const cleanup = observeNav(outroRef.current, 0.1, () =>
      dispatch(hideNav())
    );
    return cleanup;
  }, [dispatch]);

  return (
    <div
      ref={outroRef}
      className="w-full min-h-screen bg-bgBlack text-white flex justify-center items-center"
    >
      OutroBox
    </div>
  );
};

export default OutroBox;
