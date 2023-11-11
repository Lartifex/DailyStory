import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewStory = () => {
  const { id } = useParams();

  // To fetch stories by Id
  const [storyData, setStoryData] = useState({});

  const fetchChosenStory = async (_id) => {
    try {
      const response = await fetch(`http://localhost:3001/stories/${_id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const story = await response.json();
        setStoryData(story);
        console.log(story);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchChosenStory(id);
  }, [id]);

  return (
    <div>
      <div className="imgCover">
        <img src={storyData.url} alt="Story Cover" />
      </div>
      <h1>{storyData.title}</h1>
      <p>{storyData.text}</p>
    </div>
  );
};

export default NewStory;
