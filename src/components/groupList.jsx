import React from "react";

const GroupList = ({ imageItems, onImageSelect }) => {
  return (
    <div className="image-list">
      {imageItems.map((image) => (
        <a>
          <img
            src={require(`../images/${image}`)}
            alt="image"
            onClick={() => onImageSelect(image)}
          />
        </a>
      ))}
    </div>
  );
};

export default GroupList;
