import React from "react";

const introductionData = {
  introductionContent:
    "뉴올리언스의 열기와 뉴욕의 세련됨을 담은 재즈 피아니스트입니다. 20년간의 클럽 연주와 10장의 앨범을 통해 전통 재즈의 현대적 해석을 선보여 왔습니다. 즉흥 연주의 짜릿함과 감성적 멜로디의 조화를 추구하며, 관객과 호흡하는 라이브 무대에서 가장 빛을 발합니다.",
};

const Introduction = () => {
  return (
    <div className="px-[40px] mt-10">
      <h2 className="text-2xl font-bold mb-4">Introduction</h2>
      <div className="leading-6">{introductionData.introductionContent}</div>
    </div>
  );
};

export default Introduction;
