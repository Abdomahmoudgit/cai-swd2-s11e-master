import React from "react";
import Card from "../Card/Card";

const Cards = ({ users, onDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Cards;
