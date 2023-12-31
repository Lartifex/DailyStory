import { ReactComponent as Heart } from "../svg/heart-solid.svg";
import "../pages/styles/savedStory.css";

const LikeButton = ({ active, markAsFavorite }) => {
  return (
    <div className="heartIcon" style={{ width: "2.2rem" }}>
      <Heart
        isactive={active}
        onClick={() => markAsFavorite(!active)}
        className={`customHeart${active ? " active" : ""}`}
      />
    </div>
  );
};

export default LikeButton;
