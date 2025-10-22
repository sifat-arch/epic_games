import React, { Suspense } from "react";
import useDocumentTitle from "../CustomHook/useDocumentTitle";
import UserCard from "../components/UserCard";

const promiseData = fetch("/data.json").then((res) => res.json());

console.log(promiseData);

const GameDetails = () => {
  useDocumentTitle("Game-details");
  return (
    <div>
      <h1>Game details pages</h1>

      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <UserCard promiseData={promiseData} />
        </Suspense>
      </div>
    </div>
  );
};

export default GameDetails;
