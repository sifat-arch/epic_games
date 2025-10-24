import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const NewsDetails = ({ news }) => {
  console.log(news);

  const { date, img, summary, title, link } = news;

  return (
    <motion.div
      className="p-5 md:p-10 lg:p-20 mt-7"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-cyan-400">Latest</span> news{" "}
      </h1>
      <div>
        <img
          className=" md:h-[300px]lg:h-[600px] w-full rounded-2xl"
          src={img}
          alt=""
        />
      </div>

      <div>
        <div className="mt-3">
          <a href={link} className="text-blue-600 underline"></a>
          <p className="text-lg font-semibold">Data: {date}</p>
        </div>

        <h2 className="text-3xl font-bold mt-4">{title}</h2>

        <p className="text-lg text-gray-500 mt-2">
          {summary}{" "}
          <span className="underline text-blue-500 cursor-pointer">
            See More
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default NewsDetails;
