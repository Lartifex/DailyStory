import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import backButton from "../svg/backButton.svg";
import "./styles/newStory.css";
import NewStory from "../components/NewStory";

const NewStoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Text Input
  const [userStoryText, setUserStoryText] = useState("");

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

  const handleInputChange = (event) => {
    setUserStoryText(event.target.value);
  };

  // Add the user's story; postUserStory(BK)
  const saveUserStory = async () => {
    const userStoryBody = {
      originalStoryId: id,
      userText: userStoryText,
      imgB64: storyData.imgB64,
      text: storyData.text,
      title: storyData.title,
      genre: storyData.genre,
      creationDate: storyData.date,
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

  // To automatically scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // defines the transition animation
    });
  };

  return (
    <div className="NewStoryPage">
      <div className="backButton">
        <Link to="/">
          <img src={backButton} alt="Back Button" />
        </Link>
      </div>

      <NewStory storyData={{ ...storyData }} />
      <div className="inputField">
        <textarea
          name="storytextarea"
          placeholder="And now... what happens?"
          value={userStoryText}
          onChange={handleInputChange}
          onClick={scrollToBottom}
          maxLength={300}
        />
      </div>
      <div onClick={saveUserStory} className="theEndContainer">
        <div className="textboxTitle">
          <h3>THE END</h3>
        </div>
      </div>
    </div>
  );
};

export default NewStoryPage;
