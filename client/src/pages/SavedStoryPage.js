import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import heart from "../svg/heart.svg";
import send from "../svg/send.svg";
import "./styles/savedStory.css";
import backButton from "../svg/backButton.svg";

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
  }, [id]);

  return (
    <div className="containerWithFooter">
      <div className="backButton">
        <Link to="/my-stories">
          <img src={backButton} alt="Back Button" />
        </Link>
      </div>
      <div className="imgCover">
        <img
          src={`data:image/png;base64,${userStoryData.imgB64}`}
          alt="Story Cover"
        />
      </div>
      <div className="CreatedOnText">
        <p>
          <span>Created on: </span>
          {userStoryData.creationDate
            ? format(new Date(userStoryData.creationDate), "MMMM do, yyyy")
            : "Loading date..."}
        </p>
      </div>
      <div className="TitleStory">
        <h1>{userStoryData.title}</h1>
      </div>
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
