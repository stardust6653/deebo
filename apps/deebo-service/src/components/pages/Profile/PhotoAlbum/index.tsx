import HorizontalScrollContainer from "@/components/common/universal/HorizontalScrollContainer";
import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PhotoAlbum = () => {
  const [photoSrc, setPhotoSrc] = useState(photoList[0]);
  const [fullScreen, setFullScreen] = useState(false);

  const photoIndex = photoList.indexOf(photoSrc);

  const onPrevButtonClick = () => {
    if (photoIndex === 0) {
      setPhotoSrc(photoList[photoList.length - 1]);
    }
    console.log("click");
    if (photoIndex > 0) {
      setPhotoSrc(photoList[photoIndex - 1]);
    }
  };

  const onNextButtonClick = () => {
    if (photoIndex === photoList.length - 1) {
      setPhotoSrc(photoList[0]);
    }
    if (photoIndex < photoList.length - 1) {
      setPhotoSrc(photoList[photoIndex + 1]);
    }
  };

  return (
    <>
      {fullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-between z-[9998] ">
          <div className="relative text-white text-7xl ml-[40px] cursor-pointer z-[9999]">
            <FiArrowLeft onClick={onPrevButtonClick} />
          </div>
          <img
            src={photoSrc}
            alt=""
            className="absolute w-[100vw] h-[calc(100vh-200px)] cursor-pointer"
            style={{ objectFit: "contain" }}
            onClick={() => setFullScreen(false)}
          />
          <div className="relative text-white text-7xl mr-[40px] cursor-pointer	z-[9999]">
            <FiArrowRight onClick={onNextButtonClick} />
          </div>
        </div>
      )}
      <div className="px-[40px] mt-10">
        <h2 className="text-2xl font-bold mb-4">Photo Album</h2>
        <div className="relative">
          <img
            src={photoSrc}
            alt=""
            className="w-full h-[600px] cursor-pointer"
            onClick={() => setFullScreen(true)}
          />
        </div>

        <HorizontalScrollContainer>
          <div
            className="flex mt-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {photoList.map((item: string) => {
              return (
                <img
                  key={item}
                  src={item}
                  alt=""
                  onClick={() => setPhotoSrc(item)}
                  className="mr-1 w-[210px] h-[140px] cursor-pointer fit-cover"
                />
              );
            })}
          </div>
        </HorizontalScrollContainer>
      </div>
    </>
  );
};

export default PhotoAlbum;

const photoList = [
  "https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=2596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
