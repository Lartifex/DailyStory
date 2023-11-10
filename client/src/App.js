import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stories from "./components/Stories.js";
import Footer from "./components/Footer.js";
import StoryPage from "./pages/StoryPage.js";
import MyStoriesPage from "./pages/MyStoriesPage.js";

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

  const fetchChosenStory = async (_id) => {
    await fetch(`http://localhost:3001/stories/today/${_id}`, {
      method: "GET",
    }).then(setStories(stories.stories.filter((story) => story._id === _id)));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Stories stories={stories} onChosen={fetchChosenStory} />}
        ></Route>
        <Route path="/story" element={<StoryPage />}></Route>
        <Route path="/my-stories" element={<MyStoriesPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// TODO: Link to the story that you are writting from clicking the CoverIMG (url)
// -->  <Link to="/story">Story</Link>

export default App;
