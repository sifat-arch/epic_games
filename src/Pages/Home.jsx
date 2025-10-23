import React, { useEffect, useState } from "react";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";
import NewsLetter from "../components/NewsLetter";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Banner sliderData={sliderData} />

      <PopularGames sliderData={sliderData} />

      <NewsLetter />
    </motion.div>
  );
};

export default Home;
