import React from "react";

interface Props {
  icon: React.ElementType;
  title: string;
  description1: string;
  description2: string;
}

const IntroductionCard = ({
  icon: Icon,
  title,
  description1,
  description2,
}: Props) => {
  return (
    <div className="p-8 bg-white rounded-xl text-blue-500 shadow-md">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-2xl font-bold">{title} </h3>
        <div className="bg-blue-400 rounded-full ml-8">
          <Icon className=" text-white p-2" size={35} />
        </div>
      </div>
      <p>{description1}</p>
      <p>{description2}</p>
    </div>
  );
};

export default IntroductionCard;
