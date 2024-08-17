import React, { Dispatch, SetStateAction } from "react";
import { UnreleasedAlbumType } from "../NowPlaying";
import Lottie from "lottie-react";
import equalizer from "@/lotties/equalizer.json";
import bottomArrow from "@/lotties/bottom-arrow.json";
import { useUListElementScrollEnd } from "@/hooks/useElementScrollEnd";

interface Props {
  data: UnreleasedAlbumType[];
  setPlay: Dispatch<SetStateAction<boolean>>;
  play: boolean;
  nowPlaying: UnreleasedAlbumType;
  setNowPlaying: Dispatch<SetStateAction<UnreleasedAlbumType>>;
}

const UnreleasedSetList = ({
  data,
  setPlay,
  play,
  nowPlaying,
  setNowPlaying,
}: Props) => {
  const { isBottom: isElementBottom, elementRef } = useUListElementScrollEnd();

  const scrollToBottom = () => {
    if (elementRef.current) {
      elementRef.current.scrollTo({
        top: elementRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex justify-center flex-col items-center">
      {data.length > 3 && !isElementBottom && (
        <div className="absolute bottom-[10px] flex justify-center z-999">
          <button
            onClick={scrollToBottom}
            className="bg-blue-400 text-white rounded-xl p-1 px-2 cursor-pointer z-50"
          >
            <div className="flex items-center">
              <Lottie
                animationData={bottomArrow}
                loop
                className="w-[24px] h-[24px]"
              />
              아래로
            </div>
          </button>
        </div>
      )}
      <div className="w-full">
        <p className="px-[50px] font-bold mt-4 border-bottom ">재생목록</p>
        <ul
          ref={elementRef}
          className="relative p-[10px] mx-[40px] h-[240px] overflow-scroll scrollbar-hide "
        >
          {data.map((item: UnreleasedAlbumType) => {
            const isNowPlaying = item.id === nowPlaying.id;
            const buttonStyle = isNowPlaying ? "bg-red-400" : "bg-blue-500";
            return (
              <li
                key={item.title}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex items-center">
                  <img
                    src={item?.albumJacket}
                    className={`w-[60px] h-[60px] mr-4`}
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <h4 className="text-gray-500">{item.artist}</h4>
                  </div>
                </div>
                <button
                  className={`h-[32px] px-3 text-white rounded-xl ${buttonStyle}`}
                  onClick={() => {
                    setPlay(true);
                    setNowPlaying(item);
                  }}
                >
                  <div className="flex">
                    {isNowPlaying && (
                      <Lottie
                        animationData={equalizer}
                        loop
                        className="w-[16px] mr-1 text-white"
                      />
                    )}
                    {isNowPlaying ? "재생 중" : "지금 재생"}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UnreleasedSetList;
