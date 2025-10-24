import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Card = ({ game }) => {
  const { category, coverPhoto, description, developer, ratings, title } = game;

  return (
    <motion.div
      className="w-full md:max-w-lg bg-white rounded-lg shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative">
        <img
          src={coverPhoto}
          alt={title}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
        <span className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          {category}
        </span>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{developer}</p>
        <p className="text-gray-700 text-sm">{description}</p>
        <p className="mt-2 font-bold text-yellow-700 flex items-center gap-2">
          <span>
            <FaStar />
          </span>{" "}
          {ratings}
        </p>

        <button className="flex items-center gap-2 btn w-full mx-auto mt-7 bg-[#06b6d4] text-white rounded-lg">
          <span>
            <IoCloudDownloadOutline size={19} />
          </span>
          Download
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
