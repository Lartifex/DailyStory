import React from "react";
import "./styles/story.css";

const Story = ({ story, onChosen }) => {
  return (
    <div className="container" onClick={() => onChosen(story._id)}>
      <img src={story.url} alt="Story Cover" />
      <div className="textboxTitle">
        <h3>{story.title}</h3>
      </div>
      <div className="textboxGenre">
        <h3>{story.genre}</h3>
      </div>
    </div>
  );
};

export default Story;
