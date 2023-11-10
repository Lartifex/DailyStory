import "./App.css";
import { useState, useEffect } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Stories from "./components/Stories.js";
import HomeIcon from "./svg/HomeIcon.svg";
import MyStories from "./svg/MyStories.svg";
import Profile from "./svg/Profile.svg";

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const storiesFromServer = await fetchStories();
      setStories(storiesFromServer);
    };
    getStories();
  }, []);

  const fetchStories = async () => {
    const res = await fetch(`http://localhost:3001/stories/today`);
    const data = await res.json();

    console.log(data);
    return data;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stories stories={stories} />}></Route>
        <Route path="/story">{/* Chosen story component*/}</Route>
        <Route path="/my-stories">{/* All my stories component */}</Route>
      </Routes>
      <div className="footer">
        <Link to="/">
          {" "}
          <img src={HomeIcon} alt="Home Logo" />
        </Link>
        <Link to="/my-stories">
          {" "}
          <img src={MyStories} alt="MyStories Logo" />
        </Link>
        <Link to="/profile">
          {" "}
          <img src={Profile} alt="Profile Logo" />
        </Link>
      </div>
    </BrowserRouter>
  );
}

// TODO: Link to the story that you are writting from clicking the CoverIMG (url)
// -->  <Link to="/story">Story</Link>

export default App;
