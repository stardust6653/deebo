import { basicButtonStyle } from "@/app/profile/[id]/page";
import React from "react";

const profileHeaderData = {
  bannerImage:
    "https://img.freepik.com/free-vector/flat-design-music-festival-twitter-banner_23-2149074852.jpg",
  profileImage:
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTinabq0lZzR2Xpdua0GoMLzeQoqWvZFo-nxIdEAd2wMIwsQNUS-nLMdqrHw5TW_O3rN5826U59rFgWr_I",
};

const ProfileHeader = () => {
  const buttonColor = [
    { bgColor: "bg-green-500", hoverColor: "hover:bg-green-600" },
    { bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500" },
    { bgColor: "bg-red-400", hoverColor: "hover:bg-red-500" },
    { bgColor: "bg-yellow-400", hoverColor: "hover:bg-yellow-500" },
  ];

  const buttonList = [
    {
      text: "관심사 +",
      onClick: () => {},
    },
    {
      text: "후원하기",
      onClick: () => {},
    },
    {
      text: "공유하기",
      onClick: () => {},
    },
    {
      text: "수정하기",
      onClick: () => {},
    },
  ];

  return (
    <>
      <div className="relative">
        <img
          src={profileHeaderData.bannerImage}
          className="bg-yellow-400 w-full h-[300px] rounded-lg"
        />
        <img
          src={profileHeaderData.profileImage}
          className="absolute rounded-full bg-green-400 w-[120px] h-[120px] top-[240px] left-[40px]"
        ></img>
      </div>
      <div className="p-5 mb-1">
        <div className="flex justify-end items-center">
          {buttonList.map((button, index) => (
            <button
              className={`${buttonColor[index].bgColor} ${buttonColor[index].hoverColor} ml-2 ${basicButtonStyle}`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
