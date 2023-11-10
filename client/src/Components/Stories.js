import React from "react";
import Story from "./Story.js";
import "./styles/stories.css";

const Stories = ({ stories, onChosen }) => {
  const storiesArray = stories.stories;

  return (
    <>
      <h1>Hi, Name!</h1>
      <h2>Choose your daily story:</h2>
      {storiesArray &&
        storiesArray.map((story) => (
          <Story key={story._id} story={story} onChosen={onChosen} />
        ))}
    </>
  );
};

export default Stories;
