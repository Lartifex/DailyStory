import React from "react";
import "./Story.css";

const Story = ({ story }) => {
  return (
    <div className="container">
      <img src={story.url} alt="Story Cover" />
      <div className="textboxTitle">
        <h1>{story.title}</h1>
      </div>
      <div className="textboxGenre">
        <h1>{story.genre}</h1>
      </div>
    </div>
  );
};

export default Story;
