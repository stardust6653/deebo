import Link from "next/link";
import React from "react";

export type AlbumType = {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  coverUrl: string;
  ottSiteLink: string;
};

interface Props {
  album: AlbumType;
}

const ReleasedAlbum = ({ album }: Props) => {
  const today = new Date().getTime();
  const baseDate = new Date(today - 1000 * 60 * 60 * 24 * 28);
  const newCondition = baseDate < new Date(album.releaseDate);

  return (
    <Link href={album.ottSiteLink} target="_blank">
      <div className="mr-8 w-[180px]" style={{ boxSizing: "border-box" }}>
        <div className="relative">
          {newCondition && (
            <span className="absolute bg-red-600 p-1 px-2 rounded-xl text-white top-2 left-2">
              New
            </span>
          )}
          <img src={album.coverUrl} className="rounded-lg" />
        </div>
        <div className="px-1">
          <div className="mt-2 font-medium">{album.title}</div>
          <div className="mb-2 text-gray-600">{album.artist}</div>
          <div className="text-sm text-gray-400">{album.releaseDate}</div>
        </div>
      </div>
    </Link>
  );
};

export default ReleasedAlbum;
