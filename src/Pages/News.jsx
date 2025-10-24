import React, { useEffect, useState } from "react";
import NewsDetails from "../components/NewsDetails";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div>
      {newsData.map((news) => (
        <NewsDetails key={news.id} news={news} />
      ))}
    </div>
  );
};

export default News;
