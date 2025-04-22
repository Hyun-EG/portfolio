"use client";
import React, { useEffect, useState, useRef } from "react";

const Code = () => {
  const comment = "반갑습니다! 저는 프론트엔드 개발자 박성현입니다.";
  const [displayComment, setDisplayComment] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const typing = setInterval(() => {
      if (indexRef.current >= comment.length) {
        clearInterval(typing);
        return;
      }

      const nextChar = comment[indexRef.current];
      setDisplayComment((prev) => prev + nextChar);
      indexRef.current += 1;
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="flex flex-col pl-5 gap-1.5 sm:text-lg lg:text-2xl">
      <div>
        <span className="text-blue">function</span>{" "}
        <span className="text-olive">introduceMe</span>( ) {"{"}
      </div>
      <div>
        <span className="ml-4 text-blue">const</span>{" "}
        <span className="text-sky">name</span> ={" "}
        <span className="text-orange">‘박성현’</span> ;
      </div>
      <div>
        <span className="ml-4 text-blue">let</span>{" "}
        <span className="text-sky">role</span> ={" "}
        <span className="text-orange">‘프론트엔드 개발자’</span> ;
      </div>
      <div>
        <span className="ml-4 text-purple">return</span>{" "}
        <span className="text-orange">`반갑습니다! 저는</span>{" "}
        <span className="text-purple">{"${"}</span>
        <span className="text-sky">role</span>
        <span className="text-purple">{"}"}</span>{" "}
        <span className="text-purple">{"${"}</span>
        <span className="text-sky">name</span>
        <span className="text-purple">{"}"}</span>{" "}
        <span className="text-orange">입니다.`</span>;
      </div>
      <div>{"}"}</div>
      <div>
        <span className="text-olive">introduceMe</span>();
      </div>
      <div className="text-green sm:text-xl xl:text-3xl">
        {"//"} {displayComment}
      </div>
    </div>
  );
};

export default Code;
