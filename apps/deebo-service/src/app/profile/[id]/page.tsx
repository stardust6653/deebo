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

interface PostPageProps {
  params: { category: string; id: string };
}

const ProfilePage = ({ params }: PostPageProps) => {
  const button = "p-1 px-4 rounded-lg text-white";
  const [nowPlaying, setNowPlaying] = useState(playlist[0]);
  const [play, setPlay] = useState(false);

  const [photoSrc, setPhotoSrc] = useState(photo[0]);

  return (
    <div className="w-[100vw] h-[100vh]  pt-[64px] flex justify-center">
      <SEO title={params.id} />
      <div className="w-[1000px] mt-5 ">
        <div className=" relative">
          <div className="bg-yellow-400 w-full h-[300px] rounded-lg" />
          <div className="absolute rounded-full bg-green-400 w-[120px] h-[120px] top-[240px] left-[40px]"></div>
        </div>
        <div className="h-[80px] p-5">
          <div className="flex justify-end items-center">
            <button className={`bg-green-500 mr-2 ${button}`}>관심사 +</button>
            <button className={`bg-blue-400 mr-2 ${button}`}>후원하기</button>
            <button className={`bg-red-400 ${button}`}>공유하기</button>
          </div>
        </div>
        <div className="px-[40px]">
          <h1 className="font-bold text-3xl">김개똥</h1>
          <div className="mt-4">
            <span className={`${button} mr-2 bg-green-500`}>GUITAR</span>
            <span className={`${button} mr-2 bg-blue-500`}>VOCAL</span>
            <span className={`${button} mr-2 bg-red-500`}>JAZZ</span>
            <span className={`${button} mr-2 bg-cyan-500`}>POP</span>
          </div>
        </div>
        <div className="px-[40px] mt-10">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <div className="leading-6">
            뉴올리언스의 열기와 뉴욕의 세련됨을 담은 재즈 피아니스트입니다.
            20년간의 클럽 연주와 10장의 앨범을 통해 전통 재즈의 현대적 해석을
            선보여 왔습니다. 즉흥 연주의 짜릿함과 감성적 멜로디의 조화를
            추구하며, 관객과 호흡하는 라이브 무대에서 가장 빛을 발합니다.
          </div>
        </div>

        <div className="px-[40px] mt-10">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <div className="flex items-center mb-2">
            <span className="w-[10px] h-[10px] rounded-full bg-blue-400 border-[4px] border-blue-500" />
            <span className="w-[80px] h-[2px] bg-blue-300 mr-2" />
            <div>1993.09.16 출생</div>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-[10px] h-[10px] rounded-full bg-blue-400 border-[4px] border-blue-500" />
            <span className="w-[80px] h-[2px] bg-blue-300 mr-2" />
            <div>2012.02. 고등학교 졸업</div>
          </div>
          <div className="flex items-center">
            <span className="w-[10px] h-[10px] rounded-full bg-blue-400 border-[4px] border-blue-500" />
            <span className="w-[80px] h-[2px] bg-blue-300 mr-2" />
            <div>2023.11. 개발자 취업</div>
          </div>
        </div>

        <div className="px-[40px] mt-10">
          <h2 className="text-2xl font-bold mb-4">Released Album</h2>
          <HorizontalScrollContainer>
            <div
              className="flex"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="mr-8">
                <div className="w-[180px] h-[180px] bg-gray-300 rounded-lg " />
                <div className="px-1">
                  <div className="mt-2 font-medium">대충 앨범 1</div>
                  <div className="text-sm text-gray-400">2021.01.01</div>
                </div>
              </div>
              <div className="mr-8">
                <div className="w-[180px] h-[180px] bg-gray-300 rounded-lg " />
                <div className="px-1">
                  <div className="mt-2 font-medium">대충 앨범 1</div>
                  <div className="text-sm text-gray-400">2021.01.01</div>
                </div>
              </div>{" "}
              <div className="mr-8">
                <div className="w-[180px] h-[180px] bg-gray-300 rounded-lg " />
                <div className="px-1">
                  <div className="mt-2 font-medium">대충 앨범 1</div>
                  <div className="text-sm text-gray-400">2021.01.01</div>
                </div>
              </div>{" "}
              <div className="mr-8">
                <div className="w-[180px] h-[180px] bg-gray-300 rounded-lg " />
                <div className="px-1">
                  <div className="mt-2 font-medium">대충 앨범 1</div>
                  <div className="text-sm text-gray-400">2021.01.01</div>
                </div>
              </div>{" "}
              <div className="mr-8">
                <div className="w-[180px] h-[180px] bg-gray-300 rounded-lg " />
                <div className="px-1">
                  <div className="mt-2 font-medium">대충 앨범 1</div>
                  <div className="text-sm text-gray-400">2021.01.01</div>
                </div>
              </div>{" "}
              <div className="mr-8">
                <div className="w-[180px] h-[180px] bg-gray-300 rounded-lg " />
                <div className="px-1">
                  <div className="mt-2 font-medium">대충 앨범 1</div>
                  <div className="text-sm text-gray-400">2021.01.01</div>
                </div>
              </div>{" "}
              <div className="mr-8">
                <div className="w-[180px] h-[180px] bg-gray-300 rounded-lg " />
                <div className="px-1">
                  <div className="mt-2 font-medium">대충 앨범 1</div>
                  <div className="text-sm text-gray-400">2021.01.01</div>
                </div>
              </div>
            </div>
          </HorizontalScrollContainer>
        </div>

        <div className="px-[40px] mt-10">
          <h2 className="text-2xl font-bold mb-4">Unreleased Album</h2>
          <div className="flex items-center justify-between p-4 rounded-xl bg-blue-100">
            <div className="flex items-center">
              <div
                className={`w-[80px] h-[80px] rounded-xl mr-6 ${nowPlaying.albumJacket}`}
              />
              <div className="">
                <div className="font-bold">{nowPlaying.title}</div>
                <div className="text-gray-500">{nowPlaying.artist}</div>
              </div>
            </div>
            <div>
              <Waveform url={nowPlaying.url} setPlay={setPlay} play={play} />
            </div>
          </div>
        </div>

        <ul className="px-[40px] mt-5">
          {playlist.map((item) => {
            const isNowPlaying = item.id === nowPlaying.id;
            const buttonStyle = isNowPlaying ? "bg-red-400" : "bg-blue-500";
            return (
              <li
                key={item.title}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex items-center">
                  <div
                    className={`w-[60px] h-[60px] mr-4 ${item.albumJacket}`}
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <h4 className="text-gray-500">{item.artist}</h4>
                  </div>
                </div>
                <button
                  className={`h-[40px] px-3 text-white rounded-xl ${buttonStyle}`}
                  onClick={() => {
                    setPlay(true);
                    setNowPlaying(item);
                  }}
                >
                  {isNowPlaying ? "재생 중" : "지금 재생"}
                </button>
              </li>
            );
          })}
        </ul>

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
