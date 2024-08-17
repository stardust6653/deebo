import React from "react";
import NewsCard from "../NewsCard";

const NewsCardList = () => {
  return (
    <div className="px-[40px] mt-10">
      <h2 className="text-2xl font-bold mb-4">Press</h2>
      <div className="grid grid-cols-2 gap-4">
        <NewsCard url="https://www.newsis.com/view/NISX20240809_0002844968" />
        <NewsCard url="https://isplus.com/article/view/isp202408060038" />
        <NewsCard url="https://www.xportsnews.com/article/1722462" />
        <NewsCard url="https://www.newspim.com/news/view/20160527000030" />
      </div>
    </div>
  );
};

export default NewsCardList;
