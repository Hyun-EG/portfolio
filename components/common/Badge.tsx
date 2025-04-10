import React from "react";

const Badge = ({ content, color }: { content: string; color: string }) => {
  return (
    <div className={`w-auto px-1 bg-${color} rounded-sm text-center text-sm`}>
      {content}
    </div>
  );
};

export default Badge;
