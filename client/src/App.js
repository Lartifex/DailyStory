import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.js";
import StoryPage from "./pages/StoryPage.js";
import MyStoriesPage from "./pages/MyStoriesPage.js";
import Profile from "./pages/Profile.js";
import HomePage from "./pages/HomePage.js";

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const storiesFromServer = await fetchStories();
      setStories(storiesFromServer.stories);
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
        <Route path="/" element={<HomePage stories={stories} />}></Route>
        <Route path="/new-story/:id" element={<StoryPage />}></Route>
        <Route
          path="/my-stories"
          element={<MyStoriesPage stories={stories} />}
        ></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
