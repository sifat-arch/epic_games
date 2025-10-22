import React, { use } from "react";
import Card from "./Card";

const UserCard = ({ promiseData }) => {
  const gameData = use(promiseData);

  return (
    <div className="grid grid-cols-5 gap-4 p-10">
      {gameData.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

export default UserCard;
