import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import backButton from "../svg/backButton.svg";
import "./newStory.css";
import NewStory from "../components/NewStory";

const NewStoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Text Input
  const [userStoryText, setUserStoryText] = useState("");

  const handleInputChange = (event) => {
    setUserStoryText(event.target.value);
  };

  // Add the user's story; postUserStory(BK)
  const saveUserStory = async () => {
    const userStoryBody = {
      originalStoryId: id,
      userText: userStoryText,
    };

    const res = await fetch(`http://localhost:3001/userstories`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userStoryBody),
    });
    const response = await res.json();
    const newId = response._id;

    if (res.ok) {
      navigate(`/my-stories/${newId}`);
    }
  };

  return (
    <div className="NewStoryPage">
      <Link to="/">
        <img src={backButton} alt="Back Button" />
      </Link>
      <NewStory />
      <div className="inputField">
        <textarea
          name="storytextarea"
          placeholder="And now... what happens?"
          value={userStoryText}
          onChange={handleInputChange}
          maxLength={300}
        />
      </div>
      <div onClick={saveUserStory}>
        <div className="textboxTitle">
          <h3>THE END</h3>
        </div>
      </div>
    </div>
  );
};

export default NewStoryPage;
