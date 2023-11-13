import Story from "./Story.js";
import { Link } from "react-router-dom";

const UserStories = ({ userStories }) => {
  return (
    <>
      {userStories &&
        userStories
          .sort((a, b) => (a.creationDate > b.creationDate ? 1 : -1))
          .map((story) => (
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
