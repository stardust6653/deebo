import React from "react";

const BackgroundAsset = () => {
  return (
    <div className="absolute inset-0 opacity-20 top-10">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="20" cy="20" r="15" fill="currentColor" />
        <rect x="60" y="10" width="30" height="30" fill="currentColor" />
        <polygon points="50,60 65,85 35,85" fill="currentColor" />
        <path
          d="M10 70 Q 30 50, 50 70 T 90 70"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BackgroundAsset;
