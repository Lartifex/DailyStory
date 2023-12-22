import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { fetchTodayStories } from './services/stories.js';
import ProtectedRoute from './hooks/ProtectedRoute.js';
import NewStoryPage from './pages/NewStoryPage.js';
import SavedStoryPage from './pages/SavedStoryPage.js';
import MyStoriesPage from './pages/MyStoriesPage.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LogInPage.js';
import Register from './components/Register/Register.js';

const App = () => {
  const {
    data: stories,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['stories'],
    queryFn: () => fetchTodayStories(),
    options: {
      staleTime: Infinity,
    },
  });

  if (isLoading) return <div>Loading stories...</div>;
  if (isError) return <div>Error fetching stories.</div>;

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
