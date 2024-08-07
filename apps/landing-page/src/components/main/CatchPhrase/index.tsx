import React from "react";
import { ArrowRight } from "lucide-react";

const CatchPhrase = () => {
  return (
    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold mb-4">Deeper, Wider</h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-6">
        예술가를 담아내는 곳, 디보
      </h3>
      <p className="text-xl mb-8">예술인을 위한 전문적인 프로필 서비스</p>
      <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold flex items-center mx-auto hover:bg-blue-100 transition-colors">
        시작하기 <ArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default CatchPhrase;
