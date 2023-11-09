import "./App.css";
import { useState, useEffect } from "react";
import Stories from "./Components/Stories.js";

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
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
      <Stories stories={stories} />
    </div>
  );
}

export default App;
