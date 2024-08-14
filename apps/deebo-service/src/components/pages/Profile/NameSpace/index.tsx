import { basicButtonStyle } from "@/app/profile/[id]/page";
import React from "react";

const nameSpaceData = {
  name: "김개똥",
  tags: [
    "GUITAR",
    "VOCAL",
    "JAZZ",
    "POP",
    "ROCK",
    "LATIN",
    "CLASSIC",
    "BOSSA NOVA",
    "FUNK",
  ],
};

const colorList = [
  "bg-green-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-cyan-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-indigo-500",
  "bg-gray-500",
];

const NameSpace = () => {
  return (
    <div className="px-[40px]">
      <h1 className="font-bold text-3xl">{nameSpaceData.name}</h1>

      <div className="mt-4">
        {nameSpaceData.tags.map((tag, index) => (
          <span className={`${basicButtonStyle} mr-2 ${colorList[index]}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NameSpace;
