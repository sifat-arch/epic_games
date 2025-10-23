import React, { Suspense } from "react";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import UserCard from "../components/UserCard";
import { motion } from "framer-motion";

const promiseData = fetch("/data.json").then((res) => res.json());

console.log(promiseData);

const GameDetails = () => {
  useDocumentTitle("Game-details");
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <UserCard promiseData={promiseData} />
        </Suspense>
      </div>
    </motion.div>
  );
};

export default GameDetails;
