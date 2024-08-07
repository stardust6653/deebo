import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

interface OpenItem {
  [key: number]: boolean;
}

const QnAItemList = () => {
  const [openItems, setOpenItems] = useState<OpenItem>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev: OpenItem) => ({ ...prev, [index]: !prev[index] }));
  };

  const qnaData = [
    {
      question: "Q. Deebo는 무료로 사용 가능한가요?",
      answer:
        " A. 네. Deebo의 프로필 서비스는 모두 무료로 활용가능합니다. 하지만 그 외 부가적인 기능 활용을 위해서 구독제 서비스를 준비하고 있어요.",
    },
    {
      question: "Q. 프로필 공개 범위를 설정할 수 있나요?",
      answer:
        "A. 모두 공개, 후원한 팬에게 공개, A&R에게 공개, 비공개 등의 옵션으로 각 정보마다 설정할 수 있도록 준비 중에 있어요.",
    },
    {
      question: "Q. 미공개 음원을 등록하면 저작권은 어떻게 되나요?",
      answer:
        "A. 미공개 음원이라고 해도 공개시간이 증빙 가능한 경우 그 시점을 기준으로 저작권이 발생하고 있어요. Deebo에 올린 저작물의 경우 업로드한 시점이 기록되므로 올린 시점에 저작권이 발생해요.",
    },
    {
      question: "Q. 저작권 보호에 대한 대비가 되어있나요?",
      answer:
        "A. 프로필 공개범위 설정 및 캡쳐 방지, 워터마크, 다운로드 방지 등을 통해 예술인들의 저작물을 보호하게 돼요.",
    },
  ];

  return (
    <div className="w-[900px] mx-auto space-y-4">
      {qnaData.map((item, index) => (
        <div key={index} className="border-b pb-4">
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => toggleItem(index)}
          >
            <span className="font-semibold">{item.question}</span>
            {openItems[index] ? <MinusCircle /> : <PlusCircle />}
          </button>
          {openItems[index] && (
            <p className="mt-5 text-slate-100 leading-8">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QnAItemList;
