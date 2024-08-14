import Waveform from "@/components/common/universal/Waveform";
import React, { Dispatch, SetStateAction } from "react";

export type UnreleasedAlbumType = {
  id: string;
  title: string;
  artist: string;
  albumJacket: string;
  url: string;
};

interface Props {
  data: UnreleasedAlbumType;
  setPlay: Dispatch<SetStateAction<boolean>>;
  play: boolean;
}

const NowPlaying = ({ data, setPlay, play }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-blue-100">
      <div className="flex items-center">
        <img
          src={data?.albumJacket}
          alt=""
          className={`w-[80px] h-[80px] rounded-xl mr-6`}
        />
        <div className="">
          <div className="font-bold">{data.title}</div>
          <div className="text-gray-500">{data.artist}</div>
        </div>
      </div>
      <div>
        <Waveform url={data.url} setPlay={setPlay} play={play} />
      </div>
    </div>
  );
};

export default NowPlaying;
