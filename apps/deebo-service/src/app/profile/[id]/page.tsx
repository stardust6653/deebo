"use client";

import SEO from "@/components/common/SEO";
import HorizontalScrollContainer from "@/components/common/universal/HorizontalScrollContainer";

import React, { useState } from "react";
import Waveform from "@/components/common/universal/Waveform";
import Image from "next/image";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import YouTubePreview from "@/components/common/universal/YouTubePreview";
import YouTubeAlbum from "@/components/pages/Profile/YouTubeAlbum";
import NewsCard from "@/components/pages/Profile/NewsCard";
import ReleasedAlbumList from "@/components/pages/Profile/ReleasedAlbumList";
import ProfileHeader from "@/components/pages/Profile/ProfileHeader";
import NameSpace from "@/components/pages/Profile/NameSpace";
import Introduction from "@/components/pages/Profile/Introduction";
import Biography from "@/components/pages/Profile/Biography";
import UnreleasedAlbumList from "@/components/pages/Profile/UnreleasedAlbumList";

interface PostPageProps {
  params: { category: string; id: string };
}

export const basicButtonStyle = "p-1 px-4 rounded-lg text-white";

const ProfilePage = ({ params }: PostPageProps) => {
  const [photoSrc, setPhotoSrc] = useState(photo[0]);

  return (
    <div className="w-[100vw] h-[100vh]  pt-[64px] flex justify-center">
      <SEO title={params.id} />
      <div className="w-[1000px] mt-5 ">
        <ProfileHeader />
        <NameSpace />
        <Introduction />
        <Biography />
        <ReleasedAlbumList />
        <UnreleasedAlbumList />

        <div className="px-[40px] mt-10">
          <h2 className="text-2xl font-bold mb-4">Photo Album</h2>

          <div className="relative">
            <img src={photoSrc} alt="" className="w-full h-[600px]" />
          </div>

          <HorizontalScrollContainer>
            <div
              className="flex mt-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {photo.map((item) => {
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

        <YouTubeAlbum playList={youtubePlaylist} />

        <div className="px-[40px] mt-10">
          <h2 className="text-2xl font-bold mb-4">Press</h2>

          <NewsCard url="https://www.newsis.com/view/NISX20240809_0002844968" />
          <NewsCard url="https://isplus.com/article/view/isp202408060038" />
          <NewsCard url="https://www.edaily.co.kr/news/read?newsId=01656406638984368&mediaCodeNo=258" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

const playlist = [
  {
    id: 1,
    title: "대충 노래 1",
    artist: "김개똥",
    url: "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
    albumJacket: "bg-purple-600",
  },
  {
    id: 2,
    title: "대충 노래 2",
    artist: "김개똥",
    url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3",
    albumJacket: "bg-red-600",
  },
  {
    id: 3,
    title: "대충 노래 3",
    artist: "김개똥",
    url: "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
    albumJacket: "bg-green-600",
  },
  {
    id: 4,
    title: "대충 노래 4",
    artist: "김개똥 & 김똥개",
    url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3",
    albumJacket: "bg-yellow-600",
  },
];

const photo = [
  "https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=2596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const youtubePlaylist = [
  {
    id: "1",
    title: "대충 노래 1",
    artist: "김개똥",
    videoId: "5sNGM3t-pv0",
  },
  {
    id: "2",
    title: "대충 노래 2",
    artist: "김개똥",
    videoId: "UQkPiUDYEo0",
  },
  {
    id: "3",
    title: "대충 노래 3",
    artist: "김개똥",
    videoId: "cNF4NGRvF4A",
  },
  {
    id: "4",
    title: "대충 노래 4",
    artist: "김개똥 & 김똥개",
    videoId: "Hy_EgoU4r2Q",
  },
];
