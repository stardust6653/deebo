import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  videoId: string;
  width?: string;
  type: "video" | "playlist";
  getHeight?: Dispatch<SetStateAction<number>>;
}

const YouTubePreview = ({
  videoId,
  width = "100%",
  type,
  getHeight,
}: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  useEffect(() => {
    const updateHeight = () => {
      if (elementRef.current) {
        const newHeight = elementRef.current.offsetHeight;
        setHeight(newHeight);
      }
    };

    if (type === "video") {
      // 이미지 로드 완료 후 높이 측정
      const img = new Image();
      img.src = thumbnailUrl;
      img.onload = updateHeight;

      // 윈도우 리사이즈 시 높이 업데이트
      window.addEventListener("resize", updateHeight);

      // 초기 높이 측정
      updateHeight();

      return () => {
        window.removeEventListener("resize", updateHeight);
      };
    }
  }, [thumbnailUrl]);

  useEffect(() => {
    if (getHeight) {
      getHeight(height);
    }
  }, [height]);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div
      ref={elementRef}
      className={`w-${width} aspect-video relative cursor-pointer`}
      onClick={handleClick}
    >
      {showVideo ? (
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video player"
        />
      ) : (
        <>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {type === "video" && (
              <svg
                className="w-20 h-20 text-white opacity-80"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default YouTubePreview;
