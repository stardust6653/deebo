import HorizontalScrollContainer from "@/components/common/universal/HorizontalScrollContainer";
import React from "react";
import ReleasedAlbum from "../ReleasedAlbum";

const albumList = [
  {
    id: "1",
    title: "The 1st Album",
    artist: "개똥이",
    releaseDate: "2021-01-01",
    coverUrl:
      "https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900",
    ottSiteLink: "https://genie.co.kr",
  },
  {
    id: "2",
    title: "The 2st Album",
    artist: "개똥이",
    releaseDate: "2022-01-01",
    coverUrl:
      "https://newsimg.hankookilbo.com/2020/03/30/202003301025059001_1.jpg",
    ottSiteLink: "https://genie.co.kr",
  },
  {
    id: "3",
    title: "The 3st Album",
    artist: "개똥이",
    releaseDate: "2023-01-01",
    coverUrl:
      "https://cdn.beautyhankook.com/news/photo/201509/42648_114781_1221.jpg",
    ottSiteLink: "https://genie.co.kr",
  },
  {
    id: "4",
    title: "The 4st Album",
    artist: "개똥이",
    releaseDate: "2024-01-01",
    coverUrl:
      "https://isplus.com/data/isp/image/2020/05/17/isp59028d3c-27bd-4485-90a4-f2734fe177c3.jpg",
    ottSiteLink: "https://genie.co.kr",
  },
  {
    id: "5",
    title: "The 5st Album",
    artist: "개똥이",
    releaseDate: "2024-08-01",
    coverUrl:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202101/14/img_20210114101413_3a4b1fff.webp",
    ottSiteLink: "https://genie.co.kr",
  },
];

const ReleasedAlbumList = () => {
  const sortedAlbumList = [...albumList].sort((a, b) => {
    const dateA = new Date(a.releaseDate);
    const dateB = new Date(b.releaseDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="px-[40px] mt-10">
      <h2 className="text-2xl font-bold mb-4">Released Album</h2>
      <HorizontalScrollContainer>
        <div
          className="flex"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sortedAlbumList.map((album) => {
            return <ReleasedAlbum album={album} key={album.id} />;
          })}
        </div>
      </HorizontalScrollContainer>
    </div>
  );
};

export default ReleasedAlbumList;
