import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "./styles/savedStory.css";
import backButton from "../svg/backButton.svg";
import LikeButton from "../components/LikeButton";

const SavedStoryPage = () => {
  const { id } = useParams();
  const [userStoryData, setUserStoryData] = useState({});
  const [active, setFavorite] = useState(false);

  const getUserStory = async () => {
    const res = await fetch(`http://localhost:3001/userstories/${id}`);
    if (res) {
      const response = await res.json();
      setUserStoryData(response);
      if (response.isFavorite) {
        setFavorite(true);
      }
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  };

  const markAsFavorite = async (active) => {
    // call backend to store as favorite
    const res = await fetch(`http://localhost:3001/setfavorite`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        isFavorite: active,
      }),
    });

    if (res.ok) {
      setFavorite(active);
    } else {
      throw new Error(`HTTP error! status: ${res.status}`);
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
        <div className="savedStory">
          <LikeButton active={active} markAsFavorite={markAsFavorite} />
        </div>
      </div>
      <div className="titleStory">
        <h1>{userStoryData.title}</h1>
      </div>
      <p>{userStoryData.text}</p>
      <p>{userStoryData.userText}</p>
      <div className="createdOnText">
        <p>
          <span>Created on: </span>
          {userStoryData.creationDate
            ? format(new Date(userStoryData.creationDate), "MMMM do, yyyy")
            : "Loading date..."}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SavedStoryPage;
