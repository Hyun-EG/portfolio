import React from "react";

const Code = () => {
  return (
    <div className="pl-5 flex flex-col gap-1.5">
      <div>
        <span className="text-blue">function</span>
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
        <span className="text-orange">`안녕하세요! 저는</span>{" "}
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
      <div className="text-green">
        {"//"} 안녕하세요! 저는 프론트엔드 개발자 박성현입니다.
      </div>
    </div>
  );
};

export default Code;
