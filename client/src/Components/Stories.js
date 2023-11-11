import React from "react";
import Story from "./Story.js";
import "./styles/stories.css";
import { Link } from "react-router-dom";

const Stories = ({ stories }) => {
  console.log("stories: ", stories);
  return (
    <>
      {stories &&
        stories.map((story) => (
          <Link
            to={`/new-story/${story._id}`}
            style={{ textDecoration: "none" }}
            key={story._id}
          >
            <Story story={story} />
          </Link>
        ))}
    </>
  );
};

export default Stories;
