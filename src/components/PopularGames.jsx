import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { motion, scale } from "framer-motion";
const PopularGames = ({ sliderData }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/game-details");
  };

  const sortedSliderData = [...sliderData].sort(
    (b, a) => Number(b.ratings) - Number(a.ratings)
  );
  console.log(sortedSliderData);

  return (
    <div className="my-8 cursor-pointer">
      <h1 className="text-center text-4xl font-bold">Most popular Games</h1>
      <div className="flex gap-5 justify-center">
        {sortedSliderData.map((data) => (
          <motion.div
            className="mt-5"
            key={data.id}
            onClick={handleCardClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="max-w-[600px]  bg-white rounded-lg shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={data.coverPhoto}
                  alt={data.title}
                  className="w-full h-96 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {data.category}
                </span>
              </div>

              <div className="p-4">
                <h2 className="text-2xl font-bold mb-1">{data.title}</h2>
                <p className="text-xl text-gray-500 mb-2">{data.developer}</p>
                <p className="text-gray-700 text-sm">{data.description}</p>
                <p className="mt-2 text-2xl font-bold text-yellow-700 flex items-center gap-2">
                  <span>
                    <FaStar />
                  </span>{" "}
                  {data.ratings}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default PopularGames;
