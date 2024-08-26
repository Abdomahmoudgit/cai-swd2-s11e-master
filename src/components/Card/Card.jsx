import React from "react";

const Card = ({ user, onDelete }) => {
  return (
    <div
      style={{ backgroundColor: "gray", margin: "20px", textAlign: "center" }}
    >
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>City: {user.city}</div>
      <div>Edu: {user.edu}</div>
      <button onClick={() => onDelete(user.id)}>Delete</button> {/* زر الحذف */}
    </div>
  );
};

export default Card;
