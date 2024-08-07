import React from "react";
import FanFeatureCard from "../FanFeatureCard";

const FanFeatureCardList = () => {
  const fanFeatures = [
    {
      title: "뱃지",
      line1: "예술인의 프로필을 처음 발견했다면?",
      line2: "많은 예술인의 프로필을 탐험했다면?",
      line3: "디보를 탐험하고 수많은 뱃지를 얻어보세요!",
      icon: "src/assets/2d-icon/badge-2d.png",
    },
    {
      title: "후원",
      line1: "예술인들에게 도움을 주고싶다면,",
      line2: "그 도움이 온전히 닿도록 디보가 도와드릴게요.",
      line3: "Zero 수수료로 후원금을 전달!",
      icon: "src/assets/2d-icon/wallet-2d.png",
    },
    {
      title: "탐험",
      line1: "더 넓은 곳에서 더 깊게,",
      line2: "새로운 예술인들과 마주하세요!",
      line3: "Deebo가 불을 밝혀줄게요!",
      icon: "src/assets/2d-icon/telescope-2d.png",
    },
    {
      title: "어워즈",
      line1: "열심히 탐험하다 보면",
      line2: "연말에는 좋은 일이 일어날 지도 몰라요",
      line3: "Deebo 연말 어워즈!",
      icon: "src/assets/2d-icon/trophy-2d.png",
    },
  ];

  return (
    <div className="w-full  p-5 flex justify-center">
      <div className="w-[900px] grid grid-cols-2 gap-5">
        {fanFeatures.map((item) => {
          return (
            <FanFeatureCard
              key={item.title}
              title={item.title}
              line1={item.line1}
              line2={item.line2}
              line3={item.line3}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FanFeatureCardList;
