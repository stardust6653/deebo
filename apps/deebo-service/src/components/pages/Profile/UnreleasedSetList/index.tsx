import React, { Dispatch, SetStateAction } from "react";
import { UnreleasedAlbumType } from "../NowPlaying";

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
    <ul className="px-[40px] mt-5">
      {data.map((item) => {
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
              className={`h-[40px] px-3 text-white rounded-xl ${buttonStyle}`}
              onClick={() => {
                setPlay(true);
                setNowPlaying(item);
              }}
            >
              {isNowPlaying ? "재생 중" : "지금 재생"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default UnreleasedSetList;
