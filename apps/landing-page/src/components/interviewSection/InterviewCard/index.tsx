import React from "react";

const InterviewCard = () => {
  return (
    <div className="shadow-xl">
      <img
        src="src/assets/sample-image/sample-image.png"
        className="rounded-t-xl"
      />
      <div className="p-8 bg-white text-black rounded-b-xl h-[250px] flex flex-col justify-between">
        <div>
          <h3 className="truncate text-2xl font-bold">인터뷰 1</h3>
          <p className="text-end mb-8">2024-07-04</p>
        </div>
        <p className="text-overflow">
          이번 인터뷰에서는 혁신적인 스타트업 CEO와 만나 그의 성공 비결을
          들어봅니다. 창업 과정의 도전과 극복 방법, 미래 기술 트렌드에 대한
          통찰, 그리고 젊은 기업가들을 위한 조언까지. 열정과 비전으로 가득한
          그의 이야기를 통해 미래 산업의 방향성을 엿볼 수 있을 것입니다.
        </p>
      </div>
    </div>
  );
};

export default InterviewCard;
