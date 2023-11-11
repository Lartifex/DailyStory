import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import heart from "../svg/heart.svg";
import send from "../svg/send.svg";
import "./savedStory.css";
import { useParams } from "react-router-dom";

const SavedStoryPage = () => {
  const { id } = useParams();
  const [userStoryData, setUserStoryData] = useState({});

  const getUserStory = async () => {
    const res = await fetch(`http://localhost:3001/userstories/${id}`);
    if (res) {
      const response = await res.json();
      setUserStoryData(response);
    }
  };

  useEffect(() => {
    getUserStory();
  });

  return (
    <div>
      <div className="imgCover">
        <img src={userStoryData.url} alt="Story Cover" />
      </div>
      <h1>{userStoryData.title}</h1>
      <p>{userStoryData.text}</p>
      <p>{userStoryData.userText}</p>
      <div className="SavedStory">
        <div className="button">
          <img src={heart} alt="heart" />
        </div>
        <div className="button">
          <img src={send} alt="send" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedStoryPage;
