import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import backButton from "../svg/backButton.svg";
import "./newStory.css";

const NewStory = () => {
  const { id } = useParams();

  // Text Input
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

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
    <div className="NewStory">
      <Link to="/">
        <img src={backButton} alt="Back Button" />
      </Link>
      <div className="imgCover">
        <img src={storyData.url} alt="Story Cover" />
      </div>
      <h1>{storyData.title}</h1>
      <p>{storyData.text}</p>
      <p>{inputValue}</p>
      <Link to="/my-stories/saved">
        <div className="textboxTitle">
          <h3>THE END</h3>
        </div>
      </Link>
      <div className="inputField">
        <input
          name="myInput"
          placeholder="And now... what happens?"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default NewStory;
