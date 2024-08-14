import React from "react";

const biographyData = [
  {
    id: "1",
    date: "1993.09.16",
    content: "출생",
    important: false,
  },
  {
    id: "2",
    date: "2012.02",
    content: "고등학교 졸업",
    important: false,
  },
  {
    id: "3",
    date: "2023.11",
    content: "개발자 취업",
    important: true,
  },
];

const Biography = () => {
  const ballColor = (important: boolean) => {
    return important
      ? "bg-red-400 border-red-500"
      : "bg-blue-400 border-blue-500";
  };

  const lineColor = (important: boolean) => {
    return important ? "bg-red-300" : "bg-blue-300";
  };

  return (
    <div className="px-[40px] mt-10">
      <h2 className="text-2xl font-bold mb-4">Biography</h2>
      {biographyData.map((data) => {
        return (
          <div key={data?.id} className="flex items-center mb-2">
            <span
              className={`w-[10px] h-[10px] rounded-full  border-[4px] ${ballColor(data?.important)}`}
            />
            <span
              className={`w-[80px] h-[2px] mr-2 ${lineColor(data?.important)}`}
            />
            <div>
              {data.date} {data.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Biography;
