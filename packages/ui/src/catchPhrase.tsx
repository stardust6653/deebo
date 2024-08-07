import "./index.css";
import React from "react";

export const CatchPhrase = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="text-white flex flex-col justify-center items-center relative z-10 max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold mb-4">Deeper, Wider</h2>
      <h3 className="text-2xl  font-bold mb-6">예술가를 담아내는 곳, 디보</h3>
      <p className="text-xl mb-8">예술인을 위한 전문적인 프로필 서비스</p>
      {children}
    </div>
  );
};
