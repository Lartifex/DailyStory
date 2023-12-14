import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewStoryPage from './pages/NewStoryPage.js';
import SavedStoryPage from './pages/SavedStoryPage.js';
import MyStoriesPage from './pages/MyStoriesPage.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import Register from './components/Register/Register.js';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const storiesFromServer = await fetchTodayStories();
      setStories(storiesFromServer.stories);
    };
    getStories();
  }, []);

  const fetchTodayStories = async () => {
    const res = await fetch(`http://localhost:3001/stories/today`);
    const data = await res.json();
    return data;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage stories={stories} />} />
      <Route path="/new-story/:id" element={<NewStoryPage />} />
      <Route path="/my-stories" element={<MyStoriesPage stories={stories} />} />
      <Route path="/my-stories/:id" element={<SavedStoryPage />} />
    </Routes>
  );
}

export default App;
