import YouTubePreview from "@/components/common/universal/YouTubePreview";
import React, { useRef, useEffect, useState } from "react";
import YouTubePlayList from "../YouTubeSetList";

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
  const [height, setHeight] = useState(0);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <h2 className="text-2xl font-bold mb-4">YouTube Album</h2>
      <div className="flex">
        <div className="w-full">
          <YouTubePreview
            videoId={mainVideoId}
            type="video"
            getHeight={setHeight}
          />
        </div>

        <YouTubePlayList
          playList={playList}
          setMainVideoId={setMainVideoId}
          height={height}
        />
      </div>
    </div>
  );
};

export default YouTubeAlbum;
