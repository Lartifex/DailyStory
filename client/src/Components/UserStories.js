import Story from "./Story.js";
import { Link } from "react-router-dom";

const UserStories = ({ userStories }) => {
  return (
    <div className="storiesScroll">
      {userStories &&
        userStories
          .sort((a, b) => (b.creationDate > a.creationDate ? 1 : -1))
          .map((story) => (
            <Link
              to={`/my-stories/${story._id}`}
              style={{ textDecoration: "none" }}
              key={story._id}
            >
              <Story story={story} />
            </Link>
          ))}
    </div>
  );
};

export default UserStories;
