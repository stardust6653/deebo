import React from "react";
import PlanCard from "../PlanCard";

const PlanCardList = () => {
  const plans = [
    {
      badge: "Free",
      realPrice: 0,
      fakePrice: 12000,
      priceComment: "평생 무료",
      planComment: "연 10-20만원의 개인페이지 제작 비용 세이브",
      features: [
        "- 개인화된 무료 프로필 페이지",
        "- 최대 000mb의 저장공간",
        "- 공연 캘린더를 활용한 효과적인 일정 관리",
        "- 미발표곡 등록을 통한 광고수익 창출",
        "- 간단한 프로필 분석 기능",
      ],
      link: "#",
    },

    {
      badge: "Basic",
      realPrice: "출시예정",
      fakePrice: 24000,
      priceComment: "할인",
      planComment: "더 다양한 기능을 위한 Basic 플랜",
      features: [
        "- Free 플랜의 모든 기능",
        "- Zero 수수료 후원 기능",
        "- 낮은 수수료의 프로필 샵",
        "- 고급 프로필 분석 기능",
        "- 더 많은 저장공간",
        "- 다국어 자동 변환 프로필 기능 제공",
        "- 프로필 구성 요소 변경 기능 지원",
        "- 그 외 다양한 구독 회원 전용",
        "- 인터뷰 등 컨텐츠에 대한 우선 추첨권 지원",
      ],
      link: "#",
    },
  ];

  return (
    <div className="w-[900px] h-[800px] grid grid-cols-2">
      {plans?.map((plan) => {
        return (
          <PlanCard
            key={plan.badge}
            badge={plan.badge}
            realPrice={plan.realPrice}
            fakePrice={plan.fakePrice}
            priceComment={plan.priceComment}
            planComment={plan.planComment}
            features={plan.features}
            link={plan.link}
          />
        );
      })}
    </div>
  );
};

export default PlanCardList;
