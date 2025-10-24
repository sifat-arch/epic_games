import React from "react";
import img from "../assets/email-6993266_1280.png";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
        <div>
          <img
            className="h-[300px] w-[300px] md:h-[550px] md:w-[550px] rounded-full"
            src={img}
            alt=""
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold">
            Subscribe to our <br />{" "}
            <span className="text-[#06b6d4]"> NewsLetter!</span>
          </h1>
          <p className="text-gray-500">
            Subscribe our newsletter and stay Updated.
          </p>

          <input
            className="border border-gray-200 bg-gray-100 w-full p-2 rounded"
            type="email"
            placeholder="Your email"
          />

          <motion.button
            className="btn w-full bg-[#06b6d4] hover:bg-[#087386] text-white"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
