import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewStory = ({ storyData }) => {
  return (
    <div>
      <div className="imgCover">
        <img
          src={`data:image/png;base64,${storyData.imgB64}`}
          alt="Story Cover"
        />
      </div>
      <h1>{storyData.title}</h1>
      <p>{storyData.text}</p>
    </div>
  );
};

export default NewStory;
