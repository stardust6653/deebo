import React, { Dispatch, SetStateAction } from "react";
import { UnreleasedAlbumType } from "../NowPlaying";
import Lottie from "lottie-react";
import equlizer from "@/lotties/equlizer.json";

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
  return (
    <ul className="p-[10px] mt-2  mx-[40px]">
      <p className="font-bold mb-2 border-bottom">재생목록</p>
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
                    animationData={equlizer}
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
  );
};

export default UnreleasedSetList;
