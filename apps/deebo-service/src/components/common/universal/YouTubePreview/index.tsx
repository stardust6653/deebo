import React, { useState } from "react";

interface Props {
  videoId: string;
  width?: string;
}

const YouTubePreview = ({ videoId, width = "100%" }: Props) => {
  const [showVideo, setShowVideo] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  const handleClick = () => {
    setShowVideo(true);
  };

  if (showVideo) {
    return (
      <div className={`w-${width} aspect-video`}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video player"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={thumbnailUrl}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-20 h-20 text-white opacity-80"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
    </div>
  );
};

export default YouTubePreview;
