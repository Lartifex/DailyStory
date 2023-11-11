import React, { useState, useEffect } from "react";
import "../App.css";
import Footer from "../components/Footer.js";
import Story from "../components/Story.js";

const MyStoriesPage = () => {
  const [allUsersStories, setAllUsersStories] = useState([]);

  const getAllUserStories = async () => {
    const res = await fetch(`http://localhost:3001/userstories`);
    if (res) {
      const response = await res.json();
      setAllUsersStories(response);
    }
  };

  useEffect(() => {
    getAllUserStories();
  });

  return (
    <div>
      <h1>My daily stories</h1> <br />
      <h2>All stories:</h2>
      <>
        {allUsersStories &&
          allUsersStories.map((story) => (
            <Story story={story} key={story._id} />
          ))}
      </>
      <Footer />
    </div>
  );
};

// const storiesArray = stories;
// <div className="list_scroll">
// {storiesArray &&
//   storiesArray.map((story) => (
//     <Story key={story._id} story={story} onChosen={onChosen} />
//   ))}
// </div>
// <h2>My favorites:</h2>
// <div>{/* scroll favorite stories */}</div>

export default MyStoriesPage;
