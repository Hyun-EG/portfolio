"use client";
import React, { useEffect, useRef, useState } from "react";
import Nav from "../nav/Nav";

const ProfileBox = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isShowNav, setIsShowNav] = useState(false);

  useEffect(() => {
    const target = navRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsShowNav(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={navRef} className="w-full bg-black">
      <Nav isVisible={isShowNav} />
    </div>
  );
};

export default ProfileBox;
