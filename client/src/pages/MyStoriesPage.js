import React from "react";
import Story from "../components/Story.js";
import "../App.css";

const MyStoriesPage = ({ stories, onChosen }) => {
  const storiesArray = stories.stories;

  return (
    <div>
      <h1>My daily stories</h1> <br />
      <h2>All stories:</h2>
      <div className="list_scroll">
        {storiesArray &&
          storiesArray.map((story) => (
            <Story key={story._id} story={story} onChosen={onChosen} />
          ))}
      </div>
      <h2>My favorites:</h2>
      <div>{/* scroll favorite stories */}</div>
    </div>
  );
};

export default MyStoriesPage;
