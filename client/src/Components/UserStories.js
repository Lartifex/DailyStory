import Story from "./Story.js";
import "./styles/stories.css";
import { Link } from "react-router-dom";

const UserStories = ({ userStories }) => {
  console.log("userStories: ", userStories);
  return (
    <>
      {userStories &&
        userStories.map((story) => (
          <Link
            to={`/my-stories/${story._id}`}
            style={{ textDecoration: "none" }}
            key={story._id}
          >
            <Story story={story} />
          </Link>
        ))}
    </>
  );
};

export default UserStories;
