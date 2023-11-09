import React from "react";
import Story from "./Story";

const Stories = ({ stories }) => {
  const storiesArray = stories.stories;

  return (
    <>
      {storiesArray &&
        storiesArray.map((story) => <Story key={story._id} story={story} />)}
    </>
  );
};

export default Stories;
