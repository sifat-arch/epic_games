import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ game }) => {
  const { category, coverPhoto, description, developer, ratings, title } = game;

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={coverPhoto}
          alt={title}
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
        <button className="btn bg-pink-500 text-white mt-4 w-full rounded-md cursor-pointer">
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;
