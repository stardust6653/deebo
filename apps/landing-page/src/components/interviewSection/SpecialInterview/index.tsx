import React from "react";

const SpecialInterview = () => {
  return (
    <div className="shadow-xl grid grid-cols-2 gap-5 w-full bg-white p-8 text-black rounded-xl mb-4">
      <div>
        <div className="w-20 pt-4">
          <span className="p-1 px-4 rounded-full bg-blue-200 text-blue-500">
            Special
          </span>
        </div>
        <div className="pt-2 pr-4">
          <h3 className="text-3xl font-bold">Deebo 개발기</h3>
          <p className="text-end mb-8">2024-07-04</p>
          <div>
            <p className="text-overflo">
              이번 인터뷰에서는 혁신적인 스타트업 CEO와 만나 그의 성공 비결을
              들어봅니다. 창업 과정의 도전과 극복 방법, 미래 기술 트렌드에 대한
              통찰, 그리고 젊은 기업가들을 위한 조언까지. 열정과 비전으로 가득한
              그의 이야기를 통해 미래 산업의 방향성을 엿볼 수 있을 것입니다.
            </p>
          </div>
        </div>
      </div>
      <img
        src="src/assets/sample-image/interview-sample.jpg"
        className="rounded-xl"
      />
    </div>
  );
};

export default SpecialInterview;
