import YouTubePreview from "@/components/common/universal/YouTubePreview";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  playList: {
    id: string;
    title: string;
    artist: string;
    videoId: string;
  }[];
}

const YouTubeAlbum = ({ playList }: Props) => {
  const [mainVideoId, setMainVideoId] = useState(playList[0].videoId);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <h2 className="text-2xl font-bold mb-4">YouTube Album</h2>
      <div className="flex flex-col">
        <div className="w-full ">
          <YouTubePreview videoId={mainVideoId} />
        </div>

        <div className="w-full ">
          <h4 className="my-4 text-xl font-bold">재생목록</h4>
          <ul className="border rounded-lg overflow-y-auto flex flex-col">
            {playList.map((video, index) => (
              <li
                key={index}
                className="border p-2 px-4 flex justify-between items-center cursor-pointer hover:bg-gray-100"
                onClick={() => setMainVideoId(video.videoId)}
              >
                <div>
                  <h3 className="truncate font-bold">{video.title}</h3>
                  <div className="">{video.artist}</div>
                </div>
                <div className="relative">
                  <div className="inset-0 w-[100px] h-full pointer-events-none">
                    <YouTubePreview videoId={video.videoId} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YouTubeAlbum;
