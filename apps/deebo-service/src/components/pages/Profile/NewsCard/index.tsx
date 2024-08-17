import Link from "next/link";

import React, { useEffect, useState } from "react";

interface Props {
  url: string;
}

const NewsCard = ({ url }: Props) => {
  const [parsedMetadata, setParsedMetadata] = useState<any | null>(null);

  useEffect(() => {
    fetch(`/api/metadata?url=${url}`)
      .then((res) => res.json())
      .then((data) => setParsedMetadata(data));
  }, []);

  return (
    <>
      {!parsedMetadata && <div>로딩 중</div>}
      {parsedMetadata && (
        <Link href={url} target="_blank">
          <div className="relative flex  h-[400px]">
            {/* <div className="mr-8 overflow-hidden ">
           
              <p>{parsedMetadata?.ogDescription}</p>
            </div> */}

            <div className="absolute top-0 bg-black w-full h-[60px] opacity-50 rounded-md" />
            <div className="absolute bottom-0 bg-black w-full h-[80px] opacity-50 rounded-md" />

            <div className="flex items-center absolute h-[60px] top-0 w-full px-4 opacity-100">
              <h3 className="truncate font-bold text-2xl text-center text-white ">
                {parsedMetadata?.ogTitle}
              </h3>
            </div>

            <img
              src={parsedMetadata?.ogImage}
              alt={parsedMetadata?.ogTitle}
              className="w-full rounded-md"
              style={{ objectFit: "cover" }}
            />

            <div className="flex items-center text-white absolute h-[80px] bottom-0 w-full px-4 opacity-100 overflow-hidden">
              <p className="line-clamp-2">{parsedMetadata?.ogDescription}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default NewsCard;
