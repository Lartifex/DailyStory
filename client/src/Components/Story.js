import React from "react";

const Story = ({ story }) => {
  return (
    <div class="container">
      <img src={story.url} alt="StoryCover" />
      <h1>{story.title}</h1>
      <h3>{story.genre}</h3>
    </div>
  );
};

export default Story;
