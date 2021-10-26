import React from "react";
import VideoCardItem from "./VideoCardItem";
import "../styles/Videos.css";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map(function (item, index) {
        return (
          <VideoCardItem
            key={index}
            name={item.name}
            image={item.image}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Videos;
