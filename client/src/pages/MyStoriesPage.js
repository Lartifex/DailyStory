import { useState, useEffect } from "react";
import Footer from "../components/Footer.js";
import UserStories from "../components/UserStories.js";

const MyStoriesPage = () => {
  const [allUsersStories, setAllUsersStories] = useState([]);
  const [isFavoritesFilterOn, setIsFavoritesFilterOn] = useState("false");

  const getUserStories = async () => {
    const res = await fetch(
      `http://localhost:3001/userstories?isFavorite=${isFavoritesFilterOn}`
    );
    if (res) {
      const response = await res.json();
      setAllUsersStories(response);
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  };

  useEffect(() => {
    getUserStories();
  }, [isFavoritesFilterOn]);

  return (
    <div className="containerWithFooter">
      <h1>My daily stories</h1>
      <h2>Sort by:</h2>
      <button onClick={() => setIsFavoritesFilterOn("false")}>All</button>
      <button onClick={() => setIsFavoritesFilterOn("true")}>Favorites</button>
      {/* onClick execute a function that sorts by Liked*/}
      <div className="storiesScroll">
        <UserStories userStories={allUsersStories} />
      </div>
      <Footer />
    </div>
  );
};

export default MyStoriesPage;
