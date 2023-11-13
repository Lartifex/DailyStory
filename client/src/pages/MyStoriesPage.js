import { useState, useEffect } from "react";
import Footer from "../components/Footer.js";
import UserStories from "../components/UserStories.js";

const MyStoriesPage = () => {
  const [allUsersStories, setAllUsersStories] = useState([]);

  const getAllUserStories = async () => {
    const res = await fetch(`http://localhost:3001/userstories`);
    if (res) {
      const response = await res.json();
      setAllUsersStories(response);
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  };

  useEffect(() => {
    getAllUserStories();
  }, []);

  return (
    <div className="containerWithFooter">
      <h1>My daily stories</h1>
      <h2>All stories:</h2>
      <div className="storiesScroll">
        <UserStories userStories={allUsersStories} />
      </div>
      <Footer />
    </div>
  );
};

export default MyStoriesPage;
