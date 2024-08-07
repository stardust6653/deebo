import React from "react";

interface Props {
  badge: string;
  realPrice: number | string;
  fakePrice: number | string;
  priceComment: string;
  planComment: string;
  features: string[];
  link: string;
}

const PlanCard = ({
  badge,
  realPrice,
  fakePrice,
  priceComment,
  planComment,
  features,
  link,
}: Props) => {
  return (
    <div className="relative">
      <div className="mx-4 rounded-xl p-8 bg-white shadow-xl  flex flex-col justify-between h-full">
        <div>
          <div>
            <span className="p-1 px-4 bg-[#FFD700] text-blue-500 rounded-md">
              {badge}
            </span>
            <div className="flex justify-between items-center mt-3">
              <div>
                <div className="line-through text-black text-xl">
                  {fakePrice?.toLocaleString()}
                  {fakePrice !== "출시예정" && "원"}
                </div>
                <div className="text-red-600">{priceComment}</div>
              </div>
              <div className="text-black font-bold text-[40px]">
                {realPrice?.toLocaleString()}
                {realPrice !== "출시예정" && "원"}
              </div>
            </div>
            <p className=" text-slate-700  mt-4">{planComment}</p>
          </div>
          <p className="border-b-black border mt-4" />
          <div>
            <ul className="mt-4 leading-8">
              {features.map((feature: string) => (
                <li className="text-black">{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          disabled={realPrice === "출시예정"}
          style={
            realPrice === "출시예정"
              ? {
                  backgroundColor: "#bfdbfe",
                  color: "#333",
                }
              : {}
          }
          onClick={() => {
            console.log(link);
          }}
          className="bg-[#FFD700] bg-opacity-60 text-slate-900 p-4 rounded-xl hover:bg-opacity-90"
        >
          {realPrice === "출시예정" ? "알림 받기" : "시작하기"}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
