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
import PhotoAlbum from "@/components/pages/Profile/PhotoAlbum";
import NewsCardList from "@/components/pages/Profile/NewsCardList";

interface PostPageProps {
  params: { category: string; id: string };
}

export const basicButtonStyle = "p-1 px-4 rounded-lg text-white";

const ProfilePage = ({ params }: PostPageProps) => {
  return (
    <div className="relative w-[100vw] h-[100vh]  pt-[64px] flex justify-center">
      <SEO title={params.id} />
      <div className="w-[1000px] mt-5 ">
        <ProfileHeader />
        <NameSpace />
        <Introduction />
        <Biography />
        <ReleasedAlbumList />
        <UnreleasedAlbumList />
        <PhotoAlbum />
        <YouTubeAlbum playList={youtubePlaylist} />
        <NewsCardList />
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
