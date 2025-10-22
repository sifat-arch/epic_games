import React, { useEffect, useState } from "react";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  useDocumentTitle("Home");
  const [gameData, setGameData] = useState([]);

  const sliderData = gameData.slice(0, 3);

  console.log(sliderData);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setGameData(data));
  }, []);

  return (
    <div>
      <Banner sliderData={sliderData} />

      <PopularGames sliderData={sliderData} />

      <NewsLetter />
    </div>
  );
};

export default Home;
