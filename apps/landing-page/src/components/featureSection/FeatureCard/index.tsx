import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  icon: string;
  line1: string;
  line2: string;
  line3?: string;
  type?: string;
  pointWord?: string;
  noticeWord?: string;
}

const FeatureCard = ({
  title,
  line1,
  line2,
  line3,
  type,
  pointWord,
  noticeWord,
  icon,
}: Props) => {
  return (
    <div className="flex flex-col justify-between  p-8 rounded-xl w-[350px] h-[450px] bg-white text-blue-500 shadow-lg hover:scale-110 transition duration-300 ease-in-out">
      <div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <div>
          <p>{line1}</p>
          <p>{line2}</p>
          <p>{line3}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <img className="w-[80%]" src={icon} />
      </div>

      {type === "PROFILE" && (
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center">
            <p className="text-md">이용료</p>
            <p className="text-2xl font-bold">무료</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-md">관리 용이성</p>
            <ArrowBigDown size={32} />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-md">시인성</p>
            <ArrowBigUp size={32} />
          </div>
        </div>
      )}
      {!type && (
        <div className="text-end">
          <p className="text-2xl font-extrabold">{pointWord}</p>
          <p className="font-light">{noticeWord}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
