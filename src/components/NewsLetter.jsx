import React from "react";
import img from "../assets/email-6993266_1280.png";

const NewsLetter = () => {
  return (
    <div className="my-20">
      <div className="flex gap-20 items-center justify-center">
        <div>
          <img className="h-[550px] w-[550px] rounded-full" src={img} alt="" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold">
            Subscribe to our <br /> NewsLetter!
          </h1>
          <p>Subscribe our newsletter and stay Updated.</p>

          <input
            className="border border-gray-200 bg-gray-100 w-full p-2 rounded"
            type="email"
            placeholder="Your email"
          />

          <button className="btn w-full hover:bg-red-500 hover:text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
