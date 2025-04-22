import React from "react";

type TitleBoxProps = {
  children: React.ReactNode;
};

const TitleBox = ({ children }: TitleBoxProps) => {
  return (
    <div className="w-full px-12 py-4">
      <span className="text-3xl font-bold bg-gradient-to-r from-white via-purple to-blue bg-clip-text text-transparent">
        {children}
      </span>
    </div>
  );
};

export default TitleBox;
