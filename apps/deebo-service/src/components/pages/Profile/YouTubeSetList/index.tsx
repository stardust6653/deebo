import YouTubePreview from "@/components/common/universal/YouTubePreview";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  playList: {
    id: string;
    title: string;
    artist: string;
    videoId: string;
  }[];
  setMainVideoId: Dispatch<SetStateAction<string>>;
  height: number;
}

const YouTubePlayList = ({ playList, setMainVideoId, height }: Props) => {
  return (
    // <div className={`w-full ml-2 h-[${height}px] `}>
    //   <p className="font-bold mb-2 pl-2">재생목록</p>
    //   <div className={`overflow-scroll scrollbar-hide h-[calc(100%-32px)]`}>
    //     <ul className="border rounded-lg overflow-y-auto flex flex-col">
    //       {playList.map((video, index) => (
    //         <li
    //           key={index}
    //           className="border p-2 px-4 flex justify-between items-center cursor-pointer hover:bg-gray-100"
    //           onClick={() => setMainVideoId(video.videoId)}
    //         >
    //           <div>
    //             <h3 className="truncate font-bold">{video.title}</h3>
    //             <div className="">{video.artist}</div>
    //           </div>
    //           <div className="relative">
    //             <div className="inset-0 w-[100px] h-full pointer-events-none">
    //               <YouTubePreview videoId={video.videoId} type="playlist" />
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className={`w-[50%] ml-2 h-[348}px] `}>
      <p className="font-bold mb-2 pl-2">재생목록</p>
      <div className={`overflow-scroll scrollbar-hide h-[316px]`}>
        <ul className="border rounded-lg overflow-y-auto flex flex-col h-full">
          {playList.map((video, index) => (
            <li
              key={index}
              className="h-[79px] border-b p-2 px-4 flex justify-between items-center cursor-pointer hover:bg-gray-100"
              onClick={() => setMainVideoId(video.videoId)}
            >
              <div>
                <h3 className="truncate font-bold">{video.title}</h3>
                <div className="">{video.artist}</div>
              </div>
              <div className="relative">
                <div className="inset-0 w-[100px] h-full pointer-events-none">
                  <YouTubePreview videoId={video.videoId} type="playlist" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YouTubePlayList;
