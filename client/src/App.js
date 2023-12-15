import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './hooks/ProtectedRoute.js';
import NewStoryPage from './pages/NewStoryPage.js';
import SavedStoryPage from './pages/SavedStoryPage.js';
import MyStoriesPage from './pages/MyStoriesPage.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LogInPage.js';
import Register from './components/Register/Register.js';

const App = () => {
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
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage stories={stories} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-story/:id"
          element={
            <ProtectedRoute>
              <NewStoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-stories"
          element={
            <ProtectedRoute>
              <MyStoriesPage stories={stories} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-stories/:id"
          element={
            <ProtectedRoute>
              <SavedStoryPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
