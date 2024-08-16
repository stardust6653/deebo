import React, { useState } from "react";
import NowPlaying from "../NowPlaying";
import UnreleasedSetList from "../UnreleasedSetList";

const UnreleasedAlbumList = () => {
  const [nowPlaying, setNowPlaying] = useState(playlist[0]);
  const [play, setPlay] = useState(false);

  return (
    <>
      <div className="px-[40px] mt-10">
        <h2 className="text-2xl font-bold mb-4">Unreleased Album</h2>
        <NowPlaying data={nowPlaying} setPlay={setPlay} play={play} />
      </div>
      <UnreleasedSetList
        data={playlist}
        setPlay={setPlay}
        play={play}
        nowPlaying={nowPlaying}
        setNowPlaying={setNowPlaying}
      />
    </>
  );
};

export default UnreleasedAlbumList;

const playlist = [
  {
    id: "1",
    title: "대충 노래 1",
    artist: "김개똥",
    url: "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
    albumJacket:
      "https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900",
  },
  {
    id: "2",
    title: "대충 노래 2",
    artist: "김개똥",
    url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3",
    albumJacket:
      "https://www.breaknews.com/imgdata/breaknews_com/201503/2015032542066202.jpg",
  },
  {
    id: "3",
    title: "대충 노래 3",
    artist: "김개똥",
    url: "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
    albumJacket:
      "https://cdn.mhns.co.kr/news/photo/201711/87284_144151_4835.jpg",
  },
  {
    id: "4",
    title: "대충 노래 4",
    artist: "김개똥 & 김똥개",
    url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3",
    albumJacket:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYxRlJcY22sFAbV_N-ZviXJflYyOLOsLZyQ&usqp=CAU",
  },
  {
    id: "5",
    title: "대충 노래 5",
    artist: "김개똥",
    url: "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
    albumJacket:
      "https://cdn.mhns.co.kr/news/photo/201711/87284_144151_4835.jpg",
  },
  {
    id: "6",
    title: "대충 노래 6",
    artist: "김개똥 & 김똥개",
    url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3",
    albumJacket:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYxRlJcY22sFAbV_N-ZviXJflYyOLOsLZyQ&usqp=CAU",
  },
  {
    id: "7",
    title: "대충 노래 7",
    artist: "김개똥",
    url: "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
    albumJacket:
      "https://cdn.mhns.co.kr/news/photo/201711/87284_144151_4835.jpg",
  },
  {
    id: "8",
    title: "대충 노래 8",
    artist: "김개똥 & 김똥개",
    url: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3",
    albumJacket:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYxRlJcY22sFAbV_N-ZviXJflYyOLOsLZyQ&usqp=CAU",
  },
];
