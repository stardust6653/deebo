import Link from "next/link";
import { useRouter } from "next/navigation";
import { parse } from "path";
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
          <div className="flex p-4 w-full h-[300px] border mb-4 hover:bg-gray-100">
            <div className="mr-8 overflow-hidden ">
              <h3 className="truncate font-bold text-2xl mb-4">
                {parsedMetadata?.ogTitle}
              </h3>
              <p>{parsedMetadata?.ogDescription}</p>
            </div>

            <img
              src={parsedMetadata?.ogImage}
              alt={parsedMetadata?.ogTitle}
              className=" rounded-md"
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default NewsCard;
