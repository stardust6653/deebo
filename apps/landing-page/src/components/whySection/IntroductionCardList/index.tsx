import React from "react";
import { DollarSign, BarChart2, Gift, Music } from "lucide-react";
import IntroductionCard from "../IntroductionCard";

const IntroductionCardList = () => {
  const features = [
    {
      icon: Music,
      title: "분산된 정보를 하나의 서비스로",
      description1: "여러 SNS를 관리하기 어려웠다면",
      description2: "프로필 통합서비스 Deebo를 써보세요",
    },
    {
      icon: DollarSign,
      title: "Deebo는 0원!",
      description1: "비싼 개인 홈페이지 개발 부담스러우셨나요?",
      description2: "사용료 무료인 Deebo를 써보세요",
    },
    {
      icon: Gift,
      title: "Zero 수수료 후원",
      description1: "후원수수료는 0%로",
      description2: "팬들이 보내준 마음은 100%로",
    },
    {
      icon: BarChart2,
      title: "더 나은 예술활동을 위해!",
      description1: "다양한 데이터 분석과 기능들로?",
      description2: "더 분석적으로 나를 소개하세요",
    },
  ];

  return (
    <div className="w-[900px]">
      <div className="grid grid-cols-2 gap-8 mb-8">
        {features.map((feature) => {
          return (
            <IntroductionCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description1={feature.description1}
              description2={feature.description2}
            />
          );
        })}
      </div>
      <div className="p-4 px-8 bg-opacity-20 bg-black rounded-xl">
        <p className="text-slate-200">
          현재는 프로필 기능만을 지원하고 있으며 해당 기능들은 추후 업데이트될
          예정입니다.
        </p>
      </div>
    </div>
  );
};

export default IntroductionCardList;
