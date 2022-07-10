import React, { Component } from "react";

const GroupList = ({ imageItems }) => {
  return (
    <div className="image-list">
      {imageItems.map((image) => (
        <img src={require(`../images/${image}`)} alt="image" />
      ))}
    </div>
  );
};

export default GroupList;
