import React from "react";

interface Props {
  title: string;
  line1: string;
  line2: string;
  line3: string;
  icon: string;
}

const FanFeatureCard = ({ title, line1, line2, line3, icon }: Props) => {
  return (
    <div className="p-10 rounded-lg bg-slate-50 flex flex-col justify-between">
      <img src={icon} className="w-[100px] mb-10" />
      <div className="text-black">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div>
          <div className="mb-4">
            <p>{line1}</p>
            <p>{line2}</p>
          </div>

          <p>{line3}</p>
        </div>
      </div>
    </div>
  );
};

export default FanFeatureCard;
